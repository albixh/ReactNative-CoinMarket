import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';

const CoinListItem = ({ symbol, coin_name, price_usd, price_change_24h, coin_count, total_balance, parent }) => {
  return (
    <TouchableOpacity style={styles.container}
      onPress={() => parent.setState({ isDialogVisible: true, dialogSender: symbol })}
    >
      <View style={styles.roundedView} >
        <View style={styles.upperRow}>
          <Text style={styles.coinSymbol}>{symbol}</Text>
          <Text style={styles.separator}>|</Text>
          <Text style={styles.name}>{coin_name}</Text>
          <Text style={styles.price}>{price_usd} $</Text>
          <Text style={styles.price}>{total_balance} $</Text>
        </View>

        <View style={styles.bottomRow}>
          <Text style={styles.priceChange24h}>24h:
            <Text style={price_change_24h < 0 ? styles.priceChangeMinus : styles.priceChangePlus}> {price_change_24h < 0 ? "" : "+"}{price_change_24h}% </Text>
          </Text>
          <Text style={styles.coin}> {coin_count} {symbol}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    marginBottom: 20,
    borderBottomColor: "#e5e5e5",
    borderBottomWidth: 3,
    padding: 10
  },
  upperRow: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 15
  },
  bottomRow: {
    display: 'flex',
    borderTopColor: "#FBFBFB",
    borderTopWidth: 2,
    flexDirection: "row"
  },
  coinSymbol: {
    marginTop: 10,
    marginLeft: 20,
    marginRight: 5,
    fontWeight: 'bold'
  },
  name: {
    marginTop: 10,
    marginLeft: 5,
    marginRight: 20
  },
  coin: {
    marginLeft: 'auto',
    marginRight: 20,
  },
  separator: {
    marginTop: 10
  },
  price: {
    marginTop: 10,
    marginLeft: 'auto',
    marginRight: 20,
    fontWeight: 'bold'
  },
  image: {
    width: 35,
    height: 35
  },
  priceChangePlus: {
    color: "#228B22",
    fontWeight: "bold",
    marginLeft: 5
  },
  priceChangeMinus: {
    color: "#DC143C",
    fontWeight: "bold",
    marginLeft: 5
  },
  priceChange24h: {
    marginLeft: 20
  },
  count: {
    marginLeft: 'auto'
  },
  roundedView: {
    width: '100%',
    height: 70,
    backgroundColor: '#fbfbfb',
    borderRadius: 8,
  },
});

export default CoinListItem;