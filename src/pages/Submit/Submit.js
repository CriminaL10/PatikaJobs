import {FlatList} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import SubmitCard from '../../components/SubmitCard';

const Submit = () => {
  const {submitList} = useSelector(s => s.submit);

  const renderSubmit = item => <SubmitCard submitList={item} />;

  return (
    <FlatList data={submitList} renderItem={({item}) => renderSubmit(item)} />
  );
};

export default Submit;
