import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  aplication: {
    backgroundColor: "#000000",
    height: "100%",
  },
  header: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 5,
  },
  headerTitle: {
    fontSize: 23,
    color: "#476082",
  },
  body: {
    paddingTop: 10,
    gap: 10,
  },
  filterBar: {
    paddingHorizontal: 15,
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  filterInput: {
    backgroundColor: "#4f556a",
    color: "black",
    borderColor: "#282d42",
    borderRadius: 5,
    borderWidth: 1,
    width: "70%",
    height: 40,
    textAlign: "center",
  },
  filterButton: {
    height: 40,
    backgroundColor: "#0a1b30",
    aspectRatio: "1/1",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  listBox: {},
});
