<script setup lang="ts">
  var isTouch = false;
  var currentScene = "first";
  var isVr = false;
  function load() {
    console.log(123);
  }
  function clickTestBtn(e) {
    if (!isTouch) {
      console.log(e);
      document.querySelector(".mask").style.display = "block";
    }
  }
  function toXiaochengxu() {
    // wx.miniProgram.navigateTo({
    //   url: "/pages/index/index",
    // });
  }
  const viewer = pannellum.viewer("panorama", {
    default: {
      firstScene: "first",
      cubeMap: [
        //立方体全景图六张图
        "https://img.alicdn.com/imgextra/i4/O1CN014TNffn1nlaTfA98Fg_!!6000000005130-0-tps-1500-1500.jpg",
        "https://img.alicdn.com/imgextra/i3/O1CN01LsO1Bk20QbKpFTUQr_!!6000000006844-0-tps-1500-1500.jpg",
        "https://img.alicdn.com/imgextra/i1/O1CN01sS5m781ya6JgLSaVk_!!6000000006594-0-tps-1500-1500.jpg",
        "https://img.alicdn.com/imgextra/i3/O1CN01uTWCLc1XOCOuA92H0_!!6000000002913-0-tps-1500-1500.jpg",
        "https://img.alicdn.com/imgextra/i4/O1CN016lU3YJ1JdrJuFTcWt_!!6000000001052-0-tps-1500-1500.jpg",
        "https://img.alicdn.com/imgextra/i2/O1CN01nYe2Mn1ohkmBVyKpp_!!6000000005257-0-tps-1500-1500.jpg",
      ],
      orientationOnByDefault: false, // 是否开启vr效果
      autoLoad: true, // 自动加载
      autoRotate: -2, // 自动旋转
      autoRotateInactivityDelay: 1000, // 用户操作页面后，自动旋转延迟
      friction: 0.15, // 控制摩擦器 0.1 到 1 值越大停的越快 默认值0.15
      showZoomCtrl: false, // 是否显示缩放控件
      showFullscreenCtrl: true, // 是否显示全屏控件
      touchPanSpeedCoeffFactor: 1, // 触摸时平移速度 默认1
      yaw: 0, // 垂直方向左右旋转角度 正值向右 负值向左
      pitch: -60, // 水平方向左右旋转角度 正值向上 负值向下 仰视太大 导致图片拉伸
      minPitch: -60, // 最小pitch 默认-180
      maxPitch: 60, // 最大pitch 默认180
      roll: 0, // z轴 横着的
      hfov: 60, // 摄像机视角
      minHfov: 10, // 摄像机最小视角
      maxHfov: 60, // 摄像机最大视角
      escapeHTML: true, // HTML 将从配置字符串中转义，以帮助缓解可能的 DOM XSS 攻击。
      crossOrigin: "anonymous", // 使用的 CORS 请求类型，可以设置为 anonymous或use-credentials。默认为anonymous.
      sceneFadeDuration: 1000, // 切换场景时动画持续时间
      // compass: true, // 指南针
      // northOffset: 90, // 指南针角度
      // horizonRoll: 10, // 指定图像水平的俯仰/滚动
      // hotSpotDebug: true, // 打印移动时的yaw pitch roll
      preview:
        "https://img.alicdn.com/imgextra/i4/O1CN014TNffn1nlaTfA98Fg_!!6000000005130-0-tps-1500-1500.jpg",
    },
    scenes: {
      first: {
        type: "cubemap", // 全景图类型
        hotSpots: [
          {
            yaw: -30,
            pitch: -16,
            type: "scene",
            sceneId: "second",
            // id: "one",
            // text: "另一个画面",
            cssClass: "point",
            // image: "./images/hot.png",
            scale: true,
          },
          {
            yaw: -6,
            pitch: -26,
            cssClass: "test",
            clickHandlerFunc: clickTestBtn,
            scale: true,
            // image: "./images/hot.png",
          },
          {
            yaw: 10,
            pitch: 15,
            roll: -10,
            cssClass: "xiaochengxu",
            clickHandlerFunc: toXiaochengxu,
            scale: true,
            // image: "./images/hot.png",
          },
        ],
      },
      second: {
        type: "cubemap",
        cubeMap: [
          "https://krpano-pro.oss-accelerate.aliyuncs.com/static/resource/publish/krpano/1481085216446902274/quanjing/2205/40419783638860705/pano_f.jpg?x-oss-process=style/nocut_compress",
          "https://krpano-pro.oss-accelerate.aliyuncs.com/static/resource/publish/krpano/1481085216446902274/quanjing/2205/40419783638860705/pano_r.jpg?x-oss-process=style/nocut_compress",
          "https://krpano-pro.oss-accelerate.aliyuncs.com/static/resource/publish/krpano/1481085216446902274/quanjing/2205/40419783638860705/pano_b.jpg?x-oss-process=style/nocut_compress",
          "https://krpano-pro.oss-accelerate.aliyuncs.com/static/resource/publish/krpano/1481085216446902274/quanjing/2205/40419783638860705/pano_l.jpg?x-oss-process=style/nocut_compress",
          "https://krpano-pro.oss-accelerate.aliyuncs.com/static/resource/publish/krpano/1481085216446902274/quanjing/2205/40419783638860705/pano_u.jpg?x-oss-process=style/nocut_compress",
          "https://krpano-pro.oss-accelerate.aliyuncs.com/static/resource/publish/krpano/1481085216446902274/quanjing/2205/40419783638860705/pano_d.jpg?x-oss-process=style/nocut_compress",
        ],
        hotSpots: [
          {
            pitch: 0,
            yaw: 20,
            type: "info",
            id: "one",
            text: "123",
            // image: "./images/hot.png",
          },
          {
            pitch: 20,
            yaw: 20,
            type: "scene",
            sceneId: "first",
            id: "two",
            text: "第一个画面",
            // image: "./images/hot.png",
          },
        ],
      },
    },
  });

  function test() {
    var test = document.querySelector(".test");
    console.log(test);
    test.innerHTML =
      "打开弹出框<div class='test-child'>点击这里打开弹出框</div>";
    // test.onclick = (e) => {
    //   document.querySelector(".mask").style.display = "block";
    // };
    document.querySelector(".maskBtn").addEventListener("click", () => {
      document.querySelector(".mask").style.display = "none";
    });
  }
  viewer.on("load", (e) => {
    // console.log(e);
    // if (e === "first") {
    setTimeout(() => {
      test();
    }, 0);
    // }
  });
  viewer.on("touchstart", () => {
    isTouch = true;
  });
  viewer.on("touchend", () => {
    isTouch = false;
    if (isVr) {
      viewer.startOrientation();
    }
  });
  viewer.on("scenechange", (e) => {
    if (e === "first") {
      document.querySelector(".map-one-fov").style.opacity = 1;
      document.querySelector(".map-one-fov").style.transform =
        "rotate(0deg)";
      document.querySelector(".map-two-fov").style.opacity = 0;
      document.querySelector(".map-two-fov").style.transform =
        "rotate(0deg)";
    } else {
      document.querySelector(".map-one-fov").style.opacity = 0;
      document.querySelector(".map-one-fov").style.transform =
        "rotate(0deg)";
      document.querySelector(".map-two-fov").style.opacity = 1;
      document.querySelector(".map-two-fov").style.transform =
        "rotate(0deg)";
    }
    currentScene = e;
  });
  document.addEventListener("mousemove", () => {
    // console.log(viewer.getYaw());
    let deg = viewer.getYaw();
    document.querySelector(
      ".map-one-fov"
    ).style.transform = `rotate(${deg}deg)`;
    document.querySelector(
      ".map-two-fov"
    ).style.transform = `rotate(${deg}deg)`;
  });
  document.addEventListener("touchmove", () => {
    // console.log(viewer.getYaw());
    let deg = viewer.getYaw();
    document.querySelector(
      ".map-one-fov"
    ).style.transform = `rotate(${deg}deg)`;
    document.querySelector(
      ".map-two-fov"
    ).style.transform = `rotate(${deg}deg)`;
  });
  document.querySelector(".map").addEventListener("click", () => {
    document.querySelector(".map").style.width = "70%";
    document.querySelector(".map").style.height = "70vh";
    document.querySelector(".map-close").style.display = "block";
  });
  document.querySelector(".map-one").addEventListener("click", (e) => {
    e.stopPropagation();
    if (currentScene !== "first") {
      viewer.loadScene("first");
    }
    handleMapStyle();
  });
  document.querySelector(".map-two").addEventListener("click", (e) => {
    e.stopPropagation();
    if (currentScene !== "second") {
      viewer.loadScene("second");
    }
    handleMapStyle();
  });
  document.querySelector(".map-close").addEventListener("click", (e) => {
    e.stopPropagation();
    handleMapStyle();
  });
  document.querySelector(".mask-vr").addEventListener("click", (e) => {
    e.stopPropagation();
    // 是否支持

    if (viewer.isOrientationSupported()) {
      if (document.querySelector(".mask-vr").innerText === "开启vr") {
        viewer.startOrientation();
        document.querySelector(".mask-vr").innerText = "关闭vr";
        isVr = true;
        // document.querySelector(".mask-bk").style.display = "block";
      } else {
        viewer.stopOrientation();
        document.querySelector(".mask-vr").innerText = "开启vr";
        document.querySelector(".mask-bk").style.display = "none";
        isVr = false;
      }
    } else {
      alert("当前设备不支持vr");
    }
  });
  function handleMapStyle() {
    document.querySelector(".map").style.width = "100px";
    document.querySelector(".map").style.height = "100px";
    document.querySelector(".map-close").style.display = "none";
  }
  viewer.on("animatefinished", (e) => {
    console.log("animation", e);
  });
  window.addEventListener("devicemotion", function (event) {
    // devicemotion 和服务有关系 需要https服务才支持
    let deg = viewer.getYaw();
    document.querySelector(
      ".map-one-fov"
    ).style.transform = `rotate(${deg}deg)`;
    document.querySelector(
      ".map-two-fov"
    ).style.transform = `rotate(${deg}deg)`;
  });
