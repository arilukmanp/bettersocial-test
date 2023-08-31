import {View, Text, Image, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {Colors} from 'src/constants/colors';
import {Props} from '.';

export default function Body({data}: Props) {
  const [caption, setCaption] = useState(data.content.caption);
  const [hasMoreButton, setHasMoreButton] = useState(false);
  const maxCaptionLines = 5;

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        {data.content.caption && (
          <View style={styles.wrapperCaption}>
            <Text
              numberOfLines={maxCaptionLines}
              style={{color: Colors.blackCoral}}
              onTextLayout={event => {
                const lineData = event.nativeEvent.lines;

                if (lineData.length >= maxCaptionLines) {
                  const arrMaxRowLength = lineData.map((item, idx) =>
                    idx === lineData.length - 1 ? 0 : item.text.length,
                  );
                  const maxRowLength = Math.max(...arrMaxRowLength);

                  const lastRowLength =
                    lineData[lineData.length - 1].text.length;

                  if (lastRowLength < maxRowLength - 9) {
                    return;
                  }

                  const maxCaptionLength = arrMaxRowLength.reduce(
                    (acc, curr, idx) =>
                      idx === lineData.length - 1
                        ? acc + (maxRowLength - 9)
                        : acc + curr,
                    0,
                  );

                  const slicedCaption =
                    caption?.slice(0, maxCaptionLength) + '...';

                  setCaption(slicedCaption ?? '');
                  setHasMoreButton(true);
                  console.log(arrMaxRowLength, maxCaptionLength);
                }
              }}>
              {caption}
              {hasMoreButton && <Text style={styles.moreButton}> More</Text>}
            </Text>
          </View>
        )}

        {data.content.image && (
          <Image
            source={{uri: data.content.image}}
            resizeMode="cover"
            style={styles.image}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {height: 483 - 52},
  wrapper: {flex: 1},
  wrapperCaption: {paddingHorizontal: 20, paddingVertical: 24},
  moreButton: {color: 'dodgerblue'},
  image: {flex: 1, backgroundColor: Colors.aliceBlue},
});
