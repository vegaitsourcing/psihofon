import React, {ReactNode, useRef, useState} from 'react';
import {View, ScrollView} from 'react-native';
import {BackToBeginningButton} from '../../components/backToBeggingingButtion/BackToBegginingButton';
import {ComplexBackground} from '../../components/ComplexBackground/ComplexBackground';
import style from './style';

interface GeneralExerciseScreenProps {
  upperContent: ReactNode;
  lowerContent?: ReactNode;
}

export const GeneralExerciseScreen: React.FC<GeneralExerciseScreenProps> = ({
  upperContent,
  lowerContent,
}) => {
  const [displayScrollToTopButton, setDisplayScrollToTopButton] =
    useState(false);

  const scrollRef = useRef<ScrollView>(null);

  const handlePress = () => {
    scrollRef.current?.scrollTo({
      y: 0,
      animated: true,
    });
  };

  const handleScroll = () => {
    setDisplayScrollToTopButton(true);
  };

  return (
    <View style={style.root}>
      <ScrollView
        onScrollBeginDrag={handleScroll}
        ref={scrollRef}
        scrollEnabled
        style={style.root}
        bounces={false}>
        <ComplexBackground
          upperContent={upperContent}
          lowerContent={lowerContent}
        />
        {displayScrollToTopButton && (
          <BackToBeginningButton onPress={handlePress} />
        )}
      </ScrollView>
    </View>
  );
};
