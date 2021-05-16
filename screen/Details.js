import React from 'react';
import {View, Text} from 'react-native';
import {styles} from '../styles/styles';
import axios from 'axios';
import {useState, useEffect} from 'react';
export default function Details() {
  const fetchProduct = async () => {
    try {
      const {data} = await axios.get(
        'https://jsonplaceholder.typicode.com/posts',
      );
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchProduct();
  }, []);
  return (
    <View style={styles.container}>
      <Text>Details</Text>
    </View>
  );
}
