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
            <Image style={styles.backgroundImage} source={require('./img/Necromancer.png')} />
            <View>
                <Text style={styles.title}>Necromante</Text>
            </View>
            <View>
                <Text style={styles.subtitle}>Facção: Proscritos</Text>
            </View>
        </View>
        <View style={styles.describe}>
            <Text style={styles.describeText}>
            Por muitos séculos, os necromantes transformaram suas habilidades negras em armas de 
            vingança contra todos os seres vivos. Os Necromancers protegem seus aliados com 
            escudos firmes feitos de osso. Além disso, eles são capazes de restaurar o poder 
            de seus satélites com a ajuda de forças antigas. Muitas vezes, os necromanceres desistem 
            de um pouco de seu sangue morto para cumprir feitiços sem gastar energia mágica.
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
                    <Image style={styles.backgroundSkill} source={require('./img/CuspeVenenoso.png')} />
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
                                <View style={{ margin: 1.3, width: 52, height: 52, borderWidth: 2, borderColor: '#fa0',}}>
                                    <Image style={styles.ImageModal} source={require('./img/CuspeVenenoso.png')}/>
                                </View>
                                <Text style={styles.textSKillModal}>Cuspe Venenoso</Text>
                                
                                <Pressable
                                    style={{width: 30, height: 25, backgroundColor: '#000', margin: 3, marginLeft: 90, borderRadius: 5,}}
                                    onPress={() => {
                                    setFirst(!first)
                                    }}
                                >
                                    <Text style={{color: '#fff', fontSize: 18, textAlign: 'center', borderWidth: 1, borderColor: '#fff', borderRadius: 5,}}>X</Text>
                                </Pressable>
                            </View>
                            <View style={{margin: 3,}}>
                                <Text style={{fontSize: 18, color: '#fff',}}>Tipo: <Text style={{color: '#0f0',}}>Ativo</Text></Text>
                                <Text style={{fontSize: 18, color: '#fff',}}>Alcance de uso: <Text style={{color: '#0f0',}}>5 metros</Text></Text>
                                <Text style={{fontSize: 18, color: '#fff',}}>Gasto em energia: <Text style={{color: '#0f0',}}>15 unidades</Text></Text>
                                <Text style={{fontSize: 18, color: '#fff',}}>Recarga: <Text style={{color: '#0f0',}}>9 s</Text></Text>
                            </View>
                                <Text style={styles.textModal}>O personagem atinge o alvo com uma substância venenosa e causa dano mágico. Se o alvo já estiver sido 
                                    alvo duas vezes da habilidade Olho Mortal, o corpo dele ficará intoxicado. Por um período, ele sofrerá dano mágico.
                                </Text>
                            </View>
                        </Modal>      
                    </View>
                </View>     
                <View style={styles.borderSkill}>
                    <Image style={styles.backgroundSkill} source={require('./img/OlhoMortal.png')} />
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
                                <View style={{ margin: 1.3, width: 52, height: 52, borderWidth: 2, borderColor: '#fa0',}}>
                                    <Image style={styles.ImageModal} source={require('./img/OlhoMortal.png')}/>
                                </View>
                                <Text style={styles.textSKillModal}>Olho Mortal</Text>
                                
                                <Pressable
                                    style={{width: 30, height: 25, backgroundColor: '#000', margin: 3, marginLeft: 135, borderRadius: 5,}}
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
                                <Text style={{fontSize: 18, color: '#fff',}}>Gasto em energia: <Text style={{color: '#0f0',}}>8 unidades</Text></Text>
                                <Text style={{fontSize: 18, color: '#fff',}}>Recarga: <Text style={{color: '#0f0',}}>2 s</Text></Text>
                            </View>
                            <Text style={styles.textModal}>Reduz a vida máxima e a defesa mágica do alvo em uma pequena porcentagem. Essa habilidade pode ser 
                                usada duas vezes no mesmo alvo durante um breve momento. O percentual de defesa mágica e vida reduzida aumenta conforme o nível 
                                da habilidade.
                            </Text>
                        </View>
                        </Modal>      
                    </View>
                </View>  
                <View style={styles.borderSkill}>
                    <Image style={styles.backgroundSkill} source={require('./img/Pesadelos.png')} />
                    <Text style={styles.textSkill}>1/5</Text>
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
                                <View style={{ margin: 1.3, width: 52, height: 52, borderWidth: 2, borderColor: '#fa0',}}>
                                    <Image style={styles.ImageModal} source={require('./img/Pesadelos.png')}/>
                                </View>
                                <Text style={styles.textSKillModal}>Pesadelos</Text>
                                
                                <Pressable
                                    style={{width: 30, height: 25, backgroundColor: '#000', margin: 3, marginLeft: 145, borderRadius: 5,}}
                                    onPress={() => {
                                    setThree(!three)
                                    }}
                                >
                                    <Text style={{color: '#fff', fontSize: 18, textAlign: 'center', borderWidth: 1, borderColor: '#fff', borderRadius: 5,}}>X</Text>
                                </Pressable>
                            </View>
                            <View style={{margin: 3,}}>
                                <Text style={{fontSize: 18, color: '#fff',}}>Tipo: <Text style={{color: '#0f0',}}>Ativo</Text></Text>
                                <Text style={{fontSize: 18, color: '#fff',}}>Alcance de uso: <Text style={{color: '#0f0',}}>4 metros</Text></Text>
                                <Text style={{fontSize: 18, color: '#fff',}}>Gasto em energia: <Text style={{color: '#0f0',}}>20 unidades</Text></Text>
                                <Text style={{fontSize: 18, color: '#fff',}}>Recarga: <Text style={{color: '#0f0',}}>15 s</Text></Text>
                            </View>
                                <Text style={styles.textModal}>Acalma o inimigo, fazendo cair em sono. Enquanto o alvo estiver tendo pesadelos, ele não poderá 
                                    regenerar pontos de vida nem de energia. O alvo acordará e receber dano.
                                </Text>
                            </View>
                        </Modal>      
                    </View>
                </View>  
                <View style={styles.borderSkill}>
                    <Image style={styles.backgroundSkill} source={require('./img/EscudoOssos.png')} />
                    <Text style={styles.textSkill}>5/5</Text>
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
                                    <Image style={styles.ImageModal} source={require('./img/EscudoOssos.png')}/>
                                </View>
                                <Text style={styles.textSKillModal}>Escudo de Ossos</Text>
                                
                                <Pressable
                                    style={{width: 30, height: 25, backgroundColor: '#000', margin: 3, marginLeft: 90, borderRadius: 5,}}
                                    onPress={() => {
                                    setFour(!four)
                                    }}
                                >
                                    <Text style={{color: '#fff', fontSize: 18, textAlign: 'center', borderWidth: 1, borderColor: '#fff', borderRadius: 5,}}>X</Text>
                                </Pressable>
                            </View>
                            <View style={{margin: 3,}}>
                                <Text style={{fontSize: 18, color: '#fff',}}>Tipo: <Text style={{color: '#0f0',}}>Ativo</Text></Text>
                                <Text style={{fontSize: 18, color: '#fff',}}>Alcance de uso: <Text style={{color: '#0f0',}}>4 metros</Text></Text>
                                <Text style={{fontSize: 18, color: '#fff',}}>Gasto em energia: <Text style={{color: '#0f0',}}>14 unidades</Text></Text>
                                <Text style={{fontSize: 18, color: '#fff',}}>Recarga: <Text style={{color: '#0f0',}}>12 s</Text></Text>
                            </View>
                                <Text style={styles.textModal}>Cria um forte de escudo ao redor do personagem ou de um aliado, que absorverá uma quantidadde 
                                    de dano. O dano absorvido pelo escudo aumenta conforme o nível da habilidade.
                                </Text>
                            </View>
                        </Modal>      
                    </View>
                </View>  
                <View style={styles.borderSkill}>
                    <Image style={styles.backgroundSkill} source={require('./img/SeloAncestral.png')} />
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
                                <View style={{ margin: 1.3, width: 52, height: 52, borderWidth: 2, borderColor: '#fa0',}}>
                                    <Image style={styles.ImageModal} source={require('./img/SeloAncestral.png')}/>
                                </View>
                                <Text style={styles.textSKillModal}>Selo Ancestral</Text>
                                
                                <Pressable
                                    style={{width: 30, height: 25, backgroundColor: '#000', margin: 3, marginLeft: 112, borderRadius: 5,}}
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
                                <Text style={{fontSize: 18, color: '#fff',}}>Gasto em energia: <Text style={{color: '#0f0',}}>14 unidades</Text></Text>
                                <Text style={{fontSize: 18, color: '#fff',}}>Recarga: <Text style={{color: '#0f0',}}>8 s</Text></Text>
                            </View>
                                <Text style={styles.textModal}>Restaura com poder mágico uma quantidade de pontos de vida do personagem ou de um aliado 
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
                    <Image style={styles.backgroundSkill} source={require('./img/SeloAncestral.png')} />
                    <Text style={styles.textSkill}>5/5</Text>
                </View>
                <View style={styles.borderSkill}>
                    <Image style={styles.backgroundSkill} source={require('./img/EscudoOssos.png')} />
                    <Text style={styles.textSkill}>5/5</Text>
                </View>
                <View style={styles.borderSkill}>
                    <Image style={styles.backgroundSkill} source={require('./img/CuspeVenenoso.png')} />
                    <Text style={styles.textSkill}>3/5</Text>
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
                    <Image style={styles.backgroundSkill} source={require('./img/ChuvaAcida.png')} />
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
                                    <Image style={styles.ImageModal} source={require('./img/ChuvaAcida.png')}/>
                                </View>
                                <Text style={styles.textSKillModal}>Chuva Ácida</Text>
                                
                                <Pressable
                                    style={{width: 30, height: 25, backgroundColor: '#000', margin: 3, marginLeft: 130, borderRadius: 5,}}
                                    onPress={() => {
                                    setSix(!six)
                                    }}
                                >
                                    <Text style={{color: '#fff', fontSize: 18, textAlign: 'center', borderWidth: 1, borderColor: '#fff', borderRadius: 5,}}>X</Text>
                                </Pressable>
                            </View>
                            <View style={{margin: 3,}}>
                                <Text style={{fontSize: 18, color: '#fff',}}>Tipo: <Text style={{color: '#0f0',}}>Ativo</Text></Text>
                                <Text style={{fontSize: 18, color: '#fff',}}>Alcance: <Text style={{color: '#0f0',}}>5 metros</Text></Text>
                                <Text style={{fontSize: 18, color: '#fff',}}>Gasto em energia: <Text style={{color: '#0f0',}}>18 unidades</Text></Text>
                                <Text style={{fontSize: 18, color: '#fff',}}>Recarga: <Text style={{color: '#0f0',}}>25 s</Text></Text>
                            </View>
                                <Text style={styles.textModal}>Resulta em chuva tóxica que causa dano aos inimigo. Quando a chuva acabar, os inimigos estarão 
                                    envenenados.
                                </Text>
                            </View>
                        </Modal>      
                    </View>
                </View>      
                <View style={styles.borderSkill}>
                    <Image style={styles.backgroundSkill} source={require('./img/EscudoVenenoso.png')} />
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
                                    <Image style={styles.ImageModal} source={require('./img/EscudoVenenoso.png')}/>
                                </View>
                                <Text style={styles.textSKillModal}>Escudo Venenoso</Text>
                                
                                <Pressable
                                    style={{width: 30, height: 25, backgroundColor: '#000', margin: 3, marginLeft: 85, borderRadius: 5,}}
                                    onPress={() => {
                                    setSeven(!seven)
                                    }}
                                >
                                    <Text style={{color: '#fff', fontSize: 18, textAlign: 'center', borderWidth: 1, borderColor: '#fff', borderRadius: 5,}}>X</Text>
                                </Pressable>
                            </View>
                            <View style={{margin: 3,}}>
                                <Text style={{fontSize: 18, color: '#fff',}}>Tipo: <Text style={{color: '#0f0',}}>Ativo</Text></Text>
                                <Text style={{fontSize: 18, color: '#fff',}}>Alcance: <Text style={{color: '#0f0',}}>5 metros</Text></Text>
                                <Text style={{fontSize: 18, color: '#fff',}}>Gasto em energia: <Text style={{color: '#0f0',}}>18 unidades</Text></Text>
                                <Text style={{fontSize: 18, color: '#fff',}}>Recarga: <Text style={{color: '#0f0',}}>15 s</Text></Text>
                            </View>
                                <Text style={styles.textModal}>Conjura um escudo venenoso no héroi ao aliado. O escudo causa dano mágico em todos os inimigos em 
                                    determinada área em volta do personagem. O personagem ou o aliado recupera mais vida se estiver sob o efeito da Chuva tóxica.
                                </Text>
                            </View>
                        </Modal>      
                    </View>
                </View>
                <View style={styles.borderSkill}>
                    <Image style={styles.backgroundSkill} source={require('./img/PoderSombrio.png')} />
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
                                <View style={{ margin: 1.3,}}>
                                    <Image style={styles.ImageModal} source={require('./img/PoderSombrio.png')}/>
                                </View>
                                <Text style={styles.textSKillModal}>Poder Sombrio</Text>
                                
                                <Pressable
                                    style={{width: 30, height: 25, backgroundColor: '#000', margin: 3, marginLeft: 112, borderRadius: 5,}}
                                    onPress={() => {
                                    setEight(!eight)
                                    }}
                                >
                                    <Text style={{color: '#fff', fontSize: 18, textAlign: 'center', borderWidth: 1, borderColor: '#fff', borderRadius: 5,}}>X</Text>
                                </Pressable>
                            </View>
                            <View style={{margin: 3,}}>
                                <Text style={{fontSize: 18, color: '#fff',}}>Tipo: <Text style={{color: '#0f0',}}>Ativo</Text></Text>
                                <Text style={{fontSize: 18, color: '#fff',}}>Gasto em energia: <Text style={{color: '#0f0',}}>26 unidades</Text></Text>
                                <Text style={{fontSize: 18, color: '#fff',}}>Recarga: <Text style={{color: '#0f0',}}>60 s</Text></Text>
                            </View>
                                <Text style={styles.textModal}>Aumenta o poder físico e mágico de todos os membros do grupo em determinada porcentagem por algum 
                                    tempo. O poder e tempo do efeito aumentam conforme nível da habilidade.
                                </Text>
                            </View>
                        </Modal>      
                    </View>
                </View>
                <View style={styles.borderSkill}>
                    <Image style={styles.backgroundSkill} source={require('./img/PresenteRenascer.png')} />
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
                                <View style={{ margin: 1, width: 50, height: 52, borderWidth: 2, borderColor: '#fa0',}}>
                                    <Image style={styles.ImageModal} source={require('./img/PresenteRenascer.png')}/>
                                </View>
                                <Text style={styles.textSKillModal}>Presente do Renascer</Text>
                                
                                <Pressable
                                    style={{width: 30, height: 25, backgroundColor: '#000', margin: 3, marginLeft: 55, borderRadius: 5,}}
                                    onPress={() => {
                                    SetNine(!nine)
                                    }}
                                >
                                    <Text style={{color: '#fff', fontSize: 18, textAlign: 'center', borderWidth: 1, borderColor: '#fff', borderRadius: 5,}}>X</Text>
                                </Pressable>
                            </View>
                            <View style={{margin: 3,}}>
                                <Text style={{fontSize: 18, color: '#fff',}}>Tipo: <Text style={{color: '#0f0',}}>Ativo</Text></Text>
                                <Text style={{fontSize: 18, color: '#fff',}}>Gasto em energia: <Text style={{color: '#0f0',}}>90 unidades</Text></Text>
                                <Text style={{fontSize: 18, color: '#fff',}}>Recarga: <Text style={{color: '#0f0',}}>360 s</Text></Text>
                            </View>
                                <Text style={styles.textModal}>Revive instantaneamente um membro do grupo dentro do raio de vários metros do personagem, transportando-o 
                                    para o conjurador. Não pode ser usado durante combates na arena.
                                </Text>
                            </View>
                        </Modal>      
                    </View>
                </View>
                <View style={styles.borderSkill}>
                    <Image style={styles.backgroundSkill} source={require('./img/SoldadoMorto.png')} />
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
                                <View style={{ margin: 1, width: 52, height: 51, borderWidth: 2, borderColor: '#fa0',}}>
                                    <Image style={styles.ImageModal} source={require('./img/SoldadoMorto.png')}/>
                                </View>
                                <Text style={styles.textSKillModal}>Soldado Morto</Text>
                                
                                <Pressable
                                    style={{width: 30, height: 25, backgroundColor: '#000', margin: 3, marginLeft: 110, borderRadius: 5,}}
                                    onPress={() => {
                                    setTen(!ten)
                                    }}
                                >
                                    <Text style={{color: '#fff', fontSize: 18, textAlign: 'center', borderWidth: 1, borderColor: '#fff', borderRadius: 5,}}>X</Text>
                                </Pressable>
                            </View>
                            <View style={{marginLeft: 3,}}>
                                <Text style={{fontSize: 17, color: '#fff',}}>Tipo: <Text style={{color: '#0f0',}}>Ativo</Text></Text>
                                <Text style={{fontSize: 17, color: '#fff',}}>Alcance: <Text style={{color: '#0f0',}}>5 metros</Text></Text>
                                <Text style={{fontSize: 17, color: '#fff',}}>Gasto em energia: <Text style={{color: '#0f0',}}>28 unidades</Text></Text>
                                <Text style={{fontSize: 17, color: '#fff',}}>Recarga: <Text style={{color: '#0f0',}}>45 s</Text></Text>
                            </View>
                                <Text style={styles.textModal}>Coloca um totem na área que evocarará um esqueleto a cada poucos segundos para cada monstro ou 
                                    jogador morto na área específica, causando dano mágico ao inimigo, ou um guerreiro esqueleto com chance igual ao valor do parâmetro 
                                    de acerto crítico do personagem que causará dano aumentado ao inimigo.
                                </Text>
                            </View>
                        </Modal>      
                    </View>
                </View>
                <View style={styles.borderSkill}>
                    <Image style={styles.backgroundSkill} source={require('./img/ConexaoFatidica.png')} />
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
                                <View style={{ margin: 1, width: 51, height: 52, borderWidth: 2, borderColor: '#fa0',}}>
                                    <Image style={styles.ImageModal} source={require('./img/ConexaoFatidica.png')}/>
                                </View>
                                <Text style={styles.textSKillModal}>Conexão Fatídica</Text>
                                
                                <Pressable
                                    style={{width: 30, height: 25, backgroundColor: '#000', margin: 3, marginLeft: 90, borderRadius: 5,}}
                                    onPress={() => {
                                    setEleven(!Eleven)
                                    }}
                                >
                                    <Text style={{color: '#fff', fontSize: 18, textAlign: 'center', borderWidth: 1, borderColor: '#fff', borderRadius: 5,}}>X</Text>
                                </Pressable>
                            </View>
                            <View style={{margin: 3,}}>
                                <Text style={{fontSize: 18, color: '#fff',}}>Tipo: <Text style={{color: '#0f0',}}>Ativo</Text></Text>
                                <Text style={{fontSize: 18, color: '#fff',}}>Alcance: <Text style={{color: '#0f0',}}>5 metros</Text></Text>
                                <Text style={{fontSize: 18, color: '#fff',}}>Gasto em energia: <Text style={{color: '#0f0',}}>26 unidades</Text></Text>
                                <Text style={{fontSize: 18, color: '#fff',}}>Recarga: <Text style={{color: '#0f0',}}>22 s</Text></Text>
                            </View>
                                <Text style={styles.textModal}>Conecta todos os inimigos na área selecionada com fios mágicos. Parte do dano causado a eles é 
                                    transferido aos demais.
                                </Text>
                            </View>
                        </Modal>      
                    </View>
                </View>
                <View style={styles.borderSkill}>
                    <Image style={styles.backgroundSkill} source={require('./img/Infeccao.png')} />
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
                                <View style={{ margin: 1, width: 52, height: 51, borderWidth: 2, borderColor: '#fa0',}}>
                                    <Image style={styles.ImageModal} source={require('./img/Infeccao.png')}/>
                                </View>
                                <Text style={styles.textSKillModal}>Infecção</Text>
                                
                                <Pressable
                                    style={{width: 30, height: 25, backgroundColor: '#000', margin: 3, marginLeft: 157, borderRadius: 5,}}
                                    onPress={() => {
                                    setTwelve(!twelve)
                                    }}
                                >
                                    <Text style={{color: '#fff', fontSize: 18, textAlign: 'center', borderWidth: 1, borderColor: '#fff', borderRadius: 5,}}>X</Text>
                                </Pressable>
                            </View>
                            <View style={{margin: 3,}}>
                                <Text style={{fontSize: 18, color: '#fff',}}>Tipo: <Text style={{color: '#0f0',}}>Ativo</Text></Text>
                                <Text style={{fontSize: 18, color: '#fff',}}>Alcance: <Text style={{color: '#0f0',}}>5 metros</Text></Text>
                                <Text style={{fontSize: 18, color: '#fff',}}>Gasto em energia: <Text style={{color: '#0f0',}}>18 unidades</Text></Text>
                                <Text style={{fontSize: 18, color: '#fff',}}>Recarga: <Text style={{color: '#0f0',}}>22 s</Text></Text>
                            </View>
                                <Text style={styles.textModal}>Passa um infecção perigosa para o inimigo e aumenta os danos que o inimigo recebe. Quando o tempo 
                                    da penalidade acabar, a infecção será liberada e causará danos aos inimigos ao redor. O efeito pode ser aplicado em alvos sob 
                                    efeito da habilidade "Conexão fatídica".
                                </Text>
                            </View>
                        </Modal>      
                    </View>
                </View>
                <View style={styles.borderSkill}>
                    <Image style={styles.backgroundSkill} source={require('./img/Panico.png')} />
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
                                <View style={{ margin: 1, width: 52, height: 51, borderWidth: 2, borderColor: '#fa0',}}>
                                    <Image style={styles.ImageModal} source={require('./img/Panico.png')}/>
                                </View>
                                <Text style={styles.textSKillModal}>Pânico</Text>
                                
                                <Pressable
                                    style={{width: 30, height: 25, backgroundColor: '#000', margin: 3, marginLeft: 172, borderRadius: 5,}}
                                    onPress={() => {
                                    setThirteen(!thirteen)
                                    }}
                                >
                                    <Text style={{color: '#fff', fontSize: 18, textAlign: 'center', borderWidth: 1, borderColor: '#fff', borderRadius: 5,}}>X</Text>
                                </Pressable>
                            </View>
                            <View style={{margin: 3,}}>
                                <Text style={{fontSize: 18, color: '#fff',}}>Tipo: <Text style={{color: '#0f0',}}>Ativo</Text></Text>
                                <Text style={{fontSize: 18, color: '#fff',}}>Gasto em energia: <Text style={{color: '#0f0',}}>10 unidades</Text></Text>
                                <Text style={{fontSize: 18, color: '#fff',}}>Consumo de vida: <Text style={{color: '#0f0',}}>1% (36 unidades)</Text></Text>
                                <Text style={{fontSize: 18, color: '#fff',}}>Recarga: <Text style={{color: '#0f0',}}>22 s</Text></Text>
                            </View>
                                <Text style={styles.textModal}>Todos oponenetes próximos ao necromante se assustam e correm. O dano causado ao alvo pode cancelar 
                                    o efeito.
                                </Text>
                            </View>
                        </Modal>      
                    </View>
                </View>
                <View style={styles.borderSkill}>
                    <Image style={styles.backgroundSkill} source={require('./img/PocoMental.png')} />
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
                                <View style={{ margin: 1, width: 51, height: 51, borderWidth: 2, borderColor: '#fa0',}}>
                                    <Image style={styles.ImageModal} source={require('./img/PocoMental.png')}/>
                                </View>
                                <Text style={styles.textSKillModal}>Poço Mental</Text>
                                
                                <Pressable
                                    style={{width: 30, height: 25, backgroundColor: '#000', margin: 3, marginLeft: 127, borderRadius: 5,}}
                                    onPress={() => {
                                    setFourteen(!fourteen)
                                    }}
                                >
                                    <Text style={{color: '#fff', fontSize: 18, textAlign: 'center', borderWidth: 1, borderColor: '#fff', borderRadius: 5,}}>X</Text>
                                </Pressable>
                            </View>
                            <View style={{margin: 3,}}>
                                <Text style={{fontSize: 18, color: '#fff',}}>Tipo: <Text style={{color: '#0f0',}}>Ativo</Text></Text>
                                <Text style={{fontSize: 18, color: '#fff',}}>Alcance de uso: <Text style={{color: '#0f0',}}>5 metros</Text></Text>
                                <Text style={{fontSize: 18, color: '#fff',}}>Gasto em energia: <Text style={{color: '#0f0',}}>20 unidades</Text></Text>
                                <Text style={{fontSize: 18, color: '#fff',}}>Recarga: <Text style={{color: '#0f0',}}>30 s</Text></Text>
                            </View>
                                <Text style={styles.textModal}>Reduz a força de ataque dos inimigos e aumenta o tempo de recarga das habilidades deles.
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
                        <Image style={styles.backgroundSkill} source={require('./img/EscudoVenenoso.png')} />
                        <Text style={styles.textSkill}>4/4</Text>
                    </View>
                    <View style={styles.borderSkill}>
                        <Image style={styles.backgroundSkill} source={require('./img/PoderSombrio.png')} />
                        <Text style={styles.textSkill}>4/4</Text>
                    </View>
                    <View style={styles.borderSkill}>
                        <Image style={styles.backgroundSkill} source={require('./img/ChuvaAcida.png')} />
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