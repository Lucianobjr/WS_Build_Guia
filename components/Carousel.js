import React, { useRef, useState } from 'react';
import { View, Text, ScrollView, Dimensions, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Carousel from 'react-native-snap-carousel';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export default function App() {

    const carouselRef = useRef(null);

    const [list, setList] = useState([
        {
            faccao: "Escolhidos",
            describe: "O deus, Harad, criou pessoas para que eles, juntamente com o Primogênito, pudessem proteger o mundo das trevas. Os filhos de Harad, que amam a liberdade e descansam por natureza, ganharam o direito de seguir seu próprio caminho em breve. Como eles fizeram grandes sacrifícios para o alter da vitória durante a guerra contra a legião, Harad os chamou de escolhidos. Tendo criado um império todo-poderoso, eles diligentemente sombream o poder das Trevas, que cresce em Arinar mais uma vez.",
            img: "https://static.wikia.nocookie.net/warspear-online/images/6/66/Chosen.png/revision/latest?cb=20140730222107",
        },
        {
            faccao: "Primogênitos",
            describe: "Os elfos, ou Primogênito, foram criados pelo deus, Nuadu. Desde o tempo imemorial, eles protegeram o mundo das Trevas, erradicando suas criaturas por todo Arinar e curando as feridas causadas por ele. Por muito tempo após a Guerra da Lança, os elfos nunca deixaram suas florestas, evitando o contato com outros povos. No entanto, quando uma nova ameaça, a Legião, parecia ameaçar o mundo, o Primogênito começou a se preparar para proteger o equilíbrio do mundo mais uma vez.",
            img: "https://static.wikia.nocookie.net/warspear-online/images/9/97/Firstborn.png/revision/latest?cb=20140730222215",
        },
        {
            faccao: "Clãs das montanhas",
            describe: "Muitos séculos atrás, os ancestrais do highlander amaldiçoaram seus congêneres, que os traíram, e deixaram as terras de seus antepassados, liderados por seu chefe, Berengar. Essas pessoas dos Clãs, que se estabeleceram em montanhas distantes e inacessíveis, tiveram que temperar seus corpos e espíritos em uma luta sem fim para sobreviver. A memória do highlander desapareceu com os anos, mas seu ódio feroz contra o povo das florestas e planícies nunca morreu.",
            img: "https://static.wikia.nocookie.net/warspear-online/images/c/c1/Mount_clans.png/revision/latest?cb=20140730222334",
        },
        {
            faccao: "Proscritos",
            describe: "O Forsaken, criado pelo sopro negro do dragão, Garahan, quase destruiu pessoas e elfos durante a era da Guerra da Lança. Tendo sofrido uma derrota arrasadora durante a última luta com os sentinelas, o resto da Legião Forsaken fugiu para o sul de Arinar. Até recentemente, eles têm eclodido planos para o reaparecimento de seu poder, mas para realizar esses planos, o Forsaken terá que enfrentar os Sentinelas em uma luta mortal.",
            img: "https://static.wikia.nocookie.net/warspear-online/images/6/67/Forsaken.png/revision/latest?cb=20140730222352",
        },
    ]);

    const [index, setIndex] = useState(0);

    const _renderItem = ({ item, index }) => {
        return(
            <View>
                    <Image 
                        source={{uri: item.img}}
                        style={styles.carouselImg}
                    />
                    <Text style={styles.carouselText}>{item.faccao}</Text>
            </View>
        );
    };

    return(
        <ScrollView style={styles.container}>
            <View>

                <Text style={{color: "#000", fontSize: 18, 
                    margin: 20, marginVertical: 10, justifyContent: 'center',}}>
                    Cada facção tem um aliado e duas facções inimigas, todas controladas por jogadores. 
                    Ao enfrentar um jogador/facção emarada, você verá seus nomes como um tom de vermelho 
                    indicando hostilidade. Embora você não conheça essas facções inimigas até completar 
                    a ilha iniciante de sua facção escolhida e chegar à ilha central chamada Irselnort.
                </Text>

                <View style={styles.slideView}>
                    <Carousel 
                        style={styles.carousel}
                        ref={carouselRef}
                        data={list}
                        renderItem={_renderItem}
                        sliderWidth={screenWidth}
                        itemWidth={250}
                        inactiveSlideOpacity={0.5}
                        onSnapToItem={ (index) => {
                            setIndex(index);
                        }}
                    />
                </View>

                <View style={styles.moreInfo}>
                    <View style={{marginTop: 10}}>
                        <Text style={styles.faccaoTitle}>{list[index].faccao}</Text>
                        <Text style={styles.faccaoDesc}>{list[index].describe}</Text>
                    </View>
                </View>
                
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
      container: {
        backgroundColor: '#fff',
        flex: 1,
      },
      slideView: {
        width: '100%',
        height: 350,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
      },
      carousel: {
        flex: 1,
        overflow: 'visible',
      },
      carouselImg: {
        alignSelf: 'center',
        width: 250,
        height: 300,
        borderRadius: 12,
        backgroundColor: 'rgba(0,0,0,0.5)',
      },
      carouselText: {
        padding: 15,
        color: "#fff",
        position: 'absolute',
        bottom: 10,
        left: 2,
        fontSize: 20,
        fontWeight: 'bold',
      },
      carouselIcon: {
        position: 'absolute',
        top: 15,
        right: 15,
      },
      moreInfo: {
        backgroundColor: '#fff',
        width: screenWidth,
        height: screenHeight,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
      },
      faccaoTitle: {
        paddingLeft: 15,
        fontSize: 22,
        fontWeight: 'bold',
        color: '#131313',
        marginBottom: 5,
      },
      faccaoDesc: {
        paddingLeft: 15,
        color: '#131313',
        fontSize: 17,
        fontWeight: 'bold',
      },
});