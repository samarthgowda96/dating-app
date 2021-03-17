import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useRef } from 'react'
import { StyleSheet, View, Alert } from 'react-native';
import Constants from 'expo-constants';
import TopBar from './components/TopBar'; 
import axios from 'axios'

export default function App() {

  const [user, setUser] = useState([]);
  const fetchUser = async () => {
try {
  const {data} = await axios.get('https://randomuser.me/api/?gender=female&results=50')
  setUser(data.user)
} catch (error) {
  console.log(error)
  Alert.alert('Error getting users', '', [{ text: 'Retry', onPress: () => fetchUsers() }])
}
  }

  useEffect(()=> {
      fetchUser();
  }, [])
  return (
    <View style={styles.container}>
      <TopBar/>
      <View style = {styles.swipes}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight
  },
  swipes: {
    flex: 1,
    padding: 10,
    paddingTop: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    }, 
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  }
});
