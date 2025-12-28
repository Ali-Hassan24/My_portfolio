<template>
  <!-- Navbar -->
  <Navbar />

  <!-- HERO SECTION -->
  <section id="home" class="relative h-screen w-full overflow-hidden">
    <!-- Background Image -->
    <img
      src="../assets/pic.png"
      alt="Ali Hassan"
      class="absolute inset-0 w-full h-full object-cover"
    />

    <!-- Dark Overlay -->
    <div class="absolute inset-0 bg-black/70"></div>

    <!-- Gradient Overlay -->
    <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

    <!-- CENTERED CONTENT -->
    <div
      class="relative z-10 h-full flex items-center justify-center px-6 text-center"
      data-aos="fade-up"
    >
      <div class="max-w-3xl space-y-6 text-white">
        <!-- Badge -->
        <div
          class="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur border border-white/20 text-sm uppercase tracking-wider"
        >
          <span class="text-orange-400">👋</span> Building scalable software solutions
        </div>

        <!-- Heading -->
        <h1 class="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
          Hi! I'm
          <span
            class="block bg-gradient-to-r from-orange-400 via-red-500 to-orange-500 bg-clip-text text-transparent animate-gradient"
          >
            Ali Hassan
          </span>
        </h1>

        <!-- Dynamic Role -->
        <h2 class="text-xl sm:text-2xl md:text-3xl text-gray-300">
          I'm a
          <span class="font-semibold text-orange-400">
            <span id="dynamic-text"></span>
            <span class="animate-blink">|</span>
          </span>
        </h2>

        <!-- Description -->
        <p class="text-gray-300 max-w-xl mx-auto">
          Crafting beautiful, responsive, and user-friendly web experiences with modern technologies.
        </p>

        <!-- Buttons -->
        <div class="flex flex-col sm:flex-row justify-center gap-4 pt-4">
          <a
            href="https://drive.google.com/file/d/1ar0f3AHn5SUdqjVhRrOFTxtC4ViGIljM/view"
            target="_blank"
            class="px-8 py-3 font-semibold text-white bg-gradient-to-r from-orange-500 to-red-500 rounded-full shadow-lg hover:scale-105 transition"
          >
            📄 Download CV
          </a>

          <a
            href="#about"
            class="px-8 py-3 font-semibold text-white bg-white/10 border border-white/30 rounded-full hover:bg-white/20 transition"
          >
            👤 About Me
          </a>
        </div>

        <!-- Scroll Hint -->
        <div class="flex justify-center items-center gap-4 pt-8">
          <div class="w-12 h-px bg-gradient-to-r from-orange-500 to-transparent"></div>
          <span class="text-sm text-gray-300">Scroll to explore</span>
          <div class="w-12 h-px bg-gradient-to-l from-orange-500 to-transparent"></div>
        </div>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
      <div class="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2">
        <div class="w-1 h-3 bg-orange-400 rounded-full animate-scroll"></div>
      </div>
    </div>
  </section>

  <!-- OTHER SECTIONS -->
  <aboutUs />
  <SkillsSection />
  <ProjectsSection />
  <ReviewSection />
  <ContactUs />
  <footers />
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import footers from "@/components/footer.vue";
import aboutUs from "./about.vue";
import SkillsSection from "./skill.vue";
import ProjectsSection from "./Projects.vue";
import ReviewSection from "./Reviews.vue";
import ContactUs from "./Contact.vue";

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
    AOS.init();

    const roles = [
      "Problem Solver",
      "Software Engineer",
      "Full Stack Developer",
      "Web Developer",
      "Graphic Designer",
    ];

    const textEl = document.getElementById("dynamic-text");
    let roleIndex = 0;
    let charIndex = 0;
    let typing = true;

    setInterval(() => {
      const current = roles[roleIndex];

      if (typing) {
        if (charIndex < current.length) {
          textEl.textContent += current[charIndex++];
        } else {
          typing = false;
        }
      } else {
        if (charIndex > 0) {
          textEl.textContent = current.slice(0, --charIndex);
        } else {
          typing = true;
          roleIndex = (roleIndex + 1) % roles.length;
        }
      }
    }, 100);
  },
};
</script>

<style scoped>
@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}

.animate-blink {
  animation: blink 1s infinite;
}

@keyframes gradient {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

.animate-gradient {
  background-size: 200% 200%;
  animation: gradient 4s ease infinite;
}

@keyframes scroll {
  from { opacity: 1; transform: translateY(0); }
  to { opacity: 0; transform: translateY(8px); }
}

.animate-scroll {
  animation: scroll 1.5s infinite;
}
</style>
