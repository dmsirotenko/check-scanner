import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Button
} from 'react-native';

export default class Home extends Component {
  static navigationOptions = {
    title: 'Сканер',
  };

  openScanner() {
    const {
      navigate
    } = this.props.navigation;

    navigate('Scanner');
  }

  render() {
    return (
      <View style={styles.container}>
        <Button
          title={ 'Сканировать чек' }
          onPress={ this.openScanner.bind(this) }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
