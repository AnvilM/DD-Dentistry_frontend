<script setup>
import DentistComponent from '../DentistComponent.vue';
</script>
<template>
    <swiper class="w-full"
      :slides-per-view="3"
      :space-between="50"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide><DentistComponent/></swiper-slide>
      <swiper-slide><DentistComponent/></swiper-slide>
      <swiper-slide><DentistComponent/></swiper-slide>
      <swiper-slide><DentistComponent/></swiper-slide>
      <swiper-slide><DentistComponent/></swiper-slide>
      <swiper-slide><DentistComponent/></swiper-slide>
      </swiper>
  </template>
  <script>
    // Import Swiper Vue.js components
    import { Swiper, SwiperSlide } from 'swiper/vue';
  
    // Import Swiper styles
    import 'swiper/css';
  
    export default {
      components: {
        Swiper,
        SwiperSlide,
      },
      setup() {
        const onSwiper = (swiper) => {
          console.log(swiper);
        };
        const onSlideChange = () => {
          console.log('slide change');
        };
        return {
          onSwiper,
          onSlideChange,
        };
      },
    };
  </script>