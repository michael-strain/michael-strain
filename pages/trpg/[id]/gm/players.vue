<template>
  <v-container fluid class="pa-0">
    <!-- Header Block Component -->
    <v-card class="pa-4 mb-6 elevation-2">
      <v-card-title class="text-h5 font-weight-bold px-0 d-flex align-center">
        🛡️ Manage Campaign Players
      </v-card-title>
      <v-card-text class="text-subtitle-1 text-grey-darken-1 px-0 pb-2">
        Invite, accept, and manage players for this campaign, and view their full sheet analytics natively.
      </v-card-text>
      
      <v-card-actions class="px-0">
        <v-btn color="primary" variant="outlined" @click="editPlayers = !editPlayers">
          {{ editPlayers ? 'View Mode' : 'Edit Mode' }}
        </v-btn>
        
        <v-dialog max-width="500">
          <template v-slot:activator="{ props: activatorProps }">
            <v-btn
              v-bind="activatorProps"
              color="surface-variant"
              text="Add New Player"
              variant="flat"
              class="ml-2"
            ></v-btn>
          </template>

          <template v-slot:default="{ isActive }">
            <v-card title="Invite A Player">
              <v-text-field
                class="ma-4"
                v-model="playerEmail"
                :rules="[rules.required, rules.email]"
                label="E-mail"
                variant="outlined"
              ></v-text-field>

              <v-card-actions class="pa-4">
                <v-spacer></v-spacer>
                <v-btn text="Send" color="primary" @click="sendPlayerInvitation"></v-btn>
                <v-btn text="Close Dialog" variant="text" @click="isActive.value = false"></v-btn>
              </v-card-actions>
            </v-card>
          </template>
        </v-dialog>
      </v-card-actions>
    </v-card>

    <!-- Empty State Indicator -->
    <v-row v-if="playersList.length === 0">
      <v-col cols="12" class="text-center py-8 text-grey-darken-1">
        <v-icon size="64" color="grey-lighten-1" class="mb-2">mdi-account-group-outline</v-icon>
        <p class="text-h6">No active players found in this campaign.</p>
      </v-col>
    </v-row>

    <!-- Responsive Players Cards Grid -->
    <v-row v-else>
      <v-col 
        cols="12" 
        md="6" 
        xl="4" 
        v-for="player in playersList" 
        :key="player.id"
      >
        <v-card class="elevation-3 border-thin fill-height d-flex flex-column">
          <!-- Card Header Banner -->
          <v-card-item class="text-white py-3" :style="'background-color: '+player.color+';'">
            <v-card-title class="text-h6 font-weight-bold d-flex justify-space-between align-center">
              <span>{{ player.name || 'Unnamed Adventurer' }}</span>
              
              <!-- EDIT LEVEL vs DISPLAY LEVEL -->

              <div v-if="editPlayers" style="max-width: 100px;">
                <!--Need to make this a number field that can only be set equal to or higher than the initial player level value, then need to update the player health, skillRanks, and abilityScores values in accordance with the new level so the player can actually level up their character-->
                <v-text-field
                  v-model.number="campaignData.players[player.id].level"
                  type="number"
                  label="Level"
                  density="compact"
                  variant="solo"
                  hide-details
                  flat
                  bg-color="amber-accent-1"
                  class="text-black text-caption font-weight-bold"
                ></v-text-field>
              </div>
              <v-chip v-else size="small" color="amber-accent-3" variant="flat" class="text-black font-weight-bold">
                Lvl {{ player.level || 1 }}
              </v-chip>

            </v-card-title>
            <v-card-subtitle class="text-grey-lighten-2 pt-1">
              Race: {{ player.race || 'Unknown' }} &bull; Size: {{ player.size || 'Medium' }} &bull; UID: {{ player.id }}...
            </v-card-subtitle>
          </v-card-item>

          <!-- Core Stat Metadata Strip -->
          <v-card-text class="py-3 bg-grey-lighten-4 border-bottom">
            <v-row dense text-center>
              <!-- HEALTH EDITING -->
              <v-col cols="4">
                <div class="text-caption text-grey-darken-1 text-uppercase font-weight-bold mb-1">Health</div>
                <v-text-field
                  v-if="editPlayers"
                  v-model.number="campaignData.players[player.id].health"
                  type="number"
                  density="compact"
                  variant="outlined"
                  hide-details
                  bg-color="white"
                ></v-text-field>
                <div v-else class="text-body-1 font-weight-black text-red-darken-2">❤️ {{ player.health || 0 }}</div>
              </v-col>

              <!-- MOVEMENT EDITING -->
              <v-col cols="4">
                <div class="text-caption text-grey-darken-1 text-uppercase font-weight-bold mb-1">Movement</div>
                <v-text-field
                  v-if="editPlayers"
                  v-model.number="campaignData.players[player.id].movement"
                  type="number"
                  density="compact"
                  variant="outlined"
                  hide-details
                  bg-color="white"
                  suffix="ft"
                ></v-text-field>
                <div v-else class="text-body-1 font-weight-black text-blue-darken-2">👣 {{ player.movement*5 || 0 }}ft</div>
              </v-col>
              
              <!-- ABILITY POINTS EDITING -->
              <v-col cols="4">
                <div class="text-caption text-grey-darken-1 text-uppercase font-weight-bold mb-1">Ability Pts</div>
                <v-text-field
                  v-if="editPlayers"
                  v-model.number="campaignData.players[player.id].abilityPoints"
                  type="number"
                  density="compact"
                  variant="outlined"
                  hide-details
                  bg-color="white"
                ></v-text-field>
                <div v-else class="text-body-1 font-weight-black text-purple-darken-2">⚡ {{ player.abilityPoints || 0 }}</div>
              </v-col>
            </v-row>
          </v-card-text>

          <!-- Biography / Description Summary Block -->
          <v-card-text class="py-3 text-body-2 text-grey-darken-3 italicized-desc flex-grow-1">
            <strong>Description:</strong> {{ player.description || 'No character background notes provided.' }}
          </v-card-text>

          <v-divider></v-divider>

          <!-- Nested Expandable Sections Submenus -->
          <v-expansion-panels variant="accordion" class="custom-expansion-group">
            
            <!-- 1. SKILLS SECTION -->
            <v-expansion-panel title="📊 Learned Character Skills" eager>
              <v-expansion-panel-text class="pa-0">
                <div v-if="!player.skills || player.skills.length === 0" class="text-caption text-grey pa-2">
                  No explicit skills found.
                </div>
                <v-list v-else lines="two" density="compact" class="pa-0 bg-transparent">
                  <v-list-item v-for="(skill, sIdx) in player.skills" :key="sIdx" class="px-2 border-bottom-dashed">
                    <template v-slot:title>
                      <div class="d-flex justify-space-between align-center font-weight-bold text-subtitle-2 text-blue-grey-darken-3">
                        <span>{{ skill.name }}</span>

                        <!-- SKILL RANK EDITING -->
                        <div v-if="editPlayers" style="max-width: 90px;" class="my-1">
                          <v-text-field
                            v-model.number="campaignData.players[player.id].skills[sIdx].rank"
                            type="number"
                            label="Rank"
                            density="compact"
                            variant="outlined"
                            hide-details
                          ></v-text-field>
                        </div>
                        <v-chip v-else size="x-small" color="blue-grey-lighten-4" variant="flat" class="font-weight-bold">
                          Rank {{ skill.rank || 0 }}
                        </v-chip>
                      </div>
                    </template>
                    <template v-slot:subtitle>
                      <div class="text-caption mt-1">
                        <span class="font-weight-bold text-primary text-uppercase font-mono">[{{ skill.abilityScore }}]</span> — 
                        <span class="text-grey-darken-2">{{ skill.description }}</span>
                      </div>
                    </template>
                  </v-list-item>
                </v-list>
              </v-expansion-panel-text>
            </v-expansion-panel>

            <!-- 2. EQUIPMENT SECTION -->
            <v-expansion-panel title="🛡️ Active Wardrobe & Equipment" eager>
              <v-expansion-panel-text>
                <!-- JSON INTERACTIVE CODE EDITING -->
                <v-textarea
                  v-if="editPlayers"
                  :model-value="formatDataValue(campaignData.players[player.id].equipment)"
                  @update:model-value="val => updateJSONField(player.id, 'equipment', val)"
                  variant="outlined"
                  font-family="monospace"
                  auto-grow
                  rows="4"
                  class="font-mono-input"
                ></v-textarea>
                <pre v-else class="formatted-json-view">{{ formatDataValue(player.equipment) }}</pre>
              </v-expansion-panel-text>
            </v-expansion-panel>

            <!-- 3. INVENTORY SECTION -->
            <v-expansion-panel title="🎒 Main Vault & Carrying Inventory" eager>
              <v-expansion-panel-text>
                <v-textarea
                  v-if="editPlayers"
                  :model-value="formatDataValue(campaignData.players[player.id].inventory)"
                  @update:model-value="val => updateJSONField(player.id, 'inventory', val)"
                  variant="outlined"
                  auto-grow
                  rows="4"
                  class="font-mono-input"
                ></v-textarea>
                <pre v-else class="formatted-json-view">{{ formatDataValue(player.inventory) }}</pre>
              </v-expansion-panel-text>
            </v-expansion-panel>

            <!-- 4. SPELLS SECTION -->
            <!--  Need to ensure player has the appropriate cast level for any spells added, should also accept checkbox list input from the list of available spells in the campaignData.value.masterSpellbook -->
            <v-expansion-panel title="🪄 Prepared Arcane Spells Matrix" eager>
              <v-expansion-panel-text>
                <v-textarea
                  v-if="editPlayers"
                  :model-value="formatDataValue(campaignData.players[player.id].spells)"
                  @update:model-value="val => updateJSONField(player.id, 'spells', val)"
                  variant="outlined"
                  auto-grow
                  rows="4"
                  class="font-mono-input"
                ></v-textarea>
                <pre v-else class="formatted-json-view">{{ formatDataValue(player.spells) }}</pre>
              </v-expansion-panel-text>
            </v-expansion-panel>


            <!-- 5. DETAILED ATTRIBUTES SUMMARY MAP -->
            <v-expansion-panel title="⚙️ Core Sheet Attribute Scores" eager>
              <v-expansion-panel-text>
                <v-textarea
                  v-if="editPlayers"
                  :model-value="formatDataValue(campaignData.players[player.id].abilityScores)"
                  @update:model-value="val => updateJSONField(player.id, 'abilityScores', val)"
                  variant="outlined"
                  auto-grow
                  rows="4"
                  class="font-mono-input"
                ></v-textarea>
                <pre v-else class="formatted-json-view">{{ formatDataValue(player.abilityScores) }}</pre>
              </v-expansion-panel-text>
            </v-expansion-panel>

          </v-expansion-panels>

          <v-card-actions class="px-0">
            <v-btn :color="editPlayers ? 'grey' : 'primary'" variant="outlined" @click="toggleEditMode">
              {{ editPlayers ? 'Cancel' : 'Edit Mode' }}
            </v-btn>
            
            <!-- NEW SAVE ACTION BUTTON -->
            <v-btn v-if="editPlayers" color="success" variant="flat" class="ml-2" @click="savePlayers">
              Save Changes
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
  import { useCurrentUser, useFirestore } from 'vuefire';
  import { doc, updateDoc } from 'firebase/firestore';

  definePageMeta({
    layout: 'gm',
  })

  const editPlayers = ref(false)
  const playerEmail = ref('')
  const db = useFirestore()
  
  const campaignData = inject('campaignData')
  
  // Create a backup to restore data if the GM cancels editing
  let initialDataBackup = null

  const toggleEditMode = () => {
    if (!editPlayers.value) {
      // Store a deep copy before making edits
      initialDataBackup = JSON.parse(JSON.stringify(campaignData.value.players))
      editPlayers.value = true
    } else {
      // Restore the backup if edits are canceled
      campaignData.value.players = initialDataBackup
      editPlayers.value = false
    }
  }

  // Parses text input from textareas back into standard objects/arrays safely
  const updateJSONField = (playerId, fieldName, rawValue) => {
    try {
      const parsedValue = JSON.parse(rawValue)
      campaignData.value.players[playerId][fieldName] = parsedValue
    } catch (e) {
      // Fallback: If it's incomplete JSON while typing, don't crash the app
    }
  }


  // const sendPlayerInvitation = () => {
  //   // Brevo invitation link infrastructure hook
  // }


  // Helper to recursively strip out dangerous undefined values before database shipping
