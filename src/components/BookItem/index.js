import { styles } from "./style";
import { Text, View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import StarRating from "../StarRating";

export default function BookItem(props) {
  return (
    <View style={styles.bookItem}>
      <View style={styles.itemRow}>
        <FontAwesome5 name="user-alt" size={20} color="black" />
        <Text style={styles.itemText}>
          {props.book.author ?? "Informação não disponível"}
        </Text>
      </View>
      <View style={styles.itemRow}>
        <FontAwesome5 name="book" size={20} color="black" />
        <Text style={styles.itemText}>
          {props.book.title ?? "Informação não disponível"}
        </Text>
      </View>
      <View style={styles.itemRow}>
        <FontAwesome5 name="link" size={20} color="black" />
        <Text style={styles.itemText}>
          {props.book.url ?? "Informação não disponível"}
        </Text>
      </View>
      <StarRating />
    </View>
  );
}
