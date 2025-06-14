<script lang="ts">
  const { 
    title, 
    description, 
    imageUrl = '', 
    buttonText = 'Learn More' 
  } = $props<{
    title: string;
    description: string;
    imageUrl?: string;
    buttonText?: string;
  }>();
</script>

<div class="card-interactive overflow-hidden">
  {#if imageUrl}
    <img 
      src={imageUrl} 
      alt={title}
      class="w-full h-48 object-cover"
    />
  {/if}
  
  <div class="p-6">
    <h3 class="heading-3 mb-2">
      {title}
    </h3>
    
    <p class="body-text mb-4">
      {description}
    </p>
    
    <button class="btn-primary">
      {buttonText}
    </button>
  </div>
</div>
