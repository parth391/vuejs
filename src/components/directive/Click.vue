<template>
	<span>
		<h1>v-on:click</h1>
		<p>
			<button v-on:click="increaseCounter">Increase</button>
			<button v-on:click="counter--">Decrease</button>
		</p>
		<p>Counter: {{ counter }}</p>
	</span>
</template>
<script>
	export default {
		data() {
			return {
				counter: 0
			}
		},
		methods: {
			increaseCounter() {
				this.counter++;
			}, 
		},
	}
</script>