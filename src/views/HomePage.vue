<template>
  <ion-page>
    <ion-header>
      <ion-toolbar></ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
    <ion-button router-link="/photo"></ion-button>
      <swiper
        :modules="modules"
        :autoplay="false"
        :keyboard="true"
        :pagination="true"
        :scrollbar="false"
        :navigation="true"
        :zoom="true"
        @navigation-next="navigationNext"
        space-between="30"
      >
        <swiper-slide>Slide 1</swiper-slide>
        <swiper-slide>Slide 2</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
      </swiper>
    </ion-content>
  </ion-page>
</template>
<script setup lang="ts">
import {} from "vue";
import { Navigation, Keyboard, Pagination, Scrollbar, Zoom } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import { IonContent, IonPage, IonHeader, IonToolbar, IonButton } from "@ionic/vue";

import "swiper/css";
// import "swiper/css/autoplay";
import "swiper/css/keyboard";
import 'swiper/css/navigation';
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/zoom";
// import "@ionic/vue/css/ionic-swiper.css";

const modules = [ Keyboard, Pagination, Zoom, Navigation];

const navigationNext = () => {
  // debugger;
}
</script>

