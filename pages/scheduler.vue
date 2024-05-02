<template>
  <v-container>
    <h1>Bid for Michael's Available Time</h1>
    <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FDenver&bgcolor=%23ffffff&showTitle=0&mode=WEEK&showTabs=0&showPrint=0&showNav=0&showCalendars=0&src=ZjU0ZmRkZDU1OTNjMjY4YmViZTZjM2RmYTE5MDk5Y2Q4ZmZiMDQ0NThmNmFiMjNjYzFlNTAxN2MwYjg4MThiN0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23D50000" style="border-width:0" frameborder="0" scrolling="no"></iframe>
    <!--TODO Probably need to actually not embed the calendar but build our own, where users can click on 1 hr time slots for upcoming days and be served with bidding info -->
    <!-- This custom calendar does probably need to be integrated with google calendar somehow tho, or we can keep our integration stuff serverside for generating the available time slots... -->
  </v-container>
</template>