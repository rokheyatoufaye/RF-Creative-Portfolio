<script>
	import { resolve } from '$app/paths';
	import headshot from '$lib/assets/EditedLandingHeadshot.JPG';
	import slicer from '$lib/assets/Slicer.png';
	import stillLife from '$lib/assets/Still Life, 2025.jpeg';
	import sculptureHead from "$lib/assets/Sculpture of a Woman's Head.webp";
</script>

<header class="sticky-header">
	<p class="header-logo">portfolio | rou·kay·uh·tou fay</p>
	<nav class="header-nav">
		<a href="#bio">Info</a>
		<a href="#works">Select Works</a>
	</nav>
</header>

<div class="sage-section">
	<!-- Hero: email + giant name -->
	<div class="hero">
		<p class="hero-email"><a href="mailto:rfaye@ufl.edu">rfaye@ufl.edu</a></p>
		<h1 class="name-first">ROKHEYATOU</h1>
		<h1 class="name-last">FAYE</h1>
	</div>

	<!-- Portrait: absolute, extends into about area -->
	<img class="hero-portrait" src={headshot} alt="portrait of Rokheyatou Faye" />

	<!-- About: z-index above portrait so text reads over the image -->
	<div id="about" class="about">
		<div class="about-bio">
			<p id="bio" style="scroll-margin-top: clamp(4rem, 7vw, 6rem);">I'm Rokheyatou "Roxie" Faye, a mechanical engineer and visual artist working at the intersection of design, systems, and storytelling.</p>
			<p>My practice is shaped by a background that spans fabrication, studio art, and cultural institutions, including time as a cultural mediation intern at the Museum of Black Civilizations in Dakar, Senegal. Moving between a design lab and a studio has taught me to hold space for analytical thinking and creative intuition.</p>
			<p>What drives me is the question of how things are made and what they mean. I build, prototype, and refine, but I'm equally interested in the cultural and material conditions that shape a design decision. My work is an ongoing attempt to examine how form, function, and meaning coexist.</p>
		</div>
		<div class="about-right">
			<p class="tagline">Artist | Engineer | Designer</p>
			<div class="select-interview">
				<h2 class="interview-heading"><a href="https://news.ufl.edu/2025/01/roxie-faye/" target="_blank" rel="noopener noreferrer">Select Interview</a></h2>
			<p class="interview-desc">On becoming the University of Florida's first mechanical engineering and studio art double major.</p>
			</div>
		</div>
	</div>
</div>

<div id="works" class="works-section">
	<h2 class="works-title">Select Works</h2>
	<div class="works-photos">
		<a href={resolve('/engineering-design')} class="work-photo p1" aria-label="Engineering Design"><img src={slicer} alt="Slicer" /></a>
		<a href={resolve('/visual-art')} class="work-photo p2" aria-label="Visual Art"><img src={stillLife} alt="Still Life, 2025" /></a>
		<a href={resolve('/research-writing')} class="work-photo p4" aria-label="Research + Writing"><img src={sculptureHead} alt="Sculpture of a Woman's Head" /></a>
	</div>
	<div class="works-categories">
		<a href={resolve('/engineering-design')} class="cat">ENGINEERING DESIGN</a>
		<a href={resolve('/visual-art')} class="cat">VISUAL ART</a>
		<a href={resolve('/research-writing')} class="cat">RESEARCH + PEDAGOGY</a>
	</div>
</div>

<footer id="contact" class="footer">
	<div class="footer-top">
		<p class="footer-name">ROKHEYATOU FAYE</p>
		<p class="footer-email">rfaye@ufl.edu</p>
	</div>
	<div class="footer-links">
		<a href="mailto:rfaye@ufl.edu" target="_blank" rel="noopener noreferrer">Email</a>,
		<a href="https://www.linkedin.com/in/roxie-faye/" target="_blank" rel="noopener noreferrer">Linkedin</a>
	</div>
</footer>

