import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Linking } from 'react-native';

function link() {
    Linking.openURL('https://forum.warspear-online.com/index.php?/forum/116-f%C3%B3rum-portugu%C3%AAs/');
}

export default function Calculator() {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Image 
                    style={styles.image}
                    source={require('../assets/ws.jpg')}
                />
                <Text style={styles.title}>Fórum Warspear Online</Text>
                
            
                <View style={styles.containerText}>
                    <Text style={styles.text}>
                        Para aqueles jogadores que gostam de criar tópicos de discusões para o jogo, ou que curtem visitar os 
                        fóruns de jogos para encontrar informações úteis para si, o warspear online possui um forum em português 
                        para nossos jogadores locais, portanto, dê uma olhada, talvez encontre algo interessante.
                    </Text>
                </View>

                <TouchableOpacity
                    style={styles.button}
                    onPress={link}
                >
                    <Text style={styles.textButton}>Visitar o Fórum</Text>
                </TouchableOpacity>

            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
    title: {
        margin: 20,
        fontSize: 18,
        justifyContent: 'center',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    image: {
        width: '100%',
        height: 205,
    },
    containerText: {
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center',
        width: '90%',
        margin: 20,
    },
    text: {
        fontSize: 18,
        margin: 10,
        textAlign: 'justify',
        justifyContent: 'center',
    },
    button: {
        justifyContent: 'center',
        margin: 20,
        backgroundColor: '#000',
        borderRadius: 5,
        width: '50%',
        height: 50,
    },
    textButton: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 18,
    },
    imageClass: {
        width: '95%',
        height: 80,
        justifyContent: 'center',
        marginTop: 10,
        marginBottom: 10,
    }
})