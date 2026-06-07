<template>
    <footer>
        <div class="container">
            <div class="footer-wrapper">
                <div class="footer-content">
                    <div class="footer-logo">
                        <img src="/Logo.png" alt="logo">
                        <p class="italic14">We are a residential interior
                            design firm located in Portland.
                            Our boutique-studio offers more than</p>
                    </div>
                    <div class="footer-links">
                        <div class="footer-link">
                            <span>Services</span>
                        </div>
                        <div class="footer-link">
                            <a href="#">Bonus program</a>
                        </div>
                        <div class="footer-link">
                            <a href="#">Gift cards</a>
                        </div>
                        <div class="footer-link">
                            <a href="#">Credit and payment</a>
                        </div>
                        <div class="footer-link">
                            <a href="#">Service contracts</a>
                        </div>
                        <div class="footer-link">
                            <a href="#">Non-cash account</a>
                        </div>
                        <div class="footer-link">
                            <a href="#">Payment</a>
                        </div>
                    </div>
                    <div class="footer-links">
                        <div class="footer-link">
                            <span>Assistance to the buyer</span>
                        </div>
                        <div class="footer-link">
                            <a href="#">Find an order</a>
                        </div>
                        <div class="footer-link">
                            <a href="#">Terms of delivery</a>
                        </div>
                        <div class="footer-link">
                            <a href="#">Exchange and return of goods</a>
                        </div>
                        <div class="footer-link">
                            <a href="#">Guarantee</a>
                        </div>
                        <div class="footer-link">
                            <a href="#">Frequently asked questions</a>
                        </div>
                        <div class="footer-link">
                            <a href="#">Terms of use of the site</a>
                        </div>
                    </div>
                </div>
                <div class="social-icons">
                    <img src="/social/Twitter.png" alt="twitter">
                    <img src="/social/Facebook.png" alt="facebook">
                    <img src="/social/Tiktok.png" alt="tiktok">
                    <img src="/social/Instagram.png" alt="instagram">
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup lang="ts">

</script>

<style scoped>
footer {
    background: #000000;
    color: white;
    padding: 32px 0;
}

.container {
    max-width: 1520px;
    height: 504px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 32px;
}

.footer-wrapper {
    padding: 0 0 0 5rem;
    height: 256px;
    display: flex;
    flex-direction: column;
    gap: 62px;
}

.footer-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 100px;
}

.footer-links {
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 240px;
}

.social-icons {
    display: flex;
    gap: 32px;
}

.footer-logo {
    filter: invert(1);
}

.italic14 {
    width: 380px;
}

a {
    color: gray;
    text-decoration: none;
    cursor: pointer;
    font-size: 14px;
}
</style>