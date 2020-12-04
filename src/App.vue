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
          @click="changeAlgorithm(algorithm.id)"
        >
          {{ algorithm.name }}
        </b-nav-item>
      </b-nav>

    </div>

    <div class="body__bars--container">
      <div
        v-for="(item, index) in array"
        class="body__bars--bar"
        :key="item"
        :style="{
          height: `${5.5*item}px`,
          backgroundColor:
            colors.red.includes(index) ? '#dc3545' :
              colors.green.includes(index) ? '#28a745' :
                colors.blue.includes(index) ? '#007bff':
                  '#6c757d',
        }"
      >
      </div>
    </div>

    <SideBar :algorithmsProp="algorithms" :selected="selected"/>

  </div>
</template>

<script>
/* eslint-disable no-await-in-loop, no-param-reassign */
import SideBar from './components/SideBar.vue';
/*
TODO
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
      sorting: false,
      colors: {
        green: [],
        red: [],
        blue: [],
      },
      speed: 8,
    };
  },

  methods: {
    initializeArray() {
      for (let i = 1; i <= 100; i += 1) this.array.push(i);
    },

    randomizeArray() {
      if (this.sorting) this.stop();

      this.resetColors();

      this.array.sort(() => Math.random() - 0.5);
    },

    changeAlgorithm(index) {
      this.selected = index;

      if (!this.sorting) this.resetColors();
    },

    async start() {
      if (this.sorting) return;

      this.resetColors();

      this.sorting = true;

      switch (this.selected) {
        case 0:
          await this.bubbleSort();
          break;

        case 1:
          await this.selectionSort();
          break;

        case 2:
          await this.insertionSort();
          break;

        case 3:
          this.colors.red = [0, 0];
          await this.mergeSort(0, this.array.length)
            .then((mess) => { if (mess) this.stop(); });
          if (this.sorting) await this.endAnimation();
          break;

        default:
      }

      this.sorting = false;
    },

    async bubbleSort() {
      let swaps = -1;
      let sorted = this.array.length - 1;

      while (swaps !== 0) {
        swaps = 0;
        for (let i = 0; i < sorted; i += 1) {
          if (!this.sorting) return;

          this.resetColors(['red']);
          this.colors.red.push(i, i + 1);

          if (this.array[i] > this.array[i + 1]) {
            this.array.splice(i, 2, this.array[i + 1], this.array[i]);
            swaps += 1;
          }

          await this.sleep();
        }

        this.colors.green.push(sorted);
        sorted -= 1;

        if (!this.sorting) return;
      }

      this.endAnimation();
    },

    async selectionSort() {
      for (let i = 0; i < this.array.length; i += 1) {
        let m = i;

        this.colors.red = [i];
        this.colors.blue = [i];

        for (let j = i; j < this.array.length; j += 1) {
          if (!this.sorting) return;

          this.colors.red.splice(0, 1, j);

          if (this.array[j] < this.array[m]) {
            m = j;
            this.colors.blue.splice(0, 1, m);
          }

          await this.sleep();
        }

        if (!this.sorting) return;

        const tmp = this.array[m];
        this.array.splice(m, 1, this.array[i]);
        this.array.splice(i, 1, tmp);

        this.colors.green.push(i);
      }

      this.endAnimation();
    },

    async insertionSort() {
      this.colors.green = [0];

      for (let i = 1; i < this.array.length; i += 1) {
        for (let j = i - 1; j >= 0; j -= 1) {
          if (!this.sorting) return;

          this.colors.green.push(i);

          if (this.array[j + 1] < this.array[j]) {
            this.array.splice(j, 2, this.array[j + 1], this.array[j]);
          } else {
            break;
          }

          this.colors.red.splice(0, 1, j);
          await this.sleep();
          if (!this.sorting) return;
        }
      }

      this.endAnimation();
    },

    async mergeSort(start, end /* exclusive */) {
      if (!this.sorting) return 1;

      if (start === end - 1) return 0;

      const middle = Math.floor((start + end) / 2);

      await this.mergeSort(start, middle);
      await this.mergeSort(middle, end);

      let l = start;
      let r = middle;

      const array = [];

      while (l < middle && r < end) {
        if (this.array[r] < this.array[l]) {
          array.push(this.array[r]);
          r += 1;
        } else {
          array.push(this.array[l]);
          l += 1;
        }

        this.colors.red.splice(0, 2, r, l);
        await this.sleep();

        if (!this.sorting) return 1;
      }

      while (l < middle) {
        array.push(this.array[l]);
        l += 1;

        this.colors.red.splice(1, 1, l);
        await this.sleep();

        if (!this.sorting) return 1;
      }

      while (r < end) {
        array.push(this.array[r]);
        r += 1;

        this.colors.red.splice(0, 1, r);
        await this.sleep();

        if (!this.sorting) return 1;
      }

      this.array.splice(start, array.length, ...array);

      return 0;
    },

    async endAnimation() {
      this.resetColors(['green', 'blue']);

      for (let i = 0; i < this.array.length; i += 1) {
        this.resetColors(['red']);
        this.colors.green.push(i);
        this.colors.red.splice(0, 1, i);

        await this.sleep();
      }

      this.resetColors(['red']);
    },

    stop() {
      this.sorting = false;

      this.resetColors();
    },

    sleep() {
      return new Promise((resolve) => setTimeout(resolve, this.speed));
    },

    resetColors(colors = ['red', 'green', 'blue']) {
      if (colors.includes('red')) {
        this.colors.red = [];
      }
      if (colors.includes('green')) {
        this.colors.green = [];
      }
      if (colors.includes('blue')) {
        this.colors.blue = [];
      }
    },
  },

  mounted() {
    this.initializeArray();
    this.randomizeArray();
  },
};
/* eslint-enable no-await-in-loop, no-param-reassign  */
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
  margin-left: 200px;
}
.header__item--algorithm {
  margin: 5px;
}

.body__bars--container {
  display: flex;
  justify-content: space-around;
  align-items: flex-end;

  height: 80%;
  width: 80%;

  margin: auto;
  padding: 10px;
}
.body__bars--bar {
  min-width: 10px;
}
</style>
