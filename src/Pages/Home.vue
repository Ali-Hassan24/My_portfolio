<template>
  <!-- Navbar (fixed) -->
  <Navbar />

  <div class="relative overflow-hidden mt-[-70px] ">
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
        <source src="../assets/video/Codeing.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <!-- Overlay -->
      <div class="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

      <!-- Hero Content -->
      <div
        class="relative z-20 container mx-auto flex flex-col md:flex-row items-center gap-6 md:justify-between h-full px-4 sm:px-6 lg:px-10"
        data-aos="fade-up"
      >
        <!-- Right Content (Image) -->
        <div
          class="relative mb-2 mt-32 md:mb-0 order-1 md:order-2 flex-shrink-0"
          data-aos="fade-down"
          data-aos-duration="800"
        >
          <img
            src="../assets/mypic2.png"
            alt="Ali Hassan"
            class="rounded-full border-4 border-orange-400 shadow-lg w-32 h-32 sm:w-48 sm:h-48 md:w-72 md:h-72"
          />
        </div>

        <!-- Left Content (Text) -->
        <div
          class="text-white space-y-4 mt-2 text-center md:text-left order-2 md:order-1"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <h1 class="text-xl sm:text-2xl md:text-4xl font-bold">
            Hi! My Name is <span class="text-orange-500">Ali Hassan</span>
          </h1>
          <h2 class="text-lg sm:text-xl md:text-3xl">
            I'm
            <span id="dynamic-text-container" class="text-orange-500">
              <span id="dynamic-text"></span><span class="cursor text-white">|</span>
            </span>
          </h2>
          <div
            class="flex flex-col sm:flex-row justify-center md:justify-start space-y-2 sm:space-y-0 sm:space-x-4 mt-4"
          >
            <a
              href="path-to-cv.pdf"
              class="bg-orange-500 text-white py-2 px-6 rounded shadow-md hover:bg-orange-600 transition"
              download
            >
              Download CV
            </a>
            <a
              href="#about"
              class="bg-transparent border border-orange-500 text-orange-500 py-2 px-6 rounded shadow-md hover:bg-orange-500 hover:text-white transition"
            >
              About Me
            </a>
          </div>
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
  </div>

  <footers />
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import footers from "@/components/footer.vue";
import aboutUs from "./about.vue";
import SkillsSection from "./skill.vue";
import ProjectsSection from './Projects.vue'
import ReviewSection from './Reviews.vue'

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
  },
  mounted() {
    // Initialize AOS
    AOS.init();

    const dynamicText = document.getElementById("dynamic-text");
    const cursor = document.querySelector(".cursor");
    const professions = [
      "Web Developer",
      "Designer",
      "Laravel Developer",
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
