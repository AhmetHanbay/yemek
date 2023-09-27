import React from "react";
import { View, Text, Button, Image, ScrollView, StyleSheet, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";


export default Salat = () => {
    const navigation = useNavigation()
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.header_container}>
                    <Text style={styles.header}>SALATALAR</Text>
                </View>
                <View>
                    <Image style={styles.images} source={{ uri: 'https://i.ytimg.com/vi/dAgxhQDuQPo/hqdefault.jpg' }} />
                </View>
                <View style={styles.salat_container}>
                    <Text style={styles.salat}>Yıldız Sehriye Salatası</Text>
                </View>
                <View style={styles.description_container}>
                    <Text style={styles.description}>Şehriye salatası sevenler bugünkü iftarın şirin mi şirin görünen tarifi yıldız şehriye salatası olsun. Kornişon turşu, mısır, kırmızı biber doğrayarak hazırlayabileceğiniz bu tarifi dilediğiniz gibi zenginleştirmesi size kalmış!</Text>
                </View>
                <View style={styles.bottom}>
                    <Text style={styles.hazır}>📋 Hazırlanma Süresi : 15 dakika</Text>
                </View>
                <View>
                    <Image style={styles.images} source={{ uri: 'https://i.lezzet.com.tr/images-xxlarge-recipe/cevizli_kabak_salatasi-0434695b-a132-44eb-ab7c-5e91a6cf08b1.jpg' }} />
                </View>
                <View style={styles.salat_container}>
                    <Text style={styles.salat}>Kabak Salatası</Text>
                </View>
                <View style={styles.description_container}>
                    <Text style={styles.description}>Kabak yoğurtlamasının kızartılarak yapılan tarifi gayet lezzetli olsa da iftar için hazırlanacak daha hafif bir tarife yer veriyoruz. Sotelenen rende kabakların yoğurtla buluştuğu hem çok hafif hem de enfes tarifi, kabak salatası bu ramazan mutlaka denemelisiniz.</Text>
                </View>
                <View style={styles.bottom}>
                    <Text style={styles.hazır}>📋 Hazırlanma Süresi : 15 dakika</Text>
                </View>
                <View>
                    <Image style={styles.images} source={{ uri: 'https://cdn.yemek.com/mnresize/1250/833/uploads/2014/10/gavurdagi-salatasi-yeni-one-cikan.jpg' }} />
                </View>
                <View style={styles.salat_container}>
                    <Text style={styles.salat}>Gavurdagı Salatası</Text>
                </View>
                <View style={styles.description_container}>
                    <Text style={styles.description}>Türk mutfağının enfes lezzeti Gavurdağı salatası iftarın en iştah açıcı yanı olmaya geliyor. 10 dakikada hazırlayıp sofraya taşıyabileceğiniz salatanız deneyen herkesten güzel yorumlar alacak şimdiden söylemesi!</Text>
                </View>
                <View style={styles.bottom}>
                    <Text style={styles.hazır}>📋 Hazırlanma Süresi : 15 dakika</Text>
                </View>
                <View>
                    <Image style={styles.images} source={{ uri: 'https://mutfaksirlari.com/wp-content/uploads/2015/02/mor_lahana_salatasi.jpg' }} />
                </View>
                <View style={styles.salat_container}>
                    <Text style={styles.salat}>Mor Lahana Salatası</Text>
                </View>
                <View style={styles.description_container}>
                    <Text style={styles.description}>Sirke ile ovarak hazırlandığı için yiyenlere sanki turşu tadı veren bir salata tarifi var: Mor lahana salatası! Hızlıca doğrayarak iftara 10 dakika kala bile hazır edebilirsiniz. Yapımının detayları için buraya buyurun!</Text>
                </View>
                <View style={styles.bottom}>
                    <Text style={styles.hazır}>📋 Hazırlanma Süresi : 15 dakika</Text>
                </View>
                <View>
                    <Image style={styles.images} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI7zW518j222_kwAFY0Gd3vk5p01mkfT7KCQ&usqp=CAU' }} />
                </View>
                <View style={styles.salat_container}>
                    <Text style={styles.salat}>Yogurtlu Semizotu Salatası</Text>
                </View>
                <View style={styles.description_container}>
                    <Text style={styles.description}>Yoğurtlu tadıyla iç ferahlatan salatalar sizin için de iftar sofrasının olmazsa olmazı ise semizotlu salatanın bu tarifi mutlaka ilginizi çekecektir. Semizotunun tüm faydasının yoğurtla birleştiği tarifi için buraya tıklayabilirsiniz.</Text>
                </View>
                <View style={styles.bottom}>
                    <Text style={styles.hazır}>📋 Hazırlanma Süresi : 15 dakika</Text>
                </View>
                <View>
                    <Image style={styles.images} source={{ uri: 'https://www.kevserinmutfagi.com/wp-content/uploads/2015/06/kurutulmus_domatesli_roka_salatasi1.jpg' }} />
                </View>
                <View style={styles.salat_container}>
                    <Text style={styles.salat}>Roka Salatası</Text>
                </View>
                <View style={styles.description_container}>
                    <Text style={styles.description}>Tarife özel sosunun yeşilliklere çok yakıştığı oldukça pratik hazırlanan salata tariflerinden biri! İnce ince doğramaya bile gerek yok! Birkaç dakikada hazırlayıp salata kaselerini süsleyeceğiniz tarifine buradan ulaşabilirsiniz.</Text>
                </View>
                <View style={styles.bottom}>
                    <Text style={styles.hazır}>📋 Hazırlanma Süresi : 15 dakika</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}


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
    images: {
        width: 120,
        height: 120,
        borderRadius: 50,
        margin: 10,
        marginTop: 20,
    },
    salat_container: {
        marginLeft: 160,
    },
    salat: {
        marginTop: -150,
        color: 'white',
        fontSize: 18,
        color: '#5c3dbc',
        fontFamily: 'LilitaOne-Regular'
    },
    description_container: {
        margin: 5,
    },
    description: {
        marginLeft: 140,
        marginTop: -130,
        borderWidth: 2,
        borderRadius: 5,
        borderColor: '#5c3dbc',
        padding: 10,
        color: 'black',
        fontWeight: 'bold',
    },
    bottom: {
        marginBottom: 15
    },
    pısır: {
        marginLeft: 10,
        color: "#5c3dbc",
    },
    hazır: {
        marginLeft: 10,
        color: "#5c3dbc",
    }
})