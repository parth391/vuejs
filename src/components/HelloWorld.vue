<template>
    <span>
        <h1>VueJS</h1>
        <ul>
            <li><router-link to="directives">Directives</router-link></li>
            <li><router-link to="/">Components</router-link></li>
            <li style="list-style-type: none;">
                <ul>
                    <li><router-link :to="{name: 'life_hooks'}">Basic / Lifecycle Hooks</router-link></li>
                    <li><router-link :to="{name: 'props'}">Communication</router-link></li>
                    <li><router-link :to="{name: 'Computed'}">Computed / Watch</router-link></li>
                </ul>
            </li>
            <li><router-link :to="{name: 'Store'}">Store</router-link></li>
            <li><router-link :to="{name: 'countries'}">Routes</router-link></li>
            <li><router-link :to="{name: 'listStates'}">Http request</router-link></li>
        </ul>
    </span>
</template>
