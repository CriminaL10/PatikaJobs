import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './Button.styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Button = ({title, onPress, icon}) => {
  return (
    <TouchableOpacity style={styles.touch} onPress={onPress}>
      <Icon name={icon} style={styles.icon} />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
