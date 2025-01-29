<template>
    <section
      id="projects"
      class="py-16 bg-gray-800"
    >
      <div class="container mx-auto px-4">
        <!-- Section Title -->
        <div class="text-center mb-12" data-aos="zoom-out"
        data-aos-delay="500">
          <h1 class="text-4xl font-bold text-white tracking-wide">My Projects</h1>
          <p class="text-white mt-4">
            Below are some of my personal and professional projects showcasing my skills and creativity.
          </p>
        </div>
  
        <!-- Projects Grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8" data-aos="fade-up"
        data-aos-delay="1000">
          <div
            v-for="project in projects"
            :key="project.title"
            class="bg-white  rounded-lg overflow-hidden hover:shadow-2xl transition-shadow hover:shadow-orange-500 duration-300 cursor-pointer"
          >
            <!-- Project Image -->
            <img
              v-if="project.image"
              :src="project.image"
              :alt="project.title"
              class="w-full h-48 object-cover"
            />
            <div class="p-4 flex flex-col h-full">
              <!-- Project Title -->
              <h3 class="text-xl font-semibold text-orange-500 mb-2">{{ project.title }}</h3>
              
              <!-- Project Description -->
              <div class="text-gray-600 text-sm mb-4 flex-grow">{{ project.description }} 
                <br><br>
               <!-- technologyies -->
              <div class="flex flex-wrap gap-2 mb-4">
                <span
                  v-for="tech in project.technologies"
                  :key="tech"
                  class="bg-gray-800 text-gray-200 text-xs font-semibold px-3 py-1 rounded-lg"
                >
                  {{ tech }}
                </span>
              </div>
                <br>
              
                <a
                  v-if="project.liveLink"
                  :href="project.liveLink"
                  target="_blank"
                  class="text-sm bg-orange-200 p-3 rounded-lg text-orange-700 hover:bg-orange-600 hover:text-white font-bold my-3 "
                >
                🌐 Live Demo
                </a>
                <a
                  v-if="project.repoLink"
                  :href="project.repoLink"
                  target="_blank"
                  class="text-sm font-bold bg-green-200 p-3 rounded-lg my-3 mx-2 text-green-900 hover:bg-green-900 hover:text-white "
                >
                🛠 GitHub Repo
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
        projects: [
            {
              title: "QuickMeal",
              description: "A food ordering system built with Vue.js and Laravel for seamless user experience.",
              image: require("@/assets/quickmeal.png"),
              liveLink: "http://54.66.7.254/",
              repoLink: null,
              technologies: ["Vue.js", "Laravel", "Tailwind CSS"],
            },
            {
              title: "KMJ Logistics",
              description: "A logistics and transport website designed with responsive layouts and JavaScript.",
              image: require("@/assets/kmj.png"),
              liveLink: "https://ali-hassan24.github.io/KMJ-LOGISTICS/",
              repoLink: null,
              technologies: ["HTML", "CSS", "JavaScript"],
            },
            {
              title: "E-Commerce Website",
              description: "A fully responsive e-commerce website template built using modern web technologies.",
              image: require("@/assets/ecom.png"),
              liveLink: "https://ali-hassan24.github.io/e_commerce-website/",
              repoLink: null,
              technologies: ["HTML", "CSS", "Bootstrap", "JavaScript"],
            },
            {
              title: "Hospital Management Project",
              description: "A hospital management system built using HTML, CSS, and JavaScript for basic CRUD operations.",
              image: require("@/assets/hospital.png"),
              liveLink: "https://youtu.be/RIb2wWJCnYI",
              repoLink: null,
              technologies: ["HTML", "CSS", "JavaScript"],
            },
                    
            {
              title: "Laptops Website",
              description: "A website showcasing laptops with detailed specifications and a modern UI.",
              image:require("@/assets/laptop.png"),
              liveLink: "https://youtu.be/g0EN_sIjwzU",
              repoLink: null,
              technologies: ["HTML", "CSS", "JavaScript"],
            },
            {
              title: "Portfolio",
              description: "A professional and responsive portfolio website for developers and designers.",
              image: "https://img.youtube.com/vi/pasWDYz1IXw/maxresdefault.jpg",
              liveLink: "https://youtu.be/pasWDYz1IXw",
              repoLink: null,
              technologies: ["HTML", "CSS", "JavaScript"],
            },
            {
              title: "Game in CSS",
              description: "A simple interactive game designed using only CSS animations and HTML.",
              image: require("@/assets/game.png"), // Replace with your saved image
              liveLink: "https://youtu.be/QbRvuf4xiuI",
              repoLink: null,
              technologies: ["HTML", "CSS", "JavaScript"],
            },
            {
              title: "CRUD using JavaScript",
              description: "A simple web application for managing users with create, read, update, and delete functionalities.",
              image: require("@/assets/jscrud.png"),
              liveLink: "https://ali-hassan24.github.io/Add_user-/card.html",
              repoLink: null,
              technologies: ["HTML", "CSS", "JavaScript"],
            },
            {
              title: "GitHub Finder App",
              description: "Search for GitHub users and view their repositories using the GitHub API.",
              image: require("@/assets/gitFinder.png"),
              liveLink: "https://ali-hassan24.github.io/github_finder/",
              repoLink: null,
              technologies: ["JavaScript", "GitHub API", "Bootstrap"],
            },
            {
              title: "Portfolio Template",
              description: "A professional portfolio template for developers and designers, built with responsive design.",
              image: require("@/assets/portfolio.png"),
              liveLink: "https://ali-hassan24.github.io/AliHassan_portfolio/",
              repoLink: "https://github.com/Ali-Hassan24/portfolio",
              technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
            },
            {
              title: "PostCard (Laravel 11)",
              description: "A Laravel project for creating and managing posts, built with modern Laravel practices.",
              image: require("@/assets/postcard.png"),
              liveLink: null,
              repoLink: "https://github.com/Ali-Hassan24/postCard_laravel11",
              technologies: ["Laravel", "PHP", "MySQL", "Tailwind CSS"],
            },
            {
              title: "Scientific Calculator",
              description: "A functional scientific calculator designed with JavaScript for advanced calculations.",
              image: require("@/assets/calcualtor.png"),
              liveLink: "https://ali-hassan24.github.io/scientific-calculator-project/",
              repoLink: null,
              technologies: ["JavaScript", "CSS", "HTML"],
            },
          ],

      };
    },
  };
  </script>
  
  <style scoped>
  /* Add gradient and other styles */
  .cursor-pointer {
    cursor: pointer;
  }
  
  img {
    transition: transform 0.3s ease-in-out;
  }
  
  img:hover {
    transform: scale(1.1);
  }
  </style>
  