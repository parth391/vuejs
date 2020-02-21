<template>
	<span>
		<h1>v-on:submit</h1>
		<form v-on:submit.prevent="submitForm">
			<p><input type="text">
			<p><input type="submit" value="Submit" /></p>
			<p>Form is submited: {{ isSubmited }}</p>
		</form>
	</span>
</template>
<script>
	import One from './One'
	import Two from './Two'
	export default {
		data() {
			return {
				isSubmited: 'No'
			}
		},
		methods: {
			submitForm() {
				this.isSubmited = "Yes"
			}
		}
	}
</script>