import React from 'react';
import styles from './style';
import {View} from 'react-native';
import {CustomText} from '../../components/customText/CustomText';
import {CustomButton} from '../../components/buttons/customButton/CustomButton';
import {SolidBackground} from '../../components/solidBackground/SolidBackground';
import {useHeader} from '../../hooks/useHeader';
import {CrisisExercisesScreenProps as CrisisExercisesListScreenProps} from '../../navigation/CrisisNavigator';
import {AppRoute} from '../../navigation/routes';
import {useSelector} from 'react-redux';
import {RootState} from '../../reducers/rootReducer';

export const CrisisExercisesListScreen: React.FC<CrisisExercisesListScreenProps> =
  ({navigation}) => {
    const {crisisExcercises} = useSelector(
      (state: RootState) => state.crisisExcercises,
    );
    useHeader(navigation, false);
    return (
      <SolidBackground isDark={true}>
        <View style={styles.container}>
          <View style={styles.upperContainer}>
            <View style={styles.title}>
              <CustomText style={styles.titleText}>Spisak vežbi</CustomText>
            </View>
            {crisisExcercises.map((item, index) => (
              <View key={item.id}>
                <CustomButton
                  style={styles.button}
                  text={item.title}
                  onPress={() =>
                    navigation.navigate(AppRoute.CRISIS_EXERCISE_SCREEN, {
                      id: item.id,
                    })
                  }
                  isDark={false}
                  key={item.id}
                />
                <View style={styles.separtor} key={index} />
              </View>
            ))}
          </View>
          <View style={styles.lowerContainer} />
        </View>
      </SolidBackground>
    );
  };
