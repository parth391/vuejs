<template>
	<span>
		<h1>v-model</h1>
		<p><input type="text" v-model="myLastName"></p>
		<p>My last name: {{ myLastName }}</p>
	</span>
</template>
<script>
	export default {
		data() {
			return {
				myLastName: 'Gohel',
			}
		}
	}
</script>