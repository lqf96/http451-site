<template>
<div>
    <!-- Navigation bar -->
    <http451-navbar />
    <!-- Main area -->
    <div class="main-area">
        <router-view />
    </div>
    <!-- Footer -->
    <http451-footer />
</div>
</template>

<style>
</style>

<style scoped>
.main-area {
    margin-top: 3.5rem;
}
</style>

<script>
import NavBar from "./nav-bar.vue";
import Footer from "./footer.vue";

export default {
    components: {
        "http451-navbar": NavBar,
        "http451-footer": Footer
    }
}
</script>
