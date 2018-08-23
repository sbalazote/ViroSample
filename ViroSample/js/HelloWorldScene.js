'use strict';

import React, { Component } from 'react';

import {StyleSheet} from 'react-native';

import {
  ViroScene,
  ViroText,
  Viro360Image,
  ViroBox,
  ViroMaterials,
} from 'react-viro';

export default class HelloWorldScene extends Component {

  constructor() {
    super();

    this.state = {
      text : "Hello World!",
    }

    // bind this to the class functions
    this._onBoxHover = this._onBoxHover.bind(this);
  }

  render() {
    return (
      <ViroScene>
        <Viro360Image source={require('./res/stadium_360.jpg')} />
        <ViroText text={this.state.text} width={2} height={2} position={[0, 0, -2]} style={styles.helloWorldTextStyle} />

        <ViroBox position={[0, -1, -2]} scale={[.5,.5,.2]} materials={["grid"]} onHover={this._onBoxHover} />
      </ViroScene>
    );
  }

  _onBoxHover(isHovering) {
    let text = isHovering ? "Y ahi!" : "";
    this.setState({
      text
    });
  }

}

var styles = StyleSheet.create({
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 60,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',  
  },
});

ViroMaterials.createMaterials({
  grid: {
    diffuseTexture: require('./res/bit_logo.png'),
  },
});

module.exports = HelloWorldScene;