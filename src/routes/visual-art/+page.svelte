<script>
	import { resolve } from '$app/paths';
	import cmsMural from '$lib/assets/Compact Muon Solenoid (CMS) Detector Mural, Acrylic on Wall, 2026.png';
	import geejNak from '$lib/assets/Géej Nak, Oil on Canvas, 2025.jpeg';
	import emmaAmos from "$lib/assets/Study of Emma Amos's Flower Sniffer, Oil on Canvas, 2025.jpeg";
	import stillLifeKettle from '$lib/assets/Still Life with Kettle, Oil on Canvas, 2025.jpeg';
	import seynabou from '$lib/assets/Seynabou, the Salmon, mixed media interactive installation, 2025.png';
	import displacement from '$lib/assets/Displacement, mixed media interactive acrylic and oil painting on canvas, 2025.PNG';
	import nap from '$lib/assets/I Just Wanna Take a Nap, mixed media painting, 2025.png';
	import collage from '$lib/assets/Untitled (Collage), printed images, acrylic, oil paint on wood, 2025.png';
	import yayeNak from '$lib/assets/Yaye Nak Dome Nak, Linocut, 2024.jpeg';
	import samaKora from '$lib/assets/Sama Kora, Charcoal on Paper, 2022.jpeg';

	let lightbox = null;
	let poemOpen = false;

	function open(src, alt) { lightbox = { src, alt }; }
	function close() { lightbox = null; }

	function handleKey(e) {
		if (e.key === 'Escape') { close(); poemOpen = false; }
	}
</script>

<svelte:window on:keydown={handleKey} />

<header class="sticky-header">
	<a class="header-logo" href={resolve('/')}>portfolio | rou·kay·uh·tou fay</a>
</header>

<main class="page">
	<h1 class="page-title">VISUAL ART</h1>

	<div class="gallery">
		<figure class="artwork">
			<img src={cmsMural} alt="Compact Muon Solenoid (CMS) Detector Mural" class="artwork-img" on:click={() => open(cmsMural, 'Compact Muon Solenoid (CMS) Detector Mural')} />
			<figcaption>
				<span class="artwork-title">Compact Muon Solenoid (CMS) Detector Mural</span>
				<span class="artwork-meta">Acrylic on Wall · 2026</span>
			</figcaption>
		</figure>

		<figure class="artwork">
			<img src={geejNak} alt="Géej Nak" class="artwork-img" on:click={() => open(geejNak, 'Géej Nak')} />
			<figcaption>
				<span class="artwork-title">Géej Nak</span>
				<span class="artwork-meta">Oil on Canvas · 2025</span>
			</figcaption>
		</figure>

		<figure class="artwork">
			<img src={emmaAmos} alt="Study of Emma Amos's Flower Sniffer" class="artwork-img" on:click={() => open(emmaAmos, "Study of Emma Amos's Flower Sniffer")} />
			<figcaption>
				<span class="artwork-title">Study of Emma Amos's Flower Sniffer</span>
				<span class="artwork-meta">Oil on Canvas · 2025</span>
			</figcaption>
		</figure>

		<figure class="artwork">
			<img src={stillLifeKettle} alt="Still Life with Kettle" class="artwork-img" on:click={() => open(stillLifeKettle, 'Still Life with Kettle')} />
			<figcaption>
				<span class="artwork-title">Still Life with Kettle</span>
				<span class="artwork-meta">Oil on Canvas · 2025</span>
			</figcaption>
		</figure>

		<figure class="artwork">
			<img src={seynabou} alt="Seynabou, the Salmon" class="artwork-img" on:click={() => poemOpen = true} />
			<figcaption>
				<span class="artwork-title">Seynabou, the Salmon</span>
				<span class="artwork-meta">Mixed Media Interactive Installation · 2025</span>
			</figcaption>
		</figure>

		<figure class="artwork">
			<img src={displacement} alt="Displacement" class="artwork-img" on:click={() => open(displacement, 'Displacement')} />
			<figcaption>
				<span class="artwork-title">Displacement</span>
				<span class="artwork-meta">Mixed Media, Acrylic and Oil on Canvas · 2025</span>
			</figcaption>
		</figure>

		<figure class="artwork">
			<img src={nap} alt="I Just Wanna Take a Nap" class="artwork-img" on:click={() => open(nap, 'I Just Wanna Take a Nap')} />
			<figcaption>
				<span class="artwork-title">I Just Wanna Take a Nap</span>
				<span class="artwork-meta">Mixed Media Painting · 2025</span>
			</figcaption>
		</figure>

		<figure class="artwork">
			<img src={collage} alt="Untitled (Collage)" class="artwork-img" on:click={() => open(collage, 'Untitled (Collage)')} />
			<figcaption>
				<span class="artwork-title">Untitled (Collage)</span>
				<span class="artwork-meta">Printed Images, Acrylic, Oil Paint on Wood · 2025</span>
			</figcaption>
		</figure>

		<figure class="artwork">
			<img src={yayeNak} alt="Yaye Nak Dome Nak" class="artwork-img" on:click={() => open(yayeNak, 'Yaye Nak Dome Nak')} />
			<figcaption>
				<span class="artwork-title">Yaye Nak Dome Nak</span>
				<span class="artwork-meta">Linocut · 2024</span>
			</figcaption>
		</figure>

		<figure class="artwork">
			<img src={samaKora} alt="Sama Kora" class="artwork-img" on:click={() => open(samaKora, 'Sama Kora')} />
			<figcaption>
				<span class="artwork-title">Sama Kora</span>
				<span class="artwork-meta">Charcoal on Paper · 2022</span>
			</figcaption>
		</figure>
	</div>
