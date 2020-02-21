<template>
	<span>
        <h1>v-html</h1>
        <p>
            <span v-html="title"></span>
        </p>
	</span>
</template>
<script>
	export default {
		data() {
			return {
                title: "<h5>v-html demo</h5>"
			}
		}
	}
</script>