
//https://github.com/jurassicjs/nuxt-scheduler

// A task will run every day at 5PM MST to capture the charge of the winning bidders of the following day's available time slots.

// Google Calendar Integration will be responsible for determining what slots are available for bidding.
// Not sure how exactly I should manage that though... I think I should create calendar events for each slot that doesn't conflict with an existing calendar event...?
// No slots should ever be available on weekends (or maybe the base rate could be double on weekends or after hours or something).

// Bidding can only occur at a max of 5 days in advance due to credit card network limitations.

// A task will run every morning at 4am to query google calendar and build available time slots
// (that don't already exist) up to 5 days out.

// Starting bid amount should be set to whatever I want my base hourly rate to be... $20? Variable?

// Need an admin method of cancelling an auction prior to charge.

// If no bids are placed on a time slot, at 5PM the day prior, no charge should be attempted...duh.

// On bid placement, stripe will hold funds
// https://docs.stripe.com/payments/place-a-hold-on-a-payment-method

// On auction end, the winner will be charged.
// https://docs.stripe.com/payments/finalize-payments-on-the-server

// If the charge succeeds, all other held-funds for this auction will be cancelled, and the winner will be notified of their victory via email.
// https://docs.stripe.com/refunds

// In the victory e-mail, the winner will be asked to provide their contact info, an overview of what they want to accomplish with their hour, and any supporting attachments.
// Their responses should be used to generate an updated event in the Google Calendar that they are invited to (but details should not be publicly visible)
// Any illegal or unethical requests will not be complied with, refunded, or cancelled at my sole discretion.
// Failure of the winner to attend on time will not be refunded.
// Failure of me to attend will be rescheduled if possible, or otherwise refunded.

// If a charge is not successfully captured for a winning bid, we should fallback to the runner-up bid.

export default defineEventHandler(async(event)=>{
  return
})