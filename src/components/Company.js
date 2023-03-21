import React from 'react'
import { 
  View, StyleSheet, Text,
} from 'react-native';

export const Company = ({compItem}) => {
  const {name, nit, phone, address} = compItem;
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.text}>{"NIT: "+nit}</Text>
      <Text style={styles.text}>{"Phone Number: "+phone}</Text>
      <Text style={styles.text}>{"Address: "+address}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 12,
  },
});