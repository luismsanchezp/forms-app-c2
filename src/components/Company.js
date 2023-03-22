import React, {useState} from 'react'
import { 
  View, 
  StyleSheet, 
  Text, 
  Pressable
} from 'react-native';

import {CompanyEdit} from './CompanyEdit';
import {CompanyDelete} from './CompanyDelete';

export const Company = ({compItem}) => {
  const {name, nit, phone, address, date} = compItem;
  const [modalEditVisibility, setModalEditVisibility] = useState(false);
  const [modalDeleteVisibility, setModalDeleteVisibility] = useState(false);
  const formatDate = (date) => {
    const optionsFormat = {
      weekday: 'long',
      year: 'numeric',
      month: 'long', 
      day: 'numeric'
    };
    return date.toLocaleDateString('en-US', optionsFormat);
  }
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{name}</Text>
      <View style={styles.compDesc}>
        <Text style={styles.text}>
          <Text style={styles.textSubtitle}>{"NIT: "}</Text>{nit}
        </Text>
        <Text style={styles.text}>
          <Text style={styles.textSubtitle}>{"Phone Number: "}</Text>{phone}
        </Text>
        <Text style={styles.text}>
          <Text style={styles.textSubtitle}>{"Address: "}</Text>{address}
        </Text>
        <Text style={styles.text}>
          <Text style={styles.textSubtitle}>{"Date: "}</Text>{formatDate(date)}
        </Text>
      </View>
      <View style={styles.viewButtons}>
        <Pressable
        onPress={() => setModalEditVisibility(!modalEditVisibility)} 
        style={styles.editButton}>
          <Text style={styles.editButtonTxt}>Edit</Text>
        </Pressable>
        <Pressable 
        onPress={() => setModalDeleteVisibility(!modalDeleteVisibility)}
        style={styles.editButton}>
          <Text style={styles.editButtonTxt}>Delete</Text>
        </Pressable>
      </View>
      <CompanyEdit 
      modalEditVisibility={modalEditVisibility} 
      setModalEditVisibility={setModalEditVisibility}></CompanyEdit>
      <CompanyDelete 
      modalDeleteVisibility={modalDeleteVisibility}
      setModalDeleteVisibility={setModalDeleteVisibility}></CompanyDelete>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
  },
  textSubtitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },
  text: {
    fontSize: 14,
    color: '#000',
  },
  compDesc: {
    marginTop: 10,
  },
  viewButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  editButton: {
    alignItems: 'center',
    backgroundColor: '#f4d73b',
    borderRadius: 10,
    padding: 10,
    width: 100,
    paddingHorizontal: 20,
    marginTop: 10,
  },
  editButtonTxt: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    color: '#000',
  },
});