</script>

<template>
  <div>
    <div id="panorama"></div>
    <div class="mask">
      dasdasda
      <div class="maskBtn">X</div>
    </div>
    <!-- 地图 -->
    <div class="map">
      <div class="map-close">❌</div>
      <div class="map-one">
        <div class="map-one-fov"></div>
      </div>
      <div class="map-two">
        <div class="map-two-fov"></div>
      </div>
    </div>
    <div class="mask-vr">开启vr</div>
    <div class="mask-bk"></div>
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
#panorama {
  width: 100%;
  height: 100vh;
  position: relative;
}
.pnlm-hotspot-base {
  /* width: 60px; */
}
.pnlm-hotspot-base span {
  color: red !important;
}
.pnlm-load-box {
  display: none !important;
}
.test {
  width: 80px;
  height: 20px;
  background-color: #2b577a;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  cursor: pointer;
}
.test-child {
  position: absolute;
  width: 100px;
  height: 40px;
  background: rgba(0, 0, 0, 0.5);
  top: -50px;
  left: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.point {
  width: 80px;
  height: 80px;
  background: url("http://vrfiles.tangdaoyou.com/def_material/148297810882124i.png?v=2.0001");
  /* background-color: #2b577a; */
  background-size: 80px 2000px;
  transform-origin: 50% 50%;
  background-position: 0px 0px;
  background-position-y: 0px;
  /* z-index: 12; */
  /* animation: loop 6s ease infinite; */
}
.point::after {
  content: "守护营地";
  position: absolute;
  width: 100px;
  height: 40px;
  background: rgba(0, 0, 0, 0.5);
  top: -20px;
  color: white;
  text-align: center;
  line-height: 40px;
  font-size: 14px;
}
.mask {
  width: 400px;
  height: 500px;
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: none;
}
.mask > div {
  position: absolute;
  width: 50px;
  height: 50px;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  bottom: -60px;
  border-radius: 50%;
  left: 50%;
  transform: translate(-50%, 0);
}
.map {
  position: absolute;
  width: 100px;
  height: 100px;
  background: rgba(0, 0, 0, 0.5);
  z-index: 10;
  right: 0;
  top: 0;
}
.map-close {
  position: absolute;
  font-size: 16px;
  right: 10px;
  top: 10px;
  display: none;
}
.map-one {
  width: 40px;
  height: 40px;
  border: 1px solid #fff;
  margin: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.map-two {
  width: 40px;
  height: 40px;
  border: 1px solid #fff;
  margin: 5px;
  float: right;
  display: flex;
  align-items: center;
  justify-content: center;
}
.map-one-fov {
  width: 10px;
  height: 10px;
  background: #fff;
  border-radius: 50%;
  position: relative;
  transform: rotate(0deg);
}
.map-one-fov::after {
  content: "";
  position: absolute;
  width: 4px;
  height: 10px;
  top: -10px;
  left: 50%;
  transform: translate(-50%, 0);
  background-color: salmon;
}
.map-two-fov {
  width: 10px;
  height: 10px;
  background: #fff;
  border-radius: 50%;
  position: relative;
  transform: rotate(0deg);
  opacity: 0;
}
.map-two-fov::after {
  content: "";
  position: absolute;
  width: 4px;
  height: 10px;
  top: -10px;
  left: 50%;
  transform: translate(-50%, 0);
  background-color: salmon;
}
.xiaochengxu {
  /* height: 40px; */
  background: #2b577a;
  padding: 5px;
  color: white;
  font-size: 12px;
  box-sizing: border-box;
}
.xiaochengxu::after {
  content: "小程序123";
}
.mask-vr {
  position: absolute;
  bottom: 5px;
  right: 5px;
  padding: 10px;
  font-size: 12px;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  z-index: 10;
}
.mask-bk {
  position: absolute;
  width: 100%;
  height: 100vh;
  background-color: transparent;
  left: 0;
  top: 0;
  display: none;
}
.pnlm-orientation-button {
  display: none !important;
}
</style>
