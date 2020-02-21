<template>
	<span>
		<h1>v-bind:is</h1>
		<p>
			<input type="radio" id="one" value="One" v-model="currentView"><label for="one">One</label>
			<br>
			<input type="radio" id="two" value="Two" v-model="currentView"><label for="two">Two</label>
		</p>
		<p>Selected view {{ currentView }}</p>
		<p>
			<component v-bind:is="currentView"></component>
		</p>
	</span>
</template>
<script>
	import One from './One'
	import Two from './Two'
	export default {
		data() {
			return {
				currentView: "One"
			}
		},
		components: {
			One,
			Two
		}
	}
</script>