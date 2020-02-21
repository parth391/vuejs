<template>
    <span>
        <h1>States</h1>
        <table>
            <th>
                <td>No</td>
                <td>Name</td>
                <td>Action</td>
            </th>
            <tr v-for="(value, index) in listStates" v-if="listStates">
                <td>{{ index }}</td>
                <td>{{ value.state_name }}</td>
                <td><router-link :to="{name: 'state', params: {id: value.state_id}}">Edit</router-link></td>
            </tr>
        </table>
    </span>
</template>

<script>
    import axios from 'axios'
    axios.defaults.baseURL = 'http://rockerstech.com/thecrowd/'
    // axios.defaults.headers.common['token'] = 'something'
    export default {
        data() {
            return {
                listStates: []
            }
        },
        methods: {
            states() {
                axios.get('state/index')
                    .then(res => { 
                        // console.log(res.data.states) 
                        this.listStates = res.data.states 
                    })
                    .catch(error => console.log(error))
            }
        },
        mounted() {
            this.states()
        }
    }
</script>