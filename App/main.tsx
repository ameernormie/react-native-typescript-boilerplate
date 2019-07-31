import 'Config';
import 'Config/ReactotronConfig';
import { AppRegistry } from 'react-native';
import App from 'Containers/App';
import { name as appName } from 'app.json';

AppRegistry.registerComponent(appName, () => App);
