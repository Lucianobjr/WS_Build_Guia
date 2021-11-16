import React, { useState } from 'react';
import { View, ScrollView, Image, StyleSheet, Text, Modal, Pressable } from 'react-native';


export default function App() {

    const [first, setFirst] = useState(false);
    const [second, setSecond] = useState(false);
    const [three, setThree] = useState(false);
    const [four, setFour] = useState(false);
    const [five, setFive] = useState(false);
    const [six, setSix] = useState(false);
    const [seven, setSeven] = useState(false);
    const [eight, setEight] = useState(false);
    const [nine, SetNine] = useState(false);
    const [ten, setTen] = useState(false);
    const [Eleven, setEleven] = useState(false);
    const [twelve, setTwelve] = useState(false);
    const [thirteen, setThirteen] = useState(false);
    const [fourteen, setFourteen] = useState(false);
    const [points, setPoints] = useState(false);
    const [initial, SetInitial] = useState(false);
    const [expert, setExpert] = useState(false);

  return (
    <ScrollView>
        <View style={styles.containerImage}>
            <Image style={styles.backgroundImage} source={require('./img/Paladin.png')} />
            <View>
                <Text style={styles.title}>Paladino</Text>
            </View>
            <View>
                <Text style={styles.subtitle}>Facção: Escolhidos</Text>
            </View>
        </View>
        <View style={styles.describe}>
            <Text style={styles.describeText}>
            Apenas um cujo coração brilha com a luz da verdadeira fé em Harad pode se tornar um paladino.
            Estes valentes lutadores são treinados para a batalha, e além disso, têm conhecimento de cura. 
            Além disso, sua presença no campo de batalha pode ajudar aliados que são curandeiros, devido à 
            sua capacidade de multiplicar poderes de cura. Paladinos usam suas várias habilidades para 
            infligir severas perdas entre as fileiras de inimigos.
            </Text>
        </View>
        <View style={styles.status}>
            <View>
                <Text style={styles.statusText}>Dano</Text>
                <Text style={styles.statusText}>Defesa</Text>
                <Text style={styles.statusText}>utilidade</Text>
                <Text style={styles.statusText}>Dificuldade</Text>
            </View>
            <View>
                <Image style={styles.statusImg} source={require('./img/Dano.png')} />
                <Image style={styles.statusImg} source={require('./img/Defesa.png')} />
                <Image style={styles.statusImg} source={require('./img/Utilidade.png')} />
                <Image style={styles.statusImg} source={require('./img/Dificuldade.png')} />
            </View>
        </View>
        <View style={styles.containerInitial}>
            <View style={styles.buildStart}>
                    <Text style={styles.buildText}>Habilidades Iniciais</Text>
                    <View>
                    <Pressable
                            style={styles.buttonsPoints}
                            onPress={() => {
                                SetInitial(!initial)
                            }}
                        >
                            <Text style={styles.buildDetails}>?</Text>
                        </Pressable>
                    </View>
                        <View style={styles.containerModal}>
                            <Modal
                                animationType={'fade'}
                                transparent={true}
                                visible={initial}
                                onRequestClose={() => {
                                SetInitial(!initial);
                                }}
                            >
                            <View style={styles.modal}>
                                <View style={styles.containerTitleSkill}>
                                    <Text style={styles.textSKillModal}>Habilidades Iniciais</Text>
                                    <Pressable
                                        style={{width: 30, height: 25, backgroundColor: '#000', margin: 3, marginLeft: 125, borderRadius: 5,}}
                                        onPress={() => {
                                        SetInitial(!initial)
                                        }}
                                    >
                                        <Text style={{color: '#fff', fontSize: 18, textAlign: 'center', borderWidth: 1, borderColor: '#fff', borderRadius: 5,}}>X</Text>
                                    </Pressable>
                                </View>
                                    <Text style={{fontSize: 18, color: '#fff', justifyContent: 'center', margin: 10,}}>As Habilidades Iniciais são habilidades
                                        com as quais o jogador inicia o jogo até que alcance o nível necessário para aprender novas habilidades.</Text>
                                    <Text style={{fontSize: 18, color: '#fff', justifyContent: 'center', margin: 10,}}>Os níveis de upgrade das habilidades e 
                                        sequencia são baseadas nas skills que possibilitam a melhor experiência para que o jogador suba de level.</Text>
                                </View>
                            </Modal>      
                        </View>
            </View>
            </View>
            <View style={styles.containerSkill}>
                <View style={styles.borderSkill}>
                    <Image style={styles.backgroundSkill} source={require('./img/Purificar.png')} />
                    <Text style={styles.textSkill}>3/5</Text>
                    <Pressable
                        style={styles.buttons}
                        onPress={() => {
                            setFirst(!first);
                        }}
                    />
                    <View style={styles.containerModal}>
                        <Modal
                            animationType={'fade'}
                            transparent={true}
                            visible={first}
                            onRequestClose={() => {
                            setFirst(!first);
                            }}
                        >
                        <View style={styles.modal}>
                            <View style={styles.containerTitleSkill}>
                                <View style={{ margin: 1.3, width: 53, height: 53, borderWidth: 2, borderColor: '#fa0',}}>
                                    <Image style={styles.ImageModal} source={require('./img/Purificar.png')}/>
                                </View>
                                <Text style={styles.textSKillModal}>Purificar</Text>
                                
                                <Pressable
                                    style={{width: 30, height: 25, backgroundColor: '#000', margin: 3, marginLeft: 160, borderRadius: 5,}}
                                    onPress={() => {
                                    setFirst(!first)
                                    }}
                                >
                                    <Text style={{color: '#fff', fontSize: 18, textAlign: 'center', borderWidth: 1, borderColor: '#fff', borderRadius: 5,}}>X</Text>
                                </Pressable>
                            </View>
                            <View style={{margin: 3,}}>
                                <Text style={{fontSize: 18, color: '#fff',}}>Tipo: <Text style={{color: '#0f0',}}>Ativo</Text></Text>
                                <Text style={{fontSize: 18, color: '#fff',}}>Alcance de uso: <Text style={{color: '#0f0',}}>Corpo a corpo</Text></Text>
                                <Text style={{fontSize: 18, color: '#fff',}}>Gasto em energia: <Text style={{color: '#0f0',}}>13 unidades</Text></Text>
                                <Text style={{fontSize: 18, color: '#fff',}}>Recarga: <Text style={{color: '#0f0',}}>9 s</Text></Text>
                            </View>
                                <Text style={styles.textModal}>Aumenta o dano fisico ao alvo. Se o alvo estiver sob efeito do feitiço
                                    "Grilhoões da Justiça", receberá dano mágico adicional durante esse período.
                                </Text>
                            </View>
                        </Modal>      
                    </View>
                </View>     
                <View style={styles.borderSkill}>
                    <Image style={styles.backgroundSkill} source={require('./img/GrilhoesJustica.png')} />
                    <Text style={styles.textSkill}>1/5</Text>
                    <Pressable
                        style={styles.buttons}
                        onPress={() => {
                            setSecond(!second);
                        }}
                    />
                    <View style={styles.containerModal}>
                        <Modal
                            animationType={'fade'}
                            transparent={true}
                            visible={second}
                            onRequestClose={() => {
                            setSecond(!second);
                            }}
                        >
                        <View style={styles.modal}>
                            <View style={styles.containerTitleSkill}>
                                <View style={{ margin: 1.3, width: 51, height: 51, borderWidth: 2, borderColor: '#fa0',}}>
                                    <Image style={styles.ImageModal} source={require('./img/GrilhoesJustica.png')}/>
                                </View>
                                <Text style={styles.textSKillModal}>Grilhões da Justiça</Text>
                                
                                <Pressable
                                    style={{width: 30, height: 25, backgroundColor: '#000', margin: 3, marginLeft: 75, borderRadius: 5,}}
                                    onPress={() => {
                                    setSecond(!second)
                                    }}
                                >
                                    <Text style={{color: '#fff', fontSize: 18, textAlign: 'center', borderWidth: 1, borderColor: '#fff', borderRadius: 5,}}>X</Text>
                                </Pressable>
                            </View>
                            <View style={{margin: 3,}}>
                                <Text style={{fontSize: 18, color: '#fff',}}>Tipo: <Text style={{color: '#0f0',}}>Ativo</Text></Text>
                                <Text style={{fontSize: 18, color: '#fff',}}>Gasto em energia: <Text style={{color: '#0f0',}}>16 unidades</Text></Text>
                                <Text style={{fontSize: 18, color: '#fff',}}>Recarga: <Text style={{color: '#0f0',}}>15 s</Text></Text>
                            </View>
                            <Text style={styles.textModal}>Prende todos os inimigos ao redor do Paladino. Não poderão se mover e o dano que 
                                causarem será reduzido. Quanto a habilidade chega ao nível 4 ou acima, ela bloqueia a capacidade do inimigo
                                de usar habilidades.
                            </Text>
                        </View>
                        </Modal>      
                    </View>
                </View>  
                <View style={styles.borderSkill}>
                    <Image style={styles.backgroundSkill} source={require('./img/AuraLuz.png')} />
                    <Text style={styles.textSkill}>5/5</Text>
                    <Pressable
                        style={styles.buttons}
                        onPress={() => {
                            setThree(!three);
                        }}
                    />
                    <View style={styles.containerModal}>
                        <Modal
                            animationType={'fade'}
                            transparent={true}
                            visible={three}
                            onRequestClose={() => {
                            setThree(!three);
                            }}
                        >
                        <View style={styles.modal}>
                            <View style={styles.containerTitleSkill}>
                                <View style={{ margin: 1.3, width: 50, height: 50, borderWidth: 2, borderColor: '#fa0',}}>
                                    <Image style={styles.ImageModal} source={require('./img/AuraLuz.png')}/>
                                </View>
                                <Text style={styles.textSKillModal}>Aura de Luz</Text>
                                
                                <Pressable
                                    style={{width: 30, height: 25, backgroundColor: '#000', margin: 3, marginLeft: 135, borderRadius: 5,}}
                                    onPress={() => {
                                    setThree(!three)
                                    }}
                                >
                                    <Text style={{color: '#fff', fontSize: 18, textAlign: 'center', borderWidth: 1, borderColor: '#fff', borderRadius: 5,}}>X</Text>
                                </Pressable>
                            </View>
                            <View style={{margin: 3,}}>
                                <Text style={{fontSize: 18, color: '#fff',}}>Tipo: <Text style={{color: '#0f0',}}>Ativo</Text></Text>
                                <Text style={{fontSize: 18, color: '#fff',}}>Gasto em energia: <Text style={{color: '#0f0',}}>18 unidades</Text></Text>
                                <Text style={{fontSize: 18, color: '#fff',}}>Recarga: <Text style={{color: '#0f0',}}>30 s</Text></Text>
                            </View>
                                <Text style={styles.textModal}>Aumenta os efeitos de cura das outras habilidades. Afeta todos os aliados no grupo 
                                    que estejam dentro do raio de efeito.
                                </Text>
                            </View>
                        </Modal>      
                    </View>
                </View>  
                <View style={styles.borderSkill}>
                    <Image style={styles.backgroundSkill} source={require('./img/Persuassao.png')} />
                    <Text style={styles.textSkill}>1/5</Text>
                    <Pressable
                        style={styles.buttons}
                        onPress={() => {
                            setFour(!four);
                        }}
                    />
                    <View style={styles.containerModal}>
                        <Modal
                            animationType={'fade'}
                            transparent={true}
                            visible={four}
                            onRequestClose={() => {
                            setFour(!four);
                            }}
                        >
                        <View style={styles.modal}>
                            <View style={styles.containerTitleSkill}>
                                <View style={{ margin: 1.3, width: 51, height: 52, borderWidth: 2, borderColor: '#fa0',}}>
                                    <Image style={styles.ImageModal} source={require('./img/Persuassao.png')}/>
                                </View>
                                <Text style={styles.textSKillModal}>Persuassão</Text>
                                
                                <Pressable
                                    style={{width: 30, height: 25, backgroundColor: '#000', margin: 3, marginLeft: 135, borderRadius: 5,}}
                                    onPress={() => {
                                    setFour(!four)
                                    }}
                                >
                                    <Text style={{color: '#fff', fontSize: 18, textAlign: 'center', borderWidth: 1, borderColor: '#fff', borderRadius: 5,}}>X</Text>
                                </Pressable>
                            </View>
                            <View style={{margin: 3,}}>
                                <Text style={{fontSize: 18, color: '#fff',}}>Tipo: <Text style={{color: '#0f0',}}>Ativo</Text></Text>
                                <Text style={{fontSize: 18, color: '#fff',}}>Alcance de uso: <Text style={{color: '#0f0',}}>5 unidades</Text></Text>
                                <Text style={{fontSize: 18, color: '#fff',}}>Gasto em energia: <Text style={{color: '#0f0',}}>7 unidades</Text></Text>
                                <Text style={{fontSize: 18, color: '#fff',}}>Recarga: <Text style={{color: '#0f0',}}>8 s</Text></Text>
                            </View>
                                <Text style={styles.textModal}>Chama a atenção do alvo, fazendo com que ele ataque o personagem. O inimigo só perde o 
                                    alvo dele. A duração do efeito aumenta conforme o nível da habilidade.
                                </Text>
                            </View>
                        </Modal>      
                    </View>
                </View>  
                <View style={styles.borderSkill}>
                    <Image style={styles.backgroundSkill} source={require('./img/LuzCelestial.png')} />
                    <Text style={styles.textSkill}>5/5</Text>
                    <Pressable
                        style={styles.buttons}
                        onPress={() => {
                            setFive(!five);
                        }}
                    />
                    <View style={styles.containerModal}>
                        <Modal
                            animationType={'fade'}
                            transparent={true}
                            visible={five}
                            onRequestClose={() => {
                            setFive(!five);
                            }}
                        >
                        <View style={styles.modal}>
                            <View style={styles.containerTitleSkill}>
                                <View style={{ margin: 1.3, width: 51, height: 51, borderWidth: 2, borderColor: '#fa0',}}>
                                    <Image style={styles.ImageModal} source={require('./img/LuzCelestial.png')}/>
                                </View>
                                <Text style={styles.textSKillModal}>Luz Celestial</Text>
                                
                                <Pressable
                                    style={{width: 30, height: 25, backgroundColor: '#000', margin: 3, marginLeft: 125, borderRadius: 5,}}
                                    onPress={() => {
                                    setFive(!five)
                                    }}
                                >
                                    <Text style={{color: '#fff', fontSize: 18, textAlign: 'center', borderWidth: 1, borderColor: '#fff', borderRadius: 5,}}>X</Text>
                                </Pressable>
                            </View>
                            <View style={{margin: 3,}}>
                                <Text style={{fontSize: 18, color: '#fff',}}>Tipo: <Text style={{color: '#0f0',}}>Ativo</Text></Text>
                                <Text style={{fontSize: 18, color: '#fff',}}>Alcance de uso: <Text style={{color: '#0f0',}}>4 metros</Text></Text>
                                <Text style={{fontSize: 18, color: '#fff',}}>Gasto em energia: <Text style={{color: '#0f0',}}>11 unidades</Text></Text>
                                <Text style={{fontSize: 18, color: '#fff',}}>Recarga: <Text style={{color: '#0f0',}}>13 s</Text></Text>
                            </View>
                                <Text style={styles.textModal}>Restaura com poder mágico parte dos pontos de vida do personagem ou do alvo aliado 
                                    instantaneamente.
                                </Text>
                            </View>
                        </Modal>      
                    </View>
                </View>  
            </View>
            <View>
                <Text style={styles.buildText}>Sequência</Text>
                <View style={styles.sequence}>
                    <Text style={styles.textSequence}>1ª</Text>
                    <Text style={styles.textSequence}>2ª</Text>
                    <Text style={styles.textSequence}>3ª</Text>
                </View>
                <View style={styles.containerSequence}>
                    <View style={styles.borderSkill}>
                        <Image style={styles.backgroundSkill} source={require('./img/LuzCelestial.png')} />
                        <Text style={styles.textSkill}>5/5</Text>
                    </View>
                    <View style={styles.borderSkill}>
                        <Image style={styles.backgroundSkill} source={require('./img/Purificar.png')} />
                        <Text style={styles.textSkill}>3/5</Text>
                    </View>
                    <View style={styles.borderSkill}>
                        <Image style={styles.backgroundSkill} source={require('./img/AuraLuz.png')} />
                        <Text style={styles.textSkill}>5/5</Text>
                    </View>
                </View>
            </View>
            <View style={styles.containerInitial2}>
            <View style={styles.buildStart}>
                <Text style={styles.buildText}>Habilidades de Especialista</Text>
                <View>
                    <Pressable
                            style={styles.buttonsPoints3}
                            onPress={() => {
                                setExpert(!expert)
                            }}
                        >
                            <Text style={styles.buildDetails}>?</Text>
                        </Pressable>
                    </View>
                        <View style={styles.containerModal}>
                            <Modal
                                animationType={'fade'}
                                transparent={true}
                                visible={expert}
                                onRequestClose={() => {
                                setExpert(!expert);
                                }}
                            >
                            <View style={styles.modal}>
                                <View style={styles.containerTitleSkill}>
                                    <Text style={styles.textSKillModal}>Habilidades de Especialista</Text>
                                    <Pressable
                                        style={{width: 30, height: 25, backgroundColor: '#000', margin: 3, marginLeft: 60, borderRadius: 5,}}
                                        onPress={() => {
                                        setExpert(!expert)
                                        }}
                                    >
                                        <Text style={{color: '#fff', fontSize: 18, textAlign: 'center', borderWidth: 1, borderColor: '#fff', borderRadius: 5,}}>X</Text>
                                    </Pressable>
                                </View>
                                    <Text style={{fontSize: 18, color: '#fff', justifyContent: 'center', margin: 10,}}>As Habilidades de especialista 
                                        são habilidades as quais o jogador poderá aprende-las ao atingir o leve requerido.</Text>
                                    <Text style={{fontSize: 18, color: '#fff', justifyContent: 'center', margin: 10,}}>Ao atingir o nível 18, o jogador poderá 
                                        adquirir suas habilidades nas bibliotecas. As habilidades no jogo são adquiridas ao juntar uma quantidade requerida da moeda 
                                        do jogo.</Text>
                                </View>
                            </Modal>      
                        </View>
            </View>
            </View>
            <View style={styles.containerSkill}>
                <View style={styles.borderSkill}>
                    <Image style={styles.backgroundSkill} source={require('./img/EstandarteHarad.png')} />
                    <Text style={styles.textSkill}>4/4</Text>
                    <Pressable
                        style={styles.buttons}
                        onPress={() => {
                            setSix(!six);
                        }}
                    />
                    <View style={styles.containerModal}>
                        <Modal
                            animationType={'fade'}
                            transparent={true}
                            visible={six}
                            onRequestClose={() => {
                            setSix(!six);
                            }}
                        >
                        <View style={styles.modal}>
                            <View style={styles.containerTitleSkill}>
                                <View style={{ margin: 1.3, width: 53, height: 52, borderWidth: 2, borderColor: '#fa0',}}>
                                    <Image style={styles.ImageModal} source={require('./img/EstandarteHarad.png')}/>
                                </View>
                                <Text style={styles.textSKillModal}>Estandarte de Harad</Text>
                                
                                <Pressable
                                    style={{width: 30, height: 25, backgroundColor: '#000', margin: 3, marginLeft: 63, borderRadius: 5,}}
                                    onPress={() => {
                                    setSix(!six)
                                    }}
                                >
                                    <Text style={{color: '#fff', fontSize: 18, textAlign: 'center', borderWidth: 1, borderColor: '#fff', borderRadius: 5,}}>X</Text>
                                </Pressable>
                            </View>
                            <View style={{margin: 3,}}>
                                <Text style={{fontSize: 18, color: '#fff',}}>Tipo: <Text style={{color: '#0f0',}}>Ativo</Text></Text>
                                <Text style={{fontSize: 18, color: '#fff',}}>Alcance: <Text style={{color: '#0f0',}}>3 metros</Text></Text>
                                <Text style={{fontSize: 18, color: '#fff',}}>Gasto em energia: <Text style={{color: '#0f0',}}>30 unidades</Text></Text>
                                <Text style={{fontSize: 18, color: '#fff',}}>Recarga: <Text style={{color: '#0f0',}}>35 s</Text></Text>
                            </View>
                                <Text style={styles.textModal}>O paladino planta uma bandeira no campo de batalha. A bandeira causa dano em todos os 
                                    inimigos em determinado raio. A bandeira aumenta o dano dentro da sua área de efeito.
                                </Text>
                            </View>
                        </Modal>      
                    </View>
                </View>      
                <View style={styles.borderSkill}>
                    <Image style={styles.backgroundSkill} source={require('./img/PrecePaladino.png')} />
                    <Text style={styles.textSkill}>4/4</Text>
                    <Pressable
                        style={styles.buttons}
                        onPress={() => {
                            setSeven(!seven);
                        }}
                    />
                    <View style={styles.containerModal}>
                        <Modal
                            animationType={'fade'}
                            transparent={true}
                            visible={seven}
                            onRequestClose={() => {
                            setSeven(!seven);
                            }}
                        >
                        <View style={styles.modal}>
                            <View style={styles.containerTitleSkill}>
                                <View style={{ margin: 1.3, width: 54, height: 53, borderWidth: 2, borderColor: '#fa0',}}>
                                    <Image style={styles.ImageModal} source={require('./img/PrecePaladino.png')}/>
                                </View>
                                <Text style={styles.textSKillModal}>Prece do Paladino</Text>
                                
                                <Pressable
                                    style={{width: 30, height: 25, backgroundColor: '#000', margin: 3, marginLeft: 80, borderRadius: 5,}}
                                    onPress={() => {
                                    setSeven(!seven)
                                    }}
                                >
                                    <Text style={{color: '#fff', fontSize: 18, textAlign: 'center', borderWidth: 1, borderColor: '#fff', borderRadius: 5,}}>X</Text>
                                </Pressable>
                            </View>
                            <View style={{margin: 3,}}>
                                <Text style={{fontSize: 18, color: '#fff',}}>Tipo: <Text style={{color: '#0f0',}}>Ativo</Text></Text>
                                <Text style={{fontSize: 18, color: '#fff',}}>Alcance de uso: <Text style={{color: '#0f0',}}>3 metros</Text></Text>
                                <Text style={{fontSize: 18, color: '#fff',}}>Gasto em energia: <Text style={{color: '#0f0',}}>22 unidades</Text></Text>
                                <Text style={{fontSize: 18, color: '#fff',}}>Recarga: <Text style={{color: '#0f0',}}>45 s</Text></Text>
                            </View>
                                <Text style={styles.textModal}>Aumenta a vida máxima do personagem ou de um aliado por um tempo determinado e restaura 
                                    instantaneamente uma quantidadde de vida igual ao valor adicionado.
                                </Text>
                            </View>
                        </Modal>      
                    </View>
                </View>
                <View style={styles.borderSkill}>
                    <Image style={styles.backgroundSkill} source={require('./img/EscudoSagrado.png')} />
                    <Text style={styles.textSkill}>4/4</Text>
                    <Pressable
                        style={styles.buttons}
                        onPress={() => {
                            setEight(!eight);
                        }}
                    />
                    <View style={styles.containerModal}>
                        <Modal
                            animationType={'fade'}
                            transparent={true}
                            visible={eight}
                            onRequestClose={() => {
                            setEight(!eight);
                            }}
                        >
                        <View style={styles.modal}>
                            <View style={styles.containerTitleSkill}>
                                <View style={{ margin: 1, width: 53, height: 54, borderWidth: 2, borderColor: '#fa0',}}>
                                    <Image style={styles.ImageModal} source={require('./img/EscudoSagrado.png')}/>
                                </View>
                                <Text style={styles.textSKillModal}>Escudo Sagrado</Text>
                                
                                <Pressable
                                    style={{width: 30, height: 25, backgroundColor: '#000', margin: 3, marginLeft: 97, borderRadius: 5,}}
                                    onPress={() => {
                                    setEight(!eight)
                                    }}
                                >
                                    <Text style={{color: '#fff', fontSize: 18, textAlign: 'center', borderWidth: 1, borderColor: '#fff', borderRadius: 5,}}>X</Text>
                                </Pressable>
                            </View>
                            <View style={{margin: 2,}}>
                                <Text style={{fontSize: 16, color: '#fff',}}>Tipo: <Text style={{color: '#0f0',}}>Ativo</Text></Text>
                                <Text style={{fontSize: 16, color: '#fff',}}>Alcance: <Text style={{color: '#0f0',}}>3 metros</Text></Text>
                                <Text style={{fontSize: 16, color: '#fff',}}>Gasto em energia: <Text style={{color: '#0f0',}}>20 unidades</Text></Text>
                                <Text style={{fontSize: 16, color: '#fff',}}>Recarga: <Text style={{color: '#0f0',}}>40 s</Text></Text>
                            </View>
                                <Text style={styles.textModal}>Cerca o héroi com uma barreira que absorve uma quantidade fixa de dano. Com o 
                                    desenvolvimento da habilidade, a quantidadde de dano que o escudo aguenta aumenta. Quando desenvolvida acima do nível 3,
                                    ao aplicar a habilidade em um aliado, o paladino também recebe uma barreira protetora.
                                </Text>
                            </View>
                        </Modal>      
                    </View>
                </View>
                <View style={styles.borderSkill}>
                    <Image style={styles.backgroundSkill} source={require('./img/ChamadoHarad.png')} />
                    <Text style={styles.textSkill}>1/4</Text>
                    <Pressable
                        style={styles.buttons}
                        onPress={() => {
                            SetNine(!nine);
                        }}
                    />
                    <View style={styles.containerModal}>
                        <Modal
                            animationType={'fade'}
                            transparent={true}
                            visible={nine}
                            onRequestClose={() => {
                            SetNine(!nine);
                            }}
                        >
                        <View style={styles.modal}>
                            <View style={styles.containerTitleSkill}>
                                <View style={{ margin: 1, width: 52, height: 52, borderWidth: 2, borderColor: '#fa0',}}>
                                    <Image style={styles.ImageModal} source={require('./img/ChamadoHarad.png')}/>
                                </View>
                                <Text style={styles.textSKillModal}>Chamado de Harad</Text>
                                
                                <Pressable
                                    style={{width: 30, height: 25, backgroundColor: '#000', margin: 3, marginLeft: 75, borderRadius: 5,}}
                                    onPress={() => {
                                    SetNine(!nine)
                                    }}
                                >
                                    <Text style={{color: '#fff', fontSize: 18, textAlign: 'center', borderWidth: 1, borderColor: '#fff', borderRadius: 5,}}>X</Text>
                                </Pressable>
                            </View>
                            <View style={{margin: 3,}}>
                                <Text style={{fontSize: 18, color: '#fff',}}>Tipo: <Text style={{color: '#0f0',}}>Ativo</Text></Text>
                                <Text style={{fontSize: 18, color: '#fff',}}>Alcance: <Text style={{color: '#0f0',}}>4 metros</Text></Text>
                                <Text style={{fontSize: 18, color: '#fff',}}>Gasto em energia: <Text style={{color: '#0f0',}}>20 unidades</Text></Text>
                                <Text style={{fontSize: 18, color: '#fff',}}>Recarga: <Text style={{color: '#0f0',}}>20 s</Text></Text>
                            </View>
                                <Text style={styles.textModal}>O paladino se move imediatamente pelo campo de batalha e causa dano a todos os inimigos 
                                    dentro de um pequeno raio. Existe a chance de os adversários serem atordoados.
                                </Text>
                            </View>
                        </Modal>      
                    </View>
                </View>
                <View style={styles.borderSkill}>
                    <Image style={styles.backgroundSkill} source={require('./img/DefesaLuz.png')} />
                    <Text style={styles.textSkill}>1/4</Text>
                    <Pressable
                        style={styles.buttons}
                        onPress={() => {
                            setTen(!ten);
                        }}
                    />
                    <View style={styles.containerModal}>
                        <Modal
                            animationType={'fade'}
                            transparent={true}
                            visible={ten}
                            onRequestClose={() => {
                            setTen(!ten);
                            }}
                        >
                        <View style={styles.modal}>
                            <View style={styles.containerTitleSkill}>
                                <View style={{ margin: 1, width: 54, height: 55, borderWidth: 2, borderColor: '#fa0',}}>
                                    <Image style={styles.ImageModal} source={require('./img/DefesaLuz.png')}/>
                                </View>
                                <Text style={styles.textSKillModal}>Defesa de Luz</Text>
                                
                                <Pressable
                                    style={{width: 30, height: 25, backgroundColor: '#000', margin: 3, marginLeft: 114, borderRadius: 5,}}
                                    onPress={() => {
                                    setTen(!ten)
                                    }}
                                >
                                    <Text style={{color: '#fff', fontSize: 18, textAlign: 'center', borderWidth: 1, borderColor: '#fff', borderRadius: 5,}}>X</Text>
                                </Pressable>
                            </View>
                            <View style={{margin: 3,}}>
                                <Text style={{fontSize: 18, color: '#fff',}}>Tipo: <Text style={{color: '#0f0',}}>Ativo</Text></Text>
                                <Text style={{fontSize: 18, color: '#fff',}}>Gasto em energia: <Text style={{color: '#0f0',}}>24 unidades</Text></Text>
                                <Text style={{fontSize: 18, color: '#fff',}}>Recarga: <Text style={{color: '#0f0',}}>60 s</Text></Text>
                            </View>
                                <Text style={styles.textModal}>Aumenta defesa física e mágica de todos os membros do grupo em determinada porcentagem por 
                                    algum tempo.
                                </Text>
                                <Text style={styles.textModal}>O poder e tempo do efeito aumentam conforme o nível da habilidade.
                                </Text>
                            </View>
                        </Modal>      
                    </View>
                </View>
                <View style={styles.borderSkill}>
                    <Image style={styles.backgroundSkill} source={require('./img/SeloSol.png')} />
                    <Text style={styles.textSkill}>1/4</Text>
                    <Pressable
                        style={styles.buttons}
                        onPress={() => {
                            setEleven(!Eleven);
                        }}
                    />
                    <View style={styles.containerModal}>
                        <Modal
                            animationType={'fade'}
                            transparent={true}
                            visible={Eleven}
                            onRequestClose={() => {
                            setEleven(!Eleven);
                            }}
                        >
                        <View style={styles.modal}>
                            <View style={styles.containerTitleSkill}>
                                <View style={{ margin: 1, width: 53, height: 52, borderWidth: 2, borderColor: '#fa0',}}>
                                    <Image style={styles.ImageModal} source={require('./img/SeloSol.png')}/>
                                </View>
                                <Text style={styles.textSKillModal}>Selo do Sol</Text>
                                
                                <Pressable
                                    style={{width: 30, height: 25, backgroundColor: '#000', margin: 3, marginLeft: 137, borderRadius: 5,}}
                                    onPress={() => {
                                    setEleven(!Eleven)
                                    }}
                                >
                                    <Text style={{color: '#fff', fontSize: 18, textAlign: 'center', borderWidth: 1, borderColor: '#fff', borderRadius: 5,}}>X</Text>
                                </Pressable>
                            </View>
                            <View style={{margin: 3,}}>
                                <Text style={{fontSize: 18, color: '#fff',}}>Tipo: <Text style={{color: '#0f0',}}>Ativo</Text></Text>
                                <Text style={{fontSize: 18, color: '#fff',}}>Alcance: <Text style={{color: '#0f0',}}>Corpo a corpo</Text></Text>
                                <Text style={{fontSize: 18, color: '#fff',}}>Gasto em energia: <Text style={{color: '#0f0',}}>20 unidades</Text></Text>
                                <Text style={{fontSize: 18, color: '#fff',}}>Recarga: <Text style={{color: '#0f0',}}>30 s</Text></Text>
                            </View>
                                <Text style={styles.textModal}>O ataque causa dano mágico e marca o inimigo com um marcador. Todos os ataques contra o inimigo 
                                com esse marcador restauração a vida do atacante.
                                </Text>
                            </View>
                        </Modal>      
                    </View>
                </View>
                <View style={styles.borderSkill}>
                    <Image style={styles.backgroundSkill} source={require('./img/Iluminacao.png')} />
                    <Text style={styles.textSkill}>1/4</Text>
                    <Pressable
                        style={styles.buttons}
                        onPress={() => {
                            setTwelve(!twelve);
                        }}
                    />
                    <View style={styles.containerModal}>
                        <Modal
                            animationType={'fade'}
                            transparent={true}
                            visible={twelve}
                            onRequestClose={() => {
                            setTwelve(!twelve);
                            }}
                        >
                        <View style={styles.modal}>
                            <View style={styles.containerTitleSkill}>
                                <View style={{ margin: 1, width: 54, height: 54, borderWidth: 2, borderColor: '#fa0',}}>
                                    <Image style={styles.ImageModal} source={require('./img/Iluminacao.png')}/>
                                </View>
                                <Text style={styles.textSKillModal}>Iluminação</Text>
                                
                                <Pressable
                                    style={{width: 30, height: 25, backgroundColor: '#000', margin: 3, marginLeft: 138, borderRadius: 5,}}
                                    onPress={() => {
                                    setTwelve(!twelve)
                                    }}
                                >
                                    <Text style={{color: '#fff', fontSize: 18, textAlign: 'center', borderWidth: 1, borderColor: '#fff', borderRadius: 5,}}>X</Text>
                                </Pressable>
                            </View>
                            <View style={{margin: 3,}}>
                                <Text style={{fontSize: 18, color: '#fff',}}>Tipo: <Text style={{color: '#0f0',}}>Ativo</Text></Text>
                                <Text style={{fontSize: 18, color: '#fff',}}>Gasto em energia: <Text style={{color: '#0f0',}}>12 unidades</Text></Text>
                                <Text style={{fontSize: 18, color: '#fff',}}>Recarga: <Text style={{color: '#0f0',}}>14 s</Text></Text>
                            </View>
                                <Text style={styles.textModal}>Todos os inimigos no raio de efeito de Iluminação atacarão o paladino. Todos os inimigos
                                    receberão dano mágico dessa habilidade.
                                </Text>
                            </View>
                        </Modal>      
                    </View>
                </View>
                <View style={styles.borderSkill}>
                    <Image style={styles.backgroundSkill} source={require('./img/GolpeRepelente.png')} />
                    <Text style={styles.textSkill}>1/4</Text>
                    <Pressable
                        style={styles.buttons}
                        onPress={() => {
                            setThirteen(!thirteen);
                        }}
                    />
                    <View style={styles.containerModal}>
                        <Modal
                            animationType={'fade'}
                            transparent={true}
                            visible={thirteen}
                            onRequestClose={() => {
                            setThirteen(!thirteen);
                            }}
                        >
                        <View style={styles.modal}>
                            <View style={styles.containerTitleSkill}>
                                <View style={{ margin: 1, width: 55, height: 55, borderWidth: 2, borderColor: '#fa0',}}>
                                    <Image style={styles.ImageModal} source={require('./img/GolpeRepelente.png')}/>
                                </View>
                                <Text style={styles.textSKillModal}>Golpe Repelente</Text>
                                
                                <Pressable
                                    style={{width: 30, height: 25, backgroundColor: '#000', margin: 3, marginLeft: 95, borderRadius: 5,}}
                                    onPress={() => {
                                    setThirteen(!thirteen)
                                    }}
                                >
                                    <Text style={{color: '#fff', fontSize: 18, textAlign: 'center', borderWidth: 1, borderColor: '#fff', borderRadius: 5,}}>X</Text>
                                </Pressable>
                            </View>
                            <View style={{margin: 3,}}>
                                <Text style={{fontSize: 18, color: '#fff',}}>Tipo: <Text style={{color: '#0f0',}}>Ativo</Text></Text>
                                <Text style={{fontSize: 18, color: '#fff',}}>Alcance: <Text style={{color: '#0f0',}}>Corpo a corpo</Text></Text>
                                <Text style={{fontSize: 18, color: '#fff',}}>Gasto em energia: <Text style={{color: '#0f0',}}>18 unidades</Text></Text>
                                <Text style={{fontSize: 18, color: '#fff',}}>Recarga: <Text style={{color: '#0f0',}}>16 s</Text></Text>
                            </View>
                                <Text style={styles.textModal}>Um golpe de escudo que causa dano físico e empurra o inimigo alguns metros para trás, atordoando-o.
                                     O personagem recupera uma parte da vida máxima se o inimigo estiver sob o efeito da habilidade Selo do Sol.
                                </Text>
                            </View>
                        </Modal>      
                    </View>
                </View>
                <View style={styles.borderSkill}>
                    <Image style={styles.backgroundSkill} source={require('./img/ForcaInterior.png')} />
                    <Text style={styles.textSkill}>1/4</Text>
                    <Pressable
                        style={styles.buttons}
                        onPress={() => {
                            setFourteen(!fourteen);
                        }}
                    />
                    <View style={styles.containerModal}>
                        <Modal
                            animationType={'fade'}
                            transparent={true}
                            visible={fourteen}
                            onRequestClose={() => {
                            setFourteen(!fourteen);
                            }}
                        >
                        <View style={styles.modal}>
                            <View style={styles.containerTitleSkill}>
                                <View style={{ margin: 1, width: 53, height: 53, borderWidth: 2, borderColor: '#fa0',}}>
                                    <Image style={styles.ImageModal} source={require('./img/ForcaInterior.png')}/>
                                </View>
                                <Text style={styles.textSKillModal}>Força Interior</Text>
                                
                                <Pressable
                                    style={{width: 30, height: 25, backgroundColor: '#000', margin: 3, marginLeft: 122, borderRadius: 5,}}
                                    onPress={() => {
                                    setFourteen(!fourteen)
                                    }}
                                >
                                    <Text style={{color: '#fff', fontSize: 18, textAlign: 'center', borderWidth: 1, borderColor: '#fff', borderRadius: 5,}}>X</Text>
                                </Pressable>
                            </View>
                            <View style={{margin: 3,}}>
                                <Text style={{fontSize: 18, color: '#fff',}}>Tipo: <Text style={{color: '#0f0',}}>Passivo</Text></Text>
                            </View>
                                <Text style={styles.textModal}>Quando o nível de vida atual dinimui, a quantidadde de dano é reduzida.
                                </Text>
                            </View>
                        </Modal>      
                    </View>
                </View>
                <View>
                <Text style={styles.buildText}>Sequência</Text>
                <View style={styles.SequenceExp}>
                    <Text style={styles.textSequence}>1ª</Text>
                    <Text style={styles.textSequence}>2ª</Text>
                    <Text style={styles.textSequence}>3ª</Text>
                    <Text style={styles.textSequence}>4ª</Text>
                </View>
                <View style={styles.containerSequenceExp}>
                        <View style={styles.borderSkill}>
                            <Image style={styles.backgroundSkill} source={require('./img/EstandarteHarad.png')} />
                            <Text style={styles.textSkill}>4/4</Text>
                        </View>
                        <View style={styles.borderSkill}>
                            <Image style={styles.backgroundSkill} source={require('./img/EscudoSagrado.png')} />
                            <Text style={styles.textSkill}>4/4</Text>
                        </View>
                        <View style={styles.borderSkill}>
                            <Image style={styles.backgroundSkill} source={require('./img/PrecePaladino.png')} />
                            <Text style={styles.textSkill}>3/4</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.containerInitial}>
            <View style={styles.buildStart}>
                <View>
                    <Text style={styles.buildText}>Pontos Fortes</Text>
                </View>
                <View>
                <Pressable
                        style={styles.buttonsPoints2}
                        onPress={() => {
                            setPoints(!points)
                        }}
                    >
                        <Text style={styles.buildDetails}>?</Text>
                    </Pressable>
                </View>
                    <View style={styles.containerModal}>
                        <Modal
                            animationType={'fade'}
                            transparent={true}
                            visible={points}
                            onRequestClose={() => {
                            setPoints(!points);
                            }}
                        >
                        <View style={styles.modal}>
                            <View style={styles.containerTitleSkill}>
                                <Text style={styles.textSKillModal}>Pontos Fortes</Text>
                                <Pressable
                                    style={{width: 30, height: 25, backgroundColor: '#000', margin: 3, marginLeft: 170, borderRadius: 5,}}
                                    onPress={() => {
                                    setPoints(!points)
                                    }}
                                >
                                    <Text style={{color: '#fff', fontSize: 18, textAlign: 'center', borderWidth: 1, borderColor: '#fff', borderRadius: 5,}}>X</Text>
                                </Pressable>
                            </View>
                                <Text style={{fontSize: 18, color: '#fa0', justifyContent: 'center', margin: 10,}}>Os Pontos Fortes destaca as áreas em que a classe se sai bem e logo é mais procurada.</Text>
                                <Text style={{fontSize: 16, color: '#fff', justifyContent: 'center', margin: 10,}}>PVE - Players VS Environment, ou JVA, jogador VS Ambiente;</Text>
                                <Text style={{fontSize: 16, color: '#fff', justifyContent: 'center', margin: 10,}}>PVP - Player VS Players, ou JVJ, jogador VS jogador;</Text>
                                <Text style={{fontSize: 16, color: '#fff', justifyContent: 'center', margin: 10,}}>GVG - Guild VS GUild, Guilda VS Guilda.</Text>
                            </View>
                        </Modal>      
                    </View>
            </View>
            <View style={styles.points}>
                <View>
                    <Image style={styles.pointImage} source={require('../../../img/monster.png')} />
                    <Text style={styles.powerPoints}>PVE</Text>
                </View>
                <View>
                    <Image style={styles.pointImage} source={require('../../../img/war.png')} />
                    <Text style={styles.powerPoints2}>PVP</Text>
                </View>
                <View>
                    <Image style={styles.pointImage} source={require('../../../img/espadas.png')} />
                    <Text style={styles.powerPoints3}>GVG</Text>
                </View>
            </View>
            </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    containerImage: {
        width: 414,
        height: 229,
        alignItems: 'center',
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        width: '40%',
        height: '100%',
    },
    title: {
        marginTop: 145,
        fontSize: 32,
        color: '#FFF',
        fontWeight: 'bold',
        textShadowColor: '#000',
        textShadowOffset: {width: 2, height: 2,},
        textShadowRadius: 1,
    },
    subtitle: {
        fontSize: 24,
        color: '#FFF',
        fontWeight: 'bold',
        textShadowColor: '#000',
        textShadowOffset: {width: 2, height: 2,},
        textShadowRadius: 1,
    },
    describe: {
        width: '90%',
        height: 239,
        textAlign: 'center',
        alignItems: 'center',
        margin: 20,
    },
    describeText: {
        fontSize: 18,
        textAlign: 'justify',
        fontWeight: 'bold',
        color: '#000',
    },
    status: {
        marginLeft: 15,
        marginRight: 15,
        marginTop: 15,
        marginBottom: 25,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    statusText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 6,
    },
    statusImg: {
        width: 175,
        height: 32,
        marginBottom: 6,
    },
    builds: {
        width: 198,
        height: 44,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    buildText:{
        fontSize: 24,
        fontWeight: 'bold',
        marginLeft: 15,
    },
    build1: {
        width: 44,
        height: 36,
        borderRadius: 20,
        backgroundColor: '#c4c4c4',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    buildStart: {
        width: '100%',
        height: 44,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    buildDetails: {
        width: 44,
        height: 39,
        borderRadius: 20,
        color: '#000',
        backgroundColor: '#fff',
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 2,
        marginRight: 8,
        borderWidth: 3,
    },
    containerSkill: {
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 3,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        width: '88%',
    },
    backgroundSkill: {
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        width: 60,
        height: 53,
        flexWrap: 'wrap',
    },
    textSkill: {
        fontSize: 24,
        color: '#FFF',
        fontWeight: 'bold',
        textShadowColor: '#000',
        textShadowRadius: 1,
        marginTop: 25,
        marginLeft: 15,
        textShadowColor: '#000',
        textShadowOffset: {width: 2, height: 2,},
        textShadowRadius: 1,
    },
    borderSkill: {
        borderWidth: 4,
        width: 65,
        height: 60,
        marginBottom: 15,
        alignItems: 'center',
    },
    containerSequence: {
        marginLeft: 20,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        width: '70%',
    },
    sequence: {
        width: '60%',
        height: 44,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 35,    
    },
    textSequence: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
        marginTop: 10,
    },
    SequenceExp: {
        width: '90%',
        height: 44,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 40,  
    },
    containerSequenceExp: {
        marginLeft: 20,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        width: '70%',
    },
    points: {
        width: '90%',
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',  
    },
    pointImage: {
        width: 65,
        height: 70,
        margin: 5,
    },
    powerPoints: {
        color: '#000',
        fontSize: 24,
        fontWeight: 'bold',
        backgroundColor: '#fa0',
        textAlign: 'center',
        margin: 5,
        padding: 5,
        fontFamily: 'serif',
        paddingTop: 12,
        borderWidth: 5,
    },
    powerPoints2: {
        color: '#000',
        fontSize: 24,
        fontWeight: 'bold',
        backgroundColor: '#0af',
        textAlign: 'center',
        margin: 5,
        padding: 5,
        fontFamily: 'serif',
        paddingTop: 12,
        borderWidth: 5,
    },
    powerPoints3: {
        color: '#000',
        fontSize: 24,
        fontWeight: 'bold',
        backgroundColor: '#f00',
        textAlign: 'center',
        margin: 5,
        padding: 5,
        fontFamily: 'serif',
        paddingTop: 12,
        borderWidth: 5,
    },
    buttons: {
        width: 81,
        height: 70,
        resizeMode: 'cover',
        position: 'absolute',
      },  
    buttonsPoints: {
        width: 44,
        height: 39,
        borderRadius: 20,
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        marginLeft: 110,
        resizeMode: 'cover',
        position: 'absolute',
      },
      buttonsPoints2: {
        width: 44,
        height: 39,
        borderRadius: 20,
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        marginLeft: 170,
        resizeMode: 'cover',
        position: 'absolute',
      },
      buttonsPoints3: {
        width: 44,
        height: 39,
        borderRadius: 20,
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        marginLeft: 25,
        resizeMode: 'cover',
        position: 'absolute',
      },
      containerModal: {
          flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      modal: {
        alignSelf: 'center',
        backgroundColor: '#171d31',
        width: '85%',
        height: 310,
        borderWidth: 3,
        marginTop: 250,
      },
      textModal: {
        color: '#fff',
        margin: 5,
        fontSize: 16,
      },
      ImageModal: {
        borderWidth: 2,
      },
      containerTitleSkill: {
        flexDirection: 'row',
      },
      textSKillModal: {
        margin: 5,
        fontSize: 18,
        color: '#fe0',
        marginTop: 10,
      },
      containerInitial: {
          backgroundColor: '#00aaaa',
          borderWidth: 3,
      },
      
      containerInitial2: {
        backgroundColor: '#fa0',
        borderWidth: 2,
    },
})