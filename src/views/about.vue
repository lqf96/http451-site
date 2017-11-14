<template>
<b-container>
    <section>
        <h1><i class="fa fa-male" /> About Me</h1>
        <p>
            I'm Qifan Lu, an enthusiast in programming and open source projects.<br />
            Currently studying software engineering @ Tsinghua University.
        </p>
    </section>
    <!-- Course projects -->
    <section>
        <h2><i class="fa fa-folder-open-o" /> Course Projects</h2>
        <b-row>
            <b-col cols="12" md="6" lg="4" v-for="project in projects">
                <b-card :title="project.title" :sub-title="project.simple_desc">
                    <p class="card-text">{{project.desc}}</p>
                    <b-link v-for="link in project.links" :href="`${meta.projects.url[link.site]}/${link.repo}`">
                        <i :class="['fa', `fa-${link.site}`]" /> {{link.display||"Source code"}}
                    </b-link>
                </b-card>
            </b-col>
        </b-row>
    </section>
    <!-- Awards -->
    <section>
        <h2><i class="fa fa-trophy" /> Awards</h2>
        <ul>
            <li>Academic Excellence Award, School of Software, 2017</li>
            <li>Best project in Network and Computer Architecture Course, 2016</li>
            <li>Best Project in Web Front-end Technology Course, 2016</li>
        </ul>
    </section>
    <!-- Profiles -->
    <section>
        <h2>Profiles</h2>
        <ul>
            <li>Github: <a href="https://github.com/lqf96">@lqf96</a></li>
            <li>Gitlab: <a href="https://gitlab.com/lqf96">@lqf96</a></li>
            <li>Bitbucket: <a href="https://bitbucket.org/lqf96">@lqf96</a></li>
            <li>Coding: <a href="https://coding.net/u/lqf96">@lqf96</a></li>
        </ul>
    </section>
</b-container>
</template>

<script>
import about_data from "data/about.json";

export default {
    data: function() {
        return Object.assign({}, about_data);
    }
};
</script>

<style scoped>
section {
    padding-top: 0.5rem;
}

.card {
    margin-bottom: 1rem;
}
</style>
