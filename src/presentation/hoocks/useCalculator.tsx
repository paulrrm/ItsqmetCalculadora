import React, { useRef, useState } from "react";

enum Operaciones {
  suma,
  resta,
  multiplicacion,
  division,
}
const useCalculator = () => {

  const ultimaOperacion = useRef<Operaciones>()
  const [numero, setnumero] = useState("0");
  const [numeroPrevio, setnumeroPrevio] = useState('0')
  const botonAccion = (accionString: string) => {
    ////borrar todo
    if (accionString === "C") {
      setnumeroPrevio('0')
      return setnumero("0");

    }
    ///borrar ultimo
    if (accionString === "d") {
      if (numero === "0" || numero === "-0") return;
      if (numero.length === 1) return setnumero("0");
      if (numero.length === 2 && numero.includes('-')) return setnumero('0')
      if (numero.length > 1) {
        return setnumero(numero.slice(0, -1));
      }

    } ////cambio de signo
    if (accionString === "+/-") {
      if (numero.includes("-")) {
        setnumero(numero.replace("-", ""));
      } else {
        setnumero("-" + numero);
      }
    }
    ///1/x
    if (accionString === "1/x") {
      try {
        let auxiliar = 1 / Number(numero)

        return setnumero(auxiliar + '')
      }
      catch (Error) {
        return setnumero('ERROR')
      }
    }
    if (accionString === "sqrt") {
      try {
        let auxiliar = Number(numero)
        let resultado = Math.sqrt(auxiliar)

        return setnumero(resultado + '')
      }
      catch (Error) {
        return setnumero('ERROR')
      }
    }
    if (accionString === "pow") {
      try {
        let auxiliar = Number(numero)
        let resultado = Math.pow(auxiliar, 2)

        return setnumero(resultado + '')
      }
      catch (Error) {
        return setnumero('ERROR')
      }
    }

    if (accionString === "%") {
      try {
        let auxiliar = Number(numero)
        let resultado = auxiliar / 100

        return setnumero(resultado + '')
      }
      catch (Error) {
        return setnumero('ERROR')
      }
    }
  };
  const buildNumber = (numberString: string) => {
    ///un solo punto por numero
    if (numero.includes(".") && numberString === ".") return;
    if (numero === "0" || numero === "-0") {
      if (numberString === ".") {
        return setnumero(numero + numberString);
      }
      //no doble cero o menos doble cero
      if (numberString === "0") {
        return;
      } else {
        if (numero === "-0") {
          return setnumero("-" + numberString);
        } else {
          return setnumero(numberString);
        }
      }
    }
    return setnumero(numero + numberString);
  };
  // const setUtimoNumero = (operacion:string) => {
  //   if (numero.endsWith('.')) {
  //     setnumero(numero.slice(0, -1))
  //   }
  //   else {
  //     setnumeroPrevio(numero + operacion);
  //     setnumero('0')
  //   }
  // }
  const setUtimoNumero = () => {
    if (numero.endsWith('.')) {
      setnumero(numero.slice(0, -1))
    }
    else {
      setnumeroPrevio(numero );
      setnumero('0')
    }
  }
  const dividir = () => {
    setUtimoNumero()
    ultimaOperacion.current = Operaciones.division;

  }
  const multiplica = () => {
    setUtimoNumero()
    ultimaOperacion.current = Operaciones.multiplicacion;

  }
  const sumar = () => {
    setUtimoNumero()
    ultimaOperacion.current = Operaciones.suma;

  }
  const restar = () => {
    setUtimoNumero()
    ultimaOperacion.current = Operaciones.resta;

  }
  const calcularResultado = () => {
    const num1 = Number(numero);
    const num2 = Number(numeroPrevio);
    switch (ultimaOperacion.current) {
      case Operaciones.suma:
        setnumero(`${num1 + num2}`)
        break;
      case Operaciones.resta:
        setnumero(`${num2 - num1}`);
        break;
      case Operaciones.multiplicacion:
        setnumero(`${num1 * num2}`);
        break;
      case Operaciones.division:
        setnumero(`${num2/num1}`);
        break;
      default:
        break;
    }
  }
  return {
    ///propiedades
    numero,
    numeroPrevio,
    ////metodos
    setnumero,
    buildNumber,
    botonAccion,
    dividir,
    multiplica,
    sumar,
    restar,
    calcularResultado
  };
};

export default useCalculator;
