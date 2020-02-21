<template>
    <span>
        <h2>Country</h2>
        <p>Id: {{ $route.params.id }}</p>
        <p>Name: {{ $route.query.name }}</p>
        <p><button v-on:click="$router.push({name: 'countries'})">Back</button></p>
    </span>
</template>