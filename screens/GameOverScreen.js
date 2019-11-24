import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  Dimensions
} from "react-native";

import DefaultStyles from "../constants/default-styles";
import MainButton from "../components/MainButton";
import Colors from "../constants/colors";

const GameOverScreen = ({ roundsNumber, selectedNumber, onRestart }) => {
  return (
    <ScrollView>
      <View style={styles.screen}>
        <Text style={DefaultStyles.title}>The game Is Over!</Text>
        <View style={styles.imageContainer}>
          <Image
            // source={require("../assets/success.png")}
            source={{
              uri:
                "https://abrahamswallet.com/wp-content/uploads/2017/12/samuel-ferrara-117219-1180x770.jpg"
            }}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
        <View style={styles.resultContainer}>
          <Text style={{ ...DefaultStyles.bodyText, ...styles.resultText }}>
            Your phone needed{" "}
            <Text style={styles.highlight}>{roundsNumber}</Text> rounds to guess
            the number <Text style={styles.highlight}>{selectedNumber}</Text>.
          </Text>
        </View>
        <MainButton onPress={onRestart}>NEW GAME</MainButton>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20
  },
  imageContainer: {
    borderRadius:
      Dimensions.get("window").width * 0.7 <
      Dimensions.get("window").height * 0.7
        ? (Dimensions.get("window").width * 0.7) / 2
        : (Dimensions.get("window").height * 0.7) / 2,
    borderWidth: 3,
    borderColor: "black",
    width:
      Dimensions.get("window").width * 0.7 <
      Dimensions.get("window").height * 0.7
        ? Dimensions.get("window").width * 0.7
        : Dimensions.get("window").height * 0.7,
    height:
      Dimensions.get("window").width * 0.7 <
      Dimensions.get("window").height * 0.7
        ? Dimensions.get("window").width * 0.7
        : Dimensions.get("window").height * 0.7,
    overflow: "hidden"
  },
  image: {
    width: "100%",
    height: "100%"
  },
  highlight: {
    color: Colors.primary
  },
  resultContainer: {
    marginHorizontal: 30,
    marginVertical: 15,
    fontFamily: "open-sans-bold"
  },
  resultText: {
    textAlign: "center",
    fontSize: 20
  }
});

export default GameOverScreen;
