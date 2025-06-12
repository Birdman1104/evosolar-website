<template>
    <div class="contact-wrapper">

        <div class="contact-form">
            <h3 class="contact-title">Կապ Մեզ Հետ</h3>

            <form class="form">
                <div class="input-group">
                    <input type="text" placeholder="Հեռախոսահամար" />
                </div>
                <div class="input-group">
                    <input type="text" placeholder="Ձեր Անունը" />
                </div>
                <button type="submit" class="submit-button">Կապ Մեզ Հետ</button>
            </form>
        </div>

        <footer class="footer">
            <div class="footer-top">
                <div class="logo">
                    <!-- <img src="@/assets/logo.png" alt="EvoSolar Logo" /> -->
                </div>

                <div class="footer-column">
                    <h4>Կապ</h4>
                    <p>Գայի պողոտա 37, Երևան</p>
                    <p>055 648 800</p>
                    <p>sales@evosolar.am</p>
                </div>

                <!-- Links -->
                <div class="footer-column">
                    <h4>Հղումներ</h4>
                    <p>Մեր Մասին</p>
                    <p>Ծառայություններ</p>
                    <p>Կապ</p>
                </div>
            </div>

            <div class="footer-bottom">
                <p>Copyright © EvoSolar 2025</p>
                <div class="social-icons">
                    <!-- <a href="#"><img src="@/assets/fb.svg" alt="Facebook" /></a>
                    <a href="#"><img src="@/assets/ig.svg" alt="Instagram" /></a>
                    <a href="#"><img src="@/assets/yt.svg" alt="YouTube" /></a>
                    <a href="#"><img src="@/assets/tiktok.svg" alt="TikTok" /></a>
                    <a href="#"><img src="@/assets/in.svg" alt="LinkedIn" /></a> -->
                </div>
            </div>
        </footer>

    </div>
</template>

<script setup>
// no JS needed
</script>

<style scoped>
.contact-wrapper {
    background-color: #1f1f1f;
    color: #fff;
    font-family: sans-serif;
}

.contact-form {
    background-color: #2a2a2a;
    margin: -100px auto 60px;
    max-width: 600px;
    padding: 40px 30px;
    border-radius: 8px;
    border: 2px solid #c2410c;
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

.footer {
    background-color: #1f1f1f;
    padding: 40px 20px;
}

.footer-top {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: 1100px;
    margin: 0 auto 20px;
    gap: 20px;
}

.logo img {
    height: 40px;
}

.footer-column {
    min-width: 180px;
}

.footer-column h4 {
    font-size: 16px;
    margin-bottom: 12px;
}

.footer-column p {
    margin: 4px 0;
    color: #ddd;
}

.footer-bottom {
    border-top: 1px solid #333;
    padding-top: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    max-width: 1100px;
    margin: 0 auto;
}

.footer-bottom p {
    color: #888;
    font-size: 14px;
}

.social-icons a {
    margin-left: 10px;
}

.social-icons img {
    width: 20px;
    height: 20px;
    filter: brightness(0.9);
}
</style>
