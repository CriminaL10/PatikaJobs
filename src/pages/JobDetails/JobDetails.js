import {Text, View, Dimensions, ScrollView} from 'react-native';
import React from 'react';
import RenderHTML from 'react-native-render-html';
import Button from '../../components/Button';
import styles from './JobDetails.styles';
import {useDispatch} from 'react-redux';
import {addFavorite} from '../../context/favoritesSlice';
import {submitJob} from '../../context/submitJobSlice';

const JobDetails = ({route}) => {
  const dispatch = useDispatch();
  const job = route.params.id;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.name}>{job.name}</Text>
        <Text style={styles.locations}>
          Locations:{' '}
          <Text style={styles.locationsText}>{job.locations[0].name}</Text>
        </Text>
        <Text style={styles.level}>
          Job Level: <Text style={styles.levelText}>{job.levels[0].name}</Text>
        </Text>
        <Text style={styles.detail}>Job Detail</Text>
      </View>

      <View style={styles.body}>
        <ScrollView>
          <RenderHTML
            source={{html: job.contents}}
            contentWidth={Dimensions.get('window').width}
            baseStyle={styles.detailContainer}
          />
        </ScrollView>
      </View>
      <View style={styles.footer}>
        <Button
          title="Submit"
          icon="login"
          onPress={() => dispatch(submitJob(job))}
        />
        <Button
          title="Favorite Job"
          icon="heart"
          onPress={() => dispatch(addFavorite(job))}
        />
      </View>
    </View>
  );
};

export default JobDetails;
