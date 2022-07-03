<script>
    import { projects } from '../data/projects'
</script>

<div class="grid w-full grid-cols-1 gap-6 lg:grid-cols-2 items-center justify-center mb-4 sm:mb-8">
    {#each projects as project}
        <div class="group border-2 border-black h-full hover:scale-[1.01] hover:rotate-1 transition-all" id={project.img ? project.img.split(".")[0] : "monks"}>
            {#if project.img}
                <div class="overflow-hidden aspect-video"><img src={"images/projects/" + project.img} alt={project.name} class="w-full object-cover group-hover:scale-[1.02]"></div>
            {/if}
            <div class="p-4">
                {#if project.award}
                    <h4 class="pb-2 text-md text-slate-500">{project.award}</h4>
                {/if}
                <h1 class="text-2xl pb-2">{project.name}</h1>
                <div class="flex flex-wrap py-2">
                    {#each project.team as member}
                        {#if member.length == 2}
                            <a href={member[1]} class="no-underline hover:bg-sky-100 bg-slate-100 p-1 mr-2 mb-2 rounded-md border-2 border-slate-400">{member[0].split(" ")[0]}</a>
                        {:else}
                            <span class="bg-slate-100 p-1 mr-2 mb-2 rounded-md border-2 border-slate-400">{member[0].split(" ")[0]}</span>
                        {/if}
                    {/each}
                </div>
                <p class="text-base sm:text-lg pb-4">{project.description}</p>
                {#each project.url as link}
                    <a href={link[1]} class="px-1">[{link[0]}]</a>
                {/each}
            </div>
        </div>
    {/each}
</div>