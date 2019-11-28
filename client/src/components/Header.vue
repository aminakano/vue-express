<template>
    <v-toolbar fixed class="cyan" dark>
        <v-toolbar-title class="mr-4">
            <router-link 
            to="/" 
            tag="span"
            class="home">TabTracker</router-link> 
        </v-toolbar-title>
        <!-- <v-toolbar-items>
            <v-btn flat dark>Brouse</v-btn>
        </v-toolbar-items> -->
        <v-spacer></v-spacer>
        <v-toolbar-items>
            <v-btn 
                v-if="!$store.state.isUserLoggedIn"
                flat dark to='/login'>Log in</v-btn>
            <v-btn
                v-if="!$store.state.isUserLoggedIn" 
                flat dark to='/register'>Sign Up</v-btn>
            <v-btn
                v-if="$store.state.isUserLoggedIn"
                @click="logout"
                to='/' 
                flat dark>Log Out</v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script>
export default {
    methods: {
        // navigateTo (route) {
        //     this.$router.push(route)
        // }
        logout() {
          this.$store.dispatch('setToken', null)
          this.$store.dispatch('setUser', null)
        }
    }
}
</script>

<style scoped>
.home {
    cursor: pointer;
}
.home:hover {
    color: #e9e;
}
</style>