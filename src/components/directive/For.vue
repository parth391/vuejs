<template>
	<span>
		<h1>v-for</h1>
		<p>
			<ul>
				<li v-for="name in arrayList">
					{{ name }}
				</li>
			</ul>
		</p>
		<!-- <p>
			<ul>
				<li v-for="list in objectList">
                    <ul>
    					<li v-for="(value, key) in list">
    						{{ key }}: {{ value }}
    					</li>
                    </ul>
				</li>
			</ul>
		</p> -->
	</span>
</template>
<script>
	export default {
		data() {
			return {
				arrayList: ["parth", "darshan", "rahul"],
				objectList: [{"firstName": "parth", "age": 25}, {"firstName": "darshan", "age": 29}, {"firstName": "rahul", "age": 26}],
			}
		}
	}
</script>