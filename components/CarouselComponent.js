import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';

const images = [
  { id: 1, source: require('./../assets/img/carousel/img1.png') },
  { id: 2, source: require('./../assets/img/carousel/img2.png') },
  { id: 3, source: require('./../assets/img/carousel/img3.png') },
  { id: 3, source: require('./../assets/img/carousel/img4.png') },
];

export const CarouselComponent = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [carouselItems, setCarouselItems] = useState(images);
  const carouselRef = useRef(null);


  const renderItem = ({ item, index }) => {
    return (
      <View style={styles.item}>
        <Image source={item.source} style={styles.image} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Carousel
        layout="default"
        ref={carouselRef}
        data={carouselItems}
        sliderWidth={300}
        itemWidth={300}
        renderItem={renderItem}
        onSnapToItem={(index) => setActiveIndex(index)}
      />
      <Pagination
        dotsLength={carouselItems.length}
        activeDotIndex={activeIndex}
        containerStyle={styles.pagination}
        dotStyle={styles.dot}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 5,
    height: 140,
    width: '100%'
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    borderRadius: 5,
  },
  pagination: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    paddingVertical: 15,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'black',
  }

})

