import * as React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image } from 'react-native';

export default function Vegetable() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View >
                    <Text style={styles.Heading}> Vegetables </Text>

                    <Text style={styles.text1}> Carrots </Text>
                    <Image style={styles.img}
                    source={{
                        uri:'https://www.jessicagavin.com/wp-content/uploads/2019/02/carrots-7-1200.jpg',
                        width:300,
                        height:200,
                    }}
                    />
                    <Text style={styles.text1}> Ladies finger </Text>
                    <Image style={styles.img}
                    source={{
                        uri:'https://gumlet.vikatan.com/vikatan/2019-05/b6996070-7679-4cf8-a441-902f65ef3a5d/100777_thumb.jpg',
                        width:300,
                        height:200,
                    }}
                    />
                    <Text style={styles.text1}> Cabbage </Text>
                    <Image style={styles.img}
                    source={{
                        uri:'https://media.istockphoto.com/photos/green-cabbage-isolated-on-white-picture-id673162168?k=20&m=673162168&s=612x612&w=0&h=3QKF6zzzCAUL3pKxW6kVbZ7lUt1JUY_SchOUMyOHwhs=',
                        width:300,
                        height:200,
                    }}
                    />
                    <Text style={styles.text1}> Beans </Text>
                    <Image style={styles.img}
                    source={{
                        uri:'https://backend.lassana.com/images/products/Cucumber--1584340352.jpg',
                        width:300,
                        height:200,
                    }}
                    />
                    
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightblue',

    },
    Heading: {
        fontSize: 50,
        fontWeight: 'bold',
        color: 'white',
        backgroundColor: 'blue',
        textAlign: 'center',
    },
    img: {
        marginTop: 40,
        margin: 20,
    },
    text1: {
        fontSize: 20,
        textAlign: 'justify',
        padding: 20,
        paddingTop: 20,
        paddingBotttom:20,
    },
});
