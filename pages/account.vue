<!-- eslint-disable vue/multi-word-component-names -->

<!--To Do
  a. Why are section headers not styling.
  a. Go to shop button style.
  h. Autofill user information.
  m. Automatic redirect to login page with if/else.
  m. Show/hide order history.
-->

<template>
  <div class="content">
    <section>
      <h2 class="sectionTitle">
        Account Information
      </h2>
      <div class="information shadow w-100">
        <p>
          Name: Name Placeholder
        </p>
        <p>Email: mymessage@email.com</p>
        <p>Phone Number: 258-8520-8520</p>
        <p>Shipping Address: 258 First Street, City, State, 25852</p>
        <p>Billing Address: 654 Second Street, City, State, 74125</p>
        <div class="btnRow">
          <NuxtLink to="/login">
            <button class="plainBtn">
              Edit Account
            </button>
          </NuxtLink>
          <button
            class="plainBtn"
            @click="testdialog = true"
          >
            Sign Out
          </button>
          
          <v-dialog
            v-model="testdialog"
          >
            <div class="dialogContain">
              <div class="containTitle">
                A Dialog Pop Up
              </div>
              <div class="">
                <p>
                  Are you sure you would like to sign out of your account?
                </p>
              </div>
              <div class="btnRow">
                <button
                  class="plainBtn"
                  @click="testdialog = false"
                >
                  No, Stay Logged In. 
                </button>
                <button
                  class="plainBtn"
                  @click="signOutUser"
                >
                  Yes, Log Out. 
                </button>
              </div>
            </div>
          </v-dialog>
        </div>
      </div>
    </section>
    <section>
      <h2 class="sectionTitle">
        Previous Orders
      </h2>
      <div class="information w-100">
        <p>There is no previous order history to report. Let's change that.</p>
        <div class="btnRow">
          <button class="plainBtn">
            Go to Shop
          </button>
        </div>
      </div>
    </section>

    <!--Just gonna put this here, sorry I know it might not be pretty-->
    <div
      class="flex justify-center flex-wrap"
    >
      <div
        class="p-2 text-white elevation-10 rounded-20px bg-gradient-to-b from-gray-400 to-gray-500 hover:from-yellow-200 hover:via-orange-300 hover:to-red-400"
      >
        <NuxtLink to="/shop/orders">
          <v-btn
            variant="text"
            class="w-full"
          >
            Go to Orders
          </v-btn>
        </NuxtLink>
      </div>
    </div>

    <v-select 
      v-model="userCountry"
      :items="countryNames"
      @update:model-value="setUserCountry"
    />
  </div>
</template>


<script>
  export default {
    data() {
        return {
            peelog: false,
            testdialog: false,
            dialog: false,
        };
    },
}
</script>

<style>
.textField {
  outline: auto;
  outline-color: lightgray;
}

</style>


<!-- <NuxtLink
          v-if="loadAdminLink"
          to="/admin"
        >
          <p
            class="text-center pt-3px bg-red text-white"
          >
            Link for Admins
          </p>
        </NuxtLink> -->
      <!-- <NuxtLink to="/braintree">
        <h6
          class="text-black justify-center text-center align-center font-bold text-xl mb-10"
          :style="{fontFamily: 'Roboto Slab', textShadow: '1px 1px rgba(52, 211, 153)'}"
        >
          Braintree
        </h6>
      </NuxtLink> -->

       <!-- <v-list lines="one">
          <v-list-item
            :key="auth.currentUser.uid"
            :title="auth.currentUser.displayName"
            :subtitle="auth.currentUser.email"
            :prepend-avatar="userPhotoUrl"
            lazy-prepend-avatar="/img/MLogo.png"
          />
        </v-list> -->

        <!-- <v-card-text>{{ auth.currentUser }}</v-card-text> -->
        <!-- <v-btn @click="signOutUser">
            Sign Out
          </v-btn> -->

          <!--Old Button-->
          <!-- @click="isActive.value = false" -->





          <!--Old Code-->
          <!-- <div class="bgImg h-100">
            <div class="bgImgCont">
              <div class="p-3rem">
                <NuxtLink to="/account">
                  <p
                    class="pageTitle"
                  > 
                    User Account
                  </p>
                </NuxtLink>
              </div>
              <div
                v-if="auth.currentUser || firebaseUser"
                class="shadow plainContainer p-2rem max-w-50rem rounded-25px"
              >
                <div class="flex space-x-1.5rem <sm:(flex-wrap space-x-0 space-y-1.5rem)">
                  <div class="flex align-center relative bg-green w-max-1/3 <sm:(w-full)">
                    <img
                      src="/img/MLogo.png"
                    >
                    <div class="absolute bottom-2 left-2">
                      <v-btn
                        icon="mdi-account-edit"
                        color="white"
                      />
                    </div>
                  </div>
                  <div class="mx-auto text-lg text-center gap-3 flex flex-column justify-center">
                    <p class="font-bold text-1.5rem">
                      Name Placeholder
                    </p>
                    <p>mymessage@email.com</p>
                    <p>258 First Street, City, State, 25852</p>
                    <p>258-8520-8520</p>
                  </div>
                </div>
                <p class="my-1rem">
                  I need to add previous orders, password reset, display name, profile picture upload, account delete, and other settings as they become applicable.
                </p>
                <div class="btnRow">  
                  <button
                    class="colorBtn"
                    @click="dialog = true"
                  >
                    Edit Account
                  </button>
                  <v-dialog
                    v-model="dialog"
                  />
                  <button
                    class="colorBtn"
                    @click="testdialog = true"
                  >
                    Sign Out
                  </button>
                  <v-dialog
                    v-model="testdialog"
                  >
                    <div class="dialogContain">
                      <div class="containTitle">
                        Sign Out
                      </div>
                      <div class="containText">
                        <p>
                          Are you sure you would like to sign out of your account?
                        </p>
                      </div>
                      <div class="btnRow">
                        <button
                          class="plainBtn"
                          @click="testdialog = false"
                        >
                          No, Stay Logged In. 
                        </button>
                        <button
                          class="plainBtn"
                          @click="signOutUser"
                        >
                          Yes, Log Out. 
                        </button>
                      </div>
                    </div>
                  </v-dialog>
                </div>
              </div> -->