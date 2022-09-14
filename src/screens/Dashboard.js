import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const Dashboard = () => {
  const genre = [
    {
      Id: "67f841ad3df256e3009efccc0d2c8a1b",
      title: "Hip Hop Music",
      image: "https://images.unsplash.com/photo-1630716780422-b41878fd25d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZW5nbGlzaCUyMHNvbmdzJTIwZ2VuZXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      count: 12443
    },
    {
      Id: "5bc284c8698874bc9fed33a24afd4b84",
      title: "Jazz Music",
      image: "https://images.unsplash.com/photo-1528673637901-61dbd46fbfb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZW5nbGlzaCUyMHNvbmdzJTIwZ2VuZXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      count: 65434
    },
    {
      Id: "53e0328aefcbb3e57b6ed4d4084e3475",
      title: "Rock and roll music",
      image: "https://images.unsplash.com/photo-1651208709062-da70a7dcbbcc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGVuZ2xpc2glMjBzb25ncyUyMGdlbmVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      count: 2453
    },
    {
      Id: "62b021f920fd54e717370c4b0d6559f9",
      title: "Country Songs",
      image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fG11c2ljfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      count: 75454
    },
    {
      Id: "764e48ca7d82bc7e4801d157bd0c5d56",
      title: "Dance Music",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fG11c2ljfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      count: 6754
    },
    {
      Id: "86fa39536a773c06f0f60d7d30a773fb",
      title: "Blues Music",
      image: "https://images.unsplash.com/photo-1504898770365-14faca6a7320?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fG11c2ljfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      count: 64345
    },
    {
      Id: "b2a5fea662f33397621a3c03be0bc61b",
      title: "Rhythm and Blues",
      image: "https://images.unsplash.com/photo-1619983081593-e2ba5b543168?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTV8fG11c2ljfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      count: 23454
    },
    {
      Id: "3d5231964f2673d5f8d76ad22b3e5126",
      title: "The 1960s",
      image: "https://images.unsplash.com/photo-1526394931762-90052e97b376?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTd8fG11c2ljfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      count: 654445
    },
    {
      Id: "a42fddce7ba79c6827754d2b49b90962",
      title: "Pop Songs",
      image: "https://images.unsplash.com/photo-1619961602105-16fa2a5465c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjZ8fG11c2ljfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      count: 1344
    },
  ]

  const renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity onPress={() => { console.log("navigate") }}>
        <View style={{ justifyContent: "space-evenly", flexDirection: "column", borderRadius: 10, backgroundColor: "#131313", margin: 5 }}>
          <Image source={{ uri: item.image }} style={{ height: 180, width: 190, borderTopLeftRadius: 10, borderTopRightRadius: 10 }} />
          <View style={{
            padding: 10, paddingTop: 5, paddingBottom: 15
          }}>
            <Text style={{ color: "#ffffff", fontSize: 15, fontWeight: "bold" }}>{item.title}</Text>
            <Text style={{ color: "lightgray" }}>{item.count} Songs</Text>
          </View>
        </View>
      </TouchableOpacity>

    )
  }

  return (
    <View style={{ flex: 1, backgroundColor: "black", padding: 7 }}>
      <FlatList
        data={genre}
        renderItem={renderItem}
        keyExtractor={(item, index) => index}
        numColumns={2}
      />
    </View>
  )
}

export default Dashboard
