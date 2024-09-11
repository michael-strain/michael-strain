<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="container mx-auto px-4 py-8">
    <h2 class="w-full text-4xl font-bold text-center mb-8">
      Skills
    </h2>

    <div class="">
      <v-tabs
        v-model="tab"
        color="primary"
        class="bg-black"
        grow
      >
        <v-tab
          text="Technical Skills"
          value="option-1"
          class="uppercase text-xl font-semibold text-right"
        />
        <v-tab
          text="Professional Skills"
          value="professionaltab"
          class="uppercase text-xl font-semibold text-right"
        />
        <v-tab
          text="Personal"
          value="personaltab"
          class="uppercase text-xl font-semibold"
        />
      </v-tabs>

      <v-tabs-window v-model="tab">
        <v-tabs-window-item value="option-1">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <!---->
            <div>
              <p class="uppercase text-2xl">
                Operating Systems
              </p>
              <SkillRating
                name="Windows 11"
                :rating="5"
              />
              <SkillRating
                name="Windows 10"
                :rating="5"
              />
              <SkillRating
                name="Windows 8.1"
                :rating="5"
              />
              <SkillRating
                name="Windows 7"
                :rating="5"
              />
              <SkillRating
                name="Windows Vista"
                :rating="5"
              />
              <SkillRating
                name="Windows XP"
                :rating="5"
              />
              <SkillRating
                name="Windows 2000"
                :rating="5"
              />
              <SkillRating
                name="Windows 95"
                :rating="5"
              />
              <SkillRating
                name="Windows NT (This is as far as I go)"
                :rating="3"
              />
              <SkillRating
                name="Haven't used macOS since (Big Sur)"
                :rating="5"
              />
              <SkillRating
                name="Ubuntu (My favorite)"
                :rating="5"
              />
              <SkillRating
                name="All Other Linux Distros"
                :rating="3"
              />
              <SkillRating
                name="Any Other Obscure OS"
                :rating="2"
              />
            </div>
            <!--The Stack-->
            <div>
              <p class="uppercase text-2xl">
                The Stack
              </p>
              <SkillRating
                name="Nuxt 3"
                :rating="5"
              />
              <SkillRating
                name="Vue 3"
                :rating="4"
              />
              <SkillRating
                name="Node JS / JavaScript"
                :rating="4.5"
              />
              <SkillRating
                name="Vuetify"
                :rating="4"
              />
              <SkillRating
                name="Tailwind"
                :rating="4"
              />
              <SkillRating
                name="DaisyUI"
                :rating="4"
              />
              <SkillRating
                name="Firebase"
                :rating="5"
              />
              <SkillRating
                name="THREEjs/Tresjs/Cientos"
                :rating="4"
              />
            </div>
            <!-- Applications -->
            <div>
              <h3 class="uppercase text-2xl font-semibold mb-4">
                Applications
              </h3>
              <div class="space-y-4">
                <SkillRating
                  name="Visual Studio Code"
                  :rating="5"
                />
                <SkillRating
                  name="Git"
                  :rating="5"
                />
                <SkillRating
                  name="Google Cloud Platform"
                  :rating="5"
                />
                <SkillRating
                  name="Google Suite (Sheets, Slides, Docs, Scripts, Etc.)"
                  :rating="5"
                />
                <SkillRating
                  name="Google Analytics & Data Studio"
                  :rating="5"
                />
                <SkillRating
                  name="Brevo (Transactional & Marketing E-mails)"
                  :rating="5"
                />
                <SkillRating
                  name="MailChimp (Transactional & Marketing E-mails)"
                  :rating="4"
                />
                <SkillRating
                  name="Printify (Print-On-Demand Manufacturing)"
                  :rating="5"
                />
                <SkillRating
                  name="Shippo (Shipping & Fulfillment Administration)"
                  :rating="5"
                />
                <SkillRating
                  name="ShipStation (Shipping & Fulfillment Administration)"
                  :rating="5"
                />
                <SkillRating
                  name="Facebook Ads"
                  :rating="4"
                />
                <SkillRating
                  name="YouTube Creator Studio"
                  :rating="4"
                />
                <SkillRating
                  name="Godot (Game Development)"
                  :rating="5"
                />
              </div>
            </div>
            <!--Languages-->
            <div>
              <p class="uppercase text-2xl">
                Languages
              </p>
              <SkillProgress
                name="JavaScript"
                :percentage="90"
              />
              <SkillProgress
                name="SQL"
                :percentage="75"
              />
              <SkillProgress
                name="Python"
                :percentage="85"
              />
              <SkillProgress
                name="VBA"
                :percentage="95"
              />
              <SkillProgress
                name="Go"
                :percentage="5"
              />
              <SkillProgress
                name="GDScript"
                :percentage="85"
              />
            </div>
            <!--Back End-->
            <div>
              <p class="uppercase text-2xl">
                Back End
              </p>
              <SkillProgress
                name="Cloud Architecture"
                :percentage="95"
              />
              <SkillProgress
                name="NoSQL Database Architecture"
                :percentage="90"
              />
              <SkillProgress
                name="Cloud File Storage"
                :percentage="80"
              />
              <SkillProgress
                name="Authentication & Access Control"
                :percentage="99"
              />
              <SkillProgress
                name="Analytics & Reporting"
                :percentage="98"
              />
              <SkillProgress
                name="Photo/Audio/Video Editing & Processing"
                :percentage="55"
              />
            </div>
          </div>
        </v-tabs-window-item>

        <v-tabs-window-item value="professionaltab">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <!-- Professional Skills -->
            <div>
              <p class="uppercase text-2xl">
                Professional Skills
              </p>
              <SkillProgress
                name="Customer Service & IT"
                :percentage="90"
              />
              <SkillProgress
                name="DevOps & Project Management"
                :percentage="85"
              />
              <SkillProgress
                name="Administration/Management"
                :percentage="75"
              />
              <SkillProgress
                name="Budgeting & Financial Planning"
                :percentage="95"
              />
              <SkillProgress
                name="Contract Writing & Review"
                :percentage="75"
              />
            </div>

            <!-- Language Skills -->
            <div>
              <p class="uppercase text-2xl">
                Language Skills
              </p>
              <SkillProgress
                name="Spanish"
                :percentage="35"
              />
              <SkillProgress
                name="Japanese"
                :percentage="3"
              />
            </div>

            <!-- Secret Skills -->
            <div class="hidden">
              <p class="uppercase text-2xl">
                Secret Skills
              </p>
              <p>Well obviously I'm not going to tell just anyone all of my skills!</p><!--Need to make this component like a see more style drop out panel-->
              <p>I've been alive long enough to have picked up a thing or two, and I've learned to keep a dozen cards up my sleeve in case I ever need them.</p>
              <p>Who knows, if you are around me long enough you may unlock one of these, and if you do, do not disclose.</p>
            </div>
          </div>
        </v-tabs-window-item>

        <v-tabs-window-item value="personaltab">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <!-- Construction Skills -->
            <div>
              <p class="uppercase text-2xl">
                Construction Skills
              </p>
              <SkillProgress
                name="Carpentry"
                :percentage="85"
              />
              <SkillProgress
                name="Framing"
                :percentage="85"
              />
              <SkillProgress
                name="Drywall"
                :percentage="60"
              />
              <SkillProgress
                name="Electrical"
                :percentage="60"
              />
              <SkillProgress
                name="Plumbing"
                :percentage="60"
              />
              <SkillProgress
                name="Roofing"
                :percentage="60"
              />
              <SkillProgress
                name="Flooring"
                :percentage="90"
              />
              <SkillProgress
                name="Decks"
                :percentage="60"
              />
              <SkillProgress
                name="Outbuildings"
                :percentage="60"
              />
              <SkillProgress
                name="Masonry"
                :percentage="60"
              />
              <SkillProgress
                name="Concrete"
                :percentage="60"
              />
              <SkillProgress
                name="Painting"
                :percentage="80"
              />
              <SkillProgress
                name="Handyman Services"
                :percentage="85"
              />
            </div>

            <!-- Agricultural and Environmental Skills -->
            <div>
              <p class="uppercase text-2xl">
                Agricultural & Environmental Skills
              </p>
              <SkillProgress
                name="Horticulture"
                :percentage="90"
              />
              <SkillProgress
                name="Livestock Management"
                :percentage="65"
              />
              <SkillProgress
                name="Butchery & Processing"
                :percentage="50"
              />
              <SkillProgress
                name="Fishery Management"
                :percentage="10"
              />
              <SkillProgress
                name="Solar Power Generation"
                :percentage="60"
              />
              <SkillProgress
                name="Wind Power Generation"
                :percentage="30"
              />
              <SkillProgress
                name="Hydro Power Generation"
                :percentage="10"
              />
              <SkillProgress
                name="Biofuel Power Generation"
                :percentage="10"
              />
              <SkillProgress
                name="Cistern Water Collection & Purification"
                :percentage="15"
              />
            </div>

            <!-- Personal Skills -->
            <div>
              <p class="uppercase text-2xl">
                Personal Stats
              </p>
              <SkillProgress
                name="Strength"
                :percentage="70"
              />
              <SkillProgress
                name="Dexterity"
                :percentage="70"
              />
              <SkillProgress
                name="Constitution"
                :percentage="80"
              />
              <SkillProgress
                name="Intelligence"
                :percentage="90"
              />
              <SkillProgress
                name="Wisdom"
                :percentage="80"
              />
   
              <SkillProgress
                name="Charisma"
                :percentage="30"
              />
            </div>

            <!-- Secret Skills -->
            <div class="hidden">
              <p class="uppercase text-2xl">
                Secret Skills
              </p>
              <p>Well obviously I'm not going to tell just anyone all of my skills!</p><!--Need to make this component like a see more style drop out panel-->
              <p>I've been alive long enough to have picked up a thing or two, and I've learned to keep a dozen cards up my sleeve in case I ever need them.</p>
              <p>Who knows, if you are around me long enough you may unlock one of these, and if you do, do not disclose.</p>
            </div>
          </div>
        </v-tabs-window-item>
      </v-tabs-window>
    </div>
  </div>
</template>

<script>
  export default {
    data: () => ({
      tab: 'personaltab',
    }),
  }
</script>