import React from 'react'
import { Pressable, Text, View } from 'react-native'
import { globalStyles } from '../../config/theme/app-theme'

const CalculatorScreen = () => {
  return (
    <View style = {globalStyles.calculatorContiener}>
        <View style={globalStyles.separadores}>
            <Text style={globalStyles.mainResult}>1500</Text>
            <Text style={globalStyles.subResult}>15</Text>
        </View>
        <View style ={globalStyles.filas}>
            <Pressable style={globalStyles.boton}>
                <Text style={globalStyles.textoBoton}>1</Text>
            </Pressable>
            <Pressable style={globalStyles.boton}>
                <Text style={globalStyles.textoBoton}>2</Text>
            </Pressable>
        </View>
    </View>
  )
}

export default CalculatorScreen