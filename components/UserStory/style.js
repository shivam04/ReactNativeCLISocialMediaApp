import { getFontFamily } from "../../helper";
import { horizontalScale, scaleFontSize, verticalScale } from "../../styles/scaling";

const { StyleSheet } = require("react-native");

const style = StyleSheet.create({
    userStoryContainer: {
        marginRight: horizontalScale(20)
    },
    firstName: {
        fontFamily: getFontFamily('Inter_24pt', '500'),
        fontSize: scaleFontSize(14),
        color: '#022150',
        marginTop: verticalScale(8),
        textAlign: 'center'
    }
});

export default style;