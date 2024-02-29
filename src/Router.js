import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Jobs from './pages/Jobs';
import Favorites from './pages/Favorites';
import JobDetails from './pages/JobDetails';
import {Provider} from 'react-redux';
import store from './context/store';
import Submit from './pages/Submit';

const Draw = createDrawerNavigator();
const Stack = createStackNavigator();

const JobStack = () => {
  return (
    <Stack.Navigator initialRouteName="Jobs">
      <Stack.Screen
        name="Jobs"
        component={Jobs}
        options={{headerTitleStyle: {color: 'rgb(232, 59, 63)'}}}
      />
      <Stack.Screen name="JobDetails" component={JobDetails} />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Draw.Navigator initialRouteName="JobStack">
          <Draw.Screen
            name="JobsStack"
            component={JobStack}
            options={{
              headerShown: false,

              drawerActiveBackgroundColor: '#da9e9e79',
              drawerActiveTintColor: 'rgb(232, 59, 63)',
            }}
          />
          <Draw.Screen
            name="Favorites"
            component={Favorites}
            options={{
              headerShown: true,
              headerTitleStyle: {color: 'rgb(232, 59, 63)'},
              drawerActiveBackgroundColor: '#da9e9e79',
              drawerActiveTintColor: 'rgb(232, 59, 63)',
            }}
          />
          <Draw.Screen
            name="Submitted Jobs"
            component={Submit}
            options={{
              headerShown: true,
              headerTitleStyle: {color: 'rgb(232, 59, 63)'},
              drawerActiveBackgroundColor: '#da9e9e79',
              drawerActiveTintColor: 'rgb(232, 59, 63)',
            }}
          />
        </Draw.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
