<template>

    <div v-if="isModalOpened" class="modal-overlay" @click.self="closeModal">

        <div class="modal-content">
            <button v-if="isCalculated" class="back-button" @click.s="backToCalculator">
                <img src="/icons/back-arrow.svg" alt="Back" />
            </button>

            <button class="close-button" @click.s="closeModal">
                <img src="/icons/Close_Icon.svg" alt="Close" />
            </button>
            <div v-if="!isCalculated" class="modal-content-wrapper">

                <h2 class="modal-title">{{
                    translationStore.t('calculatorModal', 'title') }}</h2>
                <p class="description">{{
                    translationStore.t('calculatorModal', 'description') }}</p>

                <div class="calculator-type">
                    <div class="form">
                        <label class="toggle-button" :class="{ active: isCurrency }">
                            <input type="checkbox" :checked="isCurrency" @change="toggleCalculatorType" />
                            <span class="slider round"></span>
                        </label>
                        <span>{{ translationStore.t('calculatorModal', 'currency') }}</span>
                    </div>

                    <div class="form">
                        <label class="toggle-button">
                            <input type="checkbox" :checked="!isCurrency" @change="toggleCalculatorType" />
                            <span class="slider round"></span>
                        </label>
                        <span>{{ translationStore.t('calculatorModal', 'kwhUnit') }}</span>
                    </div>
                </div>

                <div class="form-group">
                    <div v-if="isCurrency" class="price-input">
                        <img src="/icons/currecncy-icon.svg" class="form-icon" />
                        <input type="number" v-model.number="inputValue"
                            :placeholder="translationStore.t('calculatorModal', 'averageMonthlyCostAMD')" />
                    </div>

                    <div v-else class="price-input">
                        <img src="/icons/Energy_Icon.svg" class="form-icon" />
                        <input type="number" v-model.number="inputValue"
                            :placeholder="translationStore.t('calculatorModal', 'averageMonthlyCost')" />
                    </div>
                </div>

                <div class="custom-dropdown-wrapper">
                    <div class="custom-select-box" @click="toggleDropdown" :class="{ activebox: dropdownOpen }">
                        <img src="/icons/Location_Icon.svg" class="select-icon" />
                        <span class="placeholder" v-if="!region">{{ translationStore.t('calculatorModal', 'location')
                        }}</span>
                        <span class="selected" v-else>{{ getRegionLabel(region) }}</span>
                        <svg class="arrow" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none">
                            <path d="M3 5l4 4 4-4" stroke="#fff" stroke-width="2" />
                        </svg>
                    </div>
                    <div v-if="dropdownOpen" class="dropdown-options">
                        <div v-for="option in REGION_OPTIONS" :key="option.value" class="dropdown-option"
                            @click="selectRegion(option.value)">
                            {{ option.label }}
                        </div>
                    </div>
                </div>


                <button class="submit-button" @click="calculate">{{
                    translationStore.t('calculatorModal', 'calculate') }}</button>

            </div>

            <div v-if="isCalculated" class="modal-content-wrapper">

                <button class="close-button" @click="closeModal">
                    <img src="/icons/Close_Icon.svg" alt="Close" />
                </button>

                <h2 class="modal-title">{{ translationStore.t('calculatorModal', 'calculatedModalTitle') }}
                </h2>
                <p class="description">{{ translationStore.t('calculatorModal', 'calculatedModalDescription') }}</p>

                <div class="kwh-number">{{ systemSize }}

                    <span>{{ translationStore.t('calculatorModal', 'kwUnit') }}</span>
                </div>

                <div class="result-block-content">
                    <div class="result-block">
                        <label class="result-block-label">{{ translationStore.t('calculatorModal',
                            'annualProductionLabel')
                            }}</label>
                        <div class="result-block-value">{{ annualProductivity }} {{
                            translationStore.t('calculatorModal', 'kwhUnit') }}</div>
                    </div>
                    <div class="result-block">
                        <label class="result-block-label">{{ translationStore.t('calculatorModal', 'annualSavingsLabel')
                            }}</label>
                        <div class="result-block-value">{{ annualSavings }} {{
                            translationStore.t('calculatorModal', 'currency') }}</div>
                    </div>
                </div>

                <button class="submit-button" @click="getOffer(contactSectionRef)">{{
                    translationStore.t('calculatorModal',
                        'getOffer') }}</button>

            </div>
        </div>
    </div>
</template>

