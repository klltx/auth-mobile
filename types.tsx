/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { BaseSyntheticEvent } from 'react';
import { NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Welcome: undefined;
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  Profile: { userName: string, userAge: number, userGender: string };
  NotFound: undefined;
  NewNote: undefined;
  EditNote: { noteInput: string, tagsInput: string | null, noteId: number, dataTags: string[] };
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  Screen
>;

export type RootTabParamList = {
  Welcome: undefined;
  News: undefined;
  Calculator: undefined;
  Converter: undefined;
  Notes: undefined;
  GraphicsEditor: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>
>;
