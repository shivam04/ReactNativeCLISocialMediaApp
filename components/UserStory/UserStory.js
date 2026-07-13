import PropTypes from "prop-types";
import { Text, View } from "react-native";
import style from "./style";
import UserProfileImage from "../UserProfileImage/UserProfileImage";
import { horizontalScale } from "../../styles/scaling";

const UserStory = (props) => {
    return (
        <View style={style.userStoryContainer}>
            <UserProfileImage
                profileImage={props.profileImage}
                imageDimensions={horizontalScale(65)}
            />
            <Text style={style.firstName}>{props.firstName}</Text>
        </View>
    );
}

UserStory.propTypes = {
    firstName: PropTypes.string.isRequired,
    profileImage: PropTypes.any.isRequired,
}

export default UserStory;