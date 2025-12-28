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
          class="group cursor-pointer"
          :data-aos="'zoom-in'"
          :data-aos-delay="100 + (index * 50)"
          @click="openProjectModal(project)"
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
                  @click.stop="openProjectModal(project)"
                  class="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 hover:scale-110 transition-all duration-300"
                  title="View Details"
                >
                  <i class="fas fa-info-circle"></i>
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

    <!-- Project Detail Modal -->
    <div 
      v-if="showProjectModal" 
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md overflow-y-auto"
      @click.self="closeProjectModal"
      @keydown.esc="closeProjectModal"
    >
      <div 
        class="relative max-w-6xl w-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl overflow-hidden border border-white/10 shadow-2xl my-8"
        data-aos="zoom-in"
      >
        <!-- Close Button -->
        <button 
          @click="closeProjectModal"
          class="absolute top-4 right-4 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-red-500/30 hover:scale-110 transition-all duration-300 shadow-lg"
        >
          <i class="fas fa-times text-xl"></i>
        </button>

        <!-- Modal Content -->
        <div class="grid lg:grid-cols-2 gap-0">
          <!-- Left Side - Images -->
          <div class="relative bg-gray-900/50 p-6 lg:p-8">
            <!-- Main Image -->
            <div class="relative mb-4 rounded-xl overflow-hidden group">
              <img 
                :src="selectedProject?.images?.[currentImageIndex] || selectedProject?.image" 
                :alt="selectedProject?.title"
                class="w-full h-96 object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
              />
              <!-- Image Navigation -->
              <button
                v-if="selectedProject?.images && selectedProject.images.length > 1 && currentImageIndex > 0"
                @click.stop="previousImage"
                class="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
              >
                <i class="fas fa-chevron-left"></i>
              </button>
              <button
                v-if="selectedProject?.images && selectedProject.images.length > 1 && currentImageIndex < selectedProject.images.length - 1"
                @click.stop="nextImage"
                class="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
              >
                <i class="fas fa-chevron-right"></i>
              </button>
              <!-- Image Counter -->
              <div v-if="selectedProject?.images && selectedProject.images.length > 1" class="absolute bottom-4 right-4 px-3 py-1 rounded-full bg-black/50 backdrop-blur-sm text-white text-sm">
                {{ currentImageIndex + 1 }} / {{ selectedProject.images.length }}
              </div>
            </div>
            
            <!-- Thumbnail Gallery -->
            <div v-if="selectedProject?.images && selectedProject.images.length > 1" class="grid grid-cols-4 gap-3">
              <div
                v-for="(img, index) in selectedProject.images"
                :key="index"
                @click.stop="currentImageIndex = index"
                :class="[
                  'relative aspect-square rounded-lg overflow-hidden cursor-pointer border-2 transition-all duration-300',
                  currentImageIndex === index 
                    ? 'border-orange-500 scale-105' 
                    : 'border-white/10 hover:border-orange-500/50'
                ]"
              >
                <img 
                  :src="img" 
                  :alt="`${selectedProject?.title} - Image ${index + 1}`"
                  class="w-full h-full object-cover"
                />
                <div v-if="currentImageIndex === index" class="absolute inset-0 bg-orange-500/20"></div>
              </div>
            </div>
          </div>

          <!-- Right Side - Details -->
          <div class="p-6 lg:p-8 overflow-y-auto max-h-[90vh]">
            <!-- Project Title -->
            <div class="mb-6">
              <span class="inline-block px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-medium tracking-wider uppercase mb-3">
                {{ selectedProject?.category || 'Web App' }}
              </span>
              <h2 class="text-3xl lg:text-4xl font-extrabold text-white mb-3">
                {{ selectedProject?.title }}
              </h2>
              <div class="w-16 h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
            </div>

            <!-- Description -->
            <div class="mb-6">
              <h3 class="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                <i class="fas fa-info-circle text-orange-400"></i>
                About Project
              </h3>
              <p class="text-gray-300 leading-relaxed">
                {{ selectedProject?.fullDescription || selectedProject?.description }}
              </p>
            </div>

            <!-- Technologies -->
            <div class="mb-6">
              <h3 class="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                <i class="fas fa-code text-orange-400"></i>
                Technologies Used
              </h3>
              <div class="flex flex-wrap gap-3">
                <span
                  v-for="tech in selectedProject?.technologies"
                  :key="tech"
                  class="px-4 py-2 rounded-full bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 text-orange-300 text-sm font-medium hover:from-orange-500/30 hover:to-red-500/30 transition-all duration-300 flex items-center gap-2"
                >
                  <i :class="getTechIcon(tech)" class="text-orange-400"></i>
                  {{ tech }}
                </span>
              </div>
            </div>

            <!-- Client Information -->
            <div v-if="selectedProject?.client" class="mb-6">
              <h3 class="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                <i class="fas fa-user-tie text-orange-400"></i>
                Client Information
              </h3>
              <div class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
                <p class="text-white font-medium mb-1">{{ selectedProject.client.name }}</p>
                <p v-if="selectedProject.client.type" class="text-gray-400 text-sm">{{ selectedProject.client.type }}</p>
                <p v-if="selectedProject.client.location" class="text-gray-400 text-sm flex items-center gap-2 mt-2">
                  <i class="fas fa-map-marker-alt text-orange-400"></i>
                  {{ selectedProject.client.location }}
                </p>
              </div>
            </div>

            <!-- Project Features -->
            <div v-if="selectedProject?.features && selectedProject.features.length > 0" class="mb-6">
              <h3 class="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                <i class="fas fa-star text-orange-400"></i>
                Key Features
              </h3>
              <ul class="space-y-2">
                <li
                  v-for="(feature, index) in selectedProject.features"
                  :key="index"
                  class="flex items-start gap-3 text-gray-300"
                >
                  <span class="w-2 h-2 rounded-full bg-orange-500 mt-2 flex-shrink-0"></span>
                  <span>{{ feature }}</span>
                </li>
              </ul>
            </div>

            <!-- Action Buttons -->
            <div class="flex flex-col sm:flex-row gap-3 pt-4 border-t border-white/10">
              <a
                v-if="selectedProject?.liveLink"
                :href="selectedProject.liveLink"
                target="_blank"
                class="flex-1 px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50"
              >
                <i class="fas fa-external-link-alt"></i>
                <span>Live Demo</span>
              </a>
              <a
                v-if="selectedProject?.repoLink"
                :href="selectedProject.repoLink"
                target="_blank"
                class="flex-1 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <i class="fab fa-github"></i>
                <span>Source Code</span>
              </a>
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
      showProjectModal: false,
      selectedProject: null,
      currentImageIndex: 0,
      categories: ['All', 'Industrial', 'Remote', 'Personal'],
      projects: [
          {
            title: "Production Monitoring & Press Reporting System",
            description: "A real-time industrial production monitoring and reporting system developed for ZKR using Laravel and Vue.js.",
            fullDescription: "This was my first professional project at Extreme Control Engineering. The system was developed for ZKR, a wood sheet manufacturing company based in Peshawar, Pakistan. It monitors and analyzes press production operations in real time, including sheet production count, press cycle count, sheet thickness, steam pressure, glue flow rate, line speed, and operational faults. The platform provides live dashboards, categorized fault tracking, production forecasting, and detailed reporting with Excel and PDF exports. A role-based access system ensures controlled access for managers and operators, supporting data-driven decision-making on the production floor.",
            image: require("@/assets/Projects/press/zkr.png"),
            images: [
              require("@/assets/Projects/press/zkr.png"),
              require("@/assets/Projects/press/zkr1.png"),
              require("@/assets/Projects/press/zkr2.png"),
              require("@/assets/Projects/press/zkr3.png"),
              require("@/assets/Projects/press/zkr4.png"),
              require("@/assets/Projects/press/zkr5.png"),
              require("@/assets/Projects/press/zkr6.png"),
            ],
            repoLink: null,
            technologies: [
              "Laravel 12",
              "Vue.js",
              "SQL Server",
              "REST APIs",
              "InfluxDB",
              "Excel & PDF Reporting"
            ],
            category: "Industrial",
            client: {
              name: "ZKR",
              type: "Wood Sheet Manufacturing Company",
              location: "Peshawar, Pakistan"
            },
          },
          {
            title: "Production & Downtime Monitoring System",
            description: "A real-time and historical industrial production and downtime monitoring system developed using Laravel and Vue.js.",
            fullDescription: "This project was developed at Extreme Control Engineering for PMI Mardan, a TAMBACO refiner based in Mardan, Pakistan. The system calculates and analyzes production and downtime on a shift-wise basis, providing both live and historical insights into plant performance. It monitors press production counts, machine runtime, downtime events, cycle counts, and operational faults in real time. The platform includes live dashboards for operators, historical trend analysis for management, categorized downtime and fault reporting, and comprehensive production reports with Excel and PDF exports. Role-based access control ensures secure access for managers and operators, enabling data-driven decision-making and continuous process optimization.",
            image: require("@/assets/Projects/mardan/mardan1.jpeg"),
            images: [
              require("@/assets/Projects/mardan/mardan.jpeg"),
              require("@/assets/Projects/mardan/mardan1.jpeg"),
              require("@/assets/Projects/mardan/mardan2.jpeg"),
              require("@/assets/Projects/mardan/mardan3.png"),
              require("@/assets/Projects/mardan/mardan4.png"),
              require("@/assets/Projects/mardan/mardan5.png")
            ],
            repoLink: null,
            technologies: [
              "Laravel 12",
              "Vue.js",
              "SQL Server",
              "REST APIs",
              "InfluxDB",
              "Excel & PDF Reporting"
            ],
            category: "Industrial",
            client: {
              name: "PMI Mardan",
              type: "Tobacco Refiner",
              location: "Mardan, Pakistan"
            },
          },

        {
          title: "QuickMeal",
          description: "A food ordering system built with Vue.js and Laravel for seamless user experience.",
          fullDescription: "QuickMeal is a comprehensive restaurant management and food ordering system that provides a seamless experience for both customers and restaurant owners. The platform features real-time order tracking, menu management, and an intuitive user interface built with modern web technologies.",
          image: require("@/assets/quickmeal.png"),
          images: [require("@/assets/quickmeal.png")],
          repoLink: null,
          technologies: ["Vue.js", "Laravel", "Tailwind CSS", "Inertia.js", "MySQL"],
          category: "Laravel",
          client: {
            name: "VuSoftware House",
            type: "Software Development Company",
            location: "Lawrence Road, Lahore"
          },
          features: [
            "Real-time order management",
            "Menu customization",
            "User authentication & authorization",
            "Responsive design",
            "Admin dashboard"
          ]
        },
        {
          title: "KMJ Logistics",
          description: "A logistics and transport website designed with responsive layouts and JavaScript.",
          fullDescription: "KMJ Logistics is a professional transportation and logistics website designed to showcase services, track shipments, and provide customer support. The website features a modern, responsive design with smooth animations and interactive elements.",
          image: require("@/assets/kmj.png"),
          images: [require("@/assets/kmj.png")],
          liveLink: "https://ali-hassan24.github.io/KMJ-LOGISTICS/",
          repoLink: null,
          technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
          category: "JavaScript",
          client: {
            name: "KMJ Logistics",
            type: "Logistics Company",
            location: "Karachi, Pakistan"
          },
          features: [
            "Responsive design",
            "Service showcase",
            "Contact forms",
            "Modern UI/UX"
          ]
        },
        {
          title: "E-Commerce Website",
          description: "A fully responsive e-commerce website template built using modern web technologies.",
          fullDescription: "A complete e-commerce website template featuring product listings, shopping cart functionality, and a modern, responsive design. Built with Bootstrap for rapid development and JavaScript for interactive features.",
          image: require("@/assets/ecom.png"),
          images: [require("@/assets/ecom.png")],
          liveLink: "https://ali-hassan24.github.io/e_commerce-website/",
          repoLink: null,
          technologies: ["HTML", "CSS", "Bootstrap", "JavaScript"],
          category: "HTML/CSS",
          client: {
            name: "Personal Project",
            type: "Portfolio Project",
            location: "Lahore, Pakistan"
          },
          features: [
            "Product catalog",
            "Shopping cart",
            "Responsive design",
            "Modern UI/UX"
          ]
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
          fullDescription: "A modern, fully responsive portfolio template designed for developers and designers. Features include smooth animations, dark mode support, and a clean, professional layout that showcases work effectively.",
          image: require("@/assets/portfolio.png"),
          images: [require("@/assets/portfolio.png")],
          liveLink: "https://ali-hassan24.github.io/AliHassan_portfolio/",
          repoLink: "https://github.com/Ali-Hassan24/portfolio",
          technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
          category: "HTML/CSS",
          client: {
            name: "Open Source",
            type: "Template Project",
            location: "GitHub"
          },
          features: [
            "Fully responsive",
            "Smooth animations",
            "Modern design",
            "Easy to customize"
          ]
        },
        {
          title: "PostCard (Laravel 11)",
          description: "A Laravel project for creating and managing posts, built with modern Laravel practices.",
          fullDescription: "PostCard is a modern blog/content management system built with Laravel 11. It features a clean interface for creating, editing, and managing posts with full CRUD operations. The project demonstrates modern Laravel best practices including Eloquent ORM, Blade templating, and RESTful routing.",
          image: require("@/assets/postcard.png"),
          images: [require("@/assets/postcard.png")],
          liveLink: null,
          repoLink: "https://github.com/Ali-Hassan24/postCard_laravel11",
          technologies: ["Laravel", "PHP", "MySQL", "Tailwind CSS", "Blade"],
          category: "Laravel",
          client: {
            name: "Personal Project",
            type: "Learning Project",
            location: "Lahore, Pakistan"
          },
          features: [
            "Full CRUD operations",
            "User authentication",
            "Post management",
            "Modern Laravel 11 features",
            "Responsive design"
          ]
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
    openProjectModal(project) {
      this.selectedProject = project;
      this.currentImageIndex = 0;
      this.showProjectModal = true;
      document.body.style.overflow = 'hidden';
    },
    closeProjectModal() {
      this.showProjectModal = false;
      this.selectedProject = null;
      this.currentImageIndex = 0;
      document.body.style.overflow = '';
    },
    nextImage() {
      if (this.selectedProject?.images && this.currentImageIndex < this.selectedProject.images.length - 1) {
        this.currentImageIndex++;
      }
    },
    previousImage() {
      if (this.currentImageIndex > 0) {
        this.currentImageIndex--;
      }
    },
    getTechIcon(tech) {
      const iconMap = {
        "Vue.js": "fab fa-vuejs",
        "Laravel": "fab fa-laravel",
        "Tailwind CSS": "fab fa-css3-alt",
        "Inertia.js": "fas fa-layer-group",
        "MySQL": "fas fa-database",
        "PHP": "fab fa-php",
        "HTML": "fab fa-html5",
        "CSS": "fab fa-css3-alt",
        "JavaScript": "fab fa-js",
        "Bootstrap": "fab fa-bootstrap",
        "React": "fab fa-react",
        "Node.js": "fab fa-node-js",
        "Python": "fab fa-python",
        "Blade": "fas fa-code",
        "GitHub API": "fab fa-github"
      };
      return iconMap[tech] || "fas fa-code";
    }
  },
  mounted() {
    // Close modal on ESC key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.showProjectModal) {
        this.closeProjectModal();
      }
    });
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

/* Modal animations */
@keyframes modalFadeIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.fixed.inset-0 {
  animation: modalFadeIn 0.3s ease-out;
}

/* Smooth scrollbar for modal content */
.overflow-y-auto::-webkit-scrollbar {
  width: 8px;
}

.overflow-y-auto::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 4px;
}

.overflow-y-auto::-webkit-scrollbar-thumb {
  background: rgba(249, 115, 22, 0.3);
  border-radius: 4px;
}

.overflow-y-auto::-webkit-scrollbar-thumb:hover {
  background: rgba(249, 115, 22, 0.5);
}

/* Image transition */
img {
  transition: transform 0.3s ease;
}

/* Thumbnail hover effect */
.cursor-pointer:hover img {
  transform: scale(1.1);
}
</style>

  