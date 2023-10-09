import { styles } from "./style";
import { useEffect, useState } from "react";
import { Entypo } from "@expo/vector-icons";
import BookList from "../../components/BookList";
import { Pressable, StatusBar, Text, TextInput, View } from "react-native";
export default function Home() {
  const [values, setValues] = useState();
  const [filter, setFilter] = useState("");
  const [loading, setLoading] = useState(true);

  const getValues = async () => {
    setLoading(true);

    try {
      const response = await fetch(
        `https://hn.algolia.com/api/v1/search?query=${filter}`
      );

      const json = await response.json();

      setValues(json.hits);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getValues();
  }, []);

  return (
    <View style={styles.aplication}>
      <StatusBar
        animated={true}
        barStyle="dark-content"
        showHideTransition="fade"
        hidden={false}
      />
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Application Title</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.filterBar}>
          <TextInput
            style={styles.filterInput}
            placeholder="Digite aqui"
            value={filter}
            onChangeText={setFilter}
          />
          <Pressable style={styles.filterButton} onPress={getValues}>
            <Entypo name="magnifying-glass" size={34} color="#4f556a" />
          </Pressable>
        </View>
        <View style={styles.listBox}>
          <BookList loading={loading} list={values} />
        </View>
      </View>
    </View>
  );
}
