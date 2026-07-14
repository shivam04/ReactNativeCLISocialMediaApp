const { StyleSheet } = require("react-native");
import { getFontFamily } from '../../helper';
import { horizontalScale, scaleFontSize } from '../../styles/scaling';

const style = StyleSheet.create({
    title: {
        color: '#022150',
        fontFamily: getFontFamily('Inter_24pt', '500'),
        fontSize: scaleFontSize(16),
        padding: horizontalScale(15)
    },
    titleNotFocused: {
        color: '#79869F',
        fontFamily: getFontFamily('Inter_24pt', '400'),
    }
})

export default style;