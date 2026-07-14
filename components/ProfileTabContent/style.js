const { StyleSheet } = require("react-native");
import { horizontalScale, verticalScale } from '../../styles/scaling';

const style = StyleSheet.create({
    profileTabContentContainer: {
        backgroundColor: '#FFFFFF',
    },
    profileTabContent: {
        paddingHorizontal: horizontalScale(21),
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    },
    image: {
        width: horizontalScale(150),
        height: verticalScale(90),
        marginTop: verticalScale(5)
    }
})

export default style;