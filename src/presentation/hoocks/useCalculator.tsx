import React, { useState } from 'react'


const useCalculator = () => {

  const [numero, setnumero] = useState('0')
  const buildNumber = (numberString :string)=>{
    ///un solo punto por numero 
    if(numero.includes('.') && numberString === '.') return;
    if(numero === "0" || numero === '-0'){
      if(numberString === '.'){
        return setnumero(numero + numberString)
      }
      //no doble cero o menos doble cero
      if(numberString === '0'){
        return
      }
      else{
        if(numero === '-0')
        {
          return setnumero('-'+numberString)
        }
        else{
          return setnumero(numberString)
        }
      }
    }
    return setnumero(numero + numberString)
    
    
    
    
  }
    

  return {
    ///propiedades 
    numero,


    ////metodos
    setnumero,
    buildNumber
  }
}

export default useCalculator