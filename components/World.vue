<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/attribute-hyphenation -->
<template>
  <!-- FOV: {{ fov }}
  Aspect: {{ aspect }}
  Near: {{ near }}
  Far: {{ far }}
  Zoom: {{ zoom }}  -->
  <!-- <v-img
    aspect-ratio="1"
    src="https://images.vexels.com/media/users/3/130718/isolated/preview/9368407454443561ac004d20786d4b43-grid-on-globe-icon.png"
    class="w-full lg:w-1/2"-->
  <TresCanvas
    v-bind="gl"
    render-mode="on-demand"
  >
    <!-- <TresPerspectiveCamera
      :args="[45,innerWidth/innerHeight,1,2000]"
      failIfMajorPerformanceCaveat="true"
    /> -->
    
    <TresPerspectiveCamera
      :args="[fov, aspect, near, far]"
      :zoom="zoom"
      :position="[-30,0,0]"
    />
    <!-- <TresAmbientLight
      :color="0xFAD6A5"
      :intensity="0.4"
    />
    <TresDirectionalLight
      :position="[-1,1,-1.5]"
      :color="0xFD5E53"
      :intensity="1.8"
    /> -->
    <!-- <TresDirectionalLightHelper :args="[light,1.5]" /> -->
    <!-- <TresCSS2DRenderer /> -->
    <!-- <CSS2DRenderer /> -->
    <OrbitControls
      :enable-pan="false"
      :min-distance="8.5"
      :max-distance="120"
      :enable-damping="true"
      :auto-rotate="autoRotate"
      :auto-rotate-speed="0.5"
    />
    <Sky :elevation="0.8" />
    <Stars :size="0.2" />
    <Suspense>
      <Ocean :position="[0,-15,0]" />
    </Suspense>


    <Suspense>
      <!-- <UseTexture v-slot="{ textures }" map="http://127.0.0.1:3000/img/earth/Earth_Color.jpg"> -->
      <Sphere
        :args="[rad]"
        @pointer-enter="() => dodecaEnter()"
        @pointer-leave="() => dodecaLeave()"
      >
        <!-- <TresMeshStandardMaterial
          :map="pbrTexture"
          :displacementMap="dTexture"
          :displacementScale="0.3"
          :bumpMap="dTexture"
          :bumpScale="0.3"
          :aoMap="aTexture"
          :aoMapIntensity="0.2"
        /> -->

        <TresMeshMatcapMaterial
          :map="pbrTexture"
        />
        <!-- <Html
            center
            transform
            :distance-factor="4"
            :scale="[10, 10, 10]"
          >
            <button
              :onclick="()=>dodecaButton()"
              class="bg-white dark:bg-dark text-xs p-1 rounded"
            >
              I'm a Dodecahedron 📦
            </button>
            <div
              v-if="showMe"
              class="w-full text-align-center"
            >
              This is what our OG code shows for marker labels:
              <div
                id="markerLabel"
                class="bg-primary w-[230px] h-[48px] p-2"
              >
                <button
                  id="closeButton"
                  :onclick="()=>showMe=false"
                  class="absolute p-0 m-0  "
                >
                  X
                </button>
                <div
                  id="idNum"
                  class="text"
                />
                <div
                  id="magnitude"
                  class="text"
                />
                <div
                  id="coordinates"
                  class="text"
                />
              </div>
            </div>
          </Html>
          <Sparkles
            v-if="showSparkles"
            :sequence-alpha="[[0., 0.], [0.6, 1.0], [0.7, 0.0], [1.0, 1.0]]"
            :sequence-color="['yellow', 'white', 'orange', 'red', 'black']"
            :sequence-offset="[[0.7, [0, 0, 0]], [0.75, [0, 0.1, 0]], [1.0, [0, 0.5, 0]]]"
            :sequence-size="[[0.0, 0.0], [0.7, 1.0]]"
            :sequence-surface-distance="[[0.0, 0.0], [0.7, 1.0]]"
            :lifetime-sec="5.0"
            :size="4"
            :surface-distance="2.0"
            :mix-color="1.0"
          /> -->
      </Sphere>
      <!-- </UseTexture> -->
    </Suspense>

  

  


    <!-- <Suspense>
        <TresMesh>
          <Dodecahedron
            :args="[rad,1]"
            :color="theme.current.value.colors.primary"
          >
            <TresMeshNormalMaterial
              :wireframe="true"
              :color="theme.current.value.colors.primary"
            />
            <Html
              center
              transform
              :distance-factor="4"
              :scale="[10, 10, 10]"
            >
              <button
                :onclick="()=>dodecaButton()"
                class="bg-white dark:bg-dark text-xs p-1 rounded"
              >
                I'm a Dodecahedron 📦
              </button>
              <div
                v-if="showMe"
                class="w-full text-align-center"
              >
                This is what our OG code shows for marker labels:
                <div
                  id="markerLabel"
                  class="bg-primary w-[230px] h-[48px] p-2"
                >
                  <button
                    id="closeButton"
                    :onclick="()=>showMe=false"
                    class="absolute p-0 m-0  "
                  >
                    X
                  </button>
                  <div
                    id="idNum"
                    class="text"
                  />
                  <div
                    id="magnitude"
                    class="text"
                  />
                  <div
                    id="coordinates"
                    class="text"
                  />
                </div>
              </div>
            </Html>
            <Sparkles
              v-if="showSparkles"
              :sequence-alpha="[[0., 0.], [0.6, 1.0], [0.7, 0.0], [1.0, 1.0]]"
              :sequence-color="['yellow', 'white', 'orange', 'red', 'black']"
              :sequence-offset="[[0.7, [0, 0, 0]], [0.75, [0, 0.1, 0]], [1.0, [0, 0.5, 0]]]"
              :sequence-size="[[0.0, 0.0], [0.7, 1.0]]"
              :sequence-surface-distance="[[0.0, 0.0], [0.7, 1.0]]"
              :lifetime-sec="5.0"
              :size="4"
              :surface-distance="2.0"
              :mix-color="1.0"
            />
          </Dodecahedron>
      </TresMesh>
      </Suspense> -->
  </TresCanvas>
