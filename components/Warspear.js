import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

export default function App() {
    return(
        <ScrollView>
                <Image 
                    style={styles.imagePrincipal}
                    source={require('../assets/warspear3.png')}
                />
                
            <View style={styles.container}>
                <Text style={styles.title}>Warspear Online</Text>
                <Text style={styles.text}>O Warspear Online é um jogo on-line gratuito popular no mundo todo. Uma jornada inesquecível e um 
                    papel único nesse MMORPG épico aguardam você!</Text>
            </View>
                <View style={styles.container}>
                    <Image 
                        source={require('../assets/bussola.png')}
                    />
                    <Text style={styles.title}>Um mundo de jogo Enorme</Text>
                    <Text style={styles.text}>Explore o universo exclusivo de Arinar! Essas terras vastas e misteriosas guardam muitos 
                        segredos e tesouros que esperam você. Participe dessa grande aventura, pois há muito o que 
                        se descobrir.</Text>
                </View>
                <View style={styles.container}>
                    <Image 
                        source={require('../assets/globo.png')}
                    />
                    <Text style={styles.title}>Milhões de jogadores</Text>
                    <Text style={styles.text}>Encontre amigos e crie sua própria guilda! Participe de batalhas, troque troféus e lute 
                        em torneios. A glória eterna aguarda todos que enfrentam os desafios.</Text>
                </View>
                <View style={styles.container}>
                    <Image 
                        source={require('../assets/aliancas.png')}
                    />
                    <Text style={styles.title}>Duas Alianças</Text>
                    <Text style={styles.text}>Escolha seu lado na Guerra da Lança! Os Sentinelas e a Legião são inimigos mortais que estão
                         em guerra há centenas de anos. Você é um guerreiro solitário, mas até o mais solitário dos 
                         guerreiros pode mudar o rumo da guerra.</Text>
                </View>
                <View  style={styles.container}>
                    <Image 
                        source={require('../assets/guerras.png')}
                    />
                    <Text style={styles.title}>Batalhas para Todos</Text>
                    <Text style={styles.text}>Lute junto ou sozinho! A grande guerra entre as alianças é furiosa e batalhas podem ser 
                        lutadas na arena. Imponha-se contra monstros terríveis e participe de batalhas contra amigos.</Text>
                </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    imagePrincipal: {
        width: '100%',
        height: 205,
    },
    title: {
        marginTop: 10,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    text: {
        margin: 5,
        justifyContent: 'center',
        textAlign: 'justify',
        fontSize: 18,
    },
    container: {
        margin: 20,
        alignItems: 'center',
        textAlign: 'center',
    },
})