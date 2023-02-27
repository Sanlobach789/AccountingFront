<template>
  <div class="organization mb-5">
    <h4 class="mb-4">Данные об организации</h4>
    <div class="container text-center">
      <div class="row">
        <div class="col">
          ID
        </div>
        <div class="col">
          Название
        </div>
        <div class="col">
          Баланс
        </div>
      </div>
      <div class="row">
        <div class="col">
          {{ organizationItem.id }}
        </div>
        <div class="col">
          {{ organizationItem.title }}
        </div>
        <div class="col">
          {{ organizationItem.balance }}
        </div>
      </div>
    </div>
  </div>
  <h5 class="mb-3">Список контактов</h5>
  <table class="table table-striped">
    <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Имя</th>
      <th scope="col">Номер телефона</th>
      <th scope="col">Email</th>
      <th scope="col">Тип</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="contact in organizationItem.contacts_list" :key="contact.id">
      <th scope="row">{{contact.id}}</th>
      <td>{{contact.name}}</td>
      <td>{{contact.phone}}</td>
      <td>{{contact.email}}</td>
      <td>{{contact.type}}</td>
    </tr>
    </tbody>
  </table>

</template>

<script setup>
import {onMounted, ref} from "vue";
import {useRoute} from "vue-router";

const baseUrl = "http://127.0.0.1:8000"
const organizationItem = ref([])
const route = useRoute()


async function fetchData() {
  organizationItem.value = []
  const res = await fetch(
      `${baseUrl}/organizations/${route.params.id}`
  )
  organizationItem.value = await res.json()
}

onMounted(() => {
  fetchData()
})
</script>

<style scoped>

</style>