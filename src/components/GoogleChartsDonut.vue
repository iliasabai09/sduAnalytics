<template>
  <GChart :data="data" :options="options" :type="type"/>
</template>

<script setup lang="ts">
import { GChart } from 'vue-google-charts'

const type = 'PieChart'
const data = [
  ['Task', 'Hours per Day'],
  ['Work', 11],
  ['Eat', 2],
  ['Commute', 2],
  ['Watch TV', 2],
  ['Sleep', 7]
]
const options = {
  title: 'My Daily Activities',
  pieHole: 0.4,
  width: 800,
  height: 600
}
</script>
