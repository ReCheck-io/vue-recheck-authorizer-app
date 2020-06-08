<template>
  <recheck-scanner
    @qr-decode="onDecode"
    :handledByComponent="handledByComponent"
  />
</template>

<script>
export default {
  name: "AppHome",

  data() {
    return {
      handledByComponent: true
    };
  },

  methods: {
    onDecode(res) {
      console.log(res, "data coming from `@qr-decode` event");
    }
  }
};
</script>

<style lang="scss"></style>
