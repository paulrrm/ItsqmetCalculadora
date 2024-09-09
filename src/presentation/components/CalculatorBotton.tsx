import React from 'react'
import { Pressable, View,Text } from 'react-native'
import { colors, globalStyles } from '../../config/theme/app-theme'


interface Props{
    label:string;
    color?:string;
    ancho?:number;
    blackText?:boolean;
    onPress: () => void;

}

const CalculatorBotton = ({label, color= colors.darkGray, ancho=80,blackText= false,onPress}:Props) => {
  return (
    <>
        <Pressable 
        onPress={()=>onPress()}
        style={({pressed})=>({
            ...globalStyles.boton,
            backgroundColor: color,
            width: ancho,
            opacity:(pressed)?0.7 : 1
        })}>
                <Text style={
                    {
                        ...globalStyles.textoBoton,
                        color: (blackText)? 'black':'white'
                    }}>{label}</Text>
            </Pressable>
    </>
  )
}

export default CalculatorBotton