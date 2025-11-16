<script>
	import CardMU from '$lib/Components/CardMockUp.svelte';
	import Card from '$lib/Components/Card.svelte';

	const cards = [
		{
			title: 'Bild1',
			image: 'https://picsum.photos/450/300',
			description: 'Lorem ipsum hahaha',
			hashtags: ['hallo', 'test'],
			username: 'a'
		},
		{
			title: 'Bild2',
			image: 'https://picsum.photos/300/300',
			description: 'Ganz viel Text... oder auch nicht',
			hashtags: [
				'gegenTheo',
				'exmatrikulation',
				'dasKufLeiden',
				'damn',
				'wasIstBestehen',
				'finalWeek'
			],
			username: 'a'
		},
		{
			title: 'Bild3',
			image: 'https://picsum.photos/400/200',
			description: 'Ganz viel Text... oder auch nicht',
			hashtags: [],
			username: 'a'
		},
		{
			title: 'Bild4',
			image: 'https://picsum.photos/450/200',
			description: 'Lorem ipsum hahaha',
			hashtags: ['hallo', 'test'],
			username: 'a'
		},
		{
			title: 'Bild5',
			image: 'https://picsum.photos/400/300',
			description: 'Ganz viel Text... oder auch nicht',
			hashtags: [
				'gegenTheo',
				'exmatrikulation',
				'dasKufLeiden',
				'damn',
				'wasIstBestehen',
				'finalWeek'
			],
			username: 'a'
		},
		{
			title: 'Bild6',
			image: 'https://picsum.photos/400/600',
			description: 'Ganz viel Text... oder auch nicht',
			hashtags: []
		}
	];

	let { data } = $props();
	let posts = $derived(data.posts);
</script>

<div class="m-8 mx-auto grid grid-cols-1 gap-8 lg:grid-cols-2">
	<div class="card w-full min-w-md border border-white/30 bg-base-100 shadow-sm card-md lg:col-span-2">
		<div class="card-body">
			<h2 class="divider card-title">Filter</h2>
			<div>
				<!--svg from: 
					https://icons.getbootstrap.com/icons/person/
					https://icons.getbootstrap.com/icons/calendar-date/
					https://icons.getbootstrap.com/icons/alphabet/
				-->
				<button class="btn mr-2 btn-soft" popovertarget="popover-1" style="anchor-name:--anchor-1">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						fill="currentColor"
						class="bi bi-calendar-date"
						viewBox="0 0 16 16"
					>
						<path
							d="M6.445 11.688V6.354h-.633A13 13 0 0 0 4.5 7.16v.695c.375-.257.969-.62 1.258-.777h.012v4.61zm1.188-1.305c.047.64.594 1.406 1.703 1.406 1.258 0 2-1.066 2-2.871 0-1.934-.781-2.668-1.953-2.668-.926 0-1.797.672-1.797 1.809 0 1.16.824 1.77 1.676 1.77.746 0 1.23-.376 1.383-.79h.027c-.004 1.316-.461 2.164-1.305 2.164-.664 0-1.008-.45-1.05-.82zm2.953-2.317c0 .696-.559 1.18-1.184 1.18-.601 0-1.144-.383-1.144-1.2 0-.823.582-1.21 1.168-1.21.633 0 1.16.398 1.16 1.23"
						/>
						<path
							d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"
						/>
					</svg>
					Sort by Date
				</button>
				<ul
					class="menu dropdown w-52 rounded-box bg-base-100 shadow-sm"
					popover
					id="popover-1"
					style="position-anchor:--anchor-1"
				>
					<li><a href="/?sort=newest">Newest</a></li>
					<li><a href="/?sort=oldest">Oldest</a></li>
				</ul>
				<button class="btn mr-2 btn-soft" popovertarget="popover-2" style="anchor-name:--anchor-2">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						fill="currentColor"
						class="bi bi-alphabet"
						viewBox="0 0 16 16"
					>
						<path
							d="M2.204 11.078c.767 0 1.201-.356 1.406-.737h.059V11h1.216V7.519c0-1.314-.947-1.783-2.11-1.783C1.355 5.736.75 6.42.69 7.27h1.216c.064-.323.313-.552.84-.552s.864.249.864.771v.464H2.346C1.145 7.953.5 8.568.5 9.496c0 .977.693 1.582 1.704 1.582m.42-.947c-.44 0-.845-.235-.845-.718 0-.395.269-.684.84-.684h.991v.538c0 .503-.444.864-.986.864m5.593.937c1.216 0 1.948-.869 1.948-2.31v-.702c0-1.44-.727-2.305-1.929-2.305-.742 0-1.328.347-1.499.889h-.063V3.983h-1.29V11h1.27v-.791h.064c.21.532.776.86 1.499.86Zm-.43-1.025c-.66 0-1.113-.518-1.113-1.28V8.12c0-.825.42-1.343 1.098-1.343.684 0 1.075.518 1.075 1.416v.45c0 .888-.386 1.401-1.06 1.401Zm2.834-1.328c0 1.47.87 2.378 2.305 2.378 1.416 0 2.139-.777 2.158-1.763h-1.186c-.06.425-.313.732-.933.732-.66 0-1.05-.512-1.05-1.352v-.625c0-.81.371-1.328 1.045-1.328.635 0 .879.425.918.776h1.187c-.02-.986-.787-1.806-2.14-1.806-1.41 0-2.304.918-2.304 2.338z"
						/>
					</svg>
					Sort by Date
				</button>
				<ul
					class="menu dropdown w-52 rounded-box bg-base-100 shadow-sm"
					popover
					id="popover-2"
					style="position-anchor:--anchor-2"
				>
					<li><a href="/?sort=titleAZ">A-Z</a></li>
					<li><a href="/?sort=titleZA">Z-A</a></li>
				</ul>
				
			</div>
		</div>
	</div>
	{#each posts as post}
		<Card {post} />
	{/each}
</div>
