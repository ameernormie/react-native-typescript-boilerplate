import Config from 'Config/DebugConfig';
import Immutable from 'seamless-immutable';
import Reactotron from 'reactotron-react-native';
import { reactotronRedux as reduxPlugin } from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';

declare global {
  /* tslint:disable:interface-name */
  interface Console {
    tron: typeof Reactotron;
  }
  /* tslint:enable:interface-name */
}

if (Config.useReactotron) {
  // https://github.com/infinitered/reactotron for more options!

  // const scriptHostname = NativeModules.SourceCode.scriptURL
  //   .split('://')[1]
  //   .split(':')[0];
  // https://github.com/infinitered/reactotron for more options!
  Reactotron.configure({ name: 'App' })
    .useReactNative({
      errors: true,
      editor: true,
      overlay: true,
      asyncStorage: true,
      networking: true,
      storybook: true,
      devTools: true,
    })
    .use(
      reduxPlugin({
        onRestore: ({ nav, state }) => ({ ...Immutable(state), nav }),
      }),
    )
    .use(sagaPlugin({ except: ['dummy'] }))
    .connect();

  // Let's clear Reactotron on every time we load the app
  Reactotron.clear();

  // Totally hacky, but this allows you to not both importing reactotron-react-native
  // on every file.  This is just DEV mode, so no big deal.
  console.tron = Reactotron;
} else {
  /* Do Nothing. */
  const noop = () => undefined;
  // attach a mock so if things sneaky by our Config.useReactotron guards, we won't crash.
  console.tron = {
    benchmark: noop,
    clear: noop,
    close: noop,
    configure: noop,
    connect: noop,
    display: noop,
    error: noop,
    image: noop,
    log: noop,
    logImportant: noop,
    reportError: noop,
    use: noop,
    useReactNative: noop,
    warn: noop,
  };
}
