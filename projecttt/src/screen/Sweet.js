import React from "react";
import { View, Text, Button, Image, ScrollView, SafeAreaView, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";


export default Sweet = () => {
    const navigation = useNavigation()
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.header_container}>
                    <Text style={styles.header}>TATLILAR</Text>
                </View>
                <View style={styles.images_container}>
                    <Image style={styles.images} source={{ uri: 'https://cdn.shopify.com/s/files/1/1259/6441/files/kunefe_e1215489-b0b3-4ddb-a17d-fc98078a7c6a.jpg?v=1672214209' }} />
                </View>
                <View style={styles.sweet_container}>
                    <Text style={styles.sweet_name}>Künefe</Text>
                </View>
                <View style={styles.description_container}>
                    <Text style={styles.description}>Kadayıf; rendelenmiş buğday, fındık ve şerbetin bir araya getirilmesi ile hazırlanır. Kadayıftan hazırlanan künefe ise, peynir eklenmesi ile unutulmaz bir tada sahip olan diyet düşmanı bir tatlı haline gelir. Üzerine bir tutam beyaz dondurma ve bir tutam öğütülmüş Antep fıstığı serpilir ve yoğun tatlı kombinasyonu sayesinde eşsiz bir lezzet haline gelir. Şeker oranı olarak da baklavaya oldukça yakındır.</Text>
                </View>
                <View style={styles.bottom}>
                    <Text style={styles.hazır}>📋 Hazırlanma Süresi : 15 dakika</Text>
                    <Text style={styles.pısır}>🥘 Pişirme Süresi : 40 dakika</Text>
                </View>
                <View style={styles.images_container}>
                    <Image style={styles.images} source={{ uri: 'https://cdn.shopify.com/s/files/1/1259/6441/files/un-helvasi.jpg?v=1680697098' }} />
                </View>
                <View style={styles.sweet_container}>
                    <Text style={styles.sweet_name}>Irmik Helvası</Text>
                </View>
                <View style={styles.description_container}>
                    <Text style={styles.description}>Un, tereyağı, şeker ve su malzemelerinden elde edilen bu benzersiz tatlı da bayramlarda ve kandil gecelerinde dağıtılmaktadır. Kendine has tadı ile çok sevilen un helvasını yapmak oldukça kolaydır. Dondurma ile de tüketilebilir.</Text>
                </View>
                <View style={styles.bottom}>
                    <Text style={styles.hazır}>📋 Hazırlanma Süresi : 15 dakika</Text>
                    <Text style={styles.pısır}>🥘 Pişirme Süresi : 40 dakika</Text>
                </View>
                <View style={styles.images_container}>
                    <Image style={styles.images} source={{ uri: 'https://cdn.shopify.com/s/files/1/1259/6441/files/bir-tabak-kazandibi.jpg?v=1680697190' }} />
                </View>
                <View style={styles.sweet_container}>
                    <Text style={styles.sweet_name}>Kazandibi</Text>
                </View>
                <View style={styles.description_container}>
                    <Text style={styles.description}>1-2 avuç haşlanmış ve didiklenmiş tavuk, nişasta ve sütle hazırlanan benzersiz lezzetteki kazandibi tatlısı, Türk tatlıları arasında ilk sıralarda yer alır. Günümüzde bu özel tatlıyı tavuk eklemeden hazırlayan birçok yer vardır.</Text>
                </View>
                <View style={styles.bottom}>
                    <Text style={styles.hazır}>📋 Hazırlanma Süresi : 15 dakika</Text>
                    <Text style={styles.pısır}>🥘 Pişirme Süresi : 40 dakika</Text>
                </View>
                <View style={styles.images_container}>
                    <Image style={styles.images} source={{ uri: 'https://cdn.shopify.com/s/files/1/1259/6441/files/tulumba.jpg?v=1672214292' }} />
                </View>
                <View style={styles.sweet_container}>
                    <Text style={styles.sweet_name}>Tulumba</Text>
                </View>
                <View style={styles.description_container}>
                    <Text style={styles.description}>Isırdığınızda ağzınızın yüksek oranda tatlı ile dolmasını istiyorsanız tulumba, yapılabilecek en iyi tercihlerden. Bu lezzetli sokak tatlısı, hamur toplarının derin yağda kızartılması ve henüz sıcakken şerbete batırılmasıyla yapılır. Bu sayede tatlıların dışı çıtır çıtır, içi ise yumuşak, yarı sıvı şekerli bir dokuya sahip olur. Şerbetle kaplı bir tatlı sizin için yeterince tatlı değilse, çikolata şuruplu tulumbayı deneyin.</Text>
                </View>
                <View style={styles.bottom}>
                    <Text style={styles.hazır}>📋 Hazırlanma Süresi : 15 dakika</Text>
                    <Text style={styles.pısır}>🥘 Pişirme Süresi : 40 dakika</Text>
                </View>
                <View style={styles.images_container}>
                    <Image style={styles.images} source={{ uri: 'https://cdn.shopify.com/s/files/1/1259/6441/files/muhallebi_18bbc706-3a3b-4045-8642-441ebee26277.jpg?v=1672214314' }} />
                </View>
                <View style={styles.sweet_container}>
                    <Text style={styles.sweet_name}>Muhallebi</Text>
                </View>
                <View style={styles.description_container}>
                    <Text style={styles.description}>Geleneksel Türk tatlıları arasında yer alan muhallebi, en eski tarihe sahip lezzetlerden birisidir. Pratik hazırlanışı ile en çok yapılan tatlılardan birisi olan muhallebi, birçok farklı tatlının da temelini oluşturur. Genelde puding gibi hazırlanan muhallebinin üstüne çeşitli meyveler, badem, ceviz ya da fıstık eklenerek daha lezzetli hale de gelebilir.</Text>
                </View>
                <View style={styles.bottom}>
                    <Text style={styles.hazır}>📋 Hazırlanma Süresi : 15 dakika</Text>
                    <Text style={styles.pısır}>🥘 Pişirme Süresi : 40 dakika</Text>
                </View>
                <View style={styles.images_container}>
                    <Image style={styles.images} source={{ uri: 'https://cdn.shopify.com/s/files/1/1259/6441/files/sobiyet.jpg?v=1672214349' }} />
                </View>
                <View style={styles.sweet_container}>
                    <Text style={styles.sweet_name}>Söbiyet</Text>
                </View>
                <View style={styles.description_container}>
                    <Text style={styles.description}>Şöbiyet, süt ve irmikten oluşan yufka tatlısıdır. İnce bir hamur üzerine fıstık ya da ceviz gibi kuruyemişler serpilerek pişirilir. İçine kaymak veya peynir gibi sütlü bir malzeme doldurulur ve genellikle bal ile servis edilir. Yapımı zahmetli olsa da muhteşem lezzeti sofralara damga vuruyor. Liva ustalarının uzun yıllara dayanan tecrübeleri ile hazırladığı fıstıklı kaymaklı şöbiyet, hafif yapısı ile hem yaz aylarında hem de kış aylarında sevilerek tüketiliyor.</Text>
                </View>
                <View style={styles.bottom}>
                    <Text style={styles.hazır}>📋 Hazırlanma Süresi : 15 dakika</Text>
                    <Text style={styles.pısır}>🥘 Pişirme Süresi : 40 dakika</Text>
                </View>
                <View style={styles.images_container}>
                    <Image style={styles.images} source={{ uri: 'https://cdn.shopify.com/s/files/1/1259/6441/files/bir-tabak-gullac.jpg?v=1680697313' }} />
                </View>
                <View style={styles.sweet_container}>
                    <Text style={styles.sweet_name}>Güllaç</Text>
                </View>
                <View style={styles.description_container}>
                    <Text style={styles.description}>Tereyağlı ve kaşarlı enfes mantarlar, fırınlandığında kaşar örtüsü altında kayboluyor ve adeta bir lezzet bombasına dönüşüyor, tarif için linke tıklayın.</Text>
                </View>
                <View style={styles.bottom}>
                    <Text style={styles.hazır}>📋 Hazırlanma Süresi : 15 dakika</Text>
                    <Text style={styles.pısır}>🥘 Pişirme Süresi : 40 dakika</Text>
                </View>
                <View style={styles.images_container}>
                    <Image style={styles.images} source={{ uri: 'https://cdn.shopify.com/s/files/1/1259/6441/files/liva-firin-sutlac.jpg?v=1680697956' }} />
                </View>
                <View style={styles.sweet_container}>
                    <Text style={styles.sweet_name}>Sütlaç</Text>
                </View>
                <View style={styles.description_container}>
                    <Text style={styles.description}>Sütlaç, dünyanın her yerinde çok sevilir ve her ülkenin kendine özgü bir versiyonu vardır. Her ne kadar farklı versiyonlar olsa da geleneksel Türk tatlıları arasında yer alan fırın sütlaç, basit hazırlanma yöntemi ve eşsiz lezzetiyle, en sevilen tatlardan birisidir.</Text>
                </View>
                <View style={styles.bottom}>
                    <Text style={styles.hazır}>📋 Hazırlanma Süresi : 15 dakika</Text>
                    <Text style={styles.pısır}>🥘 Pişirme Süresi : 40 dakika</Text>
                </View>
                <View style={styles.images_container}>
                    <Image style={styles.images} source={{ uri: 'https://cdn.shopify.com/s/files/1/1259/6441/files/cevizli-baklava_e9d554ed-d508-4754-9930-e95a6b2aa2a5.jpg?v=1680697547' }} />
                </View>
                <View style={styles.sweet_container}>
                    <Text style={styles.sweet_name}>Baklava</Text>
                </View>
                <View style={styles.description_container}>
                    <Text style={styles.description}>Kadayıf; rendelenmiş buğday, fındık ve şerbetin bir araya getirilmesi ile hazırlanır. Kadayıftan hazırlanan künefe ise, peynir eklenmesi ile unutulmaz bir tada sahip olan diyet düşmanı bir tatlı haline gelir. Üzerine bir tutam beyaz dondurma ve bir tutam öğütülmüş Antep fıstığı serpilir ve yoğun tatlı kombinasyonu sayesinde eşsiz bir lezzet haline gelir. Şeker oranı olarak da baklavaya oldukça yakındır.</Text>
                </View>
                <View style={styles.bottom}>
                    <Text style={styles.hazır}>📋 Hazırlanma Süresi : 15 dakika</Text>
                    <Text style={styles.pısır}>🥘 Pişirme Süresi : 40 dakika</Text>
                </View>
                <View style={styles.images_container}>
                    <Image style={styles.images} source={{ uri: 'https://cdn.shopify.com/s/files/1/1259/6441/files/liva-kabak-tatlisi.jpg?v=1680698033' }} />
                </View>
                <View style={styles.sweet_container}>
                    <Text style={styles.sweet_name}>Ayva Tatlısı</Text>
                </View>
                <View style={styles.description_container}>
                    <Text style={styles.description}>Kış mevsiminin favorisi olan ayva tatlısı, ayvanın karanfil ve tatlı şurupla kaynatılması ve ardından kaymak, ceviz gibi besinlerle doldurulmasıyla yapılır. Aynı tatlı, balkabağı ile de yapılır. En az onun kadar lezzetlidir.</Text>
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
    images_container: {
        margin: 10,
        marginTop: 30,
    },
    images: {
        width: 120,
        height: 120,
        borderRadius: 100
    },
    sweet_container: {
        marginLeft: 160,
    },
    sweet_name: {
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