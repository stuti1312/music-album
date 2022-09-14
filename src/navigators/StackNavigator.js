import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TabNavigator from './TabNavigator';

const Stack = createNativeStackNavigator();

export default StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="tab">
      <Stack.Screen name="tab" component={TabNavigator} options={{}}  />
    </Stack.Navigator>
  );
};
