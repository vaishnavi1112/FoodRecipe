import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; // Import the icon component
import ChatbotScreen from './screens/ChatbotScreen';
import SettingScreen from './screens/SettingScreen';
import ProfileScreen from './screens/ProfileScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="ChatBot" // Set ChatBot as the default tab
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Profile') {
              iconName = 'account-circle';
            } else if (route.name === 'ChatBot') {
              iconName = 'chat';
            } else if (route.name === 'Settings') {
              iconName = 'cog';
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarStyle: styles.tabBar,
          tabBarLabelStyle: styles.tabLabel,
          tabBarActiveTintColor: '#6200EE',
          tabBarInactiveTintColor: '#858585',
        })}
      >
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="ChatBot" component={ChatbotScreen} />
        <Tab.Screen name="Settings" component={SettingScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
    height: 60,
    paddingBottom: 10,
    paddingTop: 10,
  },
  tabLabel: {
    fontSize: 14,
    fontWeight: '600',
  },
});
