import {StyleSheet, ViewStyle} from 'react-native';
import {isTinyDevice} from '../../constants/constants';
import {Margins} from '../../styles/margins';
import {verticalScale} from '../../utils/helpers';

export default StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: isTinyDevice ? 0 : Margins.SMALL,
  } as ViewStyle,
  titleContainer: {
    maxWidth: '90%',
  } as ViewStyle,
  iconAlign: {
    left: 14,
    padding: 10,
  } as ViewStyle,
  separator: {
    height: 10,
  } as ViewStyle,
  listContainer: {
    flex: 1,
    marginTop: verticalScale(Margins.MIDLARGE),
    marginBottom: verticalScale(Margins.MEDIUM),
  } as ViewStyle,
});
