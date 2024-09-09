import React from 'react'
import { Pressable, Text, View } from 'react-native'
import { colors, globalStyles } from '../../config/theme/app-theme'
import CalculatorBotton from '../components/CalculatorBotton'
import useCalculator from '../hoocks/useCalculator'

const CalculatorScreen = () => {
    const {numero,buildNumber,botonAccion,numeroPrevio,multiplica,dividir,sumar,restar,calcularResultado}=useCalculator()
  return (
    <View style = {globalStyles.calculatorContiener}>
        <View style={globalStyles.separadores}>
            <Text adjustsFontSizeToFit numberOfLines={1} style={globalStyles.mainResult}>{numero}</Text>
            <Text  adjustsFontSizeToFit numberOfLines={1} style={globalStyles.subResult}>{numeroPrevio === '0' ? '': numeroPrevio}</Text>
        </View>
        <View style ={globalStyles.filas}>
            <CalculatorBotton onPress={()=>botonAccion('1/x')} label='1/x'   blackText = {true} color={colors.lightGray}/>
            <CalculatorBotton onPress={()=>botonAccion('sqrt')} label='√'   blackText = {true} color={colors.lightGray}/>
            <CalculatorBotton onPress={()=>botonAccion('pow')} label='x²'   blackText = {true} color={colors.lightGray}/>
            <CalculatorBotton onPress={()=>botonAccion('%')}   label='%'   blackText = {true} color={colors.lightGray}/>
        </View>
        <View style ={globalStyles.filas}>
            <CalculatorBotton onPress={()=>botonAccion('C')} label='C'   blackText = {true} color={colors.lightGray}/>
            <CalculatorBotton onPress={()=>botonAccion('+/-')} label='+/-' blackText = {true} color={colors.lightGray}/>
            <CalculatorBotton onPress={()=>botonAccion('d')} label='del' blackText = {true} color={colors.lightGray}/>
            <CalculatorBotton onPress={dividir} label='÷'   color={colors.orange}/>


        </View>
        <View  style ={globalStyles.filas}>
            
            <CalculatorBotton onPress={()=>buildNumber('7')} label='7'   color={colors.darkGray}/>
            <CalculatorBotton onPress={()=>buildNumber('8')} label='8'   color={colors.darkGray}/>
            <CalculatorBotton onPress={()=>buildNumber('9')} label='9'   color={colors.darkGray}/>
            <CalculatorBotton onPress={multiplica} label='x'   color={colors.orange}/>
        </View>
        <View  style ={globalStyles.filas}>
            <CalculatorBotton onPress={()=>buildNumber('4')} label='4'   color={colors.darkGray}/>
            <CalculatorBotton onPress={()=>buildNumber('5')} label='5'   color={colors.darkGray}/>
            <CalculatorBotton onPress={()=>buildNumber('6')} label='6'   color={colors.darkGray}/>
            <CalculatorBotton onPress={restar} label='-'   color={colors.orange}/>
        </View>
        <View  style ={globalStyles.filas}>
            <CalculatorBotton onPress={()=>buildNumber('1')} label='1'   color={colors.darkGray}/>
            <CalculatorBotton onPress={()=>buildNumber('2')} label='2'   color={colors.darkGray}/>
            <CalculatorBotton onPress={()=>buildNumber('3')} label='3'   color={colors.darkGray}/>
            <CalculatorBotton onPress={sumar} label='+'   color={colors.orange}/>
        </View>
        <View  style ={globalStyles.filas}>
            <CalculatorBotton onPress={()=>buildNumber('0')} label='0'   color={colors.darkGray} ancho={200}/>
            <CalculatorBotton onPress={()=>buildNumber('.')} label='.'   color={colors.darkGray}/>
            <CalculatorBotton onPress={calcularResultado} label='='   color={colors.orange}/>
        </View>

    </View>
  )
}

export default CalculatorScreen