<template>
  <!-- Navbar -->
  <nav
    :class="[ 
      'sticky top-0 z-50 transition-all duration-300', 
      isScrolled ? 'bg-[rgba(255,255,255,0.8)] shadow-lg' : 'bg-transparent'
    ]"
  >
    <div class="flex items-end justify-between px-4 lg:px-10 py-3">
      <!-- Logo -->
      <div class="flex items-center space-x-4">
        <img
          src="../assets/mypic2.png"
          alt="Ali Hassan"
          class="w-12 h-12 rounded-full border-2 border-orange-500"
        />
        <h1 class="text-lg font-bold text-orange-500">Ali Hassan</h1>
      </div>

      <!-- Mobile Menu Icon -->
      <div @click="toggleMenu" class="lg:hidden cursor-pointer">
        <svg
          v-if="!showMenu"
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 text-gray-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 text-gray-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </div>

      <!-- Navigation Links -->
      <ul
        :class="[showMenu ? 'block' : 'hidden', 'lg:flex lg:space-x-8 items-center space-y-2 lg:space-y-0']"
        class="absolute lg:relative bg-white lg:bg-transparent w-full lg:w-auto top-16 left-0 lg:top-auto lg:left-auto"
      >
        <li
          v-for="link in links"
          :key="link.url"
          class="border-b lg:border-none"
        >
          <a
            :href="link.url"
            :class="[isActive(link.url) ? 'text-orange-500 font-bold underline underline-offset-8' : 'text-gray-400', 'block lg:inline px-4 py-3 lg:p-0']"
          >
            {{ link.name }}
          </a>
        </li>
      </ul>
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
        { name: "Home", url: "/" },
        { name: "About", url: "/about" },
        { name: "Projects", url: "/projects" },
        { name: "Skills", url: "/skills" },
        { name: "Contact", url: "/contact" },
      ],
      isScrolled: false,
    };
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
    },
    isActive(url) {
      return window.location.pathname === url;
    },
    handleScroll() {
      this.isScrolled = window.scrollY > 50;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style scoped>
/* Navbar Styling */
nav ul {
  transition: all 0.3s ease-in-out;
}
</style>
