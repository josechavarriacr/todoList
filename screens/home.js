import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList, Modal,
  TouchableWithoutFeedback, Keyboard } from 'react-native';
import { globalStyles } from '../styles/global';
import { MaterialIcons } from '@expo/vector-icons';
import Card from '../shared/card';
import Form from './form';

export default function Home({ navigation }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [details, setDetails] = useState([
    { title: 'Morning workout', body: 'Training on the morning', key: '1' },
    { title: 'Call mom', body: 'lorem ipsum', key: '2' },
    { title: 'Pay rent', body: 'lorem ipsum', key: '3' },
  ]);

  const addDetail = (detail) => {
    detail.key = Math.random().toString();
    setDetails((currentDetails) => {
      return [detail, ...currentDetails];
    });
    setModalOpen(false);
  };

  const removeLogin = () => {
    setModalOpen(false);
  }
  return (
    <View style={globalStyles.container}>
  
      <Modal visible={modalOpen} animationType='slide'>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.modalContent}>
            <MaterialIcons 
              name='close'
              size={24} 
              style={{...styles.modalToggle, ...styles.modalClose}} 
              onPress={() => setModalOpen(false)} 
            />
            <Form addDetail={addDetail} />
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      <MaterialIcons 
        name='add' 
        size={24} 
        style={styles.modalToggle}
        onPress={() => setModalOpen(true)} 
      />

      <FlatList data={details} renderItem={({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('Details', item)}>
          <Card>
            <Text style={globalStyles.titleText}>{ item.title }</Text>
          </Card>
        </TouchableOpacity>
      )} />

    </View>
  );
}

const styles = StyleSheet.create({
  modalToggle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#f2f2f2',
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center',
  },
  modalClose: {
    marginTop: 20,
    marginBottom: 0,
  },
  modalContent: {
    flex: 1,
  }
});