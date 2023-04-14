import React, {useState} from "react";
import {
    Pressable,
    SafeAreaView,
    StyleSheet,
    Text,
    Modal,
    FlatList,
} from "react-native";

import {UserForm} from "./src/components/UserForm";
import {User} from "./src/components/User";

import { CompanyForm } from "./src/components/CompanyForm";
import { CompanyList } from "./src/components/CompanyList";

export default function App() {
    const [modalVisible, setModalVisible] = useState(false);
    const [modalUserForm, setmodalUserForm] = useState(false);
    const [modalCompanyForm, setmodalCompanyForm] = useState(false);
    const [modalCompanyList, setmodalCompanyList] = useState(false);

    const [usersList, setUsersList] = useState([]);
    const [companiesList, setCompaniesList] = useState([]);

    const [company, setCompany] = useState({});

    const editCompany = (id) => {
        console.log("Company leido por App.js", id);
        /* Consultamos en el array de usuarios registrados el id */
        const editComp = companiesList.filter((comp) => comp.id === id);
        console.log("El array paciente que el filter obtiene es ", editComp);
        setCompany(editComp[0]);
        console.log('No necesitamos el array, sólo el objeto', editComp[0])
      };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>
                Registrate en la {""}
                <Text style={styles.titleBold}>UAM</Text>
            </Text>
            <Pressable 
                style={styles.btnNewUser}
                onPress={() => setModalVisible(true)}
            >
                <Text style={styles.titleButton}>New User</Text>
            </Pressable>

            <Pressable 
                style={styles.btnNewUser}
                onPress={() => setmodalUserForm(true)}
            >
                <Text style={styles.titleButton}>Background</Text>
            </Pressable>

            {usersList.length === 0 ? (
                <Text style={styles.titleButton}>No hay usuarios registrados</Text>
            ) : (
                <FlatList
                    data={usersList}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => {
                        console.debug(item)
                        return <User item = {item}/>
                    }}
                />
            )}

            {/* {
                <Text style={
                    {
                        color: 'red',
                        fontSize: 20,
                        fontWeight: 'bold',
                    }
                }>
                    {company.nit}
                    {company.name}
                    {company.address}
                    {company.phone}
                </Text>
            } */}

            <Pressable 
                style={styles.btnNewUser}
                onPress={() => setmodalCompanyForm(true)}
            >
                <Text style={styles.titleButton}>Companies</Text>
            </Pressable>
            
            <Pressable 
                style={styles.btnNewUser}
                onPress={() => setmodalCompanyList(true)}
            >
                <Text style={styles.titleButton}>Companies List</Text>
            </Pressable>

            <Modal animationType="slide" visible={modalVisible}>
                <Text>Modal</Text>
                
                <Pressable 
                    style={styles.btnNewUser}
                    onPress={() => setModalVisible(false)}
                  >
                    <Text style={styles.titleButton}>Close Me</Text>
                </Pressable>
            </Modal>

            <CompanyList 
            modalCompanyList={modalCompanyList} 
            setModalCompanyList={setmodalCompanyList} 
            companiesList={companiesList} 
            setCompaniesList={setCompaniesList}
            setmodalCompanyForm={setmodalCompanyForm} 
            editCompany={editCompany}
            comp={company}
            setComp={setCompany}
            ></CompanyList>

            <UserForm 
            userFormVisibility={modalUserForm} 
            setUserFormVisibility={setmodalUserForm} 
            usersList={usersList}
            setUsersList={setUsersList}
            />

            <CompanyForm 
            companyFormVisibility={modalCompanyForm} 
            setCompanyFormVisibility={setmodalCompanyForm} 
            companiesList={companiesList}
            setCompaniesList={setCompaniesList}
            comp={company}
            setComp={setCompany}
            />

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0069a3',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        textAlign: 'center',
        fontSize: 22,
        color: '#fff',
    },
    titleBold: {
        fontWeight: '900',
        color: "#f4d73b",
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
        textAlign: 'center',
        color: '#000000',
    },
});