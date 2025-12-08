<template>
  <section
    id="testimonials"
    class="relative py-24 overflow-hidden"
  >
    <!-- Background -->
    <div class="absolute inset-0 bg-gradient-to-b from-gray-800 via-gray-900 to-gray-800"></div>
    
    <!-- Decorative Elements -->
    <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-3xl"></div>
    <div class="absolute bottom-0 left-0 w-[500px] h-[500px] bg-red-500/10 rounded-full blur-3xl"></div>
    
    <!-- Quote Decoration -->
    <div class="absolute top-20 left-10 text-orange-500/10 text-[200px] font-serif leading-none hidden lg:block">"</div>
    <div class="absolute bottom-20 right-10 text-orange-500/10 text-[200px] font-serif leading-none rotate-180 hidden lg:block">"</div>

    <div class="relative z-10 container mx-auto px-6 md:px-12 lg:px-20">
      <!-- Section Header -->
      <div class="text-center mb-16" data-aos="fade-up">
        <span class="inline-block px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium tracking-wider uppercase mb-4">
          Testimonials
        </span>
        <h1 class="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white">
          What Clients <span class="bg-gradient-to-r from-orange-400 via-red-500 to-orange-500 bg-clip-text text-transparent">Say</span>
        </h1>
        <p class="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">
          Don't just take my word for it. Here's what amazing people I've worked with have to say.
        </p>
        <div class="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto mt-6 rounded-full"></div>
      </div>

      <!-- Testimonials Carousel -->
      <Carousel
        :items-to-scroll="1"
        :wrap-around="true"
        :autoplay="5000"
        :pause-autoplay-on-hover="true"
        :breakpoints="carouselBreakpoints"
        class="testimonial-carousel"
      >
        <Slide
          v-for="(testimonial, index) in testimonials"
          :key="index"
        >
          <div class="px-4 py-8">
            <div 
              class="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-orange-500/30 transition-all duration-500"
              data-aos="fade-up"
              :data-aos-delay="index * 100"
            >
              <!-- Quote Icon -->
              <div class="absolute -top-4 -left-2 w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center shadow-lg shadow-orange-500/30">
                <i class="fas fa-quote-left text-white text-lg"></i>
              </div>

              <!-- Rating Stars -->
              <div class="flex justify-end gap-1 mb-6">
                <i v-for="star in 5" :key="star" class="fas fa-star text-orange-400 text-sm"></i>
              </div>

              <!-- Message -->
              <p class="text-gray-300 text-lg leading-relaxed mb-8 italic">
                "{{ testimonial.message }}"
              </p>

              <!-- Divider -->
              <div class="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-6"></div>

              <!-- Profile Section -->
              <div class="flex items-center gap-4">
                <!-- Avatar -->
                <div class="relative">
                  <div class="absolute -inset-1 rounded-full bg-gradient-to-r from-orange-500 to-red-500 opacity-50 blur group-hover:opacity-75 transition-opacity duration-300"></div>
                  <img
                    :src="testimonial.image"
                    :alt="testimonial.name"
                    class="relative w-16 h-16 rounded-full object-cover border-2 border-white/20"
                  />
                </div>
                
                <!-- Info -->
                <div class="flex-grow">
                  <h3 class="text-lg font-bold text-white group-hover:text-orange-400 transition-colors duration-300">
                    {{ testimonial.name }}
                  </h3>
                  <p class="text-gray-500 text-sm">{{ testimonial.role }}</p>
                </div>

                <!-- Country Flag or Icon -->
                <div v-if="testimonial.country" class="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                  <span class="text-xl">{{ testimonial.flag }}</span>
                </div>
              </div>
            </div>
          </div>
        </Slide>

        <!-- Navigation -->
        <template #addons>
          <Navigation />
          <Pagination />
        </template>
      </Carousel>

      <!-- Stats Section -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20" data-aos="fade-up" data-aos-delay="200">
        <div class="text-center p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 hover:border-orange-500/30 transition-all duration-300">
          <div class="text-4xl font-extrabold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent mb-2">50+</div>
          <p class="text-gray-400 text-sm uppercase tracking-wider">Projects Done</p>
        </div>
        <div class="text-center p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 hover:border-orange-500/30 transition-all duration-300">
          <div class="text-4xl font-extrabold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent mb-2">30+</div>
          <p class="text-gray-400 text-sm uppercase tracking-wider">Happy Clients</p>
        </div>
        <div class="text-center p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 hover:border-orange-500/30 transition-all duration-300">
          <div class="text-4xl font-extrabold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent mb-2">3+</div>
          <p class="text-gray-400 text-sm uppercase tracking-wider">Years Experience</p>
        </div>
        <div class="text-center p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 hover:border-orange-500/30 transition-all duration-300">
          <div class="text-4xl font-extrabold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent mb-2">100%</div>
          <p class="text-gray-400 text-sm uppercase tracking-wider">Satisfaction</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation, Pagination } from "vue3-carousel";
