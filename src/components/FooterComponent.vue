<template>
    <hr>
    <footer class="footer">
        <span class="copyright">Evosolar &#169; <span id='yearSpan'>2025</span> </span>
        <div class="urls">
            <a href="#">Terms and Conditions </a>
            <a href="#">Privacy and Policy </a>
            <a href="http://birdman1104.github.io/" target="_blank">Developer: Birdman</a>
        </div>
    </footer>
</template>

<script>
window.onload = () => {
    document.getElementById("yearSpan").innerHTML = new Date().getFullYear();
}
</script>

<style scoped>
hr {
    margin: 0;
}

.footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 40px;
    background-color: #ffffff;
    color: #5c5c5c;
}

.urls a {
    color: #5c5c5c;
    margin-left: 15px;
    text-decoration: none;
}

.copyright a {
    color: #5c5c5c;
    text-decoration: none;
}

@media (max-width: 768px) {
    .footer {
        display: block;
        text-align: center;
    }

    .urls a {
        margin: 0;
        display: block;
    }
}
</style>