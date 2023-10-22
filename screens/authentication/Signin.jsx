import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import styles from './signin.style';
import { Formik } from 'formik';
import * as Yup from 'yup';

const valuedationSchema = Yup.object().shape({
  password: Yup.string()
  .min(8, "password must be at least 8 characters")
  .required('Required'),
  email: Yup.string()
  .email("Provide a valid email")
  .required('Required')
})

const Signin = () => {
  return (
    <View style={styles.container}>
      <Formik
        initialValues={{email: "", password: ""}}
        validationSchema={validationSchema}
        onSubmit={(value) => {}}
      >

      </Formik>
    </View>
  )
};

export default Signin;