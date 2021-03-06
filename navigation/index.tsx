/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import LoginScreen from '../screens/LoginScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import NewsScreen from '../screens/NewsScreen';
import CalculatorScreen from '../screens/CalculatorScreen';
import { RootStackParamList, RootStackScreenProps, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import ProfileScreen from '../screens/ProfileScreen';
import ConverterScreen from '../screens/ConverterScreen';
import NotesScreen from '../screens/NotesScreen';
import GraphicsEditorScreen from '../screens/GraphicsEditorScreen';
import NewNoteScreen from '../screens/NewNoteScreen';
import EditNoteScreen from '../screens/EditNoteScreen';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={LoginScreen} />
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="NewNote" component={NewNoteScreen} options={{ title: 'Create new note' }} />
        <Stack.Screen
          name="EditNote"
          component={EditNoteScreen}
          options={{
            title: 'Edit note',
            headerRight: () => (
              <Pressable
                // onPress={() => navigate('Profile', {userName, userAge, userGender})}
                style={({ pressed }) => ({
                  opacity: pressed ? 0.5 : 1,
                })}>
                <FontAwesome
                  name="user-circle"
                  size={25}
                  style={{ marginRight: 15 }}
                />
              </Pressable>
            )
            }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator({ navigation, route }: RootStackScreenProps<'Profile'>) {
  const colorScheme = useColorScheme(),
    { userName, userAge, userGender } = route.params;

  return (
    <BottomTab.Navigator
      initialRouteName="News"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}>
      <BottomTab.Screen
        name="News"
        component={NewsScreen}
        options={({ navigation }: RootTabScreenProps<'News'>) => ({
          title: 'News',
          tabBarIcon: ({ color }) => <TabBarIcon name="file-text" color={color} />,
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('Profile', {userName, userAge, userGender})}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
              <FontAwesome
                name="user-circle"
                size={25}
                color={Colors[colorScheme].text}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
        })}
      />
      <BottomTab.Screen
        name="Calculator"
        component={CalculatorScreen}
        options={{
          title: 'Calculator',
          tabBarIcon: ({ color }) => <TabBarIcon name="calculator" color={color} />,
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('Profile', {userName, userAge, userGender})}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
              <FontAwesome
                name="user-circle"
                size={25}
                color={Colors[colorScheme].text}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
        }}
      />
      <BottomTab.Screen
        name="Converter"
        component={ConverterScreen}
        options={{
          title: 'Converter',
          tabBarIcon: ({ color }) => <TabBarIcon name="university" color={color} />,
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('Profile', {userName, userAge, userGender})}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
              <FontAwesome
                name="user-circle"
                size={25}
                color={Colors[colorScheme].text}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
        }}
      />
      <BottomTab.Screen
        name="Notes"
        component={NotesScreen}
        options={{
          title: 'Notes',
          tabBarIcon: ({ color }) => <TabBarIcon name="sticky-note" color={color} />,
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('Profile', {userName, userAge, userGender})}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
              <FontAwesome
                name="user-circle"
                size={25}
                color={Colors[colorScheme].text}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
          headerLeft: () => (
            <Pressable
              onPress={() => navigation.navigate('NewNote')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
              <FontAwesome
                name="pencil"
                size={25}
                color={Colors[colorScheme].text}
                style={{ marginLeft: 15 }}
              />
            </Pressable>
          ),
        }}
      />
      <BottomTab.Screen
        name="GraphicsEditor"
        component={GraphicsEditorScreen}
        options={{
          title: 'Board',
          tabBarIcon: ({ color }) => <TabBarIcon name="pencil-square-o" color={color} />,
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('Profile', {userName, userAge, userGender})}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
              <FontAwesome
                name="user-circle"
                size={25}
                color={Colors[colorScheme].text}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
