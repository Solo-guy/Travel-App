import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import reusable from '../../components/Reusable/Reusable.style';
import { ReusableText, HeightSpacer, Places } from '../../components/index';
import { TEXT, COLORS, SIZES } from '../../constants/theme';
import { AntDesign } from '@expo/vector-icons'
import styles from './Home.style';


const Home = ({navigation}) => {
  return (
    <SafeAreaView style={reusable.container}>
      <View>
        <View style={reusable.rowWithSpace('space-between')}>
          <ReusableText 
            text={'Hey User!'}
            family={'regular'}
            size={TEXT.large}
            color={COLORS.black}
            />

            <TouchableOpacity 
            style={styles.box}
            onPress={() => navigation.navigate('Search')}
            >
              <AntDesign 
                name='search1'
                size={26}
              />
            </TouchableOpacity>
        </View>

        <HeightSpacer height={SIZES.xLarge}/>
        <ReusableText 
            text={'Places'}
            family={'medium'}
            size={TEXT.large}
            color={COLORS.black}
            />
            <Places /> 

      </View>
    </SafeAreaView>
  )
};

export default Home;
