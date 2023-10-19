import { View, Text, Image } from 'react-native';
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {TopBookings,TopInfor, TopTrips} from '../screens';
import { COLORS, SIZES } from '../constants/theme';
import { AppBar, HeightSpacer, NetworkImage, ReusableText } from '../components';
import styles from './toptab.style';

const Tab = createMaterialTopTabNavigator();

const TopTab = () => {
  return (
    <View style={{flex: 1}}>
      <View style={{backgroundColor: COLORS.lightWhite}}>
        <View>
            <NetworkImage 
                source={
                "https://image.vietnamnews.vn/uploadvnnews/Article/2022/10/6/243557_son.jpg"
                }
                width={'100%'}
                height={300}
                radius={0} 
            />

            <AppBar 
            top={40}
            left={20}
            right={20}
            color={COLORS.white}
            icon={'logout'}
            color1={COLORS.white}
            onPress1={() => {}}
            />

            <View style={styles.profile}>
                <Image source={{uri: 'https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o='}}
                style={styles.image}
                />

                <HeightSpacer height={5}/>

                  <View style={{alignItems: 'center'}}>
                    <ReusableText 
                    text={'Pham Hung'}
                    family={'medium'}
                    size={SIZES.medium}
                    color={COLORS.black}
                    />
                  </View>  

                <HeightSpacer height={5}/>
                
                <View style={styles.name}>
                  <View style={{alignItems: 'center'}}>
                    <ReusableText 
                    text={'PhamHung@gmail.com'}
                    family={'medium'}
                    size={SIZES.medium}
                    color={COLORS.white}
                    />
                  </View>  
                </View>

            </View>    
        </View>
      </View>
      <Tab.Navigator>
        <Tab.Screen name='Bookings' component={TopBookings}/>
        <Tab.Screen name='Trips' component={TopTrips}/>
        <Tab.Screen name='Infor' component={TopInfor}/>
      </Tab.Navigator>
    </View>
  )
};

export default TopTab;