import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View, Text, Button, StyleSheet, FlatList, SafeAreaView} from 'react-native';
import {fetchCountriesRequest} from '../redux/slices/homeSlice';
import {RootState, AppDispatch} from '../store/store';
import ImageComponent from '../components/ImageComponent';
import NativeToastModule from '../customModules/specs/NativeToastModule';

interface Country {
  cca3: string;
  name: {common: string};
  capital?: string[];
  flags: {png: string};
}
interface Props {
  countries: Country[];
}
const CountryComponent: React.FC<Props> = ({countries}) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={countries}
        keyExtractor={item => item.cca3}
        renderItem={({item}) => (
          <View style={styles.item}>
            <ImageComponent
              source={{uri: item.flags.png}}
              style={styles.flag}
            />
            <View style={styles.info}>
              <Text style={styles.name}>{item?.name?.common}</Text>
              <Text style={styles.capital}>
                Capital: {item.capital ? item.capital[0] : 'N/A'}
              </Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};
const HomeScreen = ({navigation}: {navigation: any}) => {
  const dispatch = useDispatch<AppDispatch>();
  const {countries, loading, error} = useSelector(
    (state: RootState) => state.home,
  );

  useEffect(() => {
    NativeToastModule.showToast('Hello World');
    dispatch(fetchCountriesRequest());
  }, [dispatch]);

  return (
    <SafeAreaView style={styles.container}>
      <Button title="Open Drawer" onPress={() => navigation.openDrawer()} />
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
      />
      {loading && <Text style={styles.loader}>Loading...</Text>}
      {!!(countries && countries.length) && <CountryComponent countries = {countries} />}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  loader: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  error: {
    color: 'red', 
    textAlign: 'center', 
    marginTop: 20},
  item: {
    flexDirection: 'row',
    padding: 15,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    alignItems: 'center',
  },
  flag: {
    width: 50, 
    height: 30, 
    marginRight: 15, 
    borderRadius: 5
  },
  info: {
    flex: 1
  },
  name: {
    fontSize: 16, 
    fontWeight: 'bold'
  },
  capital: {
    fontSize: 14, 
    color: 'gray'
  },
});

export default HomeScreen;
