<template> 
  <panel title="Songs">                
    <v-btn
    to="/songs/create" 
    slot="action"
    fab
    light
    medium
    absolute
    right
    middle
    class="pink accent-1">
    <v-icon>add</v-icon>
    </v-btn>
    <div
        class="song" 
        v-for="song in songs"
        v-bind:key="song.id">
    <v-layout>
        <v-flex xs6>
        <div class="song-title">
            {{song.title}}
        </div>
        <div class="song-artist">
            {{song.artist}}
        </div>
        <div class="song-genre">
            {{song.genre}}
        </div>
        <v-btn 
            class="pink lighten-2"
            dark
            :to="{
              name:'song',
              params: {
                songId: song.id
            }}">
            View
        </v-btn>                        
        </v-flex>
        <v-flex xs6>
        <img :src="song.albumImageUrl" alt="" class="album-image">
        </v-flex>
    </v-layout>
    </div>
  </panel>
</template>

<script>
import SongsService from '@/services/SongsService';
export default {
    data() {
        return {
            songs: null
        }
    },
    watch: {
      "$route.query.search": {
        immediate: true,
        async handler(value) {
            this.songs = (await SongsService.index(value)).data;
        }
      }
    }
}
</script>

<style scoped>
.song {
    padding: 20px;
    height: 330px;
    overflow: hidden;
}
.song-title {
    font-size: 30px;
}
.song-artist {
    font-size: 24px;
}
.song-genre {
    font-size: 18px;
}
.album-image {
    width: 70%;
    margin: 0 auto;
}
</style>