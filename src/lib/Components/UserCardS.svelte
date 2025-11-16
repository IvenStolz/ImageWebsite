<script>
	export let user;
</script>

<a href="/profile/{user.username}" class="card w-64 border border-white/20 bg-base-100 shadow-sm card-sm">
	<div class="card-body flex-row items-center">
		<div class="avatar avatar-placeholder">
			<div class="w-12 rounded-full bg-neutral text-neutral-content">
				<span>AB</span>
			</div>
		</div>
		<h2 class="mx-2 card-title line-clamp-1 truncate">{user.username}</h2>
	</div>
</a>
