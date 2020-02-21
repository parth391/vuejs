<template>
	<span>
		<h1>v-if</h1>
		<p>
			<button v-on:click="thirdCounter++">Increase</button>
			<button v-on:click="thirdCounter--">Decrease</button>
		</p>
		<p>Third Counter: {{ thirdCounter }}</p>
		<p v-if="thirdCounter < 5">
			Third Counter is less than 5
		</p>
		<p v-else>
			Third Counter is greather than 5
		</p> 
	</span>
</template>
<script>
	import One from './One'
	import Two from './Two'
	export default {
		data() {
			return {
				thirdCounter: 0
			}
		}
	}
</script>