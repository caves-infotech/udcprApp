import React from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import { Colors } from '../constants/Colors';

const CustomHeader = ({ navigation }) => {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: Colors.Secondary, height: 60 }}>
      <TouchableOpacity onPress={() => navigation.navigate('IndexPage')}>
        <Image
          source={require("../assets/images/logo.png")}
          style={{ width: 24, height: 24, marginLeft: 10 }}
        />
      </TouchableOpacity>
      <Text style={{ color: '#fff', marginLeft: 10, fontSize: 20 }}>UDCPR</Text>
      {/* You can add more header elements here */}
    </View>
  );
};

export default CustomHeader;
