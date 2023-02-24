import React, { useState } from "react";
import { View, TextInput, Text, Button } from "react-native";
import { ResultImc } from "../resultImc";

export const Form = () => {

    const [height, setHeight] = useState(null);
    const [weight, setWeight] = useState(null);
    const [imc, setImc] = useState(null);
    const [resultMesage, setResultMesage] = useState('Insira seu peso e altura')

    const calculatorImc = () => {
        
        const imcOperation = weight / (height * height);

        isNaN(imc) || imc === 0 ? setImc('INSIRA UM VALOR!') : setImc(Number(imcOperation).toFixed(2));

        if(imc < 18.5){
            setResultMesage('Magreza')
        }else if(imc >= 18.5 && imc <= 24.9){
            setResultMesage('Parabéns! Você está no estado NORMAL!')
        }else if(imc >= 25 && imc <= 29.9){
            setResultMesage('EITA! Você está no estado SOBREPESO!')
        }else if(imc > 29.9){
            setResultMesage('CUIDADO! Você está no estado SOBREPESO!')
        }
    }

    return (
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

            <ResultImc resultImc={imc} resultMesage={resultMesage} />
        </View>
    )
}