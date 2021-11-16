import React from 'react';
import { StyleSheet, View, Image, ScrollView, Pressable, Text } from 'react-native';

export default function App({ navigation }) {
  return (
    <ScrollView style={styles.container}>
        <View style={styles.menuCards}>
          <View style={styles.card}>
            <Image style={styles.imageCard} source={require('./img/Mage.png')} />
            <Text style={styles.title}>Mago</Text>
            <Pressable
              style={styles.buttons}
              onPress={() => navigation.navigate('Mago')}
            />
          </View>
          <View style={styles.card}>
            <Image style={styles.imageCard} source={require('./img/Paladin.png')} />
            <Text style={styles.title}>Paladino</Text>
            <Pressable
              style={styles.buttons}
              onPress={() => navigation.navigate('Paladino')}
            />
          </View>
          <View style={styles.card}>
            <Image style={styles.imageCard2} source={require('./img/Priest.png')} />
            <Text style={styles.title}>Sacerdote</Text>
            <Pressable
              style={styles.buttons}
              onPress={() => navigation.navigate('Sacerdote')}
            />
          </View>
          <View style={styles.card}>
            <Image style={styles.imageCard5} source={require('./img/Seeker.png')} />
            <Text style={styles.title}>Explorador</Text>
            <Pressable
              style={styles.buttons}
              onPress={() => navigation.navigate('Explorador')}
            />
          </View>
          <View style={styles.card}>
            <Image style={styles.imageCard} source={require('./img/Templario.png.png')} />
            <Text style={styles.title}>Templário</Text>
            <Pressable
              style={styles.buttons}
              onPress={() => navigation.navigate('Templário')}
            />
          </View>
          <View style={styles.card}>
            <Image style={{flex: 1, width: '70%', height: '90%'}} source={require('./img/BladeDancer.png')} />
            <Text style={styles.title}>Dançarino das Lâminas</Text>
            <Pressable
              style={styles.buttons}
              onPress={() => navigation.navigate('Dançarino das Lâminas')}
            />
          </View>
          <View style={styles.card}>
            <Image style={{flex: 1, width: '90%', height: '55%', padding: 10,}} source={require('./img/Ranger.png')} />
            <Text style={styles.title}>Patrulheiro</Text>
            <Pressable
              style={styles.buttons}
              onPress={() => navigation.navigate('Patrulheiro')}
            />
          </View>
          <View style={styles.card}>
            <Image style={styles.imageCard2} source={require('./img/Druid.png')} />
            <Text style={styles.title}>Druida</Text>
            <Pressable
              style={styles.buttons}
              onPress={() => navigation.navigate('Druida')}
            />
          </View>
          <View style={styles.card}>
            <Image style={styles.imageCard3} source={require('./img/Warden.png')} />
            <Text style={styles.title}>Guarda</Text>
            <Pressable
              style={styles.buttons}
              onPress={() => navigation.navigate('Guarda')}
            />
          </View>
          <View style={styles.card}>
            <Image style={styles.imageCard} source={require('./img/Barbarian.png')} />
            <Text style={styles.title}>Bárbaro</Text>
            <Pressable
              style={styles.buttons}
              onPress={() => navigation.navigate('Bárbaro')}
            />
          </View>
          <View style={styles.card}>
            <Image style={styles.imageCard4} source={require('./img/Rogue.png')} />
            <Text style={styles.title}>Ladino</Text>
            <Pressable
              style={styles.buttons}
              onPress={() => navigation.navigate('Ladino')}
            />
          </View>
          <View style={styles.card}>
            <Image style={styles.imageCard} source={require('./img/Shaman.png')} />
            <Text style={styles.title}>Xamã</Text>
            <Pressable
              style={styles.buttons}
              onPress={() => navigation.navigate('Xamã')}
            />
          </View>
          <View style={styles.card}>
            <Image style={styles.imageCard3} source={require('./img/Hunter.png')} />
            <Text style={styles.title}>Caçador</Text>
            <Pressable
              style={styles.buttons}
              onPress={() => navigation.navigate('Caçador')}
            />
          </View>
          <View style={styles.card}>
            <Image style={styles.imageCard3} source={require('./img/Cacique.png.png')} />
            <Text style={styles.title}>Cacique</Text>
            <Pressable
              style={styles.buttons}
              onPress={() => navigation.navigate('Cacique')}
            />
          </View>
          <View style={styles.card}>
            <Image style={styles.imageCard} source={require('./img/DeathkNight.png')} />
            <Text style={styles.title}>Cavaleiro da Morte</Text>
            <Pressable
              style={styles.buttons}
              onPress={() => navigation.navigate('Cavaleiro da Morte')}
            />
          </View>
          <View style={styles.card}>
            <Image style={styles.imageCard} source={require('./img/Necromancer.png')} />
            <Text style={styles.title}>Necromante</Text>
            <Pressable
              style={styles.buttons}
              onPress={() => navigation.navigate('Necromante')}
            />
          </View>
          <View style={styles.card}>
            <Image style={styles.imageCard} source={require('./img/Warlock.png')} />
            <Text style={styles.title}>Bruxo</Text>
            <Pressable
              style={styles.buttons}
              onPress={() => navigation.navigate('Bruxo')}
            />
          </View>
          <View style={styles.card}>
            <Image style={styles.imageCard4} source={require('./img/Charmer.png')} />
            <Text style={styles.title}>Encantador</Text>
            <Pressable
              style={styles.buttons}
              onPress={() => navigation.navigate('Encantador')}
            />
          </View>
        </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  card: {
      width: '49%',
      height: 260,
      marginTop: 5,
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'center',
      alignContent: 'center',
      borderWidth: 2,
      borderRadius: 5,
      elevation: 1,
      backgroundColor: '#fff',
  },
  menuCards: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 13,
    flexWrap: 'wrap',
  },
  title: {
      position: 'absolute',
      bottom: 15,
      left: 10,
      fontSize: 22,
      color: '#fff',
      fontWeight: 'bold',
      textShadowColor: '#000',
      textShadowOffset: {width: 0, height: 0,},
      textShadowRadius: 9,
      shadowOpacity: 0.5,
  },
  imageCard: {
    flex: 1,
    width: '95%',
    height: '80%',
    margin: 10,
  },
  imageCard2: {
    flex: 1,
    width: '75%',
    height: '50%',
    padding: 10,
    margin: 5,
  },
  imageCard3: {
    flex: 1,
    width: 150,
    height: '90%',
    margin: 5,
  },
  imageCard4: {
    flex: 1,
    width: 100,
    height: '90%',
    margin: 5,
  },
  imageCard5: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    width: '100%',
    height: '77%',
    margin: 5,
  },
  buttons: {
    width: 185,
    height: 260,
    resizeMode: 'cover',
    position: 'absolute',
  },
});

