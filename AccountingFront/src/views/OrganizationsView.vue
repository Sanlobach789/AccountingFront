<template>
  <div class="organization-list mb-5">
    <h4>Список организаций</h4>
    <ul class="list-group">
      <li v-for="item in organizationList.results" :key="item.id" class="list-group-item">
        <router-link
            :to="{name: 'organizationItem', params: {id: item.id}}"
        >
          {{ item.title }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
import {onMounted, ref} from "vue";

const baseUrl = "http://127.0.0.1:8000"
const organizationList = ref([])

async function fetchData() {
  organizationList.value = []
  const res = await fetch(
      `${baseUrl}/organizations/`
  )
  organizationList.value = await res.json()
}

onMounted(() => {
fetchData()
})
</script>

<style scoped>

</style>
