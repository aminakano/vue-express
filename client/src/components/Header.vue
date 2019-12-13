<template>
    <v-toolbar fixed class="pink lighten-2" dark>
        <v-toolbar-title class="mr-4">
            <router-link 
            to="/" 
            tag="span"
            class="home">TabTracker</router-link> 
        </v-toolbar-title>
        <v-toolbar-items>
            <v-btn
                to="/songs" 
                flat dark>Browse</v-btn>
        </v-toolbar-items>
        <v-spacer></v-spacer>
        <v-toolbar-items>
            <v-btn 
                v-if="!$store.state.isUserLoggedIn"
                flat dark 
                to='/login'>Log in</v-btn>
            <v-btn
                v-if="!$store.state.isUserLoggedIn" 
                flat dark to='/register'>Sign Up</v-btn>
            <v-btn
                v-if="$store.state.isUserLoggedIn"
                @click="logout"
                flat dark>Log Out</v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script>
export default {
    methods: {
        logout() {
          this.$store.dispatch('setToken', null)
          this.$store.dispatch('setUser', null)
          this.$router.push({
            name: 'songs'
          })
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