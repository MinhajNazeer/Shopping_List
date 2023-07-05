import * as React from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView , ScrollView, Image} from 'react-native';


export default function Dashboard({navigation}) {
    const vegetable = () => {
      navigation.navigate('Vegetable');
    }

    return (
        <SafeAreaView style={styles.container}>
                <ScrollView>
            <Text style={styles.Heading}> Categories </Text>
          
                <View style={styles.homeButton1}>
                    <Button title="vegetable" color="blue" onPress={vegetable} />
                    <Image style={styles.img}
                    source={{
                        uri:'https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-2foodgroups_vegetables_detailfeature.jpg?sfvrsn=226f1bc7_6',
                        width:300,
                        height:200,
                    }}
                    />
                    <Button title="Fruits" color="blue" />
                    <Image style={styles.img}
                    source={{
                        uri:'https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-3foodgroups_fruits_detailfeature.jpg?sfvrsn=64942d53_4',
                        width:300,
                        height:200,
                    }}
                    />
                    <Button title="Fish and Meats" color="blue" />
                    <Image style={styles.img}
                    source={{
                        uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXwyWhs6wAvcJbzD0Pl5Hgq9wTqekDFZcpPA&usqp=CAU',
                        width:300,
                        height:200,
                    }}
                    />
                </View>
                </ScrollView>
           

        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    Heading: {
        fontSize: 50,
        fontWeight: 'bold',
        color: 'blue',
        textAlign: 'center',
        paddingTop: 20,
        paddingBottom: 20,
    },
    img:{
        marginTop:20,
        marginBottom:40,
    },
    homeButton1: {
        padding: 50,
        width: '50%',
        height: '30%',
    },
   
});

