import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Home: {
            screens: {
              Home: 'home',
            },
          },
          Friends: {
            screens: {
              Friends: 'friends',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};
