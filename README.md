# Prerequisites for Installing the Ionic Application (iOS/Android)

## General Prerequisites

Before starting, make sure you have installed the following tools:
- [Node.js](https://nodejs.org/) (LTS version recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- Make
  ```bash
  apt install make
  ```
- [Ionic CLI](https://ionicframework.com/docs/cli): Install it globally with the command:
```bash
npm install -g @ionic/cli
```
- Capacitor CLI: Install it globally with the command:
```bash
npm install -g @capacitor/cli
```

<details>
    <summary>MacOS</summary>
Xcode:
Download and install Xcode from the Mac App Store.
Make sure you have installed the command line tools with:

```bash
xcode-select --install
```

- Download Homebrew using the following command:
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

- Install CocoaPods using the following command:
```bash
brew install cocoapods
```
</details>

<details>
    <summary>Windows</summary>
</details>

## Instalation

1. Initiate the project by running the command
   ```bash
    make init
    ```
2. replace each environment variable with the correct one (The .env file is inside 1Password)
