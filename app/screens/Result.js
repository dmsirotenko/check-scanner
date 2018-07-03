import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

const keysMap = {
  t: '📅 Дата',
  s: '💵 Сумма',
  fn: '🐽 Фискальный накопитель',
  i: '📄 Фискальный документ',
  fp: 'ℹ️ Фискальный признак',
  n: '#️⃣ Тип операции'
};

export default class Result extends Component {
  static navigationOptions = {
    title: 'Результат',
  };

  constructor(props) {
    super(props);

    this.state = {
      ...props.navigation.state.params
    };
  }

  buildResult() {
    const {
      result
    } = this.state;

    return Object.keys(result).map((key, index) => {
      return (
        <Text
          key={ index }
          style={ styles.text }
        >
          { `${keysMap[key]}: ${result[key]}` }
        </Text>
      );
    });
  }

  render() {
    return (
      <View style={ styles.container }>
        { this.buildResult() }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexDirection: 'column'
  },
  text: {
    fontSize: 18,
    marginBottom: 3
  }
});
