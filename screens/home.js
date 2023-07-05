import * as React from 'react';
import {StyleSheet, Text, Button, View, Image} from 'react-native';

export default function Home({navigation}) {
  
  const register = () => {
    navigation.navigate('Register');
  }
  return (
    <View style={styles.container}>
        <View style={styles.img}>
        <Image source={{
            uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa0DWb2iF-uQZoxHfoxojOZ6XAD0T03qjKeQ&usqp=CAU',
            width:200,
            height:200,
        }}
        />
        </View>
     
      <Text style={styles.Heading}> MyShoppingList </Text>
      <View style={styles.homeButton}>
      <Button title="register" color="blue" onPress={register}/>
      </View>
     
    </View>
  );
};
const styles = StyleSheet.create({
    container:{
      flex:1,
     backgroundColor:'#fff',
     padding:50,
    },
    Heading:{
      fontSize:50,
      fontWeight:'bold',
      color:'blue',
      
      textAlign:'center',
      paddingBottom:10,
    },
    homeButton:{
      justifyContent:'center',
      alignItems:'center',
      paddingTop:100,
      marginBottom:50,
    },
    img:{
        marginTop:40,
        alignItems:'center',
        
    }
  });
