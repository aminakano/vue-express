<template>
    <panel title="YouTube Video">
      <youtube
        :video-id="youtubeId"
        :player-width="400"
        :player-height="250">
      </youtube>
    </panel>
</template>

<script>
export default {
    props: [
        'youtubeId'
    ],

}
</script>

<style>

</style>