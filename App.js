import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Login from './components/Login';
import Initial from './components/Initial'

const AppNavigator = createSwitchNavigator({
  Login: Login,
  Initial: Initial,
}, {
  initialRouteName: 'Login',
});

export default createAppContainer(AppNavigator);