import React, {useState, useEffect} from 'react';
import {View, Text, Button, Image, FlatList, ScrollView} from 'react-native';
import {styles} from '../styles/styles';
import {useSelector, useDispatch} from 'react-redux';
import {getProducts} from '../redux/actions/products';

export default function Home({navigation}) {
  const [data, setData] = useState();
  const state = useSelector(state => state);
  console.log(state.products.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <View>
      {/* <FlatList
        data={state.products.products}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={{backgroundColor: 'pink', margin: 10, width: 150}}>
            <Image source={{uri: item.image}} />
            <Text>{item.title}</Text>
          </View>
        )}
      /> */}
      <ScrollView>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}>
          {state.products.products.map(item => (
            <View
              key={item.id}
              style={{backgroundColor: 'pink', margin: 10, width: 180}}>
              <Image
                source={{uri: item.image}}
                style={{width: 180, height: 100}}
                resizeMode="stretch"
              />
              <Text style={{padding: 3}}>{item.title}</Text>
              <Text style={{fontSize: 19, fontWeight: 'bold', padding: 3}}>
                $ {item.price}
              </Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
