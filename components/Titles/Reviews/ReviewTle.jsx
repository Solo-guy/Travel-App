import { Text, View } from 'react-native';
import React from 'react';
import styles from './review.style';
import reusable from '../../Reusable/Reusable.style';
import NetworkImage from '../../Reusable/NetworkImage';
import WidthSpacer from '../../Reusable/WidthSpacer';
import ReusableText from '../../Reusable/ReusableText';
import { SIZES, COLORS } from '../../../constants/theme';
import Rating from '../../Reusable/Rating';
import DescriptionText from '../../Reusable/DescriptionText';

const ReviewTle = ({review}) => {
  return (
    <View style={styles.reviewBorder}>
      <View style={reusable.rowWithSpace('space-between')}>
        <View style={reusable.rowWithSpace('flex-start')}>
          <NetworkImage 
            source={review.user.profile}
            width={54}
            height={54}
            radius={10}
          />

          <WidthSpacer width={20}/>

          <View style={{width: '80%'}}>
            <View style={reusable.rowWithSpace('space-between')}>
            <ReusableText
              text={review.user.username}
              family={'medium'}
              size={SIZES.small + 2}
              color={COLORS.black}
            /> 
          <WidthSpacer width={'25%'}/>

            <View style={reusable.rowWithSpace('space-between')}>
              <Rating rating={review.rating}/>
              <WidthSpacer width={10}/>
              <ReusableText
              text={review.updatedAT}
              family={'medium'}
              size={SIZES.small + 2}
              color={COLORS.black}
            /> 
                </View>
            </View>
            <View>
              <DescriptionText text={review.review}/>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
};

export default ReviewTle;
