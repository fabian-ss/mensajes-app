import React, {useLayoutEffect} from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView, ScrollView } from 'react-native'
import { Avatar } from "react-native-elements"
import CustomListItem from '../components/CustomListItem'
import { auth } from "../firebase";

const HomeScreen = ({navigation}) => {

    useLayoutEffect(() => {
        navigation.setOptions({
            
            title: "Mensajes",
            headerStyle: { backgroundColor: "white"},
            headerTitleStyle: { color: "black"},
            headerTinColor: "black",
            headerLeft: () => (
                <View style = {{ marginLeft: 20 }}>
                    <TouchableOpacity>
                        <Avatar rounded source={{ uri: 
                            auth?.currentUser?.photoURL 
                            // "https://cdn2.melodijolola.com/media/files/pareja_conejos_1.jpg",
                            }}/>
                    </TouchableOpacity>
                </View>
            ),
        });
    }, []);

    return (
        <SafeAreaView>
            <ScrollView>
                <CustomListItem/>
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})
