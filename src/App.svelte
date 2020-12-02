<script>
   import {Route, active, router} from 'tinro';
  import {onMount} from 'svelte';
  let count = 0;
  onMount(() => {
    const interval = setInterval(() => count++, 1000);
    return () => {
      clearInterval(interval);
    };
  });
</script>

<style>
</style>

<Route path="/" let:params><h1>It is main page</h1></Route>
<Route path="/one"><h1><a href="/two">Go to API page</a></h1></Route>
<Route path="/two"><h1>It is d page</h1></Route>
<Route path="/three"><h1>It is t6 page</h1></Route>