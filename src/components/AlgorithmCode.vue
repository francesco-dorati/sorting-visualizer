<template>
  <div class="code">
    <!-- Bubble Sort -->
    <b-card v-if="algorithm == 0" class="code__card code__card--bubble">
      <!-- C -->
      <div v-if="language == 0">

        <span>
          <span class="purple">void </span>
          <span class="blue">bubbleSort</span>
          <span>(</span>
          <span class="purple">int </span>
          <span class="red">n</span>
          <span>, </span>
          <span class="purple">int </span>
          <span class="red">array</span>
          <span>[]) {</span>
        </span><br/>
        <span class="tab-1">
          <span class="purple">int </span>
          <span>swaps</span>
          <span> = </span>
          <span class="orange">-1</span>
          <span>;</span>
        </span><br/>
        <span class="tab-1">
          <span class="grey">// Repeats until no swaps</span>
        </span><br/>
        <span class="tab-1">
          <span class="purple">while</span>
          <span>(</span>
          <span>swaps </span>
          <span>!= </span>
          <span class="orange">0</span>
          <span>) {</span>
        </span><br/>
        <span class="tab-2">
          <span>swaps </span>
          <span> = </span>
          <span class="orange">0</span>
          <span>;</span>
        </span><br/>
        <span class="tab-2">
          <span class="grey">// Compare every element</span>
        </span><br/>
        <span class="tab-2">
          <span class="purple">for</span>
          <span>(</span>
          <span class="purple">int </span>
          <span>i </span>
          <span> = </span>
          <span class="orange">0</span>
          <span>; </span>
          <span>i </span>
          <span>&lt; </span>
          <span class="red">n </span>
          <span> - </span>
          <span class="orange">1</span>
          <span>; </span>
          <span>i</span>
          <span>++</span>
          <span>) {</span>
        </span><br/>
        <span class="tab-3">
          <span class="purple">if</span>
          <span>(</span>
          <span class="red">array</span>
          <span>[</span>
          <span>i</span>
          <span>] </span>
          <span>&gt; </span>
          <span class="red">array</span>
          <span>[</span>
          <span>i </span>
          <span>+ </span>
          <span class="orange">1</span>
          <span>]) {</span>
        </span><br/>
        <span class="tab-4">
          <span class="grey">// Swap if in wrong order</span>
        </span><br/>
        <span class="tab-4">
          <span class="purple">int </span>
          <span>tmp </span>
          <span> = </span>
          <span class="red">array</span>
          <span>[</span>
          <span>i</span>
          <span>];</span>
        </span><br/>
        <span class="tab-4">
          <span class="red">array</span>
          <span>[</span>
          <span>i</span>
          <span>] </span>
          <span> = </span>
          <span class="red">array</span>
          <span>[</span>
          <span>i </span>
          <span>+ </span>
          <span class="orange">1</span>
          <span>];</span>
        </span><br/>
        <span class="tab-4">
          <span class="red">array</span>
          <span>[</span>
          <span>i </span>
          <span>+ </span>
          <span class="orange">1</span>
          <span>] = </span>
          <span>tmp</span>
          <span>;</span>
        </span><br/>
        <br/>
        <span class="tab-4">
          <span>swaps</span>
          <span>++;</span>
        </span><br/>
        <span class="tab-3">
          <span>}</span>
        </span><br/>
        <span class="tab-2">
          <span>}</span>
        </span><br/>
        <span class="tab-1">
          <span>}</span>
        </span><br/>
        <span>
          <span>}</span>
        </span><br/>

      </div>

      <!-- Python -->
      <div v-if="language == 1">

        <span>
          <span class="purple">def </span>
          <span class="blue">bubble_sort</span>
          <span>(</span>
          <span class="red">array</span>
          <span>: </span>
          <span class="blue">list</span>
          <span>):</span>
        </span>
        <br/>
        <span class="tab-1">
          <span>swaps </span>
          <span> = </span>
          <span class="orange"> -1</span>
        </span><br/>
        <span class="tab-1">
          <span class="grey"># Repeats until no swaps</span>
        </span><br/>
        <span class="tab-1">
          <span class="purple">while </span>
          <span>swaps </span>
          <span>!= </span>
          <span class="orange">0</span>
          <span>:</span>
        </span><br/>
        <span class="tab-2">
          <span>swaps</span>
          <span> = </span>
          <span class="orange">0</span>
        </span><br/>
        <span class="tab-2">
          <span class="grey"># Compare every element</span>
        </span><br/>
        <span class="tab-2">
          <span class="purple">for </span>
          <span>i </span>
          <span class="purple">in </span>
          <span class="blue">range</span>
          <span>(</span>
          <span class="blue">len</span>
          <span>(</span>
          <span class="red">array</span>
          <span>) - </span>
          <span class="orange">1</span>
          <span>):</span>
        </span><br/>
        <span class="tab-3">
          <span class="purple">if </span>
          <span class="red">array</span>
          <span>[i] </span>
          <span>&gt; </span>
          <span class="red">array</span>
          <span>[i + </span>
          <span class="orange">1</span>
          <span>]:</span>
        </span><br/>
        <span class="tab-4">
          <span class="grey"># Swap if in wrong order</span>
        </span><br/>
        <span class="tab-4">
          <span>tmp </span>
          <span> = </span>
          <span class="red">array</span>
          <span>[i]</span>
        </span><br/>
        <span class="tab-4">
          <span class="red">array</span>
          <span>[i] = </span>
          <span class="red">array</span>
          <span>[i + </span>
          <span class="orange">1</span>
          <span>]</span>
        </span><br/>
        <span class="tab-4">
          <span class="red">array</span>
          <span>[i + </span>
          <span class="orange">1</span>
          <span>] = tmp</span>
        </span><br/>
        <br/>
        <span class="tab-4">
          <span>swaps += </span>
          <span class="orange">1</span>
        </span><br/>

      </div>

      <!-- JavaScript -->
      <div v-if="language == 2">
        <span>
          <span class="purple">const </span>
          <span class="blue">bubbleSort</span>
          <span> = </span>
          <span>(</span>
          <span class="red">array</span>
          <span>)</span>
          <span> => </span>
          <span>{</span>
        </span><br/>
        <span class="tab-1">
          <span class="purple">let </span>
          <span>swaps = </span>
          <span class="orange">-1</span>;
        </span><br/>
        <span class="tab-1">
          <span class="grey">// Repeats until no swaps</span>
        </span><br/>
        <span class="tab-1">
          <span class="purple">while </span>
          <span>(swaps !== </span>
          <span class="orange">0</span>
          <span>) {</span>
        </span><br/>
        <span class="tab-2">
          <span>swaps = </span>
          <span class="orange">0</span>;
        </span><br/>
        <span class="tab-2">
          <span class="grey">// Compare every element</span>
        </span><br/>
        <span class="tab-2">
          <span class="red">array</span>
          <span>.</span>
          <span class="blue">map</span>
          <span>((</span>
          <span>el</span>
          <span>, </span>
          <span>i</span>
          <span>) </span>
          <span class="purple"> => </span>
          <span>{</span>
        </span><br/>
        <span class="tab-3">
          <span class="purple">if </span>
          <span>(</span>
          <span>el </span>
          <span>> </span>
          <span class="red">array</span>
          <span>[</span>
          <span>i </span>
          <span>+ </span>
          <span class="orange">1</span>
          <span>]) {</span>
        </span><br/>
        <span class="tab-4">
          <span class="grey">// Swap if in wrong order</span>
        </span><br/>
        <span class="tab-4">
          <span class="red">array</span>
          <span>.</span>
          <span class="blue">splice</span>
          <span>(</span>
          <span>i</span>
          <span>, </span>
          <span class="orange">2</span>
          <span>, </span>
          <span class="red">array</span>
          <span>[</span>
          <span>i </span>
          <span>+ </span>
          <span class="orange">1</span>
          <span>], </span>
          <span>el</span>
          <span>);</span>
        </span><br/>
        <span class="tab-4">
          <span>swaps</span>
          <span>++</span>
          <span>;</span>
        </span><br/>
        <span class="tab-3">
          <span>}</span>
        </span><br/>
        <span class="tab-2">
          <span>});</span>
        </span><br/>
        <span class="tab-1">
          <span>}</span>
        </span><br/>
        <span>
          <span>};</span>
        </span><br/>

      </div>
    </b-card>

    <!-- Selection Sort -->
    <b-card v-if="algorithm == 1" class="code__card code__card--selection">
      <!-- C -->
      <div v-if="language == 0">
        <span>
          <span class="purple">void </span>
          <span class="blue">selectionSort</span>
          <span>(</span>
          <span class="purple">int </span>
          <span class="red">n</span>
          <span>, </span>
          <span class="purple">int </span>
          <span class="red">array</span>
          <span>[]) {</span>
        </span><br/>
        <span class="tab-1">
          <span class="purple">for </span>
          <span>(</span>
          <span class="purple">int </span>
          <span>i </span>
          <span> = </span>
          <span class="orange">0</span>
          <span>; </span>
          <span>i </span>
          <span>&lt; </span>
          <span class="red">n</span>
          <span>; </span>
          <span>i</span>
          <span>++</span>
          <span>) {</span>
        </span><br/>
        <span class="tab-2">
          <span class="purple">int </span>
          <span>min </span>
          <span> = </span>
          <span>i</span>
          <span>;</span>
        </span><br/>
        <span class="tab-2">
          <span class="grey">// Look for the smallest element</span>
        </span><br/>
        <span class="tab-2">
          <span class="purple">for </span>
          <span>(</span>
          <span class="purple">int </span>
          <span>j </span>
          <span> = </span>
          <span>i</span>
          <span>; </span>
          <span>j </span>
          <span>&lt; </span>
          <span class="red">n</span>
          <span>; </span>
          <span>j</span>
          <span>++</span>
          <span>) {</span>
        </span><br/>
        <span class="tab-3">
          <span class="purple">if </span>
          <span>(</span>
          <span class="red">array</span>
          <span>[</span>
          <span>j</span>
          <span>] </span>
          <span>&lt; </span>
          <span class="red">array</span>
          <span>[</span>
          <span>min</span>
          <span>]) {</span>
        </span><br/>
        <span class="tab-4">
          <span>min </span>
          <span> = </span>
          <span>j</span>
          <span>;</span>
        </span><br/>
        <span class="tab-3">
          <span>}</span>
        </span><br/>
        <span class="tab-2">
          <span>}</span>
        </span><br/>
        <span class="tab-2">
          <span class="grey">// Swap with the first unsorted element</span>
        </span><br/>
        <span class="tab-2">
          <span class="purple">int </span>
          <span>tmp </span>
          <span> = </span>
          <span class="red">array</span>
          <span>[</span>
          <span>min</span>
          <span>];</span>
        </span><br/>
        <span class="tab-2">
          <span class="red">array</span>
          <span>[</span>
          <span>min</span>
          <span>] </span>
          <span> = </span>
          <span class="red">array</span>
          <span>[</span>
          <span>i</span>
          <span>];</span>
        </span><br/>
        <span class="tab-2">
          <span class="red">array</span>
          <span>[</span>
          <span>i</span>
          <span>] </span>
          <span> = </span>
          <span>tmp</span>
          <span>;</span>
        </span><br/>
        <span class="tab-1">
          <span>}</span>
        </span><br/>
        <span>
          <span>}</span>
        </span>
      </div>

      <!-- Python -->
      <div v-if="language == 1">
        <span>
          <span class="purple">def </span>
          <span class="blue">selection_sort</span>
          <span>(</span>
          <span class="red">array</span>
          <span>: </span>
          <span class="blue">list</span>
          <span>):</span>
        </span><br/>
        <span class="tab-1">
          <span class="purple">for </span>
          <span>i </span>
          <span class="purple">in </span>
          <span class="blue">range</span>
          <span>(</span>
          <span class="blue">len</span>
          <span>(</span>
          <span class="red">array</span>
          <span>)):</span>
        </span><br/>
        <span class="tab-2">
          <span>minimum </span>
          <span> = </span>
          <span>i</span>
        </span><br/>
        <br/>
        <span class="tab-2">
          <span class="grey"># Look for the smallest element</span>
        </span><br/>
        <span class="tab-2">
          <span class="purple">for </span>
          <span>j </span>
          <span class="purple">in </span>
          <span class="blue">range</span>
          <span>(</span>
          <span>i</span>
          <span>, </span>
          <span class="blue">len</span>
          <span>(</span>
          <span class="red">array</span>
          <span>)):</span>
        </span><br/>
        <span class="tab-3">
          <span class="purple">if </span>
          <span class="red">array</span>
          <span>[</span>
          <span>j</span>
          <span>] </span>
          <span>&lt; </span>
          <span class="red">array</span>
          <span>[</span>
          <span>minimum</span>
          <span>]:</span>
        </span><br/>
        <span class="tab-4">
          <span>minimum </span>
          <span> = </span>
          <span>j</span>
        </span><br/>
        <br/>
        <span class="tab-2">
          <span class="grey"># Swap with the first unsorted element</span>
        </span><br/>
        <span class="tab-2">
          <span>tmp </span>
          <span> = </span>
          <span class="red">array</span>
          <span>[</span>
          <span>minimum</span>
          <span>]</span>
        </span><br/>
        <span class="tab-2">
          <span class="red">array</span>
          <span>[</span>
          <span>minimum</span>
          <span>] </span>
          <span> = </span>
          <span class="red">array</span>
          <span>[</span>
          <span>i</span>
          <span>]</span>
        </span><br/>
        <span class="tab-2">
          <span class="red">array</span>
          <span>[</span>
          <span>i</span>
          <span>] </span>
          <span> =  </span>
          <span>tmp</span>
        </span><br/>
      </div>

      <!-- JavaScript -->
      <div v-if="language == 2">
        <span>
          <span class="purple">const </span>
          <span class="blue">selectionSort </span>
          <span> = </span>
          <span>(</span>
          <span class="red">array</span>
          <span>) </span>
          <span class="purple"> => </span>
          <span>{</span>
        </span><br/>
        <span class="tab-1">
          <span class="purple">for </span>
          <span>(</span>
          <span class="purple">const </span>
          <span>i </span>
          <span class="purple">in </span>
          <span class="red">array</span>
          <span>) {</span>
        </span><br/>
        <br/>
        <span class="tab-2">
          <span class="grey">// Look for the smallest element</span>
        </span><br/>
        <span class="tab-2">
          <span class="purple">const </span>
          <span>min </span>
          <span> = </span>
          <span class="red">array</span>
        </span><br/>
        <span class="tab-3">
          <span>.</span>
          <span class="blue">slice</span>
          <span>(i)</span>
        </span><br/>
        <span class="tab-3">
          <span>.</span>
          <span class="blue">reduce</span>
          <span>((</span>
          <span>min</span>
          <span>, </span>
          <span>el</span>
          <span>) </span>
          <span class="purple"> => </span>
          <span>el </span>
          <span>&lt; </span>
          <span class="red">array</span>
          <span>[min] </span>
          <span>? </span>
          <span class="red">array</span>
          <span>.</span>
          <span class="blue">indexOf</span>
          <span>(</span>
          <span>el</span>
          <span>) </span>
          <span>: </span>
          <span>min</span>
          <span>, </span>
          <span>i</span>
          <span>);</span>
        </span><br/>
        <br/>
        <span class="tab-2">
          <span class="grey">// Swap with the first unsorted element</span>
        </span><br/>
        <span class="tab-2">
          <span class="purple">const </span>
          <span>tmp </span>
          <span> = </span>
          <span class="red">array</span>
          <span>[</span>
          <span>min</span>
          <span>];</span>
        </span><br/>
        <span class="tab-2">
          <span class="red">array</span>
          <span>[</span>
          <span>min</span>
          <span>] </span>
          <span> = </span>
          <span class="red">array</span>
          <span>[</span>
          <span>i</span>
          <span>];</span>
        </span><br/>
        <span class="tab-2">
          <span class="red">array</span>
          <span>[</span>
          <span>i</span>
          <span>] </span>
          <span> = </span>
          <span>tmp</span>
          <span>;</span>
        </span><br/>
        <span class="tab-1">
          <span>}</span>
        </span><br/>
        <span>
          <span>};</span>
        </span><br/>
      </div>
    </b-card>

    <!-- Insertion Sort -->
    <b-card v-if="algorithm == 2" class="code__card code__card--insertion">
      <!-- C -->
      <div v-if="language == 0">
        <span>
          <span class="purple">void </span>
          <span class="blue">insertionSort</span>
          <span>(</span>
          <span class="purple">int </span>
          <span class="red">n</span>
          <span>, </span>
          <span class="purple">int </span>
          <span class="red">array</span>
          <span>[]) {</span>
        </span><br/>
        <span class="tab-1">
          <span class="purple">for </span>
          <span>(</span>
          <span class="purple">int </span>
          <span>i </span>
          <span> = </span>
          <span class="orange">1</span>
          <span>; </span>
          <span>i </span>
          <span>&lt; </span>
          <span class="red">n</span>
          <span>; </span>
          <span>i</span>
          <span>++</span>
          <span>) {</span>
        </span><br/>
        <span class="tab-2">
          <span class="grey">// Swap the firt unsorted element until it finds it's place</span>
        </span><br/>
        <span class="tab-2">
          <span class="purple">for </span>
          <span>(</span>
          <span class="purple">int </span>
          <span>j </span>
          <span> = </span>
          <span>i </span>
          <span> - </span>
          <span class="orange">1</span>
          <span>; </span>
          <span>j </span>
          <span>&gt;= </span>
          <span class="orange">0 </span>
          <span class="purple">|| </span>
          <span class="red">array</span>
          <span>[</span>
          <span>j </span>
          <span>+ </span>
          <span class="orange">1</span>
          <span>] </span>
          <span>&gt; </span>
          <span class="red">array</span>
          <span>[</span>
          <span>j</span>
          <span>]</span>
          <span>; </span>
          <span>j</span>
          <span>--</span>
          <span>) {</span>
        </span><br/>
        <span class="tab-3">
          <span class="purple">int </span>
          <span>tmp </span>
          <span> = </span>
          <span class="red">array</span>
          <span>[</span>
          <span>j</span>
          <span>];</span>
        </span><br/>
        <span class="tab-3">
          <span class="red">array</span>
          <span>[</span>
          <span>j</span>
          <span>] </span>
          <span> = </span>
          <span class="red">array</span>
          <span>[</span>
          <span>j </span>
          <span>+ </span>
          <span class="orange">1</span>
          <span>];</span>
        </span><br/>
        <span class="tab-3">
          <span class="red">array</span>
          <span>[</span>
          <span>j </span>
          <span>+ </span>
          <span class="orange">1</span>
          <span>] </span>
          <span> = </span>
          <span>tmp</span>
          <span>; </span>
        </span><br/>
        <span class="tab-2">
          <span>}</span>
        </span><br/>
        <span class="tab-1">
          <span>}</span>
        </span><br/>
        <span>
          <span>}</span>
        </span><br/>
      </div>

      <!-- Python -->
      <div v-if="language == 1">
        <span>
          <span class="purple">def </span>
          <span class="blue">insertion_sort</span>
          <span>(</span>
          <span class="red">array</span>
          <span>: </span>
          <span class="blue">list</span>
          <span>):</span>
        </span><br/>
        <span class="tab-1">
          <span class="purple">for </span>
          <span>i </span>
          <span class="purple">in </span>
          <span class="blue">range</span>
          <span>(</span>
          <span class="orange">1</span>
          <span>, </span>
          <span class="blue">len</span>
          <span>(</span>
          <span class="red">array</span>
          <span>)):</span>
        </span><br/>
        <span class="tab-2">
          <span class="grey"># Swap the firt unsorted element until it finds it's place</span>
        </span><br/>
        <span class="tab-2">
          <span class="purple">for </span>
          <span>j </span>
          <span class="purple">in </span>
          <span class="blue">reversed</span>
          <span>(</span>
          <span class="blue">range</span>
          <span>(</span>
          <span>i</span>
          <span>)):</span>
        </span><br/>
        <span class="tab-3">
          <span class="purple">if </span>
          <span class="red">array</span>
          <span>[</span>
          <span>j </span>
          <span>+ </span>
          <span class="orange">1</span>
          <span>] </span>
          <span>&lt; </span>
          <span class="red">array</span>
          <span>[</span>
          <span>j</span>
          <span>]:</span>
        </span><br/>
        <span class="tab-4">
          <span>tmp </span>
          <span> = </span>
          <span class="red">array</span>
          <span>[</span>
          <span>j </span>
          <span>+ </span>
          <span class="orange">1</span>
          <span>]</span>
        </span><br/>
        <span class="tab-4">
          <span class="red">array</span>
          <span>[</span>
          <span>j </span>
          <span>+ </span>
          <span class="orange">1</span>
          <span>] </span>
          <span> = </span>
          <span class="red">array</span>
          <span>[</span>
          <span>j</span>
          <span>]</span>
        </span><br/>
        <span class="tab-4">
          <span class="red">array</span>
          <span>[</span>
          <span>i</span>
          <span>] </span>
          <span> = </span>
          <span>tmp</span>
        </span><br/>
        <span class="tab-3">
          <span class="purple">else</span>
          <span>:</span>
        </span><br/>
        <span class="tab-4">
          <span class="purple">break</span>
        </span><br/>
      </div>

      <!-- JavaScript -->
      <div v-if="language == 2">

        <span>
          <span class="purple">const </span>
          <span class="blue">insertionSort </span>
          <span> = </span>
          <span>(</span>
          <span class="red">array</span>
          <span>) </span>
          <span class="purple"> => </span>
          <span>{</span>
        </span><br/>
        <span class="tab-1">
          <span class="red">array</span>
        </span><br/>
        <span class="tab-2">
          <span>.</span>
          <span class="blue">slice</span>
          <span>(</span>
          <span class="orange">1</span>
          <span>)</span>
        </span><br/>
        <span class="tab-2">
          <span>.</span>
          <span class="blue">map</span>
          <span>((</span>
          <span>_, i</span>
          <span>) </span>
          <span class="purple">=> </span>
          <span>{ </span>
        </span><br/>
        <span class="tab-3">
          <span class="grey">// Swap the firt unsorted element until it finds it's place</span>
        </span><br/>
        <span class="tab-3">
          <span class="purple">for </span>
          <span>(</span>
          <span class="purple">let </span>
          <span>j </span>
          <span>= </span>
          <span>i </span>
          <span>- </span>
          <span class="orange">1</span>
          <span>; </span>
          <span>j </span>
          <span>&gt;= </span>
          <span class="orange">0</span>
          <span>; </span>
          <span>j</span>
          <span>--) {</span>
        </span><br/>
        <span class="tab-4">
          <span class="purple">if </span>
          <span>(</span>
          <span class="red">array</span>
          <span>[</span>
          <span>j </span>
          <span>+ </span>
          <span class="orange">1</span>
          <span>] </span>
          <span>&lt; </span>
          <span class="red">array</span>
          <span>[</span>
          <span>j</span>
          <span>]) {</span>
        </span><br/>
        <span class="tab-5">
          <span class="red">array</span>
          <span>.</span>
          <span class="blue">splice</span>
          <span>(</span>
          <span>j</span>
          <span>, </span>
          <span class="orange">2</span>
          <span>, </span>
          <span class="red">array</span>
          <span>[</span>
          <span>j </span>
          <span>+ </span>
          <span class="orange">1</span>
          <span>]</span>
          <span>, </span>
          <span class="red">array</span>
          <span>[</span>
          <span>j</span>
          <span>]);</span>
        </span><br/>
        <span class="tab-4">
          <span>} </span>
          <span class="purple">else </span>
          <span>{</span>
        </span><br/>
        <span class="tab-5">
          <span class="purple">break</span>
          <span>;</span>
        </span><br/>
        <span class="tab-4">
          <span>}</span>
        </span><br/>
        <span class="tab-3">
          <span>}</span>
        </span><br/>
        <span class="tab-2">
          <span>});</span>
        </span><br/>
        <span>
          <span>};</span>
        </span><br/>
      </div>
    </b-card>

    <!-- Merge Sort -->
    <b-card v-if="algorithm == 3" class="code__card code__card--merge">
      <!-- C -->
      <div v-if="language == 0">
        <span>
          <span class="purple">#include </span>
          <span class="green">&lt;stdlib.h&gt;</span>
        </span><br/>
        <br/>
        <span>
          <span class="purple">void </span>
          <span class="blue">mergeSort</span>
          <span>(</span>
          <span class="purple">int </span>
          <span class="red">n</span>
          <span>, </span>
          <span class="purple">int </span>
          <span class="red">array</span>
          <span>[]) {</span>
        </span><br/>
        <span class="tab-1">
          <span class="purple">if </span>
          <span>(</span>
          <span class="red">n </span>
          <span> == </span>
          <span class="orange">1</span>
          <span>) </span>
          <span class="purple">return</span>
          <span>; </span>
          <span class="grey">// sorted</span>
        </span><br/>
        <br/>
        <span class="tab-1">
          <span class="purple">int </span>
          <span>n1 </span>
          <span> = </span>
          <span class="red">n</span>
          <span>/</span>
          <span class="orange">2</span>
          <span>;</span>
        </span><br/>
        <span class="tab-1">
          <span class="purple">int </span>
          <span>n2 </span>
          <span> = </span>
          <span class="red">n </span>
          <span> - </span>
          <span>n1</span>
          <span>;</span>
        </span><br/>
        <br/>
        <span class="tab-1">
          <span class="grey">// Sort each part</span>
        </span><br/>
        <span class="tab-1">
          <span class="blue">mergeSort</span>
          <span>(</span>
          <span>n1</span>
          <span>, </span>
          <span class="red">array</span>
          <span>);</span>
        </span><br/>
        <span  class="tab-1">
          <span class="blue">mergeSort</span>
          <span>(</span>
          <span>n2</span>
          <span>, </span>
          <span class="red">array </span>
          <span>+ </span>
          <span>n1</span>
          <span>);</span>
        </span><br/>
        <br/>
        <span class="tab-1">
          <span class="purple">int *</span>
          <span>tmp </span>
          <span> = </span>
          <span>(</span>
          <span class="purple">int *</span>
          <span>) </span>
          <span class="blue">malloc</span>
          <span>(</span>
          <span class="red">n </span>
          <span>* </span>
          <span class="orange">4</span>
          <span>);</span>
        </span><br/>
        <br/>
        <span class="tab-1">
          <span class="grey">// Merge the two parts</span>
        </span><br/>
        <span class="tab-1">
          <span class="purple">for </span>
          <span>(</span>
          <span class="purple">int </span>
          <span>i </span>
          <span> = </span>
          <span class="orange">0</span>
          <span>, </span>
          <span>j </span>
          <span> = </span>
          <span class="orange">0</span>
          <span>, </span>
          <span>k </span>
          <span> = </span>
          <span>n1</span>
          <span>; </span>
          <span>j </span>
          <span>&lt;= </span>
          <span>n1 </span>
          <span>&& </span>
          <span>k </span>
          <span>&lt;= </span>
          <span class="red">n</span>
          <span>; </span>
          <span>i</span>
          <span>++</span>
          <span>) {</span>
        </span><br/>
        <span class="tab-2">
          <span class="purple">if </span>
          <span>((</span>
          <span>k </span>
          <span> == </span>
          <span class="red">n </span>
          <span>|| </span>
          <span class="red">array</span>
          <span>[</span>
          <span>j</span>
          <span>] </span>
          <span>&lt; </span>
          <span class="red">array</span>
          <span>[</span>
          <span>k</span>
          <span>]) </span>
          <span>&& </span>
          <span>j </span>
          <span>!= </span>
          <span>n1</span>
          <span>) {</span>
        </span><br/>
        <span class="tab-3">
          <span>tmp</span>
          <span>[</span>
          <span>i</span>
          <span>] </span>
          <span> = </span>
          <span class="red">array</span>
          <span>[</span>
          <span>j</span>
          <span>];</span>
        </span><br/>
        <span class="tab-3">
          <span>j</span>
          <span>++</span>
          <span>;</span>
        </span><br/>
        <span class="tab-2">
          <span>} </span>
          <span class="purple">else </span>
          <span>{</span>
        </span><br/>
        <span class="tab-3">
          <span>tmp</span>
          <span>[</span>
          <span>i</span>
          <span>] </span>
          <span> = </span>
          <span class="red">array</span>
          <span>[</span>
          <span>k</span>
          <span>];</span>
        </span><br/>
        <span class="tab-3">
          <span>k</span>
          <span>++</span>
          <span>;</span>
        </span><br/>
        <span class="tab-2">
          <span>}</span>
        </span><br/>
        <span class="tab-1">
          <span>}</span>
        </span><br/>
        <br/>
        <span class="tab-1">
          <span class="purple">for </span>
          <span>(</span>
          <span class="purple">int </span>
          <span>i </span>
          <span> = </span>
          <span class="orange">0</span>
          <span>; </span>
          <span>i </span>
          <span>&lt; </span>
          <span class="red">n</span>
          <span>; </span>
          <span>i</span>
          <span>++</span>
          <span>) {</span>
        </span><br/>
        <span class="tab-2">
          <span class="purple">array</span>
          <span>[</span>
          <span>i</span>
          <span>] </span>
          <span> = </span>
          <span>tmp</span>
          <span>[</span>
          <span>i</span>
          <span>];</span>
        </span><br/>
        <span class="tab-1">
          <span>}</span>
        </span><br/>
        <br/>
        <span class="tab-1">
          <span class="blue">free</span>
          <span>(</span>
          <span>tmp</span>
          <span>);</span>
        </span><br/>
        <span>
          <span>}</span>
        </span><br/>
      </div>

      <!-- Python -->
      <div v-if="language == 1">
        <span>
          <span class="purple">from </span>
          <span>math </span>
          <span class="purple">import </span>
          <span>floor</span>
        </span><br/>
        <br/>
        <span>
          <span class="purple">def </span>
          <span class="blue">merge_sort</span>
          <span>(</span>
          <span class="red">array</span>
          <span>: </span>
          <span class="blue">list</span>
          <span>):</span>
        </span><br/>
        <span class="tab-1">
          <span class="purple">if </span>
          <span class="blue">len</span>
          <span>(</span>
          <span class="red">array</span>
          <span>) </span>
          <span>== </span>
          <span class="orange">1</span>
          <span>:</span>
        </span><br/>
        <span class="tab-2">
          <span class="purple">return </span>
          <span class="red">array </span>
          <span class="grey"># sorted</span>
        </span><br/>
        <br/>
        <span class="tab-1">
          <span>half </span>
          <span> = </span>
          <span class="blue">floor</span>
          <span>(</span>
          <span class="blue">len</span>
          <span>(</span>
          <span class="red">array</span>
          <span>)/</span>
          <span class="orange">2</span>
          <span>)</span>
        </span><br/>
        <br/>
        <span class="tab-1">
          <span class="grey"># Sort each part</span>
        </span><br/>
        <span class="tab-1">
          <span>left </span>
          <span> = </span>
          <span class="blue">merge_sort</span>
          <span>(</span>
          <span class="red">array</span>
          <span>[</span>
          <span class="orange">0</span>
          <span>:</span>
          <span>half</span>
          <span>])</span>
        </span><br/>
        <span class="tab-1">
          <span>right </span>
          <span> = </span>
          <span class="blue">merge_sort</span>
          <span>(</span>
          <span class="red">array</span>
          <span>[</span>
          <span>half</span>
          <span>:</span>
          <span>])</span>
        </span><br/>
        <br/>
        <span class="tab-1">
          <span>tmp, </span>
          <span>l, </span>
          <span>r, </span>
          <span>lenl, </span>
          <span>lenr </span>
          <span> = </span>
          <span>[]</span>
          <span>, </span>
          <span class="orange">0</span>
          <span>, </span>
          <span class="orange">0</span>
          <span>, </span>
          <span class="blue">len</span>
          <span>(</span>
          <span>left</span>
          <span>)</span>
          <span>, </span>
          <span class="blue">len</span>
          <span>(</span>
          <span>right</span>
          <span>)</span>
        </span><br/>
        <br/>
        <span class="tab-1">
          <span class="grey"># Merge the two parts</span>
        </span><br/>
        <span class="tab-1">
          <span class="purple">while </span>
          <span>l </span>
          <span>&lt; </span>
          <span>lenl </span>
          <span class="purple">or </span>
          <span>r </span>
          <span>&lt; </span>
          <span>lenr</span>
          <span>:</span>
        </span><br/>
        <span class="tab-2">
          <span class="purple">if </span>
          <span>l </span>
          <span>!= </span>
          <span>lenl </span>
          <span class="purple">and </span>
          <span>(</span>
          <span>r </span>
          <span> == </span>
          <span>lenr </span>
          <span class="purple">or </span>
          <span>left</span>
          <span>[</span>
          <span>l</span>
          <span>] </span>
          <span>&lt; </span>
          <span>right</span>
          <span>[</span>
          <span>r</span>
          <span>]):</span>
        </span><br/>
        <span class="tab-3">
          <span>tmp</span>
          <span>.</span>
          <span class="blue">append</span>
          <span>(</span>
          <span>left</span>
          <span>[</span>
          <span>l</span>
          <span>])</span>
        </span><br/>
        <span class="tab-3">
          <span>l </span>
          <span>+= </span>
          <span class="orange">1</span>
        </span><br/>
        <span class="tab-2">
          <span class="purple">else</span>
          <span>:</span>
        </span><br/>
        <span class="tab-3">
          <span>tmp</span>
          <span>.</span>
          <span class="blue">append</span>
          <span>(</span>
          <span>right</span>
          <span>[</span>
          <span>r</span>
          <span>])</span>
        </span><br/>
        <span class="tab-3">
          <span>r </span>
          <span>+= </span>
          <span class="orange">1</span>
        </span><br/>
        <br/>
        <span class="tab-1">
          <span class="purple">for </span>
          <span>i </span>
          <span class="purple">in </span>
          <span class="blue">range</span>
          <span>(</span>
          <span class="blue">len</span>
          <span>(</span>
          <span class="red">array</span>
          <span>)):</span>
        </span><br/>
        <span class="tab-2">
          <span class="red">array</span>
          <span>[</span>
          <span>i</span>
          <span>] </span>
          <span>= </span>
          <span>tmp</span>
          <span>[</span>
          <span>i</span>
          <span>]</span>
        </span><br/>
        <br/>
        <span class="tab-1">
          <span class="purple">return </span>
          <span class="red">array</span>
        </span><br/>
      </div>

      <!-- JavaScript -->
      <div v-if="language == 2">
        <span>
          <span class="purple">const </span>
          <span class="blue">mergeSort </span>
          <span> = </span>
          <span>(</span>
          <span class="red">array</span>
          <span>) </span>
          <span class="purple"> => </span>
          <span>{</span>
        </span><br/>
        <span class="tab-1">
          <span class="purple">if </span>
          <span>(</span>
          <span class="red">array</span>
          <span>.</span>
          <span class="blue">length </span>
          <span> == </span>
          <span class="orange">1</span>
          <span>) </span>
          <span class="purple">return </span>
          <span class="red">array</span>
          <span>; </span>
          <span class="grey">// sorted</span>
        </span><br/>
        <br/>
        <span class="tab-1">
          <span class="purple">const </span>
          <span>half </span>
          <span> = </span>
          <span>Math</span>
          <span>.</span>
          <span class="blue">floor</span>
          <span>(</span>
          <span class="red">array</span>
          <span>.</span>
          <span class="blue">length</span>
          <span>/</span>
          <span class="orange">2</span>
          <span>);</span>
        </span><br/>
        <br/>
        <span class="tab-1">
          <span class="grey">// Sort each part</span>
        </span><br/>
        <span class="tab-1">
          <span class="purple">const </span>
          <span>left </span>
          <span> = </span>
          <span class="blue">mergeSort</span>
          <span>(</span>
          <span class="red">array</span>
          <span>.</span>
          <span class="blue">slice</span>
          <span>(</span>
          <span class="orange">0</span>
          <span>, </span>
          <span>half</span>
          <span>));</span>
        </span><br/>
        <span class="tab-1">
          <span class="purple">const </span>
          <span>right </span>
          <span> = </span>
          <span class="blue">mergeSort</span>
          <span>(</span>
          <span class="red">array</span>
          <span>.</span>
          <span class="blue">slice</span>
          <span>(</span>
          <span>half</span>
          <span>));</span>
        </span><br/>
        <br/>
        <span class="tab-1">
          <span class="purple">const </span>
          <span>tmp </span>
          <span> = </span>
          <span>[];</span>
        </span><br/>
        <span class="tab-1">
          <span class="purple">let </span>
          <span>l </span>
          <span> = </span>
          <span class="orange">0</span>
          <span>, </span>
          <span>r </span>
          <span> = </span>
          <span class="orange">0</span>
          <span>;</span>
        </span><br/>
        <br/>
        <span class="tab-1">
          <span class="grey">// Merge the two parts</span>
        </span><br/>
        <span class="tab-1">
          <span class="purple">while </span>
          <span>(</span>
          <span>l </span>
          <span>&lt; </span>
          <span>left</span>
          <span>.</span>
          <span class="blue">length </span>
          <span class="purple">|| </span>
          <span>r </span>
          <span>&lt; </span>
          <span>right</span>
          <span>.</span>
          <span class="blue">length</span>
          <span>) {</span>
        </span><br/>
        <span class="tab-2">
          <span class="purple">if </span>
          <span>(</span>
          <span>l </span>
          <span>!== </span>
          <span>left</span>
          <span>.</span>
          <span class="blue">length </span>
          <span class="purple">&& </span>
          <span>(</span>
          <span>r </span>
          <span>=== </span>
          <span>right</span>
          <span>.</span>
          <span class="blue">length </span>
          <span class="purple">|| </span>
          <span>left</span>
          <span>[</span>
          <span>l</span>
          <span>] </span>
          <span>&lt; </span>
          <span>right</span>
          <span>[</span>
          <span>r</span>
          <span>])) {</span>
        </span><br/>
        <span class="tab-3">
          <span>tmp</span>
          <span>.</span>
          <span class="blue">push</span>
          <span>(</span>
          <span>left</span>
          <span>[</span>
          <span>l</span>
          <span>++</span>
          <span>]);</span>
        </span><br/>
        <span class="tab-2">
          <span>} </span>
          <span class="purple">else </span>
          <span>{</span>
        </span><br/>
        <span class="tab-3">
          <span>tmp</span>
          <span>.</span>
          <span class="blue">push</span>
          <span>(</span>
          <span>right</span>
          <span>[</span>
          <span>r</span>
          <span>++</span>
          <span>]);</span>
        </span><br/>
        <span class="tab-2">
          <span>}</span>
        </span><br/>
        <span class="tab-1">
          <span>}</span>
        </span><br/>
        <br/>
        <span class="tab-1">
          <span class="purple">for </span>
          <span>(</span>
          <span>i </span>
          <span class="purple">in </span>
          <span>tmp</span>
          <span>) {</span>
        </span><br/>
        <span class="tab-2">
          <span class="red">array</span>
          <span>[</span>
          <span>i</span>
          <span>] </span>
          <span> = </span>
          <span>tmp</span>
          <span>[</span>
          <span>i</span>
          <span>];</span>
        </span><br/>
        <span class="tab-1">
          <span>}</span>
        </span><br/>
        <br/>
        <span class="tab-1">
          <span class="purple">return </span>
          <span class="red">array</span>
          <span>;</span>
        </span><br/>
        <span>
          <span>}</span>
        </span><br/>
      </div>
    </b-card>

  </div>
</template>

<script>
export default {
  name: 'AlgorithmCode',

  props: {
    algorithm: {
      type: Number,
      required: true,
    },
    language: {
      type: Number,
      required: true,
    },
  },

};
</script>

<style>
.code__card {
  overflow-y: scroll;
  width: 100%;
  max-height: 100%;
}
.code__card span{
  font-weight: 600;
}

.tab-1 {
  margin-left: 20px;
}
.tab-2 {
  margin-left: 40px;
}
.tab-3 {
  margin-left: 60px;
}
.tab-4 {
  margin-left: 80px;
}
.tab-5 {
  margin-left: 100px;
}

.purple {
  color: #7411ad;
}
.green {
  color: #28a745;
}
.orange {
  color: #ad6111;
}
.red {
  color: #c41d1d;
}
.blue {
  color: #2078d6;
}
.grey {
  color: #babec4;
}

</style>
