import { getFontFamily } from "../../helper";

const { StyleSheet } = require("react-native");

const style = StyleSheet.create({
    userStoryContainer: {
        marginRight: 20
    },
    firstName: {
        fontFamily: getFontFamily('Inter_24pt', '500'),
        fontSize: 14,
        color: '#022150',
        marginTop: 8,
        textAlign: 'center'
    }
});

export default style;