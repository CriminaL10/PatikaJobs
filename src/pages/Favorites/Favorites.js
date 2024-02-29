import {FlatList} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import FavCard from '../../components/FavCard';
import {useDispatch} from 'react-redux';
import {removeFavorite} from '../../context/favoritesSlice';

const Favorites = () => {
  const {favList} = useSelector(fav => fav.favorite);
  const dispatch = useDispatch();

  const renderFav = item => (
    <FavCard
      favlist={item}
      removeFav={() => dispatch(removeFavorite(item.id))}
    />
  );

  return <FlatList data={favList} renderItem={({item}) => renderFav(item)} />;
};

export default Favorites;
