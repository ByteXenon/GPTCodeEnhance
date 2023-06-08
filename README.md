# 🚀 GPT Code Enhance Extension

The GPT Code Enhance extension for **[Visual Studio Code](https://code.visualstudio.com/)** empowers developers to effortlessly enhance their codebase using the power of **[ChatGPT](https://chat.openai.com)**, a state-of-the-art language model developed by OpenAI. This extension seamlessly integrates with Visual Studio Code, providing a wide range of features to refactor, optimize, modularize, improve design patterns, and document code with ease, **all for free with no strings attached**.

![PreviewVSCodeGPT](https://github.com/ByteXenon/GPTCodeEnhance/assets/125568681/c2f79aff-7ddc-414e-a769-229c011e6029)


## Features ✨

- **Refactor Code**: Command: `refactorCode`
  - **Refactors your code** by applying a set of predefined rules.
  - Improves code quality and readability by automatically restructuring your codebase.

- **Improve Code**: Command: `improveCode`
  - **Optimizes your code** by applying a set of predefined optimizations.
  - Enhances performance, reduce redundancy, and improve code efficiency.

- **Enhance with tag**: Command: `EnhanceCodeWithTag`
  - **Improves the code** based on comments that start with the "ChatGPT:" tag.

- **Modularize Code**: Command: `modularizeCode`
  - **Breaks down your code** into smaller, more manageable modules.
  - Promotes code organization, reusability, and maintainability.

- **Improve Design Patterns**: Command: `improveDesignPatterns`
  - **Applies a set of predefined design patterns** to improve your code structure.
  - Enhances the scalability and maintainability of your codebase.

- **Document Code**: Command: `documentCode`
  - **Generates comments** for functions and classes to improve code documentation.
  - Enhances code readability and maintainability with automatic comment generation.


All commands are conveniently accessible through the context menu in Visual Studio Code, allowing you to enhance your code with just a few clicks.

## Getting Started 🚀

### Prerequisites

Before you can use the GPT Code Enhance extension, ensure you have the following:

- **[Visual Studio Code](https://code.visualstudio.com/)** installed on your machine.
- An active internet connection to download and use the extension.

### Installation

1. Open **[Visual Studio Code](https://code.visualstudio.com/)**.
2. Go to the Extensions view (Ctrl+Shift+X).
3. Search for "GPT Code Enhance" in the search bar.
4. Click the "Install" button next to the extension.
5. Once installed, you can start using the extension right away.

### Compiling from Source

1. Download the extension source by running the following command in your terminal:
```
git clone https://github.com/ByteXenon/GPTCodeEnhance.git
```
2. Navigate to the directory of the extension:
```
cd GPTCodeEnhance
```
3. Download the necessary modules and build the extension using the following commands:
```
make install
make package
```


## TODO 📝

The following features and improvements are planned for future updates:

- **Proxy support:** Enable the use of proxy configurations for API requests.
- **Custom prompt support:** Allow users to define their own prompts for code enhancement.
- **More prompts:** Expand the collection of predefined prompts for different enhancement scenarios.
- **Change API provider:** Explore alternative API providers for better performance and functionality.
- **Multiple built-in APIs:** Integrate multiple built-in APIs to provide flexibility and options for code enhancement.
- **HTML Window on the left:** Add an HTML window on the left side of the editor for enhanced visualization and interaction.

Stay tuned for future updates as we continue to enhance the GPT Code Enhance extension!

## Known Issues

The current API is too slow, I'm actively looking for alternative options to improve the performance.

If you encounter any issues or have questions, please check the **[GitHub Issues](https://github.com/ByteXenon/GPTCodeEnhance/issues)** to see if the problem has already been reported. If not, feel free to open a new issue with a detailed description of the problem you're facing.

## Contribution

**Contributions to the GPT Code Enhance extension are highly appreciated!** I value your feedback and contributions as they play a vital role in making this extension even better.

If you have any suggestions, bug reports, or feature requests, please feel free to open an issue on the **[GitHub Issues](https://github.com/ByteXenon/GPTCodeEnhance/issues)**. I would be more than happy to discuss and collaborate on enhancing the extension together.


## Similar projects

  -  **[chatgpt-vscode](https://github.com/timkmecl/chatgpt-vscode):** This project inspired me to create a more flexible and free alternative to GPT-powered code enhancement. 🌟
  -  **[vscode-chatgpt](https://github.com/gencay/vscode-chatgpt):** Another extension that utilizes ChatGPT to enhance code in Visual Studio Code.

## Project Status

Please note that the GPT Code Enhance extension is currently in a heavily developing stage and may still have limitations and ongoing improvements. While the extension is functional and provides valuable code enhancement features, there may be areas that require further refinement and optimization. Your feedback and contributions are greatly appreciated as I work towards making this extension even better.

I encourage you to stay updated with the latest releases and announcements to take advantage of new features and improvements. Thank you for your understanding and support as I continue to enhance the GPT Code Enhance extension.


## Privacy 🔒

This extension is both free and open source. It respects your privacy and does not collect any data from users. The only information that is sent to the server is the specific code that you explicitly select during the execution of one of the extension's commands. This selected code is then sent through a third-party GPT-3.5-turbo API for improvement. The API is not owned or controlled by me, and I have no control over its data collection practices. For this reason, it is recommended to avoid sending private or proprietary code through the API to ensure the security of your codebase.

## License

This extension is released under the AGPL-3 License. See **[AGPL-3](LICENSE)** for details.
