<template>
  <div ref="scrollArea" class="mx-auto flex flex-wrap">
    <h1 class="text-center mb-8">
      Services
    </h1>
    <div ref="services" :class="isVisible ? 'wrapper flex md:gap-10 gap-8 md:flex-row flex-col' : 'third flex md:gap-10 gap-8 md:flex-row flex-col' ">
      <div class="delay1 third">
        <p class="w-full text-gray-600 text-xs md:text-sm">
          Design
        </p>
        <p class="w-full font-bold text-xl  mb-3">
          User Interface
        </p>
        <p class="">
          Beautiful animations and transtions. Seamless on mobile and desktop. We will incorporate your companies current designs for craft them for you. A well-designed front-end can provide a positive user experience and improve the usability and accessibility of a website. This can lead to increased user engagement, higher conversion rates, and better search engine rankings.
        </p>
      </div>
      <div class="delay2 third">
        <p class="w-full text-gray-600 text-xs md:text-sm">
          Something
        </p>
        <p class="w-full font-bold text-xl mb-3">
          Branding
        </p>
        <p class="">
          We can make your company look cool.
        </p>
      </div>
      <div class="delay3 third">
        <p class="w-full text-gray-600 text-xs md:text-sm">
          Efficient
        </p>
        <p class="w-full font-bold text-xl mb-3">
          Performance
        </p>
        <p class="">
          Back-end website development is important because it is responsible for the server-side functionality of a website. This includes things like database management, server-side scripting, and API development. These are the behind-the-scenes processes that allow a website to function properly and perform tasks like user authentication, data storage, and content management. A well-designed back-end system can improve the performance, scalability, and security of a website. Beat the shit outta other major ecommerce platforms.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
//We are going to use dynamic classes and an Intersection Observer to transform and set opacity now
const scrollArea = ref(null)
const services  = ref(null)
const isVisible = ref(false)
const showServices = (entries, observer) => {
  console.log("Scroll area entered?")
  entries.forEach((entry) => {
    if(entry.isIntersecting){
      console.log("yes")
      isVisible.value = true
    }
  })
}

onMounted(async()=>{
  let options = {
    // root: scrollArea.value,
    rootMargin: "0px",
    threshold: 0.1,
  };

  let observer = new IntersectionObserver(showServices, options);
  if(services.value){
    observer.observe(services.value)
  }
})
</script>

<style scoped>
.wrapper .third {
  transform: translateY(0);
  opacity: 100%;
}
.third {
  @apply w-full md:w-1/3 p-5 bg-white flex flex-col flex-grow flex-shrink rounded-lg;
  transform-origin: 0 0;
  transform: translateY(200px);
  opacity: 0;
  transition-property: transform, opacity;
  transition-duration: .5s;
  transition-timing-function: ease;
  box-shadow: 0px 8px 10px 1px rgba(0, 0, 0, 0.2);
}
.delay1 {
  transition-delay: 50ms;
}
.delay2 {
  transition-delay: 200ms;
}
.delay3 {
  transition-delay: 350ms;
}
</style>