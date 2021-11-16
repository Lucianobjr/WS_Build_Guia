import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../src/pages/Home';
import Barbarian from '../src/pages/classes/Barbarian';
import BladeDancer from '../src/pages/classes/BladeDancer';
import Charmer from '../src/pages/classes/Charmer';
import DeathKnight from '../src/pages/classes/DeathKnight';
import Druid from '../src/pages/classes/Druid';
import Hunter from '../src/pages/classes/Hunter';
import Mago from '../src/pages/classes/Mago';
import Necromancer from '../src/pages/classes/Necromancer';
import Paladin from '../src/pages/classes/Paladin';
import Priest from '../src/pages/classes/Priest';
import Ranger from '../src/pages/classes/Ranger';
import Rogue from '../src/pages/classes/Rogue';
import Seeker from '../src/pages/classes/Seeker';
import Shaman from '../src/pages/classes/Shaman';
import Shefe from '../src/pages/classes/Shefe';
import Templario from '../src/pages/classes/Templario';
import Warden from '../src/pages/classes/Warden';
import Warlock from '../src/pages/classes/Warlock';

const Stack = createStackNavigator();

export default function App() {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Classes" component={Home} />
        <Stack.Screen name="Bárbaro" component={Barbarian} />
        <Stack.Screen name="Dançarino das Lâminas" component={BladeDancer} />
        <Stack.Screen name="Encantador" component={Charmer} />
        <Stack.Screen name="Cavaleiro da Morte" component={DeathKnight} />
        <Stack.Screen name="Druida" component={Druid} />
        <Stack.Screen name="Caçador" component={Hunter} />
        <Stack.Screen name="Mago" component={Mago} />
        <Stack.Screen name="Necromante" component={Necromancer} />
        <Stack.Screen name="Paladino" component={Paladin} />
        <Stack.Screen name="Sacerdote" component={Priest} />
        <Stack.Screen name="Patrulheiro" component={Ranger} />
        <Stack.Screen name="Ladino" component={Rogue} />
        <Stack.Screen name="Explorador" component={Seeker} />
        <Stack.Screen name="Xamã" component={Shaman} />
        <Stack.Screen name="Cacique" component={Shefe} />
        <Stack.Screen name="Templário" component={Templario} />
        <Stack.Screen name="Guarda" component={Warden} />
        <Stack.Screen name="Bruxo" component={Warlock} />
      </Stack.Navigator>
  );
}

