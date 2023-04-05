<template>
    <div class="map-page-container">
      <el-amap
        :center="center"
        :zoom="zoom"
        view-mode="3D"
        :pitch="50"
        :show-building-block="false"
        @init="init"
        @click="mapClick"
        @dbclick="mapDbclick"
      >
        <el-amap-marker
            :position="testMarker.position"
            :visible="testMarker.visible"
            @click="(e:any) => clickMarker(testMarker, e)"
        />
        <el-amap-control-control-bar :visible="true" ></el-amap-control-control-bar>
        <el-amap-layer-buildings :visible="visibleBuilding" />
      </el-amap>
      
    </div>
    <div class="toolbar">
        <el-button @click="switchVisible()">
            {{ visibleBuilding ? '隐藏' : '显示' }}
        </el-button>
        <el-button @click="add()">
            添加标号
        </el-button>
    </div>
</template>
  
<script lang="ts" setup>
    import {ref, reactive} from "vue";
    import { useRouter } from 'vue-router'
    const router = useRouter()

    const zoom = ref(18);
    const visibleBuilding = ref(true);
    const testMarker = reactive({
        position: [121.59996, 31.197646],
        visible: true,
        content: 'hello world',
        id: 'test',
    })

    const center = ref([121.59996, 31.197646]);
    let map:any = null;
    const init = (e:any) => {
        map = e;
        console.log('map init: ', map)
    }
    const add = () => {
        const marker = new AMap.Marker({
        position: [121.59996, 31.177646]
        });
        map.add(marker);
    }
    const mapClick = (e:any) => {
        console.log(e)
    }
    const mapDbclick = (e:any) => {
        console.log(e)
    }
    const clickMarker =(testMarker: { id: any; }, e:any) => {
        console.log(testMarker.id)
        // router.push({ path: `/marker/${testMarker.id}` })
        window.location.href = '/public/pannellum-demo/index.html'
    }
    const switchVisible = () => {
        visibleBuilding.value = !visibleBuilding.value;
    }
</script>
  
<style>
    .map-page-container {
        width: 800px;
        height: 600px;
    }
    .toolbar {
        margin-top: 20px;
    }
</style>
  