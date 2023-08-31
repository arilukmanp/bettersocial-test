import {SafeAreaView} from 'react-native';
import React from 'react';
import {FlashList} from '@shopify/flash-list';
import FAB from 'src/components/fab';
import {Post as PostModel} from 'src/models/post';
import postMock from 'src/assets/mocks/post.json';
import Post from 'src/components/posts';
import {styles} from './styles';

const feedData: PostModel[] = postMock.map((post: any) => ({
  id: post.id,
  user: {
    fullname: post.user.fullname,
    avatar: post.user?.avatar,
  },
  content: {
    caption: post.content?.caption,
    image: post.content?.image,
    likes: post.content.likes,
    comments: post.content.comments,
  },
  isPublic: post.is_public,
  isDisappear: post.is_disappear,
  location: post?.location,
  createdAt: post.created_at,
})) as PostModel[];

export default function FeedScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <FlashList
        data={feedData}
        keyExtractor={item => item.id.toString()}
        estimatedItemSize={5}
        ItemSeparatorComponent={Post.Separator}
        renderItem={({item}) => {
          return <Post data={item} />;
        }}
      />

      <FAB onPress={() => {}} />
    </SafeAreaView>
  );
}
