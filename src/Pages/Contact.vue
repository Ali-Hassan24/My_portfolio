<template>
  <section id="contact" class="relative py-24 overflow-hidden">
    <!-- Background -->
    <div class="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900"></div>
    
    <!-- Decorative Elements -->
    <div class="absolute top-0 left-0 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
    <div class="absolute bottom-0 right-0 w-[600px] h-[600px] bg-red-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
    
    <!-- Grid Pattern -->
    <div class="absolute inset-0 opacity-5" style="background-image: radial-gradient(circle at 1px 1px, white 1px, transparent 0); background-size: 40px 40px;"></div>

    <div class="relative z-10 container mx-auto px-6 md:px-12 lg:px-20">
      <!-- Section Header -->
      <div class="text-center mb-16" data-aos="fade-up">
        <span class="inline-block px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium tracking-wider uppercase mb-4">
          Get In Touch
        </span>
        <h1 class="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white">
          Let's Work <span class="bg-gradient-to-r from-orange-400 via-red-500 to-orange-500 bg-clip-text text-transparent">Together</span>
        </h1>
        <p class="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">
          Have a project in mind? I'd love to hear about it. Let's discuss how we can bring your ideas to life.
        </p>
        <div class="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto mt-6 rounded-full"></div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
        <!-- Contact Info Side -->
        <div class="lg:col-span-2 space-y-8" data-aos="fade-right" data-aos-delay="100">
          <!-- Info Card -->
          <div class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <h3 class="text-2xl font-bold text-white mb-6">Contact Information</h3>
            <p class="text-gray-400 mb-8">Fill out the form and I'll get back to you within 24 hours.</p>
            
            <!-- Contact Items -->
            <div class="space-y-6">
              <a href="mailto:alihassanjsdev@gmail.com" class="group flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-orange-500/30 transition-all duration-300">
                <div class="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center shadow-lg shadow-orange-500/20 group-hover:scale-110 transition-transform duration-300">
                  <i class="fas fa-envelope text-white"></i>
                </div>
                <div>
                  <p class="text-gray-500 text-sm">Email</p>
                  <p class="text-white font-medium">alihassanjsdev@gmail.com</p>
                </div>
              </a>

              <a href="tel:+923034340620" class="group flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-orange-500/30 transition-all duration-300">
                <div class="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center shadow-lg shadow-orange-500/20 group-hover:scale-110 transition-transform duration-300">
                  <i class="fas fa-phone-alt text-white"></i>
                </div>
                <div>
                  <p class="text-gray-500 text-sm">Phone</p>
                  <p class="text-white font-medium">+92 303 4340620</p>
                </div>
              </a>

              <div class="group flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                <div class="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center shadow-lg shadow-orange-500/20">
                  <i class="fas fa-map-marker-alt text-white"></i>
                </div>
                <div>
                  <p class="text-gray-500 text-sm">Location</p>
                  <p class="text-white font-medium">Lahore, Pakistan</p>
                </div>
              </div>
            </div>

            <!-- Social Links -->
            <div class="mt-8 pt-8 border-t border-white/10">
              <p class="text-gray-400 text-sm mb-4">Connect with me</p>
              <div class="flex gap-4">
                <a 
                  href="https://github.com/Ali-Hassan24" 
                  target="_blank" 
                  class="group w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-orange-500/30 transition-all duration-300"
                >
                  <i class="fab fa-github text-xl text-gray-400 group-hover:text-white transition-colors duration-300"></i>
                </a>
                <a 
                  href="https://www.linkedin.com/in/ali-hassan-406147283/" 
                  target="_blank" 
                  class="group w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-500/20 hover:border-blue-500/30 transition-all duration-300"
                >
                  <i class="fab fa-linkedin-in text-xl text-gray-400 group-hover:text-blue-400 transition-colors duration-300"></i>
                </a>
                <a 
                  href="https://wa.me/923034340620" 
                  target="_blank" 
                  class="group w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-green-500/20 hover:border-green-500/30 transition-all duration-300"
                >
                  <i class="fab fa-whatsapp text-xl text-gray-400 group-hover:text-green-400 transition-colors duration-300"></i>
                </a>
                <a 
                  href="https://www.youtube.com/@AliHassan-jq8dr" 
                  target="_blank" 
                  class="group w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-red-500/20 hover:border-red-500/30 transition-all duration-300"
                >
                  <i class="fab fa-youtube text-xl text-gray-400 group-hover:text-red-400 transition-colors duration-300"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="lg:col-span-3" data-aos="fade-left" data-aos-delay="200">
          <form @submit.prevent="submitForm" class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-10">
            <h3 class="text-2xl font-bold text-white mb-8">Send Me a Message</h3>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <!-- Name Field -->
              <div class="space-y-2">
                <label class="block text-gray-400 text-sm font-medium">Your Name</label>
                <div class="relative">
                  <span class="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                    <i class="fas fa-user"></i>
                  </span>
                  <input 
                    v-model="form.name" 
                    type="text" 
                    placeholder="Ali"
                    class="w-full pl-12 pr-4 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 outline-none focus:border-orange-500/50 focus:bg-white/10 transition-all duration-300" 
                    required 
                  />
                </div>
              </div>

              <!-- Email Field -->
              <div class="space-y-2">
                <label class="block text-gray-400 text-sm font-medium">Your Email</label>
                <div class="relative">
                  <span class="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                    <i class="fas fa-envelope"></i>
                  </span>
                  <input 
                    v-model="form.email" 
                    type="email" 
                    placeholder="ali@example.com"
                    class="w-full pl-12 pr-4 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 outline-none focus:border-orange-500/50 focus:bg-white/10 transition-all duration-300" 
                    required 
                  />
                </div>
              </div>
            </div>

            <!-- Subject Field -->
            <div class="space-y-2 mb-6">
              <label class="block text-gray-400 text-sm font-medium">Subject</label>
              <div class="relative">
                <span class="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                  <i class="fas fa-tag"></i>
                </span>
                <input 
                  v-model="form.subject" 
                  type="text" 
                  placeholder="Project Discussion"
                  class="w-full pl-12 pr-4 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 outline-none focus:border-orange-500/50 focus:bg-white/10 transition-all duration-300" 
                />
              </div>
            </div>

            <!-- Message Field -->
            <div class="space-y-2 mb-8">
              <label class="block text-gray-400 text-sm font-medium">Your Message</label>
              <div class="relative">
                <span class="absolute left-4 top-4 text-gray-500">
                  <i class="fas fa-comment-alt"></i>
                </span>
                <textarea 
                  v-model="form.message" 
                  rows="5" 
                  placeholder="Tell me about your project..."
                  class="w-full pl-12 pr-4 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 outline-none focus:border-orange-500/50 focus:bg-white/10 transition-all duration-300 resize-none" 
                  required
                ></textarea>
              </div>
            </div>

            <!-- Submit Button -->
            <button 
              type="submit" 
              class="group w-full relative inline-flex items-center justify-center px-8 py-4 font-semibold text-white bg-gradient-to-r from-orange-500 to-red-500 rounded-xl shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 transform hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              <span class="relative z-10 flex items-center gap-3">
                <span>Send Message</span>
                <i class="fas fa-paper-plane group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"></i>
              </span>
              <div class="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>

            <!-- Success Message -->
            <div v-if="showSuccess" class="mt-6 p-4 rounded-xl bg-green-500/20 border border-green-500/30 text-green-400 text-center">
              <i class="fas fa-check-circle mr-2"></i>
              Message sent successfully! I'll get back to you soon.
            </div>
          </form>
        </div>
      </div>

      <!-- Map or Additional CTA -->
      <div class="mt-16 text-center" data-aos="fade-up" data-aos-delay="300">
        <p class="text-gray-400 mb-6">Prefer a quick chat? Let's connect!</p>
        <a 
          href="https://wa.me/923034340620" 
          target="_blank"
          class="inline-flex items-center gap-3 px-8 py-4 bg-green-500/20 border border-green-500/30 text-green-400 font-semibold rounded-full hover:bg-green-500/30 transform hover:-translate-y-1 transition-all duration-300"
        >
          <i class="fab fa-whatsapp text-xl"></i>
          <span>Chat on WhatsApp</span>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ContactUs",
  data() {
    return {
      showSuccess: false,
      form: {
        name: "",
        email: "",
        subject: "",
        message: "",
      },
    };
  },
  methods: {
    submitForm() {
      if (this.form.name && this.form.email && this.form.message) {
        // Show success message
        this.showSuccess = true;
        
        // Reset form
        this.form.name = "";
        this.form.email = "";
        this.form.subject = "";
        this.form.message = "";
        
        // Hide success message after 5 seconds
        setTimeout(() => {
          this.showSuccess = false;
        }, 5000);
      }
    },
  },
};
</script>

<style scoped>
/* Input focus glow effect */
input:focus,
textarea:focus {
  box-shadow: 0 0 20px rgba(249, 115, 22, 0.1);
}

/* Button hover effect */
button[type="submit"]:hover {
  box-shadow: 0 20px 40px rgba(249, 115, 22, 0.3);
}

/* Smooth placeholder transition */
input::placeholder,
textarea::placeholder {
  transition: opacity 0.3s ease;
}

input:focus::placeholder,
textarea:focus::placeholder {
  opacity: 0.5;
}
</style>

  