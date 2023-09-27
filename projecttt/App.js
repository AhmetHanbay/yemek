import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from './src/screen/Home';
import Soup from './src/screen/Soup';
import Meet from './src/screen/Meet';
import Main from './src/screen/Main';
import Sweet from './src/screen/Sweet';
import Salat from './src/screen/Salat';
import Soup_data from './src/screen/Soup-data.json';
import { Text, View, SafeAreaView, ScrollView, StyleSheet, Button, Image, TouchableOpacity, } from 'react-native';

function Stıl() {
    const [list, setList] = useState(Soup_data);
}

const Stack = createNativeStackNavigator()

const App = () => {
   
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name='Soup' component={Soup} />
                <Stack.Screen name='Meet' component={Meet} />
                <Stack.Screen name="Main" component={Main} />
                <Stack.Screen name="Sweet" component={Sweet} />
                <Stack.Screen name="Salat" component={Salat} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
