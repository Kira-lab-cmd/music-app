import { View, FlatList, StyleSheet } from "react-native";
import React, { useState } from "react";
import music_data from './../music-data.json'
import SongCard from './component/SongCard'
import SearchBar from './component/SearchBar'


export default function Index() {

  const [list, setList] = useState(music_data)

  const handleSearch = text => {
    const filteredList = music_data.filter(song => {
      const searchedText = text.toLowerCase()
      const currentTitle = song.title.toLowerCase()

      return currentTitle.indexOf(searchedText) > -1
    })

    setList(filteredList)
  }

  const renderSong = ({ item }) => <SongCard song={item} />

  const renderSeperator = () => <View style={styles.seperator} />



  return (
    <View style={styles.container}>
      <SearchBar onSearch={handleSearch} />
      <FlatList keyExtractor={item => item.id} data={list} renderItem={renderSong} ItemSeparatorComponent={renderSeperator} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  seperator: {
    borderWidth: 1,
    borderColor: '#e0e0e0'
  }
})
