import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import { AppBar, DescriptionText, HeightSpacer, HotelMap, NetworkImage, ReusableBtn, ReusableText, ReviewsList } from '../../components';
import { COLORS, TEXT, SIZES } from '../../constants/theme';
import styles from './hotelDetail.style';
import reusable from '../../components/Reusable/Reusable.style';
import { Rating } from 'react-native-stock-star-rating';  
import {Feather} from '@expo/vector-icons';

const HotelDetails = ({navigation}) => {
  const hotel = {
    "availability": {
        "start": "2023-08-20T00:00:00.000Z",
        "end": "2023-08-25T00:00:00.000Z"
    },
    "coordinates": {
      "latitude": 37.7749,  
      "longitude": -122.4149
    },
    "_id": "64c675793cfa5e847bcd5436",
    "country_id": "64c62bfc65af9f8c969a8d04",
    "title": "Urban Chic Boutique Hotel",
    "description": "Hotel Urban Chic Boutique is luxurious hotel located in the heart of a bustling city. Experience the best of hospitality with our impeccable service and top-notch facilities. The elegantly designed rooms offer a comfortable stay and the hotel's strategic location provides easy access to popular attractions and landmarks. Enjoy a variety of amenities, inclution free Wi-Fi, parking, air conditioning, room service, flat-screen TV and private bathrooms...",
    "contact": "64c5d95adc7efae2a45ec376",
    "imageUrl": "https://d326fntlu7tb1e.cloudfront.net/uploads/5da4db00-e83f-449a-a97a-b7fa80a5bda6-aspen.jpeg",
    "rating": 4.8,
    "review": "2312 Reviews",
    "location": "San Francisco, CA",
    "price": 400,
    "__v": 1,
    "reviews": [
      {
        "_id": "64d38ff59af9119acfab0ece",
        "review": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "rating": 4.5,
        "user": {
          "_id": "64c5d95adc7efae2a45ec376",
          "username": "John Doe",
          "profile": "https://d326fntlu7tb1e.cloudfront.net/uploads/4c004766-c0ad-42ed-bef1-6a7616b24c11-vinci_11.jpg"
        },
        "updatedAT": "2023-08-09" 
      },
      {
        "_id": "64d797efa5628cedef4fce58",
        "review": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "rating": 4.6,
        "user": {
          "_id": "64c5d95adc7efae2a45ec376",
          "username": "Zoe Doe",
          "profile": "https://d326fntlu7tb1e.cloudfront.net/uploads/4c004766-c0ad-42ed-bef1-6a7616b24c11-vinci_11.jpg"
        },
        "updatedAT": "2023-08-09" 
      },
    ]
};

let coordinates = {
  id: hotel._id,
  title: hotel.title,
  latitude: hotel.coordinates.latitude,
  longitude: hotel.coordinates.longitude,
  latitudeDelta: 0.01,
  longitudeDelta: 0.01
}

  return (
    <ScrollView>
      <View style={{height: 80}}>
        <AppBar
          top={50}
          left={20}
          right={20}
          title={hotel.title} 
          color={COLORS.white} 
          icon={'search1'} 
          color1={COLORS.white}
          onPress={()=> navigation.goBack()}
          onPress1={() => {}}
          />
      </View>

      <View>
      <View style={styles.container}>
        <NetworkImage 
          source={hotel.imageUrl}
          width={'100%'}
          height={220}
          radius={25}
        />

        <View style={styles.titleContainer}>
          <View style={styles.titleColumn}>
            <ReusableText
            text={hotel.title}
            family={'medium'}
            size={SIZES.xLarge}
            color={COLORS.black}
            />

            <HeightSpacer height={10}/>

            <ReusableText
            text={hotel.location}
            family={'medium'}
            size={SIZES.medium}
            color={COLORS.black}
            />

            <HeightSpacer height={6}/>

          <View style={reusable.rowWithSpace('space-between')}>
            <Rating
              maxStars={5}
              stars={hotel.rating}
              bordered={false}
              color={'#FD9942'}
            />

            <ReusableText
            text={`(${hotel.review})`}
            family={'medium'}
            size={SIZES.medium}
            color={COLORS.gray}
            />
            
          </View>
          </View>
        </View>
      </View>

    <View style={[styles.container, {paddingTop: 90}]}>
      <ReusableText
        text={'Description'}
        family={'medium'}
        size={SIZES.large}
        color={COLORS.black}
      /> 

      <HeightSpacer height={10}/>

      <DescriptionText text={hotel.description}/>

      <HeightSpacer height={10}/>

      <ReusableText
        text={'Location'}
        family={'medium'}
        size={SIZES.large}
        color={COLORS.black}
      /> 

      <HeightSpacer height={15}/>

      <ReusableText
        text={hotel.location}
        family={'regular'}
        size={SIZES.small+2}
        color={COLORS.gray}
      /> 

    <HotelMap coordinates={coordinates}/>

    <View style={reusable.rowWithSpace('space-between')}>
      <ReusableText
        text={'Reviews'}
        family={'medium'}
        size={SIZES.large}
        color={COLORS.black}
      /> 

      <TouchableOpacity>
        <Feather name='list'  size={20}/>
      </TouchableOpacity>
    </View> 

    <HeightSpacer height={10}/>

    <ReviewsList reviews={hotel.reviews}/>  
      </View>
        <View style={[reusable.rowWithSpace('space-between'), styles.bottom]}>
          <View>
            <ReusableText
              text={`\$ ${hotel.price}`}
              family={'medium'}
              size={SIZES.large}
              color={COLORS.black}
            /> 
            <HeightSpacer height={5}/>

            <ReusableText
              text={'Jan 01 - Dec 25th'}
              family={'medium'}
              size={SIZES.medium}
              color={COLORS.gray}
            /> 
          </View>

          <ReusableBtn
          onPress={() => navigation.navigate('SelectRoom')}
          btnText={"Select Room"}
          width={(SIZES.width - 50)/2.2}
          backgroundColor={COLORS.green}
          borderColor={COLORS.green}
          borderWidth={0}
          textColor={COLORS.white}
          />
        </View>

    </View>
  </ScrollView>
  );
};

export default HotelDetails;