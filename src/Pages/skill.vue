<template>
  <section
    id="skills"
    class="relative py-24 text-white overflow-hidden"
  >
    <!-- Background -->
    <div class="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900"></div>
    
    <!-- Enhanced Decorative Elements -->
    <div class="absolute top-20 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
    <div class="absolute bottom-20 left-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse-slow" style="animation-delay: 1s;"></div>
    <div class="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-orange-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
    
    <!-- Animated Grid Pattern -->
    <div class="absolute inset-0 opacity-5">
      <div class="absolute inset-0" style="background-image: linear-gradient(rgba(249, 115, 22, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(249, 115, 22, 0.1) 1px, transparent 1px); background-size: 50px 50px;"></div>
    </div>

    <div class="relative z-10 container mx-auto px-6 md:px-12 lg:px-20">
      <!-- Section Header -->
      <div class="text-center mb-20" data-aos="fade-up">
        <span class="inline-block px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium tracking-wider uppercase mb-4 animate-fade-in">
          My Expertise
        </span>
        <h1 class="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4">
          Skills & <span class="bg-gradient-to-r from-orange-400 via-red-500 to-orange-500 bg-clip-text text-transparent animate-gradient-text">Technologies</span>
        </h1>
        <p class="text-gray-400 mt-6 max-w-2xl mx-auto text-lg leading-relaxed">
          Tools and technologies I use to bring ideas to life and build outstanding digital products.
        </p>
        <div class="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto mt-6 rounded-full"></div>
      </div>

      <!-- Skills Categories -->
      <div
        class="grid grid-cols-1 md:grid-cols-3 gap-8"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <!-- Frontend -->
        <div class="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-orange-500/40 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/20">
          <!-- Animated Gradient Background -->
          <div class="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-red-500/5 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500"></div>
          <div class="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl blur-xl transition-opacity duration-500"></div>
          
          <!-- Corner Accent -->
          <div class="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-orange-500/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          <div class="relative">
            <div class="flex items-center gap-4 mb-6">
              <div class="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500/30 to-red-500/30 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg shadow-orange-500/20">
                <i class="fas fa-code text-orange-400 text-xl"></i>
              </div>
              <h3 class="text-2xl font-bold text-white group-hover:text-orange-400 transition-colors duration-300">Frontend Development</h3>
            </div>

            <p class="text-gray-400 text-sm mb-6 leading-relaxed">
              Building fast, responsive, and accessible user interfaces with modern frontend technologies.
            </p>

            <div class="flex flex-wrap gap-3">
              <span 
                v-for="(tech, index) in frontend" 
                :key="tech" 
                class="skill-pill"
                :style="{ animationDelay: `${index * 0.1}s` }"
              >
                <i :class="getSkillIcon(tech)" class="mr-2"></i>
                {{ tech }}
              </span>
            </div>
          </div>
        </div>

        <!-- Backend -->
        <div class="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-orange-500/40 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/20">
          <!-- Animated Gradient Background -->
          <div class="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-red-500/5 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500"></div>
          <div class="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl blur-xl transition-opacity duration-500"></div>
          
          <!-- Corner Accent -->
          <div class="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-orange-500/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          <div class="relative">
            <div class="flex items-center gap-4 mb-6">
              <div class="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500/30 to-red-500/30 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg shadow-orange-500/20">
                <i class="fas fa-server text-orange-400 text-xl"></i>
              </div>
              <h3 class="text-2xl font-bold text-white group-hover:text-orange-400 transition-colors duration-300">Backend Development</h3>
            </div>

            <p class="text-gray-400 text-sm mb-6 leading-relaxed">
              Scalable backend systems, APIs, and databases focused on performance and security.
            </p>

            <div class="flex flex-wrap gap-3">
              <span 
                v-for="(tech, index) in backend" 
                :key="tech" 
                class="skill-pill"
                :style="{ animationDelay: `${index * 0.1}s` }"
              >
                <i :class="getSkillIcon(tech)" class="mr-2"></i>
                {{ tech }}
              </span>
            </div>
          </div>
        </div>

        <!-- Design & AI -->
        <div class="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-orange-500/40 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/20">
          <!-- Animated Gradient Background -->
          <div class="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-red-500/5 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500"></div>
          <div class="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl blur-xl transition-opacity duration-500"></div>
          
          <!-- Corner Accent -->
          <div class="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-orange-500/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          <div class="relative">
            <div class="flex items-center gap-4 mb-6">
              <div class="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500/30 to-red-500/30 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg shadow-orange-500/20">
                <i class="fas fa-paint-brush text-orange-400 text-xl"></i>
              </div>
              <h3 class="text-2xl font-bold text-white group-hover:text-orange-400 transition-colors duration-300">Design & AI Tools</h3>
            </div>

            <p class="text-gray-400 text-sm mb-6 leading-relaxed">
              Visual design, branding, and productivity tools enhanced with AI-assisted workflows.
            </p>

            <div class="flex flex-wrap gap-3">
              <span 
                v-for="(tech, index) in design" 
                :key="tech" 
                class="skill-pill"
                :style="{ animationDelay: `${index * 0.1}s` }"
              >
                <i :class="getSkillIcon(tech)" class="mr-2"></i>
                {{ tech }}
              </span>
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

  computed: {
    totalSkills() {
      return this.frontend.length + this.backend.length + this.design.length;
    }
  },
  methods: {
    getSkillIcon(tech) {
      const iconMap = {
        "HTML5": "fab fa-html5",
        "CSS3": "fab fa-css3-alt",
        "JavaScript": "fab fa-js",
        "Bootstrap": "fab fa-bootstrap",
        "Tailwind CSS": "fab fa-css3-alt",
        "Vue.js": "fab fa-vuejs",
        "React": "fab fa-react",
        "PHP": "fab fa-php",
        "Laravel": "fab fa-laravel",
        "Python": "fab fa-python",
        "MySQL": "fas fa-database",
        "SQL Server": "fas fa-database",
        "Postman": "fas fa-server",
        "InfluxDB": "fas fa-database",
        "Photoshop": "fab fa-adobe",
        "Canva": "fas fa-palette",
        "Graphic Design": "fas fa-paint-brush",
        "AI Design Tools": "fas fa-robot"
      };
      return iconMap[tech] || "fas fa-code";
    }
  },
  data() {
    return {
        frontend: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "Bootstrap",
        "Tailwind CSS",
        "Vue.js",
        "React"
      ],
      backend: [
        "PHP",
        "Laravel",
        "Python",
        "MySQL",
        "SQL Server",
        "Postman",
        "InfluxDB"
      ],
      design: [
        "Photoshop",
        "Canva",
        "Graphic Design",
        "AI Design Tools"
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
/* Animations */
@keyframes pulse-slow {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 0.6; }
}

.animate-pulse-slow {
  animation: pulse-slow 4s ease-in-out infinite;
}

@keyframes fade-in {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-fade-in {
  animation: fade-in 0.6s ease-out;
}

@keyframes gradient-text {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

.animate-gradient-text {
  background-size: 200% 200%;
  animation: gradient-text 3s ease infinite;
}

@keyframes skill-float {
  0%, 100% { transform: translateY(0) scale(1); }
  50% { transform: translateY(-3px) scale(1.05); }
}

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

/* Enhanced Skill Pills */
.skill-pill {
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  background: rgba(249, 115, 22, 0.15);
  color: #fb923c;
  font-size: 0.85rem;
  font-weight: 500;
  border: 1px solid rgba(249, 115, 22, 0.25);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  animation: skill-float 3s ease-in-out infinite;
}

.skill-pill::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s ease;
}

.skill-pill:hover::before {
  left: 100%;
}

.skill-pill:hover {
  background: linear-gradient(135deg, #f97316, #ef4444);
  color: white;
  transform: translateY(-3px) scale(1.05);
  box-shadow: 0 8px 20px rgba(249, 115, 22, 0.4);
  border-color: rgba(249, 115, 22, 0.5);
}

.skill-pill i {
  font-size: 0.9rem;
  transition: transform 0.3s ease;
}

.skill-pill:hover i {
  transform: scale(1.2) rotate(5deg);
}

/* Smooth transitions for cards */
.group {
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Enhanced backdrop blur effect */
.backdrop-blur-sm {
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}
</style>
