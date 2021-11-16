import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Main from './Main';
import CustomDrawer from './Custom';
import Warspear from './Warspear';
import Calculator from './Calculator';
import Map from './Map';
import Forum from './Forum';
import Login from './Login';
import Carousel from './Carousel';

const Drawer = createDrawerNavigator();

export default function App({ navigation }) {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Personagens" drawerContent={CustomDrawer}>
        <Drawer.Screen name="Personagens" component={Main} />
        <Drawer.Screen name="Facções" component={Carousel} />
        <Drawer.Screen name="Warspear Online" component={Warspear} />
        <Drawer.Screen name="Calculadora" component={Calculator} />
        <Drawer.Screen name="Mapa" component={Map} />
        <Drawer.Screen name="Fórum" component={Forum} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}