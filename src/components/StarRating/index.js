import { styles } from "./style";
import { useState } from "react";
import { Pressable, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function StarRating(props) {
  const [rating, setRating] = useState(-1);

  const getStarStyle = (value) => (rating >= value ? "star" : "star-o");

  return (
    <View style={styles.ratingContainer}>
      {Array.from({ length: 5 }, (_, index) => (
        <Pressable
          key={index}
          style={styles.ratingItem}
          onPress={() => setRating(index)}
        >
          <FontAwesome name={getStarStyle(index)} size={26} color="black" />
        </Pressable>
      ))}
    </View>
  );
}
