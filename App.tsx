import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import HelloText from './src/components/HelloText';
import { NavigationContainer, TabActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NewDepenseScreen from './Screens/NewDepense';
import ListDepenseScreen from './Screens/ListDepense';



const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

 function App({navigation}) {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={HomScreen} />
        <Stack.Screen name="NewDepense" component={NewDepenseScreen}/>
      </Stack.Navigator> */}
      <Tab.Navigator>
        <Tab.Screen name='New' component={NewDepenseScreen}></Tab.Screen>
        <Tab.Screen name='List' component={ListDepenseScreen}></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default App