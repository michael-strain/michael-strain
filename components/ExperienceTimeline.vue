<template>
  <div class="pt-5">
    <h2 class="w-full text-4xl font-bold text-center">
      Professional Experience
    </h2>
    <br>
    
    <v-timeline
      side="end"
      align="start"
      class="sm:m-0 ml-[-35px]"
    >
      <v-timeline-item
        dot-color="primary"
        size="small"
      >
        <template
          v-if="$device.isDesktopOrTablet"
          #opposite
        >
          <p class="uppercase text-gray-500">
            2020 - 2024
          </p>
        </template>
        <div class="">
          <p class="font-bold text-2xl">
            President
          </p>
          <p class="text-gray-500">
            Strain Investment Company LLC
          </p>
          <p 
            v-if="!$device.isDesktopOrTablet"
            class="uppercase text-gray-500"
          >
            2020 - Present
          </p>
          <p class="md:text-justify pt-2">
            • Oversee a diverse portfolio that includes real estate development, renovations, construction management, property management, e-commerce, and full-stack web development.<br>
            • Manage foreign and domestic subsidiary companies.
          </p>
          <!-- <ul class="md:text-justify pt-2">
            <li>Oversee a diverse portfolio that includes real estate development, renovations, construction management, property management, e-commerce, and full-stack web development.</li>
            <li>Manage foreign and domestic subsidiary companies.</li>
          </ul> -->
        </div>
        <br>
      </v-timeline-item>
      <v-timeline-item
        dot-color="primary"
        size="small"
      >
        <template 
          v-if="$device.isDesktopOrTablet"
          #opposite
        >
          <p class="uppercase text-gray-500">
            2018 - 2020
          </p>
        </template>
        <div class="">
          <p class="font-bold text-2xl">
            Financial Reporting Analyst and Developer
          </p>
          <p class="text-gray-500">
            Aramark
          </p>
          <p 
            v-if="!$device.isDesktopOrTablet"
            class="uppercase text-gray-500"
          >
            2018 - 2022
          </p>
          <p class="md:text-justify pt-2">
            • Automated key processes to improve operational efficiency, resulting in an estimated $1M in annual savings.<br>
            • Streamlined billing, collections, and analytics tasks, enhancing departmental performance and reducing manual workloads.<br>
            • Recognized with multiple awards and certificates for outstanding contributions.
          </p>
        </div>
        <br>
      </v-timeline-item>
      <v-timeline-item
        dot-color="primary"
        size="small"
      >
        <template 
          v-if="$device.isDesktopOrTablet"
          #opposite
        >
          <p class="uppercase text-gray-500">
            2014 - 2018
          </p>
        </template>
        <div class="">
          <p class="font-bold text-2xl">
            Sr. Technical Administrator
          </p>
          <p class="text-gray-500">
            MI6 & Utah Gun Exchange
          </p>
          <p 
            v-if="!$device.isDesktopOrTablet"
            class="uppercase text-gray-500"
          >
            2014 - 2018
          </p>
          <p class="md:text-justify pt-2">
            • Led a team in data analytics, technical operations and administration, project management, and strategic financial planning.<br>
            • Contributed to achieving $2M in monthly revenue from nutraceutical sales through effective team management and project execution.<br>
            • Assisted in event planning, marketing, and operations, and participated in professional events, gaining media recognition.
          </p>
        </div>
        <br>
      </v-timeline-item>

      <v-timeline-item
        dot-color="primary"
        size="small"
      >
        <template 
          v-if="$device.isDesktopOrTablet"
          #opposite
        >
          <p class="uppercase text-gray-500">
            2012 - 2016
          </p>
        </template>
        <div class="">
          <p class="font-bold text-2xl">
            E4 - Paralegal Specialist
          </p>
          <p class="text-gray-500">
            US Army Reserves
          </p>
          <p 
            v-if="!$device.isDesktopOrTablet"
            class="uppercase text-gray-500"
          >
            2012 - 2016
          </p>
          <p class="md:text-justify pt-2">
            • Developed HR and organizational skills while managing legal documentation and procedures.<br>
            • Held Secret Security Clearance, demonstrating reliability and trustworthiness.<br>
            • Built a strong foundation in discipline and teamwork through basic training and military service.<br>
          </p>
        </div>
        <br>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>

