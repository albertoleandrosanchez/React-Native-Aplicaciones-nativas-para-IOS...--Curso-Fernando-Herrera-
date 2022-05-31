import React, {useRef, useState} from 'react';

function useCalculadora() {
  enum Operations {
    SUM = '+',
    SUB = '-',
    MUL = '*',
    DIV = '/',
  }
  const [previousNumber, setPreviousNumber] = useState('0');
  const [number, setNumber] = useState('0');
  const lastOperation = useRef<Operations>();

  const clean = () => {
    setNumber('0');
    setPreviousNumber('0');
  };
  const buildNumber = (textNumber: string) => {
    if (number.startsWith('0') || number.startsWith('-0')) {
      if (textNumber === '0') {
        return;
      } else if (textNumber === '.') {
        setNumber(`${number}.`);
      } else {
        setNumber(textNumber);
      }
    } else if (textNumber === '.' && !number.includes('.')) {
      setNumber(number + '.');
    } else if (textNumber === '.' && number.includes('.')) {
      return;
    } else {
      setNumber(number + textNumber);
    }
  };

  const deleteLastNumber = (): void => {
    let neg: string = '';
    let newNumber: string = number;
    if (number.startsWith('-')) {
      neg = '-';
      newNumber = number.substring(1);
    }
    if (newNumber.length > 1) {
      setNumber(neg + newNumber.slice(0, -1));
    } else {
      setNumber('0');
    }
  };
  const changePreviousNumberByActual = (): void => {
    if (number.endsWith('.')) {
      setPreviousNumber(number.slice(0, -1));
    } else {
      setPreviousNumber(number);
    }
    setNumber('0');
  };

  const negativeNumber = (): void => {
    if (number !== '0') {
      if (number.includes('-')) {
        setNumber(number.replace('-', ''));
      } else {
        setNumber('-' + number);
      }
    }
  };

  const btnDiv = (): void => {
    changePreviousNumberByActual();
    lastOperation.current = Operations.DIV;
  };
  const btnMul = (): void => {
    changePreviousNumberByActual();
    lastOperation.current = Operations.MUL;
  };
  const btnSum = (): void => {
    changePreviousNumberByActual();
    lastOperation.current = Operations.SUM;
  };
  const btnSub = (): void => {
    changePreviousNumberByActual();
    lastOperation.current = Operations.SUB;
  };
  const calculate = (): void => {
    const num1 = Number(number);
    const num2 = Number(previousNumber);
    switch (lastOperation.current) {
      case Operations.SUM:
        setNumber(String(num1 + num2));
        break;
      case Operations.SUB:
        setNumber(String(num2 - num1));
        break;
      case Operations.MUL:
        setNumber(String(num1 * num2));
        break;
      case Operations.DIV:
        setNumber(String(num2 / num1));
        break;
      default:
        break;
    }
    setPreviousNumber('0');
  };
  return {
    clean,
    buildNumber,
    deleteLastNumber,
    negativeNumber,
    btnDiv,
    btnMul,
    btnSum,
    btnSub,
    calculate,
    number,
    previousNumber,
  };
}

export default useCalculadora;
