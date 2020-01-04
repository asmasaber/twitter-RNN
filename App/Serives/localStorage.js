import AsyncStorage from '@react-native-community/async-storage';
const storage = {
  get: async key => {
    return await AsyncStorage.getItem(key);
  },
  set: async (key, value) => {
    await AsyncStorage.setItem(key, value);
  },
};

export default storage;
