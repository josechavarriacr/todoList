// import React from 'react';
// import { View, Text } from 'react-native';
// import { globalStyles } from '../styles/global';

// export default function About() {
//   return (
//     <View style={globalStyles.container}>
//       <Text>About Screen</Text>
//     </View>
//   );
// }


import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';

import reducer from '../tools/reducer';
import RepoList from '../tools/RepoList';

const client = axios.create({
  baseURL: 'https://api.github.com',
  responseType: 'json'
});

const store = createStore(reducer, applyMiddleware(axiosMiddleware(client)));

export default class About extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <RepoList />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 50
  }
});
