<script>
	import { enhance } from '$app/forms';
	import Card from '$lib/Components/CardMockUp.svelte';
	import logoPlaceholder from '$lib/assets/placeholderImg.svg';

	let title = $state('');
	let caption = $state('');
	let hashtags = $state('');
	let imageFile = $state();

	let imageURL = $derived.by(() => {
		if (imageFile && imageFile.length > 0) {
			return URL.createObjectURL(imageFile[0]);
		}
		return logoPlaceholder;
	});

	const card = $derived({
		title: title || 'Title...',
		image: imageURL,
		description: caption || 'Caption...',
		hashtags: hashtags
			.split(',')
			.map((tag) => tag.trim())
			.filter((tag) => tag.length > 0)
	});
</script>

<form
	class="flex flex-col items-center justify-center gap-16 p-4 lg:flex-row lg:items-start"
	method="POST"
	enctype="multipart/form-data"
	use:enhance
>
	<fieldset
		class="fieldset flex w-sm flex-col rounded-box border border-base-300 bg-base-200 p-4 shadow-xl"
	>
		<legend class="fieldset-legend text-lg">Upload Image</legend>

		<label class="label">Title</label>
		<input type="text" class="input w-full" placeholder="My new..." name="title" bind:value={title} />

		<label class="label">Caption</label>
		<textarea class="textarea w-full" placeholder="Look at this wonderful..." name="caption" bind:value={caption}
		></textarea>

		<label class="label">Hashtags</label>
		<input type="text" class="input w-full" placeholder="addHashtags, ..." name="hashtags" bind:value={hashtags} />

		<label class="label">Image</label>
		<input
			type="file"
			class="file-input file-input-ghost w-full"
			accept="image/*"
			name="image"
			bind:files={imageFile}
		/>

		<div class="divider mt-auto"></div>

		<button class="btn mt-auto btn-primary">New Post</button>
	</fieldset>
	<div class="w-sm pt-5">
		<Card {...card} />
	</div>
</form>
