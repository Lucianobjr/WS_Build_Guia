import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Linking } from 'react-native';

function link() {
    Linking.openURL('https://wsdb.xyz/map/pt/chosen/128');
}

export default function Calculator() {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.title}>Mapa do Warspear</Text>
                <Image 
                    style={styles.image}
                    source={require('../assets/mapa.png')}
                />
                
                <Text style={styles.info}>Mapa de Langasard - Ilha dos Primogênitos</Text>
            
                <View style={styles.containerText}>

                    <Text style={styles.text}>
                        Neste local é possível analisar os mapas do jogos para os conhecerem melhor antes de se aventurar, contudo 
                        durante o jogo o jogador irá se acostumar com o mapa sem nenhum problema, contanto, caso queira compreendê-lo 
                        está é uma boa opção.
                    </Text>

                    <Image 
                        style={styles.imageClass}
                        source={require('../assets/mapas.png')}
                    />

                    <Text style={styles.text}>No canto superior esquerdo da página, o jogador pode escolher qual mapa deseja observar 
                        e logo ao lado da opção de escolher os mapas, pode-se navegar entre os níveis mais baixo(Geralmente as cavernas) 
                        ou mais altos do mapa(Geralmente utilizado quando se esta nas cavernas), utilizando das setas disponíveis.
                    </Text>
                </View>

                

                <TouchableOpacity
                    style={styles.button}
                    onPress={link}
                >
                    <Text style={styles.textButton}>Ir para o Mapa</Text>
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
        width: '80%',
        height: 60,
        justifyContent: 'center',
        marginTop: 10,
        marginBottom: 10,
    },
    info: {
        fontSize: 16,
        textAlign: 'center',
    }
})