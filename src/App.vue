<template>
  <div id="app">
    <Header />
    <Services />
    <BlocksSection />
    <OfferSection />
    <CasesSection />
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
import BlocksSection from './components/BlocksSection.vue';
import OfferSection from './components/OfferSection.vue';
import CalculatorButton from './components/CalculatorButton.vue';
import CasesSection from './components/CasesSection.vue';
import CalculatorSection from './components/CalculatorSection.vue';
import PartnersSection from './components/PartnersSection.vue';
import ContactsSection from './components/ContactsSection.vue';
import EmailContact from './components/EmailContact.vue';
import FooterComponent from './components/FooterComponent.vue';

export default {
  components: {
    Header,
    Services,
    BlocksSection,
    OfferSection,
    CalculatorButton,
    CalculatorSection,
    PartnersSection,
    CasesSection,
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
  font-family: Arial, sans-serif;
}
</style>