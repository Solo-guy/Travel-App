import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { COLORS, SIZES } from '../../constants/theme';
import reusable from './Reusable.style';
import {AntDesign} from '@expo/vector-icons';
import WidthSpacer from './WidthSpacer';
import ReusableText from './ReusableText';

const ProfileTile = ({onPress, title, icon}) => {
  return (
    <TouchableOpacity style={styles.tile} onPress={onPress}>
        <View style={reusable.rowWithSpace('space-between')}>
            <View style={reusable.rowWithSpace('flex-start')}>
                <AntDesign name={icon} size={20}/>

                <WidthSpacer width={14}/>

                <ReusableText
                 text={title}
                 family={'regular'}
                 size={SIZES.medium}
                 color={COLORS.gray}
                />    
            </View>
        <AntDesign name={'right'} size={20} style={{}}/>
        </View>

    </TouchableOpacity>
  )
}

export default ProfileTile;

const styles = StyleSheet.create({
    tile: {
        height: 50,
        backgroundColor: COLORS.lightWhite,
        borderRadius: 10,
        marginBottom: 15,
        paddingLeft: 7,
        flexDirection: 'row',
    }
});