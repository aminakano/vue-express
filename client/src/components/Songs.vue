<template> 
  <v-layout column>
      <v-flex xs6 offset-xs3>
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
                  class="cyan accent-2">
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
                        class="cyan"
                        dark
                        @click="navigateTo({
                            name:'song',
                            params: {
                                songId: song.id
                            }})">
                        View
                      </v-btn>                        
                    </v-flex>
                    <v-flex xs6>
                      <img :src="song.albumImageUrl" alt="" class="album-image">
                    </v-flex>
                  </v-layout>
                </div>
          </panel>
      </v-flex>
  </v-layout>
</template>

<script>
import Panel from '@/components/Panel';
import SongsService from '@/services/SongsService';
export default {
    components: {
        Panel
    },
    data() {
        return {
            songs: null
        }
    },
    async mounted() {
        this.songs = (await SongsService.index()).data;
    },
    methods: {
        navigateTo (route) {
            this.$router.push(route)
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