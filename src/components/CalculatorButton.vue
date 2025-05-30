<template>
    <div>
        <div class="calculator-button" @click="openModal">
            <img class="icon" src="/icons/Calculator_Icon.svg" alt="Calculator" />
        </div>
        <CalculatorModal :visible="showModal" @close="showModal = false" @goToOffer="()=>{emit('goToOffer')}"/>
    </div>
</template>


<script setup>
import { ref } from 'vue';
import CalculatorModal from '@/components/CalculatorModal.vue';

const showModal = ref(false);

const emit = defineEmits(['goToOffer']);

const openModal = () => {
    showModal.value = true;
}

</script>

<style scoped>
.calculator-button {
    background-color: #C1470A;
    width: 80px;
    height: 80px;
    position: fixed;
    bottom: 60px;
    right: 0;
    color: #FCFCFC;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}


@media (orientation: portrait) {

    .calculator-button {
        width: 70px;
        height: 70px;
    }

}
</style>
