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

<div class="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
  {#if imageUrl}
    <img 
      src={imageUrl} 
      alt={title}
      class="w-full h-48 object-cover"
    />
  {/if}
  
  <div class="p-6">
    <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">
      {title}
    </h3>
    
    <p class="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
      {description}
    </p>
    
    <button 
      class="bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 text-white font-medium px-4 py-2 rounded transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
    >
      {buttonText}
    </button>
  </div>
</div>
