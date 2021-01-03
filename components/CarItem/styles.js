import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  carContainer: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  titles: {
    marginTop: "30%",
    width: "100%",
    alignItems: "center",
  },
  title: {
    fontSize: 40,
  },
  subtitle: {
    fontSize: 16,
    color: "#5c5e62"
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute"
  },
  buttonsContainer: {
    position: "absolute",
    bottom: 30,
    width: "100%"
  }
})

export default styles;