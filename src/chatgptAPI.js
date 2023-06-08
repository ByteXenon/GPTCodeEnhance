/**
 * Module that provides functions to generate messages using the ChatGPT API with pre-defined prompts.
 * @module chatgptAPI
 */

const axios = require('axios');
const vscode = require('vscode');
const prompts = require('../data/prompts.json');

/**
 * Function that generates a message using the ChatGPT API with the given prompt.
 * @async
 * @param {string} prompt - The prompt to use for generating the message.
 * @returns {string} The generated message.
 */
async function generateMessage(prompt) {
  // Set up API request payload
  const data = {
    messages: [{ role: 'user', content: prompt }],
    stream: false,
    model: 'gpt-3.5-turbo',
    temperature: 0.6,
    presence_penalty: 0
  };

  // Make API request to the unofficial ChatGPT endpoint
  const response = await axios.post('https://gpt4.gravityengine.cc/api/openai/v1/chat/completions', data);

  // Return the generated message
  return response.data.choices[0].message.content;
}

/**
 * Function that retries generating a message up to 3 times in case of failure.
 * @async
 * @param {string} prompt - The prompt to use for generating the message.
 * @returns {string|null} The generated message, or null if all attempts fail.
 */
async function retryGenerateMessage(prompt) {
  const maxRetries = 3;
  const tripleBackticksRegex = /```([\s\S]*?)```/;

  // Escape triple backticks in the prompt
  const escapedPrompt = prompt.replace(/```/g, '\\`\\`\\`');
  
  let retryCount = 0;
  while (retryCount++ < maxRetries) {
    try {
      let message = await generateMessage(escapedPrompt);
      const match = tripleBackticksRegex.exec(message);

      if (match) {
        message = match[1];
      } 

      message = message.replace(/\\`\\`\\`/g, '```');
      return message;
    } catch (error) {
      console.error(`Failed to generate message: ${error}`);
      vscode.window.showErrorMessage('Bad message, retrying...');
    }
  }
  return null;
}

/**
 * Generates a message with a prompt and selected code
 * @param {string} selectedCode - The selected code to be inserted into the prompt.
 * @param {string} prompt - The prompt to be used for generating the message.
 * @returns {string|null} - The generated message, or null if all attempts fail.
 */
async function generateMessageWithPrompt(selectedCode, prompt) {
  const promptWithCode = prompt.replace("{selectedCode}", selectedCode);
  return await retryGenerateMessage(promptWithCode);
}

/**
 * Object that exports pre-defined functions with prompts for generating messages with the ChatGPT API.
 */
module.exports = {
  refactorCode: (selectedCode) => generateMessageWithPrompt(selectedCode, prompts.refactorCode),
  improveCode: (selectedCode) => generateMessageWithPrompt(selectedCode, prompts.improveCode),
  enhanceCodeFromComments: (selectedCode) => generateMessageWithPrompt(selectedCode, prompts.enhanceCodeFromComments),
  modularizeCode: (selectedCode) => generateMessageWithPrompt(selectedCode, prompts.modularizeCode),
  improveDesignPatterns: (selectedCode) => generateMessageWithPrompt(selectedCode, prompts.improveDesignPatterns),
  documentCode: (selectedCode) => generateMessageWithPrompt(selectedCode, prompts.documentCode)
};
