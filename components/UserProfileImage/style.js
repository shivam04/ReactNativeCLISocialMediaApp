import { horizontalScale } from "../../styles/scaling";

const { StyleSheet } = require("react-native");

const style = StyleSheet.create({
    userImageContainer: {
        borderColor: '#F35BAC',
        borderWidth: 1,
        padding: horizontalScale(3)
    }
});

export default style;