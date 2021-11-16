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
            <Image style={styles.backgroundImage} source={require('./img/Warden.png')} />
            <View>
                <Text style={styles.title}>Guarda</Text>
            </View>
            <View>
                <Text style={styles.subtitle}>Facção: Primogênitos</Text>
            </View>
        </View>
        <View style={styles.describe}>
            <Text style={styles.describeText}>
            Os guardas passam dias meditando e realizando exercícios militares. Zelosamente 
            servindo Nuadu, eles escolheram o caminho dos defensores de todos os seres vivos. 
            Eles tomam o golpe sem hesitar e podem lutar contra múltiplos oponentes, habilmente 
            repelindo todo o ataque. Guerreiros Elven são igualmente confiantes usando armaduras 
            leves e pesadas, e são mestres habilidosos de armas corpo a corpo, sejam lanças, 
            espadas ou machados.
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
                    <Image style={styles.backgroundSkill} source={require('./img/GolpePoderoso.png')} />
                    <Text style={styles.textSkill}>1/5</Text>
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
                                <View style={{ margin: 1.3, width: 49, height: 49, borderWidth: 2, borderColor: '#fa0',}}>
                                    <Image style={styles.ImageModal} source={require('./img/GolpePoderoso.png')}/>
                                </View>
                                <Text style={styles.textSKillModal}>Golpe Poderoso</Text>
                                
                                <Pressable
                                    style={{width: 30, height: 25, backgroundColor: '#000', margin: 3, marginLeft: 100, borderRadius: 5,}}
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
                                <Text style={{fontSize: 18, color: '#fff',}}>Gasto em energia: <Text style={{color: '#0f0',}}>12 unidades</Text></Text>
                                <Text style={{fontSize: 18, color: '#fff',}}>Recarga: <Text style={{color: '#0f0',}}>9 s</Text></Text>
                            </View>
                                <Text style={styles.textModal}>Golpe que cauda dano físico extra ao inimigo.
                                </Text>
                            </View>
                        </Modal>      
                    </View>
                </View>     
                <View style={styles.borderSkill}>
                    <Image style={styles.backgroundSkill} source={require('./img/OndaAgressao.png')} />
                    <Text style={styles.textSkill}>5/5</Text>
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
                                <View style={{ margin: 1.3, width: 49, height: 49, borderWidth: 2, borderColor: '#fa0',}}>
                                    <Image style={styles.ImageModal} source={require('./img/OndaAgressao.png')}/>
                                </View>
                                <Text style={styles.textSKillModal}>Onda de Agressão</Text>
                                
                                <Pressable
                                    style={{width: 30, height: 25, backgroundColor: '#000', margin: 3, marginLeft: 80, borderRadius: 5,}}
                                    onPress={() => {
                                    setSecond(!second)
                                    }}
                                >
                                    <Text style={{color: '#fff', fontSize: 18, textAlign: 'center', borderWidth: 1, borderColor: '#fff', borderRadius: 5,}}>X</Text>
                                </Pressable>
                            </View>
                            <View style={{margin: 3,}}>
                                <Text style={{fontSize: 18, color: '#fff',}}>Tipo: <Text style={{color: '#0f0',}}>Ativo</Text></Text>
                                <Text style={{fontSize: 18, color: '#fff',}}>Alcance de uso: <Text style={{color: '#0f0',}}>5 metros</Text></Text>
                                <Text style={{fontSize: 18, color: '#fff',}}>Gasto em energia: <Text style={{color: '#0f0',}}>9 unidades</Text></Text>
                                <Text style={{fontSize: 18, color: '#fff',}}>Recarga: <Text style={{color: '#0f0',}}>7 s</Text></Text>
                            </View>
                            <Text style={styles.textModal}>Aplica o efeito "Agressão" contra o inimigo por algum tempo. O inimigo perde 
                            o alvo de ataque atual. O monstro também começa atacando o personagem e mantém a atenção no personagem. Além disso, restaura determinada 
                                    porcentagem de vida a partir do valor máximo
                            </Text>
                        </View>
                        </Modal>      
                    </View>
                </View>  
                <View style={styles.borderSkill}>
                    <Image style={styles.backgroundSkill} source={require('./img/EspiritoGuarda.png')} />
                    <Text style={styles.textSkill}>3/5</Text>
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
                                <View style={{ margin: 1.3, width: 49, height: 49, borderWidth: 2, borderColor: '#fa0',}}>
                                    <Image style={styles.ImageModal} source={require('./img/EspiritoGuarda.png')}/>
                                </View>
                                <Text style={styles.textSKillModal}>Espirito do Guarda</Text>
                                
                                <Pressable
                                    style={{width: 30, height: 25, backgroundColor: '#000', margin: 3, marginLeft: 82, borderRadius: 5,}}
                                    onPress={() => {
                                    setThree(!three)
                                    }}
                                >
                                    <Text style={{color: '#fff', fontSize: 18, textAlign: 'center', borderWidth: 1, borderColor: '#fff', borderRadius: 5,}}>X</Text>
                                </Pressable>
                            </View>
                            <View style={{margin: 3,}}>
                                <Text style={{fontSize: 18, color: '#fff',}}>Tipo: <Text style={{color: '#0f0',}}>Ativo</Text></Text>
                                <Text style={{fontSize: 18, color: '#fff',}}>Gasto em energia: <Text style={{color: '#0f0',}}>14 unidades</Text></Text>
                                <Text style={{fontSize: 18, color: '#fff',}}>Recarga: <Text style={{color: '#0f0',}}>25 s</Text></Text>
                            </View>
                                <Text style={styles.textModal}>Aplica um auxílio ao personagem que conta o dano causado por ele por meio de quaisquer ataques. 
                                    Após a conclusão do auxílio, o efeito positivo "Campo de proteção" é aplicado ao personagem. O campo absorve uma certa quantidadde 
                                    do dano causado enquanto ativo.
                                </Text>
                            </View>
                        </Modal>      
                    </View>
                </View>  
                <View style={styles.borderSkill}>
                    <Image style={styles.backgroundSkill} source={require('./img/GolpeChocante.png')} />
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
                                <View style={{ margin: 1.3, width: 51, height: 50, borderWidth: 2, borderColor: '#fa0',}}>
                                    <Image style={styles.ImageModal} source={require('./img/GolpeChocante.png')}/>
                                </View>
                                <Text style={styles.textSKillModal}>Golpe Chocante</Text>
                                
                                <Pressable
                                    style={{width: 30, height: 25, backgroundColor: '#000', margin: 3, marginLeft: 99, borderRadius: 5,}}
                                    onPress={() => {
                                    setFour(!four)
                                    }}
                                >
                                    <Text style={{color: '#fff', fontSize: 18, textAlign: 'center', borderWidth: 1, borderColor: '#fff', borderRadius: 5,}}>X</Text>
                                </Pressable>
                            </View>
                            <View style={{margin: 3,}}>
                                <Text style={{fontSize: 18, color: '#fff',}}>Tipo: <Text style={{color: '#0f0',}}>Ativo</Text></Text>
                                <Text style={{fontSize: 18, color: '#fff',}}>Alcance de uso: <Text style={{color: '#0f0',}}>Corpo a corpo</Text></Text>
                                <Text style={{fontSize: 18, color: '#fff',}}>Gasto em energia: <Text style={{color: '#0f0',}}>12 unidades</Text></Text>
                                <Text style={{fontSize: 18, color: '#fff',}}>Recarga: <Text style={{color: '#0f0',}}>14 s</Text></Text>
                            </View>
                                <Text style={styles.textModal}>Golpe que causa o efeito negativo "Atordoar" ao inimigo por algum tempo. O adversário não pode se 
                                    mexer ou aplicar habilidades. Danos sofridos pelo alvo não prejudicam o efeito.
                                </Text>
                            </View>
                        </Modal>      
                    </View>
                </View>  
                <View style={styles.borderSkill}>
                    <Image style={styles.backgroundSkill} source={require('./img/Punicao.png')} />
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
                                <View style={{ margin: 1.3, width: 50, height: 50, borderWidth: 2, borderColor: '#fa0',}}>
                                    <Image style={styles.ImageModal} source={require('./img/Punicao.png')}/>
                                </View>
                                <Text style={styles.textSKillModal}>Punição</Text>
                                
                                <Pressable
                                    style={{width: 30, height: 25, backgroundColor: '#000', margin: 3, marginLeft: 165, borderRadius: 5,}}
                                    onPress={() => {
                                    setFive(!five)
                                    }}
                                >
                                    <Text style={{color: '#fff', fontSize: 18, textAlign: 'center', borderWidth: 1, borderColor: '#fff', borderRadius: 5,}}>X</Text>
                                </Pressable>
                            </View>
                            <View style={{margin: 3,}}>
                                <Text style={{fontSize: 18, color: '#fff',}}>Tipo: <Text style={{color: '#0f0',}}>Ativo</Text></Text>
                                <Text style={{fontSize: 18, color: '#fff',}}>Alcance de uso: <Text style={{color: '#0f0',}}>Corpo a corpo</Text></Text>
                                <Text style={{fontSize: 18, color: '#fff',}}>Gasto em energia: <Text style={{color: '#0f0',}}>13 unidades</Text></Text>
                                <Text style={{fontSize: 18, color: '#fff',}}>Recarga: <Text style={{color: '#0f0',}}>15 s</Text></Text>
                            </View>
                                <Text style={styles.textModal}>Golpe que reduz o parâmetro de precisão do adversário por algum tempo.
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
                    <Image style={styles.backgroundSkill} source={require('./img/EspiritoGuarda.png')} />
                    <Text style={styles.textSkill}>3/5</Text>
                </View>
                <View style={styles.borderSkill}>
                    <Image style={styles.backgroundSkill} source={require('./img/OndaAgressao.png')} />
                    <Text style={styles.textSkill}>5/5</Text>
                </View>
                <View style={styles.borderSkill}>
                    <Image style={styles.backgroundSkill} source={require('./img/Punicao.png')} />
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
                    <Image style={styles.backgroundSkill} source={require('./img/Fortificacao.png')} />
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
                                <View style={{ margin: 1.3, }}>
                                    <Image style={styles.ImageModal} source={require('./img/Fortificacao.png')}/>
                                </View>
                                <Text style={styles.textSKillModal}>Fortificação</Text>
                                
                                <Pressable
                                    style={{width: 30, height: 25, backgroundColor: '#000', margin: 3, marginLeft: 133, borderRadius: 5,}}
                                    onPress={() => {
                                    setSix(!six)
                                    }}
                                >
                                    <Text style={{color: '#fff', fontSize: 18, textAlign: 'center', borderWidth: 1, borderColor: '#fff', borderRadius: 5,}}>X</Text>
                                </Pressable>
                            </View>
                            <View style={{margin: 3,}}>
                                <Text style={{fontSize: 18, color: '#fff',}}>Tipo: <Text style={{color: '#0f0',}}>Ativo</Text></Text>
                                <Text style={{fontSize: 18, color: '#fff',}}>Gasto em energia: <Text style={{color: '#0f0',}}>20 unidades</Text></Text>
                                <Text style={{fontSize: 18, color: '#fff',}}>Consumo de energia: <Text style={{color: '#0f0',}}>4 unidades em 2s</Text></Text>
                                <Text style={{fontSize: 18, color: '#fff',}}>Recarga: <Text style={{color: '#0f0',}}>8 s</Text></Text>
                            </View>
                                <Text style={styles.textModal}>Reduz todo o dano recebido pelo personagem enquanto a habilidade estiver em vigor. Habilidade com 
                                    consumo constante de energia.
                                </Text>
                            </View>
                        </Modal>      
                    </View>
                </View>      
                <View style={styles.borderSkill}>
                    <Image style={styles.backgroundSkill} source={require('./img/MestreBloqueio.png')} />
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
                                <View style={{ margin: 1.3, }}>
                                    <Image style={styles.ImageModal} source={require('./img/MestreBloqueio.png')}/>
                                </View>
                                <Text style={styles.textSKillModal}>Mestre do Bloqueio</Text>
                                
                                <Pressable
                                    style={{width: 30, height: 25, backgroundColor: '#000', margin: 3, marginLeft: 72, borderRadius: 5,}}
                                    onPress={() => {
                                    setSeven(!seven)
                                    }}
                                >
                                    <Text style={{color: '#fff', fontSize: 18, textAlign: 'center', borderWidth: 1, borderColor: '#fff', borderRadius: 5,}}>X</Text>
                                </Pressable>
                            </View>
                            <View style={{margin: 3,}}>
                                <Text style={{fontSize: 18, color: '#fff',}}>Tipo: <Text style={{color: '#0f0',}}>Passivo</Text></Text>
                            </View>
                                <Text style={styles.textModal}>Restaura uma porcentagem da vida ausente do personagem ao Bloquear um ataque.
                                </Text>
                            </View>
                        </Modal>      
                    </View>
                </View>
                <View style={styles.borderSkill}>
                    <Image style={styles.backgroundSkill} source={require('./img/FuriaGuarda.png')} />
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
                                <View style={{ margin: 1.3, }}>
                                    <Image style={styles.ImageModal} source={require('./img/FuriaGuarda.png')}/>
                                </View>
                                <Text style={styles.textSKillModal}>Fúria do Guarda</Text>
                                
                                <Pressable
                                    style={{width: 30, height: 25, backgroundColor: '#000', margin: 3, marginLeft: 102, borderRadius: 5,}}
                                    onPress={() => {
                                    setEight(!eight)
                                    }}
                                >
                                    <Text style={{color: '#fff', fontSize: 18, textAlign: 'center', borderWidth: 1, borderColor: '#fff', borderRadius: 5,}}>X</Text>
                                </Pressable>
                            </View>
                            <View style={{margin: 3,}}>
                                <Text style={{fontSize: 18, color: '#fff',}}>Tipo: <Text style={{color: '#0f0',}}>Ativo</Text></Text>
                                <Text style={{fontSize: 18, color: '#fff',}}>Gasto em energia: <Text style={{color: '#0f0',}}>14 unidades</Text></Text>
                                <Text style={{fontSize: 18, color: '#fff',}}>Recarga: <Text style={{color: '#0f0',}}>14 s</Text></Text>
                            </View>
                                <Text style={styles.textModal}>Aplica o efeito "Agressão" a todos os inimigos em um raio de alguns metros do personagem e reduz-lhe 
                                    os poderes físico e mágico por algum tempo.
                                </Text>
                            </View>
                        </Modal>      
                    </View>
                </View>
                <View style={styles.borderSkill}>
                    <Image style={styles.backgroundSkill} source={require('./img/ResistenciaNatural.png')} />
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
                                <View style={{ margin: 1.3,}}>
                                    <Image style={styles.ImageModal} source={require('./img/ResistenciaNatural.png')}/>
                                </View>
                                <Text style={styles.textSKillModal}>Resistência Natural</Text>
                                
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
                                <Text style={{fontSize: 18, color: '#fff',}}>Gasto em energia: <Text style={{color: '#0f0',}}>22 unidades</Text></Text>
                                <Text style={{fontSize: 18, color: '#fff',}}>Recarga: <Text style={{color: '#0f0',}}>25 s</Text></Text>
                            </View>
                                <Text style={styles.textModal}>Aumenta o parâmetro de "Resistência" do personagem por um tempo determinado.
                                </Text>
                            </View>
                        </Modal>      
                    </View>
                </View>
                <View style={styles.borderSkill}>
                    <Image style={styles.backgroundSkill} source={require('./img/ProtecaoGuarda.png')} />
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
                                <View style={{ margin: 1.3, }}>
                                    <Image style={styles.ImageModal} source={require('./img/ProtecaoGuarda.png')}/>
                                </View>
                                <Text style={styles.textSKillModal}>Proteção do Guarda</Text>
                                
                                <Pressable
                                    style={{width: 30, height: 25, backgroundColor: '#000', margin: 3, marginLeft: 70, borderRadius: 5,}}
                                    onPress={() => {
                                    setTen(!ten)
                                    }}
                                >
                                    <Text style={{color: '#fff', fontSize: 18, textAlign: 'center', borderWidth: 1, borderColor: '#fff', borderRadius: 5,}}>X</Text>
                                </Pressable>
                            </View>
                            <View style={{margin: 3,}}>
                                <Text style={{fontSize: 18, color: '#fff',}}>Tipo: <Text style={{color: '#0f0',}}>Ativo</Text></Text>
                                <Text style={{fontSize: 18, color: '#fff',}}>Alcance: <Text style={{color: '#0f0',}}>4 metros</Text></Text>
                                <Text style={{fontSize: 18, color: '#fff',}}>Gasto em energia: <Text style={{color: '#0f0',}}>14 unidades</Text></Text>
                                <Text style={{fontSize: 18, color: '#fff',}}>Recarga: <Text style={{color: '#0f0',}}>30 s</Text></Text>
                            </View>
                                <Text style={styles.textModal}>Aplica o auxílio Proteção do Guardião a um aliado por algum tempo. A defesa do guardião reduz 
                                    o dano recebido de um aliado em certa porcentagem, mas parte desse dano é recebida pelo personagem. Apartir de certo nível 
                                    de vida atual o efeito não funciona.
                                </Text>
                            </View>
                        </Modal>      
                    </View>
                </View>
                <View style={styles.borderSkill}>
                    <Image style={styles.backgroundSkill} source={require('./img/RouboPoder.png')} />
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
                                <View style={{ margin: 1.3, }}>
                                    <Image style={styles.ImageModal} source={require('./img/RouboPoder.png')}/>
                                </View>
                                <Text style={styles.textSKillModal}>Roubo de Poder</Text>
                                
                                <Pressable
                                    style={{width: 30, height: 25, backgroundColor: '#000', margin: 3, marginLeft: 102, borderRadius: 5,}}
                                    onPress={() => {
                                    setEleven(!Eleven)
                                    }}
                                >
                                    <Text style={{color: '#fff', fontSize: 18, textAlign: 'center', borderWidth: 1, borderColor: '#fff', borderRadius: 5,}}>X</Text>
                                </Pressable>
                            </View>
                            <View style={{margin: 3,}}>
                                <Text style={{fontSize: 18, color: '#fff',}}>Tipo: <Text style={{color: '#0f0',}}>Ativo</Text></Text>
                                <Text style={{fontSize: 18, color: '#fff',}}>Alcance: <Text style={{color: '#0f0',}}>3 metros</Text></Text>
                                <Text style={{fontSize: 18, color: '#fff',}}>Gasto em energia: <Text style={{color: '#0f0',}}>20 unidades</Text></Text>
                                <Text style={{fontSize: 18, color: '#fff',}}>Recarga: <Text style={{color: '#0f0',}}>18 s</Text></Text>
                            </View>
                                <Text style={styles.textModal}>Reduz os poderes físicos e mágico do inimigo e aumenta o parâmetro força de ataque do personagem 
                                    por algum tempo.
                                </Text>
                            </View>
                        </Modal>      
                    </View>
                </View>
                <View style={styles.borderSkill}>
                    <Image style={styles.backgroundSkill} source={require('./img/Permutacao.png')} />
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
                                <View style={{ margin: 1.3,}}>
                                    <Image style={styles.ImageModal} source={require('./img/Permutacao.png')}/>
                                </View>
                                <Text style={styles.textSKillModal}>Permutação</Text>
                                
                                <Pressable
                                    style={{width: 30, height: 25, backgroundColor: '#000', margin: 3, marginLeft: 130, borderRadius: 5,}}
                                    onPress={() => {
                                    setTwelve(!twelve)
                                    }}
                                >
                                    <Text style={{color: '#fff', fontSize: 18, textAlign: 'center', borderWidth: 1, borderColor: '#fff', borderRadius: 5,}}>X</Text>
                                </Pressable>
                            </View>
                            <View style={{margin: 3,}}>
                                <Text style={{fontSize: 18, color: '#fff',}}>Tipo: <Text style={{color: '#0f0',}}>Ativo</Text></Text>
                                <Text style={{fontSize: 18, color: '#fff',}}>Alcance: <Text style={{color: '#0f0',}}>4 metros</Text></Text>
                                <Text style={{fontSize: 18, color: '#fff',}}>Gasto em energia: <Text style={{color: '#0f0',}}>16 unidades</Text></Text>
                                <Text style={{fontSize: 18, color: '#fff',}}>Recarga: <Text style={{color: '#0f0',}}>16 s</Text></Text>
                            </View>
                                <Text style={styles.textModal}>Troca o personagem com o inimigo e reduz a velocidade de movimento do oponente por um tempo 
                                    determinado.
                                </Text>
                            </View>
                        </Modal>      
                    </View>
                </View>
                <View style={styles.borderSkill}>
                    <Image style={styles.backgroundSkill} source={require('./img/ArremetidaPoderosa.png')} />
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
                                <View style={{ margin: 1.3,}}>
                                    <Image style={styles.ImageModal} source={require('./img/ArremetidaPoderosa.png')}/>
                                </View>
                                <Text style={styles.textSKillModal}>Arremetida Poderosa</Text>
                                
                                <Pressable
                                    style={{width: 30, height: 25, backgroundColor: '#000', margin: 3, marginLeft: 60, borderRadius: 5,}}
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
                                <Text style={{fontSize: 18, color: '#fff',}}>Recarga: <Text style={{color: '#0f0',}}>13 s</Text></Text>
                            </View>
                                <Text style={styles.textModal}>Golpe que causa dano físico ao alvo e uma porcentagem específica desse dano a todos os inimigos 
                                    dentro de um raio de alguns metros do alvo.
                                </Text>
                            </View>
                        </Modal>      
                    </View>
                </View>
                <View style={styles.borderSkill}>
                    <Image style={styles.backgroundSkill} source={require('./img/GolpeEscudo.png')} />
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
                                <View style={{ margin: 1.3, width: 52, height: 52, borderWidth: 2, borderColor: '#fa0',}}>
                                    <Image style={styles.ImageModal} source={require('./img/GolpeEscudo.png')}/>
                                </View>
                                <Text style={styles.textSKillModal}>Arremesso de Escudo</Text>
                                
                                <Pressable
                                    style={{width: 30, height: 25, backgroundColor: '#000', margin: 3, marginLeft: 50, borderRadius: 5,}}
                                    onPress={() => {
                                    setFourteen(!fourteen)
                                    }}
                                >
                                    <Text style={{color: '#fff', fontSize: 18, textAlign: 'center', borderWidth: 1, borderColor: '#fff', borderRadius: 5,}}>X</Text>
                                </Pressable>
                            </View>
                            <View style={{margin: 3,}}>
                                <Text style={{fontSize: 18, color: '#fff',}}>Tipo: <Text style={{color: '#0f0',}}>Ativo</Text></Text>
                                <Text style={{fontSize: 18, color: '#fff',}}>Alcance de uso: <Text style={{color: '#0f0',}}>3 metros</Text></Text>
                                <Text style={{fontSize: 18, color: '#fff',}}>Gasto em energia: <Text style={{color: '#0f0',}}>18 unidades</Text></Text>
                                <Text style={{fontSize: 18, color: '#fff',}}>Recarga: <Text style={{color: '#0f0',}}>14 s</Text></Text>
                            </View>
                                <Text style={styles.textModal}>Escudo arremessado que causa dano físico a um inimigo e tem um chance de atordoar o inimigo 
                                    por um tempo.
                                </Text>
                            </View>
                        </Modal>      
                    </View>
                </View>
            </View>
        <View>
            <Text style={styles.buildText}>Sequência</Text>
            <View style={styles.SequenceExp}>
                <Text style={styles.textSequence}>1ª</Text>
                <Text style={styles.textSequence}>2ª</Text>
                <Text style={styles.textSequence}>3ª</Text>
            </View>
            <View style={styles.containerSequenceExp}>
                    <View style={styles.borderSkill}>
                        <Image style={styles.backgroundSkill} source={require('./img/Fortificacao.png')} />
                        <Text style={styles.textSkill}>4/4</Text>
                    </View>
                    <View style={styles.borderSkill}>
                        <Image style={styles.backgroundSkill} source={require('./img/MestreBloqueio.png')} />
                        <Text style={styles.textSkill}>4/4</Text>
                    </View>
                    <View style={styles.borderSkill}>
                        <Image style={styles.backgroundSkill} source={require('./img/FuriaGuarda.png')} />
                        <Text style={styles.textSkill}>4/4</Text>
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
        width: '35%',
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
        height: 47,
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
        width: '60%',
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
        width: '30%',
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