const sanitizeFirestorePayload = (obj) => {
  if (obj === null || obj === undefined) return 0; // Turn loose undefined values into safe counts
  if (Array.isArray(obj)) {
    return obj.map(item => sanitizeFirestorePayload(item));
  }
  if (typeof obj === 'object') {
    const cleaned = {};
    for (const [key, value] of Object.entries(obj)) {
      // If a numeric string field was left blank by backspace, turn it to 0
      if (value === undefined || value === "") {
        cleaned[key] = (key === 'health' || key === 'level' || key === 'movement' || key === 'abilityPoints' || key === 'rank') ? 0 : "";
      } else {
        cleaned[key] = sanitizeFirestorePayload(value);
      }
    }
    return cleaned;
  }
  return obj;
}

  // Push updates back to the parent document collection in Firebase
  // Optimized Push update code block
const savePlayers = async () => {
  try {
    const route = useRoute()
    const campaignId = route.params.id || campaignData.value.id 
    
    if (!campaignId) {
      console.error("Missing valid campaign link document ID reference.")
      return
    }

    const campaignDocRef = doc(db, 'campaigns', campaignId)
    
    // Clean up data map fields to make them Firestore-safe
    const cleanPlayersPayload = sanitizeFirestorePayload(campaignData.value.players)
    
    // Safely update our remote state
    await updateDoc(campaignDocRef, {
      players: cleanPlayersPayload
    })
    
    editPlayers.value = false
  } catch (error) {
    console.error("Failed to sync sheet updates to Firestore:", error)
  }
}


  // Reactive Firestore payload object mapping converter
  const playersList = computed(() => {
    if (!campaignData?.value?.players || typeof campaignData.value.players !== 'object') {
      return []
    }
    return Object.entries(campaignData.value.players).map(([uid, playerDetails]) => {
      return {
        id: uid,
        ...playerDetails
      }
    })
  })

  onMounted(async () => {
    if (useCurrentUser().value == null) {
      return navigateTo('/trpg/login')
    }
  })

  // Utility to handle JSON serialization formatting directly on screen
  const formatDataValue = (val) => {
    if (!val || (typeof val === 'object' && Object.keys(val).length === 0)) return 'Empty / Unassigned'
    if (typeof val === 'string') return val
    try {
      return JSON.stringify(val, null, 2)
    } catch (e) {
      return String(val)
    }
  }
