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

<div class="grid-auto-fit gap-6">
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
    <p class="body-text text-muted">表示するアイテムがありません</p>
  </div>
{/if}
