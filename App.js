/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import Title from './components/Title/Ttitle';
import {
  SafeAreaProvider,
  SafeAreaView,
} from 'react-native-safe-area-context';
import globalStyle from './styles/globalStyle';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import UserStory from "./components/UserStory/UserStory";
import { useEffect, useState } from 'react';

function App() {
  const userPosts = [
    {
      firstName: 'Allison',
      lastName: 'Becker',
      location: 'Boston, MA',
      likes: 1201,
      comments: 24,
      bookmarks: 55,
      id: 1,
    },
    {
      firstName: 'Jennifer',
      lastName: 'Wilkson',
      location: 'Worcester, MA',
      likes: 1301,
      comments: 25,
      bookmarks: 70,
      id: 2,
    },
    {
      firstName: 'Adam',
      lastName: 'Spera',
      location: 'Worcester, MA',
      likes: 100,
      comments: 8,
      bookmarks: 3,
      id: 3,
    },
    {
      firstName: 'Nata',
      lastName: 'Vacheishvili',
      location: 'New York, NY',
      likes: 200,
      comments: 16,
      bookmarks: 6,
      id: 4,
    },
    {
      firstName: 'Nicolas',
      lastName: 'Namoradze',
      location: 'Berlin, Germany',
      likes: 2000,
      comments: 32,
      bookmarks: 12,
      id: 5,
    },
  ];
  const userStories = [
    {
      firstName: 'Joseph',
      id: 1,
      profileImage: require('./assets/images/default_profile.png')
    },
    {
      firstName: 'Angel',
      id: 2,
      profileImage: require('./assets/images/default_profile.png')
    },
    {
      firstName: 'White',
      id: 3,
      profileImage: require('./assets/images/default_profile.png')
    },
    {
      firstName: 'Oliver',
      id: 4,
      profileImage: require('./assets/images/default_profile.png')
    },
    {
      firstName: 'Shivam',
      id: 5,
      profileImage: require('./assets/images/default_profile.png')
    },
    {
      firstName: 'Nicholas',
      id: 6,
      profileImage: require('./assets/images/default_profile.png')
    },
    {
      firstName: 'Nina',
      id: 7,
      profileImage: require('./assets/images/default_profile.png')
    },
    {
      firstName: 'Vin',
      id: 8,
      profileImage: require('./assets/images/default_profile.png')
    },
    {
      firstName: 'Adam',
      id: 9,
      profileImage: require('./assets/images/default_profile.png')
    }
  ]

  const userStoriesPageSize = 4;
  const [userStoriesCurrentPage, setUserStoriesCurrentPage] = useState(1);
  const [userStoriesRenderedData, setUserStoriesRenderedData] = useState([]);
  const [isLoadingUserStories, setIsLoadingUserStories] = useState(false);

  const userPostsPageSize = 4;
  const [userPostsCurrentPage, setUserPostsCurrentPage] = useState(1);
  const [userPostsRenderedData, setUserPostsRenderedData] = useState([]);
  const [isLoadingUserPosts, setIsLoadingUserPosts] = useState(false);

  const pagination = (database, currentPage, pageSize) => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    if (startIndex >= database.length) {
      return []
    }
    return database.slice(startIndex, endIndex);
  }

  useEffect(() => {
    setIsLoadingUserStories(true);
    const getInitialData = pagination(userStories, 1, userStoriesPageSize);
    setUserStoriesRenderedData(getInitialData);
    setIsLoadingUserStories(false);
  }, [])

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View style={globalStyle.header}>
          <Title title={"Let's Explore"} />
          <TouchableOpacity style={globalStyle.messageIcon}>
            <FontAwesomeIcon icon={faEnvelope} size={20} color={'#898DAE'} />
            <View style={globalStyle.messageNumberContainer}>
              <Text style={globalStyle.messageNumber}>2</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={globalStyle.userStoryContainer}>
          <FlatList
            onEndReachedThreshold={0.5}
            onEndReached={() => {
              if (isLoadingUserStories) {
                return
              }
              setIsLoadingUserStories(true)
              const contentToAppend = pagination(userStories, userStoriesCurrentPage + 1, userStoriesPageSize);
              if (contentToAppend.length > 0) {
                setUserStoriesCurrentPage(userStoriesCurrentPage + 1);
                setUserStoriesRenderedData(prev => [...prev, ...contentToAppend]);
              }
              setIsLoadingUserStories(false)
            }}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={userStoriesRenderedData}
            renderItem={({ item }) => (
              <UserStory
                key={'userStory' + item.id}
                firstName={item.firstName}
                profileImage={item.profileImage}
              />
            )}
          />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App;
