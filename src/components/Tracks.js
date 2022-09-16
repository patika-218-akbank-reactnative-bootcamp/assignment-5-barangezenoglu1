import React from "react";
import { useState } from "react";
import { ScrollView, Dimensions, View, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { Track } from "./Track";

const windowHeight = Dimensions.get("window").height;

export const Tracks = ({ trackList }) => {
  const themeColors = useSelector((state) => state.theme);
  return (
    <ScrollView contentContainerStyle={styles.container(themeColors)}>
      {trackList?.tracks?.items.map((track) => {
        return (
          <Track
            key={track.id}
            trackName={track.name}
            artistName={track.album.artists[0].name}
          />
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: function (mode) {
    return {
      flexGrow: 1,
      marginTop: 10,
      paddingBottom: 100,
      backgroundColor: mode.theme.white,
    };
  },
});
