<template>
  <div id="app">
    <Header />
    <Services />
    <WhyChooseUs />
    <OfferSection />
    <OurProjects />
    <PartnersSection />
    <CalculatorSection />
    <ContactsSection />
    <EmailContact />
    <FooterComponent />
    <CalculatorButton />
  </div>
</template>

<script>
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

export default {
  components: {
    Header,
    Services,
    WhyChooseUs,
    OfferSection,
    CalculatorButton,
    CalculatorSection,
    PartnersSection,
    OurProjects,
    ContactsSection,
    EmailContact,
    FooterComponent,
  },
};
</script>

<style>
/* Global styles */
body {
  margin: 0;
  font-family: 'Inter', sans-serif;
}
</style>