import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import * as Font from "expo-font";
import { Ionicons, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons'

export default class Dashboard extends Component {
    async componentDidMount() {
        await Font.loadAsync({
            'muli-bold': require('../../assets/fonts/Muli-Bold.ttf')
        });

        this.setState({ fontLoaded: true });
    }
    
    constructor(props) {
        super(props);
        this.state = {
            fontLoaded: false,
        } 
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.buttonNav}>
                        <Ionicons name="md-menu" size={32} color="white"/>
                        <Ionicons name="md-person" size={32} color="white"/>
                    </View>
                    <View style={styles.displayStat}>
                        <View style={styles.dsContainer}>
                            <Text style={styles.dsVal}>20</Text>
                            <Text style={styles.dsLabel}>Materi</Text>
                        </View>
                        <View style={styles.dsContainer}>
                            <Text style={styles.dsVal}>8</Text>
                            <Text style={styles.dsLabel}>Kegiatan</Text>
                        </View>
                    </View> 
                    <Text style={styles.date}><Ionicons name="md-calendar" size={32} color="white"/>  12 November</Text>
                </View>
                <View style={styles.content}>
                    <View style={styles.card}>
                        <View style={styles.cardHeader}>
                            <MaterialIcons name="history" size={32} color="#333333" style={{ marginRight: 10}}/>
                            <Text style={styles.cardTitle}>
                                KEGIATAN TERAKHIR
                            </Text>
                        </View>
                        <View style={styles.cardBody}>
                            <View style={styles.cardItem}>
                                <MaterialCommunityIcons name="clipboard-check-outline" size={32} color="#333333" style={{ marginRight: 10}}/>
                                <Text style={styles.cardItemText}>Pengamanan Pilpress</Text>
                            </View>

                        </View>
                        <View style={styles.cardFooter}>
                            <Text style={styles.cardFooterText}>Lihat Selengkapnya</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
        container: {
            flex: 1,
            // justifyContent: "center",
            // alignItems: "center",
        },
        header: {
            flex: 2,
            backgroundColor: '#497d99',
            alignItems: 'stretch',
            justifyContent: 'space-between',
            flexDirection: 'column',
            padding: 16,
        },
        buttonNav: {
            marginTop: 30,
            flexDirection: 'row',
            justifyContent: 'space-between',
        },
        displayStat: {
            flexDirection: 'row',
            justifyContent: 'center'
        },
        dsContainer: {
            marginHorizontal: 30,
            alignItems: 'center',
        },
        dsVal: {
            color: 'white',
            fontSize: 80,
            // fontWeight: 'bold',
            // backgroundColor: 'black',
            marginBottom: -30
        },
        dsLabel: {
            color: 'white',
            fontSize: 18,
            fontWeight: 'bold',
            // backgroundColor: 'black'
            // fontFamily: "muli-bold",
        },

        date: {
            fontWeight: 'bold',
            color: 'white',
            fontSize: 24,
            marginBottom: 1,
            alignItems: 'center',
            textAlign: 'center'
        },

        content: {
            flex: 3,
            padding: 30
        },

        card: {
            // backgroundColor: 'black',
            // width: 100,
            // height: 100
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'space-between',

            borderRadius: 24,
            shadowColor: "black",
            shadowOffset: {
                width: 10,
                height: 10,
            },
            shadowOpacity: 0.9,
            shadowRadius: 10,

            elevation: 2,
        },

        cardHeader: {
            // flex: 1,
            // backgroundColor: 'red',
            padding: 10,
            flexDirection: 'row',
            alignItems: 'center',
            // justifyContent: 'space-between',
            borderBottomColor: '#ebebeb',
            borderBottomWidth: 2
        },

        cardTitle: {
            fontWeight: 'bold',
            fontSize: 16,
            color: '#333333'
        },
        cardBody: {
            flex: 5,
            // backgroundColor: 'red'
        },
        cardItem: {
            // backgroundColor: 'green',
            flexDirection: 'row',
            alignItems: 'center',
            padding: 10,
            borderBottomColor: '#ebebeb',
            borderBottomWidth: 2
        },
        cardItemText: {
            color: '#808080',
            fontWeight: 'bold',
            fontSize: 16

        },
        cardFooter: {
            flex: 1,
            alignItems: 'center',
            // padding: 10
        },
        cardFooterText: {
            marginTop: 10,
            fontSize: 18,
            fontWeight: 'bold',
            color: '#b3b3b3'
        }


})