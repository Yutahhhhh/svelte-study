<script lang="ts">
  let count = $state<number>(0);

  function increment(): void {
    count += 1;
  }

  function decrement(): void {
    count -= 1;
  }

  function reset(): void {
    count = 0;
  }
</script>

<div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow-lg">
  <h2 class="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Svelte Counter Component</h2>
  <p class="text-3xl font-bold text-gray-900 dark:text-white mb-6">Count: {count}</p>
  <div class="flex gap-3 justify-center">
    <button 
      onclick={increment}
      class="bg-green-500 hover:bg-green-600 text-white font-medium px-4 py-2 rounded transition-colors duration-200"
    >
      +
    </button>
    <button 
      onclick={decrement}
      class="bg-red-500 hover:bg-red-600 text-white font-medium px-4 py-2 rounded transition-colors duration-200"
    >
      -
    </button>
    <button 
      onclick={reset}
      class="bg-blue-500 hover:bg-blue-600 text-white font-medium px-4 py-2 rounded transition-colors duration-200"
    >
      Reset
    </button>
  </div>
</div>
