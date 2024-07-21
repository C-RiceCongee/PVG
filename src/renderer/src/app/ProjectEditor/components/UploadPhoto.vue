<template>
  <a-upload-dragger
    v-model:fileList="fileList"
    name="file"
    list-type="picture"
    :multiple="true"
    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
    @change="handleChange"
    @drop="handleDrop"
  >
    <p class="ant-upload-drag-icon">
      <inbox-outlined></inbox-outlined>
    </p>
    <p class="ant-upload-text">点击上传或者拖动多个图片到这里！</p>
    <p class="ant-upload-hint">支持单个或批量上传</p>
  </a-upload-dragger>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { InboxOutlined } from '@ant-design/icons-vue'
import { message } from 'ant-design-vue'
import type { UploadChangeParam } from 'ant-design-vue'

const fileList = ref([
  {
    name: 'DSC_3654.jpg',
    status: 'done',
    url: 'http://localhost:8959/PVG/DSC_3654.jpg'
  }
])
const handleChange = (info: UploadChangeParam) => {
  const status = info.file.status
  if (status !== 'uploading') {
    console.log(info.file, info.fileList)
  }
  if (status === 'done') {
    message.success(`${info.file.name} file uploaded successfully.`)
  } else if (status === 'error') {
    message.error(`${info.file.name} file upload failed.`)
  }
}

function handleDrop(e: DragEvent) {
  console.log(e)
}
</script>
