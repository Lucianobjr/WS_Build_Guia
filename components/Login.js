import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View,TextInput, TouchableOpacity, Image } from 'react-native';
import firebase from './Firebase';

export default function Login({ navigation }) {

  const [email, setEmail] = useState('');
  const [password,setPassword] = useState('');

  function loginFirebase() {
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error){
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorCode, errorMessage);
    });
    navigation.navigate('Initial')
  }

  useEffect(() => {
    firebase.auth().onAuthStateChanged(function(user) {
      if(user) {
        navigation.navigate('Initial');
      }else {
          navigation.navigate('Login');
      }
    });
  }, []);

  function createUserFirebase() {
    firebase.auth().createUserWithEmailAndPassword(email, password).then(function(error){
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorCode, errorMessage);
    })
    navigation.navigate('Initial')
  }

  return (
    <View style={styles.container}>

      <Image 
        style={styles.imageBack}
        source={require('../assets/warspear.png')}
      />

      <View style={styles.containerTitle}>
        <Image 
            style={styles.image}
            source={require('../assets/img.png')}
        />

        <Text style={styles.text}>WS BuildGuia</Text>
      </View>
    
      <TextInput 
        style={styles.input} 
        placeholder="Digite seu E-mail..." 
        onChangeText={texto => setEmail(texto)}
        value={email}  
      />

      <TextInput 
        style={styles.input} 
        placeholder="Digite sua Senha..." 
        onChangeText={texto => setPassword(texto)}
        value={password}  
      />

      <View style={styles.containerButton}>

        <TouchableOpacity 
            style={styles.button}
            onPress={() => {createUserFirebase()}}
        >
            <Text style={styles.textButton}>Criar usuário</Text>
        </TouchableOpacity>

        <TouchableOpacity 
            style={styles.button}
            onPress={() => {loginFirebase()}}  
        >
            <Text style={styles.textButton}>Login</Text>
        </TouchableOpacity>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#171d31',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textShadowColor: '#000',
    textShadowOffset: {width: 2, height: 2,},
    textShadowRadius: 1,
  },
  input: {
    width: '70%',
    height: 60,
    borderRadius: 5,
    backgroundColor: '#fff',
    marginTop: 10,
    textAlign: 'center',
    marginBottom: 5,
    position: 'relative',
    borderWidth: 2,
    borderColor: '#000',
  },
  button: {
    marginTop: 15,
    width: '30%',
    height: 50,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: '#fff',
    alignItems: 'center',
    backgroundColor: '#000',
    justifyContent: 'center',
  },
  containerButton: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
  },
  textButton: {
      color: '#fff',
      fontSize: 16,
      margin: 10,
  },
  containerTitle: {
    flexDirection: 'row',
    width: '70%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  image: {
    width: 50,
    height: 62,
  },
  imageBack: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    width: '100%',
    height: '100%',
  }
});
