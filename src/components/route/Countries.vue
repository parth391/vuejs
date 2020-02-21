<template>
    <span>
        <h1>Contries</h1>
        <table>
            <th>
                <td>Name</td>
                <td>Action</td>
            </th>
            <tr>
                <td>India</td>
                <td><router-link to="/country/1/?name=india">Edit</router-link></td>
            </tr>
            <tr>
                <td>USA</td>
                <td><router-link v-bind:to="{name: 'country', params: {id: 2}, query: {name: 'USA'}}">Edit</router-link></td>
            </tr>
        </table>
    </span>
</template>