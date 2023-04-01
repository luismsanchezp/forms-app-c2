import React from 'react'
import {
    Modal,
    SafeAreaView,
    Text,
    Pressable,
    FlatList,
    StyleSheet,
    View
} from 'react-native';
import {Company} from './Company';

export const CompanyList = ({modalCompanyList, setModalCompanyList, companiesList, setmodalCompanyForm, editCompany}) => {
  return (
    <Modal animationType="slide" visible={modalCompanyList}>
        <SafeAreaView style={styles.container}>
            <View style={styles.titleView}>
                <Text style={styles.titleBold}>
                    Companies List
                </Text>
                <Pressable 
                    style={styles.btnNewUser}
                    onPress={() => setModalCompanyList(false)}
                >
                    <Text style={styles.titleButton}>Close Me</Text>
                </Pressable>
            </View>
            {companiesList.length === 0 ? (
                <View style={styles.companiesContainer}>
                    <Text style={styles.title}>No hay companias registradas</Text>
                </View>
            ) : (
                <FlatList
                    style={styles.companiesContainer}
                    data={companiesList}
                    renderItem={({item}) => 
                    <Company 
                    compItem={item} 
                    setmodalCompanyForm={setmodalCompanyForm} 
                    editComp={editCompany} />}
                    keyExtractor={(item) => item.id}
                />
            )}
        </SafeAreaView>
    </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0069a3',
        justifyContent: 'space-around',
        paddingTop: 20,
    },
    titleView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 10,
        minHeight: 160,
    },
    titleBold: {
        textAlign: 'center',
        fontSize: 36,
        fontWeight: '700',
        color: '#fff',
    },
    btnNewUser: {
        backgroundColor: '#f4d73b',
        borderRadius: 10,
        padding: 10,
        marginTop: 30,
        marginHorizontal: 20,
    },
    titleButton: {
        fontSize: 20,
        fontWeight: '600',
        textAlign: 'center',
        color: '#000',
    },
    companiesContainer: {
        display: 'flex',
        flexDirection: 'column',
        marginVertical: 20,
        marginHorizontal: 20,
    },
});