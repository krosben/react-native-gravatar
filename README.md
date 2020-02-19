# React Native Gravatar [![npm](https://img.shields.io/npm/v/@krosben/react-native-gravatar?style=flat-square)](https://www.npmjs.com/package/@krosben/react-native-gravatar)

## Installing

```sh
npm install @krosben/react-native-gravatar

yarn add @krosben/react-native-gravatar
```

## Usage

```jsx
import Gravatar from '@krosben/react-native-gravatar';

const App = () => <Gravatar email="example@example.com" />;

export default App;
```

## Properties

| Prop         | Default | Type                                                                                                                                  |
|:------------:|:-------:|:-------:|
| email        | none    | `string`                                                                                                                              |
| size         | 60      | `number`                                                                                                                              |
| borderStyle  | circle  | <code>"circle" &#124; "square" &#124; "rounded"</code>                                                                                |
| defaultImage | retro   | <code>"404" &#124; "mm" &#124; "identicon" &#124; "monsterid" &#124; "wavatar" &#124; "retro" &#124; "robohash" &#124; "blank"</code> |
| rating       | g       | <code>"g" &#124; "pg" &#124; "r" &#124; "x"</code>                                                                                    |
| resizeMode   | contain | ImageResizeMode                                                                                                                       |
| ...rest      | none    | Omit<ImageProps, "source">                                                                                                            |

## Related

- [niborb/react-native-gravatar](https://github.com/niborb/react-native-gravatar)