</template>

<script setup>
import { useTheme } from 'vuetify'
// import { extend } from '@tresjs/core'
// import { CSS2DRenderer } from 'three/addons/renderers/CSS2DRenderer'
// import { OrbitControls } from 'three/addons/controls/OrbitControls'
import { OrbitControls, Sky, Ocean, Stars, Html } from '@tresjs/cientos'
import { useTexture, TresCanvas } from '@tresjs/core'
import { BasicShadowMap, NoToneMapping, SRGBColorSpace } from 'three'



const theme = useTheme()

const gl = {
  clearColor: theme.current.value.colors.background,
  shadows: true,
  alpha: false,
  shadowMapType: BasicShadowMap,
  outputColorSpace: SRGBColorSpace,
  //toneMapping: NoToneMapping, //:tone-mapping-exposure="0.25"
  toneMappingExposure: "0.4"
}

const showMe = ref(false)
// const showSparkles = ref(false)
const autoRotate = ref(true)


const rad = ref(6)

const fov = ref(100)
const aspect = ref(1)
const near = ref(0.1)
const far = ref(2000)
const zoom = ref(1)
// const vertexShader = computed(() => shader.value?`
//   uniform sampler2D globeTexture;
//   varying float vVisibility;
//   varying vec3 vNormal;
//   varying vec3 vMvPosition;
//   ${ shader.value.vertexShader }
// `.replace(
//   `gl_PointSize = size;`,
//   `
//     vVisibility = texture(globeTexture, uv).g; // get value from texture
//     gl_PointSize = size * (vVisibility < 0.5 ? 1. : 0.75); // size depends on the value
//     vNormal = normalMatrix * normalize(position);
//     vMvPosition = -mvPosition.xyz;
//     gl_PointSize *= 0.4 + (dot(normalize(vMvPosition), vNormal) * 0.6); // size depends position in camera space
//   `
// ):`
//   uniform sampler2D globeTexture;
//   varying float vVisibility;
//   varying vec3 vNormal;
//   varying vec3 vMvPosition;
//   void main() {
//     vVisibility = texture(globeTexture, uv).g;
//     gl_PointSize = size * (vVisibility < 0.5 ? 1. : 0.75);
//     vNormal = normalMatrix * normalize(position);
//     vMvPosition = -mvPosition.xyz;
//     gl_PointSize *= 0.4 + (dot(normalize(vMvPosition), vNormal) * 0.6);
//   }
//   `)
// const fragmentShader = computed(()=> shader.value?`
//   varying float vVisibility;
//   varying vec3 vNormal;
//   varying vec3 vMvPosition;
//   ${ shader.value?.fragmentShader }
// `.replace(
//   `vec4 diffuseColor = vec4( diffuse, opacity );`,
//   `
//     bool circ = length(gl_PointCoord - 0.5) > 0.5; // make points round
//     bool vis = dot(vMvPosition, vNormal) < 0.; // visible only on the front side of the sphere
//     if (circ || vis) discard;
    
