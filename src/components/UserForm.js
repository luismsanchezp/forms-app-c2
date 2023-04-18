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
import DatePicker from 'react-native-date-picker';

export const UserForm = (
    {userFormVisibility, 
    setUserFormVisibility,
    usersList,
    setUsersList}
    ) => {
    const [date, setDate] = useState(new Date());
    const [open, setOpen] = useState(false);
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userPhone, setUserPhone] = useState("");
    const [comments, setComments] = useState("");

    const handleUser = () => {
        if ([userName, userEmail, userPhone, date, comments].includes("")) {
            Alert.alert("Error","Por favor, llena todos los campos");
            return;
        }

        const newUser = {
            id: Date.now(),
            name: userName,
            email: userEmail,
            phone: userPhone,
            date: date,
            comments: comments
        };
        setUsersList([...usersList, newUser]);
        setUserFormVisibility(!userFormVisibility);
        emptyFields();
    };

    const emptyFields = () => {
        setUserName("");
        setUserEmail("");
        setUserPhone("");
        setDate(new Date());
        setComments("");
    };

    return (
        <Modal animationType="slide" visible={userFormVisibility}>
            <ImageBackground source={require("../assets/jpg/dev2.jpg")} resizeMode="cover" style={styles.backCover}>
                <Image style={styles.image} source={require("../assets/png/Logos_UAM-08.png")}/>
                <ScrollView>
                    <Text style={styles.title}>Inscripcion {""}
                        <Text style={styles.titleBold}>Vacaciones UAM</Text>
                    </Text>
                    <Pressable 
                    style={styles.btnExit}
                    onPress={()=>setUserFormVisibility(false)}>
                        <Text style={styles.btnTextExit}>X Cerrar</Text>
                    </Pressable>
                    <View style={styles.campo}>
                        <TextInput 
                        style={styles.input} 
                        placeholder="Nombre completo" 
                        placeholderTextColor="#F8F9F9"
                        value={userName}
                        onChangeText={setUserName}/>
                    </View>
                    <View style={styles.campo}>
                        <TextInput 
                        style={styles.input} 
                        placeholder="@autonoma.edu.co" 
                        placeholderTextColor="#F8F9F9" 
                        keyboardType="email-address"
                        value={userEmail}
                        onChangeText={setUserEmail}/>
                    </View>
                    <View style={styles.campo}>
                        <TextInput 
                        style={styles.input} 
                        placeholder="Celular" 
                        placeholderTextColor="#F8F9F9" 
                        keyboardType="phone-pad"
                        value={userPhone}
                        onChangeText={setUserPhone}/>
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
                    <View style={styles.campo}>
                        <TextInput 
                        style={[styles.input, styles.inputComments]} 
                        placeholder="Dejanos tus comentarios" 
                        placeholderTextColor="#F8F9F9" 
                        multiline={true}
                        numberOfLines={6}
                        value={comments}
                        onChangeText={setComments}/>
                    </View>
                    <Pressable
                    style={styles.btnNewUser}
                    onPress={handleUser}>
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
        backgroundColor: "rgba(52,52,52,alpha)",
    },
    title: {
        textAlign: "center",
        fontSize: 22,
        color: "#fff",
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