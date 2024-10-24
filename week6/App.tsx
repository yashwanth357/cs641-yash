import React from 'react';
import {FlatList, ImageBackground, SafeAreaView} from 'react-native';
import {
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
} from 'react-native';
import InputText from './components/InputText';
import ModalExample from './components/modal';
import FlatListExample from './components/flatListExample';

const image = {uri: 'https://legacy.reactjs.org/logo-og.png'};

const App = () => {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  return (
  
  <>
  <ModalExample/>
  <FlatListExample/>
  <InputText/>
  </>
  

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
   image: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default App;


