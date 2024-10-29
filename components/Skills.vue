<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/max-attributes-per-line -->
<template>
  <div class="">
    <!-- <h2 class="w-full text-4xl font-bold text-center mb-8">
      Skills
    </h2> -->

    <div class="text-white">
      <v-tabs
        v-if="$device.isDesktop"
        v-model="tab"
        color="primary"
        class=""
        grow
      >
        <v-tab
          text="Technical Skills"
          value="technicaltab"
          class="uppercase text-2xl rounded-t-2xl ml-1 font-bold transition ease-in-out bg-gray-900 hover:scale-110 duration-500"
        />
        <v-tab
          text="Professional Skills"
          value="professionaltab"
          class="uppercase text-2xl rounded-t-2xl mx-1 font-bold transition ease-in-out bg-gray-800 hover:scale-110 duration-500"
        />
        <v-tab
          text="Personal Skills"
          value="personaltab"
          class="uppercase text-2xl rounded-t-2xl mr-1 font-bold transition ease-in-out bg-gray-700 hover:scale-110 duration-500"
        />
      </v-tabs>
      <v-tabs
        v-if="$device.isMobileOrTablet"
        v-model="tab"
        color="primary"
        class=""
        grow
        direction="vertical"
      >
        <v-tab
          text="Technical Skills"
          value="technicaltab"
          class="uppercase text-2xl justify-center w-full font-bold bg-gray-700"
        />
        <v-tab
          text="Professional Skills"
          value="professionaltab"
          class="uppercase text-2xl justify-center w-full font-bold bg-gray-700"
        />
        <v-tab
          text="Personal Skills"
          value="personaltab"
          class="uppercase text-2xl justify-center w-full font-bold bg-gray-700"
        />
      </v-tabs>

      <v-tabs-window v-model="tab" class="">
        <div class="">
          <v-tabs-window-item value="technicaltab" class="bg-gray-900 p-4 pb-8">
            <div class="">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <!-- Operating Systems -->
                <div>
                  <LazySkillTitle name="Operating Systems" class="mb-2 underline" />
                  <LazySkillRating name="Windows" :rating="5" />
                  <!-- <SkillRating name="Windows 11" :rating="5" />
                  <SkillRating name="Windows 10" :rating="5" />
                  <SkillRating name="Windows 8.1" :rating="5" />
                  <SkillRating name="Windows 7" :rating="5" />
                  <SkillRating name="Windows Vista" :rating="5" />
                  <SkillRating name="Windows XP" :rating="5" />
                  <SkillRating name="Windows 2000" :rating="5" />
                  <SkillRating name="Windows 95" :rating="5" />
                  <SkillRating name="Windows NT (This is as far as I go)" :rating="3" /> -->
                  <LazySkillRating name="macOS" :rating="5" />
                  <LazySkillRating name="Ubuntu" :rating="5" />
                  <LazySkillRating name="Other" :rating="4" />
                  <br>
                  <!--The Stack-->
                  <LazySkillTitle name="Development Stack" class="mb-2 underline" />
                  <LazySkillRating name="Nuxt 3" :rating="5" />
                  <LazySkillRating name="Vue 3" :rating="4" />
                  <LazySkillRating name="Node JS / JavaScript" :rating="5" />
                  <LazySkillRating name="Firebase / GCP" :rating="5" />
                  <LazySkillRating name="Vuetify" :rating="4" />
                  <LazySkillRating name="Tailwind" :rating="4" />
                  <LazySkillRating name="DaisyUI" :rating="4" />
                  <!-- <SkillRating name="THREEjs/Tresjs/Cientos" :rating="3" /> -->
                </div>
                <!-- Applications -->
                <div>
                  <LazySkillTitle name="Applications" class="mb-2 underline" />
                  <LazySkillRating name="Visual Studio Code" :rating="5" />
                  <LazySkillRating name="Microsoft Office Suite" :rating="5" />                  
                  <LazySkillRating name="Git" :rating="5" />
                  <LazySkillRating name="Google Cloud Platform" :rating="5" />
                  <LazySkillRating name="Google Suite (Sheets, Slides, Docs, Scripts, Etc.)" :rating="5" />
                  <LazySkillRating name="Google Analytics & Data Studio" :rating="5" />
                  <LazySkillRating name="Brevo (Transactional & Marketing E-mails)" :rating="5" />
                  <LazySkillRating name="MailChimp (Transactional & Marketing E-mails)" :rating="5" />
                  <LazySkillRating name="Printify (Print-On-Demand Manufacturing)" :rating="5" />
                  <LazySkillRating name="Shippo (Shipping & Fulfillment Administration)" :rating="5" />
                  <LazySkillRating name="ShipStation (Shipping & Fulfillment Administration)" :rating="5" />
                  <LazySkillRating name="Facebook Ads" :rating="4" />
                  <LazySkillRating name="YouTube Creator Studio" :rating="4" />
                  <LazySkillRating name="Godot (Game Development)" :rating="5" />
                </div>
              </div>
              <!-- Progress Bars (Right Half Hopefully)-->
              <br>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <!--Back End-->
                <div>
                  <LazySkillTitle name="Tech Skills" class="mb-2 underline" />
                  <LazySkillProgress name="High-Level Scripting & Coding" :percentage="95" />
                  <LazySkillProgress name="Cloud Architecture" :percentage="95" />
                  <LazySkillProgress name="NoSQL Database Architecture" :percentage="90" />
                  <LazySkillProgress name="Cloud File Storage & Content Distribution" :percentage="80" />
                  <LazySkillProgress name="Authentication & Access Control" :percentage="98" />
                  <LazySkillProgress name="DevOps" :percentage="90" />
                  <LazySkillProgress name="Continuous Integration/Deployment" :percentage="90" />
                  <LazySkillProgress name="Scrum / Agile Project Management" :percentage="90" />
                  <LazySkillProgress name="Analytics & Reporting" :percentage="96" />
                  <LazySkillProgress name="Performance Optimization" :percentage="90" />
                  <LazySkillProgress name="Accessibility Optimization" :percentage="90" />
                  <LazySkillProgress name="Search Engine Optimization" :percentage="85" />
                  <LazySkillProgress name="Domain Management & Administration" :percentage="100" />
                  <LazySkillProgress name="AI/ML" :percentage="30" />
                </div>
              </div>
              <!--Languages-->
              <div>
                <LazySkillTitle name="Languages" class="mb-2 underline" />
                <LazySkillProgress name="JavaScript" :percentage="80" />
                <LazySkillProgress name="SQL" :percentage="65" />
                <LazySkillProgress name="Python" :percentage="75" />
                <LazySkillProgress name="VBA" :percentage="85" />
                <LazySkillProgress name="Go" :percentage="1" />
                <LazySkillProgress name="GDScript" :percentage="65" />
                <LazySkillProgress name="C#" :percentage="30" />
              </div>
            </div>
          </v-tabs-window-item>
        </div>

        <v-tabs-window-item value="professionaltab" class="bg-gray-800 p-4 pb-8">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <!-- Professional Skills -->
            <div>
              <LazySkillTitle name="Professional Skills" />
              <LazySkillProgress
                name="Customer Service & IT"
                :percentage="90"
                :style="text-white"
              />
              <LazySkillProgress
                name="PBX & Call Center Operations"
                :percentage="75"
              />
              <LazySkillProgress
                name="DevOps & Project Management"
                :percentage="85"
              />
              <LazySkillProgress
                name="Administration/Management"
                :percentage="75"
              />
              <LazySkillProgress
                name="Budgeting & Financial Planning"
                :percentage="95"
              />
              <LazySkillProgress
                name="Contract Writing & Review"
                :percentage="75"
              />
            </div>

            <!-- Language Skills -->
            <div>
              <LazySkillTitle name="Language Skills" />
              <LazySkillProgress
                name="English"
                :percentage="100"
              />
              <LazySkillProgress
                name="Spanish"
                :percentage="40"
              />
              <LazySkillProgress
                name="Japanese"
                :percentage="3"
              />
            </div>
          </div>
        </v-tabs-window-item>

        <v-tabs-window-item value="personaltab" class="bg-gray-700 p-4 pb-8">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <!-- Construction Skills -->
            <div>
              <LazySkillTitle name="Construction Skills" />
              <LazySkillProgress
                name="Carpentry"
                :percentage="85"
              />
              <LazySkillProgress
                name="Framing"
                :percentage="85"
              />
              <LazySkillProgress
                name="Drywall"
                :percentage="60"
              />
              <LazySkillProgress
                name="Electrical"
                :percentage="60"
              />
              <LazySkillProgress
                name="Plumbing"
                :percentage="60"
              />
              <LazySkillProgress
                name="Roofing"
                :percentage="60"
              />
              <LazySkillProgress
                name="Flooring"
                :percentage="90"
              />
              <LazySkillProgress
                name="Decks"
                :percentage="60"
              />
              <LazySkillProgress
                name="Outbuildings (Sheds, Coops, Barns, Etc.)"
                :percentage="60"
              />
              <LazySkillProgress
                name="Masonry"
                :percentage="60"
              />
              <LazySkillProgress
                name="Concrete"
                :percentage="60"
              />
              <LazySkillProgress
                name="Painting"
                :percentage="80"
              />
              <LazySkillProgress
                name="Handyman Services"
                :percentage="85"
              />
            </div>

            <!-- Agricultural and Environmental Skills -->
            <div>
              <LazySkillTitle name="Agricultural & Environmental Skills" />
              <LazySkillProgress
                name="Horticulture"
                :percentage="90"
              />
              <LazySkillProgress
                name="Livestock Management"
                :percentage="65"
              />
              <LazySkillProgress
                name="Butchery & Processing"
                :percentage="70"
              />
              <LazySkillProgress
                name="Fishery Management"
                :percentage="10"
              />
              <LazySkillProgress
                name="Power Generation & Storage"
                :percentage="60"
              />
              <!-- <LazySkillProgress
                  name="Wind Power Generation"
                  :percentage="30"
                />
                <SkillProgress
                  name="Solar Power Generation"
                  :percentage="10"
                />
                <SkillProgress
                  name="Hydro Power Generation"
                  :percentage="10"
                />
                <SkillProgress
                  name="Biofuel Power Generation"
                  :percentage="10"
                /> -->
              <LazySkillProgress
                name="Water Management"
                :percentage="35"
              />
            </div>

            <!-- Personal Skills -->
            <!-- <div>
                <SkillTitle name="Ability Scores" />
                <SkillProgress
                  name="Strength"
                  :percentage="70"
                /> <p>{{ 20*.7 }}/20</p>
                <SkillProgress
                  name="Dexterity"
                  :percentage="70"
                /> {{ 20*.7 }}/20
                <SkillProgress
                  name="Constitution"
                  :percentage="80"
                /> {{ 20*.8 }}/20
                <SkillProgress
                  name="Intelligence"
                  :percentage="90"
                /> {{ 20*.9 }}/20
                <SkillProgress
                  name="Wisdom"
                  :percentage="80"
                /> {{ 20*.8 }}/20
    
                <SkillProgress
                  name="Charisma"
                  :percentage="30"
                /> {{ 20*.3 }}/20
              </div> -->
          </div>
        </v-tabs-window-item>
      </v-tabs-window>
    </div>
  </div>
</template>

<script setup>
  const tab = ref('technicaltab')
</script>