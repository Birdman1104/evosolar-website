<template>
    <div class="contact-wrapper" ref="root">

        <div  id="contact" class="contact-form" >
            <h3 class="contact-title">{{ translationStore.t('contactUs', 'title') }}</h3>
            <form class="form" @submit.prevent="submitForm">
                <div class="input-group">
                    <input type="tel" name="phoneNumber" id="fphoneNumber" v-model="phoneNumber" required
                        pattern="[0-9]{9}" maxlength="9"
                        :placeholder="translationStore.t('contactUs', 'phoneNumberPlaceholder')" />
                </div>
                <div class="input-group">
                    <input type="text" name="name" id="fname" v-model="name" required
                        :placeholder="translationStore.t('contactUs', 'namePlaceholder')" />
                </div>
                <p class="successMessage">{{ translationStore.t('contactUs', 'success') }}</p>
                <button type="submit" class="submit-button">{{ translationStore.t('contactUs', 'buttonText') }}</button>
            </form>
        </div>
    </div>
</template>

<script setup>
import { inject, ref } from "vue";

const root = ref(null);
defineExpose({
    root
})

const translationStore = inject("translationStore");

</script>

<script>
import { inject } from "vue";
const WEB3FORMS_ACCESS_KEY = "5ac91e69-ea81-4604-8477-16ef97aaade1";
// const WEB3FORMS_ACCESS_KEY = "15ac1e74-0952-47d8-90e1-aedc662d9c79";

export default {
    data() {
        return {
            name: "",
            phoneNumber: "",
            sharedState: inject('sharedState'),
        };
    },
    methods: {
        async submitForm() {
            if (!this.phoneNumber || !this.name) return
            if (this.phoneNumber.startsWith('0')) {
                this.phoneNumber = this.phoneNumber.slice(1);
            }
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    access_key: WEB3FORMS_ACCESS_KEY,
                    name: this.name,
                    phoneNumber: '+374' + this.phoneNumber,
                    value: this.sharedState.calculatedValue +
                        (this.sharedState.isCurrency ? " AMD " : " KWT * H"),
                    annualSavings: this.sharedState.annualSavings,
                    annualProductivity: this.sharedState.annualProductivity,
                    region: this.sharedState.region,
                }),
            });

            const result = await response.json();
            if (result.success) {
                this.resetForm();
                this.showSuccessMessage();
            }
        },
        resetForm() {
            this.name = '';
            this.phoneNumber = '';
        },
        showSuccessMessage() {
            const successMessage = document.getElementsByClassName('successMessage')[0];
            successMessage.style.display = 'block';
            setTimeout(() => {
                successMessage.style.display = 'none';
            }, 5000);
        },
    },
};
</script>

<style scoped>
a {
    color: inherit;
    text-decoration: none;
}

.contact-wrapper {
    background-color: #1f1f1f;
    color: #fff;
    font-family: sans-serif;
}

.successMessage {
    display: none;
    color: #45a049;
}

.contact-form {
    background-color: #2a2a2a;
    margin: -100px auto 0;
    max-width: 600px;
    padding: 40px 30px;
    border-radius: 8px;
    border: 4px solid #c2410c;
    text-align: center;
    position: relative;
    top: -120px;
    align-items: center;
}

.contact-title {
    font-size: 24px;
    margin-bottom: 24px;
}

.form {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.input-group input {
    width: 90%;
    padding: 12px 16px;
    border: 1px solid #444;
    background: #1a1a1a;
    border-radius: 6px;
    color: #fff;
    font-size: 14px;
}

.input-group input::placeholder {
    color: #aaa;
}

.submit-button {
    background-color: #c2410c;
    color: white;
    padding: 12px;
    border: none;
    border-radius: 6px;
    font-size: 16px;
    cursor: pointer;
}

.submit-button:hover {
    background-color: #a73709;
}

@media (max-width: 768px) {}
</style>
