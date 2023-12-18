import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.heading}>Trending Places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{
            uri: 'https://images.pexels.com/photos/14873219/pexels-photo-14873219.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1/',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Mysterios Place</Text>
          <Text style={styles.cardLabel}>Italy</Text>
          <Text style={styles.cardDescription}>
            Love this Place, Been here long time ago.
          </Text>
          <Text style={styles.cardFooter}>12 minutes way from Germany</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    color: 'grey',
  },
  card: {
    width: 350,
    height: 360,
    borderRadius: 6,
    marginVertical: 16,
    marginHorizontal: 16,
  },
  cardElevated: {
    backgroundColor: '#FFFFFF',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  cardImage: {
    height: 180,
    marginBottom: 8,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 12,
  },
  cardTitle: {
    color: '#000000',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 4
  },
  cardLabel: {
    color: '#000000',
    fontSize: 20,
    marginBottom: 6
  },
  cardDescription: {
    color: '#242B2E',
    fontSize: 18,
    marginBottom: 12,
    flexShrink: 1,
    marginTop: 6,
  },
  cardFooter: {
    color: '#000000',
    fontSize: 23,
  },
});
