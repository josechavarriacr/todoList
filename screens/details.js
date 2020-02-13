import React from 'react';
import { View, Text, Image } from 'react-native';
import { globalStyles, images } from '../styles/global';
import Card from '../shared/card';

export default function Details({ navigation }) {
  
  return (
    <View style={globalStyles.container}>
      <Card>
        <Text style={globalStyles.titleText}>
          { navigation.getParam('title') }
        </Text>
        <Text>{ navigation.getParam('body') }</Text>
      </Card>
    </View>
  );
}