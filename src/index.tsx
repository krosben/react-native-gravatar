import md5 from 'blueimp-md5';
import React from 'react';
import { Image, ImageProps, View } from 'react-native';

type BorderStyle = 'circle' | 'square' | 'rounded';

interface GravatarProps extends Omit<ImageProps, 'source'> {
  email: string;
  size?: number;
  borderStyle?: BorderStyle;
  defaultImage?:
    | '404'
    | 'mm'
    | 'identicon'
    | 'monsterid'
    | 'wavatar'
    | 'retro'
    | 'robohash'
    | 'blank';
  rating?: 'g' | 'pg' | 'r' | 'x';
}

const GRAVATAR_URI = 'https://www.gravatar.com/avatar/';

const getStyle = (size: number, borderStyle: BorderStyle) => {
  const avatarSize = { width: size / 2, height: size / 2 };
  let border: { borderRadius?: number } = {};

  if (borderStyle === 'circle') {
    border = { borderRadius: avatarSize.width / 2 };
  } else if (borderStyle === 'rounded') {
    border = { borderRadius: avatarSize.width / 20 };
  }

  return { ...avatarSize, ...border };
};

const queryString = (params: Record<string, unknown>) =>
  '?' +
  Object.keys(params)
    .map(key => key + '=' + params[key])
    .join('&');

const Gravatar = ({
  email,
  size = 90,
  borderStyle = 'circle',
  defaultImage = 'retro',
  rating = 'g',
  resizeMode = 'contain',
  ...props
}: GravatarProps) => {
  const uri = `${GRAVATAR_URI}${md5(email)}${queryString({
    size,
    d: defaultImage,
    rating,
  })}`;
  const style = getStyle(size, borderStyle);

  return (
    <View style={{ overflow: 'hidden' }}>
      <Image
        {...props}
        source={{ uri }}
        style={style}
        resizeMode={resizeMode}
      />
    </View>
  );
};

export default Gravatar;
