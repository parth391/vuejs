<template>
	<div>
		<h2>Child Component</h2>
		<p>Getter: {{ $store.getters.getNumber }}</p>
		<p>Mutations Increment: <button v-on:click="$store.commit('increment', 2)">Click</button></p>
		<p>Actions Increment: <button v-on:click="$store.dispatch('increment', 10)">Click</button></p>
	</div>
</template>