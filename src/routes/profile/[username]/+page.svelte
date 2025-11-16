<script>
	import Card from '$lib/Components/Card.svelte';
	import { bounceIn } from 'svelte/easing';
	let { data } = $props();
	let profileUser = $derived(data.profileUser);
	let posts = $derived(data.posts);
	let loggedInUser = $derived(data.user);
	let isOwner = $derived(loggedInUser && profileUser && loggedInUser.id === profileUser.id);
</script>

<div class="m-8 mx-auto grid grid-cols-1 gap-8 lg:grid-cols-2">
	<div
		class="card w-full min-w-xl border border-white/30 bg-base-100 shadow-sm card-md lg:col-span-2"
	>
		<div class="card-body">
			<div class="flex flex-row">
				<div class="avatar">
					<div class="w-20 rounded-full">
						<img src={profileUser.profilePictureUrl} alt="Profile" />
					</div>
				</div>
				<h2 class="m-4 card-title">{profileUser.username}</h2>
			</div>
			<p class="mx-2 my-4">
				{#if profileUser.bio}
					{profileUser.bio}
				{:else}
					This user has no bio.
				{/if}
			</p>
		</div>
	</div>
	{#if isOwner}
		<div class="lg:col-span-2">
			<a href="/profile/edit" class="badge badge-outline badge-lg badge-primary">Edit Profile</a>
		</div>
	{/if}
	{#each posts as post}
		<Card {post} />
	{/each}
</div>
