import {Colors} from '../../styles/colors';
import {verticalScale} from '../../utils/helpers';
import {Margins} from '../../styles/margins';
import {StyleSheet, TextStyle, ViewStyle} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.DARK_GREEN,
  } as ViewStyle,
  upperContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  } as ViewStyle,
  buttonSpacing: {
    marginTop: Margins.SMALL,
  } as ViewStyle,
  lowerContainer: {
    flex: 1,
  } as ViewStyle,
  button: {
    width: '100%',
  } as ViewStyle,
  title: {
    marginBottom: verticalScale(54),
  } as ViewStyle,
  titleText: {
    fontSize: 24,
    lineHeight: 36,
    fontWeight: '600',
    fontStyle: 'normal',
    color: Colors.WHITE,
  } as TextStyle,
  separtor: {
    height: Margins.SMALL,
  } as ViewStyle,
});