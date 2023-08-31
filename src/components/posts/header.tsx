import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {Props} from '.';
import {Colors} from 'src/constants/colors';

export default function Header({data}: Props) {
  const date = new Date(data.createdAt);
  const formatedDate = new Intl.DateTimeFormat('en-US', {
    dateStyle: 'medium',
  }).format(date);

  const defaultAvatar =
    'https://st3.depositphotos.com/19428878/36416/v/450/depositphotos_364169666-stock-illustration-default-avatar-profile-icon-vector.jpg';

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Image
          source={{uri: data.user.avatar ?? defaultAvatar}}
          resizeMode="cover"
          style={styles.avatar}
        />

        <View style={styles.wrapper}>
          <Text style={styles.fullname}>{data.user.fullname}</Text>
          <View style={styles.wrapperStatus}>
            <Text style={styles.date}>{formatedDate}</Text>
            {data.isPublic && (
              <>
                <View style={styles.statusDivider} />
                <Image
                  source={require('src/assets/icons/globe.png')}
                  resizeMode="contain"
                  style={styles.statusIcon}
                />
              </>
            )}

            {data.isDisappear && (
              <>
                <View style={styles.statusDivider} />
                <Image
                  source={require('src/assets/icons/stopwatch.png')}
                  resizeMode="contain"
                  style={styles.statusIcon}
                />
              </>
            )}

            {data.location && (
              <>
                <View style={styles.statusDivider} />
                <Text style={styles.location}>{data.location}</Text>
              </>
            )}
          </View>
        </View>

        <TouchableOpacity activeOpacity={0.75} style={styles.wrapperMore}>
          <Image
            source={require('src/assets/icons/more-vertical.png')}
            resizeMode="contain"
            style={styles.statusIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 64,
    paddingHorizontal: 20,
    justifyContent: 'center',
    backgroundColor: Colors.white,
    borderBottomWidth: 1,
    borderBottomColor: Colors.aliceBlue,
  },
  innerContainer: {flexDirection: 'row'},
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 48,
    backgroundColor: Colors.aliceBlue,
  },
  wrapper: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: 13,
  },
  fullname: {color: Colors.black, fontWeight: '600'},
  wrapperStatus: {
    flexDirection: 'row',
    marginTop: 5,
    alignItems: 'center',
  },
  date: {fontSize: 12, color: Colors.slateGray},
  statusIcon: {width: 16, height: 16},
  location: {fontSize: 12, color: Colors.slateGray},
  statusDivider: {
    height: 2,
    width: 2,
    marginHorizontal: 5,
    borderRadius: 2,
    backgroundColor: Colors.slateGray,
  },
  wrapperMore: {paddingVertical: 4, paddingHorizontal: 2},
});
