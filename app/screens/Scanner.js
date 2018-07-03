import React, { Component } from 'react';
import {
  Text,
  StyleSheet
} from 'react-native';

import QRCodeScanner from "react-native-qrcode-scanner";

export default class Scanner extends Component {
  static navigationOptions = {
    title: 'Сканировать чек',
  };

  constructor(props) {
    super(props);
  }

  onRead(event) {
    const result = this.decodeCheck(event.data);

    const {
      fn,
      fp
    } = result;

    if (!fn || !fp) {
      return;
    }

    this.showResult(result);
  }

  decodeCheck(value) {
    return value.split('&').reduce((acc, curr) => {
      let param = curr.split('=');

      acc[param[0]] = param[1];

      return acc;
    }, {});
  }

  showResult(result) {
    const {
      navigate
    } = this.props.navigation;

    navigate('Result', {
      result
    });
  }

  render() {
    return (
      <QRCodeScanner
        onRead={this.onRead.bind(this)}
        topContent={
          <Text style={styles.centerText}>
            Сканируй QR-код на чеке
          </Text>
        }
        bottomContent={
          <Text style={styles.centerText}>
            Результат появится автоматически
          </Text>
        }
      />
    );
  }
}

const styles = StyleSheet.create({
  centerText: {
    fontSize: 18,
    padding: 32,
    color: '#171717',
  },
});
