import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        padding: 10,
        flexDirection: 'row'

    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50
    },
    inner_container: {
        flex: 1,
        padding: 10,
        justifyContent: 'center'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 25
    },
    info_container: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',

    },
    year: {
        fontSize: 12,
        marginLeft: 10,
        color: 'gray',
        fontWeight: 'bold',
    },
    soldout_container: {
        borderWidth: 1,
        borderColor: 'red',
        padding: 5,
        borderRadius: 5,
    },
    soldout_title: {
        color: 'red'
    },
    content_container: {
        flexDirection: 'row'
    }
})