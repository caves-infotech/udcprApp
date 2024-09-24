import { StyleSheet } from "react-native";
import { isMobile } from "../constants/Size";
import { height, width } from "../constants/Size";
import { Colors } from "../constants/Colors";
const Styles = StyleSheet.create({
  //common in all files
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: isMobile ? 15 : 20,
    flexWrap: "wrap",
  },
  buttonSpacing: {
    margin: 10,
  },
  circle: {
    height: height * 0.1,
    width: height * 0.1,
    backgroundColor: "#0000ff",
    borderRadius: (height * 0.1) / 2,
    marginRight: width * 0.05,
    justifyContent: "center",
    alignItems: "center",
  },

  //index.js
  container: {
    flex: 1,
    backgroundColor:Colors.Primary,
    padding:15,
    
  },
  profileContainer: {
    backgroundColor: Colors.Ternary,
    height: height * 0.2,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: width * 0.05,
    marginBottom: width * 0.0,
  },
  profileInfo: {
    flex: 1,
    justifyContent: "center",
  },
  profileText: {
    fontSize: width * 0.04,
    color: "#fff",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: height * 0.02,
  },
  listText: {
    fontSize: width * 0.045,
    color: "#333",
    paddingVertical: height * 0.05,
    paddingHorizontal: width * 0.04,
    backgroundColor: Colors.Average,
    borderWidth: 1,
    borderColor: "#a38383",
    flex: 1,
    textAlign: "center",
    marginHorizontal: width * 0.03,
    borderRadius: 20,
  },
  logo: {
    height: height * 0.2,
    width: height * 0.2,
  },

  //
  pageTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
    marginBottom: isMobile ? 8 : 10,
    textAlign: "center",
  },

  label: {
    fontSize: isMobile ? 14 : 16,
    fontWeight: 640,
    marginBottom: isMobile ? 8 : 10,
    color: "#333",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: isMobile ? 10 : 20,
    fontSize: isMobile ? 16 : 18,
    width: "100%",
  },
  formContainer: {
    backgroundColor: "#fff",
    padding: isMobile ? 15 : 20,
    borderRadius:10,
   
  },
  deductionContainer: {
    padding: isMobile ? 8 : 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ccc",
  },
});
export default Styles;
