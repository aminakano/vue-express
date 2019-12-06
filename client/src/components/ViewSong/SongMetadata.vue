<template>
  <panel title="Song Metadata">
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
            :to="{
              name:'song-edit',
              params() {
                return {
                songId: song.id
                }
              }}">
              Edit
          </v-btn>              
          <v-btn
            v-if="isUserLoggedIn && !isBookmarked" 
            class="cyan"
            dark
            @click="bookmark">
              Bookmark
          </v-btn>              
          <v-btn 
            v-if="isUserLoggedIn && isBookmarked" 
            class="cyan"
            dark
            @click="unbookmark">
              Unbookmark
          </v-btn>              
        </v-flex>
        <v-flex xs6>
          <img :src="song.albumImageUrl" alt="" class="album-image">
          <br>
          {{song.album}}
        </v-flex>
    </v-layout>
  </panel>
</template>

<script>
import { mapState } from "vuex";
import BookmarksService from "@/services/BookmarksService";

export default {
  props: [
    'song'
    ],
  data() {
    return {
      isBookmarked: false
    }
  },
  computed: {
    ...mapState([
      "isUserLoggedIn"
    ])
  },
  async mounted() {
    if(!this.isUserLoggedIn){
      return;
    }
    try {
      const bookmark = (await BookmarksService.index({
        songId: this.$store.state.route.params.songId,
        // songId: this.song.id,
        userId: this.$store.state.user.id 
      })).data;
      this.isBookmarked = !!bookmark;
    } catch(err) {
      console.log(err);
    }
  },
  methods: {
    async bookmark() {
      try {
        await BookmarksService.post({
         songId: this.song.id,
         userId: this.$store.state.user.id 
       }).data;
      } catch(err) {
        console.log(err)
      }
    },
    async unbookmark() {
      try {
        await BookmarksService.delete({
         songId: this.song.id,
         userId: this.$store.state.user.id 
       });
      } catch(err) {
        console.log(err)
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