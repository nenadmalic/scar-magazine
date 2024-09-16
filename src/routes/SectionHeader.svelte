<script>
    export let title = '';
    export let latestContent = '';
    export let iconSrc = '/skull-dark-purple.png';
  </script>
  
  <div class="d-flex align-items-center bg-white text-black py-4 pb-4">
      <img src={iconSrc} alt="Section Icon" style="width:2.3rem;height:2.3rem;margin:0 0.5rem 0.4rem 0;">
      <h1 class="me-3 mb-0"><b>{title}</b></h1>
      <div class="pb-1 mb-0 text-black">Latest {title.toLowerCase()}: {latestContent}</div>
  </div>