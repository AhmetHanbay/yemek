import React from "react";
import { Text, View, SafeAreaView, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import Soup from './Soup';
import Meet from './Meet';
import Main from './Main';
import Sweet from './Sweet';
import Salat from './Salat';


export default Home = () => {
    const navigation = useNavigation()
    return (

        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.header_container}>
                    <Text style={styles.header}>MERYEM' İN MUTFAĞI</Text>
                    <Text style={styles.header}>Hu Diyerekten</Text>
                </View>
                <View style={styles.image}>
                    <Image style={styles.images_container} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMZpC1xitxujDA26_kqpm5er-GJt_noQ74AeqNqDL33YHkxiIQEHvdgIvbZhDpYRNDPdg&usqp=CAU' }} />
                </View>
                <View style={styles.button}>
                    <TouchableOpacity onPress={() => navigation.navigate('Soup')}>
                        <Text style={styles.button_container}>
                            Çorbalar
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Meet')}>
                        <Text style={styles.button_container}>
                            Ara Sıcaklar
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Main')}>
                        <Text style={styles.button_container}>
                            Ana Yemekler
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Sweet')}>
                        <Text style={styles.button_container}>
                            Tatlılar
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Salat')}>
                        <Text style={styles.button_container}>
                            Salatalar
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f3972d',
        flex: 1,
        padding: 10
    },
    header_container: {
        alignItems: 'center',
        marginTop: 10
    },
    header: {
        fontSize: 25,
        color: '#5c3dbc',
        fontFamily: 'DancingScript-Bold',
    },
    image: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    images_container: {
        width: 250,
        height: 250,
        borderRadius: 200,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 5,
        borderColor: '#5c3dbc',
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    button_container: {
        fontSize: 18,
        color: 'white',
        borderWidth: 2,
        borderColor: '#5c3dbc',
        padding: 7,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        margin: 10,
        fontFamily: 'Lobster-Regular'
    }
});