import hayfaImage from "../assets/hayfa.png";
import talhaImage from "../assets/talha.jpeg";
import fiazImage from "../assets/fiaz.webp";
import zeeshanImage from "../assets/zeeshan.png";

export default {
  name: "CustomerReviews",
  components: {
    Carousel,
    Slide,
    Navigation,
    Pagination,
  },
  data() {
    return {
      testimonials: [
        {
          name: "Hayfa Hamdan",
          role: "CEO, Swished App",
          image: hayfaImage,
          country: "UK",
          flag: "🇬🇧",
          message:
            "Ali is a pleasure to work with, he is very conscientious, organized, speedy, and with great attention to detail. Highly recommended!",
        },
        {
          name: "Syed Muhammad Talha Shah",
          role: "Founder & CEO - Techxudo",
          image: talhaImage,
          country: "Pakistan",
          flag: "🇵🇰",
          message:
            "Their dedication to delivering top-notch results is evident in everything they do. Truly exceptional service!",
        },
        {
          name: "Fiaz Ahmad",
          role: "Freelancer",
          image: fiazImage,
          country: "Pakistan",
          flag: "🇵🇰",
          message:
            "The process was seamless, and the final output exceeded my expectations. Amazing experience working together!",
        },
        {
          name: "Malik Zeeshan Ali",
          role: "Freelancer",
          image: zeeshanImage,
          country: "Pakistan",
          flag: "🇵🇰",
          message:
            "Outstanding work ethic and incredible attention to detail. Would definitely work with Ali again!",
        },
      ],
      carouselBreakpoints: {
        0: { itemsToShow: 1 },
        768: { itemsToShow: 2 },
        1024: { itemsToShow: 2 },
        1280: { itemsToShow: 3 },
      },
    };
  },
};
</script>

<style scoped>
/* Carousel Custom Styles */
.testimonial-carousel :deep(.carousel__prev),
.testimonial-carousel :deep(.carousel__next) {
  background: linear-gradient(135deg, #f97316, #ef4444);
  border: none;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  color: white;
  box-shadow: 0 10px 30px rgba(249, 115, 22, 0.3);
  transition: all 0.3s ease;
}

.testimonial-carousel :deep(.carousel__prev:hover),
.testimonial-carousel :deep(.carousel__next:hover) {
  transform: scale(1.1);
  box-shadow: 0 15px 40px rgba(249, 115, 22, 0.4);
}

.testimonial-carousel :deep(.carousel__pagination) {
  margin-top: 2rem;
}

.testimonial-carousel :deep(.carousel__pagination-button) {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  border: none;
  margin: 0 6px;
  transition: all 0.3s ease;
}

.testimonial-carousel :deep(.carousel__pagination-button--active) {
  background: linear-gradient(135deg, #f97316, #ef4444);
  transform: scale(1.2);
}

.testimonial-carousel :deep(.carousel__pagination-button:hover) {
  background: rgba(249, 115, 22, 0.5);
}

/* Card hover effect */
.group:hover {
  transform: translateY(-5px);
}
</style>

  