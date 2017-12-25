import React, { Component } from 'react';
import { Alert, AppRegistry, View, Image, ImageBackground, StyleSheet, Text, TouchableHighlight } from 'react-native';
import { Audio } from 'expo';

export default class AlignItemsBasics extends Component {
  async playMusic() {
	console.log('Trying to play music!');
	const soundObject = new Expo.Audio.Sound();
    try {
      await soundObject.loadAsync(require('./cartoon_whoopee_cushion_air_release_accident.mp3'));
	  await soundObject.playAsync();
	} catch (error) {
	  console.log('Error!');
	}
  }

  _onPressButton() {
	{this.playMusic()}
  };

  render() {
    return (
      <ImageBackground
        source={require('./sunburst.png')}
        style={styles.container}>
          <TouchableHighlight onPress={this._onPressButton.bind(this)}>
             <Image source={require('./Timbers_Army_crest.png')} />
          </TouchableHighlight>
      </ImageBackground>
    );
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: undefined,
    height: undefined,
    backgroundColor:'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => AlignItemsBasics);
