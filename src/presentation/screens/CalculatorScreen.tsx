import React from 'react'
import { Pressable, Text, View } from 'react-native'
import { colors, globalStyles } from '../../config/theme/app-theme'
import CalculatorBotton from '../components/CalculatorBotton'

const CalculatorScreen = () => {
  return (
    <View style = {globalStyles.calculatorContiener}>
        <View style={globalStyles.separadores}>
            <Text style={globalStyles.mainResult}>1500</Text>
            <Text style={globalStyles.subResult}>15</Text>
        </View>
        <View style ={globalStyles.filas}>
            <CalculatorBotton onPress={()=>console.log('C')} label='C'   blackText = {true} color={colors.lightGray}/>
            <CalculatorBotton onPress={()=>console.log('+')} label='+/-' blackText = {true} color={colors.lightGray}/>
            <CalculatorBotton onPress={()=>console.log('d')} label='del' blackText = {true} color={colors.lightGray}/>
            <CalculatorBotton onPress={()=>console.log('÷')} label='÷'   color={colors.orange}/>


        </View>
        <View  style ={globalStyles.filas}>
            
            <CalculatorBotton onPress={()=>console.log('7')} label='7'   color={colors.darkGray}/>
            <CalculatorBotton onPress={()=>console.log('8')} label='8'   color={colors.darkGray}/>
            <CalculatorBotton onPress={()=>console.log('9')} label='9'   color={colors.darkGray}/>
            <CalculatorBotton onPress={()=>console.log('x')} label='x'   color={colors.orange}/>
        </View>
        <View  style ={globalStyles.filas}>
            <CalculatorBotton onPress={()=>console.log('4')} label='4'   color={colors.darkGray}/>
            <CalculatorBotton onPress={()=>console.log('5')} label='5'   color={colors.darkGray}/>
            <CalculatorBotton onPress={()=>console.log('6')} label='6'   color={colors.darkGray}/>
            <CalculatorBotton onPress={()=>console.log('-')} label='-'   color={colors.orange}/>
        </View>
        <View  style ={globalStyles.filas}>
            <CalculatorBotton onPress={()=>console.log('1')} label='1'   color={colors.darkGray}/>
            <CalculatorBotton onPress={()=>console.log('2')} label='2'   color={colors.darkGray}/>
            <CalculatorBotton onPress={()=>console.log('3')} label='3'   color={colors.darkGray}/>
            <CalculatorBotton onPress={()=>console.log('+')} label='+'   color={colors.orange}/>
        </View>
        <View  style ={globalStyles.filas}>
            <CalculatorBotton onPress={()=>console.log('0')} label='0'   color={colors.darkGray} ancho={200}/>
            <CalculatorBotton onPress={()=>console.log('.')} label='.'   color={colors.darkGray}/>
            <CalculatorBotton onPress={()=>console.log('=')} label='='   color={colors.orange}/>
        </View>

    </View>
  )
}

export default CalculatorScreen