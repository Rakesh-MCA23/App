import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';

export default function AboutUs() {
  return (
    <ScrollView style={styles.container}>
      <Image
        source={{ uri: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7369ba09-6adc-439b-bfa5-fa9296ad4ac0/db5mh9o-0f1272f0-cd4c-45d7-ad19-2178184b3e3f.jpg/v1/fit/w_828,h_466,q_70,strp/anime_world_wallpaper___1_by_windyechoes_db5mh9o-414w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA4MCIsInBhdGgiOiJcL2ZcLzczNjliYTA5LTZhZGMtNDM5Yi1iZmE1LWZhOTI5NmFkNGFjMFwvZGI1bWg5by0wZjEyNzJmMC1jZDRjLTQ1ZDctYWQxOS0yMTc4MTg0YjNlM2YuanBnIiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ._VZzZjrH8TTYjHIYiU-kEeNVc5zbangyho0k76nx4c0' }} // Watch shop image
        style={styles.bannerImage}
      />
      <Text style={styles.title}>Welcome to Anime World</Text>
      <Text style={styles.description}>
      At Cartoon Comics, we believe in the power of storytelling through colorful, imaginative, and often hilarious characters. Whether you're a lifelong fan of classic strips or just discovering the vibrant world of webcomics, our mission is to provide a place where creativity and humor come to life on every page.
      </Text>
      <Text style={styles.subtitle}>Our Mission</Text>
      <Text style={styles.description}>
      Our goal is simple: to build a community where everyone can enjoy and share the love of cartoon comics. We’re here to inspire creativity, provide endless entertainment, and give both readers and creators a place to call home.
      </Text>
      <Text style={styles.subtitle}>Quality Assurance</Text>
      <Text style={styles.description}>
        Our watches are sourced from renowned brands and crafted with precision to ensure durability and timeless elegance. 
        We stand by the quality of our products and offer warranties on all our watches.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  bannerImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#333',
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#555',
  },
});
