<script>
	import { enhance } from '$app/forms';

	let { data } = $props();
	let bio = $state(data.currentUser.bio || '');
</script>

<div class="mx-auto max-w-md p-8 card w-full min-w-xl border border-white/30 bg-base-100 shadow-sm card-md m-8">
	<h1 class="mb-6 text-3xl font-bold">Edit Profile</h1>

	<form method="POST" enctype="multipart/form-data" use:enhance class="flex flex-col gap-4">
		<div>
			<label for="bio" class="label">New bio</label>
			<textarea
				id="bio"
				name="bio"
				class="textarea-bordered textarea w-full"
				rows="4"
                placeholder="Bio..."
				bind:value={bio}
			></textarea>
		</div>

		<div class="">
			<label for="image" class="label">New profile picture</label>
			<input
				type="file"
				id="image"
				name="image"
				class="file-input-bordered file-input w-full"
				accept="image/*"
			/>
			<span class="label flex flex-col">
				<div class="avatar">
					<div class="w-24 rounded-full mt-6 mx-4">
						<img src={data.currentUser.profilePictureUrl} alt="" />
					</div>
				</div>
				<p>Aktuelles Bild</p>
			</span>
		</div>

		<button type="submit" class="btn mt-4 btn-primary">Save</button>
	</form>
</div>