</script>

<style scoped>
  /* Border constraints helpers */
  .border-bottom {
    border-bottom: 1px solid #e0e0e0;
  }
  
  .border-bottom-dashed {
    border-bottom: 1px dashed #cfd8dc;
  }
  
  .border-bottom-dashed:last-child {
    border-bottom: none;
  }

  .font-mono {
    font-family: monospace !important;
    font-size: 0.75rem;
  }

  .italicized-desc {
    line-height: 1.4;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  /* Reset sub-expansion panel default excessive paddings */
  :deep(.v-expansion-panel-text__wrapper) {
    padding: 12px 16px !important;
    background-color: #fafafa !important;
  }

  .custom-expansion-group {
    border-radius: 0 !important;
  }

  /* Format code blocks elegantly inside the text cards */
  .formatted-json-view {
    font-family: 'Courier New', Courier, monospace;
    font-size: 0.8rem;
    white-space: pre-wrap;
    word-wrap: break-word;
    color: #2c3e50;
    background: #f4f6f7;
    padding: 8px;
    border-radius: 4px;
    border: 1px solid #e2e8f0;
  }

  :deep(.font-mono-input textarea) {
    font-family: 'Courier New', Courier, monospace !important;
    font-size: 0.85rem !important;
    line-height: 1.4 !important;
  }
  
</style>