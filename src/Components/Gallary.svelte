<script>  
  export let data
</script>

<div class="grid w-[90vw] grid-cols-2 border border-black bg-white sm:w-[28rem]">
  {#each data as type}
    <a class="grid aspect-square items-center justify-center bg-white text-center text-black hover:brightness-95 border border-black"
        href={type.href || "/"}
    >
        <div>
          {#if type.imgSrc}
            <img src={type.imgSrc} alt={type.name + " ticket"} />
          {:else}
            <p>{type.name}</p>
          {/if}
        </div>
      </a>
  {/each}
</div>