/**
 * This module exports a VS Code extension that provides commands for refactoring and improving code.
 * The available commands are:
 *  - refactorCode: refactors the code by applying a set of predefined rules
 *  - improveCode: improves the code by applying a set of predefined optimizations
 *  - enhanceCodeFromComments: improves the code based on comments that start with the "ChatGPT:" tag.
 *  - modularizeCode: modularizes the code by splitting it into smaller, more manageable modules
 *  - improveDesignPatterns: improves the code by applying a set of predefined design patterns
 *  - documentCode: documents the code by generating comments for the functions and classes
 *
 */

const vscode = require('vscode');
const { refactorCode, improveCode, enhanceCodeFromComments, modularizeCode, improveDesignPatterns, documentCode } = require('./src/chatgptAPI');

/**
 * Handles the code refactoring and improving command
 * @param {TextEditor} editor - a VS Code TextEditor object representing the currently active editor
 * @param {string} commandType - a string representing the type of command to be executed, matching one of the available commands
 * @returns {Promise<void>} - a Promise that resolves when the command is executed
 */
async function handleCodeCommand(editor, commandType) {
  const selectedCode = editor.document.getText(editor.selection);
  const availableCommands = {
    refactor: refactorCode,
    improve: improveCode,
    modularize: modularizeCode,
    improveDesignPatterns: improveDesignPatterns,
    enhanceFromComments: enhanceCodeFromComments,
    document: documentCode
  };
  
  // Check if the commandType is valid
  if (!availableCommands[commandType]) {
    vscode.window.showErrorMessage(`Invalid command type: ${commandType}`);
    return;
  }
  
  // Call the appropriate function based on the commandType
  const refactoredCode = await availableCommands[commandType](selectedCode);
  
  // Replace the selected code with the refactored code
  if (refactoredCode) {
    editor.edit((editBuilder) => {
      editBuilder.replace(editor.selection, refactoredCode);
    });
  } 
  // Show error messages if there is no code selected or if the code fails to be refactored
  else {
    if (selectedCode) {
      vscode.window.showErrorMessage(`Failed to ${commandType} code.`);
    } else {
      vscode.window.showErrorMessage('No code selected.');
    }
  }
}

/**
 * Activates the code refactoring and improving commands
 * @param {ExtensionContext} context - a VS Code ExtensionContext object representing the extension context
 * @returns {void}
 */
function activate(context) {
  context.subscriptions.push(
    vscode.commands.registerTextEditorCommand('extension.refactorCode', (editor) => handleCodeCommand(editor, 'refactor')),
    vscode.commands.registerTextEditorCommand('extension.improveCode', (editor) => handleCodeCommand(editor, 'improve')),
    vscode.commands.registerTextEditorCommand('extension.modularizeCode', (editor) => handleCodeCommand(editor, 'modularize')),
    vscode.commands.registerTextEditorCommand('extension.documentCode', (editor) => handleCodeCommand(editor, 'document')),
    vscode.commands.registerTextEditorCommand('extension.enhanceCodeFromComments', (editor) => handleCodeCommand(editor, 'enhanceFromComments')),
    vscode.commands.registerTextEditorCommand('extension.improveDesignPatterns', (editor) => handleCodeCommand(editor, 'improveDesignPatterns'))
  );
}

exports.activate = activate;