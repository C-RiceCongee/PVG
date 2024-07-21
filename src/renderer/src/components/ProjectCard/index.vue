<template>
  <div>
    <a-card hoverable style="width: 240px">
      <template #cover>
        <img alt="example" :src="props.project.cover" />
      </template>
      <a-card-meta :title="props.project.title">
        <template #description>{{ props.project.description }}</template>
      </a-card-meta>
      <template #actions>
        <a-button @click="openProject">打开</a-button>
        <a-button>删除</a-button>
      </template>
    </a-card>
  </div>
</template>

<script setup lang="ts">
import { IProject } from '../../../../types'
import { withDefaults, defineProps } from 'vue'
import { useRouter } from 'vue-router'

interface IProps {
  project: IProject
}

const router = useRouter()
const props = withDefaults(defineProps<IProps>(), {
  project() {
    return {
      id: '1',
      title: '项目1',
      description: '这是项目描述',
      cover: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
    }
  }
})
const openProject = () => {
  router.push(`/projectEditor/${props.project.id}`)
}
</script>
