import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  bookItem: {
    flex: 1,
    flexDirection: "column",
    rowGap: 10,
    padding: 20,
    backgroundColor: "#4f556a",
    borderRadius: 5,
  },
  itemRow: {
    flex: 1,
    flexDirection: "row",
    gap: 10,
  },
  itemText: {
    fontSize: 16,
    flexWrap: "wrap",
    textAlign: "justify",
    flexShrink: 1,
  },
});
