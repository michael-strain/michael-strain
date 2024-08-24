<template>
  <div class="">
    <h2 class="w-full text-4xl font-bold text-center">
      Professional Experience
    </h2>
    <br>
    <v-timeline
      side="end"
      align="start"
    >
      <v-timeline-item
        dot-color="primary"
        size="small"
      >
        <template #opposite>
          <p class="uppercase text-gray-500">
            2021 - Present
          </p>
        </template>
        <div class="">
          <p class="font-bold text-2xl">
            President
          </p>
          <p class="text-gray-500 pb-2">
            Strain Investment Company
          </p>
          <p class="text-justify">This is an umbrella, under which I’ve done real estate development and construction management, property management (including the ownership and operation of a small landscaping company), manufacturing and fulfillment, ecommerce, and full-stack latest-gen web development.</p>
        </div>
        <br>
      </v-timeline-item>
      <v-timeline-item
        dot-color="primary"
        size="small"
      >
        <template #opposite>
          <p class="uppercase text-gray-500">
            2018 - April 2020
          </p>
        </template>
        <div class="">
          <p class="font-bold text-2xl">
            Financial Reporting Analyst and Developer
          </p>
          <p class="text-gray-500 pb-2">
            Aramark
          </p>
          <p class="text-justify">This Fortune 500 company really opened my eyes to how inefficient big companies can be.  I saved them over $3M annually within my first year of employment by automating the majority of my responsibilities, as well as the tasks of my own, and numerous other departments including billing, collections, analytics, etc. </p>
        </div>
        <br>
      </v-timeline-item>
      <v-timeline-item
        dot-color="primary"
        size="small"
      >
        <template #opposite>
          <p class="uppercase text-gray-500">
            2014 - 2020
          </p>
        </template>
        <div class="">
          <p class="font-bold text-2xl">
            Sr Technical Administrator
          </p>
          <p class="text-gray-500 pb-2">
            MI6 / Utah Gun Exchange
          </p>
          <p class="text-justify">This is where I mastered data analytics and reporting, software and web development, project management, marketing, warehouse operations, inventory management, strategic financial planning and risk management, public relations, social media management, internal and external call center operations and management, and much more.  I was responsible for a team of 3 employees, and reported directly to the owners of the company.  At the peak of my time here, we managed to bring in $2M in revenue per month selling nutraceuticals.</p>
        </div>
        <br>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>
