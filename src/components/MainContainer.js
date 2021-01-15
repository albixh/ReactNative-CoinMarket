import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Button, ScrollView, Text, StyleSheet } from 'react-native';
import Numeral from 'numeral'

import Dialog from "react-native-dialog";
import CoinMarketDataAction from '../Actions/CoinMarketDataAction'
import CoinListItem from './CoinListItem'
import Portfolio from './Portfolio'
import { AsyncStorage } from '@react-native-community/async-storage';

//TODO: if more coins are planned to be added, make it more dynamic and maybe use a hashmap instead
var coinPortfolio = [
  ["BTC", 0],
  ["ETH", 0]
];
const STORAGE_KEY = '@coin'

class MainContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      coinMarket: null,
      dialogSender: "",
      isDialogVisible: false,
      dialogInput: null,
      coinPortfolio,
      portfolioBalance: 0
    };
  }

  componentDidMount() {
    this.setState({ coinMarket: this.props.FetchCryptoData() });
  }

  renderPortfolio() {
    var portfolio = <Portfolio total_balance={this.state.portfolioBalance} />
    return portfolio;
  }

  renderCoinListItems() {
    const { coinMarket } = this.props;
    var coinListItem = coinMarket.data.data?.map(coin =>
      <CoinListItem
        key={coin.name}
        coin_name={coin.name}
        symbol={coin.symbol}
        price_usd={Numeral(coin.quote?.USD?.price).format('0.00')}
        total_balance={Numeral(coin.quote?.USD?.price * this.getBalance(coin.symbol)).format('0.00')}
        coin_count={this.getBalance(coin.symbol)}
        price_change_24h={Numeral(coin.quote?.USD?.percent_change_24h).format('0.0000a')}
        parent={this}
      />
    )
    return coinListItem;
  }

  render() {
    const { coinMarket } = this.props;

    //TODO: Some kind of loading indicator
    if (coinMarket.meta.isLoading) {
      return (
        <View >
          <View>
            {this.renderPortfolio()}
          </View>
        </View>
      )
    }

    return (
      <View >
        {this.renderPortfolio()}
        <ScrollView contentContainerStyle={styles.contentContainer}>
          {this.renderCoinListItems()}
        </ScrollView>
        <Button
          title="Update"
          onPress={this.handleUpdate}
        />
        <View>
          <Dialog.Container visible={this.state.isDialogVisible}>
            <Dialog.Title>Coin Balance</Dialog.Title>
            <Dialog.Description>
              Enter your current balance.
            </Dialog.Description>
            <Dialog.Input onChangeText={(input) => this.state.dialogInput = input} />
            <Dialog.Button label="Cancel" onPress={() => this.setState({ isDialogVisible: false })} />
            <Dialog.Button label="Update" onPress={() => {
              this.setState(prevState => ({ isDialogVisible: false, }));
              this.updatePortfolio();
            }} />
          </Dialog.Container>
        </View>
      </View>
    );
  }

  //input dialog handle
  updatePortfolio = async () => {
    for (let coin of this.state.coinPortfolio) {
      if (coin[0] === this.state.dialogSender) {
        coin[1] = parseFloat(this.state.dialogInput);
        break;
      }
    };

    //persist data
    //TODO: make dynamic, fix storage problems
    //this.saveData(this.state.coinPortfolio[0]); //BTC
    //this.saveData(this.state.coinPortfolio[1]); //ETH

    //set state for redraw
    this.setState(prevState => ({
      coinPortfolio,
      portfolioBalance: this.calculatePortfolio(this.state.coinPortfolio)
    }));
  }

  //update button handle
  handleUpdate = async () => {
    this.setState({ data: this.props.FetchCryptoData(), portfolioBalance: this.calculatePortfolio(this.state.coinBalance) });
  }

  //async storage
  saveData = async (coin) => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, coin)
      alert('Data successfully saved')
    } catch (e) {
      alert('Failed to save the data to the storage')
    }
  }

  //return the current balance for specified coin symbol
  getBalance = (coin) => {
    for (let c of this.state.coinPortfolio) {
      if (c[0] === coin) //if coin tag match
        return c[1] // return coin value
    };
    return 0;
  }

  calculatePortfolio() {
    const { coinMarket } = this.props;
    var balance = 0;

    for (let element of this.state.coinPortfolio) {
      for (let coin of coinMarket.data.data) {
        if (coin.symbol === element[0]) {
          balance += coin.quote?.USD?.price * element[1];
          break;
        }
      };
    };
    return balance;
  }
}

const styles = {
  contentContainer: {
    paddingBottom: 50,
    paddingTop: 50
  }
}

function mapStateToProps(state) {
  return {
    coinMarket: state.coinMarket
  }
}

export default connect(mapStateToProps, { FetchCryptoData: CoinMarketDataAction })(MainContainer);