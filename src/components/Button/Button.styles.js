import {StyleSheet, Dimensions} from 'react-native';
const styles = StyleSheet.create({
  touch: {
    padding: 10,
    backgroundColor: 'rgb(232, 59, 63)',
    borderRadius: 10,
    flexDirection: 'row',
    width: Dimensions.get('window').width / 2 - 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 20,
    marginHorizontal: 10,
  },
  icon: {
    fontSize: 18,
    color: 'white',
  },
});

export default styles;
