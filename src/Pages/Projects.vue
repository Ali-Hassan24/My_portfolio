<template>
    <section
      id="projects"
      class="py-16 bg-gradient-to-r from-orange-500 to-yellow-500"
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
              <p class="text-gray-600 text-sm mb-4 flex-grow">{{ project.description }}
                <br><br><br>
                <a
                  v-if="project.liveLink"
                  :href="project.liveLink"
                  target="_blank"
                  class="text-sm bg-blue-200 p-3 rounded-lg text-blue-900 hover:bg-blue-900 hover:text-white font-bold my-3 "
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
              </p>
            
              
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
            title: "CRUD using JavaScript",
            description: "A simple CRUD application to manage users, implemented using pure JavaScript.",
            image: require("@/assets/jscrud.png"),
            liveLink: "https://ali-hassan24.github.io/Add_user-/card.html",
            repoLink: null,
          },
          {
            title: "KMJ Logistics",
            description: "A logistics and transport website designed with responsive layouts and JavaScript.",
            image: require("@/assets/kmj.png"),
            liveLink: "https://ali-hassan24.github.io/KMJ-LOGISTICS/",
            repoLink: null,
          },
          {
            title: "GitHub Finder App",
            description: "Search for GitHub users and view their repositories using the GitHub API.",
            image: require("@/assets/gitFinder.png"),
            liveLink: "https://ali-hassan24.github.io/github_finder/",
            repoLink: null,
          },
          {
            title: "Portfolio Template",
            description: "A professional portfolio template for developers and designers.",
            image: require("@/assets/portfolio.png"),
            liveLink: "https://ali-hassan24.github.io/AliHassan_portfolio/",
            repoLink: "https://github.com/Ali-Hassan24/portfolio",
          },
          {
            title: "E-Commerce Website",
            description: "A fully responsive e-commerce website template built using modern web technologies.",
            image: require("@/assets/ecom.png"),
            liveLink: "https://ali-hassan24.github.io/e_commerce-website/",
            repoLink: null,
          },
          {
            title: "PostCard (Laravel 11)",
            description: "A Laravel project for creating and managing posts, built with modern Laravel practices.",
            image: require("@/assets/postcard.png"),
            liveLink: null,
            repoLink: "https://github.com/Ali-Hassan24/postCard_laravel11",
          },
          {
            title: "Scientific Calculator",
            description: "A functional scientific calculator designed with JavaScript for advanced calculations.",
            image: require("@/assets/calcualtor.png"),
            liveLink: "https://ali-hassan24.github.io/scientific-calculator-project/",
            repoLink: null,
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  /* Add gradient and other styles */
  section {
    background: linear-gradient(to right, #353535, #f0edea); /* Gradient background */
  }
  
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
  