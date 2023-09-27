import React from "react";
import { View, Text, Button, Image, ScrollView, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";


export default Main = () => {
    const navigation = useNavigation()
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.header_container}>
                    <Text style={styles.header}>ANA YEMEKLER</Text>
                </View>
                <View style={styles.ımages_container}>
                    <Image style={styles.ımages} source={{ uri: 'https://i.nefisyemektarifleri.com/2021/10/04/kiymali-firin-yemegi-tarifi-arap-tava.jpg' }} />
                </View>
                <View style={styles.meet_container}>
                    <Text style={styles.meet_name}>Arap Tava</Text>
                </View>
                <View style={styles.description_container}>
                    <Text style={styles.description_meet}>Ramazan ve davet sofralarında misafirlerinize gururla ikram edebileceğiniz Arap tava, hem doyurucu hem hazırlaması kolay bir ana yemek. Sadece 1 tepside birleştirip fırına verin; yanına nefis pilavlarımızdan pişirmeyi unutmayın.</Text>
                </View>
                <View style={styles.bottom}>
                    <Text style={styles.hazır}>📋 Hazırlanma Süresi : 15 dakika</Text>
                    <Text style={styles.pısır}>🥘 Pişirme Süresi : 40 dakika</Text>
                </View>
                <View style={styles.ımages_container}>
                    <Image style={styles.ımages} source={{ uri: 'https://cdn.ye-mek.net/App_UI/Img/out/650/2022/04/sodali-kofte-resimli-yemek-tarifi(12).jpg?w=650&h=487' }} />
                </View>
                <View style={styles.meet_container}>
                    <Text style={styles.meet_name}>Sodalı Köfte</Text>
                </View>
                <View style={styles.description_container}>
                    <Text style={styles.description_meet}>Havalar soğuyunca pikniğe ara veriyoruz; fakat bu mangal tadından mahrum kalmamızı gerektirmiyor... Tam anlamıyla isli dumanlı aromaya sahip içi sulu sulu, puf puf sodalı köfte tarifi püf noktalarıyla listemizde!</Text>
                </View>
                <View style={styles.bottom}>
                    <Text style={styles.hazır}>📋 Hazırlanma Süresi : 15 dakika</Text>
                    <Text style={styles.pısır}>🥘 Pişirme Süresi : 40 dakika</Text>
                </View>
                <View style={styles.ımages_container}>
                    <Image style={styles.ımages} source={{ uri: 'https://www.misssgibi.com/media/scaled/2020/03/29/korili-tavuk-thumb-3-1x1-w1600_NR8erWB.jpg' }} />
                </View>
                <View style={styles.meet_container}>
                    <Text style={styles.meet_name}>Köri Soslu Mantarlı Tavuk</Text>
                </View>
                <View style={styles.description_container}>
                    <Text style={styles.description_meet}>Tavuk restoran zincirlerinde yüksek fiyatlar karşılığı yemektense mis gibi kendi mutfağınızda hazırlayabileceğiniz köri soslu kremalı mantarlı tavuk bu yıl binlerce kez alkış topladı! Lokum gibi pişen tavukların tam tadında krema sosuyla buluşması bu tarifte sizleri bekliyor.</Text>
                </View>
                <View style={styles.bottom}>
                    <Text style={styles.hazır}>📋 Hazırlanma Süresi : 15 dakika</Text>
                    <Text style={styles.pısır}>🥘 Pişirme Süresi : 40 dakika</Text>
                </View>
                <View style={styles.ımages_container}>
                    <Image style={styles.ımages} source={{ uri: 'https://d17wu0fn6x6rgz.cloudfront.net/img/w/tarif/mgt/tekirdag-kofte.webp' }} />
                </View>

                <View style={styles.meet_container}>
                    <Text style={styles.meet_name}>Tekirdag Köftesi</Text>
                </View>
                <View style={styles.description_container}>
                    <Text style={styles.description_meet}>1 gece önceden hazırlanan köfte harcının enfes bir lezzete dönüşmesine şahit olacağınız Tekirdağ köftesi tarifi, 2022'nin yıldızları arasında yerini aldı! Yanında orijinal piyaz tarifiyle ziyafete dönüşen tarifi kaçırmayın deriz.</Text>
                </View>
                <View style={styles.bottom}>
                    <Text style={styles.hazır}>📋 Hazırlanma Süresi : 15 dakika</Text>
                    <Text style={styles.pısır}>🥘 Pişirme Süresi : 40 dakika</Text>
                </View>
                <View style={styles.ımages_container}>
                    <Image style={styles.ımages} source={{ uri: 'https://i.nefisyemektarifleri.com/2021/04/16/patates-oturtma-nasil-yapilir-7.jpg' }} />
                </View>
                <View style={styles.meet_container}>
                    <Text style={styles.meet_name}>Patates Oturtma</Text>
                </View>
                <View style={styles.description_container}>
                    <Text style={styles.description_meet}>İddia ediyoruz, patatesi daha önce hiç bu kadar lezzetli görmediniz! Alışıldık malzemeleri bambaşka tariflere dönüştüren mutfağımızda patates oturtma 2022'de çok beğenildi. Patates tabanında beşamel soslu kıymalı harç sizi çağırıyor!</Text>
                </View>
                <View style={styles.bottom}>
                    <Text style={styles.hazır}>📋 Hazırlanma Süresi : 15 dakika</Text>
                    <Text style={styles.pısır}>🥘 Pişirme Süresi : 40 dakika</Text>
                </View>
                <View style={styles.ımages_container}>
                    <Image style={styles.ımages} source={{ uri: 'https://i.pinimg.com/736x/f9/6d/67/f96d67886a9cc8a3151712ccedf60a2c.jpg' }} />
                </View>
                <View style={styles.meet_container}>
                    <Text style={styles.meet_name}>Kasarlı Tas Kebabı</Text>
                </View>
                <View style={styles.description_container}>
                    <Text style={styles.description_meet}>Ramazan ayında beğeni kazanan kaşarlı tas kebabı, sebze ve parça etin buluştuğu sunumu kolay, porsiyonluk ve göz alıcı bir tarif. Adım adım resimli yapılış aşamalarıyla tas kebabını bir de böyle deneyin, kaçırmayın!</Text>
                </View>
                <View style={styles.bottom}>
                    <Text style={styles.hazır}>📋 Hazırlanma Süresi : 15 dakika</Text>
                    <Text style={styles.pısır}>🥘 Pişirme Süresi : 40 dakika</Text>
                </View>
                <View style={styles.ımages_container}>
                    <Image style={styles.ımages} source={{ uri: 'https://cdn.ye-mek.net/App_UI/Img/out/650/2021/07/tavuk-gogsu-kizartmasi-resimli-yemek-tarifi(11).jpg' }} />
                </View>
                <View style={styles.meet_container}>
                    <Text style={styles.meet_name}>Tavuk Gögsü</Text>
                </View>
                <View style={styles.description_container}>
                    <Text style={styles.description_meet}>2022'nin en beğenilen tavuk yemekleri arasında fırında kremalı patatesli tavuk göğsü, özellikle çocukların severek yiyeceği iştah açan bir ana yemek. Patates ve tavukları dilediğiniz sebzeyle harmanlayıp fırına verebilirsiniz.</Text>
                </View>
                <View style={styles.bottom}>
                    <Text style={styles.hazır}>📋 Hazırlanma Süresi : 15 dakika</Text>
                    <Text style={styles.pısır}>🥘 Pişirme Süresi : 40 dakika</Text>
                </View>
                <View style={styles.ımages_container}>
                    <Image style={styles.ımages} source={{ uri: 'https://i.nefisyemektarifleri.com/2020/04/27/hasanpasa-kofte.jpg' }} />
                </View>
                <View style={styles.meet_container}>
                    <Text style={styles.meet_name}>Hasanpasa Köfte</Text>
                </View>
                <View style={styles.description_container}>
                    <Text style={styles.description_meet}>Hasanpaşa köfteyi orijinal ve her denemede aynı lezzeti veren tarifiyle denemeye hazır mısınız? 2022'nin en popüler köfte tarifleri arasına giren Hasanpaşa köfte, et ve patatesin muhteşem uyumuyla sizi bekliyor.</Text>
                </View>
                <View style={styles.bottom}>
                    <Text style={styles.hazır}>📋 Hazırlanma Süresi : 15 dakika</Text>
                    <Text style={styles.pısır}>🥘 Pişirme Süresi : 40 dakika</Text>
                </View>
                <View style={styles.ımages_container}>
                    <Image style={styles.ımages} source={{ uri: 'https://img.lezizyemeklerim.com/tarif/17054/patatesli-sulu-kofte-nasil-yapilir_ce715bd076c8d03123435b11396fa2ba/640x467.jpg' }} />
                </View>
                <View style={styles.meet_container}>
                    <Text style={styles.meet_name}>Patatesli Sulu Köfte</Text>
                </View>
                <View style={styles.description_container}>
                    <Text style={styles.description_meet}>Sulu ev yemeklerinin en eğlencelilerinden patatesli sulu köfteyi, orijinal tarifinden denemenizi tavsiye ediyoruz. Birebir denenmiş, takipçilerimizin beğenisini toplamış patatesli sulu köfte dağılmadan nasıl pişirilir, işte yanıtı!</Text>
                </View>
                <View style={styles.bottom}>
                    <Text style={styles.hazır}>📋 Hazırlanma Süresi : 15 dakika</Text>
                    <Text style={styles.pısır}>🥘 Pişirme Süresi : 40 dakika</Text>
                </View>
                <View style={styles.ımages_container}>
                    <Image style={styles.ımages} source={{ uri: 'https://www.kevserinmutfagi.com/wp-content/uploads/2011/12/firinda_kiymali_karnabahar11-600x450.jpg' }} />
                </View>
                <View style={styles.meet_container}>
                    <Text style={styles.meet_name}>Fırın Karnabahar</Text>
                </View>
                <View style={styles.description_container}>
                    <Text style={styles.description_meet}>Haşlamakla vakit kaybetmeden lezzetli bir karnabahar nasıl yapılabilir? İşte bu tarifle! Mevsiminde ekonomik ve vitaminli karnabaharları bol bol değerlendirebileceğiniz lokum kıvamında bu formülü 2022'de deneyenler çok beğendi...</Text>
                </View>
                <View style={styles.bottom}>
                    <Text style={styles.hazır}>📋 Hazırlanma Süresi : 15 dakika</Text>
                    <Text style={styles.pısır}>🥘 Pişirme Süresi : 40 dakika</Text>
                </View>
                <View style={styles.ımages_container}>
                    <Image style={styles.ımages} source={{ uri: 'https://i.nefisyemektarifleri.com/2021/11/10/zeytinyagli-patlican-yemegi-yapimi-6.jpg' }} />
                </View>
                <View style={styles.meet_container}>
                    <Text style={styles.meet_name}>Zeytinyaglı Patlıcan Yemegi</Text>
                </View>
                <View style={styles.description_container}>
                    <Text style={styles.description_meet}>Patlıcanı bir de zeytinyağlı deneyin; yaz aylarında favoriniz olacağına söz veriyoruz! Hafif, besleyici ve pratik ana yemek tarifi arayanların defterine çoktan eklediği zeytinyağlı patlıcan yemeği sizin de mutfağınızda konuk olmaya hazır.</Text>
                </View>
                <View style={styles.bottom}>
                    <Text style={styles.hazır}>📋 Hazırlanma Süresi : 15 dakika</Text>
                    <Text style={styles.pısır}>🥘 Pişirme Süresi : 40 dakika</Text>
                </View>
                <View style={styles.ımages_container}>
                    <Image style={styles.ımages} source={{ uri: 'https://cdn.yemek.com/mnresize/1250/833/uploads/2021/12/taco-sevgililer-gunu-gorsel.jpg' }} />
                </View>
                <View style={styles.meet_container}>
                    <Text style={styles.meet_name}>Taco</Text>
                </View>
                <View style={styles.description_container}>
                    <Text style={styles.description_meet}>Meksika mutfağının ikonikleşen ana yemeği tacoyu bir de bizim tarifimizle deneyin, sonuca bayılacaksınız! Hazır lavaş ekmeği arasında tavuklu muhteşem harç, ardından doğru fırına! Çıtır ve eğlenceli bir yemek sizi bekliyor.</Text>
                </View>
                <View style={styles.bottom}>
                    <Text style={styles.hazır}>📋 Hazırlanma Süresi : 15 dakika</Text>
                    <Text style={styles.pısır}>🥘 Pişirme Süresi : 40 dakika</Text>
                </View>
                <View style={styles.ımages_container}>
                    <Image style={styles.ımages} source={{ uri: 'https://i.ytimg.com/vi/dqk42cL81zg/maxresdefault.jpg' }} />
                </View>
                <View style={styles.meet_container}>
                    <Text style={styles.meet_name}>Sebzeli Kagıt Kebabı</Text>
                </View>
                <View style={styles.description_container}>
                    <Text style={styles.description_meet}>Kendi mutfağımda şöyle şık sunumlu, porsiyonluk pişirebileceğim davet yemeği arıyorum, diyenler hemen toplanın! Lokum gibi yumuşacık kıvamıyla ağızda dağılan et ve sebzelerin dans ettiği kağıt kebabı 2022'ye damga vuran ana yemeklerimizden.</Text>
                </View>
                <View style={styles.bottom}>
                    <Text style={styles.hazır}>📋 Hazırlanma Süresi : 15 dakika</Text>
                    <Text style={styles.pısır}>🥘 Pişirme Süresi : 40 dakika</Text>
                </View>
                <View style={styles.ımages_container}>
                    <Image style={styles.ımages} source={{ uri: 'https://i.lezzet.com.tr/images-xxlarge/nohut-yemegi-620c3ece-e046-44da-b008-dc3ebf38c007' }} />
                </View>
                <View style={styles.meet_container}>
                    <Text style={styles.meet_name}>Nohut Yemegi</Text>
                </View>
                <View style={styles.description_container}>
                    <Text style={styles.description_meet}>Nohut yemeğinizin daha hızlı pişmesi için düdüklü tencerede de pişirebilirsiniz.Nohut yemeğinizi etsiz yapabileceğiniz gibi etli, kıymalı da yapabilirsiniz.</Text>
                </View>
                <View style={styles.bottom}>
                    <Text style={styles.hazır}>📋 Hazırlanma Süresi : 15 dakika</Text>
                    <Text style={styles.pısır}>🥘 Pişirme Süresi : 40 dakika</Text>
                </View>
                <View style={styles.ımages_container}>
                    <Image style={styles.ımages} source={{ uri: 'https://d17wu0fn6x6rgz.cloudfront.net/img/w/tarif/mgt/frnda-karnyark-313.webp' }} />
                </View>
                <View style={styles.meet_container}>
                    <Text style={styles.meet_name}>Karnıyarık</Text>
                </View>
                <View style={styles.description_container}>
                    <Text style={styles.description_meet}>Karnıyarık Türk mutfağının belli başlı patlıcan yemeklerinden biridir. Hazırlanırken ana malzeme olan patlıcanın dışında soğan, biber, domates ve kıyma da kullanılır.</Text>
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
    ımages_container: {
        width: 120,
        height: 120,
        borderRadius: 50,
        margin: 10,
        marginTop: 20,
    },
    ımages: {
        width: 120,
        height: 120,
        borderRadius: 50,
        margin: 3,
        marginTop: 20,
    },
    meet_container: {
        marginLeft: 160,
    },
    meet_name: {
        marginTop: -130,
        color: 'white',
        fontSize: 18,
        color: '#5c3dbc',
        fontFamily: 'LilitaOne-Regular'
    },
    description_container: {
        padding: 10,
        marginLeft: 140,
        marginTop: -110
    },
    description_meet: {
        borderWidth: 2,
        padding: 10,
        borderRadius: 5,
        fontSize: 15,
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
    bottom: {
        marginBottom: 15,
    }
})