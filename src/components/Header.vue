<template>
    <header class="navbar">
        <div class="container">
            <div class="navbar-content">
                <!-- здесь сначала title будет разыскиваться в data внизу, если там нет - искать в пропсах -->
                <!-- <a class="navbar-logo" href="/">{{ title }}</a> -->
                <router-link class="navbar-logo" to="/">{{ title }}</router-link>
                <ul class="navbar-list">
                    <li class="navbar-item" v-for="link in links" :key="link.alias">
                        <!-- ВАЖНО! здесь нельзя оставить просто href="link.url", иначе именно линк точка юрл станет ссылкой -->
                        <!-- поэтому связываем атрибут хреф с нужным полем юрл из линк в дате через :хреф -->
                        <!-- <a class="navbar-link" :href="link.url">{{ link.title }}</a> -->
                        <router-link class="navbar-link" :to="link.url">{{ link.title }}</router-link>
                    </li>
                    <!-- <li class="navbar-item">
                        <a class="navbar-link" href="/about">About</a>
                    </li> -->
                </ul>
            </div>
        </div>
    </header>
</template>

<script>
import {app, links} from "@/_config"
export default {
    data() {
        return {
            title: app.title,
            links: links
        }
    }

    // props: {
    //     title: {
    //         type: String,
    //         required: true
    //     },
    //     links: {
    //         type: Array,
    //         default() {
    //             return [
    //                 {
    //                     title: "Home",
    //                     alias: "Home",
    //                     url: "/",
    //                 }
    //             ]
    //         } 
    //     },
    // },
};
</script>