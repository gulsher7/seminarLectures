//import liraries
import React, { Component, useCallback, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button,FlatList } from 'react-native';
import ButtonComp from './ButtonComp';

// create a component
const App = () => {
  const [counter, setCounter] = useState(1)
  const [data, setData] = useState([])


  useEffect(()=>{
    fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(json => setData(json.products))

  },[])




  const onIncrease = () => {
    setCounter(counter + 1)
  }

  const userDetail = useCallback(()=>{
    alert(counter)
  },[counter])

const renderItem = useCallback((props)=>{
const {item,index} = props

  console.log("flatlist prop",props)
    return(
      <View style={{marginBottom: 16}}>
        {item?.title ?<Text>{item?.title}</Text>: null}
      </View>
    )
},[])

const fetchValue = (data) =>{
console.log("fetch value from child comp....",data)
}
  return (
    <View style={styles.container}>
      <Text>{counter}</Text>

      <Button
        title='Increase'
        onPress={onIncrease}
      />

      <Button
        title='Show User Detail'
        onPress={userDetail}
      />

      <ButtonComp 
        fetchValue ={fetchValue}
      />

      <FlatList 
      data={data}
      renderItem={renderItem}
      // keyExtractoritem. ==
      />

    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
});

//make this component available to the app
export default App;
