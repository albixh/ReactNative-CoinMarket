import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Button, ScrollView, Text, StyleSheet } from 'react-native';
import CoinMarketDataAction from '../Actions/CoinMarketDataAction';
import Numeral from 'numeral';


const Portfolio = ({ total_balance }) => {
    return (
        <View style={styles.portfolio}>
            <View style={styles.RoundedView} >
                <Text style={styles.title}>Portfolio</Text>
                <Text style={styles.balance}>${Numeral(total_balance).format('0.00a')}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

    portfolio: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10
    },

    title: {
        color: "white",
        fontSize: 16,
        marginLeft: 10,
        marginTop: 15
    },
    balance: {
        color: "white",
        fontWeight: "bold",
        fontSize: 20,
        marginLeft: 10
    },

    RoundedView: {
        marginTop: 20,
        width: '100%',
        height: 80,
        backgroundColor: '#00BCD4',
        borderRadius: 10,
    },

});

export default Portfolio;