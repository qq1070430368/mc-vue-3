<template>
  <div class="el-height-full">
    <div id="mapid" style="height:800px"></div>
  </div>
</template>
<script>
// import { LMap, LTileLayer, LMarker, LPopup } from 'vue2-leaflet';
// import { Icon } from 'leaflet'
import 'leaflet/dist/leaflet.css';
export default {
  data () {
    return {
      zoom: 13,
      center: L.latLng(47.413220, -1.219482),
      url: 'https://webrd0{s}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}',
      attribution: '&copy; 高德地图',
      subdomains: ['1', '2', '3', '4'],
      marker: L.latLng(47.413220, -1.219482),
      text: 'this is a marker'
    };
  },
  components: {
    // LMap,
    // LTileLayer,
    // LMarker,
    // LPopup
  },
  mounted () {
    var mymap = L.map('mapid', {
      zoom: 10, // 初始聚焦程度
      center: [23.16, 113.23], // 广州
      minZoom: 3, // 最宽广，越小越宽广
      maxZoom: 18 // 最细致，越大越细致
    });
    L.tileLayer('https://webrd0{s}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}', {
      subdomains: ['1', '2', '3', '4'], // 可用子域名，用于浏览器并发请求
      attribution: '&copy; 高德地图' // 可以修改为其它内容
    }).addTo(mymap); // 添加tile层到地图
  }
};
</script>
