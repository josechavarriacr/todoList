import React from 'react';
import { TextInput, View, Text } from 'react-native';
import { globalStyles } from '../styles/global';
import { Formik } from 'formik';
import * as yup from 'yup';
import FlatButton from '../shared/button';

const schema = yup.object({
  user: yup.string()
    .required()
    .min(2),
  pass: yup.string()
    .required()
    .min(2)
});

export default function Form({navigation}) {

  return (
    
    <View style={globalStyles.container}>
      <Formik
        initialValues={{ user: '', pass: ''}}
        validationSchema={schema}
        onSubmit={(values, actions) => {
          actions.resetForm();
          navigation.navigate('Home');
        }}
      >
        {props => (
          <View>
            <TextInput
              style={globalStyles.input}
              placeholder='Username'
              onChangeText={props.handleChange('user')}
              onBlur={props.handleBlur('user')} 
              value={props.values.user}
            />
            {}
            <Text style={globalStyles.errorText}>{props.touched.user && props.errors.user}</Text>

            <TextInput
              style={globalStyles.input}
              multiline minHeight={60}
              placeholder='Password'
              onChangeText={props.handleChange('pass')}
              onBlur={props.handleBlur('pass')}
              value={props.values.pass}
            />
            <Text style={globalStyles.errorText}>{props.touched.pass && props.errors.pass}</Text>
            
            <FlatButton onPress={props.handleSubmit} text='submit' />
          </View>
        )}
      </Formik>
    </View>
    
  );
}