<script>
	import Card from '$lib/Components/Card.svelte';
	let {data} = $props();
  let profileUser = $derived(data.profileUser);
  let posts = $derived(data.posts);
</script>



<div class="grid grid-cols-1 lg:grid-cols-2 gap-8 m-8 mx-auto">
  <div class="card w-full bg-base-100 card-md shadow-sm lg:col-span-2 border border-white/30">
  <div class="card-body">
    <h2 class="card-title">{profileUser.username}</h2>
  </div>
</div>
  {#each posts as post}
    <Card {post} />
  {/each}
</div>
