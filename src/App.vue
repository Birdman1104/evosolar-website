<template>
  <div id="app">
    <Header />
    <Services />
    <WhyChooseUs />
    <!-- <OurProjects /> -->
    <PartnersSection />
    <!-- <OfferSection /> -->
    <!-- <CalculatorSection /> -->
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
import OfferSection from './components/OfferSection.vue';
import CalculatorButton from './components/CalculatorButton.vue';
import OurProjects from './components/OurProjects.vue';
import CalculatorSection from './components/CalculatorSection.vue';
import PartnersSection from './components/PartnersSection.vue';
import ContactsSection from './components/ContactsSection.vue';
import EmailContact from './components/EmailContact.vue';
import FooterComponent from './components/FooterComponent.vue';

import { provide, reactive, ref } from "vue";
import { TRANSLATIONS } from "./translations";

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