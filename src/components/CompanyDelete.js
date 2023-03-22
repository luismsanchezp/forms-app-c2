import React from 'react'
import { 
    Modal, 
    SafeAreaView, 
    Text,
    Pressable,
    StyleSheet
} from 'react-native';

export const CompanyDelete = ({modalDeleteVisibility, setModalDeleteVisibility}) => {
  return (
    <Modal animationType="slide" visible={modalDeleteVisibility}>
        <SafeAreaView>
            <Text>Delete</Text>
            <Pressable
                onPress={() => setModalDeleteVisibility(!modalDeleteVisibility)} 
                style={styles.editButton}>
                    <Text style={styles.editButtonTxt}>Close</Text>
            </Pressable>
        </SafeAreaView>
    </Modal>
  )
}

const styles = StyleSheet.create({
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
