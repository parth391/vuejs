<template>
	<span>
		<h1>v-bind:disabled</h1>
		<p><button v-on:click="isButtonDisabled = !isButtonDisabled">Toggle</button></p>
		<p><button v-bind:disabled="isButtonDisabled" v-on:click="counter++">Increase</button></p>
		<p>Second Counter: {{ counter }}</p>
		<p>Button is disabled: {{ isButtonDisabled }}</p>
	</span>
</template>
<script>
	import One from './One'
	import Two from './Two'
	export default {
		data() {
			return {
				counter: 0,
				isButtonDisabled: false,
			}
		}
	}
</script>