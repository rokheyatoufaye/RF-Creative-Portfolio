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
			desc: 'Team modeling project designing a functional combustion engine component by component. Responsible for component geometry, tolerance fitting, and final rendered presentation.',
			role: 'Design Engineer',
			scope: 'Pistons, camshafts, and full assembly integration',
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
			desc: 'Wearable fire alert bracelet designed for elderly users with sensory or mobility impairments. Integrates smoke detection, temperature sensing, and vibration, light, and sound alerts in a form meant to be worn through the night.',
			role: 'Design Engineer',
			scope: 'CAD in Onshape, 3D printed housing, empathy mapping and user research',
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
			meta: 'Arduino · C++ · TinkerCAD · 2026',
			desc: 'Responsive lighting system for a skylit art gallery that shifts behavior based on ambient light levels. Three states (full daylight, dim, and dark) each trigger a different environmental condition, from passive cooling to RGB lighting controlled by the visitor and ambient sound. Designing around a skylit room made me think about the gallery and the system as one responsive environment.',
			role: 'Solo designer and engineer',
			scope: 'Arduino circuit design, C++ programming, photoresistor and actuator integration',
			thumbnail: imelisBuild,
			images: [
				{ src: imelisBuild, alt: 'IMELiS physical circuit build' },
				{ src: imelisDiagram, alt: 'IMELiS circuit schematic' }
			],
			layout: 'equal'
		},
		{
			title: 'Air-Powered Mandoline Slicer',
			meta: 'SolidWorks · Fusion 360 · Manual Machining · 2024',
			desc: 'Automatic mandoline slicer driven by an air engine, using a flywheel and slider-crank mechanism to convert rotary motion into a four-inch linear cutting stroke. Materials selected for function: food-safe PLA for the shell, 17-4 PH stainless steel for the blade, and 5052 aluminum for the welded chassis. Each part was verified against dimensional inspection records before assembly.',
			role: 'Manufacturing and Drafting Engineer',
			scope: 'Detail drawings, tolerance setting, material selection, fabrication of machined parts, and CNC flywheel machining via Fusion 360 CAM',
			thumbnail: slicerPhoto,
			images: [
				{ src: slicerPhoto, alt: 'Machined slicer components' },
				{ src: slicerDrawing, alt: 'Mandoline slicer assembly exploded view' }
			],
			layout: 'equal'
		},
		{
			title: 'In-Orbit Heated Press Manufacturing Experiment',
			meta: 'Fusion 360 · COSMIC Capstone Challenge · 2025',
			desc: 'Semi-autonomous orbital manufacturing payload designed and analyzed entirely by a student team to produce and inspect carbon fiber reinforced polymer test strips in microgravity. The system integrates mechanical compression, thermal curing, and post-cure inspection within a 300 W power limit, supported by mechanical and thermal analyses conducted by the team.',
			role: 'Project Lead and CAD Co-Lead',
			scope: 'Team structure, Gantt chart and work breakdown, client meetings, executive summary, manufacturing and cost modeling, part and assembly modeling in Fusion 360',
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
			{#if activeProject.role || activeProject.scope}
				<div class="modal-role-scope">
					{#if activeProject.role}<p><strong>Role:</strong> {activeProject.role}</p>{/if}
					{#if activeProject.scope}<p><strong>Scope:</strong> {activeProject.scope}</p>{/if}
				</div>
			{/if}
			<div class="modal-images {activeProject.layout}">
				{#each activeProject.images as img (img.src)}
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
		color: #29170f;
		margin: 0 0 0.4rem 0;
		padding-right: 2rem;
	}

	.modal-meta {
		font-family: 'Montserrat', sans-serif;
		font-size: clamp(0.75rem, 1vw, 0.9rem);
		font-weight: 500;
		color: #29170f;
		opacity: 0.55;
		margin: 0 0 1.5rem 0;
	}

	.modal-desc {
		font-family: 'Montserrat', sans-serif;
		font-size: clamp(0.9rem, 1.3vw, 1.1rem);
		font-weight: 500;
		color: #29170f;
		line-height: 1.6;
		margin: 0 0 2rem 0;
	}

	.modal-role-scope {
		margin: 0 0 2rem 0;
	}

	.modal-role-scope p {
		font-family: 'Montserrat', sans-serif;
		font-size: clamp(0.9rem, 1.3vw, 1.1rem);
		font-weight: 500;
		color: #29170f;
		line-height: 1.6;
		margin: 0;
	}

	.modal-role-scope strong {
		font-weight: 700;
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

	/* ── RESPONSIVE ─────────────────────────────── */
	@media (max-width: 768px) {
		/* Gallery: drop fullscreen constraint, go 2-col scrollable */
		.gallery {
			grid-template-columns: 1fr 1fr;
			grid-template-rows: none;
			height: auto;
			overflow: visible;
		}

		.tile:nth-child(1),
		.tile:nth-child(2),
		.tile:nth-child(3),
		.tile:nth-child(4),
		.tile:nth-child(5) {
			grid-column: span 1;
			height: 48vw;
		}

		/* Show overlay always on touch (no hover) */
		.tile-overlay {
			opacity: 1;
			background: linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 60%);
		}

		/* Modal: full width, bottom-anchored */
		.modal-overlay {
			padding: 0.75rem;
			align-items: flex-end;
		}

		.modal {
			max-height: 88vh;
			padding: 1.25rem 1rem;
		}

		/* All image grids collapse to single column */
		.modal-images.combustion,
		.modal-images.equal,
		.modal-images.three { grid-template-columns: 1fr; }

		.modal-images.single { max-width: 100%; }
	}

	@media (max-width: 480px) {
		.gallery { grid-template-columns: 1fr; }

		.tile:nth-child(1),
		.tile:nth-child(2),
		.tile:nth-child(3),
		.tile:nth-child(4),
		.tile:nth-child(5) { height: 65vw; }
	}
</style>
