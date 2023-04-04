<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()

const goRoute = (routeLink:string) => {
    console.log(routeLink)
    router.push({ path: routeLink })
}
</script>

<template>
  <el-button type="primary" plain @click="goRoute('/amap')">进入地图</el-button>
</template>

<style scoped>
</style>
