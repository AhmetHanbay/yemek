import React from "react";
import { View, Text, Button, Image, ScrollView, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";


export default Soup = () => {
    const navigation = useNavigation()
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.header_container}>
                    <Text style={styles.header}>ÇORBALAR</Text>
                </View>
                <View>
                    <Image style={styles.image} source={{ uri: 'https://i.lezzet.com.tr/images-xxlarge/kremali-mantar-corbasi-020756-456f6021-3cb4-44dd-99e0-de61ceed1f78' }} />
                </View>
                <View style={styles.soup_crema}>
                    <Text style={styles.soup_name}>Kremalı Mantar Çorbası</Text>
                </View>
                <View style={styles.description_container}>
                    <Text style={styles.soup_description}>Ana vatanı Portekiz olan mantar, ülkemizde en çok Antalya'da yetiştirilir. Dünyanın birçok yerinde farklı çeşitleriyle üretilen bu besin, D vitamini bakımından çok zengindir.</Text>
                </View>

                <View>
                    <Text style={styles.hazır}>📋 Hazırlanma Süresi : 15 dakika</Text>
                    <Text style={styles.pısır}>🥘 Pişirme Süresi : 40 dakika</Text>
                </View>
                <View>
                    <Image style={styles.image} source={{ uri: 'https://cdn.yemek.com/mnresize/1250/833/uploads/2016/10/lokanta-usulu-mercimek-corbasi-one-cikan-yeni.jpg' }} />
                </View>
                <View style={styles.soup_crema}>
                    <Text style={styles.soup_name}>Mercimek Çorbası</Text>
                </View>
                <View style={styles.description_container}>
                    <Text style={styles.soup_description}>Soğuk kış günlerinde adeta bir hediye gibi değil midir, en yakın lokantanın mercimek çorbası...</Text>
                </View>
                <View>
                    <Text style={styles.hazır}>📋 Hazırlanma Süresi : 20 dakika</Text>
                    <Text style={styles.pısır}>🥘 Pişirme Süresi : 20 dakika</Text>
                </View>
                <View>
                    <Image style={styles.image} source={{ uri: 'https://cdn.yemek.com/mnresize/1250/833/uploads/2016/11/kozlenmis-domates-corbasi-one-cikan.jpg' }} />
                </View>
                <View style={styles.soup_crema}>
                    <Text style={styles.soup_name}>Közlenmis Domates Çorbası </Text>
                </View>
                <View style={styles.description_container}>
                    <Text style={styles.soup_description}>Küçük makarna taneleri olarak bilinen şehriye; tek başına yenilen bir yemek değildir. Bunun yerine pilav ve çorbaların içinde tat vermesi için kullanılır.</Text>
                </View>
                <View>
                    <Text style={styles.hazır}>📋 Hazırlanma Süresi : 10 dakika</Text>
                    <Text style={styles.pısır}>🥘 Pişirme Süresi : 25 dakika</Text>
                </View>
                <View>
                    <Image style={styles.image} source={{ uri: 'https://i.lezzet.com.tr/images-xxlarge-recipe/terbiyeli_sehriye_corbasi-728f61ca-da03-4e8b-b142-dddab803776b.jpg' }} />
                </View>
                <View style={styles.soup_crema}>
                    <Text style={styles.soup_name}>Terbiyeli Sehriye Çorbası </Text>
                </View>
                <View style={styles.description_container}>
                    <Text style={styles.soup_description}>Hastalıkta sağlıkta yanınızda olan bu nefis çorbayı sevmeyelim de ne yapalım? Bir kaşığı antibiyotik etkisi yaratır, bir kasesi de hastalıktan kaldırır.</Text>
                </View>
                <View>
                    <Text style={styles.hazır}>📋 Hazırlanma Süresi : 10 dakika</Text>
                    <Text style={styles.pısır}>🥘 Pişirme Süresi : 25 dakika</Text>
                </View>
                <View>
                    <Image style={styles.image} source={{ uri: 'https://i.lezzet.com.tr/images-xxlarge/sogan-corbasi-070342-f6fff079-7686-424a-87b6-3d407b4473de' }} />
                </View>
                <View style={styles.soup_crema}>
                    <Text style={styles.soup_name}>Sogan Çorbası </Text>
                </View>
                <View style={styles.description_container}>
                    <Text style={styles.soup_description}>Fransız mutfağından dünyanın birçok yerine yayılan soğan çorbası, özellikle kış aylarında vücut direncini arttırmak için tüketilir.</Text>
                </View>
                <View style={styles.bottom}>
                    <Text style={styles.hazır}>📋 Hazırlanma Süresi : 15 dakika</Text>
                    <Text style={styles.pısır}>🥘 Pişirme Süresi : 40 dakika</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f3972d',
        flex: 1,
    },
    header_container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        fontSize: 25,
        color: '#5c3dbc',
        fontFamily: 'DancingScript-Bold',
    },
    image: {
        width: 120,
        height: 120,
        borderRadius: 50,
        margin: 10,
        marginTop: 20,
    },
    soup_crema: {
        marginLeft: 160,
        marginTop: 10,
    },
    soup_name: {
        marginTop: -145,
        fontSize: 18,
        color: '#5c3dbc',
        fontFamily:'LilitaOne-Regular'
    },
    description_container: {
        padding: 10,
        marginLeft: 150,
        marginTop: -125
    },
    soup_description: {
        fontSize: 15,
        color: "black",
        borderWidth: 2,
        borderColor: "#5c3dbc",
        borderRadius: 5,
        padding: 10,
        fontWeight: 'bold',
    },
    hazır: {
        marginLeft: 10,
        color: "#5c3dbc",
    },
    pısır: {
        marginLeft: 10,
        color: '#5c3dbc',
    },
    bottom: {
        marginBottom: 15,
    }
})

