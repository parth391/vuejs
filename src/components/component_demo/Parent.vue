<template>
	<span>
		<p><input type="text" v-model="firstName"></p>
		<p>First Name: {{ firstName }}</p>
		<ChildOne v-bind:firstName='firstName' v-on:resetName="firstName = $event"></ChildOne>
	</span>
</template>

<script>
	import ChildOne from "./ChildOne"
	export default {
		data() {
			return {
				firstName: 'Parth'
			}
		},
		components: {
			ChildOne
		}
	}
</script>