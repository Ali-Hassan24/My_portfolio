<template>
  <!-- Navbar (fixed) -->
  <Navbar />

  <div class="relative overflow-hidden mt-[-5px] ">
    <!-- Hero Section -->
    <div id="home" class="relative h-screen overflow-hidden">
      <!-- Video Background -->
      <video
        autoplay
        muted
        loop
        playsinline
        class="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="../assets/video/bglogin1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <!-- Modern Gradient Overlay -->
      <div class="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-transparent z-10"></div>
      
      <!-- Animated Gradient Accent -->
      <div class="absolute inset-0 bg-gradient-to-t from-orange-900/20 via-transparent to-transparent z-10"></div>

      <!-- Hero Content -->
      <div
        class="relative z-20 container mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16 md:justify-center h-full px-6 sm:px-8 lg:px-16"
        data-aos="fade-up"
      >
        <!-- Profile Image with Glow Effect -->
        <div
          class="relative mb-4 mt-24 md:mt-0 md:mb-0 order-1 md:order-2 flex-shrink-0 group"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <!-- Animated Glow Ring -->
          <div class="absolute inset-0 rounded-full bg-gradient-to-r from-orange-500 via-red-500 to-orange-400 opacity-75 blur-xl group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
          <div class="absolute -inset-1 rounded-full bg-gradient-to-r from-orange-400 via-red-500 to-orange-500 opacity-50 blur-md"></div>
          <img
            src="../assets/my_pic2.png"
            alt="Ali Hassan"
            class="relative rounded-full border-4 border-white/20 shadow-2xl w-100 h-100 sm:w-56 sm:h-56 md:w-80 md:h-80 object-cover transform group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        <!-- Text Content -->
        <div
          class="text-white space-y-6 text-center md:text-left order-2 md:order-1 max-w-xl"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          <!-- Greeting Badge -->
          <div class="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm tracking-wider uppercase mb-2">
            <span class="text-orange-400">👋</span> Welcome to my portfolio
          </div>
          
          <!-- Name with Gradient -->
          <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            Hi! I'm <br class="hidden sm:block"/>
            <span class="bg-gradient-to-r from-orange-400 via-red-500 to-orange-500 bg-clip-text text-transparent animate-gradient">Ali Hassan</span>
          </h1>
          
          <!-- Dynamic Role -->
          <h2 class="text-xl sm:text-2xl md:text-3xl font-light text-gray-300">
            I'm a
            <span id="dynamic-text-container" class="font-semibold">
              <span id="dynamic-text" class="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent"></span>
              <span class="cursor text-orange-400 animate-blink">|</span>
            </span>
          </h2>
          
          <!-- Description -->
          <p class="text-gray-400 text-base md:text-lg leading-relaxed max-w-md mx-auto md:mx-0">
            Crafting beautiful, responsive, and user-friendly web experiences with modern technologies.
          </p>
          
          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row justify-center md:justify-start gap-4 pt-4">
            <a
              href="https://drive.google.com/file/d/1ar0f3AHn5SUdqjVhRrOFTxtC4ViGIljM/view?usp=sharing"
              target="_blank"
              class="group relative inline-flex items-center justify-center px-8 py-3.5 font-semibold text-white bg-gradient-to-r from-orange-500 to-red-500 rounded-full shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 transform hover:-translate-y-1 hover:scale-105 transition-all duration-300"
              download
            >
              <span class="mr-2">📄</span>
              Download CV
              <span class="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </a>
            <a
              href="#about"
              class="inline-flex items-center justify-center px-8 py-3.5 font-semibold text-white bg-white/10 backdrop-blur-sm border border-white/30 rounded-full hover:bg-white/20 hover:border-orange-400/50 transform hover:-translate-y-1 transition-all duration-300"
            >
              <span class="mr-2">👤</span>
              About Me
            </a>
          </div>

          <!-- Social Links Hint -->
          <div class="flex justify-center md:justify-start gap-4 pt-6">
            <div class="w-12 h-0.5 bg-gradient-to-r from-orange-500 to-transparent rounded-full"></div>
            <span class="text-gray-200 text-sm">Scroll to explore</span>
            <div class="w-12 h-0.5 bg-gradient-to-l from-orange-500 to-transparent rounded-full"></div>
          </div>
        </div>
      </div>
      
      <!-- Scroll Indicator -->
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div class="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div class="w-1 h-3 bg-orange-400 rounded-full animate-scroll"></div>
        </div>
      </div>
    </div>

    <!-- About Us Section -->
    <aboutUs />

    <!-- Skills Section -->
    <SkillsSection />

    <!-- Project section -->
    <ProjectsSection/>

    <!-- reviews section -->
     <ReviewSection/>

     <!-- contact Us -->
    <ContactUs/>
  </div>

  <footers />
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import footers from "@/components/footer.vue";
import aboutUs from "./about.vue";
import SkillsSection from "./skill.vue";
import ProjectsSection from './Projects.vue';
import ReviewSection from './Reviews.vue';
import ContactUs from './Contact.vue';

import AOS from "aos";
import "aos/dist/aos.css";

export default {
  name: "HomePage",
  components: {
    Navbar,
    footers,
    aboutUs,
    SkillsSection,
    ProjectsSection,
    ReviewSection,
    ContactUs,
  },
  mounted() {
    // Initialize AOS
    AOS.init();

    const dynamicText = document.getElementById("dynamic-text");
    const cursor = document.querySelector(".cursor");
    const professions = [
      "Web Developer",
      "Laravel Developer",
      "Web & Graphic Designer",
      "Vue.js Developer",
    ];
    let index = 0;
    let charIndex = 0;
    let typing = true;

    function typeText() {
      const currentProfession = professions[index];
      if (typing) {
        if (charIndex < currentProfession.length) {
          dynamicText.textContent += currentProfession[charIndex];
          charIndex++;
        } else {
          typing = false;
          setTimeout(() => (typing = false), 1000);
        }
      } else {
        if (charIndex > 0) {
          dynamicText.textContent = currentProfession.slice(0, charIndex - 1);
          charIndex--;
        } else {
          typing = true;
          index = (index + 1) % professions.length;
        }
      }
    }

    setInterval(typeText, 100);
    setInterval(() => cursor.classList.toggle("opacity-0"), 500);
  },
};
</script>

<style scoped>
/* Cursor Blink Animation */
@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}

.animate-blink {
  animation: blink 1s infinite;
}

/* Gradient Text Animation */
@keyframes gradient {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

.animate-gradient {
  background-size: 200% 200%;
  animation: gradient 3s ease infinite;
}

/* Scroll Indicator Animation */
@keyframes scroll {
  0% { opacity: 1; transform: translateY(0); }
  100% { opacity: 0; transform: translateY(8px); }
}

.animate-scroll {
  animation: scroll 1.5s ease-in-out infinite;
}

/* Glow pulse animation enhancement */
@keyframes glow-pulse {
  0%, 100% { opacity: 0.5; transform: scale(1); }
  50% { opacity: 0.8; transform: scale(1.05); }
}
</style>
