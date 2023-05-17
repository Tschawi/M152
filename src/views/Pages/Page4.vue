<script setup>
import { ref } from "vue";

const log = ref([
    {
        id: 1,
        text: 'Startsaldo',
        value: 1500
    },
    {
        id: 2,
        text: 'Bus-Abo',
        value: -79
    },
    {
        id: 3,
        text: 'Handy-Abo',
        value: -25
    },
    {
        id: 4,
        text: 'Holy Cow',
        value: -15
    },
    {
        id: 5,
        text: 'Denner',
        value: -32
    }
])

const currentId = ref(2)
function roundTo05(number){
    number = (Math.ceil(number*20)/20).toFixed(2)
    return number;
}
</script>

<template>
    <table>
        <tr>
            <th class="text-left">Text</th>
            <th class="text-right">Eingang</th>
            <th class="text-right">Ausgang</th>
        </tr>
        <tr v-for="logEntry in log" :key="logEntry.id" :class="logEntry.value > 0 ? 'text-green' : 'text-red'">
            <td class="text-left">{{logEntry.text}}</td>
            <td class="text-right" ><span v-if="logEntry.value > 0">{{roundTo05(logEntry.value)}}</span></td>
            <td class="text-right"><span v-if="logEntry.value < 0">{{logEntry.value}}</span></td>
        </tr>
    </table>
    <form action="">
        <input type="text" placeholder="Text">
        <input type="number" placeholder="Zahl">
        <button type="submit">Eintragen</button>
    </form>
</template>

<style lang="scss">
table {
    width: 500px;
    margin: 0 auto;
    tr th{
        border-bottom: 2px solid darkgray;
    }
    tr td{
        border-bottom: 1px solid gray;
    }
    .text-left{
        text-align: left;
    }
    .text-right{
        text-align: right;
    }
    .text-red{
        color: red;
    }
    .text-green{
        color: green;
    }
}
form {
    display: flex;
    width: auto;
    justify-content: center;
}
</style>