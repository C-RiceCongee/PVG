<script setup lang="ts">
import { h } from 'vue'
import { UploadOutlined, AudioOutlined, EditOutlined, ExportOutlined } from '@ant-design/icons-vue'
import { StepProps } from 'ant-design-vue'

const items = [
  {
    title: '上传图片',
    description: '在这里您可以上传您想要处理的图片，快速简单！',
    status: 'process',
    icon: h(UploadOutlined)
  },
  {
    title: '导入音乐',
    description: '导入音乐文件，将为您根据音乐生成卡点视频！',
    status: 'wait',
    icon: h(AudioOutlined)
  },
  {
    title: '调整预览',
    description: '提供一些自定义的调整！',
    status: 'wait',
    icon: h(EditOutlined)
  },
  {
    title: '导出分享',
    description: '最后一步就导出分享吧！',
    status: 'wait',
    icon: h(ExportOutlined)
  }
] as StepProps[]
</script>

<template>
  <a-steps :items="items" direction="vertical"></a-steps>
</template>

<style scoped lang="scss"></style>
