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

<div class="card p-6">
  <h2 class="heading-3 mb-4">Svelte Counter Component</h2>
  <p class="text-3xl font-bold mb-6 text-center">Count: {count}</p>
  <div class="flex-center gap-3">
    <button 
      onclick={increment}
      class="btn-primary"
    >
      +
    </button>
    <button 
      onclick={decrement}
      class="btn-primary"
    >
      -
    </button>
    <button 
      onclick={reset}
      class="btn-secondary"
    >
      Reset
    </button>
  </div>
</div>
