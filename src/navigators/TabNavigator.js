import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';

import Dashboard from '../screens/Dashboard';
import Favourites from '../screens/Favourites';
import Jobs from '../screens/Jobs';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarShowLabel: true, // show/hide tab heading
        tabBarLabelPosition: 'below-icon', // position of tab heading
        tabBarLabelStyle: { fontSize: 14, fontWeight: "700" }, //style tab heading
        tabBarIcon: ({ focused, size, color }) => {
          let iconName;
          if (route.name === 'Dashboard') {
            iconName = 'home';
            size = focused ? 35 : 25;
            color = focused ? 'orange' : 'gray';
          } else if (route.name === 'Jobs') {
            iconName = 'folder-open';
            size = focused ? 35 : 25;
            color = focused ? 'orange' : 'gray';
          } else if (route.name === 'Favourites') {
            iconName = 'favorite-border';
            size = focused ? 35 : 25;
            color = focused ? 'orange' : 'gray';
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarStyle:{backgroundColor:"#000000"},
        tabBarBadgeStyle: { backgroundColor: 'red' }, //style count
        tabBarActiveTintColor: 'white', //active tab heading color
        tabBarInactiveTintColor: 'gray', //inactive tab heading color
        // tabBarActiveBackgroundColor: 'skyblue', //active tab bgcolor
        // tabBarInactiveBackgroundColor: 'lightgray', //active tab bgcolor
        tabBarHideOnKeyboard: true,// hide/show bottom tab above keyborad
      })}>
      <Tab.Screen name="Dashboard" component={Dashboard} options={{ headerShown: false ,tabBarLabel:"Home"}} />
      <Tab.Screen name="Jobs" component={Jobs} options={{ headerShown: false ,tabBarLabel:"News"}} />
      <Tab.Screen name="Favourites" component={Favourites} options={{ headerShown: false,tabBarLabel:"Wishlist" }} />
    </Tab.Navigator>
  );
};

export default TabNavigator;