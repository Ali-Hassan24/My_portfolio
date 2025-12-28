<template>
  <!-- About Section -->
  <section
    id="about"
    class="relative py-24 text-white overflow-hidden"
  >
    <!-- Background with gradient -->
    <div class="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
    
    <!-- Decorative Elements -->
    <div class="absolute top-0 left-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
    <div class="absolute bottom-0 right-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
    <div class="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>

    <div class="relative z-10">
      <!-- Section Header -->
      <div class="text-center mb-16" data-aos="fade-up">
        <span class="inline-block px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium tracking-wider uppercase mb-4">
          Get to Know Me
        </span>
        <h1 class="text-4xl sm:text-5xl md:text-6xl font-extrabold">
          About <span class="bg-gradient-to-r from-orange-400 via-red-500 to-orange-500 bg-clip-text text-transparent">Me</span>
        </h1>
        <div class="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto mt-6 rounded-full"></div>
      </div>

      <div
        class="container mx-auto grid lg:grid-cols-2 items-center gap-12 lg:gap-20 px-6 md:px-12 lg:px-20"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <!-- Profile Image Section -->
        <div class="relative order-2 lg:order-2" data-aos="fade-right" data-aos-delay="200">
          <!-- Glow Effect Behind Image -->
          <div class="absolute inset-4 bg-gradient-to-br from-orange-500/30 to-red-500/30 rounded-2xl blur-2xl"></div>
          
          <!-- Main Image Container -->
          <div class="relative group">
            <div class="absolute -inset-1 bg-gradient-to-r from-orange-500 via-red-500 to-orange-400 rounded-2xl blur opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
            <div class="relative bg-gray-800 rounded-2xl p-2">
              <img
                src="../assets/pic.png"
                alt="Ali Hassan"
                class="rounded-xl w-full h-[650px] object-cover shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
          </div>

          <!-- Floating Badge -->
          <div
            class="absolute -bottom-6 -right-4 md:right-8 bg-white/10 backdrop-blur-xl p-4 rounded-2xl shadow-2xl border border-white/20 flex items-center gap-4 group hover:bg-white/20 transition-all duration-300"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <div class="w-14 h-14 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center shadow-lg">
              <i class="fas fa-laptop-code text-white text-xl"></i>
            </div>
            <div>
              <p class="text-white font-bold text-lg">3+ Years</p>
              <p class="text-gray-400 text-sm">Experience</p>
            </div>
          </div>

          <!-- Stats Badge -->
          <div
            class="absolute -top-4 -left-4 md:left-8 bg-white/10 backdrop-blur-xl px-5 py-3 rounded-xl shadow-2xl border border-white/20"
            data-aos="zoom-in"
            data-aos-delay="500"
          >
            <p class="text-2xl font-bold text-white">50+</p>
            <p class="text-gray-400 text-xs uppercase tracking-wider">Projects Done</p>
          </div>
        </div>

        <!-- About Content -->
        <div class="space-y-8 order-1 lg:order-1">
          <h2
            class="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            Professional
            <span class="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              Problem Solver
            </span>
            <br />
            Building Scalable Digital Products
          </h2>

          <p
            class="text-gray-400 text-lg leading-relaxed"
            data-aos="fade-left"
            data-aos-delay="300"
          >
            Hello! I’m
            <span class="text-white font-semibold">Ali Hassan</span>,
            a <span class="text-white font-medium">Full Stack Web Application Developer & Designer</span>
            with a strong focus on solving real-world problems through clean architecture,
            thoughtful design, and efficient code.
            <br /><br />
            I specialize in building modern, scalable, and high-performance web applications —
            from intuitive user interfaces to robust backend systems.
            My approach is simple: understand the problem deeply, design intelligently,
            and deliver solutions that create real business value.
          </p>

          <!-- Services Grid -->
          <div class="grid grid-cols-2 gap-4" data-aos="fade-up" data-aos-delay="400">
            <div class="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 hover:border-orange-500/30 transition-all duration-300">
              <div class="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-500/20 to-red-500/20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                <i class="fas fa-code text-orange-400 text-xl"></i>
              </div>
              <span class="text-white font-medium">Full Stack Development</span>
            </div>

            <div class="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 hover:border-orange-500/30 transition-all duration-300">
              <div class="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-500/20 to-red-500/20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                <i class="fas fa-paint-brush text-orange-400 text-xl"></i>
              </div>
              <span class="text-white font-medium">UI / UX & Visual Design</span>
            </div>

            <div class="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 hover:border-orange-500/30 transition-all duration-300">
              <div class="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-500/20 to-red-500/20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                <i class="fas fa-database text-orange-400 text-xl"></i>
              </div>
              <span class="text-white font-medium">Backend & Data Handling</span>
            </div>

            <div class="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 hover:border-orange-500/30 transition-all duration-300">
              <div class="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-500/20 to-red-500/20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                <i class="fas fa-lightbulb text-orange-400 text-xl"></i>
              </div>
              <span class="text-white font-medium">Problem Solving & Optimization</span>
            </div>
          </div>

          <!-- Contact Cards -->
          <div class="flex flex-col sm:flex-row gap-4 pt-4" data-aos="fade-up" data-aos-delay="500">
            <a
              href="mailto:alihassanjsdev@gmail.com"
              class="group flex-1 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 flex items-center gap-4 hover:bg-white/10 hover:border-orange-500/30 transition-all duration-300"
            >
              <div class="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center shadow-lg shadow-orange-500/20 group-hover:scale-110 transition-transform duration-300">
                <i class="fas fa-envelope text-white text-lg"></i>
              </div>
              <div>
                <p class="text-gray-400 text-sm">Email</p>
                <p class="text-white font-semibold text-sm">alihassanjsdev@gmail.com</p>
              </div>
            </a>

            <a
              href="tel:+923034340620"
              class="group flex-1 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 flex items-center gap-4 hover:bg-white/10 hover:border-orange-500/30 transition-all duration-300"
            >
              <div class="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center shadow-lg shadow-orange-500/20 group-hover:scale-110 transition-transform duration-300">
                <i class="fas fa-phone-alt text-white text-lg"></i>
              </div>
              <div>
                <p class="text-gray-400 text-sm">Phone</p>
                <p class="text-white font-semibold">+92 303 4340620</p>
              </div>
            </a>
          </div>
        </div>
      </div>

      <!-- Education Section -->
      <section id="education" class="mt-32 px-6 md:px-12 lg:px-20">
        <!-- Section Header -->
        <div class="text-center mb-16" data-aos="fade-up">
          <span class="inline-block px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium tracking-wider uppercase mb-4">
            My Journey
          </span>
          <h2 class="text-4xl sm:text-5xl font-extrabold">
            Education & <span class="bg-gradient-to-r from-orange-400 via-red-500 to-orange-500 bg-clip-text text-transparent">Training</span>
          </h2>
          <div class="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto mt-6 rounded-full"></div>
        </div>

        <!-- Timeline -->
        <div class="max-w-4xl mx-auto">
          <div class="relative">
            <!-- Vertical Line -->
            <div class="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-500 via-red-500 to-orange-400 md:-translate-x-1/2"></div>

            <!-- Timeline Items -->
            <div class="space-y-12">
              <!-- Item 1 -->
              <div class="relative flex items-start md:items-center" data-aos="fade-up" data-aos-delay="100">
                <div class="absolute left-4 md:left-1/2 w-4 h-4 bg-orange-500 rounded-full border-4 border-gray-900 md:-translate-x-1/2 shadow-lg shadow-orange-500/50"></div>
                <div class="ml-12 md:ml-0 md:w-1/2 md:pr-12 md:text-right">
                  <div class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-orange-500/30 transition-all duration-300">
                    <span class="inline-block px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 text-xs font-medium mb-3">2016 - 2018</span>
                    <h3 class="text-xl font-bold text-white mb-2">Matriculation</h3>
                    <p class="text-gray-400 text-sm mb-1">📚 Science Biology</p>
                    <p class="text-gray-500 text-sm">Central Model School, Lahore</p>
                  </div>
                </div>
              </div>

              <!-- Item 2 -->
              <div class="relative flex items-start md:items-center" data-aos="fade-up" data-aos-delay="200">
                <div class="absolute left-4 md:left-1/2 w-4 h-4 bg-red-500 rounded-full border-4 border-gray-900 md:-translate-x-1/2 shadow-lg shadow-red-500/50"></div>
                <div class="ml-12 md:ml-auto md:w-1/2 md:pl-12">
                  <div class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-orange-500/30 transition-all duration-300">
                    <span class="inline-block px-3 py-1 rounded-full bg-red-500/20 text-red-400 text-xs font-medium mb-3">2018 - 2020</span>
                    <h3 class="text-xl font-bold text-white mb-2">Intermediate (ICS)</h3>
                    <p class="text-gray-400 text-sm mb-1">💻 Computer Science</p>
                    <p class="text-gray-500 text-sm">Degree College, Kasur</p>
                  </div>
                </div>
              </div>

              <!-- Item 3 -->
              <div class="relative flex items-start md:items-center" data-aos="fade-up" data-aos-delay="300">
                <div class="absolute left-4 md:left-1/2 w-4 h-4 bg-orange-500 rounded-full border-4 border-gray-900 md:-translate-x-1/2 shadow-lg shadow-orange-500/50"></div>
                <div class="ml-12 md:ml-0 md:w-1/2 md:pr-12 md:text-right">
                  <div class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-orange-500/30 transition-all duration-300">
                    <span class="inline-block px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 text-xs font-medium mb-3">2020 - Present</span>
                    <h3 class="text-xl font-bold text-white mb-2">BS Computer Science</h3>
                    <p class="text-gray-400 text-sm mb-1">🎓 Computer Science</p>
                    <p class="text-gray-500 text-sm">Virtual University of Pakistan</p>
                  </div>
                </div>
              </div>

              <!-- Item 4 -->
              <div class="relative flex items-start md:items-center" data-aos="fade-up" data-aos-delay="400">
                <div class="absolute left-4 md:left-1/2 w-4 h-4 bg-red-500 rounded-full border-4 border-gray-900 md:-translate-x-1/2 shadow-lg shadow-red-500/50"></div>
                <div class="ml-12 md:ml-auto md:w-1/2 md:pl-12">
                  <div class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-orange-500/30 transition-all duration-300">
                    <span class="inline-block px-3 py-1 rounded-full bg-red-500/20 text-red-400 text-xs font-medium mb-3">Professional Course</span>
                    <h3 class="text-xl font-bold text-white mb-2">Web Development Course</h3>
                    <p class="text-gray-400 text-sm mb-1">🚀 HTML | CSS | JavaScript | Bootstrap</p>
                    <p class="text-gray-500 text-sm">NTS Teach Software House</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </section>
</template>

<script>
export default {
  name: "AboutPage",
};
</script>

<style scoped>
/* Add subtle animation for floating badges */
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}
</style>
  