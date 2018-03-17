<template>
    <div>
        <h1>{{message}}</h1>
        <h1>example</h1>
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        },
        data: function () {
            return {
                message: 'ПРИВЕТ ИСКАТЕЛЬ ПРИКЛЮЧЕНИЙ'
            }
        }
    }
</script>

<style>

</style>