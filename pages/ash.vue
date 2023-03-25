<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="flex justify-center bgimg">
    <div class="content box">
      <div class="">
        <div class="pagetitle">
          LSDope
        </div>
      </div>
      <div class="justify-center">
        <div>
          <section class="">
            <h2 class="newtext">
              Create New Account
            </h2>
            <ANewAccount />
          </section>
          <section class="">
            <h2 class="">
              Colors :D
            </h2>
            <div class="information w-full">
              <div
                v-for="c in Object.keys(vcolors)"
                :key="c"
                :class="'bg-' + c"
              >
                <p>{{ c }}</p>
              </div>
            </div>

            <div
              v-for="c in Object.keys(vcolors)"
              :key="c"
              :class="'bg-' + c"
            >
              <p>{{ c }}</p>
            </div>
          </section>
          <section>
            <h2>
              De Finibus Bonorum et Malorum
            </h2>
            <div class="information w-full">
              <p>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.
              </p>
              <p>
                Limilique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.
              </p>
              <p>Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. </p><p>
                Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
  <TheFooter />
</template>

<script setup>
  //Need to setup vcolors by pulling them from the current vuetify theme object's colors object
  //Do I need to import the vuetify file here?
  //how do I get the name of the active vuetify theme object so I can pull it's colors object?
  import { ref } from 'vue'
  import "@/assets/global.css"
  import { useTheme } from 'vuetify'

  const theme = useTheme()

  //theme.global.name.value = theme.global.current.value

  
  const vcolors = theme.global.current.value.colors
  console.log(Object.keys(vcolors))
  // vcolors = theme.value.colors

// Rain JS Test 


</script>

<style>

.specialtext {
  /* position: absolute;
  left: 50%;
  top: 50%; */
  transform: translate(-50%, -50%);
 font-size: 150px;
  font-family: Righteous;
  animation: shift 5s linear infinite;
}

@keyframes shift {
  0% { x: 0; }
  100% { x: -2000; }
}
</style>