<template>
	<span>
		<h1>v-once</h1>

		<p><input v-on:blur="updateFirstName" /></p>
		<p v-once>My first name is {{ myFirstName }}</p>
	</span>
</template>
<script>
	import One from './One'
	import Two from './Two'
	export default {
		data() {
			return {
				myFirstName: 'Parth'
			}
		},
		methods: {
			updateFirstName(event) {
				this.myFirstName = event.target.value
			}
		}
	}
</script>