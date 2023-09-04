<template>
    <div class="login">
        <form class="form" @submit.prevent="login">
            <h1>Login</h1>
            <label for="username">Username</label>
            <input class="input" type="text" name="username" v-model="username">
            <label for="password">Password</label>
            <input class="input" type="password" name="password" v-model="password">
            <button class="btn">Login</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            username: '',
            password: ''
        }
    },
    methods: {
        login() {
            // Auth user against API
            window.user = this.username;
            console.log('User is :',window.user);
            this.$router.push({name: 'protected'});
        }
    }
}
</script>