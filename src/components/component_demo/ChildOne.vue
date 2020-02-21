<template>
	<span>
		<hr>
			<h4>Child Component</h4>
			<p>First Name: {{ firstName }}</p>
			<button v-on:click="$emit('resetName', 'Rahul')">My name is Rahul</button>
		<hr>
	</span>
</template>

<script>
	export default {
		props: ['firstName']
	}
</script>