//     vec3 col = diffuse + (vVisibility > 0.5 ? 0.5 : 0.); // make oceans brighter
    
//     vec4 diffuseColor = vec4( col, opacity );
//   `
// ):`
//   varying float vVisibility;
//   varying vec3 vNormal;
//   varying vec3 vMvPosition;
//   void main() {
//     bool circ = length(gl_PointCoord - 0.5) > 0.5; // make points round
//     bool vis = dot(vMvPosition, vNormal) < 0.; // visible only on the front side of the sphere
//     if (circ || vis) discard;
    
//     vec3 col = diffuse + (vVisibility > 0.5 ? 0.5 : 0.); // make oceans brighter
    
//     vec4 diffuseColor = vec4( col, opacity );
//   }
//   `)

// const cameraRef = ref()

// theme.global.name.value = "myDarkTheme" // "myPurpleTheme"
// extend({ CSS2DRenderer })


// const { camera, renderer } = useTresContext()
// const { onLoop } = useRenderLoop()


const dodecaEnter = async() => {
  autoRotate.value=false
  // showSparkles.value=true
}

const dodecaLeave = async() => {
  autoRotate.value = true
  // showSparkles.value = false
}

const dodecaButton = () => {
  showMe.value =! showMe.value
  //move camera position to front and center to show panel better
  // cameraRef.value.position=[1,0,0]
  // cameraRef.value.rotation=[0,0,0]
  //rotate globe to face the targeted location to the camera
}
// const pts = ref([])

// // <GLOBE>
// // https://web.archive.org/web/20120107030109/http://cgafaq.info/wiki/Evenly_distributed_points_on_sphere#Spirals
// let counter = 200000;

// let sph = new THREE.Spherical();

// let r = 0;
// let dlong = Math.PI * (3 - Math.sqrt(5));
// let dz = 2 / counter;
// let long = 0;
// let z = 1 - dz / 2;

// let pts = [];
// let clr = [];
// let c = new THREE.Color();
// let uvs = [];

// for (let i = 0; i < counter; i++) {
//   r = Math.sqrt(1 - z * z);
//   let p = [
//     (Math.cos(long) * r)*rad,
//     z*rad,
//     (-Math.sin(long) * r)*rad
//   ]
//   pts.value.push(p);
//   z = z - dz;
//   long = long + dlong;

//   c.setHSL(0.45, 0.5, Math.random() * 0.25 + 0.25);
//   c.toArray(clr, i * 3);

//   sph.setFromVector3(p);
//   uvs.push((sph.theta + Math.PI) / (Math.PI * 2), 1.0 - sph.phi / Math.PI);
// }

