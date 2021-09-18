import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ListItem, Avatar } from "react-native-elements"

const CustomListItem = () => {
    return (
        <ListItem>
            <Avatar
            rounded
            source = {{
                uri:
                    // chatMessages?.[0].photoURL ||
                    // "https://drive.google.com/file/d/1CkkaonDuF6-cWmLiRF78cpmQV_4rV8ls/view?usp=sharing",

                    // "https://cencup.com/wp-content/uploads/2019/07/avatar-placeholder.png",
                    "https://cdn2.melodijolola.com/media/files/pareja_conejos_1.jpg",
            }}
            />
        </ListItem>
    )
}

export default CustomListItem

const styles = StyleSheet.create({})
