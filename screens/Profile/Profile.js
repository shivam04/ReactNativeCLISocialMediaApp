import { Text, TouchableOpacity } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import globalStyle from "../../styles/globalStyle"

const Profile = ({ navigation }) => {
    return (
        <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text style={{ color: 'blue' }}>Go Back</Text>
            </TouchableOpacity>
            <Text>Welcome to the profile page</Text>
        </SafeAreaView>
    )
}

export default Profile;