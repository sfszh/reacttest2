import React, {
  Component
} from 'react';
import {
  View,
  Text
} from 'react-native';

export default class TinderView extends Component {
  static get defaultProps() {
    return {
      title: 'TinderView'
    };
  }

  render() {
    return (
      <View>
        <Text>Hi! My name is {this.props.title}.</Text>
      </View>
    )
  }
}