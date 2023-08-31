import {View} from 'react-native';
import React from 'react';
import {Post as PostModel} from 'src/models/post';
import Body from './body';
import Separator from './separator';
import Header from './header';
import Footer from './footer';

export interface Props {
  data: PostModel;
}

export default function Post({data}: Props) {
  return (
    <View>
      <Header data={data} />
      <Body data={data} />
      <Footer data={data} />
    </View>
  );
}

Post.Separator = Separator;
