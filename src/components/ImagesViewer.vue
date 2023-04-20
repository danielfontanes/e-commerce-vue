<template>
  <div class="images-container">
    <div class="main-image">
      <svg 
        v-show="images && imageNumber > 0" 
        @click="previousImage" xmlns="http://www.w3.org/2000/svg"
        fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" 
        class="previous-image w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
      </svg>
      <img 
        :src="images[imageNumber]" alt="imagen del producto">
      <svg 
        v-show="images && imageNumber < images.length - 1" 
        @click="nextImage"
        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
        class="next-image w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
      </svg>
    </div>
    <div class="preview-images">
      <div v-for="(productImage, index) in images" :key="index">
        <img 
          @mouseover="changeImage(index)" 
          :src="productImage" 
          alt="imagen del producto "
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImagesViewer',
  props: {
    images: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      imageNumber: 0
    }
  },
  methods: {
    nextImage() {
      this.imageNumber++;
    },
    previousImage() {
      this.imageNumber--;
    },
    changeImage(index){
      this.imageNumber = index;
    },
  }
}
</script>

<style scoped>
.images-container{
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 500px;
}
.main-image{
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 500px;
  background-color: #F6F6F6;
  border-radius: 0.5rem;
  overflow: hidden;
}
.main-image svg {
  width: 3rem;
  position: absolute;
  bottom: 50%;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 100%;
  padding: 0.5rem;
  margin: 0.5rem
}
.main-image img{
  max-height: 100%;
  max-width: 100%;
  width:100%;
  object-fit: contain;
}

.main-image,
.preview-images div{
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
}
.preview-images{
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
}
.preview-images > div{
  display: flex;
  align-items: center;
  justify-content: center;
  aspect-ratio: 1;
  background-color: #F6F6F6;
  border-radius: 0.5rem;
  overflow: hidden;
}
.preview-images > div:hover{
  border: 2px solid var(--accent-color);
}
.preview-images > div img{
  max-height: 100%;
  max-width: 100%;
}
.previous-image {
  left: 0px;
}
.next-image {
  right: 0px;
}
</style>