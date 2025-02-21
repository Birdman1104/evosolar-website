<template>
    <section class="email-contact">
        <form @submit.prevent="submitForm">
            <label for="fname">Full Name</label>
            <input type="text" name="name" id="fname" v-model="name" />
            <label for="fmail">Contact Email</label>
            <input type="email" name="email" id='fmail' v-model="email" />
            <label for="fmessage">Message</label>
            <textarea name="message" id="fmessage" v-model="message"></textarea>
            <button type="submit">Send Message</button>
        </form>
    </section>
</template>

<script>
const WEB3FORMS_ACCESS_KEY = "5ac91e69-ea81-4604-8477-16ef97aaade1";

export default {
    data() {
        return {
            name: "",
            email: "",
            message: "",
        };
    },
    methods: {
        async submitForm() {
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
                }),
            });
            const result = await response.json();
            if (result.success) {
                console.log(result);
            }
        },
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
    padding: 20px;
}
</style>