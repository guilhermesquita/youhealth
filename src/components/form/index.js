import React, { useState } from "react";
import { View, TextInput, Text, Button } from "react-native";
import { ResultImc } from "../resultImc";

export const Form = () =>{

    const [height, setHeight] = useState(2);
    const [weight, setWeight] = useState(2);
    const [imc, setImc] = useState(null);
    const [resultMesage, setResultMesage] = useState('Insira seu peso e altura')

    // const handleChangeHeight = (event) => {
    //     return setHeight(event.target.value)
    // }

    // const handleChangeWeight = (event) => {
    //     return setWeight(event.target.value)
    // }

    const calculatorImc = () => {
        return setImc(Number(weight/(height*height)).toFixed(2))
    }

    return(
        <View>
            <View>
                <Text>Altura</Text>
                <TextInput placeholder="exemplo: '1.75'" 
                keyboardType="numeric"
                value={height}
                onChangeText={setHeight}
                ></TextInput>

                <Text>Peso</Text>
                <TextInput placeholder="exemplo: '55.2'" 
                keyboardType="numeric"
                value={weight}
                onChangeText={setWeight}
                ></TextInput>

                <Button title="Calcular IMC" 
                color="#841584" 
                accessibilityLabel="Learn more about this purple button"
                onPress={calculatorImc}
                />

            </View>

            <ResultImc resultImc={imc} resultMesage={resultMesage}/>
        </View>
    )
}