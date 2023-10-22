import { StyleSheet, Image , View } from 'react-native';
import React from 'react';

const AssetImage = ({data}) => {
  return (
    <View style={{alignItems: 'center'}}>
      <Image source={data}/>
    </View>
  )
};

export default AssetImage;

const styles = StyleSheet.create({});