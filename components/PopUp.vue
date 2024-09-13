<template>
  <div class="fixed inset-0 z-10 overflow-y-auto bg-black bg-opacity-60 flex items-center">
    <div class="modal-box my-auto mx-auto text-base-content">
      <div class="flex justify-space-between">
        <h1>
          <slot name="popuptitle" />
        </h1>
        <button 
          class="btn btn-sm btn-circle btn-ghost"
        >
          <slot name="exitbtn" />
        </button>
      </div>
      
      <slot />
    </div>
  </div>
</template>