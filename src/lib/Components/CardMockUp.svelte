<script>
	export let title;
	export let image;
	export let description;
	export let hashtags;
  /**
   * @type String | null
   */
	export let username = null;
	let formattedDate = new Date().toLocaleDateString('de-DE', {
		day: '2-digit',
		month: '2-digit',
		year: 'numeric'
	});
</script>

<div class="card h-150 max-w-md border border-white/20 bg-base-100 shadow-xl">
	<div class="flex items-center justify-between px-2 py-2">
		<div class="badge badge-primary">
			{#if username}
				{username}
			{:else}
				<span class="italic">Unknown User</span>
			{/if}
		</div>
		<span class="text-gray-400">{formattedDate}</span>
	</div>
	<figure><img src={image} alt={title} class="h-80 w-full object-cover" /></figure>
	<div class="card-body">
		<h2 class="card-title">{title}</h2>
		<p>{description}</p>
		<div class="card-actions max-h-10 flex-wrap-reverse justify-end overflow-y-auto">
			{#each hashtags as hashtag}
				<div class="badge badge-soft text-blue-400 badge-primary">
					<p class="font-extrabold">#</p>
					{hashtag}
				</div>
			{/each}
		</div>
	</div>
</div>
