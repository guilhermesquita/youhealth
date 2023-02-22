import React from "react";
import { View, Text } from "react-native";

export const Title = (props) => {
    return(
        <View>
            <Text>YOURHEALTH</Text>
            <Text>Olá, {props.name} tudo bem?</Text>
        </View>
    )
}
