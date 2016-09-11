/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {
  Component
} from 'react';
import {
  AppRegistry,
  Image,
  ListView,
  StyleSheet,
  Text,
  Navigator,
  View,
} from 'react-native';

import UserList from "./UserList"

class gitinder extends Component {


  render() {
    return ( < Navigator initialRoute = {
        {
          title: 'My Initial Scene',
          index: 0
        }
      }
      renderScene = {
        (route, navigator) => {
          return <UserList title={route.title} />
        }
      }
      />
    )
  }
}

AppRegistry.registerComponent('gitinder', () => gitinder);