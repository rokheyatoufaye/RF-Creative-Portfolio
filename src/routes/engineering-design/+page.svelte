<script>
	import { resolve } from '$app/paths';
	import combustionRender from '$lib/assets/Combustion Engine Rendering.png';
	import combustionDrawing from '$lib/assets/Combustion Engine Technical Drawing.png';
	import fireletFinalPhoto from '$lib/assets/FireletFinalPhoto.jpg';
	import fireletWiring from '$lib/assets/Firelet Wire Diagram.png';
	import fireletFinalSketch from '$lib/assets/FireletFinalSketch.jpg';
	import imelisBuild from '$lib/assets/InteractiveMuseumLightingSystemPhysicalBuild.jpg';
	import imelisDiagram from '$lib/assets/Interactive Museum Lighting System-1.png';
	import slicerPhoto from '$lib/assets/AssembledMandolineSlicer.png';
	import slicerDrawing from '$lib/assets/SlicerExplodedView.png';
	import paniniPress from '$lib/assets/PaniniPress.png';

	const projects = [
		{
			title: 'Combustion Engine',
			meta: 'SolidWorks · 2022',
			desc: 'My first project in SolidWorks was a team effort with two other engineers: modeling a functional four cylinder combustion engine component by component. As the design engineer, I was responsible for the component geometry and the final rendered presentation. Every part, from the pistons to the camshafts, had to be designed to tolerance and fit within a system that actually moved. Getting the geometry right was one problem; understanding how each component related to the others was another. It changed how I think about mechanical systems.',
			thumbnail: combustionRender,
			images: [
				{ src: combustionRender, alt: 'Combustion engine 3D render' },
				{ src: combustionDrawing, alt: 'Combustion engine technical drawing' }
			],
			layout: 'combustion'
		},
		{
			title: 'Firelet: A Wearable Fire Detection Device',
			meta: 'Onshape · Arduino IDE · 2023',
			desc: "The Firelet started with a question: what does fire safety look like for someone who can't hear an alarm? Designed for elderly users with sensory or mobility impairments, this wearable bracelet integrates smoke detection, temperature sensing, and multi-modal alerts (vibration, light, and sound) in a form meant to be worn through the night. Working as the design engineer on a team, I led the CAD in Onshape and fabricated the housing on a Prusa 3D printer. The project was grounded in human-centered design from the start. Empathy mapping early on shaped every constraint including how it would feel on a user's wrist at 2 a.m.",
			thumbnail: fireletFinalPhoto,
			images: [
				{ src: fireletFinalPhoto, alt: 'Firelet final photo' },
				{ src: fireletWiring, alt: 'Firelet wire diagram' },
				{ src: fireletFinalSketch, alt: 'Firelet final sketch' }
			],
			layout: 'three'
		},
		{
			title: 'IMELiS: Interactive Museum Exhibition Lighting System',
			meta: 'Arduino · C++ · Tinkercad · 2026',
			desc: 'For my final project in Elements of Electrical Engineering, I designed an interactive lighting system for an art museum gallery with a skylight, where the exhibition responds to the daylight in the room. The system reads ambient light through a photoresistor and shifts between three states: bright daylight, when the fixtures power down and a fan runs to cool the space; dim light, when a standby light comes on to simulate typical gallery conditions; and full dark, when a visitor-controlled RGB light and ambient sound activate. I built the circuit around an Arduino with three sensors and five actuators, and wrote all the C++ myself. Designing around a real architectural condition — a skylit room with changing light — made me think about the gallery and the system as one responsive environment rather than two separate things.',
			thumbnail: imelisBuild,
			images: [
				{ src: imelisBuild, alt: 'IMELiS physical circuit build' },
				{ src: imelisDiagram, alt: 'IMELiS circuit schematic' }
			],
			layout: 'equal'
		},
		{
			title: 'Air-Powered Mandoline Slicer Design',
			meta: 'SolidWorks · Manual Machining',
			desc: 'For this team project, I designed an automatic mandoline slicer driven by an air engine, where a flywheel and slider-crank mechanism convert rotary motion into a four-inch linear cutting stroke. I was responsible for the manufacturing and drafting side of the build, producing the detail drawings, setting tolerances, and machining my parts to spec. That included selecting materials for function: food-safe PLA for the mandoline shell, 17-4 PH stainless steel for the blade, and 5052 aluminum for the welded sheet-metal chassis. Each part I made was verified against dimensional inspection records before assembly, which taught me how much of good design happens after the model is finished, in the move from drawing to machined part.',
			thumbnail: slicerPhoto,
			images: [
				{ src: slicerPhoto, alt: 'Machined slicer components' },
				{ src: slicerDrawing, alt: 'Mandoline slicer assembly exploded view' }
			],
			layout: 'equal'
		},
		{
			title: 'In-Orbit Heated Press Manufacturing Experiment',
			meta: 'Fusion 360 · COSMIC Capstone Challenge',
			desc: "For my capstone project in Mechanical Engineering Design 2, I led a nine-person team designing a semi-autonomous orbital manufacturing payload for the COSMIC Capstone Challenge. The system is designed to manufacture and inspect flat carbon fiber reinforced polymer test strips in microgravity through three integrated operations: mechanical compression via stepper-motor-driven lead screws, thermal curing via embedded cartridge heaters operating within a 300 W sustained power limit, and post-cure inspection using onboard IR thermography and 3D surface profilometry. My role combined project management with hands-on technical work. I established team structure in the planning phase, maintained the Gantt chart and work breakdown structure throughout the semester, led the client meeting that finalized the experiment concept, and authored the executive summary and manufacturing and cost model sections of the final report. I also co-led the CAD subteam, contributing to part and assembly modeling in Fusion 360, overseeing the subteam's output, and reviewing drawings before submission. Designing without atmospheric pressure or gravity as a resource meant there was no passive fallback for any part of the process: every function had to be actively engineered.",
			thumbnail: paniniPress,
			images: [
				{ src: paniniPress, alt: 'In-orbit heated press assembly' }
			],
			layout: 'single'
		}
	];

	/** @type {typeof projects[0] | null} */
	let activeProject = null;
	/** @param {typeof projects[0]} project */
	function open(project) { activeProject = project; }
	function close() { activeProject = null; }
	/** @param {KeyboardEvent} e */
	function handleKey(e) { if (e.key === 'Escape') close(); }
