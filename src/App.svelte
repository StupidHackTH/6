<script>
	import Gallary from "./Components/Gallary.svelte";
	import { tickets } from "./data/tickets"
	import { sponsors } from "./data/sponsors"
</script>

<main class="flex flex-col items-center justify-center mt-4 sm:mt-10">

	<header class="mb-8 flex flex-col items-center justify-center">
		
		<img src="images/banner.webp" alt="THE ៦th STUPID HACKATHON THAILAND"/>
		
		<article class="mt-6 text-lg">
			<a href="https://facebook.com/stupidhackth" class="px-2">Facebook</a>
			<a href="https://eventpop.me/e/13089" class="px-2">EventPop</a>
		</article>

	</header>

	<section class="mt-2 mb-2">
		<h2 class="my-2 text-2xl sm:my-8">Tickets</h2>
		<Gallary data={tickets} />
	</section>

	<section class="mt-2 mb-2">
		<h2 class="my-2 text-2xl sm:my-8">Sponsors</h2>
		<Gallary data={sponsors} />
	</section>

	<footer class="py-6 uppercase">
		<h4>
			<a href="https://stupidhackth.github.io/" class="no-underline">The Stupid Hackathon Thailand</a>
		</h4>
	</footer>

</main>

<style lang="postcss" global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

	img {
  max-height: 60vh;
  max-width: 95%;
}

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
</style>