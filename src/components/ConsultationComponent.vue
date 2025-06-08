<template>
    <section id="consultation" class="consultation-section flex items-center justify-center min-h-screen bg-white px-4">
        <div class="text-center max-w-md">
            <p class="text-sm sm:text-base text-black mb-4">{{ translationStore.t('consulting', 'topText') }}</p>
            <h1 class="text-2xl sm:text-3xl font-medium text-black mb-6 leading-snug">
                {{ translationStore.t('consulting', 'bottomText1') }}
                <span class="text-orange-700 font-semibold">{{ translationStore.t('consulting', 'bottomText2') }}</span>
                {{ translationStore.t('consulting', 'bottomText3') }}
            </h1>
            <button
                class="bg-orange-700 hover:bg-orange-800 text-white text-lg font-medium px-8 py-3 rounded transition-colors">
                {{ translationStore.t('consulting', 'buttonText') }} </button>
        </div>
    </section>
    <hr>
</template>

<script setup>
import { inject } from "vue";
const translationStore = inject("translationStore");
</script>