<script setup>
import { inject, watch, ref, computed } from "vue";
import { REGION_OPTIONS, MONTHS_COUNT, STANCE_POWER, ROUND_TO, WEEKS_COUNT, PROFIT } from './../../public/data/constants.js';

const sharedState = inject('sharedState');

const props = defineProps({
    visible: Boolean,
});

const isModalOpened = computed(() => props.visible);
const translationStore = inject("translationStore");
const emit = defineEmits(['goToOffer', 'close']);


const dropdownOpen = ref(false);
const isCalculated = ref(false);
const inputValue = ref(null);
const systemSize = ref(null);
const region = ref('');
const isCurrency = ref(true);

const annualSavings = ref(null);
const annualProductivity = ref(null);


watch(() => props.openModal, (newVal) => {
    isModalOpened.value = newVal;
});

const toggleDropdown = () => {
    dropdownOpen.value = !dropdownOpen.value;
}

const selectRegion = (value) => {
    region.value = value;
    dropdownOpen.value = false;

}

const getOffer = () => {
    emit('goToOffer');
    closeModal();
};

const getRegionLabel = (val) => {
    const found = REGION_OPTIONS.find((opt) => opt.value === val);
    return found?.label || '';
}

const backToCalculator = () => {
    isCalculated.value = false;
}

const closeModal = () => {
    emit('close');
    isModalOpened.value = false;
    inputValue.value = null;
    region.value = '';
    systemSize.value = null;
    isCalculated.value = false;
    dropdownOpen.value = false;
}

const toggleCalculatorType = () => {
    isCurrency.value = !isCurrency.value;
}

const calculate = () => {
    let calculatedResult;
    if (!inputValue.value || !region.value) {
        return;
    }

    if (isCurrency.value) {
        calculatedResult = ((inputValue.value * MONTHS_COUNT) / WEEKS_COUNT) / STANCE_POWER;
    } else {
        calculatedResult = (inputValue.value * MONTHS_COUNT) / STANCE_POWER;
    }
    calculatedResult = Math.ceil(calculatedResult / ROUND_TO) * ROUND_TO;
    systemSize.value = calculatedResult;
    annualSavings.value = systemSize.value * WEEKS_COUNT * PROFIT;
    annualProductivity.value = systemSize.value * PROFIT;
    isCalculated.value = true;

    sharedState.calculatedValue = calculatedResult;
    sharedState.annualSavings = annualSavings.value;
    sharedState.annualProductivity = annualProductivity.value;
    sharedState.isCurrency = isCurrency.value;
    sharedState.region = region.value;
}
</script>

<style scoped>
.modal-overlay {
    position: fixed;
    top: 0px;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}

.modal-content {
    position: relative;
    max-width: 747px;
    width: 90%;
    height: auto;
    max-height: 90vh;
    background-color: rgba(13, 13, 13, 0.85);
    color: rgba(246, 246, 246, 1);
    border: 4px solid #C1470A;
    border-radius: 16px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    overflow-y: auto;
}

.modal-content-wrapper {
    height: 100%;
    margin-top: 68px;
    align-items: center;
    align-content: center;
    display: flex;
    flex-direction: column;
}

.modal-title {
    text-align: center;
    font-size: 24px;
    margin: 0px;
    font-weight: 400;
}

.description {
    margin: 0 10px, 0 25px;
}

.kwh-number {
    width: 186px;
    height: 38px;
    border-radius: 10px;
    border: 2px solid rgba(242, 91, 16, 1);
    text-align: center;
    align-content: center;
    color: rgba(242, 91, 16, 1);
    font-size: 20px;
    margin: 10px 0 30px 0;
}

.kwh-number>span {
    margin-right: 10px;
}

.calculator-type {
    display: flex;
    gap: 15px;
    margin-bottom: 20px;
}

.result-block-content {
    width: 546px;
}

.result-block {
    display: flex;
    border: 1px solid rgba(127, 132, 138, 1);
    padding: 20px 0;
    border-left: 0;
    border-right: 0;
    font-size: 16px;
    justify-content: space-between;
}

.result-block:first-child {
    border-bottom: 0;
}

.result-block-label {
    color: rgba(246, 246, 246, 1);
}


.back-button,
.close-button {
    position: absolute;
    top: 16px;
    background: transparent;
    border: none;
    cursor: pointer;
}

.close-button {
    right: 20px;
}

.back-button {
    left: 20px;
}

.form {
    align-items: center;
    display: flex;
}

.form-group {
    width: 546px;
    margin-bottom: 15px;
}

.label {
    font-size: 14px;
    margin-bottom: 6px;
}

