<template>
    <section class="email-contact">
        <form @submit.prevent="submitForm">
            <label for="fname">{{ translationStore.t('emailForm', 'fullName') }}</label>
            <input type="text" name="name" id="fname" v-model="name" required />
            <label for="fmail">{{ translationStore.t('emailForm', 'email') }}</label>
            <input type="email" name="email" id='fmail' v-model="email" required />
            <label for="fmessage">{{ translationStore.t('emailForm', 'message') }}</label>
            <textarea name="message" id="fmessage" v-model="message"></textarea>
            <button type="submit">{{ translationStore.t('emailForm', 'send') }}</button>
        </form>
    </section>
</template>

<script setup>
import { inject } from "vue";

const translationStore = inject("translationStore");
</script>

<script>
import { inject } from "vue";
const WEB3FORMS_ACCESS_KEY = "15ac1e74-0952-47d8-90e1-aedc662d9c79";

export default {
    data() {
        return {
            name: "",
            email: "",
            message: "",
            sharedState: inject('sharedState'),
        };
    },
    methods: {
        async submitForm() {
            if (!this.email || !this.name) return
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    access_key: WEB3FORMS_ACCESS_KEY,
                    name: this.name,
                    email: this.email,
                    message: this.message,
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
                // console.log(result);
            }
        },
        resetForm() {
            this.name = '';
            this.email = '';
            this.message = ''
        }
    },
};
</script>

<style scoped>
input,
select,
textarea {
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    margin-top: 6px;
    margin-bottom: 16px;
    resize: vertical
}

button {
    background-color: #04AA6D;
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

button:hover {
    background-color: #45a049;
}

section {
    border-radius: 5px;
    background-color: #f2f2f2;
    padding: 20px 150px;
}

@media (max-width: 768px) {
    section {
        padding: 20px;
    }
}
</style>