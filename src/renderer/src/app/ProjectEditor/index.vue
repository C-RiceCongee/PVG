<template>
  <div class="editor">
    <div class="left">
      <TopSteps></TopSteps>
    </div>
    <div class="right">
      <UploadPhoto></UploadPhoto>
    </div>
  </div>
</template>
<script lang="ts" setup>
import TopSteps from './components/TopSteps.vue'
import UploadPhoto from './components/UploadPhoto.vue'
</script>
<style lang="scss" scoped>
.editor {
  display: flex;
  .left {
    margin-right: 20px;
  }
  .right {
    flex: 1;
  }
}
</style>
