import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, Switch, ScrollView } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { format } from "date-fns";
import {Dropdown, MultiSelect} from 'react-native-element-dropdown';
import SelectDropdown from 'react-native-select-dropdown';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { OneDepense } from '../types';

export default function NewDepenseScreen() {

    const today = new Date()

  const [showDatePicker, setShowDatePicker] = useState(false);  
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const [showWayDropdown, setShowWayDropdown] = useState(false);

  const [selectedDate, setSelectedDate] = useState<Date>(today);
  const [selectedName, setSelectedName] = useState<string>(' ');
  const [selectedAmount, setSelectedAmount] = useState<number>();
  const [selectedCategory, setSelectedCategory] = useState<string>();
  const [selectedPaymentWay, setSelectedPaymentWay] = useState<string>();
  const [oneDepense, setOneDepense] = useState<OneDepense>();

  const [toBeConfirmed, setToBeConfirmed] = useState<boolean>(false);
  const [isAmazon, setIsAmazon] = useState<boolean>(false);
  const [isMedical, setIsMedical] = useState<boolean>(false);
  const [isMensuel, setIsMensuel] = useState<boolean>(false);
  const [isAnnuel, setIsAnnuel] = useState<boolean>(false);
  const [isSeveralPayment, setIsSeveralPayment] = useState<boolean>(false);




  const categorys = ['Nourriture', 'Vétement', 'Moto', 'Cadeau', 'Ciné/théâtre', 'Transport en commun', 'Voyages', 'Don', 'Essence', 'Abonnement (musique, VoD)', 'santé', 'coiffeur', 'EDF', 'Cardiweb', 'Charges Boulogne', 'vacances', 'travaux', 'Pour Boulogne', 'Apparei Numérique', 'Impot', 'livre', 'sortie', 'Prêt' ]
  const PaymentWay = ['CB SG39', 'Liquide', 'Virement', 'Chèque', 'Lydia']


  const onDateChange = (event: Event, selectedDate: Date) => {
      setSelectedDate(selectedDate)
      setShowDatePicker(false)
  }
 
console.log('date = ', today.getDay)
  return (
      <ScrollView>
    <View style={styles.container}>
      <TouchableOpacity style={{borderBottomWidth: 1, width: 200, height: 25}} onPress={() => setShowDatePicker(true)}><Text style={styles.dateText}>{format(selectedDate, 'dd/MM/yyyy')}</Text></TouchableOpacity>
      {showDatePicker && <DateTimePicker value={today} onChange={() => onDateChange}></DateTimePicker>}
      
      <TextInput style={styles.inputText} placeholder={'Nom'}></TextInput>
      <TextInput style={styles.inputText} placeholder={'Montant'} keyboardType={'phone-pad'}></TextInput>

    <View style={{margin: 10}}><SelectDropdown data={categorys} onSelect={()=> console.log('selected Category')} buttonTextAfterSelection={(selectedItem, index) => {return selectedItem}} rowTextForSelection={(item, index) => {return item}}></SelectDropdown></View>
    <SelectDropdown data={PaymentWay} onSelect={()=> console.log('selected Payment way')} buttonTextAfterSelection={(selectedItem, index) => {return selectedItem}} rowTextForSelection={(item, index) => {return item}}></SelectDropdown>
      
      <View>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text>A confirmer</Text>
          <Switch value = {toBeConfirmed} onValueChange = {() => toBeConfirmed ? setToBeConfirmed(false) : setToBeConfirmed(true)}></Switch>
      </View>

      <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text>Amazon</Text>
          <Switch value = {isAmazon} onValueChange = {() => isAmazon ? setIsAmazon(false) : setIsAmazon(true)}></Switch>
      </View>

      <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text>Médical</Text>
          <Switch value = {isMedical} onValueChange = {() => isMedical ? setIsMedical(false) : setIsMedical(true)}></Switch>
      </View>

      <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text>Mensuel</Text>
          <Switch value = {isMensuel} onValueChange = {() => isMensuel ? setIsMensuel(false) : setIsMensuel(true)}></Switch>
      </View>

      <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text>Annuel</Text>
          <Switch value = {isAnnuel} onValueChange = {() => isAnnuel ? setIsAnnuel(false) : setIsAnnuel(true)}></Switch>
      </View>

      <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text>En plusieurs fois</Text>
          <Switch value = {isSeveralPayment} onValueChange = {() => isSeveralPayment ? setIsSeveralPayment(false) : setIsSeveralPayment(true)}></Switch>
      </View>

      <Button onPress={() => console.log('Button pressed')} title={'ajouter cette dépense'}></Button>
      <StatusBar style="auto" />
    </View>
    </View>
    </ScrollView>
  );
}


function ListDepense() {
    <View style={{flex: 1, backgroundColor: 'red'}}></View>
}



//---------------------------------------------------------------------------------




//---------------------------------------------------------------------------------



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputText: {
borderBottomColor: 'black',
borderBottomWidth: 1,
margin: 10,
  },
  dateText: {
      fontSize: 15,
      color: 'black',

  },
});
