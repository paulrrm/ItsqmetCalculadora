import { StyleSheet } from "react-native";
export const colors = {
    darkGray: '#2d2d2d',
    lightGray: '#9b9b9b',
    orange: '#ff9427',

    textPrimary: '#ffffff',
    textSecondary: '#666666',
    background: '#000000',
}


export const globalStyles = StyleSheet.create({
    background: {
        flex:1,
        backgroundColor: colors.background,

    },
    mainResult:{
        color:colors.textPrimary,
        fontSize:60,
        textAlign:'right',
        marginBottom:10,
        fontWeight:'500',
    },
    subResult:{
        color:colors.textSecondary,
        fontSize:45,
        textAlign:'right',
        marginBottom:10,
        fontWeight:'400',
    },
    calculatorContiener:{
       flex:1,
       padding:20,
       justifyContent: 'flex-end' 
    },
    separadores:{
        paddingHorizontal:30,
        paddingVertical:20,
    },
    filas:{
        flexDirection:'row',
        justifyContent:'center',
        marginBottom:18,
        paddingHorizontal:10,
    },
    boton:{
        height:80,
        width:80,
        backgroundColor:colors.darkGray,
        borderRadius:100,
        justifyContent: 'center',
        marginHorizontal:20

    },
    textoBoton:{
        textAlign:'center',
        padding:10,
        fontWeight:'800',
        fontSize:35,
        color:'white'
    }
})