import * as React from 'react';
import {StyleSheet, Text, View, Button, TextInput} from 'react-native';

export default function Register({navigation}) {
    const register = () => {
      navigation.navigate('Dashboard');
    }

    const [text, username] = React.useState("Username:");
    const [number1, password] = React.useState(null);

    return (
      <View style={styles.container}>
        
        <View style={styles.inputText}>
          <TextInput
        style={styles.input}
        onChangeText={username}
        value={text}
      />
      <TextInput
        style={styles.input}
        onChangeText={password}
        value={number1}
        placeholder="password"
        keyboardType="numeric"
      />
      </View>
        <View style={styles.homeButton1}>
        <Button title="register" color="red" onPress={register}/>
        </View>
       
      </View>
    );
  };
const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'#fff',
      padding:20,
      paddingTop:100,
    },
    Heading:{
      fontSize:50,
      fontWeight:'bold',
      color:'white',
      backgroundColor:'maroon',
      textAlign:'center',
    },
    inputText:{
      paddingTop:80,
      padding:30
    },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1.5,
      padding: 10,
      borderRadius:5
    },
    homeButton1:{
        justifyContent:'center',
        alignItems:'center',
        paddingTop:60,
      },
  });
