<template>
  <section
    id="skills"
    class="relative py-24 text-white overflow-hidden"
  >
    <!-- Background -->
    <div class="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900"></div>
    
    <!-- Decorative Elements -->
    <div class="absolute top-20 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
    <div class="absolute bottom-20 left-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"></div>
    <div class="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-orange-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>

    <div class="relative z-10 container mx-auto px-6 md:px-12 lg:px-20">
      <!-- Section Header -->
      <div class="text-center mb-16" data-aos="fade-up">
        <span class="inline-block px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium tracking-wider uppercase mb-4">
          My Expertise
        </span>
        <h1 class="text-4xl sm:text-5xl md:text-6xl font-extrabold">
          Skills & <span class="bg-gradient-to-r from-orange-400 via-red-500 to-orange-500 bg-clip-text text-transparent">Technologies</span>
        </h1>
        <p class="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">
          Tools and technologies I use to bring ideas to life and build outstanding digital products.
        </p>
        <div class="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto mt-6 rounded-full"></div>
      </div>

      <!-- Skills Grid -->
      <div
        class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div
          v-for="(skill, index) in skills"
          :key="skill.name"
          class="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 hover:border-orange-500/30 transition-all duration-500 hover:-translate-y-2"
          :data-aos="'zoom-in'"
          :data-aos-delay="100 + (index * 50)"
        >
          <!-- Glow Effect on Hover -->
          <div class="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-500/20 to-red-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
          
          <!-- Content -->
          <div class="relative">
            <!-- Icon Container -->
            <div class="w-20 h-20 mx-auto mb-4 relative">
              <div class="absolute inset-0 rounded-xl bg-gradient-to-br from-orange-500/20 to-red-500/20 group-hover:from-orange-500/30 group-hover:to-red-500/30 transition-all duration-300"></div>
              <div class="relative w-full h-full flex items-center justify-center p-3">
                <img :src="skill.image" :alt="skill.name" class="w-12 h-12 object-contain group-hover:scale-110 transition-transform duration-300" />
              </div>
            </div>
            
            <!-- Skill Name -->
            <h3 class="text-lg font-bold text-white mb-3 group-hover:text-orange-400 transition-colors duration-300">{{ skill.name }}</h3>
            
            <!-- Progress Bar -->
            <div class="relative">
              <div class="flex justify-between text-sm mb-2">
                <span class="text-gray-500">Proficiency</span>
                <span class="text-orange-400 font-semibold">{{ skill.proficiency }}%</span>
              </div>
              <div class="w-full h-2 bg-gray-700/50 rounded-full overflow-hidden">
                <div 
                  class="h-full rounded-full bg-gradient-to-r from-orange-500 to-red-500 transition-all duration-1000 ease-out"
                  :style="{ width: skill.proficiency + '%' }"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Experience Section -->
      <div class="mt-32">
        <!-- Section Header -->
        <div class="text-center mb-16" data-aos="fade-up">
          <span class="inline-block px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium tracking-wider uppercase mb-4">
            Work History
          </span>
          <h2 class="text-4xl sm:text-5xl font-extrabold">
            My <span class="bg-gradient-to-r from-orange-400 via-red-500 to-orange-500 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p class="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">
            Professional journey and the companies I've had the pleasure to work with.
          </p>
          <div class="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto mt-6 rounded-full"></div>
        </div>

        <!-- Experience Carousel -->
        <Carousel
          :items-to-show="2"
          :items-to-scroll="1"
          wrap-around
          :autoplay="3000"
          pause-autoplay-on-hover
          :breakpoints="carouselBreakpoints"
          class="experience-carousel"
        >
          <Slide v-for="(item, index) in experiences" :key="index">
            <div class="mx-3 h-full">
              <div class="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-full hover:bg-white/10 hover:border-orange-500/30 transition-all duration-500">
                
                
                <!-- Icon -->
                <div class="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500/20 to-red-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <i class="fas fa-briefcase text-orange-400 text-xl"></i>
                 
                </div>
                <!-- Duration Badge -->
                <div class="">
                   <span class="inline-block ml-8  px-4 py-1.5 rounded bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-semibold shadow-lg shadow-orange-500/30">
                    {{ item.duration || 'Experience' }}
                  </span>
                </div>
                <!-- Title -->
                <h3 class="text-xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors duration-300">{{ item.title }}</h3>
                
                <!-- Location -->
                <div class="flex items-center gap-2 text-gray-500 text-sm mb-4">
                  <i class="fas fa-map-marker-alt text-orange-400"></i>
                  <span>{{ item.location }}</span>
                </div>
                
                <!-- Description -->
                <p class="text-gray-400 text-sm leading-relaxed mb-4">{{ item.description }}</p>
                
                <!-- Points -->
                <ul class="space-y-2">
                  <li v-for="point in item.points" :key="point" class="flex items-start gap-3 text-sm text-gray-300">
                    <span class="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 flex-shrink-0"></span>
                    <span>{{ point }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </Slide>

          <template #addons>
            <Navigation />
            <Pagination />
          </template>
        </Carousel>
      </div>
    </div>
  </section>
</template>

<script>
// Importing required modules and styles
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Navigation, Pagination } from 'vue3-carousel';

