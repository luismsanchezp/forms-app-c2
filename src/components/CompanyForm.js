import React, {useState} from "react";
import {
    Image,
    Modal,
    StyleSheet,
    ImageBackground,
    Text,
    TextInput,
    View,
    ScrollView,
    Pressable,
    Alert
} from "react-native";

export const CompanyForm = (
    {
        companyFormVisibility, 
        setCompanyFormVisibility,
        companiesList,
        setCompaniesList}
    ) => {

    const [companyName, setCompanyName] = useState("");
    const [companyNit, setCompanyNit] = useState("");
    const [companyPhone, setCompanyPhone] = useState("");
    const [companyAddress, setCompanyAddress] = useState("");

    const handleCompany = () => {
        if (
            [
                companyName, 
                companyNit,
                companyPhone, 
                companyAddress
            ].includes("")) {
            Alert.alert("Error","Por favor, llena todos los campos");
            return;
        }

        const newCompany = {
            id: Date.now(),
            name: companyName,
            nit: companyNit,
            phone: companyPhone,
            address: companyAddress
        };
        setCompaniesList([...companiesList, newCompany]);
        setCompanyFormVisibility(!companyFormVisibility);
        emptyFields();
    };

    const emptyFields = () => {
        setCompanyName("");
        setCompanyNit("");
        setCompanyPhone("");
        setCompanyAddress("");
    };

    return (
        <Modal animationType="slide" visible={companyFormVisibility}>
            <ImageBackground source={require("../assets/jpg/companies_bg.jpg")} resizeMode="cover" style={styles.backCover}>
                <Image style={styles.image} source={require("../assets/png/Logos_UAM-08.png")}/>
                <ScrollView>
                    <Text style={styles.title}>Inscripcion {""}
                        <Text style={styles.titleBold}>Empresas</Text>
                    </Text>
                    <Pressable 
                    style={styles.btnExit}
                    onPress={()=>setCompanyFormVisibility(false)}>
                        <Text style={styles.btnTextExit}>X Cerrar</Text>
                    </Pressable>
                    <View style={styles.campo}>
                        <TextInput 
                        style={styles.input} 
                        placeholder="Company Name" 
                        placeholderTextColor="#F8F9F9"
                        value={companyName}
                        onChangeText={setCompanyName}/>
                    </View>
                    <View style={styles.campo}>
                        <TextInput 
                        style={styles.input} 
                        placeholder="Company NIT" 
                        placeholderTextColor="#F8F9F9" 
                        keyboardType="number-pad"
                        value={companyNit}
                        onChangeText={setCompanyNit}/>
                    </View>
                    <View style={styles.campo}>
                        <TextInput 
                        style={styles.input} 
                        placeholder="Phone Number" 
                        placeholderTextColor="#F8F9F9" 
                        keyboardType="phone-pad"
                        value={companyPhone}
                        onChangeText={setCompanyPhone}/>
                    </View>
                    <View style={styles.campo}>
                        <TextInput 
                        style={styles.input} 
                        placeholder="Company Address" 
                        placeholderTextColor="#F8F9F9"
                        value={companyAddress}
                        onChangeText={setCompanyAddress}/>
                    </View>
                    <Pressable
                    style={styles.btnNewUser}
                    onPress={handleCompany}>
                        <Text style={styles.btnTextNewUser}>Agregar</Text>
                    </Pressable>
                </ScrollView>
            </ImageBackground>
        </Modal>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        margin: 15,
        width: 75,
        height: 75,
        marginBottom: 15,
    },
    backCover: {
        position: "absolute",
        marginTop: 0,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        opacity: 0.7,
        backgroundColor: "#000000",
    },
    title: {
        textAlign: "center",
        fontSize: 22,
        color: "white",
        marginHorizontal: 30,
        fontWeight: "600",
        marginBottom: 20,
    },
    titleBold: {
        textAlign: "center",
        fontSize: 22,
        color: "#0069a3",
        marginHorizontal: 30,
        fontWeight: "600",
        marginBottom: 20,
    },
    input: {
        backgroundColor: "#000000c0",
        color: "#fff",
        padding: 15,
        borderRadius: 10,
        marginBottom: 10,
    },
    text: {
        fontSize: 20,
        color: "#fff",
        marginBottom: 8,
        marginTop: 12,
    },
    campo: {
        marginHorizontal: 30,
    },
    inputComments: {
        height: 100,
    },
    inputDate: {
        borderRadius: 10,
        height: 10,
    },
    btnExit: {
        marginVertical: 30,
        backgroundColor: "#000000c0",
        marginHorizontal: 30,
        padding: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#fff",
    },
    btnTextExit: {
        color: "#fff",
        textAlign: "center",
        fontWeight: "700",
        fontSize: 16,
    },
    btnNewUser: {
        marginVertical: 50,
        backgroundColor: "#0069a3",
        marginHorizontal: 30,
        paddingVertical: 15,
        borderRadius: 10,
    },
    btnTextNewUser: {
        color: "#fff",
        textAlign: "center",
        fontWeight: "700",
        fontSize: 16,
        textTransform: "uppercase",
    },
});