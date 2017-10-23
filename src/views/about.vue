<template>
<b-container>
    <h1><i class="fa fa-male" /> About Me</i></h1>
    <p>
        I'm Qifan Lu, an enthusiast in programming and open source projects.<br />
        Currently studying software engineering @ Tsinghua University.
    </p>

    <h2><i class="fa fa-folder-open-o"> Course Projects</i></h2>
    <b-row>
        <b-col cols="12" md="6" lg="4">
            <b-card title="u-RPC" sub-title="The u-RPC Remote Procedure Call framework">
                <p class="card-text">
                    Remote Procedure Call framework for embedded devices.
                </p>
                <b-link href="https://github.com/lqf96/u-rpc" class="card-link">
                    <i class="fa fa-github" /> Source code
                </b-link>
            </b-card>
        </b-col>
        <b-col cols="12" md="6" lg="4">
            <b-card title="WISP ERT" sub-title="The WISP Extended Runtime">
                <p class="card-text">
                    The WISP Extended Runtime, extending WISP with reliable data transmission and remote file manipulation functionality.
                </p>
                <b-link href="https://github.com/lqf96/wisp-ert" class="card-link">
                    <i class="fa fa-github" /> Source code
                </b-link>
            </b-card>
        </b-col>
        <b-col cols="12" md="6" lg="4">
            <b-card title="libasync" sub-title="Asynchronous C++ library for network programming">
                <p class="card-text">
                    Cross-platform, concurrent, modern framework for network programming.
                </p>
                <b-link href="https://github.com/lqf96/libasync" class="card-link">
                    <i class="fa fa-github" /> Source code
                </b-link>
            </b-card>
        </b-col>
        <b-col cols="12" md="6" lg="4">
            <b-card title="mlisp" sub-title="The MLisp programming language, compiler and interpreter">
                <p class="card-text">
                    A Lisp dialect interpreter and compiler implemented in Haskell.
                </p>
                <b-link href="https://gitlab.com/lqf96/mlisp" class="card-link">
                    <i class="fa fa-gitlab" /> Source code
                </b-link>
            </b-card>
        </b-col>
        <b-col cols="12" md="6" lg="4">
            <b-card title="miniftp" sub-title="Demo FTP client and side, powered by libasync.">
                <p class="card-text">
                    Demo FTP client and server, powered by libasync.
                </p>
                <b-link href="https://gitlab.com/lqf96/miniftpd" class="card-link">
                    <i class="fa fa-gitlab" /> Server code
                </b-link>
                <b-link href="https://gitlab.com/lqf96/miniftp" class="card-link">
                    <i class="fa fa-gitlab" /> Client code
                </b-link>
            </b-card>
        </b-col>
        <b-col cols="12" md="6" lg="4">
            <b-card title="xv6-extra" sub-title="Xv6 enhancement project">
                <p class="card-text">
                    Implement POSIX socket API and Unix Domain Socket for xv6.
                </p>
                <b-link href="https://gitlab.com/lqf96/xv6" class="card-link">
                    <i class="fa fa-gitlab" /> xv6 code
                </b-link>
                <b-link href="https://gitlab.com/lqf96/xv6-extra" class="card-link">
                    <i class="fa fa-gitlab" /> Out-of-kernel code
                </b-link>
            </b-card>
        </b-col>
    </b-row>

    <h2><i class="fa fa-trophy"> Awards</i></h2>
    <ul>
        <li>Academic Excellence Award, School of Software, 2017</li>
        <li>Best project in Network and Computer Architecture Course, 2016</li>
        <li>Best Project in Web Front-end Technology Course, 2016</li>
    </ul>
</b-container>
</template>
