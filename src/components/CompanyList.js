import React, {useState, useEffect} from 'react'
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

export const CompanyList = ({
        modalCompanyList, 
        setModalCompanyList, 
        companiesList, 
        setCompaniesList, 
        setmodalCompanyForm, 
        editCompany,
        comp: compObj,
        setComp
    }) => {

    const [id, setId] = useState("");
    const [companyNit, setCompanyNit] = useState("");
    const [confirmDelete, setConfirmDelete] = useState(false);
    
    useEffect(() => {
        console.log("Entre al useEffect");
        if (Object.keys(compObj).length > 0) {
            console.log("info del objeto company" + compObj.nit);
            console.log("Entre al condicional del useEffect");
            setId(compObj.id);
            setCompanyNit(compObj.nit);
        }
    }, [compObj]);

    const deleteCompany = () => {
        setComp({});
        editCompany(id);
        if (compObj.nit) {
            setCompaniesList(companiesList.filter((comp) => comp.id !== compObj.id));
        } else {
            console.debug("No hay compania seleccionada");
        }
        setComp({});
        console.debug("Compania eliminada", compObj);
    }
  
    return (
    <Modal animationType="slide" visible={modalCompanyList}>
        <SafeAreaView style={styles.container}>
            <View style={styles.titleView}>
                <Text style={styles.titleBold}>
                    Companies List
                </Text>
                <Pressable 
                    style={styles.btnNewUser}
                    onPress={() => {
                        setModalCompanyList(false);
                        setComp({});
                    }
                }
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
                        editComp={editCompany}
                        setConfirmDelete={setConfirmDelete}
                        />
                    }
                    keyExtractor={(item) => item.id}
                />
            )}
        </SafeAreaView>

        <Modal
            animationType="fade"
            transparent={true}
            visible={confirmDelete}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>Are you sure you want to delete this company?</Text>
                    <View style={styles.modalButtons}>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => {
                                setConfirmDelete(!confirmDelete);
                                setComp({});
                            }
                        }
                        >
                            <Text style={styles.textStyle}>Cancel</Text>
                        </Pressable>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => {
                                deleteCompany();
                                setConfirmDelete(!confirmDelete);
                            }
                        }
                        >
                            <Text style={styles.textStyle}>Delete</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </Modal>

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
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalView: {
        margin: 25,
        backgroundColor: "white",
        borderRadius: 10,
        padding: 25,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    modalText: {
        marginBottom: 20,
        fontSize: 20,
        textAlign: "center"
    },
    modalButtons: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
    },
    button: {
        borderRadius: 6,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        elevation: 2,
        marginHorizontal: 10,
    },
    buttonClose: {
        backgroundColor: "#000000",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
});