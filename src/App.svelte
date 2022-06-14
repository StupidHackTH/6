<script>
	import Gallary from "./Components/Gallary.svelte";
	import Nav from "./Components/Nav.svelte";
	import { tickets } from "./data/tickets"
	import { sponsors } from "./data/sponsors"
</script>

<main class="flex flex-col items-center justify-center">
	<Nav />
	<header class="flex flex-col items-center justify-center my-2 sm:my-8 hover:scale-[1.01] hover:rotate-1 transition-all">
		<img src="images/banner.webp" alt="THE ៦th STUPID HACKATHON THAILAND" class="max-w-[90vw] border-2 border-black sm:max-w-[28rem] md:max-w-[90vw] md:max-h-[60vh]"/>
	</header>

	<h2 class="my-4 text-2xl md:my-8 text-center" id="about">About us</h2>
	<section class="border-2 border-black" id="tickets">
		<h4 class="p-4 md:p-8">The Stupid Hackathon in Thailand is a collaborative hackathon in Thailand with non-competitive intentions and no focuses on business value.</h4>
		<h4 class="p-4 md:p-8">Our main goal for this hackathon is to get makers to just *have fun* and learn together, through working on any project they can dream of, fostering a community of enthusiastic creators.</h4>
		<h4 class="p-4 md:p-8">In the spirit of the stupid hackathons worldwide, this event is *non-commercial* and free to attend...</h4>
	</section>

	<h2 class="my-4 text-2xl md:my-8 text-center" id="tickets">Tickets</h2>
	<section id="tickets">
		<Gallary data={tickets} />
	</section>

	<h2 class="my-4 text-2xl md:my-8 text-center" id="sponsors">Sponsors</h2>
	<section id="sponsors">
		<Gallary data={sponsors} id="sponsors"/>
	</section>

	<footer class="py-6 gap-3 flex flex-row sm:gap-4" id="links">
			<h4><a href="https://stupidhackth.github.io/" class="no-underline">Eventpop</a></h4>
			<h4><a href="https://stupidhackth.github.io/" class="no-underline">Facebook</a></h4>
			<h4><a href="https://stupidhackth.github.io/" class="no-underline">Website</a></h4>
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
  color: #0284c8;
  text-decoration: underline;
}

a:hover {
  text-decoration: none;
}

section {
	@apply w-[90vw] mb-4 sm:w-[28rem] md:mb-8 hover:scale-[1.01] hover:rotate-1 transition-all
}

h4 {
	@apply text-base sm:text-lg
}
</style>