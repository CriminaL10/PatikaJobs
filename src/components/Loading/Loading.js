import {View, ActivityIndicator} from 'react-native';
import React from 'react';
import styles from './Loading.styles';

const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="red" />
    </View>
  );
};

export default Loading;
