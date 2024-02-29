import {FlatList} from 'react-native';
import React from 'react';
import Config from 'react-native-config';
import JobCard from '../../components/JobCard';
import useFetch from '../../hooks/useFetch';
import Loading from '../../components/Loading';

const Jobs = ({navigation}) => {
  const handleJobSelect = id => {
    navigation.navigate('JobDetails', {id});
  };

  const url = Config.API_URL + '/jobs?page=1' + '&api_key=' + Config.API_KEY;

  const {data, error, loading} = useFetch(url);
  if (loading) {
    <Loading />;
  }
  if (error) {
    console.log(error);
  }

  const renderJobs = ({item}) => (
    <JobCard
      jobs={item}
      onSelect={() => {
        handleJobSelect(item);
      }}
    />
  );
  return (
    <FlatList data={data.results} renderItem={renderJobs} style={{flex: 1}} />
  );
};

export default Jobs;
