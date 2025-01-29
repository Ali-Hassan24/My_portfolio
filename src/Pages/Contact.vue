<template>
    <section id="contact" class="py-16 bg-gray-900 text-white">
      <div class="container mx-auto px-6 lg:px-16">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold tracking-wide text-orange-500">Contact Me</h2>
          <p class="text-gray-400 mt-4">Have a project in mind? Let’s talk!</p>
        </div>
  
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <!-- Contact Info -->
          <div class="space-y-6">
            <div class="flex items-center space-x-4">
              <i class="fas fa-envelope text-orange-500 text-3xl"></i>
              <p class="text-gray-300">alihassanjsdev@gmail.com</p>
            </div>
            <div class="flex items-center space-x-4">
              <i class="fas fa-phone text-orange-500 text-3xl"></i>
              <p class="text-gray-300">+92 3034340620</p>
            </div>
            <div class="flex items-center space-x-4">
              <i class="fas fa-map-marker-alt text-orange-500 text-3xl"></i>
              <p class="text-gray-300">Lahore, Pakistan</p>
            </div>
  
            <!-- Social Links -->
            <div class="flex space-x-6 mt-6">
              <a href="https://github.com/Ali-Hassan24" target="_blank" class="text-gray-400 hover:text-white text-3xl">
                <i class="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/ali-hassan-406147283/" target="_blank" class="text-gray-400 hover:text-white text-3xl">
                <i class="fab fa-linkedin text-blue-500 "></i>
              </a>
              <!-- WhatsApp Contact -->
              <a href="https://wa.me/923034340620" target="_blank" class="text-gray-400 hover:text-white text-3xl">
                     <i class="fab fa-whatsapp text-green-500"></i>
               </a>
            </div>
          </div>
  
          <!-- Contact Form -->
          <form @submit.prevent="submitForm" class="bg-gray-800 p-6 rounded-lg shadow-lg">
            <div class="mb-4">
              <label class="block text-gray-300">Name</label>
              <input v-model="form.name" type="text" class="w-full px-4 py-2 rounded-lg bg-gray-700 text-white outline-none focus:ring-2 focus:ring-orange-500" required />
            </div>
  
            <div class="mb-4">
              <label class="block text-gray-300">Email</label>
              <input v-model="form.email" type="email" class="w-full px-4 py-2 rounded-lg bg-gray-700 text-white outline-none focus:ring-2 focus:ring-orange-500" required />
            </div>
  
            <div class="mb-4">
              <label class="block text-gray-300">Message</label>
              <textarea v-model="form.message" rows="4" class="w-full px-4 py-2 rounded-lg bg-gray-700 text-white outline-none focus:ring-2 focus:ring-orange-500" required></textarea>
            </div>
  
            <button type="submit" class="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 rounded-lg transition">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: "ContactUs",
    data() {
      return {
        form: {
          name: "",
          email: "",
          message: "",
        },
      };
    },
    methods: {
      submitForm() {
        if (this.form.name && this.form.email && this.form.message) {
          alert(`Message sent by ${this.form.name}!`);
          this.form.name = "";
          this.form.email = "";
          this.form.message = "";
        } else {
          alert("Please fill in all fields!");
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* Smooth Hover Effects */
  button:hover {
    transform: scale(1.05);
  }
  </style>
  