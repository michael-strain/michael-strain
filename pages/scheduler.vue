<template>
  <v-container>
    <h1>Bid for Michael's Available Time</h1>
    <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FDenver&bgcolor=%23ffffff&showTitle=0&mode=WEEK&showTabs=0&showPrint=0&showNav=0&showCalendars=0&src=ZjU0ZmRkZDU1OTNjMjY4YmViZTZjM2RmYTE5MDk5Y2Q4ZmZiMDQ0NThmNmFiMjNjYzFlNTAxN2MwYjg4MThiN0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23D50000" style="border-width:0" frameborder="0" scrolling="no"></iframe>
    <!--TODO Probably need to actually not embed the calendar but build our own, where users can click on 1 hr time slots for upcoming days and be served with bidding info -->
    <!-- This custom calendar does probably need to be integrated with google calendar somehow tho, or we can keep our integration stuff serverside for generating the available time slots... -->
  </v-container>
</template>

<script setup>
//Do we need an openSlot lookup type thing?
//I think we should useCollection on all the active auctions
// import { useCollection } from 'vuefire'
// const auctions = useCollection('auctions')

const submitIntent = async () => {
  //Need stripe stuff right?
}

const placeBid = async (auction, bid) => {
  //Probably need to use an api call to go to the backend so we can use the append function thingy
  //Firestore rules and input validation should ensure a greater bid than prior by at least incrementAmt
  //This should actually put an authorization hold on the card until the auction end date, at which time the card will be charged (and if fail, fallback to next bidder?)
  //This should append to the bidHistory thing too
}
</script>