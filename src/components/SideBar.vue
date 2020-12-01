<template>
  <b-sidebar id="info" width="650px" no-header backdrop right shadow>

    <template>
      <div class="sidebar p-4">

        <h4 id="sidebar__title sidebar-no-header-title">{{ current.name }}</h4>

        <blockquote class="sidebar__description">

          <p v-html="current.description" class="sidebar__description--description">
            {{ current.description }}
          </p>

          <footer class="sidebar__description--footer blockquote-footer">
            <cite title="Source Title">
              <a :href="current.href" target="_blank" class="">Wikipedia</a>
            </cite>
          </footer>

          <p class="sidebar__description--speed">
            <b>Time Complexity</b>: <span v-html="current.speed">{{ current.speed }}</span>
          </p>

        </blockquote>

        <b-tabs class="sidebar__code" content-class="mt-3">
          <b-tab
            v-for="(language, index) in current.languages"
            :class="`sidebar__code--tab sidebar__code--${language}`"
            :key="index"
            :title="language"
            active
          >
             <!-- ADD OVERFLOW SCROLL -->
            <AlgorithmCode :algorithm="current.id" :language="index"/>
          </b-tab>
        </b-tabs>

      </div>
    </template>

  </b-sidebar>
</template>

<script>
import AlgorithmCode from '@/components/AlgorithmCode.vue';

export default {
  name: 'SideBar',

  components: {
    AlgorithmCode,
  },

  props: {
    algorithmsProp: {
      type: Array,
      required: true,
    },
    selected: {
      type: Number,
      required: true,
    },
  },

  data() {
    return {
      algorithms: [
        {
          id: this.algorithmsProp[0].id,
          name: this.algorithmsProp[0].name,
          description: '<b>Bubble sort</b>, sometimes referred to as <b>sinking sort</b>, is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted.',
          speed: '&nbsp; O(n<sup>2</sup>) &nbsp; Ω(n)',
          href: 'https://en.wikipedia.org/wiki/Bubble_sort',
          languages: ['C', 'Python', 'JavaScript'],
        },
        {
          id: this.algorithmsProp[1].id,
          name: this.algorithmsProp[1].name,
          description: '<b>Selection sort</b> is a sorting algorithm that divides the input list into two parts: a <b>sorted sublist</b> of items which is built up from left to right at the front (left) of the list and a <b>sublist</b> of the remaining unsorted items that occupy the rest of the list. <br/>Initially, the <b>sorted sublist</b> is empty and the <b>unsorted sublist</b> is the entire input list. The algorithm proceeds by finding the smallest element in the unsorted sublist, exchanging (swapping) it with the leftmost unsorted element (putting it in sorted order), and moving the sublist boundaries one element to the right.',
          speed: '&nbsp; O(n<sup>2</sup>) &nbsp; Ω(n<sup>2</sup>)',
          href: 'https://en.wikipedia.org/wiki/Selection_sort',
          languages: ['C', 'Python', 'JavaScript'],
        },
        {
          id: this.algorithmsProp[2].id,
          name: this.algorithmsProp[2].name,
          description: '<b>Insertion sort</b> is a sorting algorithm that iterates, consuming one input element each repetition, and grows a sorted output list. At each iteration, insertion sort <b>removes</b> one element from the input data, <b>finds the location</b> it belongs within the sorted list, and <b>inserts</b> it there. It repeats until no input elements remain.',
          speed: '&nbsp; O(n<sup>2</sup>) &nbsp; Ω(n)',
          href: 'https://en.wikipedia.org/wiki/Insertion_sort',
          languages: ['C', 'Python', 'JavaScript'],
        },
        {
          id: this.algorithmsProp[3].id,
          name: this.algorithmsProp[3].name,
          description: '<b>Merge sort</b> is a divide and conquer algorithm that was invented by <b>John von Neumann</b> in 1945. It works by dividing the unsorted list into n sublists, each containing one element (a list of one element is considered sorted) and then by repeatedly merging sublists to produce new sorted sublists until there is only one sublist remaining. This will be the sorted list.',
          speed: '&nbsp; O(n <i>log</i> n) &nbsp; Ω(n <i>log</i> n)',
          href: 'https://en.wikipedia.org/wiki/Merge_sort',
          languages: ['C', 'Python', 'JavaScript'],
        },
      ],
    };
  },

  computed: {
    current() {
      return this.algorithms[this.selected];
    },
  },
};
</script>

<style>
.sidebar__description--footer {
  text-align: right;
  margin-right: 10px;
}
.sidebar__description--footer a {
  color: inherit;
}
.sidebar__description--footer a:hover {
  color: inherit;
}
.sidebar__description--speed {
  margin-top: 1rem;
  margin-bottom: 2rem;
}

</style>
