<template>
  <nav
    :class="[ 
      'fixed top-0 left-0 right-0 z-50 transition-all duration-500', 
      isScrolled 
        ? 'bg-gray-900/95 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/20' 
        : 'bg-transparent'
    ]"
  >
    <div class="container mx-auto px-6 lg:px-12">
      <div class="flex items-center justify-between h-20">
        <!-- Logo -->
        <a href="#home" @click.prevent="scrollTo('home')" class="flex items-center gap-3 group">
          <div class="relative">
            <div class="absolute -inset-1 rounded-full bg-gradient-to-r from-orange-500 to-red-500 opacity-50 blur group-hover:opacity-75 transition-opacity duration-300"></div>
            <img
              src="../assets/logo.svg"
              alt="Ali Hassan"
              class="relative w-12 h-12 rounded-full border-2 border-white/20"
            />
          </div>
          <div class="hidden sm:block">
            <h1 class="text-lg font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              Ali Hassan
            </h1>
            <p class="text-xs text-gray-500">Web Developer</p>
          </div>
        </a>

        <!-- Desktop Navigation -->
        <ul class="hidden lg:flex items-center gap-1">
          <li v-for="link in links" :key="link.url">
            <a
              @click.prevent="scrollTo(link.target)"
              :class="[
                'relative px-4 py-2 text-sm font-medium transition-all duration-300 cursor-pointer rounded-full',
                activeSection === link.target 
                  ? 'text-white bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30' 
                  : 'text-gray-400 hover:text-white'
              ]"
            >
              {{ link.name }}
              <span 
                v-if="activeSection === link.target"
                class="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-orange-500"
              ></span>
            </a>
          </li>
        </ul>

        <!-- CTA Button (Desktop) -->
        <a
          href="#contact"
          @click.prevent="scrollTo('contact')"
          class="hidden lg:inline-flex items-center gap-2 px-6 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-orange-500 to-red-500 rounded-full shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 transform hover:-translate-y-0.5 transition-all duration-300"
        >
          <span>Hire Me</span>
          <i class="fas fa-arrow-right text-xs"></i>
        </a>

        <!-- Mobile Menu Button -->
        <button 
          @click="toggleMenu" 
          class="lg:hidden relative w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors duration-300"
        >
          <div class="w-5 h-4 flex flex-col justify-between">
            <span 
              :class="[
                'w-full h-0.5 bg-white rounded-full transition-all duration-300 origin-center',
                showMenu ? 'rotate-45 translate-y-1.5' : ''
              ]"
            ></span>
            <span 
              :class="[
                'w-full h-0.5 bg-white rounded-full transition-all duration-300',
                showMenu ? 'opacity-0 scale-0' : ''
              ]"
            ></span>
            <span 
              :class="[
                'w-full h-0.5 bg-white rounded-full transition-all duration-300 origin-center',
                showMenu ? '-rotate-45 -translate-y-1.5' : ''
              ]"
            ></span>
          </div>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div 
      :class="[
        'lg:hidden overflow-hidden transition-all duration-500 ease-in-out',
        showMenu ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
      ]"
    >
      <div class="bg-gray-900/98 backdrop-blur-xl border-t border-white/10">
        <ul class="container mx-auto px-6 py-6 space-y-2">
          <li v-for="(link, index) in links" :key="link.url">
            <a
              @click.prevent="scrollTo(link.target); showMenu = false"
              :class="[
                'flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300',
                activeSection === link.target 
                  ? 'bg-gradient-to-r from-orange-500/20 to-red-500/20 text-white border border-orange-500/30' 
                  : 'text-gray-400 hover:bg-white/5 hover:text-white'
              ]"
              :style="{ transitionDelay: showMenu ? `${index * 50}ms` : '0ms' }"
            >
              <span class="w-2 h-2 rounded-full bg-gradient-to-r from-orange-500 to-red-500"></span>
              {{ link.name }}
            </a>
          </li>
        </ul>
        
        <!-- Mobile CTA -->
        <div class="container mx-auto px-6 pb-6">
          <a
            href="#contact"
            @click.prevent="scrollTo('contact'); showMenu = false"
            class="flex items-center justify-center gap-2 w-full px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-orange-500 to-red-500 rounded-xl shadow-lg shadow-orange-500/25"
          >
            <span>Let's Start Work Together</span>
            <i class="fas fa-arrow-right text-xs"></i>
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "PortfolioNavbar",
  data() {
    return {
      showMenu: false,
      links: [
        { name: "Home", target: "home" },
        { name: "About", target: "about" },
        { name: "Skills", target: "skills" },
        { name: "Projects", target: "projects" },
        { name: "Reviews", target: "testimonials" },
        { name: "Contact", target: "contact" },
      ],
      activeSection: "home",
      isScrolled: false,
    };
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
      // Prevent body scroll when menu is open
      document.body.style.overflow = this.showMenu ? 'hidden' : '';
    },
    scrollTo(targetId) {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    },
    handleScroll() {
      this.isScrolled = window.scrollY > 50;
      this.updateActiveSection();
    },
    updateActiveSection() {
      this.links.forEach((link) => {
        const section = document.getElementById(link.target);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom > 100) {
            this.activeSection = link.target;
          }
        }
      });
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
    document.body.style.overflow = '';
  },
};
</script>

<style scoped>
/* Smooth nav link underline animation */
nav a {
  position: relative;
}

/* Mobile menu slide animation */
.max-h-screen {
  max-height: 100vh;
}
</style>

