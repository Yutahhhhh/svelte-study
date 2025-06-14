<script lang="ts">
  type Item = {
    id: number;
    title: string;
    description: string;
    imageUrl?: string;
  };

  const { items } = $props<{
    items: Item[];
  }>();

  import Card from './Card.svelte';
</script>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
  {#each items as item (item.id)}
    <Card 
      title={item.title}
      description={item.description}
      imageUrl={item.imageUrl}
      buttonText="詳細を見る"
    />
  {/each}
</div>

{#if items.length === 0}
  <div class="text-center py-12">
    <p class="text-gray-500 dark:text-gray-400 text-lg">表示するアイテムがありません</p>
  </div>
{/if}
