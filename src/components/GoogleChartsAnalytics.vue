<template>
  <GChart :data="data" :options="options" :type="type"/>
</template>

<script setup lang="ts">
import { GChart } from 'vue-google-charts'

const type = 'ColumnChart'
const data = [
  ['Category', 'Completed', 'Analytics'],
  ['1 sem', 1000, 1170],
  ['2 sem', 400, 460],
  ['3 sem', 400, 460],
  ['4 sem', 400, 460]
]
const options = {
  chart: {
    title: 'Company Performance',
    subtitle: 'Sales, Expenses, and Profit: 2014-2017'
  },
  width: '100%',
  height: 600,
  colors: ['#1b9e77', '#d95f02', '#7570b3', '#e7298a'] // Задаем цвета для каждого столбца
  // isStacked: true,
  // legend: { position: 'top', maxLines: 3 },
  // bar: { groupWidth: '75%' },
  // vAxis: { format: 'decimal' }
}

</script>
