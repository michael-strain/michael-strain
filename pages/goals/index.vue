<template>
  <v-container>
    <v-card-title>What Motivates Me?</v-card-title>
    The Short Version:<br>
    Long-Term Success for Myself & Posterity (and all the other normal human stuff, namely money)<br>
    <br>
    The Long Version:<br>
    <v-btn @click="seemore=!seemore">I Like Words</v-btn>
    <v-card-text v-if="seemore">
      My biggest motivator is this:
      I want to ensure that future generations have the best chance at continued survival for the human race.
      As a parent, I want my child to grow up, live a happy life, and have the same opportunity for himself someday.
      Don't we all want that?   I think we do, but our immediate needs can often take precedence over what many seem to believe to be a harmless lifestyle.
      Well, to me, the best way to approach the problem as an individual, is to make the immediate changes necessary to live more sustainabily - but furthermore, it is imperative to plan one's life around these goals as well.
      Many of us continue devoting hundreds upon hundreds of hours into careers that DON'T EVEN PRODUCE ANY REAL VALUE FOR ANYONE.
      When a human life is only so long, and all the time knowledge and experience that goes into raising a human to be workforce capable (not to mention resource requirements), imagine it all to be wasted on a life as an insurance agent.  *shudder*
      We all need money to live, and we all need jobs to make money, sure, but hear me out.
      What if we just needed less money to live?  Do more with less.  Be happy with less.  Discern luxury from neccessity.  SPEND OUR TIME - AND ESPECIALLY OUR CAREERS - WORKING ON THINGS THAT MATTER.  Reduce, Reuse, Recycle.  Really.
      Since coming back to America after living abroad in Central America, I am keenly aware of the so-called "trash" that builds up in and around our dumpsters.  Hell, I jump in and grab stuff regularly.
      So, although money is a motivator, my earnings will be used for the long-term and widespread benefit of my community rather than for satiating individual greed.  People shouldn't devote careers to getting ahead, only to spend it all on sports cars and empty mansions.
      Make good decisions.  Be good people.  Rant over I guess... for now.
    </v-card-text>

    <v-card-title>Current Goals</v-card-title>
    <v-list lines="two" v-model:opened="open">
      <v-list-group value="Family">
        <template v-slot:activator="{ props }">
          <v-list-item v-bind="props" title="Raise Munchkins" subtitle="Sustain and grow a happy, healthy family.">
            <template v-slot:prepend>
              <v-avatar color="white">
                <v-icon color="green" icon="mdi-loading" /> <!--How do i animate this?-->
              </v-avatar>
            </template>
            8%
          </v-list-item>
        </template>
      </v-list-group>
        
      <v-list-group value="Career">
        <template v-slot:activator="{ props }">
          <v-list-item v-bind="props" title="Build a next gen ecommerce platform">
            <template v-slot:prepend>
            <v-avatar color="white">
                <v-icon color="green" icon="mdi-loading" /> <!--How do i animate this?-->
              </v-avatar>
            </template>
            80%
          </v-list-item>
          <v-list-item v-bind="props" title="Launch an automated print-on-demand store on the aforementioned ecom app">
            <template v-slot:prepend>
              <v-avatar color="white">
                <v-icon color="blue" icon="mdi-square-outline" /> <!--How do i animate this?-->
              </v-avatar>
            </template>
          </v-list-item>
          <v-list-item v-bind="props" title="Reach over $1M in Sales within 1st year of launch">
            <template v-slot:prepend>
            <v-avatar color="white">
                <v-icon color="green" icon="mdi-loading" /> <!--How do i animate this?-->
              </v-avatar>
            </template>
            0%
          </v-list-item>
          <v-list-item class="hidden" v-bind="props" title="Lead on a bunch of aggregators/early-stage investors to gain interest from VC Firms, lead them on too until I get a huge valuation, go public, sell all my shares and fuckin run faster than Bezos.">
            <template v-slot:prepend>
              <v-avatar color="white">
                <v-icon color="blue" icon="mdi-square-outline" /> <!--How do i animate this?-->
              </v-avatar>
            </template>
          </v-list-item>
        </template>
      </v-list-group>
    </v-list>

    <ul>Develop a self-sufficient community somewhere tropical</ul>
    <ul>Personally promote sustainable growth internationally</ul>
    <ul>Establish the world's most biodiverse botanical gardens somewhere in the Brazilian rainforest, utilize it to expand botany, medicine, science, and propagate the survival especially of the most at-risk species.</ul>
    <ul>Develop a recognized sovereign nation (a geniocratic meritocracy) and become a tax haven, explicitly constituting that all ...<v-btn @click="expand=!expand">Read More</v-btn></ul>
      <ul :class="expand?'':'hidden'">national funds are to be used entirely for the benefit and protection of ALL it's citizens, to be used AT THEIR OWN discretion in accordance with a general tax budget as allocated by each taxpayer's own free choice.  And for fuck's sake, it should go without saying that, if elected officials and administrators are to exist, they should never have the power to veto the will of the majority, their positions should be salaried commensurate to the area's median wage, anyone found guilty of accepting bribes or "lobbyists" should be executed, and there should be reasonable term limits as to allow individual career growth and success while inhibiting century long position lock-ups.  All companies must prove sustainable operations, and all public works must ensure minimal environmental impact.  Any company found guilty of charging unfair prices, cutting corners to get ahead, hostility against competition, etc. is to be immediately dissolved, and any owners/directors/managers or otherwise liable guilty parties are to be relieved of the entirety of their holdings, a small portion of which is to be kept in a fund to provide a proportionate ammount of food and shelter equal to the calculated median cost for such expenses in the area for a period of no greater than 180 days.  I've got lots of other thoughts on the subject, but noone ever seems to want to hear it, so for now, I'll chill, but just wait and see.  In the age of possibility, and as a citizen of the land of the allegedly free, as long as I don't die prematurely, I'm going to make it happen faster than Naruto became Hokage baby.  Believe it.</ul>
    <ul class="hidden">Recruit a large pool of vigilante techies and organize takedowns of known corrupt organizations and officials world-wide, while simultaneously running a prestigious school for the up-and-comers</ul>
    <ul>Amass a sick collection of industrial equipment for literally all purposes (chemistry, fabrication, construction, agriculture, mining, refining, seriously everything)</ul>
    <ul>Hire an army of engineers to work un upgraded versions of all the industrial equipment (better, faster, stronger, smaller, optimize it baby!)</ul>
    <ul>Attempt to develop the infrastructure of an autonomous, self-expanding Mars colony.</ul>
  </v-container>
</template>

<script setup>
const expand = ref(false)
const seemore = ref(false)
const open = ref(['Family'])
</script>