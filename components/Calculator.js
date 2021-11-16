import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Linking } from 'react-native';

function link() {
    Linking.openURL('https://wsdb.xyz/calc/pt');
}

export default function Calculator() {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.title}>Calculadora Warspear</Text>
                <Image 
                    style={styles.image}
                    source={require('../assets/calculator.png')}
                />
                
            
                <View style={styles.containerText}>
                    <Text style={styles.text}>
                        A calcudora Warspear, é um recurso disponibilizado online por terceiros, que possibilitam ao 
                        ao jogador montar seu personagem com os equipamentos disponíveis no jogo, para que o mesmo possa 
                        poder escolher as melhores combinações para o hério, assim poderá jogar com os equipamentos que irá 
                        utilizar em mente e logo ir em busca de adquiri-los.
                    </Text>

                    <Image 
                        style={styles.imageClass}
                        source={require('../assets/classeandHero.png')}
                    />

                    <Text style={styles.text}>Nesta parte da calcudora, o jogador pode escolher a facção da qual faz parte ou pretende fazer, e escolhê-la, já
                        na parte inferior ele poderá escolher entre as classes da facção escolhida.
                    </Text>
                </View>

                

                <TouchableOpacity
                    style={styles.button}
                    onPress={link}
                >
                    <Text style={styles.textButton}>Ir para a Calculadora</Text>
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
        width: '88%',
        height: 400,
        justifyContent: 'center',
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