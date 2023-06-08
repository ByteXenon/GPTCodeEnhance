/**
 * Module that provides functions to generate messages using the ChatGPT API with pre-defined prompts.
 * @module chatgptAPI
 */

const axios = require('axios');
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
 * Function that retries generating a message up to 5 times in case of failure.
 * @async
 * @param {string} prompt - The prompt to use for generating the message.
 * @returns {string|null} The generated message, or null if all attempts fail.
 */
async function retryGenerateMessage(prompt) {
  for (let i = 0; i < 5; i++) {
    try {
      const message = await generateMessage(prompt);
      if (!/^```|```$/.test(message)) {
        return message.replace(/^```|```$/g, '');
      }
    } catch (error) {
      console.error(`Failed to generate message: ${error}`);
    }
    console.log('Bad message, retrying...');
  }
  return null;
}

/**
 * Function that generates a message using the ChatGPT API with a prompt that includes the selected code.
 * @async
 * @param {string} selectedCode - The selected code to include in the prompt.
 * @param {string} prompt - The prompt to use for generating the message, with "{selectedCode}" as a placeholder for the code.
 * @returns {string|null} The generated message, or null if all attempts fail.
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