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

<div class="counter">
  <h2>Svelte Counter Component</h2>
  <p class="count">Count: {count}</p>
  <div class="buttons">
    <button onclick={increment}>+</button>
    <button onclick={decrement}>-</button>
    <button onclick={reset}>Reset</button>
  </div>
</div>

<style lang="scss">
  .counter {
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 1rem;
    margin: 1rem 0;
    text-align: center;
  }

  .count {
    font-size: 1.5rem;
    font-weight: bold;
    margin: 1rem 0;
  }

  .buttons {
    display: flex;
    gap: 0.5rem;
    justify-content: center;
  }

  button {
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;

    &:first-child {
      background: #28a745;
      color: white;
    }

    &:nth-child(2) {
      background: #dc3545;
      color: white;
    }

    &:last-child {
      background: #007bff;
      color: white;
    }

    &:hover {
      opacity: 0.8;
    }
  }
</style>
