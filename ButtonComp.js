//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

// create a component
const ButtonComp = ({
    fetchValue = () => {}
}) => {

    console.log("button reusable component....")

    const imChildFunc = () =>{
        
    }

    return (
        <View style={styles.container}>
            <Text>ButtonComp</Text>

            <Button 
            onPress={()=>fetchValue('React native')}
            title="Send dATA Child to parent"
            />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
    
    },
});

export default React.memo(ButtonComp)
