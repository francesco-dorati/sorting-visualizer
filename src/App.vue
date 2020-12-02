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
          :variant="sorting ? 'danger' : 'success'"
          @click="sorting ? stop() : start()"
        >
          <b-icon :icon="sorting ? 'x-octagon-fill' : 'play-fill'"></b-icon>
          {{ sorting ? 'Stop' : 'Start' }}
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

    <div class="containe">
      <!-- <span
        v-for="item in array"
        :key="item"
        :style="{width: '5px', height: `${item*5}px`, margin: '0 2px', color: 'black'}"
      >

      </span> -->
      <div
        v-for="(item, index) in array"
        class="bar"
        :key="item"
        :style="{
          height: `${5.5*item}px`,
          backgroundColor: colors.red.includes(index) ?
            '#dc3545' : colors.green.includes(index) ?
              '#28a745' : '#6c757d',
        }"
      >
      </div>
    </div>

    <SideBar :algorithmsProp="algorithms" :selected="selected"/>

  </div>
</template>

<script>
/* eslint-disable no-await-in-loop */
import SideBar from './components/SideBar.vue';
/*
TODO
- change from class to css
- add dark theme

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
      colors: {
        green: [],
        red: [],
      },
      sorting: false,
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
      this.colors.red = [];
      this.colors.green = [];
    },

    start() {
      //
      // this.array.sort((a, b) => a - b);
      if (!this.sorting) {
        this.sorting = true;
        switch (this.selected) {
          case 0:
            this.bubbleSort();
            break;
          case 1:
            this.selectionSort();
            break;
          case 2:
            this.insertionSort();
            break;
          case 3:
            this.mergeSort();
            break;
          default:
        }
      }
    },

    stop() {
      this.sorting = false;
    },

    async bubbleSort() {
      const time = 5;

      this.colors.green = [];
      this.colors.red = [];

      let swaps = -1;
      let sorted = this.array.length - 1;

      while (swaps !== 0) {
        swaps = 0;
        for (let i = 0; i < sorted; i += 1) {
          if (!this.sorting) return;

          this.colors.red = [];
          this.colors.red.push(i, i + 1);

          await this.sleep(time);

          if (this.array[i] > this.array[i + 1]) {
            this.array.splice(i, 2, this.array[i + 1], this.array[i]);
            swaps += 1;
          }
        }
        this.colors.green.push(sorted);
        sorted -= 1;
      }

      this.colors.green = [];

      for (let i = 0; i < this.array.length; i += 1) {
        this.colors.red = [];
        this.colors.red.push(i, i + 1);
        this.colors.green.push(i);
        await this.sleep(time);
      }

      this.colors.red = [];
      this.sorting = false;
    },

    selectionSort() {
      console.log('selection');
    },

    insertionSort() {
      console.log('insertion');
    },

    mergeSort() {
      console.log('merge');
    },

    sleep(t) {
      return new Promise((resolve) => setTimeout(resolve, t));
    },
  },

  mounted() {
    this.initializeArray();
    this.randomizeArray();
  },
};
/* eslint-enable no-await-in-loop */
</script>

<style>
#app {
  height: 100vh;
  width: 100vw;
}
.header {
  display: flex;
  width: 100vw;
  padding: 20px 50px;
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

.containe {
  margin: auto;
  height: 80%;
  width: 80%;
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  padding: 10px;
  /* border: 2px solid grey; */
  /* border-radius: 10px; */
}
.bar {
  /* background-color: black; */
  min-width: 10px;
}
/*
#899097
#6c757d
 */
</style>
