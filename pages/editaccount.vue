<template>
  <div class="content">
    <section>
      <h2 class="sectionTitle">
        User Information
      </h2>
      <div class="information w-full shadow">
        <div class="shadow">
          <div class="m-5 flex-col flex gap-5">
            <v-text-field
              id="firstName"
              v-model="firstName"
              type="text"
              label="First Name"
              placeholder="First Name"
              hide-details
              class="shadow textField"
            />

            <v-text-field
              id="lastName"
              v-model="lastName"
              type="text"
              label="Last Name"
              placeholder="Last Name"
              hide-details
              class="shadow textField"
            />
            
            <v-text-field
              id="email"
              v-model="email"
              type="email"
              label="Email Address"
              placeholder="Email Address"
              hide-details
              class="shadow textField"
            />
           
            <v-text-field
              id="phone"
              v-model="phone"
              type="tel"
              label="Phone Number"
              placeholder="Phone Number"
              hide-details
              class="shadow textField"
            />
            <div class="btnRow">
              <button
                class="plainBtn"
              >
                Request Password Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    
    <section>
      <h2 class="sectionTitle">
        Shipping Address
      </h2>
      <div class="information w-full shadow">
        <div class="shadow">
          <AddressForm />
          <div class="btnRow">
            <button
              class="plainBtn"
              @click="useAsBilling=!useAsBilling; updateBilling()"
            >
              <v-icon
                :icon="useAsBilling ? 'mdi-checkbox-outline':'mdi-checkbox-blank-outline'"
                class="text-wrap flex flex-wrap text-wrap"
              />
              Use As Billing Address
            </button>
          </div>
        </div>
      </div>
    </section>

    <section>
      <h2 class="sectionTitle">
        Billing Address
      </h2>
      <div class="information w-full shadow">
        <div class="shadow">
          <!-- <div class="containTitle">
            Edit Your Account
          </div> -->
          <AAddressForm />
          <!-- <div class="btnRow">
            <button
              class="plainBtn"
              @click="signOutUser"
            >
              Save Changes 
            </button>
          </div> -->
        </div>
      </div>
    </section>

    <section>
      <h2 class="sectionTitle">
        Confirm Changes
      </h2>
      <div class="information w-100 shadow">
        <div class="btnRow">
          <button class="plainBtn">
            Delete Account
          </button>
          <button class="plainBtn">
            Discard Changes
          </button>
          <button class="plainBtn">
            Update Information
          </button>
        </div>
      </div>
    </section>
  </div>
  <AFooter />
</template>

