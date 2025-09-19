<script>
  let { data } = $props();
  const member = data.member;
</script>

<main class="profile-card">
    <section class="profile-info">
      <img
      src={`https://fdnd.directus.app/assets/${member.mugshot}`}
      width="250"
      alt="student-{member.name}"/>
      <div class="text-info">
        <h2>{member.name}</h2>
        <p>{member.fav_emoji}</p>
      </div>
      <p>{member.bio}</p>
      <a href="https://github.com/{member.github_handle}"><i class="fa-brands fa-github"></i></a>
    </section>
</main>






