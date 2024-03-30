import { TextInput ,Button} from "react-native";
import userState from "react";


function CreatePostScreen({ navigation, route }) {
    const [postText, setPostText] = userState('');
    return (
      <>
        <TextInput
          multiline
          placeholder="What's on your mind?"
          style={{ height: 200, padding: 10, backgroundColor: 'white' }}
          value={postText}
          onChangeText={setPostText}
        />
        <Button
          title="Done"
          onPress={() => {
            // Pass and merge params back to home screen
            navigation.navigate({
              name: 'Home1',
              params: { post: postText },
              merge: true,
            });
          }}
        />
      </>
    );
  }
  export default CreatePostScreen;
