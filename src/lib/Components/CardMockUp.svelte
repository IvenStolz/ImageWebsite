<script>
  export let title;
  export let image;
  export let description;
  export let hashtags;
</script>

<div class="card w-128 h-128 max-w-sm bg-base-100 shadow-xl border border-white/20">
  <figure><img src={image} alt={title} class="object-cover h-80 w-full " /></figure>
  <div class="card-body">
    <h2 class="card-title">{title}</h2>
    <p>{description}</p>
    <div class="card-actions justify-end max-h-10 overflow-y-auto flex-wrap-reverse">
        {#each hashtags as hashtag}
            <div class="badge badge-soft badge-primary text-blue-400"><p class="font-extrabold">#</p> {hashtag}</div>
        {/each}
    </div>
  </div>
</div>