export default {
  name: "SkillsSection",
  components: {
    Carousel,
    Slide,
    Navigation,
    Pagination
  },

  data() {
    return {
      skills: [
        {
          name: "Vue.js",
          image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
          proficiency: 85,
        },
        {
          name: "Laravel",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1969px-Laravel.svg.png",
          proficiency: 75,
        },
        {
          name: "PHP",
          image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
          proficiency: 75,
        },
        {
          name: "MySQL",
          image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
          proficiency: 87,
        },
        {
          name: "JavaScript",
          image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
          proficiency: 80,
        },
        {
          name: "CSS",
          image: "https://cdn.freebiesupply.com/logos/large/2x/css-3-logo-svg-vector.svg",
          proficiency: 95,
        },
        {
          name: "TailwindCSS",
          image: "https://pbs.twimg.com/profile_images/1730334391501488129/G0R0sjHH_400x400.jpg",
          proficiency: 95,
        },
        {
          name: "Bootstrap",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1280px-Bootstrap_logo.svg.png",
          proficiency: 99,
        },
        {
          name: "HTML",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png",
          proficiency: 99,
        },
        {
          name: "Figma",
          image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
          proficiency: 73,
        },
        {
          name: "Photoshop",
          image: "https://www.cdnlogo.com/logos/a/88/adobe-photoshop.svg",
          proficiency: 70,
        },
        {
          name: "Canva",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGpJ8UFG03-e_wuIAfqnNlnVzUDZ-4Uxxwiw&s",
          proficiency: 70,
        },
      ],
      experiences: [
        {
          title: "Web Developer Internship",
          location: "VuSoftware House, Lawrence Road, Lahore",
          duration: "1 Year",
          description: "Full-stack development using Laravel, Vue.js, Inertia.js, and TailwindCSS.",
          points: [
            "Developed AddPost website in Laravel + Tailwind",
            "Built QuickMeal - Restaurant Management System",
          ],
        },
        {
          title: "Frontend Designer Internship",
          location: "Techxudo, Karachi",
          duration: "1 Month",
          description: "Frontend design and development for client projects.",
          points: [
            "Designed SocialHub website using HTML, CSS, Bootstrap",
            "Built KMJ Logistics website for client",
          ],
        },
        {
          title: "Data Entry Specialist",
          location: "CQ Hostos, Lahore",
          duration: "2022 - 2024",
          description: "2+ years of professional data entry and operations management.",
          points: [
            "Handled and optimized client data operations",
            "Ensured data accuracy and timely delivery",
          ],
        },
      ],
      carouselBreakpoints: {
        0: { itemsToShow: 1 },
        768: { itemsToShow: 1 },
        1024: { itemsToShow: 2 },
      },
    };
  },
};
</script>

<style scoped>
/* Carousel Custom Styles */
.experience-carousel :deep(.carousel__prev),
.experience-carousel :deep(.carousel__next) {
  background: linear-gradient(135deg, #f97316, #ef4444);
  border: none;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  color: white;
  box-shadow: 0 10px 30px rgba(249, 115, 22, 0.3);
  transition: all 0.3s ease;
}

.experience-carousel :deep(.carousel__prev:hover),
.experience-carousel :deep(.carousel__next:hover) {
  transform: scale(1.1);
  box-shadow: 0 15px 40px rgba(249, 115, 22, 0.4);
}

.experience-carousel :deep(.carousel__pagination) {
  margin-top: 2rem;
}

.experience-carousel :deep(.carousel__pagination-button) {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  border: none;
  margin: 0 6px;
  transition: all 0.3s ease;
}

.experience-carousel :deep(.carousel__pagination-button--active) {
  background: linear-gradient(135deg, #f97316, #ef4444);
  transform: scale(1.2);
}

.experience-carousel :deep(.carousel__pagination-button:hover) {
  background: rgba(249, 115, 22, 0.5);
}
</style>
