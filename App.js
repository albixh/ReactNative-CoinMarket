import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'

import { store, persistor } from './src/Store'
import { Header, MainContainer } from './src/components';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <View>
            <Header />
            <MainContainer />
          </View>
        </PersistGate>
      </Provider>
    );
  }
}