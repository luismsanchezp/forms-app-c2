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

export default function App() {
    const [modalVisible, setModalVisible] = useState(false);
    const [modalUserForm, setmodalUserForm] = useState(false);

    const [usersList, setUsersList] = useState([]);

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
                <Text style={styles.textNoUser}>No hay usuarios registrados</Text>
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

            <Modal animationType="slide" visible={modalVisible}>
                <Text>Modal</Text>
                
                <Pressable 
                    style={styles.btnNewUser}
                    onPress={() => setModalVisible(false)}
                  >
                    <Text style={styles.titleButton}>Close Me</Text>
                </Pressable>
            </Modal>

            <UserForm 
            userFormVisibility={modalUserForm} 
            setUserFormVisibility={setmodalUserForm} 
            usersList={usersList}
            setUsersList={setUsersList}/>

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