import {ScrollView, StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

export default function ContactList() {
  const contacts = [
    {
      uid: 1,
      name: 'Rajesh Tiwari',
      status: 'Making his family proud',
      imageUrl:
        'https://images.pexels.com/photos/5586512/pexels-photo-5586512.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },

    {
      uid: 2,
      name: 'Umanand tripathi',
      status: 'Enjoying my React Journey',
      imageUrl:
        'https://images.pexels.com/photos/6235052/pexels-photo-6235052.jpeg?auto=compress&cs=tinysrgb&w=600',
    },

    {
      uid: 3,
      name: 'Amit',
      status: 'Working on many technologies',
      imageUrl:
        'https://images.pexels.com/photos/4100420/pexels-photo-4100420.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ];
  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView style={styles.container} scrollEnabled={false}>
        {contacts.map(({uid, name, status, imageUrl}) => (
          <View key={uid} style={styles.userCard}>
            <Image source={{uri: imageUrl}} style={styles.userImage} />
            <View>
              <Text style={styles.userName}>{name}</Text>
              <Text style={styles.userStatus}>{status}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  container: {
    paddingHorizontal: 16,
    marginBottom: 4,
  },
  userCard: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 3,
    backgroundColor: '#8D3DAF',
    padding: 6,
    borderRadius: 10,
  },
  userImage: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    marginRight: 14,
  },
  userName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFF',
  },
  userStatus: {
    fontSize: 12,
    color: '#FFF',
  },
});
