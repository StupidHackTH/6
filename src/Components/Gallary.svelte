<script>  
  export let data
</script>

<div class="grid grid-cols-2 md:grid-cols-4 w-full border border-black bg-white">
  {#each data as type}
    <a class="flex aspect-square items-center justify-center bg-white text-center text-black hover:brightness-95 border border-black"
        href={type.href || "/"}
    >
        <div>
          <img src={type.imgSrc} alt={type.name} />
        </div>
      </a>
  {/each}
</div>