// let g = new THREE.BufferGeometry().setFromPoints(pts);
// g.setAttribute("color", new THREE.Float32BufferAttribute(clr, 3));
// g.setAttribute("uv", new THREE.Float32BufferAttribute(uvs, 2));
// let m = new THREE.PointsMaterial({
//   size: 0.1,
//   vertexColors: true,
//   onBeforeCompile: (shader) => {
//     shader.uniforms.globeTexture = {
//       value: new THREE.TextureLoader().load(imgData)
//     };
//     shader.vertexShader = `
//     	uniform sampler2D globeTexture;
//       varying float vVisibility;
//       varying vec3 vNormal;
//       varying vec3 vMvPosition;
//       ${shader.vertexShader}
//     `.replace(
//       `gl_PointSize = size;`,
//       `
//       	vVisibility = texture(globeTexture, uv).g; // get value from texture
//         gl_PointSize = size * (vVisibility < 0.5 ? 1. : 0.75); // size depends on the value
//         vNormal = normalMatrix * normalize(position);
//         vMvPosition = -mvPosition.xyz;
//         gl_PointSize *= 0.4 + (dot(normalize(vMvPosition), vNormal) * 0.6); // size depends position in camera space
//       `
//     );
//     //console.log(shader.vertexShader);
//     shader.fragmentShader = `
//     	varying float vVisibility;
//       varying vec3 vNormal;
//       varying vec3 vMvPosition;
//       ${shader.fragmentShader}
//     `.replace(
//       `vec4 diffuseColor = vec4( diffuse, opacity );`,
//       `
//       	bool circ = length(gl_PointCoord - 0.5) > 0.5; // make points round
//         bool vis = dot(vMvPosition, vNormal) < 0.; // visible only on the front side of the sphere
//       	if (circ || vis) discard;
        
//         vec3 col = diffuse + (vVisibility > 0.5 ? 0.5 : 0.); // make oceans brighter
        
//         vec4 diffuseColor = vec4( col, opacity );
//       `
//     );
//     //console.log(shader.fragmentShader);
//   }
// });
// let globe = new THREE.Points(g, m);
// scene.add(globe);


// // <Markers>
// const markerCount = 30;
// let markerInfo = []; // information on markers
// let gMarker = new THREE.PlaneGeometry();
// let mMarker = new THREE.MeshBasicMaterial({
//   color: 0xff3232,
//   onBeforeCompile: (shader) => {
//     shader.uniforms.time = globalUniforms.time;
//     shader.vertexShader = `
//     	attribute float phase;
//       varying float vPhase;
//       ${shader.vertexShader}
//     `.replace(
//       `#include <begin_vertex>`,
//       `#include <begin_vertex>
//       	vPhase = phase; // de-synch of ripples
//       `
//     );
//     //console.log(shader.vertexShader);
//     shader.fragmentShader = `
//     	uniform float time;
//       varying float vPhase;
//     	${shader.fragmentShader}
//     `.replace(
//       `vec4 diffuseColor = vec4( diffuse, opacity );`,
//       `
//       vec2 lUv = (vUv - 0.5) * 2.;
//       float val = 0.;
//       float lenUv = length(lUv);
//       val = max(val, 1. - step(0.25, lenUv)); // central circle
//       val = max(val, step(0.4, lenUv) - step(0.5, lenUv)); // outer circle
      
//       float tShift = fract(time * 0.5 + vPhase);
//       val = max(val, step(0.4 + (tShift * 0.6), lenUv) - step(0.5 + (tShift * 0.5), lenUv)); // ripple
      
//       if (val < 0.5) discard;
      
//       vec4 diffuseColor = vec4( diffuse, opacity );`
//     );
//     //console.log(shader.fragmentShader)
//   }
// });
// mMarker.defines = { USE_UV: " " }; // needed to be set to be able to work with UVs
// let markers = new THREE.InstancedMesh(gMarker, mMarker, markerCount);

// let dummy = new THREE.Object3D();
// let phase = [];
// for (let i = 0; i < markerCount; i++) {
//   dummy.position.randomDirection().setLength(rad + 0.1);
//   dummy.lookAt(dummy.position.clone().setLength(rad + 1));
//   dummy.updateMatrix();
//   markers.setMatrixAt(i, dummy.matrix);
//   phase.push(Math.random());

//   markerInfo.push({
//     id: i + 1,
//     mag: THREE.MathUtils.randInt(1, 10),
//     crd: dummy.position.clone()
//   });
// }
// gMarker.setAttribute(
//   "phase",
//   new THREE.InstancedBufferAttribute(new Float32Array(phase), 1)
// );

// scene.add(markers);
// // </Markers>

