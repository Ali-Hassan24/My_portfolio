<template>
    <section
      id="testimonials"
      class="py-16 bg-cover bg-center bg-no-repeat relative"
      style="background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQnbfBwoOHrQ9RDKh1ux9VBnbOdO0X8_9LAw&s');"
    >
      <!-- Background Overlay -->
      <div class="absolute inset-0 bg-black bg-opacity-60"></div>
  
      <div class="container mx-auto px-6 md:px-20 relative z-10">
        <!-- Title -->
        <div class="text-center mb-12">
          <h1 class="text-5xl font-bold text-orange-400 tracking-wide">
            TESTIMONIALS
          </h1>
          <h2 class="text-3xl font-semibold mt-4 text-white">
            What Our <span class="text-orange-400">Clients Say</span>
          </h2>
          <p class="text-gray-300 mt-4 max-w-2xl mx-auto">
            Our clients' satisfaction is our priority. Here are some words from
            the people we’ve worked with.
          </p>
        </div>
  
        <Carousel
            
            :items-to-scroll="1"
            :wrap-around="true"
            :autoplay="true"
            :pause-autoplay-on-hover="true"
            :autoplay-timeout="90000"
            :transition="8000"
            :breakpoints="carouselBreakpoints"
            :space-padding="20" 
            class="gap-x-8" 
            >
            <!-- Testimonial Card -->
            <Slide
                v-for="(testimonial, index) in testimonials"
                :key="index"
                class="relative bg-white rounded-xl shadow-lg p-8 max-w-lg mx-auto"
                style="margin: 50px 50px;" 
                >
                <!-- Background Accent -->
                <div class="absolute inset-0 bg-orange-100 rounded-xl -z-10"></div>

                <!-- Profile Image -->
                <div
                class="absolute top-0 left-0 -translate-x-10 w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg"
                >
                <img
                    :src="testimonial.image"
                    :alt="testimonial.name"
                    class="w-full h-full object-cover"
                />
                </div>

                <!-- Name and Role -->
                <div class="absolute top-0 right-0 text-right mr-4 mt-4">
                <h3 class="text-lg font-bold text-orange-500">{{ testimonial.name }}</h3>
                <p class="text-sm text-gray-500">{{ testimonial.role }}</p>
                </div>

                <!-- Message -->
                <div class="mt-16 text-center">
                <p class="text-gray-600 italic">"{{ testimonial.message }}"</p>
                </div>

                <!-- Speech Bubble Tail -->
                <div
                class="absolute -z-10 -bottom-4 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white rotate-45 border-l border-b border-gray-200"
                ></div>
            </Slide>

            <!-- Navigation and Pagination -->
            <template #addons>
                <div class="flex justify-center mt-6">
                <Navigation
                    class="bg-orange-500 p-2 rounded-full mx-2 text-3xl text-white shadow-md"
                />
                <Pagination class="text-orange-500 text-3xl" />
                </div>
            </template>
        </Carousel>

      </div>
    </section>
  </template>
  
  <script>
  import "vue3-carousel/dist/carousel.css";
  import { Carousel, Slide, Navigation, Pagination } from "vue3-carousel";
  import hayfaImage from "../assets/hayfa.png";
  import talhaImage from "../assets/talha.jpeg";
  import fiazImage from "../assets/fiaz.webp";
  import zeeshanImage from "../assets/zeeshan.png";
  
  export default {
    name: "CustomerReviews",
    components: {
      Carousel,
      Slide,
      Navigation,
      Pagination,
    },
    data() {
      return {
        testimonials: [
          {
            name: "Hayfa Hamdan",
            role: "CEO, Swished App",
            image: hayfaImage,
            message:
              "Ali is a pleasure to work with, he is very conscientious, organized, speedy, and with great attention to detail. Highly recommended!",
          },
          {
            name: "Syed Muhammad Talha Shah",
            role: "Founder and CEO - Techxudo",
            image: talhaImage,
            message:
              "Their dedication to delivering top-notch results is evident in everything they do. Truly exceptional service!",
          },
          {
            name: "Fiaz Ahmad",
            role: "Freelancer",
            image: fiazImage,
            message:
              "The process was seamless, and the final output exceeded my expectations. Amazing experience!",
          },
          {
            name: "Malik Zeeshan Ali",
            role: "Freelancer",
            image: zeeshanImage,
            message:
              "The process was seamless, and the final output exceeded my expectations. Amazing experience!",
          },
        ],
        carouselBreakpoints: {
          640: { itemsToShow: 1 },
          768: { itemsToShow: 2 },
          1024: { itemsToShow: 2 },
        },
      };
    },
  };
  </script>
  
  <style scoped>
  .carousel .carousel__slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .carousel__pagination-button {
    background: #f97316;
    border-radius: 50%;
    width: 12px;
    height: 12px;
    margin: 0 4px;
  }
  .carousel__pagination-button--active {
    background: #ea580c;
  }
  </style>
  