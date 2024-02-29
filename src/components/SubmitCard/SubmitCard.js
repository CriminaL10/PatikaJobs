import {SafeAreaView, Text, View} from 'react-native';
import React from 'react';
import styles from './SubmitCard.styles';

const SubmitCard = ({submitList}) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.nameText}>{submitList.name}</Text>
        <Text style={styles.companyText}>{submitList.company.name}</Text>
        <View style={styles.location}>
          <Text style={styles.locationText}>
            {submitList.locations[0].name}
          </Text>
        </View>
        <View style={styles.level}>
          <Text style={styles.levelText}>{submitList.levels[0].name}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SubmitCard;
