<template>
  <div class="projectManager">
    <a-card title="项目管理" style="width: 80%">
      <template #extra>
        <a-button style="margin-right: 10px" type="primary">创建</a-button>
        <a-button>导入</a-button>
      </template>
      <div class="projectList">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </a-card>
  </div>
</template>

<script lang="ts" setup>
import ProjectCard from '@renderer/components/ProjectCard/index.vue'
</script>

<style lang="scss" scoped>
.projectManager {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .projectList {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
}
</style>