<style>
	/* ── HEADER ─────────────────────────────────── */
	.sticky-header {
		position: sticky;
		top: 0;
		z-index: 100;
		background-color: #29170f;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 clamp(1rem, 3vw, 2.5rem);
		height: clamp(4rem, 6vw, 5.5rem);
	}

	.header-logo {
		font-family: 'Montserrat', sans-serif;
		font-size: clamp(1.05rem, 1.8vw, 1.5rem);
		font-weight: 600;
		color: #5b8fa3;
		white-space: nowrap;
		margin: 0;
		letter-spacing: 0.02em;
	}

	.header-nav {
		display: flex;
		gap: clamp(1rem, 3vw, 2.5rem);
	}

	.header-nav a {
		font-family: 'Montserrat', sans-serif;
		font-size: clamp(1.05rem, 1.8vw, 1.5rem);
		font-weight: 500;
		color: #5b8fa3;
		text-decoration: none;
		white-space: nowrap;
	}

	.header-nav a:hover {
		text-decoration: underline;
	}

	/* ── SAGE SECTION (hero + about) ─────────────── */
	.sage-section {
		position: relative;
		background-color: #29170f;
		overflow-x: hidden;
		padding-bottom: 6rem;
	}

	/* ── HERO ───────────────────────────────────── */
	.hero {
		padding: 0.75rem 0 0 calc(clamp(1rem, 3vw, 2.5rem) + 0.75rem);
		position: relative;
		z-index: 2;
	}

	.hero-email {
		font-family: 'Gilda Display', serif;
		font-style: italic;
		font-weight: 400;
		font-size: clamp(1.2rem, 2.2vw, 1.9rem);
		color: #5b8fa3;
		margin: 0 0 0.25rem 0;
	}

	.hero-email a {
		color: #5b8fa3;
		text-decoration: none;
	}

	.hero-email a:hover {
		text-decoration: underline;
	}

	.name-first {
		font-family: 'Gilda Display', serif;
		font-weight: 400;
		font-size: 17.75vw;
		color: #5b8fa3;
		margin: 0;
		line-height: 0.88;
		white-space: nowrap;
		transform: scaleX(0.75);
		transform-origin: left center;
		display: block;
	}

	.name-last {
		font-family: 'Gilda Display', serif;
		font-weight: 400;
		font-size: 23vw;
		color: #5b8fa3;
		margin: 0;
		line-height: 0.92;
		white-space: nowrap;
		transform: scaleX(0.75);
		transform-origin: left center;
		display: block;
	}

	/* Portrait: absolute so it extends into the about area */
	.hero-portrait {
		position: absolute;
		top: clamp(5rem, 13vw, 13rem);
		left: 47.5%;
		width: 49.5%;
		z-index: 1;
		display: block;
	}

	/* ── ABOUT ──────────────────────────────────── */
	.about {
		position: relative;
		z-index: 2; /* sits in front of the portrait */
		display: grid;
		grid-template-columns: 42% 1fr;
		gap: 0 4%;
		padding: 0 3% 0 clamp(1rem, 3vw, 2.5rem);
	}

	.about-bio {
		padding-top: clamp(3rem, 22vw, 20rem);
	}

	.about-bio p {
		font-family: 'Montserrat', sans-serif;
		font-size: clamp(1rem, 1.5vw, 1.3rem);
		font-weight: 500;
		color: #5b8fa3;
		margin: 0 0 2.5rem 0;
		line-height: 1.45;
	}

	.about-right {
		display: flex;
		flex-direction: column;
		padding-top: clamp(5rem, 41vw, 39rem);
		text-align: right;
	}

	.select-interview {
		max-width: 28vw;
		margin-left: auto;
		text-align: right;
	}

	.interview-heading {
		font-family: 'Gilda Display', serif;
		font-style: italic;
		font-size: clamp(1.8rem, 3.2vw, 2.8rem);
		font-weight: 400;
		color: #5b8fa3;
		margin: 0 0 0.75rem 0;
	}

	.interview-desc {
		font-family: 'Montserrat', sans-serif;
		font-size: clamp(1rem, 1.5vw, 1.3rem);
		font-weight: 500;
		color: #5b8fa3;
		margin: 0;
		line-height: 1.5;
	}

	.interview-heading a {
		color: #5b8fa3;
		text-decoration: none;
	}

	.interview-heading a:hover {
		text-decoration: underline;
	}

	.tagline {
		font-family: 'Gilda Display', serif;
		font-style: italic;
		font-size: clamp(1.3rem, 2.2vw, 1.9rem);
		font-weight: 400;
		color: #5b8fa3;
		margin: 0 0 clamp(1.5rem, 3vw, 2.5rem) 0;
	}

	/* ── WORKS ──────────────────────────────────── */
	.works-section {
		background-color: #d5c1af;
		padding: clamp(1.5rem, 3vw, 2.5rem) clamp(1rem, 3vw, 2.5rem);
		overflow: hidden;
		scroll-margin-top: clamp(4rem, 6vw, 5.5rem);
	}

	.works-title {
		font-family: 'Gilda Display', serif;
		font-style: italic;
		font-size: clamp(1.4rem, 2.2vw, 1.9rem);
		font-weight: 400;
		color: #5b8fa3;
		margin: 0 0 2rem 0;
		border-bottom: 1.5px solid #5b8fa3;
		display: inline-block;
		padding-bottom: 0.2rem;
	}

	.works-photos {
		display: flex;
		gap: 2vw;
		justify-content: flex-end;
		align-items: flex-end;
		position: relative;
		z-index: 1;
		margin-bottom: -8vw;
	}

	.work-photo {
		background-color: #c4aa91;
		flex: 0 0 22.8vw;
		display: block;
		overflow: hidden;
	}

	.work-photo img {
		width: 100%;
		height: auto;
		display: block;
	}

	.work-photo.p1 { align-self: center; }
	.work-photo.p4 { align-self: center; }
	.work-photo.p4 img { filter: brightness(1.3); }

	.works-categories {
		display: flex;
		flex-direction: column;
		position: relative;
		z-index: 2;
	}

	.cat {
		font-family: 'Montserrat', sans-serif;
		font-size: clamp(2rem, 4.4vw, 6rem);
		font-weight: 600;
		color: #5b8fa3;
		text-decoration: none;
		line-height: 1;
		display: block;
	}

	.cat:hover {
		text-decoration: underline;
		text-underline-offset: 0.1em;
	}

	/* ── FOOTER ─────────────────────────────────── */
	.footer {
		background-color: #29170f;
		padding: clamp(2rem, 4vw, 3.5rem) clamp(1rem, 3vw, 2.5rem);
	}

	.footer-top {
		margin-bottom: 2.5rem;
	}

	.footer-name {
		font-family: 'Gilda Display', serif;
		font-size: clamp(1.4rem, 2.8vw, 2.3rem);
		font-weight: 400;
		color: #5b8fa3;
		margin: 0;
	}

	.footer-email {
		font-family: 'Gilda Display', serif;
		font-style: italic;
		font-size: clamp(0.85rem, 1.3vw, 1.05rem);
		color: #5b8fa3;
		margin: 0.3rem 0 0 0;
	}

	.footer-links a {
		font-family: 'Inter', sans-serif;
		font-size: clamp(0.8rem, 1.1vw, 0.95rem);
		color: #5b8fa3;
		text-decoration: underline;
	}

	.footer-links {
		color: #5b8fa3;
		font-family: 'Inter', sans-serif;
		font-size: clamp(0.8rem, 1.1vw, 0.95rem);
	}
</style>
