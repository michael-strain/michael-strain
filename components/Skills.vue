<template>
  <h2 class="w-full text-4xl font-bold text-center">
    Skills
  </h2>
  <br>
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-14">
    <div>
      <p class="uppercase text-2xl">
        Operating Systems
      </p> *I'm highly proficient in all of them, these are my feelings.

      <span class="flex gap-4 align-center">
        <v-rating
          length="5"
          :style="{fontSize:'22px'}"
          size="35"
          color="primary"
          model-value="2"
          readonly 
        />
        <p class="text-xl">Windows 11</p>
      </span>

      <span class="flex gap-4 align-center">
        <v-rating
          length="5"
          :style="{fontSize:'22px'}"
          size="35"
          color="primary"
          model-value="2"
          readonly 
        />
        <p class="text-xl">Windows 10</p>
      </span>

      <span class="flex gap-4 align-center">
        <v-rating
          length="5"
          :style="{fontSize:'22px'}"
          size="35"
          color="primary"
          model-value="3"
          readonly 
        />
        <p class="text-xl">Windows 95</p>
      </span>

      <span class="flex gap-4 align-center">
        <v-rating
          length="5"
          :style="{fontSize:'22px'}"
          size="35"
          color="primary"
          model-value="3"
          readonly 
        />
        <p class="text-xl">macOS (Last version I tried was Big Sur)</p>
      </span>

      <span class="flex gap-4 align-center">
        <v-rating
          length="5"
          :style="{fontSize:'22px'}"
          size="35"
          color="primary"
          model-value="4"
          readonly 
        />
        <p class="text-xl">Ubuntu</p>
      </span>


      
      <p class="uppercase text-2xl">
        Languages
      </p>
      <span class="flex justify-space-between"><p>JavaScript</p> <p class="text-gray-500">90%</p></span>
      <v-progress-linear
        model-value="90"
        color="primary"
        class="mb-4"
      />

      <span class="flex justify-space-between"><p>SQL</p> <p class="text-gray-500">75%</p></span>
      <v-progress-linear
        model-value="75"
        color="primary"
        class="mb-4"
      />

      <span class="flex justify-space-between"><p>Python</p> <p class="text-gray-500">85%</p></span>
      <v-progress-linear
        model-value="85"
        color="primary"
        class="mb-4"
      />

      <span class="flex justify-space-between"><p>VBA</p> <p class="text-gray-500">95%</p></span>
      <v-progress-linear
        model-value="95"
        color="primary"
        class="mb-4"
      />

      <span class="flex justify-space-between"><p>Go</p> <p class="text-gray-500">5%</p></span>
      <v-progress-linear
        model-value="5"
        color="primary"
        class="mb-4"
      />

      <span class="flex justify-space-between"><p>GDScript</p> <p class="text-gray-500">85%</p></span>
      <v-progress-linear
        model-value="85"
        color="primary"
        class="mb-4"
      />

      <span class="flex justify-space-between"><p>Anything you need.  I'm flexible.</p> <p class="text-gray-500">60%</p></span>
      <v-progress-linear
        model-value="60"
        color="primary"
        class="mb-4"
      />
    </div>
    <div>
      <p class="uppercase text-2xl">
        Back End
      </p>

      <span class="flex justify-space-between"><p>Cloud Architecture</p> <p class="text-gray-500">95%</p></span>
      <v-progress-linear
        model-value="95"
        color="primary"
        class="mb-4"
      />

      <span class="flex justify-space-between"><p>NoSQL Database Architecture</p> <p class="text-gray-500">90%</p></span>
      <v-progress-linear
        model-value="90"
        color="primary"
        class="mb-4"
      />

      <span class="flex justify-space-between"><p>Cloud File Storage</p> <p class="text-gray-500">80%</p></span>
      <v-progress-linear
        model-value="80"
        color="primary"
        class="mb-4"
      />

      <span class="flex justify-space-between"><p>Authentication & Access Control</p> <p class="text-gray-500">99%</p></span>
      <v-progress-linear
        model-value="99"
        color="primary"
        class="mb-4"
      />

      <span class="flex justify-space-between"><p>Analytics & Reporting</p> <p class="text-gray-500">98%</p></span>
      <v-progress-linear
        model-value="98"
        color="primary"
        class="mb-4"
      />

      <span class="flex justify-space-between"><p>Photo/Audio/Video Editing & Processing</p> <p class="text-gray-500">55%</p></span>
      <v-progress-linear
        model-value="55"
        color="primary"
        class="mb-4"
      />
    </div>

    <div class="flex flex-col gap-2">     
      <p class="uppercase text-2xl">
        The Stack
      </p>
      <span class="flex gap-4 align-center">
        <v-rating
          length="5"
          :style="{fontSize:'22px'}"
          size="35"
          color="primary"
          model-value="5"
          readonly 
        />
        <p class="text-xl">Nuxt 3</p>
      </span>
      <span class="flex gap-4 align-center">
        <v-rating
          length="5"
          :style="{fontSize:'22px'}"
          size="35"
          color="primary"
          model-value="5"
          readonly 
        />
        <p class="text-xl">Vue 3</p>
      </span>
      <span class="flex gap-4 align-center">
        <v-rating
          length="5"
          :style="{fontSize:'22px'}"
          size="35"
          color="primary"
          model-value="5"
          readonly 
        />
        <p class="text-xl">Node JS / Javascript</p>
      </span>
      <span class="flex gap-4 align-center">
        <v-rating
          length="5"
          :style="{fontSize:'22px'}"
          size="35"
          color="primary"
          model-value="4"
          readonly 
        />
        <p class="text-xl">Vuetify</p>
      </span>
      <span class="flex gap-4 align-center">
        <v-rating
          length="5"
          :style="{fontSize:'22px'}"
          size="35"
          color="primary"
          model-value="4.5"
          readonly 
        />
        <p class="text-xl">Tailwind</p>
      </span>
      <span class="flex gap-4 align-center">
        <v-rating
          length="5"
          :style="{fontSize:'22px'}"
          size="35"
          color="primary"
          model-value="5"
          readonly 
        />
        <p class="text-xl">DaisyUI</p>
      </span>
      <span class="flex gap-4 align-center">
        <v-rating
          length="5"
          :style="{fontSize:'22px'}"
          size="35"
          color="primary"
          model-value="5"
          readonly 
        />
        <p class="text-xl">Git</p>
      </span>
      <span class="flex gap-4 align-center">
        <v-rating
          length="5"
          :style="{fontSize:'22px'}"
          size="35"
          color="primary"
          model-value="10"
          readonly 
        />
        <p class="text-xl">Google Cloud Platform</p>
      </span>
    </div>
    <div>
      <p class="uppercase text-2xl">
        Applications
      </p>
      <span class="flex justify-space-between"><p>Visual Studio Code</p> <p class="text-gray-500">85%</p></span>
      <v-progress-linear
        model-value="85"
        color="primary"
        class="mb-4"
      />

      <span class="flex justify-space-between"><p>Firebase</p> <p class="text-gray-500">95%</p></span>
      <v-progress-linear
        model-value="95"
        color="primary"
        class="mb-4"
      />

      <span class="flex justify-space-between"><p>Github</p> <p class="text-gray-500">90%</p></span>
      <v-progress-linear
        model-value="90"
        color="primary"
        class="mb-4"
      />

      <span class="flex justify-space-between"><p>Google Suite (Docs, Sheets, Scripts, Slides, Etc.)</p> <p class="text-gray-500">99%</p></span>
      <v-progress-linear
        model-value="99"
        color="primary"
        class="mb-4"
      />

      <span class="flex justify-space-between"><p>Google Analytics, Data Studio, Ad Manager, Business Manager, Etc.</p> <p class="text-gray-500">95%</p></span>
      <v-progress-linear
        model-value="95"
        color="primary"
        class="mb-4"
      />

      <span class="flex justify-space-between"><p>Google Suite (Docs, Sheets, Scripts, Slides, Etc.)</p> <p class="text-gray-500">99%</p></span>
      <v-progress-linear
        model-value="99"
        color="primary"
        class="mb-4"
      />

      <span class="flex justify-space-between"><p>Brevo</p> <p class="text-gray-500">96%</p></span>
      <v-progress-linear
        model-value="96"
        color="primary"
        class="mb-4"
      />

      <span class="flex justify-space-between"><p>Printify</p> <p class="text-gray-500">99%</p></span>
      <v-progress-linear
        model-value="99"
        color="primary"
        class="mb-4"
      />

      <span class="flex justify-space-between"><p>Shippo</p> <p class="text-gray-500">80%</p></span>
      <v-progress-linear
        model-value="80"
        color="primary"
        class="mb-4"
      />

      <span class="flex justify-space-between"><p>Facebook (Ads)</p> <p class="text-gray-500">60%</p></span>
      <v-progress-linear
        model-value="60"
        color="primary"
        class="mb-4"
      />

      <span class="flex justify-space-between"><p>YouTube (Creator Studio)</p> <p class="text-gray-500">70%</p></span>
      <v-progress-linear
        model-value="70"
        color="primary"
        class="mb-4"
      />

      <span class="flex justify-space-between"><p>Godot</p> <p class="text-gray-500">90%</p></span>
      <v-progress-linear
        model-value="90"
        color="primary"
        class="mb-4"
      />

      <span class="flex justify-space-between"><p>GIMP</p> <p class="text-gray-500">70%</p></span>
      <v-progress-linear
        model-value="70"
        color="primary"
        class="mb-4"
      />
    </div>
    <div>
      <p class="uppercase text-2xl">
        Still need to add everything
        Might need categorized skill tabs...
        Tech / Construction / Agriculture
      </p>
      <span class="flex justify-space-between"><p>Carpentry</p> <p class="text-gray-500">85%</p></span>
      <v-progress-linear
        model-value="85"
        color="primary"
        class="mb-4"
      />

      <span class="flex justify-space-between"><p>Framing</p> <p class="text-gray-500">85%</p></span>
      <v-progress-linear
        model-value="85"
        color="primary"
        class="mb-4"
      />

      <span class="flex justify-space-between"><p>Drywall</p> <p class="text-gray-500">60%</p></span>
      <v-progress-linear
        model-value="60"
        color="primary"
        class="mb-4"
      />

      <span class="flex justify-space-between"><p>Electrical</p> <p class="text-gray-500">60%</p></span>
      <v-progress-linear
        model-value="60"
        color="primary"
        class="mb-4"
      />

      <span class="flex justify-space-between"><p>Plumbing</p> <p class="text-gray-500">60%</p></span>
      <v-progress-linear
        model-value="60"
        color="primary"
        class="mb-4"
      />

      <span class="flex justify-space-between"><p>Roofing</p> <p class="text-gray-500">60%</p></span>
      <v-progress-linear
        model-value="60"
        color="primary"
        class="mb-4"
      />

      <span class="flex justify-space-between"><p>Flooring</p> <p class="text-gray-500">90%</p></span>
      <v-progress-linear
        model-value="90"
        color="primary"
        class="mb-4"
      />

      <span class="flex justify-space-between"><p>Decks</p> <p class="text-gray-500">60%</p></span>
      <v-progress-linear
        model-value="60"
        color="primary"
        class="mb-4"
      />

      <span class="flex justify-space-between"><p>Outbuildings</p> <p class="text-gray-500">60%</p></span>
      <v-progress-linear
        model-value="60"
        color="primary"
        class="mb-4"
      />

      <span class="flex justify-space-between"><p>Masonry</p> <p class="text-gray-500">60%</p></span>
      <v-progress-linear
        model-value="60"
        color="primary"
        class="mb-4"
      />

      <span class="flex justify-space-between"><p>Concrete</p> <p class="text-gray-500">60%</p></span>
      <v-progress-linear
        model-value="60"
        color="primary"
        class="mb-4"
      />

      <span class="flex justify-space-between"><p>Painting</p> <p class="text-gray-500">80%</p></span>
      <v-progress-linear
        model-value="80"
        color="primary"
        class="mb-4"
      />

      <span class="flex justify-space-between"><p>Horticulture</p> <p class="text-gray-500">90%</p></span>
      <v-progress-linear
        model-value="90"
        color="primary"
        class="mb-4"
      />

      <span class="flex justify-space-between"><p>Livestock Management</p> <p class="text-gray-500">65%</p></span>
      <v-progress-linear
        model-value="65"
        color="primary"
        class="mb-4"
      />

      <span class="flex justify-space-between"><p>Butchery & Processing</p> <p class="text-gray-500">50%</p></span>
      <v-progress-linear
        model-value="50"
        color="primary"
        class="mb-4"
      />

      <span class="flex justify-space-between"><p>Fishery Management</p> <p class="text-gray-500">10%</p></span>
      <v-progress-linear
        model-value="10"
        color="primary"
        class="mb-4"
      />

      <span class="flex justify-space-between"><p>Solar Power Generation</p> <p class="text-gray-500">60%</p></span>
      <v-progress-linear
        model-value="60"
        color="primary"
        class="mb-4"
      />

      <span class="flex justify-space-between"><p>Wind Power Generation</p> <p class="text-gray-500">30%</p></span>
      <v-progress-linear
        model-value="30"
        color="primary"
        class="mb-4"
      />

      <span class="flex justify-space-between"><p>Hydro Power Generation</p> <p class="text-gray-500">10%</p></span>
      <v-progress-linear
        model-value="10"
        color="primary"
        class="mb-4"
      />

      <span class="flex justify-space-between"><p>Biofuel Power Generation</p> <p class="text-gray-500">10%</p></span>
      <v-progress-linear
        model-value="10"
        color="primary"
        class="mb-4"
      />

      <span class="flex justify-space-between"><p>Cistern Water Collection & Purification</p> <p class="text-gray-500">15%</p></span>
      <v-progress-linear
        model-value="15"
        color="primary"
        class="mb-4"
      />

      <span class="flex justify-space-between"><p>Handyman Services</p> <p class="text-gray-500">95%</p></span>
      <v-progress-linear
        model-value="95"
        color="primary"
        class="mb-4"
      />

      <span class="flex justify-space-between"><p>Customer Service & IT</p> <p class="text-gray-500">90%</p></span>
      <v-progress-linear
        model-value="90"
        color="primary"
        class="mb-4"
      />

      <span class="flex justify-space-between"><p>Administration/Management</p> <p class="text-gray-500">75%</p></span>
      <v-progress-linear
        model-value="75"
        color="primary"
        class="mb-4"
      />

      <span class="flex justify-space-between"><p>Budgeting & Financial Planning</p> <p class="text-gray-500">95%</p></span>
      <v-progress-linear
        model-value="95"
        color="primary"
        class="mb-4"
      />

      <span class="flex justify-space-between"><p>Contract Writing & Review</p> <p class="text-gray-500">75%</p></span>
      <v-progress-linear
        model-value="75"
        color="primary"
        class="mb-4"
      />

      <span class="flex justify-space-between"><p>Spanish</p> <p class="text-gray-500">35%</p></span>
      <v-progress-linear
        model-value="35"
        color="primary"
        class="mb-4"
      />

      <span class="flex justify-space-between"><p>Charisma</p> <p class="text-gray-500">50%</p></span>
      <v-progress-linear
        model-value="50"
        color="primary"
        class="mb-4"
      />
    </div>
  </div>
</template>
