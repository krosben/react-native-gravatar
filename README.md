# React native gravatar ![npm](https://img.shields.io/npm/v/@krosben/react-native-gravatar?style=flat-square)

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

|     Prop     | Default |                                       Type                                        |
| :----------: | :-----: | :-------------------------------------------------------------------------------: |
|    email     |  none   |                                     `string`                                      |
|     size     |   60    |                                     `number`                                      |
| borderStyle  | circle  |                         `"circle" | "square" | "rounded"`                         |
| defaultImage |  retro  | `"404" | "mm"| "identicon"| "monsterid"| "wavatar"| "retro"| "robohash"| "blank"` |
|    rating    |    g    |                             `"g" | "pg" | "r" | "x"`                              |
|  resizeMode  | contain |                                  ImageResizeMode                                  |
|   ...rest    |  none   |                            Omit<ImageProps, "source">                             |
|              |         |                                                                                   |

## Related

- [niborb/react-native-gravatar](https://github.com/niborb/react-native-gravatar)
