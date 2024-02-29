import {StyleSheet, Dimensions} from 'react-native';

const dim = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
  },
  detailContainer: {
    backgroundColor: 'white',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 25,
    color: 'rgb(42,55,62)',
  },
  locations: {
    fontWeight: 'bold',
    fontSize: 13,
    color: 'rgb(232, 59, 63)',
    marginVertical: 10,
  },
  locationsText: {
    color: 'black',
  },
  level: {
    fontWeight: 'bold',
    fontSize: 13,
    color: 'rgb(232, 59, 63)',
  },
  levelText: {
    color: 'black',
  },
  detail: {
    fontWeight: 'bold',
    fontSize: 25,
    color: 'rgb(42,55,62)',
    marginTop: 20,
    alignSelf: 'center',
  },
  header: {},
  body: {
    height: dim.height / 1.75,
  },
  footer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default styles;
