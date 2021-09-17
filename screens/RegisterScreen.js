import React, {useState, useLayoutEffect} from 'react'
import { StyleSheet, View } from 'react-native'
import { KeyboardAvoidingView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Button, Input, Text } from 'react-native-elements';

const RegisterScreen = ({navigation}) => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [imageUrl, setImageUrl] = useState("") 

    useLayoutEffect(() => {
        navigation.setOptions({
            headerBackTitle: "Back to Login",
        });
    }, [navigation])

    const register = ()=>{

    }

    return (
        <KeyboardAvoidingView behavior='padding' style={styles.container}>
            <StatusBar style="light"/>

            <Text h3 style ={{marginBottom:50}}>
            Creación de Signal Acount
            </Text>

            <View style={styles.inputContainer}>
                 <Input 
                 placeholder="Nombre Completo" 
                 autofocus 
                 type="text"
                 value={name}
                 onChangeText={(text)=> setName(text)}
                 />
                <Input 
                 placeholder="Email" 
                 type="email"
                 value={email}
                 onChangeText={(text)=> setEmail(text)}
                 />
                <Input 
                 placeholder="Password" 
                 type="password"
                 secureTextEntry
                 value={password}
                 onChangeText={(text)=> setPassword(text)}
                 />
                <Input 
                 placeholder="Url para imagen de perfil (opcional)" 
                 type="text"
                 value={imageUrl}
                 onChangeText={(text)=> setImageUrl(text)}
                 onSubmitEditing={register}
                 />
            </View>

            <Button raised onPress={register} title="Crear Usuario"/>
            <View style={{ height:100 }}/> 
        </KeyboardAvoidingView>
        
    )
}

export default RegisterScreen

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        padding: 10,
        backgroundColor: 'white',
    },
    button: {
        width: 200,
        marginTop: 10,
    },
    inputContainer:{
        width:350,
    },
})
