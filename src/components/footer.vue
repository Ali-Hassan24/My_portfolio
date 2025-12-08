<template>
  <footer class="relative overflow-hidden">
    <!-- Background -->
    <div class="absolute inset-0 bg-gradient-to-b from-gray-900 to-black"></div>
    
    <!-- Decorative Elements -->
    <div class="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
    <div class="absolute bottom-0 right-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-3xl"></div>

    <!-- Top Border Gradient -->
    <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent"></div>

    <div class="relative z-10">
      <!-- Main Footer Content -->
      <div class="container mx-auto px-6 md:px-12 lg:px-20 py-16">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <!-- Brand Section -->
          <div class="lg:col-span-2">
            <div class="flex items-center gap-3 mb-6">
              <div class="relative">
                <div class="absolute -inset-1 rounded-full bg-gradient-to-r from-orange-500 to-red-500 opacity-50 blur"></div>
                <img
                  src="../assets/my_pic2.png"
                  alt="Ali Hassan"
                  class="relative w-12 h-12 rounded-full border-2 border-white/20 object-cover"
                />
              </div>
              <div>
                <h2 class="text-xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                  Ali Hassan
                </h2>
                <p class="text-gray-500 text-sm">Full Stack Web Developer</p>
              </div>
            </div>
            <p class="text-gray-400 text-sm leading-relaxed max-w-md mb-6">
              Passionate about creating beautiful, functional, and user-friendly web experiences. 
              Let's work together to bring your ideas to life.
            </p>
            
            <!-- Social Links -->
            <div class="flex gap-3">
              <a 
                href="https://github.com/Ali-Hassan24" 
                target="_blank" 
                class="group w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-orange-500/30 transition-all duration-300"
              >
                <i class="fab fa-github text-gray-400 group-hover:text-white transition-colors duration-300"></i>
              </a>
              <a 
                href="https://www.linkedin.com/in/ali-hassan-406147283/" 
                target="_blank" 
                class="group w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-500/20 hover:border-blue-500/30 transition-all duration-300"
              >
                <i class="fab fa-linkedin-in text-gray-400 group-hover:text-blue-400 transition-colors duration-300"></i>
              </a>
              <a 
                href="https://wa.me/923034340620" 
                target="_blank" 
                class="group w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-green-500/20 hover:border-green-500/30 transition-all duration-300"
              >
                <i class="fab fa-whatsapp text-gray-400 group-hover:text-green-400 transition-colors duration-300"></i>
              </a>
              <a 
                href="https://www.youtube.com/@AliHassan-jq8dr" 
                target="_blank" 
                class="group w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-red-500/20 hover:border-red-500/30 transition-all duration-300"
              >
                <i class="fab fa-youtube text-gray-400 group-hover:text-red-400 transition-colors duration-300"></i>
              </a>
            </div>
          </div>

          <!-- Quick Links -->
          <div>
            <h3 class="text-white font-semibold mb-6 flex items-center gap-2">
              <span class="w-2 h-2 rounded-full bg-gradient-to-r from-orange-500 to-red-500"></span>
              Quick Links
            </h3>
            <ul class="space-y-3">
              <li v-for="link in quickLinks" :key="link.name">
                <a 
                  :href="'#' + link.target" 
                  @click.prevent="scrollTo(link.target)"
                  class="text-gray-400 text-sm hover:text-orange-400 transition-colors duration-300 flex items-center gap-2"
                >
                  <i class="fas fa-chevron-right text-xs text-orange-500/50"></i>
                  {{ link.name }}
                </a>
              </li>
            </ul>
          </div>

          <!-- Contact Info -->
          <div>
            <h3 class="text-white font-semibold mb-6 flex items-center gap-2">
              <span class="w-2 h-2 rounded-full bg-gradient-to-r from-orange-500 to-red-500"></span>
              Contact Info
            </h3>
            <ul class="space-y-4">
              <li>
                <a href="mailto:alihassanjsdev@gmail.com" class="flex items-start gap-3 text-gray-400 text-sm hover:text-orange-400 transition-colors duration-300">
                  <i class="fas fa-envelope text-orange-500 mt-0.5"></i>
                  <span>alihassanjsdev@gmail.com</span>
                </a>
              </li>
              <li>
                <a href="tel:+923034340620" class="flex items-start gap-3 text-gray-400 text-sm hover:text-orange-400 transition-colors duration-300">
                  <i class="fas fa-phone-alt text-orange-500 mt-0.5"></i>
                  <span>+92 303 4340620</span>
                </a>
              </li>
              <li>
                <div class="flex items-start gap-3 text-gray-400 text-sm">
                  <i class="fas fa-map-marker-alt text-orange-500 mt-0.5"></i>
                  <span>Lahore, Pakistan</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="border-t border-white/10">
        <div class="container mx-auto px-6 md:px-12 lg:px-20 py-6">
          <div class="flex flex-col md:flex-row items-center justify-center gap-4">
            <p class="text-gray-500 text-sm text-center md:text-center">
              © {{ currentYear }} <span class="text-orange-400">Ali Hassan</span>. All rights reserved.
            </p>
            <!-- <p class="text-gray-500 text-sm flex items-center gap-2">
              Made with 
              <span class="text-red-500 animate-pulse">❤️</span> 
              using 
              <span class="text-green-400">Vue.js</span>
            </p> -->
          </div>
        </div>
      </div>
    </div>

    <!-- Back to Top Button -->
    <button 
      @click="scrollToTop"
      class="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg shadow-orange-500/30 flex items-center justify-center hover:shadow-orange-500/50 transform hover:-translate-y-1 transition-all duration-300 z-40"
    >
      <i class="fas fa-arrow-up"></i>
    </button>
  </footer>
</template>

<script>
export default {
  name: "PortfolioFooter",
  data() {
    return {
      quickLinks: [
        { name: "Home", target: "home" },
        { name: "About Me", target: "about" },
        { name: "Skills", target: "skills" },
        { name: "Projects", target: "projects" },
        { name: "Reviews", target: "testimonials" },
        { name: "Contact", target: "contact" },
      ],
    };
  },
  computed: {
    currentYear() {
      return new Date().getFullYear();
    },
  },
  methods: {
    scrollTo(targetId) {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    },
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  },
};
</script>

<style scoped>
/* Heart pulse animation */
@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.2); }
}

.animate-pulse {
  animation: pulse 1.5s ease-in-out infinite;
}
</style>

