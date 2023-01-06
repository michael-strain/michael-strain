<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <v-card>
      <v-card-title>Investor Applicant Screening</v-card-title>
      <v-card-subtitle>
        <p>
          The purpose of this form is to develop a substantive understanding of your ability to invest in our development project.
          You should not fill out this form if you do not have a good understanding of the goals of the development Management Company (Strain Investment Company LLC), and the financial risks and rewards involved in participating in this project.
          You are not guaranteed acceptance by filling out this form.  We will take all applications into consideration, but will only accept those applicants that we deem fit.
          Investing involves risk, including loss of principal. Past performance does not guarantee or indicate future results. Any historical returns, expected returns, or probability projections may not reflect actual future performance. While the data we use from third parties is believed to be reliable, we cannot ensure the accuracy or completeness of data provided by investors or other third parties. Neither Strain Investments Company LLC, nor any of its affiliates provide tax advice and do not represent in any manner that the outcomes described herein will result in any particular tax consequence. Offers to sell, or solicitations of offers to buy, any security can only be made through official offering documents that contain important information about investment objectives, risks, fees and expenses. Prospective investors should consult with a tax or legal adviser before making any investment decision.
          For Regulation A offering(s), no sale may be made to you in this offering if the aggregate purchase price you pay is more than 10% of the greater of your annual income or net worth (excluding your primary residence, as described in Rule 501(a)(5)(i) of Regulation D). Different rules apply to accredited investors and non-natural persons. Before making any representation that your investment does not exceed applicable thresholds, we encourage you to review Rule 251(d)(2)(i)(C) of Regulation A. For general information on investing, we encourage you to refer to www.investor.gov.
        </p>
      </v-card-subtitle>
      <v-form
        ref="applicationform"
        v-model="formVal"
      >
        <v-container>
          <v-row>
            <v-col
              cols="12"
              md="4"
            >
              <v-text-field
                v-model="firstname"
                :rules="nameRules"
                label="First name"
                required
              />
            </v-col>

            <v-col
              cols="12"
              md="4"
            >
              <v-text-field
                v-model="lastname"
                :rules="nameRules"
                label="Last name"
                required
              />
            </v-col>

            <v-col
              cols="12"
              md="4"
            >
              <v-text-field
                v-model="email"
                :rules="emailRules"
                label="E-mail"
                required
              />
            </v-col>

            <v-col
              cols="12"
              md="4"
            >
              <v-text-field
                v-model="phoneNumber"
                :rules="phoneRules"
                label="Phone Number"
                required
              />
            </v-col>

            <v-col
              cols="12"
              md="4"
            >
              <v-text-field
                v-model="currentAddress"
                :rules="currentAddressRules"
                label="Full Address"
                required
              />
            </v-col>

            <v-col
              cols="12"
              md="4"
            >
              <v-text-field
                v-model="capital"
                :rules="capitalRules"
                label="How much capital are you willing to invest?"
                required
              />
            </v-col>

            <!-- <v-col
              cols="12"
              md="4"
            >
              <v-select
                v-model="verifiable"
                :items="ynm"
                :rules="verifiableRules"
                label="Are you a verifiable accredited investor?"
                required
              />
            </v-col> -->

            <v-col
              cols="12"
              md="4"
            >
              <v-text-field
                v-model="annualIncome"
                :rules="annualIncomeRules"
                label="What is your annual income?"
                required
              />
            </v-col>

            <v-col
              cols="12"
              md="4"
            >
              <v-text-field
                v-model="netWorth"
                :rules="netWorthRules"
                label="What is your current net worth?"
                required
              />
            </v-col>

            <!-- <v-col
              cols="12"
              md="4"
            >
              <v-select
                v-model="riskAgreement"
                :items="yn"
                :rules="riskAgreementRules"
                label="Real estate development has risks.  Investing in private placements requires high risk tolerance, low liquidity need, and long-term commitments. You must be able to afford to lose your entire investment.  Do you understand?"
                required
              />
            </v-col> -->

            <v-col
              cols="12"
              md="4"
            >
              <v-text-field
                v-model="experience"
                label="Have you done any real estate investing before?  If so, please tell us about your experience."
              />
            </v-col>

            <v-btn
              :disabled="!formVal"
              color="success"
              class="mr-4"
              @click="validatify"
            >
              Submit
            </v-btn>
          </v-row>
        </v-container>
      </v-form>
    </v-card>
  </div>
</template>

<script setup>
  import { ref } from 'vue'

  const applicationform = ref(null)
  const formVal = ref(false)
  const ynm = ref(['Yes','No','Maybe'])
  // const yn = ref(['Yes','No'])
  const firstname = ref('')
  const lastname = ref('')
  const nameRules = ref([v => !!v || 'Name is required.'])
  const email = ref('')

  const emailRules =  ref([
        v => !!v || 'E-mail is required.',
        v => /.+@.+/.test(v) || 'E-mail must be formVal',
      ])
  const capital = ref('')
  const capitalRules = ref([
        v => !!v || 'We need to at least have a ballpark.',
        v => v >= 1000 || 'We have a minimum investment requirement of $1,000',
      ])
  const phoneNumber = ref('')
  const phoneRules = ref([
        v => !!v || 'Phone number is required.',
      ])
  const currentAddress = ref('')
  const currentAddressRules = ref([
        v => !!v || 'Address is required.', //Doing full address validation through an API could be cool at some point
      ])
  const verifiable = ref('')
  const verifiableRules = ref([
        v => !!v || 'Answer is required.',
        v => !!(v==='Yes'|v==='No'|v==='Maybe') || 'Invalid option selected...somehow',
      ])
  // const riskAgreement = ref('')
  // const riskAgreementRules = ref([
  //     v => !!v || 'Answer is required.',
  //       v => !!(v==='Yes'|v==='No') || 'Invalid option selected...somehow',
  //     ])
  const annualIncome = ref('')
  const annualIncomeRules = ref([
        v => !!v || 'Income information is required in order to validate your candidacy.',
        v => v >= 0 || 'Please enter a valid number.',
      ])
  const netWorth = ref('')
  const netWorthRules = ref([
        v => !!v || 'Income information is required in order to validate your candidacy.',
        v => v >= 0 || 'Please enter a valid number.',
      ])
  const experience = ref('')

  function validatify(){
    console.log("I am gonna return applicationform.value.validate()")
    return applicationform.value.validate()
  }
</script>