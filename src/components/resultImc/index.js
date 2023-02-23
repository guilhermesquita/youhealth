import React from "react";
import { View, Text } from "react-native";

export const ResultImc = (props) => {
    return(
        <View>
            <Text>{props.resultImc}</Text>
            <Text>{props.resultMesage}</Text>
        </View>
    )
}
