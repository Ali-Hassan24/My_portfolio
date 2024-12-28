<template>
     <!-- Navbar (fixed) -->
     <Navbar />
    <div class="relative">
       
   
      <!-- Hero Section -->
      <div class="relative h-screen mt-[-75px]">
        <!-- Video Background -->
        <video
          autoplay
          muted
          loop
          playsinline
          class="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="../assets/video/video6.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
       
        <!-- Overlay -->
        <div class="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
  
        
  
        <!-- Hero Content -->
        <div class="relative z-20 container mx-auto flex flex-col md:flex-row items-center gap-8 md:justify-between h-full px-4 md:px-20">
          <!-- Right Content (Image) -->
          <div class="relative mb-4 md:mb-0 order-1 md:order-2">
            <img
              src="../assets/mypic2.png"
              alt="Ali Hassan"
              class="rounded-full border-4 border-orange-400 shadow-lg w-40 h-40 md:w-80 md:h-80"
            />
          </div>
  
          <!-- Left Content (Text) -->
          <div class="text-white space-y-4 mt-8 text-center md:text-left order-2 md:order-1">
            <h1 class="text-2xl md:text-4xl font-bold">
              Hi! My Name is <span class="text-orange-500">Ali Hassan</span>
            </h1>
            <h2 class="text-lg md:text-3xl">
              I'm
              <span id="dynamic-text-container" class="text-orange-500">
                <span id="dynamic-text"></span><span class="cursor text-white">|</span>
              </span>
            </h2>
            <div
              class="flex flex-col md:flex-row justify-center md:justify-start space-y-4 md:space-y-0 md:space-x-4 mt-4"
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
  
      <!-- About Section -->
      <section id="about" class="py-16 bg-black -z-10">
        <h2 class="text-2xl md:text-4xl underline underline-offset-8 font-bold text-orange-500 py-16 text-center uppercase">About Me</h2>
  
        <div class="container mx-auto md:grid md:grid-cols-2 items-center gap-8 px-4 md:px-20">
          <!-- Profile Image -->
          <div class="relative overflow-hidden border-4 border-orange-500 shadow-lg animate-fade-right">
            <img
              src="../assets/my.jpg"
              alt="Ali Hassan"
              class="w-full"
            />
          </div>
  
          <!-- About Content -->
          <div class="text-white space-y-4 text-center md:text-left animate-fade-left">
            <p>
              Hello! I am Ali Hassan, a Certified Frontend Developer and Backend Expert with one year of experience in web design. 
              I have helped startups and businesses locally and internationally with high-quality, result-oriented services. 
              I believe in transparency and long-term relationships with my clients.
            </p>
  
            <!-- Skills & Percentage Circles -->
            <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
              <!-- Frontend -->
                    <div class="flex flex-col items-center">
                    <div class="relative w-32 h-32"> <!-- Increased size -->
                        <svg class="absolute top-0 left-0 w-full h-full transform rotate-[-90deg]">
                        <circle cx="50%" cy="50%" r="48%" class="stroke-gray-300 stroke-6 fill-none" /> <!-- Increased stroke width -->
                        <circle
                            cx="50%" cy="50%" r="48%" 
                            class="stroke-orange-500 stroke-8 fill-none" 
                            stroke-dasharray="301.6" stroke-dashoffset="28.3"
                        />
                        </svg>
                        <div class="absolute top-0 left-0 w-full h-full flex items-center justify-center text-orange-500 font-bold">
                        90%
                        </div>
                    </div>
                    <p class="text-orange-500 mt-2">Frontend</p>
                    </div>
  
             <!-- Backend -->
            <div class="flex flex-col items-center">
                <div class="relative w-32 h-32"> <!-- Increased size -->
                    <svg class="absolute top-0 left-0 w-full h-full transform rotate-[-90deg]">
                    <circle cx="50%" cy="50%" r="48%" class="stroke-gray-300 stroke-6 fill-none" />
                    <circle
                        cx="50%" cy="50%" r="48%"
                        class="stroke-orange-500 stroke-8 fill-none" 
                        stroke-dasharray="301.6" stroke-dashoffset="113.2"
                    />
                    </svg>
                    <div class="absolute top-0 left-0 w-full h-full flex items-center justify-center text-orange-500 font-bold">
                    60%
                    </div>
                </div>
                <p class="text-orange-500 mt-2">Backend</p>
            </div>
  
              <!-- Graphic Design -->
              <div class="flex flex-col items-center">
                <div class="relative w-32 h-32"> <!-- Increased size -->
                    <svg class="absolute top-0 left-0 w-full h-full transform rotate-[-90deg]">
                    <circle cx="50%" cy="50%" r="48%" class="stroke-gray-300 stroke-6 fill-none" />
                    <circle
                        cx="50%" cy="50%" r="48%"
                        class="stroke-orange-500 stroke-8 fill-none" 
                        stroke-dasharray="301.6" stroke-dashoffset="113.2"
                    />
                    </svg>
                    <div class="absolute top-0 left-0 w-full h-full flex items-center justify-center text-orange-500 font-bold">
                    60%
                    </div>
                </div>
                <p class="text-orange-500 mt-2">Graphic Design</p>
            </div>
  
              <!-- Data Entry -->
              <div class="flex flex-col items-center">
                <div class="relative w-32 h-32"> <!-- Increased size -->
                    <svg class="absolute top-0 left-0 w-full h-full transform rotate-[-90deg]">
                    <circle cx="50%" cy="50%" r="48%" class="stroke-gray-300 stroke-6 fill-none" />
                    <circle
                        cx="50%" cy="50%" r="48%"
                        class="stroke-orange-500 stroke-8 fill-none" 
                        stroke-dasharray="301.6" stroke-dashoffset="0"
                    />
                    </svg>
                    <div class="absolute top-0 left-0 w-full h-full flex items-center justify-center text-orange-500 font-bold">
                    100%
                    </div>
                </div>
                <p class="text-orange-500 mt-2">Data Entry</p>
            </div>
            </div>
  
            <!-- Social Links -->
            <div class="flex justify-center md:justify-start space-x-8 text-3xl text-orange-500 mt-4">
              <a href="https://github.com/Ali-Hassan24" target="_blank"><i class="fab fa-github hover:text-white"></i></a>
              <a href="https://www.linkedin.com/in/ali-hassan-406147283/" target="_blank"><i class="fab fa-linkedin hover:text-white"></i></a>
              <a href="mailto:alihassanjsdev@gmail.com" target="_blank"><i class="fa-solid fa-envelope hover:text-white"></i></a>
              <a href="https://wa.me/+923034340620" target="_blank"><i class="fa-brands fa-whatsapp hover:text-white"></i></a>
            </div>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script>
  import Navbar from "@/components/Navbar.vue";
  
  export default {
    name: "HomePage",
    components: {
      Navbar,
    },
    mounted() {
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
  
  <style scoped>
  /* Animations */
  @keyframes fade-left {
    from {
      opacity: 0;
      transform: translateX(-50px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  @keyframes fade-right {
    from {
      opacity: 0;
      transform: translateX(50px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  .animate-fade-left {
    animation: fade-left 1s ease-in-out;
  }
  
  .animate-fade-right {
    animation: fade-right 1s ease-in-out;
  }
  
  /* Cursor Blink */
  .cursor {
    display: inline-block;
    font-weight: bold;
  }
  
  
 
  </style>
  