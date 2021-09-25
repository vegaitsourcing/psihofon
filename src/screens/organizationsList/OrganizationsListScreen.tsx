import React, {useLayoutEffect} from 'react';
import {
  FlatList,
  Linking,
  ListRenderItemInfo,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useSelector} from 'react-redux';
import Globe from '../../../assets/icons/Globe.svg';
import {CustomText} from '../../components/customText/CustomText';
import {SolidBackground} from '../../components/solidBackground/SolidBackground';
import {Colors} from '../../constants/colors';
import {useLightHeader} from '../../hooks/useLightHeader';
import {Organization} from '../../models/Organization';
import {OrganizationsListScreenProps} from '../../navigation/DrawerNavigator';
import {RootState} from '../../reducers/rootReducer';
import style from './style';

interface OrganizationNameProps {
  name: string;
}

const OrganizationName: React.FC<OrganizationNameProps> = ({name}) => {
  return (
    <View style={style.nameContainer}>
      <Text>{name}</Text>
    </View>
  );
};

interface OrganizationCityProps {
  city: string;
}

const OrganizationCity: React.FC<OrganizationCityProps> = ({city}) => {
  return (
    <View style={style.cityContainer}>
      <Text style={style.city}>{city}</Text>
    </View>
  );
};

interface OrganizationLinkProps {
  websiteUrl: string;
}

const OrganizationLink: React.FC<OrganizationLinkProps> = ({websiteUrl}) => {
  const handlePress = () =>
    Linking.canOpenURL(websiteUrl).then(canOpen => {
      canOpen && Linking.openURL(websiteUrl);
    });

  return (
    <TouchableOpacity onPress={handlePress} style={style.linkContainer}>
      <Globe />
    </TouchableOpacity>
  );
};

interface OrganizationContainerProps {
  name: string;
  city: string;
  websiteUrl: string;
}

const OrganizationContainer: React.FC<OrganizationContainerProps> = ({
  name,
  websiteUrl,
  city,
}) => {
  return (
    <View style={style.organizationContainer}>
      <OrganizationName name={name} />
      <OrganizationCity city={city} />
      {!!websiteUrl?.length && <OrganizationLink websiteUrl={websiteUrl} />}
    </View>
  );
};

export const OrganizationsListScreen: React.FC<OrganizationsListScreenProps> =
  ({navigation}) => {
    const {organizations} = useSelector(
      (state: RootState) => state.organizations,
    );

    const renderItem = ({item}: ListRenderItemInfo<Organization>) => (
      <OrganizationContainer
        name={item.name}
        city={item.city}
        websiteUrl={item.websiteUrl}
      />
    );

    useLightHeader(navigation);

    useLayoutEffect(() => {
      navigation.setOptions({
        headerStyle: {
          backgroundColor: Colors.PALE_GRAY,
        },
      });
    }, [navigation]);

    return (
      <SolidBackground backgroundColor={Colors.PALE_GRAY}>
        <CustomText style={style.title}>Baza podataka organizacija</CustomText>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={organizations}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
        />
      </SolidBackground>
    );
  };
