<script>
	export let post;
	$: title = post.title;
	$: image = post.imageUrl;
	$: caption = post.caption;
	$: hashtags = post.hashtags;
  $: username = post.user.username;
</script>

<a href="/posts/{post._id}">
	<div class="card h-128 w-128 max-w-sm border border-white/20 bg-base-100 shadow-xl">
		<figure><img src={image} alt={title} class="h-80 w-full object-cover" /></figure>
		<div class="card-body">
			<h2 class="card-title">{title}</h2>
			<p>{caption}</p>
      <span class="italic text-blue-500/50">Posted by: {username}</span>
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
</a>
