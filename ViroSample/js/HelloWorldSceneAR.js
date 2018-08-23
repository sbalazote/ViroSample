'use strict';

import React, { Component } from 'react';

import {StyleSheet} from 'react-native';

import {
  ViroARScene,
  ViroText,
  ViroConstants,
  ViroBox,
  ViroMaterials,
  Viro3DObject,
  ViroAmbientLight,
  ViroSpotLight,
  ViroARPlaneSelector,
  ViroARImageMarker,
  ViroARTrackingTargets,
  ViroNode,
  ViroAnimations,
} from 'react-viro';

export default class HelloWorldSceneAR extends Component {

  constructor() {
    super();

    // Set initial state here
    this.state = {
      text : " AR..."
    };

    // bind 'this' to functions
    this._getInfo = this._getInfo.bind(this);
  }

  render() {
    return (
      <ViroARScene
        onAnchorFound={this._getInfo}
        onClick={this._getInfo}>
        <ViroARImageMarker target={"targetOne"} >

          <ViroText
            fontSize={24}
            position={[0, .35, 0]}
            width={20} height={5} extrusionDepth={8}
            materials={["frontMaterial", "backMaterial", "sideMaterial"]}
            text="Found" />
          
          <ViroBox position={[0, .25, 0]} scale={[.05, .05, .05]} materials={["grid"]} />

        </ViroARImageMarker>
      </ViroARScene>
    );
  }

  _getInfo() {
    console.log('hovered')
  }
}

ViroMaterials.createMaterials({
  frontMaterial: {
    diffuseColor: '#FFFFFF',
  },
  backMaterial: {
    diffuseColor: '#FF0000',
  },
  sideMaterial: {
    diffuseColor: '#0000FF',
  },
  grid: {
    diffuseTexture: require('./res/bit_logo.png'),
  },
});

ViroARTrackingTargets.createTargets({
  "targetOne" : {
    source : require('./res/ticket.JPG'),
    orientation : "Up",
    physicalWidth : 0.1 // real world width in meters
  },
});

var styles = StyleSheet.create({
  boldFont: {
    color: '#FFFFFF',
    flex: 1,
    textAlignVertical: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
},
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 30,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});

module.exports = HelloWorldSceneAR;