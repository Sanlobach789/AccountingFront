<template>
  <div class="warehouses-list mb-5">

    <div v-for="whouse in warehousesList" :key="whouse.id" class="warehouse-item">
      <p>
        <button class="btn btn-primary" type="button" data-bs-toggle="collapse" :data-bs-target="'#targetBlock'+whouse.id"
                aria-expanded="false" :aria-controls="'targetBlock'+whouse.id">
          {{ whouse.title }}
        </button>
      </p>
      <div class="collapse" :id="'targetBlock'+whouse.id">
        <div class="card card-body">
          {{ whouse.address }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {onMounted, ref} from "vue";

const baseUrl = "http://127.0.0.1:8000"
const warehousesList = ref([])

async function fetchData() {
  warehousesList.value = []
  const res = await fetch(
      `${baseUrl}/warehouses/`
  )
  warehousesList.value = await res.json()
  console.log(warehousesList.value)
}

onMounted(() => {
fetchData()
})
</script>

<style scoped>

</style>