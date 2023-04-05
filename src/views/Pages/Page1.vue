<template>
  <button :class="bgcolor + ' ' + txtcolor">{{ txtcolor }} auf {{ bgcolor }}</button>
  <ul>
    <li @click="bgcolor = 'bg-white'">Hintergrund weiss</li>
    <li @click="bgcolor = 'bg-black'">Hintergrund schwarz</li>
    <li @click="bgcolor = 'bg-red'">Hintergrund rot</li>
    <li @click="bgcolor = 'bg-green'">Hintergrund grün</li>
  </ul>
  <ul>
    <li @click="txtcolor = 'txt-white'">Text weiss</li>
    <li @click="txtcolor = 'txt-black'">Text schwarz</li>
    <li @click="txtcolor = 'txt-red'">Text rot</li>
    <li @click="txtcolor = 'txt-green'">Text grün</li>
  </ul>
</template>

<script setup>
import { ref } from "vue";
const bgcolor = ref('');
const txtcolor = ref('');
</script>

<style>
.txt-red { color:red; }
.txt-white { color:white; }
.txt-black { color:black; }
.txt-green { color:green; }

.bg-red { background-color:red; }
.bg-white { background-color:white; }
.bg-black { background-color:black; }
.bg-green { background-color:green; }
</style>