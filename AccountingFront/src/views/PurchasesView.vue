<template>
  <div class="purchases mb-5">
    <h4 class="mb-3">Закупки</h4>
    <table class="table">
      <thead>
      <tr>
        <th scope="col">id</th>
        <th scope="col">Дата</th>
        <th scope="col">Контрагент</th>
        <th scope="col">Статус</th>
        <th scope="col">Сумма, руб</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="purchase in purchasesList.results" :key="purchase.id">
        <th scope="row">
          <router-link
              :to="{name: 'purchaseItem', params: {id: purchase.id}}"
          >
            {{ purchase.id }}
          </router-link>
        </th>
        <td>{{ purchase.date }}</td>
        <td>{{ purchase.contractor }}</td>
        <td>{{ purchase.status }}</td>
        <td>{{ purchase.status }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import {onMounted, ref} from "vue";

const baseUrl = "http://127.0.0.1:8000"
const purchasesList = ref([])

async function fetchData() {
  purchasesList.value = []
  const res = await fetch(
      `${baseUrl}/purchases/`
  )
  purchasesList.value = await res.json()
  console.log(purchasesList.value)
}

onMounted(() => {
fetchData()
})
</script>

<style scoped>

</style>