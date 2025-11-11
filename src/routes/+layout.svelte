<script>
	import '../app.css';
	import logo from '$lib/assets/logo.svg';

	let theme_dark = $state(window.localStorage.getItem('theme') === 'dark' ? true : false);

	$effect(() => {
		window.localStorage.setItem('theme', theme_dark ? 'dark' : 'light');
		document.documentElement.setAttribute('data-theme', theme_dark ? 'dark' : 'light');
	});

	let { children } = $props();
</script>

<div class="drawer">
	<input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content flex flex-col p-4">
		<!-- Navbar -->
		<div
			class="navbar sticky top-4 z-50 mx-auto max-w-7xl rounded-lg border border-white/40 bg-base-300/50 backdrop-blur-sm"
		>
			<div class="flex-none lg:hidden">
				<label
					for="my-drawer-2"
					aria-label="open sidebar"
					class="btn btn-square btn-ghost hover:bg-white/10"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						class="inline-block h-6 w-6 stroke-current"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h16"
						></path>
					</svg>
				</label>
			</div>
			<div>
				<img src={logo} alt="logo" class="mr-1 ml-2 h-10" />
			</div>
			<div class="flex-1 px-2 text-lg font-bold">StarGram</div>
			<div class="hidden flex-none lg:block">
				<ul class="menu menu-horizontal">
					<!-- Navbar menu content here -->
					 <li><a href="/register">Register Temp</a></li>
					<li><a href="/profile">Profile</a></li>
					<li><a>Latest</a></li>
					<li><a>New Post</a></li>
				</ul>
			</div>
			<input
				class="toggle m-2 border-orange-200 bg-white text-orange-200 checked:border-indigo-600 checked:bg-base-100 checked:text-indigo-600"
				type="checkbox"
				bind:checked={theme_dark}
			/>
		</div>
		<!-- Page content here -->
		{@render children?.()}
	</div>
	<div class="drawer-side z-51">
		<label for="my-drawer-2" aria-label="close sidebar" class="drawer-overlay"></label>
		<ul class="menu min-h-full w-80 bg-base-200 p-4 text-lg">
			<!-- Sidebar content here -->
			<div class="divider">
				<img src={logo} alt="logo" class="h-12" />
			</div>
			<li><a href="/register">Register Temp</a></li>
			<li><a href="/profile">Profile</a></li>
			<li><a>Latest</a></li>
			<li><a>New Post</a></li>
		</ul>
	</div>
</div>

<svelte:head>
	<link rel="icon" href={logo} />
</svelte:head>

<style>
</style>