</main>

{#if poemOpen}
	<div class="poem-overlay" on:click={() => poemOpen = false} on:keydown={(e) => e.key === 'Escape' && (poemOpen = false)} role="dialog" aria-modal="true" tabindex="-1">
		<div class="poem-panel" on:click|stopPropagation on:keydown|stopPropagation role="document" tabindex="0">
			<div class="poem-left">
				<img src={seynabou} alt="Seynabou, the Salmon" class="poem-img" />
			</div>
			<div class="poem-right">
				<pre class="poem-text">Thank you for approaching me.
My name is Seynabou.

I am a Salmon.
You're probably wondering

how I got here.
I am not from here.
I was swimming upstream

to give my roe a chance

when

a masked bear froze me

in this block of ice,

where I stay suspended.
I am cold and afraid.
But I subsist.
</pre>
			</div>
		</div>
	</div>
{/if}

{#if lightbox}
	<div class="lightbox-overlay" on:click={close} role="dialog" aria-modal="true">
		<img src={lightbox.src} alt={lightbox.alt} class="lightbox-img" on:click|stopPropagation />
	</div>
{/if}

<style>
	.sticky-header {
		position: sticky;
		top: 0;
		z-index: 100;
		background-color: #29170f;
		display: flex;
		align-items: center;
		padding: 0 clamp(1rem, 3vw, 2.5rem);
		height: clamp(4rem, 6vw, 5.5rem);
	}

	.header-logo {
		font-family: 'Montserrat', sans-serif;
		font-size: clamp(1.05rem, 1.8vw, 1.5rem);
		font-weight: 600;
		color: #5b8fa3;
		text-decoration: none;
		letter-spacing: 0.02em;
	}

	.header-logo:hover { text-decoration: underline; }

	.page {
		background-color: #d5c1af;
		min-height: 100vh;
		padding: clamp(3rem, 6vw, 5rem) clamp(1rem, 3vw, 2.5rem);
	}

	.page-title {
		font-family: 'Gilda Display', serif;
		font-weight: 400;
		font-size: clamp(2rem, 6vw, 5rem);
		color: #5b8fa3;
		margin: 0 0 clamp(2.5rem, 5vw, 4rem) 0;
	}

	.gallery {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: clamp(2rem, 4vw, 3.5rem) clamp(1.5rem, 3vw, 2.5rem);
	}

	.artwork {
		margin: 0;
	}

	.artwork-img {
		width: 100%;
		height: auto;
		display: block;
		cursor: pointer;
	}

	.artwork-img:hover {
		opacity: 0.9;
	}

	figcaption {
		margin-top: 0.75rem;
		display: flex;
		flex-direction: column;
		gap: 0.2rem;
	}

	.artwork-title {
		font-family: 'Gilda Display', serif;
		font-style: italic;
		font-size: clamp(1rem, 1.6vw, 1.4rem);
		font-weight: 400;
		color: #5b8fa3;
	}

	.artwork-meta {
		font-family: 'Montserrat', sans-serif;
		font-size: clamp(0.75rem, 1vw, 0.9rem);
		font-weight: 500;
		color: #5b8fa3;
		opacity: 0.6;
	}

	/* ── POEM OVERLAY ─────────────────────────── */
	.poem-overlay {
		position: fixed;
		inset: 0;
		z-index: 1000;
		background: rgba(0, 0, 0, 0.82);
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 4vw;
	}

	.poem-panel {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: clamp(2rem, 4vw, 4rem);
		max-width: 1100px;
		width: 100%;
		align-items: center;
	}

	.poem-left img {
		width: 100%;
		height: auto;
		display: block;
	}

	.poem-right {
		display: flex;
		align-items: center;
	}

	.poem-text {
		font-family: 'Gilda Display', serif;
		font-style: italic;
		font-size: clamp(0.7rem, 1vw, 0.95rem);
		font-weight: 400;
		color: #d5c1af;
		white-space: pre-line;
		line-height: 1.8;
		margin: 0;
	}

	.lightbox-overlay {
		position: fixed;
		inset: 0;
		z-index: 1000;
		background: rgba(0, 0, 0, 0.78);
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
	}

	.lightbox-img {
		max-width: 90vw;
		max-height: 90vh;
		width: auto;
		height: auto;
		display: block;
		cursor: default;
	}

	/* ── RESPONSIVE ─────────────────────────────── */
	@media (max-width: 600px) {
		.gallery { grid-template-columns: 1fr; }

		/* Poem overlay: stack image above poem */
		.poem-panel {
			grid-template-columns: 1fr;
			overflow-y: auto;
			max-height: 90vh;
		}

		.poem-left img { max-height: 40vh; object-fit: contain; }

		.poem-text { font-size: 0.85rem; }
	}
</style>
