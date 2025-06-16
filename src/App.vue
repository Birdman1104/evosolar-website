<template>
  <div id="app">
    <HeaderComponent />
    <Consultation />
    <Services />
    <OfferSection />
    <AboutUs />
    <PartnersSection />
    <MapSection />
    <EmailContact ref="contactSection" />
    <FooterComponent />
    <CalculatorButton @goToOffer="scrollToContact" />
  </div>
</template>

<script setup>
import HeaderComponent from './components/HeaderComponent.vue';
import Consultation from './components/ConsultationComponent.vue';
import Services from './components/ServicesComponent.vue';
import AboutUs from './components/AboutUs.vue';
import CalculatorButton from './components/CalculatorButton.vue';
import PartnersSection from './components/PartnersSection.vue';
import EmailContact from './components/EmailContact.vue';
import FooterComponent from './components/FooterComponent.vue';
import { provide, reactive, ref, nextTick } from "vue";
import { TRANSLATIONS } from "./translations";
import './style.css';
import MapSection from './components/MapSection.vue';
import OfferSection from './components/OfferSection.vue';

const sharedState = reactive({
  calculatedValue: 0,
  annualSavings: 0,
  annualProductivity: 0,
  isCurrency: false,
  region: '',
});

const contactSection = ref(null);

sharedState.calculatedValue = 0;
sharedState.annualSavings = 0;
sharedState.annualProductivity = 0;
sharedState.isCurrency = false;
sharedState.region = '';

provide('sharedState', sharedState);

const translationStore = reactive({
  language: "hy",
  translations: TRANSLATIONS,
  t(...keys) {
    let current = this.translations[this.language];

    for (let key of keys) {
      if (current && current.hasOwnProperty(key)) {
        current = current[key];
      } else {
        return "ERROR";
      }
    }

    return current;
  },
  switchLanguage(key = 'en') {
    if (key === 'hy') {
      this.language = 'hy';
    } else {
      this.language = 'en';
    }
    this.language = this.language;
  },
});

const scrollToContact = () => {
  nextTick(() => {
    if (contactSection.value) {
      const el = contactSection.value;
      el?.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.warn("contactSection is not ready yet");
    }
  });
};

provide("translationStore", translationStore);
</script>

<style>
body {
  margin: 0;
  font-family: 'Inter', sans-serif;
}
</style>