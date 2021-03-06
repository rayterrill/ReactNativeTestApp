import React, { Component } from 'react';
import { Alert, AppRegistry, View, Image, ImageBackground, StyleSheet, Text, TouchableHighlight } from 'react-native';
import { Audio } from 'expo';

export default class AlignItemsBasics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      musicPlaying: [],
    }
  }

  async playMusic(item) {
	const soundObject = new Expo.Audio.Sound();
    try {
      if (item === 'Evening_Fall_Harp.mp3') {
          await soundObject.loadAsync(require('./assets/music/Evening_Fall_Harp.mp3'));
	  } else if (item === 'Stages_of_Grief.mp3') {
		  await soundObject.loadAsync(require('./assets/music/Stages_of_Grief.mp3'));
	  } else if (item === 'Windswept.mp3') {
		  await soundObject.loadAsync(require('./assets/music/Windswept.mp3'));
	  } else if (item === 'Baby-sleep-music.mp3') {
		  await soundObject.loadAsync(require('./assets/music/Baby-sleep-music.mp3'));
	  }
	  
	  //stop the sound if something is already playing
	  if (this.state.musicPlaying.length != 0) {
        await this.state.musicPlaying.stopAsync();
	  }

	  //play the sound
	  await soundObject.playAsync();
	  
	  //save the state of what's playing
	  this.setState({musicPlaying: soundObject});
	} catch (error) {
	  console.log(error);
	}
  }

  _onPressButton(item) {
	{this.playMusic(item)}
  };

  render() {
    return (
      <ImageBackground
        source={require('./assets/images/sunburst.png')}
        style={styles.container}>
		<View style={styles.row}>
          <TouchableHighlight onPress={this._onPressButton.bind(this, 'Evening_Fall_Harp.mp3')} style={styles.item}>
             <Image source={require('./assets/images/harp.png')} />
          </TouchableHighlight>
          <TouchableHighlight onPress={this._onPressButton.bind(this, 'Stages_of_Grief.mp3')} style={styles.item}>
             <Image source={require('./assets/images/piano.png')} />
          </TouchableHighlight>
		</View>
		<View style={styles.row}>
          <TouchableHighlight onPress={this._onPressButton.bind(this, 'Windswept.mp3')} style={styles.item}>
             <Image source={require('./assets/images/guitar.png')} />
          </TouchableHighlight>
          <TouchableHighlight onPress={this._onPressButton.bind(this, 'Baby-sleep-music.mp3')} style={styles.item}>
             <Image source={require('./assets/images/xylophone.png')} />
          </TouchableHighlight>
		</View>
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
  row: {
    flexDirection: 'row',
  },
  item: {
	padding: 20,
  }
});

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => AlignItemsBasics);
