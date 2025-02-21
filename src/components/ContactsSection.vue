<script>
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


// export default {
//     components: {
//         FontAwesomeIcon
//     },
// };
</script>

<template>
    <section class="contact-section">
        <h2>Contact us</h2>
        <div class="container">
            <div class="map-container">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3047.6607079386436!2d44.56738817641832!3d40.19436367147618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406aa337d96f5425%3A0xe7b39fb66c1123a7!2s37%20Gai%20Ave%2C%20Yerevan%200076!5e0!3m2!1sen!2sam!4v1740042328628!5m2!1sen!2sam"
                    width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div class="info">

                <div class="contact-box">
                    <p>📞 Call us</p>
                    <p><a href="tel:++37455648800">+374 55 64 88 00</a></p>
                    <div class="social-icons">
                        <!-- TODO add links -->
                        <img src="../assets/icons/telegram.png" alt="Telegram">
                        <img src="../assets/icons/viber.png" alt="Viber">
                        <img src="../assets/icons/whatsapp.png" alt="WhatsApp">
                    </div>
                </div>

            </div>

            <div class="mail-address">

                <div class="contact-box">
                    <p>✉️ Email us</p>
                    <p><a href="mailto:arsenmazmanyan11@gmail.com">sales@evosolar.am</a></p>
                </div>

                <div class="contact-box">
                    <p>📍 Visit us </p>
                    <p>Gay Ave 37, Yerevan, Armenia</p>
                </div>
            </div>
        </div>

    </section>
</template>



<style scoped>
.contact-section h2 {
    text-align: center;
    margin-bottom: 20px;
}

.container {
    display: flex;
    gap: 50px;
    background: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.map-container iframe {
    border-radius: 10px;
    width: 350px;
    height: 250px;
    border: none;
}

.info {
    max-width: 400px;
}

.info h2 {
    margin-top: 0;
}

.contact-box {
    background: white;
    border-radius: 10px;
    padding: 15px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    margin-bottom: 10px;
    width: 100%;
}

.contact-box p {
    margin: 5px 0;
    font-weight: bold;
}

.social-icons {
    display: flex;
    gap: 10px;
    margin-top: 10px;
}

.social-icons img {
    width: 24px;
    height: 24px;
}
</style>