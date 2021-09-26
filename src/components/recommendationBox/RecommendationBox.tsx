import React from 'react';
import {View, ViewStyle} from 'react-native';
import {View} from 'react-native';
import {Colors} from '../../styles/colors';
import {CustomText} from '../customText/CustomText';
import style from './style';

interface RecommendationBoxProps {
  icon: React.ReactNode;
  title: string;
  content: string;
  style?: ViewStyle;
}

export const RecommendationBox: React.FC<RecommendationBoxProps> = ({
  icon,
  title,
  content,
  style: styleProp,
}) => {
  return (
    <View style={style.container}>
      <View
        //TODONF fix
        style={{
          padding: 5,
          backgroundColor: Colors.LIGHT_GREEN,
          width: 50,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 10,
        }}>
        {icon}
      </View>
      <View style={style.textContainer}>
        <CustomText style={style.title}>{title}</CustomText>
        <CustomText style={style.textContent}>{content}</CustomText>
      </View>
    </View>
  );
};
