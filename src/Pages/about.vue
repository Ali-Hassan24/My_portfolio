<template>
    <!-- About Section -->
    <section
      id="about"
      class="py-16 text-white"
      style="background: linear-gradient(to bottom right, #1a1a1a, #2d2d2d, #f97316);"
    >
      <h1
        class="text-6xl text-center underline underline-offset-8 py-5 uppercase"
        data-aos="fade-up"
      >
        About Us
      </h1>
      <div
        class="container mx-auto grid md:grid-cols-2 items-center gap-8 px-4 md:px-20"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <!-- About Content -->
        <div class="space-y-6">
          <h2
            class="text-4xl md:text-5xl font-bold"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            Professional <span class="text-orange-500">Problem Solutions</span><br />
            For Digital Products
          </h2>
          <p
            class="text-gray-300"
            data-aos="fade-right"
            data-aos-delay="300"
          >
            Hello! I am Ali Hassan, a passionate Web Developer, Graphic Designer, and Data Entry Specialist. 
            I provide high-quality, result-oriented services to help businesses thrive in the digital landscape. 
            I am committed to delivering creative and efficient solutions tailored to meet client needs.
          </p>
          <!-- Services List -->
          <div class="grid grid-cols-2 gap-4">
            <div class="flex items-center space-x-3" data-aos="zoom-in" data-aos-delay="400">
              <i class="fas fa-code text-orange-500"></i>
              <span>Web Development</span>
            </div>
            <div class="flex items-center space-x-3" data-aos="zoom-in" data-aos-delay="500">
              <i class="fas fa-paint-brush text-orange-500"></i>
              <span>Graphic Design</span>
            </div>
            <div class="flex items-center space-x-3" data-aos="zoom-in" data-aos-delay="600">
              <i class="fas fa-keyboard text-orange-500"></i>
              <span>Data Entry</span>
            </div>
            <div class="flex items-center space-x-3" data-aos="zoom-in" data-aos-delay="700">
              <i class="fas fa-lightbulb text-orange-500"></i>
              <span>Creative Solutions</span>
            </div>
          </div>
          <!-- Contact Information -->
          <div class="md:flex items-center space-x-6 mt-6" data-aos="fade-up" data-aos-delay="800">
            <div class="bg-gray-800 px-4 py-3 rounded-lg flex items-center space-x-3">
              <i class="fas fa-envelope text-orange-500 text-3xl"></i>
              <p>
                <span class="text-gray-300">Email us</span><br />
                <span class="font-bold">alihassanjsdev@gmail.com</span>
              </p>
            </div>
            <div class="bg-gray-800 space-x-3 mt-3 md:mt-0 px-6 py-3 rounded-lg flex items-center">
              <i class="fas fa-phone-volume text-orange-500 text-3xl"></i>
              <p>
                <span class="text-gray-300">Make a Call</span><br />
                <span class="font-bold">+92 3034340620</span>
              </p>
            </div>
          </div>
        </div>
        <!-- Profile Image -->
        <div class="relative" data-aos="fade-up" data-aos-delay="400">
          <img
            src="../assets/mypic2.png"
            alt="Ali Hassan"
            class="rounded-lg shadow-lg w-full h-[520px]"
          />
          <div
            class="absolute bottom-10 left-4 bg-white p-1 rounded-full shadow-lg flex items-center space-x-3"
            data-aos="zoom-in"
            data-aos-delay="500"
          >
            <img
              src="https://images.vexels.com/media/users/3/129668/isolated/svg/07de0f2c1c707276c0e4105798e16930.svg"
              alt="Avatar"
              class="w-12 h-12 rounded-full"
            />
            <div>
              <p class="text-lg text-gray-800 px-3">Web Developer <i class="fa-solid fa-arrow-trend-up"></i></p>
            </div>
          </div>
        </div>
      </div>
      <!-- Education Section -->
      <section
        id="education"
        class="mt-16 px-4 md:px-20"
       
      >
        <h2 class="text-4xl text-center text-white underline underline-offset-8 py-5 uppercase" data-aos="fade-up"
                data-aos-delay="500">
          Education
        </h2>
        <div class="relative  md:grid md:grid-cols-2 mx-8 md:mx-20">
          <div class="border-l-4 border-orange-500">
              <!-- Timeline Item -->
              <div class="mb-8 flex items-center">
                <div class="w-4 h-4 bg-white rounded-full absolute "></div>
                <div class="ml-6 text-white space-y-2" data-aos="fade-up"
                data-aos-delay="500">
                  <h3 class="text-2xl font-bold">Matric (2016-2018)</h3>
                  <p>Study: Science Biology</p>
                  <p>From: Central Model School, Lahore</p>
                </div>
              </div>
              <!-- Repeat as needed -->
              <div class="mb-8 flex items-center">
                <div class="w-4 h-4 bg-white rounded-full absolute "></div>
                <div class="ml-6 text-white space-y-2" data-aos="fade-up"
                data-aos-delay="500">
                  <h3 class="text-2xl font-bold">Inter ICS (2018-2020)</h3>
                  <p>Study: ICS</p>
                  <p>Form: Degree College, Kasur</p>
                </div>
              </div>
          </div>
          <div class="border-l-4 border-orange-500">
              <!-- Repeat as needed -->
              <div class="mb-8 flex items-center">
                <div class="w-4 h-4 bg-white rounded-full  -left-2"></div>
                <div class="ml-6 text-white space-y-2" data-aos="fade-down"
                data-aos-delay="500">
                  <h3 class="text-2xl font-bold">BS Computer Science (2020*)</h3>
                  <p>Study: Computer Science</p>
                  <p>Form: Virtual Univestiy of Pakistan</p>
                </div>
              </div>
              <!-- Repeat as needed -->
              <div class="mb-8 flex items-center">
                <div class="w-4 h-4 bg-white rounded-full  -left-4"></div>
                <div class="ml-6 text-white space-y-2" data-aos="fade-down"
                data-aos-delay="500">
                  <h3 class="text-2xl font-bold">Web Developent Course</h3>
                  <p>Study: Html | Css | JavaScript | BootStrap</p>
                  <p>Form: NTS Teach Software House</p>
                </div>
               </div>
          </div>
        </div>
      </section>
    </section>
  </template>
  
  <script>
  export default {
    name: "AboutPage",
  };
  </script>
  
  <style>
   
  </style>
  