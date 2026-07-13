import { getFontFamily } from "../helper";
import { horizontalScale, scaleFontSize, verticalScale } from "./scaling";

const { StyleSheet } = require("react-native");

const globalStyle = StyleSheet.create({
    header: {
        marginLeft: horizontalScale(27),
        marginRight: horizontalScale(17),
        marginTop: verticalScale(30),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    messageIcon: {
        padding: horizontalScale(14),
        backgroundColor: '#F9FAFB',
        borderRadius: horizontalScale(100)
    },
    messageNumberContainer: {
        backgroundColor: '#F35BAC',
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        width: horizontalScale(10),
        height: verticalScale(10),
        borderRadius: horizontalScale(10),
        position: 'absolute',
        right: horizontalScale(10),
        top: verticalScale(10)
    },
    messageNumber: {
        color: '#FFFFFF',
        fontSize: scaleFontSize(6),
        fontFamily: getFontFamily('Inter_24pt', '600')
    },
    userStoryContainer: {
        marginTop: verticalScale(20),
        marginHorizontal: horizontalScale(28),
    },
    userPostContainer: {
        marginHorizontal: horizontalScale(24),
    },
})

export default globalStyle;