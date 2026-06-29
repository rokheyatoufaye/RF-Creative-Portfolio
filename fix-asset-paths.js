import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs';
import { join } from 'path';

const BASE = '/RF-Creative-Portfolio';

function walk(dir) {
	for (const entry of readdirSync(dir)) {
		const full = join(dir, entry);
		if (statSync(full).isDirectory()) {
			walk(full);
		} else if (entry.endsWith('.html')) {
			const original = readFileSync(full, 'utf8');
			const fixed = original.replaceAll('src="/_app/', `src="${BASE}/_app/`);
			if (fixed !== original) {
				writeFileSync(full, fixed, 'utf8');
				console.log('fixed:', full);
			}
		}
	}
}

walk('build');
