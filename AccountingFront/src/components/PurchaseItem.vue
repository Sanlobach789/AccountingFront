<template>
  <div class="purchase mb-5">
    <h4>Данные о закупке № {purchase.id}</h4>
    <div class="form-floating mb-2">
      <input type="text" readonly class="form-control-plaintext" id="p-id"
             placeholder="0" value="{purchase.id}">
      <label for="p-id">Номер</label>
    </div>
    <div class="form-floating mb-2">
      <input type="text" readonly class="form-control-plaintext" id="p-count"
             placeholder="0" value="{purchase.count}">
      <label for="p-count">Количество</label>
    </div>
    <div class="form-floating mb-2">
      <input type="text" readonly class="form-control-plaintext" id="p-price"
             placeholder="0" value="{purchase.price}">
      <label for="p-price">Цена, руб</label>
    </div>
    <div class="form-floating mb-2">
      <input type="text" readonly class="form-control-plaintext" id="p-delprice"
             placeholder="0" value="{purchase.delivery_price}">
      <label for="p-delprice">Цена доставки, руб</label>
    </div>
    <div class="form-floating mb-2">
      <input type="text" readonly class="form-control-plaintext" id="p-date"
             placeholder="01.01.2000" value="{purchase.date}">
      <label for="p-date">Дата</label>
    </div>
    <div class="form-floating mb-2">
      <input type="text" readonly class="form-control-plaintext" id="p-contractor"
             placeholder="-" value="{purchase.contractor.title}">
      <label for="p-contractor">Контрагент</label>
    </div>
    <div class="form-floating mb-2">
      <input type="text" readonly class="form-control-plaintext" id="p-status"
             placeholder="Оформлено" value="{purchase.status}">
      <label for="p-status">Тип движения</label>
    </div>
  </div>
</template>

<script setup>
import {usePurchasesStore} from "@/store/storePurchases";
import {onBeforeMount} from "vue";

const purchasesStore = usePurchasesStore()

onBeforeMount(() => {

})
</script>

<style scoped>

</style>