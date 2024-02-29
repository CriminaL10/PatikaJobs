import {SafeAreaView, Text, View} from 'react-native';
import React from 'react';
import Button from '../Button';
import styles from './FavCard.styles';

const FavCard = ({favlist, removeFav}) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.nameText}>{favlist.name}</Text>
        <Text style={styles.companyText}>{favlist.company.name}</Text>
        <View style={styles.location}>
          <Text style={styles.locationText}>{favlist.locations[0].name}</Text>
        </View>
        <View style={styles.level}>
          <Text style={styles.levelText}>{favlist.levels[0].name}</Text>
        </View>
        <View style={styles.button}>
          <Button title="Remove" onPress={removeFav} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default FavCard;
