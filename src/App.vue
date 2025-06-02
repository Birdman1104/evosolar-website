<template>
  <div id="app">
    <Header />
    <Services />
    <WhyChooseUs />
    <PartnersSection />
    <ContactsSection ref="contactSection" />
    <EmailContact />
    <FooterComponent />
    <CalculatorButton @goToOffer="scrollToContact" />
  </div>
</template>

<script setup>
import Header from './components/HeaderComponent.vue';
import Services from './components/ServicesComponent.vue';
import WhyChooseUs from './components/WhyChooseUs.vue';
import CalculatorButton from './components/CalculatorButton.vue';
import PartnersSection from './components/PartnersSection.vue';
import ContactsSection from './components/ContactsSection.vue';
import EmailContact from './components/EmailContact.vue';
import FooterComponent from './components/FooterComponent.vue';

import { provide, reactive, ref } from "vue";
import { TRANSLATIONS } from "./translations";

const sharedState = reactive({
  calculatedValue: 0,
  annualSavings: 0,
  annualProductivity: 0,
  isCurrency: false,
  region: '',
});

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


const contactSection = ref(null);

const scrollToContact = () => {

  const sectionComponent = contactSection.value;
  const el = sectionComponent?.root;

  if (el && typeof el.scrollIntoView === 'function') {
    el.scrollIntoView({ behavior: 'smooth' });
  } else {
    console.error("Contact section element not available or invalid.");
  }
};

provide("translationStore", translationStore);
</script>


<style>
body {
  margin: 0;
  font-family: 'Inter', sans-serif;
}
</style>