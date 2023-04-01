import React, {useState, useEffect} from "react";
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
import DatePicker from 'react-native-date-picker';

export const CompanyForm = (
    {
        companyFormVisibility, 
        setCompanyFormVisibility,
        companiesList,
        setCompaniesList,
        comp: compObj,
        setComp
    }
    ) => {
    const [id, setId] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [companyNit, setCompanyNit] = useState("");
    const [companyPhone, setCompanyPhone] = useState("");
    const [companyAddress, setCompanyAddress] = useState("");
    const [date, setDate] = useState(new Date());

    const [open, setOpen] = useState(false);

    useEffect(() => {
        console.log("Entre al useEffect");
        console.log("info del objeto company" + compObj.nit);
    
        if (Object.keys(compObj).length > 0) {
          console.log("Entre al condicional del useEffect");
          setId(compObj.id);
          setCompanyName(compObj.name);
          setCompanyNit(compObj.nit);
          setCompanyPhone(compObj.phone);
          setCompanyAddress(compObj.address);
          setDate(compObj.date);
        }
    }, [compObj]);

    const handleCompany = () => {
        if (
            [
                companyName, 
                companyNit,
                companyPhone, 
                companyAddress,
                date
            ].includes("")) {
            Alert.alert("Error","Por favor, llena todos los campos");
            return;
        }

        const newCompany = {
            id: Date.now(),
            name: companyName,
            nit: companyNit,
            phone: companyPhone,
            address: companyAddress,
            date: date
        };

        if(compObj.nit) {
            console.log("compObj: ", compObj)
            newCompany.id = id;
            const newCompaniesList = companiesList.map((comp) => {
                if (comp.nit === compObj.nit) {
                    comp = newCompany;
                }
                return comp;
            });
            setCompaniesList(newCompaniesList);
        } else {
            setCompaniesList([...companiesList, newCompany]);
        }
        setCompanyFormVisibility(!companyFormVisibility);
        setComp({});
        emptyFields();
    };

    const emptyFields = () => {
        setCompanyName("");
        setCompanyNit("");
        setCompanyPhone("");
        setCompanyAddress("");
        setDate(new Date());
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
                    onPress={()=>{
                        setCompanyFormVisibility(false);
                        setComp({});
                        emptyFields();
                    }}>
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
                    <View style={styles.campo}>
                        <Pressable onPress={() => setOpen(true)}>
                            <Text style={styles.input}>Fecha de inscripcion</Text>
                        </Pressable>
                        <DatePicker
                            modal
                            style={styles.inputDate}
                            open={open}
                            date={date}
                            mode={"date"}
                            onDateChange={(date) => setDate(date)}
                            onConfirm={
                                (date) => {
                                    setOpen(false);
                                    setDate(date);
                                }
                            }
                            onCancel={() => setOpen(false)}
                        />
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