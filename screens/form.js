import React from 'react';
import { TextInput, View, Text } from 'react-native';
import { globalStyles } from '../styles/global';
import { Formik } from 'formik';
import * as yup from 'yup';
import FlatButton from '../shared/button';

const schema = yup.object({
  title: yup.string()
    .required()
    .min(2),
  body: yup.string()
    .required()
    .min(2)
});

export default function Form({ addDetail }) {

  return (
    
    <View style={globalStyles.container}>
      <Formik
        initialValues={{ title: '', body: ''}}
        validationSchema={schema}
        onSubmit={(values, actions) => {
          actions.resetForm(); 
          addDetail(values);
        }}
      >
        {props => (
          <View>
            <TextInput
              style={globalStyles.input}
              placeholder='Title'
              onChangeText={props.handleChange('title')}
              onBlur={props.handleBlur('title')} 
              value={props.values.title}
            />
            {}
            <Text style={globalStyles.errorText}>{props.touched.title && props.errors.title}</Text>

            <TextInput
              style={globalStyles.input}
              multiline minHeight={60}
              placeholder='Details'
              onChangeText={props.handleChange('body')}
              onBlur={props.handleBlur('body')}
              value={props.values.body}
            />
            <Text style={globalStyles.errorText}>{props.touched.body && props.errors.body}</Text>
            
            <FlatButton onPress={props.handleSubmit} text='submit' />
          </View>
        )}
      </Formik>
    </View>
    
  );
}