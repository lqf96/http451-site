<template>
<b-navbar toggleable="sm" type="dark" variant="dark" fixed="top">
    <b-container>
        <b-nav-text class="mr-auto d-sm-none" @click="$router.back()">
            <i class="fa fa-chevron-left"></i>
        </b-nav-text>
        <b-navbar-brand class="mx-auto mr-sm-2" to="/">HTTP 451</b-navbar-brand>
        <b-nav-text class="ml-auto d-sm-none" v-b-toggle.nav-collapse>
            <i class="fa fa-bars"></i>
        </b-nav-text>
        <b-collapse is-nav id="nav-collapse">
            <b-nav is-nav-bar>
                <!-- Online services -->
                <b-nav-item to="/services">
                    <i class="fa fa-server d-sm-none" /> Services
                </b-nav-item>
                <!-- Open source projects -->
                <b-nav-item to="/projects">
                    <i class="fa fa-code d-sm-none" /> Projects
                </b-nav-item>
                <!-- Blogs -->
                <b-nav-item to="/blogs">
                    <i class="fa fa-rss-square d-sm-none" /> Blogs
                </b-nav-item>
                <!-- About me -->
                <b-nav-item to="/about">
                    <i class="fa fa-male d-sm-none" /> About
                </b-nav-item>
            </b-nav>
        </b-collapse>
    </b-container>
</b-navbar>
</template>

<style scoped>
.navbar-nav .fa {
    width: 1.25rem;
    text-align: center;
}
</style>
