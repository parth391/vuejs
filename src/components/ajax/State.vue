<template>
    <span>
        <h1>State</h1>
        <form v-on:submit.pervent="onSubmit">
            <p><input type="text" v-model="state.state_name"></p>
            <p><button>Submit</button></p>
        </form>
    </span>
</template>

<script>
    import axios from 'axios'
    axios.defaults.baseURL = 'http://rockerstech.com/thecrowd/'
    // axios.defaults.headers.common['token'] = 'something'
    export default {
        data() {
            return {
                id: this.$route.params.id,
                state: {
                    state_name: ''
                }
            }
        },
        methods: {
            getState() {
                axios.get('state/edit/'+this.id)
                    .then(res => { 
                        console.log(res.data.state)
                        this.state.state_name = res.data.state.state_name
                    })
                    .catch(error => console.log(error))
            },
            onSubmit() {
                const formData = new FormData();
                formData.append('state_name', this.state.state_name);
                axios.post('state/update/'+this.id, formData)
                    .then(res => {
                        this.$router.push({ name: "listStates" });
                    })
                    .catch(error => console.log(error))
            }
        },
        mounted() {
            // console.log(this.$route.params.id) 
            this.getState()
        }
    }
</script>