import React, {useRef, useState} from 'react';
import {Text, View} from 'react-native';
import {styles} from '../../theme/appTheme';
import ButtonCalc from '../../components/ButtonCalc/ButtonCalc';
import useCalculadora from '../../hooks/useCalculadora';

function CalculadoraScreen() {
  const {
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
  } = useCalculadora();

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
        <ButtonCalc text="del" color="#9B9B9B" action={deleteLastNumber} />
        <ButtonCalc text="/" color="#FF9427" action={btnDiv} />
      </View>
      <View style={styles.row}>
        {/*Button */}
        <ButtonCalc text="7" action={buildNumber} />
        <ButtonCalc text="8" action={buildNumber} />
        <ButtonCalc text="9" action={buildNumber} />
        <ButtonCalc text="X" color="#FF9427" action={btnMul} />
      </View>
      <View style={styles.row}>
        {/*Button */}
        <ButtonCalc text="4" action={buildNumber} />
        <ButtonCalc text="5" action={buildNumber} />
        <ButtonCalc text="6" action={buildNumber} />
        <ButtonCalc text="-" color="#FF9427" action={btnSub} />
      </View>
      <View style={styles.row}>
        {/*Button */}
        <ButtonCalc text="1" action={buildNumber} />
        <ButtonCalc text="2" action={buildNumber} />
        <ButtonCalc text="3" action={buildNumber} />
        <ButtonCalc text="+" color="#FF9427" action={btnSum} />
      </View>
      <View style={styles.row}>
        {/*Button */}
        <ButtonCalc text="0" action={buildNumber} ancho />
        <ButtonCalc text="." action={buildNumber} />
        <ButtonCalc text="=" color="#FF9427" action={calculate} />
      </View>
    </View>
  );
}

export default CalculadoraScreen;
