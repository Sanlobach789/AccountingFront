<template>
  <div class="purchase mb-5">
    <h4>Данные о закупке ID - {{purchaseItem.id}}</h4>
    <div class="form-floating mb-2">
      <input type="text" readonly class="form-control-plaintext" id="p-id"
             placeholder="0" :value="purchaseItem.comment">
      <label for="p-id">Комментарии</label>
    </div>
    <div class="form-floating mb-2">
      <input type="text" readonly class="form-control-plaintext" id="p-count"
             placeholder="0" :value="purchaseItem.count">
      <label for="p-count">Количество</label>
    </div>
    <div class="form-floating mb-2">
      <input type="text" readonly class="form-control-plaintext" id="p-price"
             placeholder="0" :value="purchaseItem.price">
      <label for="p-price">Цена, руб</label>
    </div>
    <div class="form-floating mb-2">
      <input type="text" readonly class="form-control-plaintext" id="p-delprice"
             placeholder="0" :value="purchaseItem.delivery_price">
      <label for="p-delprice">Цена доставки, руб</label>
    </div>
    <div class="form-floating mb-2">
      <input type="text" readonly class="form-control-plaintext" id="p-date"
             placeholder="01.01.2000" :value="purchaseItem.date">
      <label for="p-date">Дата</label>
    </div>
    <div class="form-floating mb-2">
      <input type="text" readonly class="form-control-plaintext" id="p-contractor"
             placeholder="-" :value="purchaseItem.contractor">
      <label for="p-contractor">Контрагент</label>
    </div>
    <div class="form-floating mb-2">
      <input type="text" readonly class="form-control-plaintext" id="p-status"
             placeholder="Оформлено" :value="purchaseItem.status">
      <label for="p-status">Тип движения</label>
    </div>
  </div>
</template>

<script setup>
import {onMounted, ref} from "vue";
import {useRoute} from "vue-router";

const baseUrl = "http://127.0.0.1:8000"
const purchaseItem = ref([])
const route = useRoute()


async function fetchData() {
  purchaseItem.value = []
  const res = await fetch(
      `${baseUrl}/purchases/${route.params.id}`
  )
  purchaseItem.value = await res.json()
}

onMounted(() => {
  fetchData()
})
</script>

<style scoped>

</style>