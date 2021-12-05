import * as React from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, Switch, ScrollView } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import {initializeApp} from 'firebase/app'
import { getDatabase, ref, onValue, set } from 'firebase/database';

import store from '../src/components/app/store'

const firebaseConfig = {
    apiKey: 'AIzaSyD2_hvmG6SJ9QXDuTtTUlkgXK0hmlyMfuo',
    authDomain: 'appli-comptes.firebaseapp.com',
    databaseURL: 'https://appli-comptes.firebaseio.com',
    projectId: 'appli-comptes',
    storageBucket: 'appli-comptes.appspot.com',
    messagingSenderId: 'sender-id',
    appId: 'app-id',
    measurementId: 'G-measurement-id',
  };

// initializeApp(firebaseConfig);

export default function ListDepenseScreen() {
    const users = firestore().collection('Dépenses').get();
    const dB = getDatabase();
    console.log('users = ', users)
    console.log('dB = ', dB)
    console.log('rpout')
    return (
        <TouchableOpacity style={{flex: 1, backgroundColor: 'red'}} onPress={() => console.log('Dépenses = ', dB)}></TouchableOpacity>
    );

}