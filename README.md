# Example

This is a generic React Native Accelerator
This Accelerator acts as a template for new react-native projects

Developer Names:

Meghna Malhotra

## Usage

npx react-native init SomeProject --template https://github.com/meghnamalhotra/react-native-app-template.git

This will create a new react-native project named "SomeProject" with all the files, folders and dependencies from the accelerator

## Key Features

The template project consists of following:

- Folder structure
- Network Manager to manage API calls
- SafeArea and Network Status React context to access safeArea insets and connection status anywhere in the component tree
- React Components are functional components to get advantage of React Hooks
- A custom Touchable component which have the provision to check the connection status before calling the onPress function
- A HOC(Wrapper Component) will be used for App screen to provide SafeAreaInsets, Connection Status and Loader functionality
- Utility files to work on i.e. Moment Util, Logger Util, Async Util
- Navigational setup- react-native-gesture-handler, react-native-reanimated, react-native-screens
  @react-navigation/native, @react-navigation/native-stack, "@react-navigation/bottom-tabs are the libraries providing
  the same. The route file is NavigationRoutes.js
- Basic Navigators Stack, Tab and Drawer along with there screenOptions inside navigationRoutes folder
- Redux setup - Redux thunk as middleware and Redux persist for persistence
- Flipper(Debugging tool) enabled and plugins for async storage and redux logger
- Environment setup(DEV, QA, UAT and PROD)
- Product flavors created in android to for each different environment
- iOS build schemes created for each different environment

## Before you start

You need to setup following environment in your system to run react-native project.

- follow the instructions at https://reactnative.dev/docs/environment-setup.
- Install Java 15 and set its path globally in your system [Link](https://docs.oracle.com/en/java/javase/15/install/installation-jdk-macos.html#GUID-2FE451B0-9572-4E38-A1A5-568B77B146DE)
- Download and install Android studio and set its SDK path globally in your system [Link](https://developer.android.com/studio)
- Download and install node v16.X.X [Link](https://nodejs.org/en/download/)
- Install Android Studio [Link](https://developer.android.com/studio/)
- Install xCode (Mac Only)
- Install brew, [Link] (https://brew.sh/).
- Install cocoapods using 'brew install cocoapods' command on terminal.
- For M1 Mac enable the option `Open using Rosetta` Xcode -> Get Info -> Open using Rosetta.
- Download and install vsCode editor [Link](https://code.visualstudio.com/download)

## Versioning for tool

- React native : 0.71.4
- Node : 18.0.0
- Android studio : Android Studio Electric Eel | 2022.1.1 Patch 2
- Gradle: 7.5.1
- xCode : 14.0.0 and above

## Test the template and setup

- iOS Xcode all set up e.g. you can build and run a sample app.
- Android SDK all set up e.g. you can build and run a sample app.
- Get SSH of your system and add in your profile. [Link](https://docs.github.com/en/enterprise-server@3.1/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)
- Clone code from `git@github.com:studiographene/reactnativeboilerplate.git` while using SSH
- Go in to your project folder by `cd {Project_folder}/template` and install npm by `npm install` and then `npm run podInstall` to install pod dependencies for iOS.

## Getting started for Android

- Run `npm run android`
- To run for different environment refer to scripts sections inside package.json i.e for QA environment run `npm run androidQA`
- In case `Metro Bundler` does not start automatically so use `npm start` to start npm in your system

## Getting started for iOS

- Run `npm run ios`
- To run for different environment refer to scripts sections inside package.json i.e for QA environment run `npm run iosQA`
- In case `Metro Bundler` does not start automatically so use `npm start` to start npm in your system
  ​

## Releasing

- Do **not** generate releases unless you are somebody who has been properly authorized and trained.
- Check all the version #s against what has already been released via play store or the app stores or wireless installation tools. Bump the version #s as appropriate to maintain monotonically increasing values.

## Flipper Usage

- Flipper will open when you run application(android and ios)
- To manually open flipper run `npm run checkFlipper` it will open flipper it is installed on your system otherwise download the flipper application.
- Once Flipper app is open check for enabled plugins under Plugins section
- Add async-storage and redux-logger from plugin-manager section
- Enable Async storage, Network and ReduxLogger plugin under disabled plugin section
- Add breakpoints in source code inside Hermes Debugger(RN)

​

## Visual Studio IDE setup and extensions

​
Look for these extensions from the IDE:
​

- [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)
  ​ - [Color Highlight](https://marketplace.visualstudio.com/items?itemName=naumovs.color-highlight)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Flow Language Support](https://marketplace.visualstudio.com/items?itemName=flowtype.flow-for-vscode)
- [GitLens — Git supercharged](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)
- [Svg Preview](https://marketplace.visualstudio.com/items?itemName=SimonSiefke.svg-preview)
- [vscode-author-generator](https://marketplace.visualstudio.com/items?itemName=edwardhjp.vscode-author-generator)

