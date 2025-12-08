<template>
  <section
    id="projects"
    class="relative py-24 overflow-hidden"
  >
    <!-- Background -->
    <div class="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900"></div>
    
    <!-- Decorative Elements -->
    <div class="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
    <div class="absolute bottom-0 right-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"></div>

    <div class="relative z-10 container mx-auto px-6 md:px-12 lg:px-20">
      <!-- Section Header -->
      <div class="text-center mb-16" data-aos="fade-up">
        <span class="inline-block px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium tracking-wider uppercase mb-4">
          My Work
        </span>
        <h1 class="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white">
          Featured <span class="bg-gradient-to-r from-orange-400 via-red-500 to-orange-500 bg-clip-text text-transparent">Projects</span>
        </h1>
        <p class="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">
          Explore my portfolio of personal and professional projects showcasing creativity and technical expertise.
        </p>
        <div class="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto mt-6 rounded-full"></div>
      </div>

      <!-- Category Filter -->
      <div class="flex flex-wrap justify-center gap-3 mb-12" data-aos="fade-up" data-aos-delay="100">
        <button
          v-for="category in categories"
          :key="category"
          @click="activeCategory = category"
          :class="[
            'px-6 py-2.5 rounded-full font-medium text-sm transition-all duration-300',
            activeCategory === category 
              ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg shadow-orange-500/30' 
              : 'bg-white/5 text-gray-400 border border-white/10 hover:bg-white/10 hover:text-white'
          ]"
        >
          {{ category }}
        </button>
      </div>

      <!-- Projects Grid -->
      <div 
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div
          v-for="(project, index) in filteredProjects"
          :key="project.title"
          class="group"
          :data-aos="'zoom-in'"
          :data-aos-delay="100 + (index * 50)"
        >
          <div class="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-orange-500/30 transition-all duration-500 h-full flex flex-col">
            <!-- Project Image Container -->
            <div class="relative overflow-hidden h-56">
              <img
                v-if="project.image"
                :src="project.image"
                :alt="project.title"
                class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <!-- Overlay on Hover -->
              <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
              
              <!-- Quick Action Buttons (Visible on Hover) -->
              <div class="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                <a
                  v-if="project.liveLink"
                  :href="project.liveLink"
                  target="_blank"
                  class="w-12 h-12 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center text-white shadow-lg shadow-orange-500/30 hover:scale-110 transition-transform duration-300"
                  title="Live Demo"
                >
                  <i class="fas fa-external-link-alt"></i>
                </a>
                <a
                  v-if="project.repoLink"
                  :href="project.repoLink"
                  target="_blank"
                  class="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 hover:scale-110 transition-all duration-300"
                  title="GitHub Repo"
                >
                  <i class="fab fa-github"></i>
                </a>
                <button
                  @click="openGallery(project)"
                  class="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 hover:scale-110 transition-all duration-300"
                  title="View Gallery"
                >
                  <i class="fas fa-images"></i>
                </button>
              </div>

              <!-- Category Badge -->
              <div class="absolute top-4 left-4">
                <span class="inline-block px-3 py-1 rounded-full bg-black/50 backdrop-blur-sm text-white text-xs font-medium border border-white/20">
                  {{ project.category || 'Web App' }}
                </span>
              </div>
            </div>

            <!-- Project Content -->
            <div class="p-6 flex flex-col flex-grow">
              <!-- Title -->
              <h3 class="text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors duration-300">
                {{ project.title }}
              </h3>
              
              <!-- Description -->
              <p class="text-gray-400 text-sm leading-relaxed mb-4 flex-grow">
                {{ project.description }}
              </p>

              <!-- Technologies -->
              <div class="flex flex-wrap gap-2 mb-4">
                <span
                  v-for="tech in project.technologies"
                  :key="tech"
                  class="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 text-xs font-medium hover:border-orange-500/30 hover:text-orange-400 transition-all duration-300"
                >
                  {{ tech }}
                </span>
              </div>

              <!-- Action Links -->
              <div class="flex items-center gap-3 pt-4 border-t border-white/10">
                <a
                  v-if="project.liveLink"
                  :href="project.liveLink"
                  target="_blank"
                  class="flex items-center gap-2 text-sm font-medium text-orange-400 hover:text-orange-300 transition-colors duration-300"
                >
                  <i class="fas fa-globe"></i>
                  <span>Live Demo</span>
                </a>
                <a
                  v-if="project.repoLink"
                  :href="project.repoLink"
                  target="_blank"
                  class="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <i class="fab fa-github"></i>
                  <span>Source Code</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- View More Button -->
      <div class="text-center mt-12" data-aos="fade-up">
        <a
          href="https://github.com/Ali-Hassan24"
          target="_blank"
          class="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-full shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 transform hover:-translate-y-1 hover:scale-105 transition-all duration-300"
        >
          <i class="fab fa-github text-xl"></i>
          <span>View All Projects on GitHub</span>
        </a>
      </div>
    </div>

    <!-- Image Gallery Modal (Prepared for future functionality) -->
    <div 
      v-if="showGallery" 
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      @click.self="closeGallery"
    >
      <div class="relative max-w-4xl w-full bg-gray-900 rounded-2xl overflow-hidden border border-white/10 shadow-2xl" data-aos="zoom-in">
        <!-- Close Button -->
        <button 
          @click="closeGallery"
          class="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors duration-300"
        >
          <i class="fas fa-times"></i>
        </button>

        <!-- Gallery Content -->
        <div class="p-6">
          <h3 class="text-2xl font-bold text-white mb-4">{{ selectedProject?.title }} - Gallery</h3>
          <p class="text-gray-400 mb-6">Click on images to view full size.</p>
          
          <!-- Main Image -->
          <div class="mb-4">
            <img 
              :src="selectedProject?.image" 
              :alt="selectedProject?.title"
              class="w-full h-80 object-cover rounded-xl"
            />
          </div>
          
          <!-- Thumbnail Grid (Placeholder for future images) -->
          <div class="grid grid-cols-4 gap-3">
            <div 
              class="aspect-square rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-500 hover:border-orange-500/30 cursor-pointer transition-all duration-300"
            >
              <img 
                :src="selectedProject?.image" 
                :alt="selectedProject?.title"
                class="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div 
              v-for="i in 3" 
              :key="i"
              class="aspect-square rounded-lg bg-white/5 border border-dashed border-white/20 flex items-center justify-center text-gray-500"
            >
              <i class="fas fa-plus text-xl"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "MyProjects",
  data() {
    return {
      activeCategory: 'All',
      showGallery: false,
      selectedProject: null,
      categories: ['All', 'Vue.js', 'Laravel', 'JavaScript', 'HTML/CSS'],
      projects: [
        {
          title: "QuickMeal",
          description: "A food ordering system built with Vue.js and Laravel for seamless user experience.",
          image: require("@/assets/quickmeal.png"),
          liveLink: "http://54.66.7.254/",
          repoLink: null,
          technologies: ["Vue.js", "Laravel", "Tailwind CSS"],
          category: "Vue.js",
        },
        {
          title: "KMJ Logistics",
          description: "A logistics and transport website designed with responsive layouts and JavaScript.",
          image: require("@/assets/kmj.png"),
          liveLink: "https://ali-hassan24.github.io/KMJ-LOGISTICS/",
          repoLink: null,
          technologies: ["HTML", "CSS", "JavaScript"],
          category: "JavaScript",
        },
        {
          title: "E-Commerce Website",
          description: "A fully responsive e-commerce website template built using modern web technologies.",
          image: require("@/assets/ecom.png"),
          liveLink: "https://ali-hassan24.github.io/e_commerce-website/",
          repoLink: null,
          technologies: ["HTML", "CSS", "Bootstrap", "JavaScript"],
          category: "HTML/CSS",
        },
        {
          title: "Hospital Management",
          description: "A hospital management system built using HTML, CSS, and JavaScript for basic CRUD operations.",
          image: require("@/assets/hospital.png"),
          liveLink: "https://youtu.be/RIb2wWJCnYI",
          repoLink: null,
          technologies: ["HTML", "CSS", "JavaScript"],
          category: "JavaScript",
        },
        {
          title: "Laptops Website",
          description: "A website showcasing laptops with detailed specifications and a modern UI.",
          image: require("@/assets/laptop.png"),
          liveLink: "https://youtu.be/g0EN_sIjwzU",
          repoLink: null,
          technologies: ["HTML", "CSS", "JavaScript"],
          category: "HTML/CSS",
        },
        {
          title: "Portfolio",
          description: "A professional and responsive portfolio website for developers and designers.",
          image: "https://img.youtube.com/vi/pasWDYz1IXw/maxresdefault.jpg",
          liveLink: "https://youtu.be/pasWDYz1IXw",
          repoLink: null,
          technologies: ["HTML", "CSS", "JavaScript"],
          category: "HTML/CSS",
        },
        {
          title: "Game in CSS",
          description: "A simple interactive game designed using only CSS animations and HTML.",
          image: require("@/assets/game.png"),
          liveLink: "https://youtu.be/QbRvuf4xiuI",
          repoLink: null,
          technologies: ["HTML", "CSS", "JavaScript"],
          category: "HTML/CSS",
        },
        {
          title: "CRUD using JavaScript",
          description: "A simple web application for managing users with create, read, update, and delete functionalities.",
          image: require("@/assets/jscrud.png"),
          liveLink: "https://ali-hassan24.github.io/Add_user-/card.html",
          repoLink: null,
          technologies: ["HTML", "CSS", "JavaScript"],
          category: "JavaScript",
        },
        {
          title: "GitHub Finder App",
          description: "Search for GitHub users and view their repositories using the GitHub API.",
          image: require("@/assets/gitFinder.png"),
          liveLink: "https://ali-hassan24.github.io/github_finder/",
          repoLink: null,
          technologies: ["JavaScript", "GitHub API", "Bootstrap"],
          category: "JavaScript",
        },
        {
          title: "Portfolio Template",
          description: "A professional portfolio template for developers and designers, built with responsive design.",
          image: require("@/assets/portfolio.png"),
          liveLink: "https://ali-hassan24.github.io/AliHassan_portfolio/",
          repoLink: "https://github.com/Ali-Hassan24/portfolio",
          technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
          category: "HTML/CSS",
        },
        {
          title: "PostCard (Laravel 11)",
          description: "A Laravel project for creating and managing posts, built with modern Laravel practices.",
          image: require("@/assets/postcard.png"),
          liveLink: null,
          repoLink: "https://github.com/Ali-Hassan24/postCard_laravel11",
          technologies: ["Laravel", "PHP", "MySQL", "Tailwind CSS"],
          category: "Laravel",
        },
        {
          title: "Scientific Calculator",
          description: "A functional scientific calculator designed with JavaScript for advanced calculations.",
          image: require("@/assets/calcualtor.png"),
          liveLink: "https://ali-hassan24.github.io/scientific-calculator-project/",
          repoLink: null,
          technologies: ["JavaScript", "CSS", "HTML"],
          category: "JavaScript",
        },
      ],
    };
  },
  computed: {
    filteredProjects() {
      if (this.activeCategory === 'All') {
        return this.projects;
      }
      return this.projects.filter(project => project.category === this.activeCategory);
    }
  },
  methods: {
    openGallery(project) {
      this.selectedProject = project;
      this.showGallery = true;
      document.body.style.overflow = 'hidden';
    },
    closeGallery() {
      this.showGallery = false;
      this.selectedProject = null;
      document.body.style.overflow = '';
    }
  }
};
</script>

<style scoped>
/* Card hover glow effect */
.group:hover .bg-white\/5 {
  box-shadow: 0 0 40px rgba(249, 115, 22, 0.1);
}

/* Smooth image zoom */
.group img {
  will-change: transform;
}
</style>

  