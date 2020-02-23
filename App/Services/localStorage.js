import AsyncStorage from '@react-native-community/async-storage';
const storage = {
  get: async key => {
    return await AsyncStorage.getItem(key);
  },
  set: async (key, value) => {
    await AsyncStorage.setItem(key, value);
  },
  remove: async key => {
    await AsyncStorage.removeItem(key);
  },
};

export default storage;
