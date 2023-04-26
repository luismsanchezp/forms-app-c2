import React from 'react'
import { 
  View, 
  StyleSheet, 
  Text, 
  Pressable
} from 'react-native';

export const CompanyListItem = ({
  compItem, 
  setmodalCompanyForm, 
  editComp, 
  setConfirmDelete,
  setModalCompanyList
}) => {
  const {id, name, nit} = compItem;

  return (
    <View style={styles.item}>
      <Text style={styles.title}>{name}</Text>
      <View style={styles.viewButtons}>
        <Pressable
        onPress={() => {
          setModalCompanyList(false);
          setmodalCompanyForm(true);
          editComp(id);
          console.log("Company leido por App.js", nit);
        }} 
        style={styles.editButton}>
          <Text style={styles.editButtonTxt}>Edit</Text>
        </Pressable>
        <Pressable 
        onPress={() => {
          setConfirmDelete(true)
          editComp(id)
          console.log("Company leido por App.js", nit);
        }}
        style={styles.editButton}>
          <Text style={styles.editButtonTxt}>Delete</Text>
        </Pressable>
      </View>
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