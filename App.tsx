import {View, ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import FlatCards from './components/FlatCards';
import ElevatedCards from './components/ElevatedCards';
import FancyCard from './components/FancyCard';
import ActionCard from './components/ActionCard';
import ContactList from './components/ContactList';

const App = () => {
  return (
    <View style={styles.wholeBackground}>
      <ScrollView>
        <FlatCards />
        <ElevatedCards />
        <FancyCard />
        <ContactList />
        <ActionCard />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  wholeBackground: {
    backgroundColor: '#000000',
    width: '100%',
    height: '100%',
  },
});
export default App;

//rnfe
