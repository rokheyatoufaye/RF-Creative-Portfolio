<script>
	import { resolve } from '$app/paths';
	import makerspacePhoto from '$lib/assets/MakerspacePhoto.jpeg';
</script>

<header class="sticky-header">
	<a class="header-logo" href={resolve('/')}>portfolio | rou·kay·uh·tou fay</a>
</header>

<main class="page">
	<h1 class="page-title">RESEARCH + PEDAGOGY</h1>

	<h2 class="project-title">Research Assistant, Instructional Content & Production: NSF IUSE Peer Mentor Training Project</h2>

	<div class="project-layout">
		<img src={makerspacePhoto} alt="Makerspace peer mentor training" class="project-img" />
		<p class="project-desc">As a research assistant on the NSF IUSE project Generation of Peer Mentor Training Modules for Academic Makerspaces at the University of Florida, I contributed to the development of The Makerspace Peer Mentor Handbook, an interactive training resource for undergraduate peer mentors in first-year engineering design courses. My responsibilities spanned the full production lifecycle of the handbook, including authoring video scripts for filmed case scenario skits, writing instructional content for seven training modules, and designing interactive H5P learning activities for the Pressbooks platform. I managed a team of seven researchers responsible for 3D printing physical props and educational materials used across the training modules. I collaborated closely with the principal investigator and a co-author specializing in educational psychology to ensure all content aligned with learning objectives rooted in current research on engineering education, identity development, and social belonging. Additional production work included coordinating contributor acknowledgements, sourcing and attributing media assets, and preparing formatted content for publication in Pressbooks.</p>
	</div>
</main>

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
		margin: 0 0 clamp(1.5rem, 3vw, 2.5rem) 0;
	}

	.project-title {
		font-family: 'Gilda Display', serif;
		font-style: italic;
		font-weight: 400;
		font-size: clamp(1.1rem, 1.8vw, 1.6rem);
		color: #29170f;
		margin: 0 0 clamp(1.5rem, 3vw, 2.5rem) 0;
	}

	.project-layout {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: clamp(2rem, 4vw, 4rem);
		align-items: start;
	}

	.project-img {
		width: 100%;
		height: auto;
		display: block;
	}

	.project-desc {
		font-family: 'Montserrat', sans-serif;
		font-size: clamp(0.9rem, 1.3vw, 1.1rem);
		font-weight: 500;
		color: #29170f;
		line-height: 1.6;
		margin: 0;
	}

	/* ── RESPONSIVE ─────────────────────────────── */
	@media (max-width: 768px) {
		.project-layout {
			grid-template-columns: 1fr;
		}

		.project-img {
			max-width: 100%;
		}
	}
</style>
