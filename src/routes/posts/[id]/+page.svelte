<script>
	import Card from '$lib/Components/Card.svelte';

	/** @type {import('./$types').PageProps} */
	let { data } = $props();
	let post = $derived(data.post);
    // svelte-ignore state_referenced_locally
        let formattedDate = new Date(post.creationDate).toLocaleDateString("de-DE", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
    });
	// <Card {post}/>

</script>

<div class="card m-8 card-side border border-white/40 bg-base-100 shadow-md">
	<figure class="w-128 flex flex-col border-r border-white/40 shadow-md">
		<div class="flex items-center justify-between px-2 py-2">
			<div class="badge badge-primary">{post.user.username}</div>
			<span class="text-gray-400">{formattedDate}</span>
		</div>
		<img src={post.imageUrl} alt={post.title} />
	</figure>
	<div class="card-body">
		<h2 class="card-title rounded-lg bg-base-300 p-4">{post.title}</h2>
		<p class="rounded-lg bg-base-300 p-4">{post.caption}</p>
        <div class="divider"></div>
		<div class="card-actions max-h-30 flex-wrap-reverse justify-end overflow-y-auto">
			{#each post.hashtags as hashtag}
				<div class="badge badge-soft text-blue-400 badge-primary">
					<p class="font-extrabold">#</p>
					{hashtag}
				</div>
			{/each}
		</div>
	</div>
</div>


