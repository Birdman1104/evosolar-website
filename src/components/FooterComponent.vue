<template>
    <hr>
    <footer class="footer">
        <span>Evosolar &#169; <span id='yearSpan'>2025</span></span>
        <div>
            <a href="#">Terms and Conditions</a>
            <a href="#">Privacy and Policy</a>
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

.footer a {
    color: #5c5c5c;
    margin-left: 15px;
    text-decoration: none;
}
</style>