.price-input {
    display: flex;
    gap: 12px;
    border: 1px solid rgba(127, 132, 138, 1);
    border-radius: 10px;
    padding: 15px 20px;
    color: rgba(246, 246, 246, 1);
    cursor: text;
}

.price-input:focus-within {
    border: 1px solid #C1470A;
}

.price-input>input {
    outline: none;
    border: none;
    background: transparent;
    color: rgba(246, 246, 246, 1);
    padding: 0;
}

.toggle-button {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
    margin-right: 10px;
}

.switch input {
    opacity: 0;
    width: 0;
    height: 0;
}

.slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(65, 65, 65, 1);
    -webkit-transition: .4s;
    transition: .4s;
}

.slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
}

input:checked+.slider {
    background-color: #C1470A;
}

input:checked+.slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
}

.slider.round {
    border-radius: 34px;
}

.slider.round:before {
    border-radius: 50%;
}

input,
select {
    width: 100%;
    font-size: 16px;
    border: none;
    border-radius: 10px;
    color: rgba(246, 246, 246, 1);
}

.submit-button {
    width: 320px;
    padding: 12px;
    font-size: 16px;
    background-color: #C1470A;
    color: rgba(246, 246, 246, 1);
    border: none;
    border-radius: 8px;
    cursor: pointer;
    margin: 35px 0 68px 0;
    height: 50px;
}

.result {
    margin-top: 16px;
    font-weight: bold;
    text-align: center;
    font-size: 18px;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

input[type=number] {
    -moz-appearance: textfield;
}

.custom-dropdown-wrapper {
    position: relative;
    width: 546px
}

.custom-select-box {
    display: flex;
    align-items: center;
    gap: 10px;
    border: 1px solid rgba(127, 132, 138, 1);
    border-radius: 10px;
    padding: 15px 20px;
    cursor: pointer;
}

.activebox {
    border: 1px solid #C1470A !important;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
}

.select-icon {
    width: 24px;
    height: 24px;
}

.placeholder {
    color: #888;
    flex-grow: 1;
}

.selected {
    color: rgba(246, 246, 246, 1);
    flex-grow: 1;
}

.arrow {
    margin-left: auto;
}

.dropdown-options {
    position: absolute;
    top: 100;
    left: 0;
    right: 0;
    background-color: rgba(13, 13, 13, 0.95);
    border-radius: 8px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    max-height: 110px;
    padding: 17px;
    overflow-y: auto;
    z-index: 1000;
}

.dropdown-option {
    padding: 10px;
    color: white;
    cursor: pointer;
    transition: background 0.2s;
}

.dropdown-option:hover {
    background-color: #222;
}

.dropdown-options::-webkit-scrollbar {
    width: 6px;
}

.dropdown-options::-webkit-scrollbar-thumb {
    background: transparent;
}

.dropdown-options {
    scrollbar-width: none;
}

@media (orientation: portrait) {
    .modal-overlay {
        background-color: rgba(15, 15, 15, 0.92);
    }

    .calculator-type {
        margin-top: 20px;
    }

    .modal-content {
        max-width: 353px;
        width: 85%;
        min-height: 520px;
        height: fit-content;
        font-size: 14px;
        margin-top: 0;
    }

    .submit-button {
        margin-top: 20px;
        width: 266px;
        height: 50px;
        margin-bottom: 0;
    }

    .modal-content-wrapper {
        margin-bottom: 50px;
        max-width: 300px;
        width: 100%;
    }

    .modal-title {
        width: 250px;
    }

    .form-group {
        width: 300px;
    }

    .result-block-content {
        max-width: 300px;
        width: 100%;
    }

    .result-block,
    .result-block-content {
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding: 0;
    }

    .result-block {
        border: none;
    }

    .result-block-value {
        border: 1px solid rgba(127, 132, 138, 1);
        padding: 16px;
        text-align: center;
        border-radius: 5px;
    }

    .custom-dropdown-wrapper {
        width: 300px;
    }

    .toggle-button {
        height: 25px;
        width: 50px;
    }

    .slider.round:before {
        height: 18px;
        width: 18px;
        left: 2px;
    }

    .price-input {
        padding: 16px;
        margin-top: 10px;
        border-radius: 5px;
    }

    .price-input>input {
        font-size: 14px;
    }

    .form-icon,
    .select-icon {
        display: none;
    }

    .description {
        width: 196px;
        word-wrap: break-word;
        text-align: center;
    }

    .custom-select-box {
        padding: 15px;
        border-radius: 5px;
    }
}
</style>
