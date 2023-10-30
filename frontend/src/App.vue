<template>
  <div class="app">
    Test Vue app
  </div>
  <script type="application/javascript" :src="scriptSrc"></script>
</template>

<script>
export default {
  name: 'App',
  setup() {
    const randomHash = Math.random()
    const scriptSrc = `?hash=${randomHash}`

    return {
      scriptSrc
    }
  }
}
</script>
