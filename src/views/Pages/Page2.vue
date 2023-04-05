<template>
  <button :class="bgcolor + ' ' + txtcolor">{{ txtcolor }} auf {{ bgcolor }}</button>
  <form @submit.prevent="addAttributes">
    <input v-model="newAttribute">
    <button>Add attribute</button>    
  </form>
  <ul>
    <li v-for="attribute in attributes" :key="attribute.id">
      {{ attribute.text }}
      <button @click="removeAttributes(attribute)">X</button>
    </li>
  </ul>
</template>

<script setup>
import { ref } from "vue";
const newAttribute = ref('')
let id = 0;
const attributes = ref([
  { id: id++, text: 'Learn HTML' },
  { id: id++, text: 'Learn JavaScript' },
  { id: id++, text: 'Learn Vue' }
])

function addAttributes() {
  attributes.value.push({ id: id++, text: newAttribute.value })
  newAttribute.value = ''
}

function removeAttributes(attribute) {
  attributes.value = attributes.value.filter((t) => t !== attribute)
}
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