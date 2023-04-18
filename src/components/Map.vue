<template>
  <div>
    <div class="map-container">
        <img src="https://live.staticflickr.com/7191/6851640198_001f6f97ae_b.jpg" alt="">
      </div>
  </div>
</template>

<script>
export default{
  name:'Map',
  props: {
    lat: {
      type: Number,
      required: true,
    },
    lng: {
      type: Number,
      required: true,
    },
  },
}

</script>

<style scoped>
.map-container {
  border-radius: 20px;
  overflow: hidden;
  width: 600px;
}

.map-container img {
  width: 100%;
}
</style>