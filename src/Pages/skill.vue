<template>
    <section
      id="skills"
      class="py-16 text-white relative bg-cover bg-center bg-no-repeat"
      style="background-image: url('https://img.freepik.com/premium-vector/skills-concept-education-training-improvement-people-get-knowledge-build-career-illustration_277904-4760.jpg'); background-attachment: fixed;"
    >
      <div class="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-gray-800 opacity-70"></div>
      <div class="relative container mx-auto px-4 md:px-20">
        <!-- Title -->
        <div class="text-center mb-10" data-aos="fade-up">
          <h1 class="text-6xl font-bold text-orange-500 tracking-wide">SKILL</h1>
          <h2 class="text-4xl font-bold mt-4">
            Let’s Explore Popular <span class="text-orange-500">Skills & Experience</span>
          </h2>
          <p class="text-gray-300 mt-4">
            Below are some of the tools and technologies I work with to build outstanding projects.
          </p>
        </div>
  
        <!-- Skills Grid -->
        <div
          class="grid grid-cols-2 md:grid-cols-3 gap-6 cursor-pointer"
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="800"
        >
          <div
            v-for="skill in skills"
            :key="skill.name"
            class="bg-gray-800 rounded-lg p-4 shadow-lg text-center transition-transform transform hover:scale-105 hover:bg-gradient-to-l hover:from-orange-400 hover:to-gray-800"
          >
            <img :src="skill.image" :alt="skill.name" class="mx-auto mb-4 h-16 w-16 object-contain" />
            <h3 class="text-lg font-semibold text-white">{{ skill.name }}</h3>
            <div class="mt-2">
              <div class="text-gray-300">{{ skill.proficiency }}%</div>
              <div class="w-full bg-gray-700 h-2 rounded-full mt-1">
                <div :style="{ width: skill.proficiency + '%' }" class="bg-orange-500 h-2 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
  
        <!-- Experience Carousel -->
        <h1 class="text-6xl font-bold text-orange-500 tracking-wide py-6 text-center">My Experience</h1>
        <p class="text-gray-300 mt-4 text-center">
          Below are some of the tools and technologies I work with to build outstanding projects.
        </p>
        <Carousel
          :items-to-show="2"
          :items-to-scroll="1"
          wrap-around
          autoplay="true"
          pause-autoplay-on-hover
          autoplay-timeout="1000"
          :transition="10000"
          :breakpoints="carouselBreakpoints"
          class="my-10"
        >
          <Slide v-for="(item, index) in experiences" :key="index">
            <div class="bg-gray-800 opacity-6 h-52 w-11/12 rounded-lg p-6 shadow-lg">
              <h3 class="text-xl font-semibold text-orange-500 mb-2">{{ item.title }}</h3>
              <p class="text-gray-300 text-sm">{{ item.location }}</p>
              <p class="text-gray-400 mt-4 text-justify">{{ item.description }}</p>
              <ul class="list-disc list-inside mt-4 text-gray-300">
                <li v-for="point in item.points" :key="point" class="text-sm">
                  {{ point }}
                </li>
              </ul>
            </div>
          </Slide>
  
          <template #addons>
            <Navigation class="bg-orange-500 p-3 rounded-full text-4xl text-white" />
            <Pagination :class="' rounded-full text-4xl text-orange-500'" />
          </template>
        </Carousel>
      </div>
    </section>
  </template>
  

<script>
// Importing required modules and styles
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Navigation, Pagination } from 'vue3-carousel';

export default {
    name: "SkillsSection",
    components:{
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
                    image: "https://static-00.iconduck.com/assets.00/tailwind-css-icon-2048x1229-u8dzt4uh.png",
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
            experiences : [
                    {
                        title: "Internship in VuSoftware house",
                        location: "Lawrence Road, Lahore - Pakistan",
                        description: "1 year experience as Web Developer (Laravel, Vue.js, Inertia, TailwindCSS + HTML).",
                        points: [
                            "Developed AddPost website in Laravel + Tailwind",
                            "Built a Restaurant Management System (QuickMeal)",
                        ],
                    },
                    {
                        title: "Internship in Techxudo",
                        location: "Karachi - Pakistan",
                        description: "One month working in Techxudo as a Frontend Designer.",
                        points: ["Designed a website (SocialHub) using HTML, CSS, and Bootstrap.",
                          "Built a KMJ logiceslt website for Client"
                        ],
                    },
                    {
                        title: "Job in CQ Hostos",
                        location: "Lahore - Pakistan (2022 - 2024)",
                        description: "2+ years of experience in data entry work.",
                        points: ["Handled and optimized client data operations."],
                    },
                   
                ],
            carouselBreakpoints: {
                768: { itemsToShow: 1 }, // Mobile screens
                1024: { itemsToShow: 2 }, // Laptop screens
            },
        };
    },
};
</script>

<style scoped>
/* Optional: Custom styles for carousel and cards */
</style>
