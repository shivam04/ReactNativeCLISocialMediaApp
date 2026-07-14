import { getFontFamily } from "../../helper";
import { horizontalScale, scaleFontSize, verticalScale } from "../../styles/scaling";

const { StyleSheet, Platform } = require("react-native");

const style = StyleSheet.create({
    profileImage: {
        width: horizontalScale(140),
        height: verticalScale(120),
    },
    profileImageContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: verticalScale(32)
    },
    profileImageContent: {
        borderWidth: 1,
        borderColor: '#0150EC',
        padding: horizontalScale(2),
        borderRadius: horizontalScale(110),
    },
    userName: {
        marginTop: verticalScale(20),
        textAlign: 'center',
        fontFamily: getFontFamily('Inter_24pt', '600'),
        fontSize: scaleFontSize(20)
    },
    statAmount: {
        fontFamily: getFontFamily('Inter_24pt', '600'),
        fontSize: scaleFontSize(20),
        color: '#022150',
        textAlign: 'center'
    },
    statType: {
        fontFamily: getFontFamily('Inter_24pt', '400'),
        fontSize: scaleFontSize(16),
        color: '#79869F',
        textAlign: 'center'
    },
    statContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: horizontalScale(40),
        paddingVertical: verticalScale(30),
        borderBottomWidth: 1,
        borderColor: '#E9EFF1'
    },
    statBorder: {
        borderRightWidth: 1,
        borderColor: '#E9EFF1'
    }
})

export default style;