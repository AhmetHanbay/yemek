import React from "react";
import { View, Text, Button, Image, ScrollView, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";


export default Meet = () => {
    const navigation = useNavigation()
    return(
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.header_container}>
                    <Text style={styles.header}>ARA SICAKLAR</Text>
                </View>
                <View style={styles.ımages_container}>
                    <Image style={styles.ımages} source={{uri:'https://i.nefisyemektarifleri.com/2019/04/02/kiymali-mantar-dolmasi-1.jpg'}}/>
                </View>
                <View style={styles.meet_container}>
                    <Text style={styles.meet_name}>Kıymalı Mantar Dolması</Text>
                </View>
                <View style={styles.description_container}>
                    <Text style={styles.description_meet}>Domatesli biberli kıymalı harç ile buluşan fırınlanmış mantar çanakları, protein deposu olarak ara sıcaklarınız arasında yerini almaya hazır.</Text>
                </View>
                <View style={styles.bottom}>
                    <Text style={styles.hazır}>📋 Hazırlanma Süresi : 15 dakika</Text>
                    <Text style={styles.pısır}>🥘 Pişirme Süresi : 40 dakika</Text>
                </View>
                <View style={styles.ımages_container}>
                    <Image style={styles.ımages} source={{uri:'https://i.nefisyemektarifleri.com/2023/01/11/pastirmali-humus-nasil-yapilir-1.jpg'}}/>
                </View>
                <View style={styles.meet_container}>
                    <Text style={styles.meet_name}>Pastırmalı Humus</Text>
                </View>
                <View style={styles.description_container}>
                    <Text style={styles.description_meet}>Hemencecik hazırlayabileceğiniz, çok pratik bir tarif. İştah açan görünümü ve pastırmalı aromasıyla tüm sevdiklerinizi mutlu etmeye yetecek humus tabakları sizleri bekliyor.</Text>
                </View>
                <View style={styles.bottom}>
                    <Text style={styles.hazır}>📋 Hazırlanma Süresi : 15 dakika</Text>
                    <Text style={styles.pısır}>🥘 Pişirme Süresi : 40 dakika</Text>
                </View>
                <View style={styles.ımages_container}>
                    <Image style={styles.ımages} source={{uri:'https://i.nefisyemektarifleri.com/2019/05/15/mucver-nasil-yapilir-firinda-kabak-mucver-tarifi.jpg'}}/>
                </View>
                <View style={styles.meet_container}>
                    <Text style={styles.meet_name}>Mücver</Text>
                </View>
                <View style={styles.description_container}>
                    <Text style={styles.description_meet}>Kabak tariflerinin belki de en gözdesi taze taze kızarmış mücver, öyle değil mi? Maydanoz, kabak ve peynirle hazırlayacağınız yumurtalı harç ile keyifli öğünler sizi bekliyor.</Text>
                </View>
                <View style={styles.bottom}>
                    <Text style={styles.hazır}>📋 Hazırlanma Süresi : 15 dakika</Text>
                    <Text style={styles.pısır}>🥘 Pişirme Süresi : 40 dakika</Text>
                </View>
                <View style={styles.ımages_container}>
                    <Image style={styles.ımages} source={{uri:'https://i.nefisyemektarifleri.com/2018/09/28/kasarli-patates-kroket-600x400.jpg'}}/>
                </View>
                
                <View style={styles.meet_container}>
                    <Text style={styles.meet_name}>Kasarlı Patates Kroke</Text>
                </View>
                <View style={styles.description_container}>
                    <Text style={styles.description_meet}>Patates kızartmasının farklı bir versiyonu olan kroket ile haşlanmış patateslerle rendelenmiş kaşarlarınızı sıcacık lokmalara kolayca dönüştürebilirsiniz.</Text>
                </View>
                <View style={styles.bottom}>
                    <Text style={styles.hazır}>📋 Hazırlanma Süresi : 15 dakika</Text>
                    <Text style={styles.pısır}>🥘 Pişirme Süresi : 40 dakika</Text>
                </View>
                <View style={styles.ımages_container}>
                    <Image style={styles.ımages} source={{uri:'https://i.nefisyemektarifleri.com/2020/09/14/pacanga-boregi-7.jpeg'}}/>
                </View>
                <View style={styles.meet_container}>
                    <Text style={styles.meet_name}>Paçanga Böregi</Text>
                </View>
                <View style={styles.description_container}>
                    <Text style={styles.description_meet}>Türk damak tadına belki de en uygun börekler arasında başı çeken paçanga böreği, buram buram pastırma lezzetiyle sofralarınızda yer edinmeye çoktan hazır.</Text>
                </View>
                <View style={styles.bottom}>
                    <Text style={styles.hazır}>📋 Hazırlanma Süresi : 15 dakika</Text>
                    <Text style={styles.pısır}>🥘 Pişirme Süresi : 40 dakika</Text>
                </View>
                <View style={styles.ımages_container}>
                    <Image style={styles.ımages} source={{uri:'https://i.nefisyemektarifleri.com/2021/02/04/yumusak-firinda-sigara-boregi.jpg'}}/>
                </View>
                <View style={styles.meet_container}>
                    <Text style={styles.meet_name}>Fırında Sigara Böregi</Text>
                </View>
                <View style={styles.description_container}>
                    <Text style={styles.description_meet}>Sigarayı savunmuyoruz elbette ama hazırlayabileceğiniz en pratik börek tarifini vermekten de çekinmiyoruz. Kolay ve lezzetli çıtır sigara böreğinin fırında pişen tarifi hemen burada!</Text>
                </View>
                <View style={styles.bottom}>
                    <Text style={styles.hazır}>📋 Hazırlanma Süresi : 15 dakika</Text>
                    <Text style={styles.pısır}>🥘 Pişirme Süresi : 40 dakika</Text>
                </View>
                <View style={styles.ımages_container}>
                    <Image style={styles.ımages} source={{uri:'https://i.nefisyemektarifleri.com/2020/05/30/pratik-tavada-kasarli-mantar.jpg'}}/>
                </View>
                <View style={styles.meet_container}>
                    <Text style={styles.meet_name}>Kasarlı Mantar</Text>
                </View>
                <View style={styles.description_container}>
                    <Text style={styles.description_meet}>Tereyağlı ve kaşarlı enfes mantarlar, fırınlandığında kaşar örtüsü altında kayboluyor ve adeta bir lezzet bombasına dönüşüyor, tarif için linke tıklayın.</Text>
                </View>
                <View style={styles.bottom}>
                    <Text style={styles.hazır}>📋 Hazırlanma Süresi : 15 dakika</Text>
                    <Text style={styles.pısır}>🥘 Pişirme Süresi : 40 dakika</Text>
                </View>
                <View style={styles.ımages_container}>
                    <Image style={styles.ımages} source={{uri:'https://i.nefisyemektarifleri.com/2018/05/23/biber-dolmasi-tarifi-11.jpg'}}/>
                </View>
                <View style={styles.meet_container}>
                    <Text style={styles.meet_name}>Biber Dolması</Text>
                </View>
                <View style={styles.description_container}>
                    <Text style={styles.description_meet}>Zeytinyağı ile hoş bir tat kazandırabileceğiniz biber dolmaları leziz harcı ile iştah açıcı bir hal alıyor. Aşamalı fotoğrafları sizlere rehberlik edecek.</Text>
                </View>
                <View style={styles.bottom}>
                    <Text style={styles.hazır}>📋 Hazırlanma Süresi : 15 dakika</Text>
                    <Text style={styles.pısır}>🥘 Pişirme Süresi : 40 dakika</Text>
                </View>
                <View style={styles.ımages_container}>
                    <Image style={styles.ımages} source={{uri:'https://i.nefisyemektarifleri.com/2020/03/27/kuru-patlican-dolmasi-10.jpg'}}/>
                </View>
                <View style={styles.meet_container}>
                    <Text style={styles.meet_name}>Kuru Patlıcan Dolması</Text>
                </View>
                <View style={styles.description_container}>
                    <Text style={styles.description_meet}>Antep mutfağının meşhur kuru dolmalarından olan patlıcan dolmasının lezzetini bilen bilir :) Bilmeyenler için açıklamalı tarifimiz sizleri bekliyor.</Text>
                </View>
                <View style={styles.bottom}>
                    <Text style={styles.hazır}>📋 Hazırlanma Süresi : 15 dakika</Text>
                    <Text style={styles.pısır}>🥘 Pişirme Süresi : 40 dakika</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container : {
        backgroundColor: '#f3972d',
        flex: 1,
    },
    header_container:{
        justifyContent: 'center',
        alignItems: 'center',
    },
    header:{
        fontSize:25,
        color: '#5c3dbc',
        fontFamily: 'DancingScript-Bold',
    },
    ımages_container:{
        width:120,
        height:120,
        borderRadius: 50,
        margin:10,
        marginTop: 20,
    },
    ımages:{
        width:120,
        height:120,
        borderRadius: 50,
        margin:3,
        marginTop: 20,
    },
    meet_container:{
        marginLeft: 160,
    },
    meet_name:{
        marginTop:-130,
        color: 'white',
        fontSize: 18,
        color: '#5c3dbc',
        fontFamily:'LilitaOne-Regular'
    },
    description_container:{
        padding: 10,
        marginLeft: 140,
        marginTop: -110
    },
    description_meet:{ 
        borderWidth: 2,
        padding: 10,
        borderRadius: 5,
        fontSize:15,
        borderColor: '#5c3dbc',
        color: 'black',
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
    bottom:{
        marginBottom: 15,
    }
})