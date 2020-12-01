<template>
  <div id="app">
    <div class="header">

      <div class="header__container--actions">
        <b-button
          class="header__button--action header__button--regenerate"
          variant="danger"
          @click="randomizeArray()"
        >
          <b-icon icon="arrow-counterclockwise"/>
          Regenerate
        </b-button>

        <b-button
          class="header__button--action header__button--start"
          variant="success"
          @click="start()"
        >
          <b-icon icon="play-fill"></b-icon>
          Start
        </b-button>

        <b-button
          class="header__button--action header__button--info"
          variant="secondary"
          v-b-toggle.info
        >
          <b-icon icon="info"></b-icon>
          Info
        </b-button>
      </div>

      <b-nav pills class="header__container--algorithms">
        <b-nav-item
          class="header__item--algorithm"
          v-for="algorithm in algorithms"
          :key="algorithm.id"
          :active="selected === algorithm.id ? true : false"
          @click="selected = algorithm.id"
        >
          {{ algorithm.name }}
        </b-nav-item>
      </b-nav>

    </div>

    {{ array }}

    <SideBar :algorithmsProp="algorithms" :selected="selected"/>

  </div>
</template>

<script>
import SideBar from './components/SideBar.vue';
/*
TODO
- change from class to css
- add dark theme

IDEAS
- add description and code impementation

*/

export default {
  name: 'App',

  components: {
    SideBar,
  },

  data() {
    return {
      algorithms: [
        {
          id: 0,
          name: 'Bubble Sort',
        },
        {
          id: 1,
          name: 'Selection Sort',
        },
        {
          id: 2,
          name: 'Insertion Sort',
        },
        {
          id: 3,
          name: 'Merge Sort',
        },
      ],
      selected: 0,
      array: [],
    };
  },

  methods: {
    initializeArray() {
      for (let i = 1; i <= 100; i += 1) {
        this.array.push(i);
      }
    },

    randomizeArray() {
      this.array.sort(() => Math.random() - 0.5);
    },

    start() {
      //
    },
  },

  mounted() {
    this.initializeArray();
    this.randomizeArray();
  },
};
</script>

<style>
.header {
  display: flex;
  width: 100vw;
  margin: 20px 50px;
}

.header__container--actions {
  display: inline;
}
.header__button--action {
  margin: 5px;
}
.header__button--regenerate {
  margin-right: 50px;
}

.header__container--algorithms {
  justify-self: center;
  margin-left: 200px;
}
.header__item--algorithm {
  margin: 5px;
}
</style>
