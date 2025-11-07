<script>
	import Card from '$lib/Components/Card.svelte';

	const cards = [
		{
			title: 'Bild1',
			image: 'https://picsum.photos/450/300',
			description: 'Lorem ipsum hahaha',
            hashtags: ["hallo", "test"],
		},
		{
			title: 'Bild2',
			image: 'https://picsum.photos/300/300',
			description: 'Ganz viel Text... oder auch nicht',
            hashtags: ["gegenTheo", "exmatrikulation", "dasKufLeiden", "damn", "wasIstBestehen", "finalWeek"],
		},
        {
			title: 'Bild3',
			image: 'https://picsum.photos/400/200',
			description: 'Ganz viel Text... oder auch nicht',
            hashtags: [],
		},
		{
			title: 'Bild4',
			image: 'https://picsum.photos/450/200',
			description: 'Lorem ipsum hahaha',
            hashtags: ["hallo", "test"],
		},
		{
			title: 'Bild5',
			image: 'https://picsum.photos/400/300',
			description: 'Ganz viel Text... oder auch nicht',
            hashtags: ["gegenTheo", "exmatrikulation", "dasKufLeiden", "damn", "wasIstBestehen", "finalWeek"],
		},
        {
			title: 'Bild6',
			image: 'https://picsum.photos/400/600',
			description: 'Ganz viel Text... oder auch nicht',
            hashtags: [],
		}
	];
</script>

<div class="grid grid-cols-1 lg:grid-cols-2 gap-8 m-8 mx-auto">
  {#each cards as card}
    <Card {...card} />
  {/each}
</div>