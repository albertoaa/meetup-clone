<template>
  <v-container>

    <v-layout row wrap>
      <v-flex xs12 sm6 class="text-xs-center text-sm-right">
        <v-btn large router to="/meetups" class="info">Explore Meetups</v-btn>
      </v-flex>
      <v-flex xs12 sm6 class="text-xs-center text-sm-left">
        <v-btn large router to="/meetup/new" class="info">Organize Meetups</v-btn>
      </v-flex>
    </v-layout>

    <v-layout row wrap class="mt-2">
      <v-flex xs12>
        <v-carousel>
          <v-carousel-item
            v-for="(meetup,i) in meetups"
            v-bind:src="meetup.imageUrl"
            :key="meetup.id"
          >
            <div class="title">
              {{ meetup.title }}
            </div>
          </v-carousel-item>
        </v-carousel>
      </v-flex>
    </v-layout>

    <v-layout row wrap class="mt-2">
      <v-flex xs12 class="text-xs-center">
        <p>Join our awesome meetups</p>
      </v-flex>
    </v-layout>

  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        meetups: [
          {
            imageUrl: 'https://media.timeout.com/images/103444978/630/472/image.jpg',
            id: 'meetup1',
            title: 'Meetup in New York'
          },
          {
            imageUrl: 'https://sandaya58xe2prod.dxcloud.episerver.net/globalassets/4-regions/decouvrir-la-region-de-paris-hd.jpg?w=1280&h=545&scale=both&mode=crop&dpi=90',
            id: 'meetup2',
            title: 'Meetup in Paris'
          }
        ]
      }
    }
  }
</script>

<style scoped>
  .title {
    position: absolute;
    bottom: 55px;
    color: #fff;
    background-color: rgba(0,0,0,0.5);
    padding: 5px;
    font-size: 2em;
  }
</style>
