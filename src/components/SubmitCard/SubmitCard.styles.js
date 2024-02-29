import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
    padding: 5,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#a7a7a7',
  },
  location: {
    padding: 5,
    backgroundColor: 'rgb(232, 59, 63)',
    borderRadius: 10,
    justifyContent: 'center',
    alignSelf: 'flex-start',
  },
  level: {
    marginTop: 10,
    alignItems: 'flex-end',
  },
  nameText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  companyText: {
    fontSize: 16,
  },
  locationText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  },
  levelText: {
    fontWeight: 'bold',
    color: 'rgb(232, 59, 63)',
  },
});

export default styles;
