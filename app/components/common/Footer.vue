<template>
    <footer>
        <div class="container">
            <div class="footer-content">
                <div class="footer-logo">
                    <img src="/Logo.png" alt="logo">
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
  margin: 0 auto;
  padding: 0 40px;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 32px;
}
.footer-logo {
    filter: invert(1);
}
a {
    color: gray;
    text-decoration: none;
    cursor: pointer;
}
</style>