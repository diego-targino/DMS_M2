import { styles } from "./style";
import BookItem from "../BookItem";
import { ActivityIndicator, FlatList, View } from "react-native";
export default function BookList(props) {
  return (
    <View>
      {props.loading ? (
        <ActivityIndicator size={40} style={styles.loading} />
      ) : (
        <FlatList
          style={styles.listBox}
          data={props.list}
          keyExtractor={({ objectID }, index) => objectID}
          renderItem={({ item }) => <BookItem book={item} />}
          ItemSeparatorComponent={<View style={{ height: 5 }} />}
        />
      )}
    </View>
  );
}
