<template>
	<span>
		<AppHeader />
		<div>
            <p>
                <h3>First counter</h3>
                <button v-on:click="count++">Icrement</button>
                <button v-on:click="count--">Decrement</button>
                <div>methods Counter:  {{ getCount() }}</div>
                <div>computed Counter:  {{ computedGetCount }}</div>
            </p>
            <p>
                <h3>Second counter</h3>
                <button v-on:click="secondCount++">Icrement</button>
                <div>watch Counter: {{ secondCount }}</div>
            </p>
		</div>
		<AppFooter />
	</span>
</template>
<script>
import AppHeader from "./AppHeader"
export default {
	data() {
        return {
            count: 0,
            secondCount: 0
        }
	},
    methods: {
        getCount: function() {
            console.log("methods")
            return this.count
        }
    },
    computed: {
        computedGetCount: function() {
            console.log("computed")
            return this.count
        }
    },
    watch: {
        secondCount: function(value) {
            console.log('watch');
            setTimeout(function() {
                    
            }, 300)
        }
    },
	components: {
		AppHeader
	}
}
</script>