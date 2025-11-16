<script>
    let { data } = $props();
    let bio = $state(data.currentUser.bio || "");
</script>