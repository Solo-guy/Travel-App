import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import ReusableText from '../../Reusable/ReusableText';
import { COLORS, TEXT } from '../../../constants/theme';

const Country = ({item})=> {
  return (
    <TouchableOpacity>
        <View>
        <ReusableText
            text={item.country}
            family={'medium'}
            size={TEXT.medium}
            color={COLORS.black}
            align={'center'}
            />
        </View>
    </TouchableOpacity>
  )
};

export default Country;