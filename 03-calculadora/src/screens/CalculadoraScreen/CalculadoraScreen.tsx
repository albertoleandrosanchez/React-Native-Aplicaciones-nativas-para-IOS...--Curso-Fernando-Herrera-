import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {styles} from '../../theme/appTheme';
import ButtonCalc from '../../components/ButtonCalc/ButtonCalc';

function CalculadoraScreen() {
  const [previousNumber, setPreviousNumber] = useState(0);
  const [number, setNumber] = useState('100');

  const clean = () => {
    setNumber('0');
  };
  const buildNumber = (textNumber: string) => {
    if (number.startsWith('0') || number.startsWith('-0')) {
      setNumber(textNumber);
    } else if (textNumber === '.' && !number.includes('.')) {
      setNumber(number + '.');
    } else if (textNumber === '.' && number.includes('.')) {
      return;
    } else {
      setNumber(number + textNumber);
    }
  };

  const negativeNumber = () => {
    if (number !== '0') {
      if (number.includes('-')) {
        setNumber(number.replace('-', ''));
      } else {
        setNumber('-' + number);
      }
    }
  };

  return (
    <View style={styles.calculadoraContainer}>
      <Text style={styles.resultLittle}>{previousNumber}</Text>
      <Text style={styles.result} adjustsFontSizeToFit numberOfLines={1}>
        {number}
      </Text>

      <View style={styles.row}>
        {/*Button */}
        <ButtonCalc text="C" color="#9B9B9B" action={clean} />
        <ButtonCalc text="+/-" color="#9B9B9B" action={negativeNumber} />
        <ButtonCalc text="del" color="#9B9B9B" action={clean} />
        <ButtonCalc text="/" color="#FF9427" action={clean} />
      </View>
      <View style={styles.row}>
        {/*Button */}
        <ButtonCalc text="7" action={buildNumber} />
        <ButtonCalc text="8" action={buildNumber} />
        <ButtonCalc text="9" action={buildNumber} />
        <ButtonCalc text="X" color="#FF9427" action={clean} />
      </View>
      <View style={styles.row}>
        {/*Button */}
        <ButtonCalc text="4" action={buildNumber} />
        <ButtonCalc text="5" action={buildNumber} />
        <ButtonCalc text="6" action={buildNumber} />
        <ButtonCalc text="-" color="#FF9427" action={clean} />
      </View>
      <View style={styles.row}>
        {/*Button */}
        <ButtonCalc text="1" action={buildNumber} />
        <ButtonCalc text="2" action={buildNumber} />
        <ButtonCalc text="3" action={buildNumber} />
        <ButtonCalc text="+" color="#FF9427" action={clean} />
      </View>
      <View style={styles.row}>
        {/*Button */}
        <ButtonCalc text="0" action={buildNumber} ancho />
        <ButtonCalc text="." action={buildNumber} />
        <ButtonCalc text="=" color="#FF9427" action={clean} />
      </View>
    </View>
  );
}

export default CalculadoraScreen;
