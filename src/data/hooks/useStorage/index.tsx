import AsyncStorage from "@react-native-async-storage/async-storage";

export function useStorage() {
  const { getItem, setItem, removeItem } = AsyncStorage;

  const getData = async (name: string) => await getItem(name);
  const setData = async (name: string, value: string) => await setItem(name, value);
  const clearData = async (name: string) => await removeItem(name);

  return { getData, setData, clearData };
}
