import React from 'react';
import { View, Text } from 'react-native';
// import T from 'prop-types';
import s from './styles';


const QuestionScreen = () => (
  <View style={s.container}>
    <Text style={s.text}>
      This is QuestionScreen Screen
    </Text>
  </View>
);

QuestionScreen.navigationOptions = () => ({
  title: 'Questions Details',
});

QuestionScreen.propTypes = {

};

export default QuestionScreen;
