import preprocess from "svelte-preprocess";
import adapter from "@sveltejs/adapter-cloudflare-workers";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({
		postcss: true,
		defaults: {
            style: "postcss",
        },
	}),

	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: "#svelte",
		adapter: adapter(),
	}
};

export default config;
