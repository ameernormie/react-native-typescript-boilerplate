# React Native Typescript Boilerplate

---

Table of Content

- [Change Name of Project](#change-name-of-project)
- [Setting Up](#setting-up)
- [Features Provided](#features-provided)
- [Static Types](#static-types)
- [React](#react)
- [Testing](#testing)
- [Documentation](#documentation)
- [Storage](#storage)
- [Debugging](#debugging)
- [Project Structure](#project-structure)
- [Navigation](#navigation)
- [Data Transformations](#data-transformations)

## :arrow_up: Change name of the project

Rename the project name to the appropriate name that you want for the project. The best way to do that is to install the package [react-native-rename](https://github.com/junedomingo/react-native-rename)

Follow the steps for the package to rename the project

## :arrow_up: Setting Up

1. Clone this repo.
2. Move into the project directory.
3. Run `yarn install` or `npm install` to install the dependencies.
4. Install pods using `cd ios/ && pod install && cd ..`
5. Run project using `react-native run-ios`

## :arrow_up: Features Provided

1. `Typescript` integrated.
2. Linting setup.
3. Prettier config added.
4. [husky](https://github.com/typicode/husky) configured. `commit-msg` and `pre-commit` hooks added. - `commit-msg` hook makes sure you write [conventional-commit-msg](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional) - `pre-commit` hook runs **prettier** and **linting** before commiting.
5. State managed through [redux-saga](https://github.com/redux-saga/redux-saga)
6. [Reactotron](https://github.com/infinitered/reactotron) configured for debugging. Download the reactotron app from [here](https://github.com/infinitered/reactotron/releases).
   **Reactotron will automatically start logging once you build your app on IOS or Android.**
