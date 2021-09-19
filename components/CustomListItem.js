import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ListItem, Avatar } from "react-native-elements"

const CustomListItem = ({ id,chatName,enterChat }) => {
    return (
        <ListItem>
            <Avatar
            rounded
            source = {{
                uri:
                    // chatMessages?.[0].photoURL ||
                    // "https://drive.google.com/file/d/1CkkaonDuF6-cWmLiRF78cpmQV_4rV8ls/view?usp=sharing",

                    // "https://cencup.com/wp-content/uploads/2019/07/avatar-placeholder.png",
                    "https://cdnjs.cloudflare.com/ajax/libs/admin-lte/3.0.5/img/avatar.png",
                    // "https://cdn2.melodijolola.com/media/files/pareja_conejos_1.jpg",
                    // "https://drive.google.com/file/d/1CkkaonDuF6-cWmLiRF78cpmQV_4rV8ls",
            }}
        />
        <ListItem.Content>
            <ListItem.Title style={{ fontWeight: "800" }}>
            Youtube chat
            </ListItem.Title>
            <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail">
            Este es un texto de prueba para la app de mensajes
            </ListItem.Subtitle>
        </ListItem.Content>
        </ListItem>
    )
}

export default CustomListItem

const styles = StyleSheet.create({})
