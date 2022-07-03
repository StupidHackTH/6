<script lang="js">
	import Gallary from "./Components/Gallary.svelte";
	import Nav from "./Components/Nav.svelte";
	import Projects from "./Components/Projects.svelte"
	import { fade } from 'svelte/transition'
	import { tickets, sponsors, partners } from "./data/data"

	let show = {
		ticket: false,
		about: false,
		one: false
	}
</script>

<main class="flex flex-col items-center justify-center">
	<Nav />
	<header class="flex flex-col items-center justify-center my-2 sm:my-8 hover:scale-[1.01] hover:rotate-1 transition-all">
		<img src="images/banner.webp" alt="THE ៦th STUPID HACKATHON THAILAND" class="max-w-[90vw] border-2 border-black sm:max-w-[28rem] md:max-w-[90vw] md:max-h-[60vh]"/>
	</header>

	<section class="border-2 border-black p-4 my-4 md:p-8 md:my-8">
		<h2 class="pb-4 md:pb-8"><span class="font-bold">Date:</span> 2-3 July 2022</h2>
		<h2 class="pb-4 md:pb-8"><span class="font-bold">Venue:</span> The University of the Thai Chamber of Commerce</h2>
		<h2 class=""><span class="font-bold">Pitch Session:</span><a class="px-2" href="https://www.facebook.com/creatorsgarten/videos/753821805747854">[PART 1]</a> <a href="https://www.facebook.com/creatorsgarten/videos/2202840639881996">[PART 2]</a></h2>
	</section>

	<h2 class="my-4 text-2xl md:my-8 text-center" id="Awards">Awards</h2>
	<section class="border-2 border-black" transition:fade >
		<h4 class="p-4 pb-1 md:p-8 md:pb-2">Most Stupid Award
			<br/>🏆 <a href="#later">ไว้ค่อยคิดชื่อละกัน</a>
			<br/>🥈 <a href="#mosqlick">MosQlick</a></h4>
		<h4 class="px-4 py-1 md:px-8 md:py-2">Non Stupid Award
			<br/>🏆 <a href="#omyim">OMYIM</a>
			<br/>🥈 <a href="#taoloi">TAOLOI</a></h4>
		<h4 class="px-4 py-1 md:px-8 md:py-2">Most Aesthetically Pleasing Award
			<br/>🏆 <a href="#cunny">Yellow-house</a>
			<br/>🥈 <a href="#lazydev">Captcha Kappa</a></h4>
		<h4 class="p-4 pt-1 md:p-8 md:pt-2">Most Impressive Technology Award
			<br/>🏆 <a href="#monks">Jerm - a blessing github action...</a>
			<br/>🥈 <a href="#pdpa">Social BuT PDPA Filter</a></h4>
	</section>

	<h2 class="my-4 text-2xl md:my-8 text-center" id="projects">PROJECTS</h2>
	<div class="mt-1 lg:mt-4 w-[90vw] lg:w-[75vw] xl-[60vw]">
		<Projects />
	</div>

	<div class="flex flex-col items-center justify-center my-2 sm:my-8 hover:scale-[1.01] hover:rotate-1 transition-all">
		<img src="images/pic.webp" alt="THE ៦th STUPID HACKATHON THAILAND" class="max-w-[90vw] border-2 border-black sm:max-w-[28rem] md:max-w-[90vw] md:max-h-[60vh]"/>
	</div>

	<h2 class="mb-4 text-2xl text-center" id="sponsors">Sponsors</h2>
	<section class="md:my-8">
		<Gallary data={sponsors} id="sponsors"/>
	</section>

	<h2 class="my-4 text-2xl md:my-8 text-center" id="sponsors">Partners</h2>
	<section>
		<Gallary data={partners} id="partners"/>
	</section>

	<h2 class="my-4 text-2xl md:my-8 text-center" id="about">About us</h2>
	<section class="border-2 border-black" transition:fade >
		<h4 class="p-4 md:p-8">The Stupid Hackathon in Thailand is a collaborative hackathon in Thailand with non-competitive intentions and no focuses on business value.</h4>
		<h4 class="p-4 md:p-8">Our main goal for this hackathon is to get makers to just *have fun* and learn together, through working on any project they can dream of, fostering a community of enthusiastic creators.</h4>
		<h4 class="p-4 md:p-8">In the spirit of the stupid hackathons worldwide, this event is *non-commercial* and free to attend...</h4>
	</section>

	<h2 class="my-4 text-2xl md:my-8 text-center text-sky-600 hover:font-bold" id="tickets" on:click={()=>{
		show.ticket = !show.ticket
	}}>{show.ticket ? '[-] Tickets [Sold Out]' : '[+] Tickets [Sold Out]'}</h2>
	{#if show.ticket}
	<section transition:fade>
		<Gallary data={tickets} />
	</section>
	{/if}

	<footer class="py-6 gap-3 flex flex-row sm:gap-4" id="links">
			<h4><a href="https://www.eventpop.me/e/13089">Eventpop</a></h4>
			<h4><a href="https://facebook.com/stupidhackth">Facebook</a></h4>
			<h4><a href="https://stupidhackth.github.io/">Website</a></h4>
	</footer>

</main>

<style lang="postcss" global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

.links {
  display: flex;
  gap: 2rem;

}

a {
  @apply text-sky-600 hover:underline
}

section {
	@apply w-[90vw] mb-4 sm:w-[28rem] md:mb-8 hover:scale-[1.01] hover:rotate-1 transition-all
}

h2 {
	@apply text-lg sm:text-xl
}

h4 {
	@apply text-base sm:text-lg
}
</style>