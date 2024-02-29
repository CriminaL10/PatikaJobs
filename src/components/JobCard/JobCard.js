import React from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';
import styles from './JobCard.styles';

const JobCard = ({jobs, onSelect}) => {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={styles.container}>
        <Text style={styles.nameText}>{jobs.name}</Text>
        <Text style={styles.companyText}>{jobs.company.name}</Text>
        <View style={styles.location}>
          <Text style={styles.locationText}>{jobs.locations[0].name}</Text>
        </View>
        <View style={styles.level}>
          <Text style={styles.levelText}>{jobs.levels[0].name}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
export default JobCard;
