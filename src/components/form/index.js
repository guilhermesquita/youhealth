import React from "react";
import { View, TextInput, Text, Button } from "react-native";
import { ResultImc } from "../resultImc";

export const Form = () =>{
    return(
        <View>
            <View>
                <Text>Altura</Text>
                <TextInput placeholder="exemplo: '1.75'" 
                keyboardType="numeric"></TextInput>

                <Text>Peso</Text>
                <TextInput placeholder="exemplo: '55.2'" 
                keyboardType="numeric"></TextInput>

                <Button title="Calcular IMC"/>
            </View>

            <ResultImc resultImc={'teste'} resultMessage={'teste'}/>
        </View>
    )
}