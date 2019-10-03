# React Native Typescript Boilerplate

---

Table of Content

- [Change Name of the Project](#change-name-of-the-project)
- [Setting Up](#setting-up)
- [Features Provided](#features-provided)
- [Project Structure](#project-structure)
- [How to Make Api Calls](#how-to-make-api-calls)
- [React](#react)

## Change name of the project

Rename the project name to the appropriate name that you want for the project. The best way to do that is to install the package [react-native-rename](https://github.com/junedomingo/react-native-rename)

Follow these steps from the documentation of [react-native-rename](https://github.com/junedomingo/react-native-rename) to rename the project properly

## Setting Up

1. Clone this repo.
2. Move into the project directory.
3. Run `yarn install` or `npm install` to install the dependencies.
4. Install pods using `cd ios/ && pod install && cd ..`
5. **For IOS** Run project using `react-native run-ios`
6. **For Android** Run project using `react-native run-android`

## Features Provided

1. `Typescript` integrated.
2. Linting setup.
3. Prettier config added.
4. [husky](https://github.com/typicode/husky) configured. `commit-msg` and `pre-commit` hooks added. - `commit-msg` hook makes sure you write [conventional-commit-msg](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional) - `pre-commit` hook runs **prettier** and **linting** before commiting.
5. State managed through [redux-saga](https://github.com/redux-saga/redux-saga)
6. [Reactotron](https://github.com/infinitered/reactotron) configured for debugging. Download the reactotron app from [here](https://github.com/infinitered/reactotron/releases).
   **Reactotron will automatically start logging once you build your app on IOS or Android.**

## Project Structure

**Top Level Directory Layout**

```
.
|----     __tests__               Tests written for the app
|----     android                 Android directory (android configs)
|----     App                     Contains App code (Containers, Components ...)
|----     Asests                  Contains Fonts to be linked for the project
|----     custom_typings          Custom typings for the packages without types
|----     ios                     Ios directory (ios setup)
|----     .prettierrc             Contains prettier config for formatting
|----     commitlint.config.js    Contains conventional commit config
|----     index.ts                Starting point of the app
|----     react-native.config.js  https://github.com/react-native-community/cli/blob/master/docs/configuration.md#migration-guide)
|----     tsconfig.json           typescript config
|----     tslint.json             ts linting rules
```

**App Directory**

```
.
|----     Components                Common Components to be used in the app
|----     Config                    Config files
|----     Constants                 Constants to be used throughout the app
|----     Containers                Contains components for the screens
|----     Images                    Contains Image assets
|----     Lib                       Contains utils for the app
|----     Navigation                Contains React Navigation code for screens
|----     Reducers                  Reducers for the app
|----     Sagas                     Sagas for the reducers
|----     Services                  Services used for the app
|----     Themes                    Contains design UI related things
|----     Types                     Contains global types
```

## How To Make Api Calls

Firstly setup base url in `AppConfig.ts` in `Config` directory.

#### In Sagas:

Pass `Api` in the Action that you want to use in.
e.g

```
takeLatest(StartupTypes.STARTUP, startup, Api),
```

This `Api` will be accessible in the relevant saga in the action's first argument like this.

```
export function* startup(api) {
  ...
  ...
}
```

`Now Make The api call`

```
export function* startup(api) {
  try {
    const apiResponse = yield api({
      method: 'GET',
      url: '/todos/1', // This url will get appended in the base url
    });
    console.log('api response ', apiResponse);
  } catch (error) {
    console.log('error ', error);
  }
}
```

#### In Application:

Import `Api.ts` from the Services in whichever file you want to make the api call.

Use it like this.

```
import Api from '../Services/Api';  // Match your path here

api({
    method: 'GET',
    url: '/todos/1', // This url will get appended in the base url
}).then(success => {
    // success callback
}).catch(error => {
    // error call back
})
```

## React

React version `16.8.6` and React Native version `0.60.4` is used.
**React hooks are followed in the project.**
