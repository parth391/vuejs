<template>
	<div>
		<h2>Store</h2>
		<p>Getter: {{ $store.getters.getNumber }}</p>
		<p>Mutations Increment: <button v-on:click="$store.commit('increment', 2)">Click</button></p>
		<p>Actions Increment: <button v-on:click="$store.dispatch('increment', 10)">Click</button></p>
		<!-- <ChildComponent></ChildComponent> -->
	</div>
</template>
<script type="text/javascript">
	import ChildComponent from "./ChildComponent"
	export default {
		components: {
			ChildComponent
		}
	}
</script>