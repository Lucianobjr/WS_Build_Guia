import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import { DrawerItemList } from '@react-navigation/drawer';
import firebase from './Firebase';
import { FontAwesome, FontAwesome5, Ionicons } from '@expo/vector-icons';

function CustomDrawer({ navigation }) {

    function logoutFirebase() {
        firebase.auth().signOut().then(function() {
            
        }).catch(function(error) {
          alert(error);
        });
        navigation.navigate('Login');
      };

    return(
        <View style={styles.container}>
            <StatusBar 
                barStyle="dark-content"
                backgroundColor="#fff"
            />
                <Image 
                    source={require('../assets/warspear.jpg')}
                    style={styles.wallpaper}
                />
            <View style={styles.textArea}>
                <Text style={styles.describe}>Warspear Online</Text>
            </View>

            <View style={styles.containerButtons}>
                <FontAwesome5.Button
                    size={24}
                    name="user-shield"
                    color="#000"
                    backgroundColor="#fff"
                    onPress={() => navigation.navigate('Personagens')}
                >
                    Personagens
                </FontAwesome5.Button>

                <View style={{marginLeft: 5,}}>
                    <FontAwesome.Button
                        size={24}
                        name="flag"
                        color="#000"
                        backgroundColor="#fff"
                        onPress={() => navigation.navigate('Facções')}
                    >
                        Facções
                    </FontAwesome.Button>
                </View>
                <FontAwesome5.Button
                    size={24}
                    name="dragon"
                    color="#000"
                    backgroundColor="#fff"
                    onPress={() => navigation.navigate('Warspear Online')}
                >
                    Warspear Online?
                </FontAwesome5.Button>

            </View>

            <View style={{marginLeft: 15,}}>
                <FontAwesome5.Button
                        size={24}
                        name="wrench"
                        color="#000"
                        backgroundColor="#fff"
                        onPress={() => navigation.navigate('Calculadora')}
                    >
                        Calculadora
                    </FontAwesome5.Button>

                    <FontAwesome.Button
                        size={24}
                        name="map"
                        color="#000"
                        backgroundColor="#fff"
                        onPress={() => navigation.navigate('Mapa')}
                    >
                        Mapa
                    </FontAwesome.Button>

                    <Ionicons.Button
                        size={24}
                        name="newspaper"
                        color="#000"
                        backgroundColor="#fff"
                        onPress={() => navigation.navigate('Fórum')}
                    >
                        Fórum
                    </Ionicons.Button>
            </View>

            <View style={styles.exit}>
                <FontAwesome.Button
                    name="sign-out"
                    color="#fff"
                    backgroundColor="#000"
                    onPress={() => {logoutFirebase()}}
                >
                    Sair
                </FontAwesome.Button>
            </View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    textArea: {
        backgroundColor: '#171d31',
    },
    wallpaper: {
        width: "100%",
        height: 160,
    },
    describe: {
        marginLeft: 20,
        margin: 5,
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
    },
    button: {
      marginTop: 15,
      width: '30%',
      height: 50,
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center',
    },
    textButton: {
        color: '#000',
        fontSize: 16,
        margin: 10,
    },
    containerButtons: {
        marginLeft: 10,
    },
    exit: {
        position: 'absolute',
        left: 20,
        bottom: 20,
        elevation: 2,
        zIndex: 9,
    },
})

export default CustomDrawer;