// // <Label>
// let labelDiv = document.getElementById("markerLabel");
// let closeBtn = document.getElementById("closeButton");
// closeBtn.addEventListener("pointerdown", event => {
//   labelDiv.classList.add("hidden");
// })
// let label = new CSS2DObject(labelDiv);
// label.userData = {
//   cNormal: new THREE.Vector3(),
//   cPosition: new THREE.Vector3(),
//   mat4: new THREE.Matrix4(),
//   trackVisibility: () => { // the closer to the edge, the less opacity
//     let ud = label.userData;
//     ud.cNormal.copy(label.position).normalize().applyMatrix3(globe.normalMatrix);
//     ud.cPosition.copy(label.position).applyMatrix4(ud.mat4.multiplyMatrices(camera.matrixWorldInverse, globe.matrixWorld));
//     let d = ud.cPosition.negate().normalize().dot(ud.cNormal);
//     d = smoothstep(0.2, 0.7, d);
//     label.element.style.opacity = d;
    
//     // https://github.com/gre/smoothstep/blob/master/index.js
//     function smoothstep (min, max, value) {
//       var x = Math.max(0, Math.min(1, (value-min)/(max-min)));
//       return x*x*(3 - 2*x);
//     };
//   }
// }
// scene.add(label);
// // </Label>

// // <Interaction>
// let pointer = new THREE.Vector2();
// let raycaster = new THREE.Raycaster();
// let intersections;
// let divID = document.getElementById("idNum");
// let divMag = document.getElementById("magnitude");
// let divCrd = document.getElementById("coordinates");
// window.addEventListener("pointerdown", event => {
//   pointer.x = ( event.clientX / window.innerWidth ) * 2 - 1;
// 	pointer.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
//   raycaster.setFromCamera(pointer, camera);
//   intersections = raycaster.intersectObject(markers).filter(m => {
//     return (m.uv.subScalar(0.5).length() * 2) < 0.25; // check, if we're in the central circle only
//   });
//   //console.log(intersections);
//   if (intersections.length > 0) {
//     let iid = intersections[0].instanceId;
//     let mi = markerInfo[iid];
//     divID.innerHTML = `ID: <b>${mi.id}</b>`;
//     divMag.innerHTML = `Mag: <b>${mi.mag}</b>`;
//     divCrd.innerHTML = `X: <b>${mi.crd.x.toFixed(2)}</b>; Y: <b>${mi.crd.y.toFixed(2)}</b>; Z: <b>${mi.crd.z.toFixed(2)}</b>`;
//     label.position.copy(mi.crd);
//     label.element.animate([
//       {width: "0px", height: "0px", marginTop: "0px", marginLeft: "0px"},
//       {width: "230px", height: "50px", marginTop: "-25px", maginLeft: "120px"}
//     ],{
//       duration: 250
//     });
//     label.element.classList.remove("hidden");
//   }
  
// })
// // </Interaction>

// let clock = new THREE.Clock();
// renderer.setAnimationLoop(() => {
//   let t = clock.getElapsedTime();
//   globalUniforms.time.value = t;
//   label.userData.trackVisibility();
//   controls.update();
//   renderer.render(scene, camera);
//   labelRenderer.render(scene, camera);
// });

// function onWindowResize() {
//   camera.aspect = innerWidth / innerHeight;
//   camera.updateProjectionMatrix();

//   renderer.setSize(innerWidth, innerHeight);
//   labelRenderer.setSize(innerWidth, innerHeight);
// }


const pbrTexture = ref()
// const dTexture = ref()
// const aTexture = ref()

onMounted(async()=>{
  // const txtr = await useTexture(['http://127.0.0.1:3000/img/earth/8081_earthmap4k.jpg'])
  // const dTx = await useTexture(['http://127.0.0.1:3000/img/earth/8081_earthbump4k.jpg'])
  // const aTx = await useTexture(['http://127.0.0.1:3000/img/earth/8081_earthspec4k.jpg'])

  const txtr = await useTexture(['http://127.0.0.1:3000/img/earth/land_ocean_ice_8192.png'])
  // const dTx = await useTexture(['http://127.0.0.1:3000/img/earth/gebco_08_rev_elev_21600x10800.png'])
  // const aTx = await useTexture(['http://127.0.0.1:3000/img/earth/landmask4K.png'])


  // txtr.minFilter = LinearFilter
  // dTx.minFilter = LinearFilter
  // aTx.minFilter = LinearFilter

  pbrTexture.value = txtr
  // dTexture.value = dTx
  // aTexture.value = aTx

})

// const uniforms = {
//   globeTexture: { value: texture }
// }
</script>