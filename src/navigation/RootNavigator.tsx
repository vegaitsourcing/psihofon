import React from 'react';
import {RouteProp} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import {AppRoute} from './routes';
import {MenuScreen} from '../screens/menu/MenuScreen';
import {QuizScreen} from '../screens/quiz/QuizScreen';

const Stack = createNativeStackNavigator();

type StackNavigatorProps = React.ComponentProps<typeof Stack.Navigator>;

export type RootNavigatorParams = {
  [AppRoute.MENU]: undefined;
  [AppRoute.QUIZ]: undefined;
};

export interface RootNavigatorProps<Screen extends keyof RootNavigatorParams> {
  navigation: NativeStackNavigationProp<RootNavigatorParams, Screen>;
  route: RouteProp<RootNavigatorParams, Screen>;
}

export type MenuScreenProps = RootNavigatorProps<AppRoute.MENU>;

export const RootNavigator = (props: Partial<StackNavigatorProps>) => {
  return (
    <Stack.Navigator {...props} initialRouteName={AppRoute.QUIZ}>
      <Stack.Screen
        options={{gestureEnabled: false, headerShown: false}}
        name={AppRoute.MENU}
        component={MenuScreen}
      />
      <Stack.Screen
        options={{gestureEnabled: false, headerShown: false}}
        name={AppRoute.QUIZ}
        component={QuizScreen}
      />
    </Stack.Navigator>
  );
};