</script>

<svelte:window on:keydown={handleKey} />

<header class="sticky-header">
	<a class="header-logo" href={resolve('/')}>portfolio | rou·kay·uh·tou fay</a>
</header>

<div class="gallery">
	{#each projects as project (project.title)}
		<button class="tile" on:click={() => open(project)}>
			<img src={project.thumbnail} alt={project.title} class="tile-img" />
			<div class="tile-overlay">
				<h2 class="tile-title">{project.title}</h2>
				<p class="tile-meta">{project.meta}</p>
			</div>
		</button>
	{/each}
</div>

{#if activeProject}
	<div class="modal-overlay" on:click={(e) => { if (e.target === e.currentTarget) close(); }} on:keydown={handleKey} role="dialog" aria-modal="true" tabindex="-1">
		<div class="modal">
			<button class="modal-close" on:click={close} aria-label="Close">✕</button>
			<h2 class="modal-title">{activeProject.title}</h2>
			<p class="modal-meta">{activeProject.meta}</p>
			<p class="modal-desc">{activeProject.desc}</p>
			<div class="modal-images {activeProject.layout}">
				{#each activeProject.images as img}
					<img src={img.src} alt={img.alt} class="modal-img" />
				{/each}
			</div>
		</div>
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

	/* ── GALLERY GRID ─────────────────────────── */
	.gallery {
		display: grid;
		grid-template-columns: repeat(6, 1fr);
		grid-template-rows: repeat(2, 1fr);
		height: calc(100vh - clamp(4rem, 6vw, 5.5rem));
		overflow: hidden;
	}

	/* Row 1: 3 equal tiles */
	.tile:nth-child(1),
	.tile:nth-child(2),
	.tile:nth-child(3) { grid-column: span 2; }

	/* Row 2: 2 wider tiles */
	.tile:nth-child(4),
	.tile:nth-child(5) { grid-column: span 3; }

	/* ── TILE ─────────────────────────────────── */
	.tile {
		position: relative;
		overflow: hidden;
		border: none;
		padding: 0;
		margin: 0;
		cursor: pointer;
		background: #29170f;
	}

	.tile-img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
		transition: filter 0.3s ease;
	}

	.tile:hover .tile-img {
		filter: brightness(0.4);
	}

	.tile-overlay {
		position: absolute;
		inset: 0;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		padding: clamp(1rem, 2vw, 1.75rem);
		opacity: 0;
		transition: opacity 0.3s ease;
		pointer-events: none;
	}

	.tile:hover .tile-overlay {
		opacity: 1;
	}

	.tile-title {
		font-family: 'Gilda Display', serif;
		font-style: italic;
		font-weight: 400;
		font-size: clamp(1rem, 1.6vw, 1.5rem);
		color: #d5c1af;
		margin: 0 0 0.3rem 0;
		text-align: left;
	}

	.tile-meta {
		font-family: 'Montserrat', sans-serif;
		font-size: clamp(0.7rem, 0.9vw, 0.85rem);
		font-weight: 500;
		color: #d5c1af;
		opacity: 0.75;
		margin: 0;
		text-align: left;
	}

	/* ── MODAL ────────────────────────────────── */
	.modal-overlay {
		position: fixed;
		inset: 0;
		z-index: 200;
		background: rgba(0, 0, 0, 0.75);
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 2rem;
	}

	.modal {
		background: #d5c1af;
		max-width: 860px;
		width: 100%;
		max-height: 85vh;
		overflow-y: auto;
		padding: clamp(2rem, 4vw, 3rem);
		position: relative;
	}

	.modal-close {
		position: absolute;
		top: 1.25rem;
		right: 1.25rem;
		background: none;
		border: none;
		font-size: 1.2rem;
		color: #5b8fa3;
		cursor: pointer;
		padding: 0.25rem 0.5rem;
		line-height: 1;
	}

	.modal-close:hover { opacity: 0.65; }

	.modal-title {
		font-family: 'Gilda Display', serif;
		font-style: italic;
		font-weight: 400;
		font-size: clamp(1.4rem, 2.2vw, 1.9rem);
		color: #5b8fa3;
		margin: 0 0 0.4rem 0;
		padding-right: 2rem;
	}

	.modal-meta {
		font-family: 'Montserrat', sans-serif;
		font-size: clamp(0.75rem, 1vw, 0.9rem);
		font-weight: 500;
		color: #5b8fa3;
		opacity: 0.55;
		margin: 0 0 1.5rem 0;
	}

	.modal-desc {
		font-family: 'Montserrat', sans-serif;
		font-size: clamp(0.9rem, 1.3vw, 1.1rem);
		font-weight: 500;
		color: #5b8fa3;
		line-height: 1.6;
		margin: 0 0 2rem 0;
	}

	.modal-images {
		display: grid;
		gap: 1rem;
	}

	.modal-images.combustion { grid-template-columns: 60% 1fr; }
	.modal-images.equal     { grid-template-columns: 1fr 1fr; }
	.modal-images.three     { grid-template-columns: 1fr 1fr 1fr; }
	.modal-images.single    { grid-template-columns: 1fr; max-width: 60%; }

	.modal-img {
		width: 100%;
		height: auto;
		display: block;
	}
</style>
