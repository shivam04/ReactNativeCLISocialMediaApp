import { getFontFamily } from '../../helper';
import { scaleFontSize } from '../../styles/scaling';

const { StyleSheet } = require("react-native");

const style = StyleSheet.create({
    title: {
        color: '#022150',
        fontFamily: getFontFamily('Inter_24pt', '600'),
        fontSize: scaleFontSize(24)
    }
});

export default style;