import { colors } from "@/src/data/constants";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    phone:{
        flexDirection: "row",
        width: "77%",
        
    },

    text:{
        marginRight: 10,
        width: 70,
        borderRadius: 10,
        backgroundColor: "#EEEEEE",
        textAlign: "center",
        justifyContent: "center",
        fontFamily:'Montserrat-Medium',
        paddingVertical: 17,

    },

    title:{
        marginLeft: "24%",
        width: "55%",
        marginTop: 30,
        alignContent: "center",
        textAlign:"center",
        fontFamily:'Montserrat-Medium',
    },

})

export default styles;