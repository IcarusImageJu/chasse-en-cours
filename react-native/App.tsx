import React from 'react';
import AppRouter from './src/Pages';
import Parse from 'parse/react-native.js';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  PARSE_APPLICATION_ID,
  PARSE_JAVASCRIPT_KEY,
  PARSE_SERVER_URL,
} from '@env';

//Initializing the SDK.
Parse.setAsyncStorage(AsyncStorage);
//You need to copy BOTH the the Application ID and the Javascript Key from: Dashboard->App Settings->Security & Keys
Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY);
Parse.serverURL = PARSE_SERVER_URL;

export default function App() {
  return <AppRouter />;
}
