<script>
	import UserCardS from '$lib/Components/UserCardS.svelte';

    /** @type {import('./$types').PageProps} */
    let { data } = $props();
    let users = $derived(data.users);
    let query = $derived(data.query);
</script>

<div class="m-8 mx-auto grid grid-cols-2 gap-8 lg:grid-cols-4">
    <div class="card w-full min-w-md border border-white/30 bg-base-100 shadow-sm card-md col-span-2 lg:col-span-4 flex p-4">
        <h2 class="divider card-title">Suchergebnisse für: {query}</h2>
    </div>
    {#each users as user}
        <UserCardS {user}/>
    {/each}
</div>