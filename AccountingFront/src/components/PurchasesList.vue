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
      <tr v-for="purchase in purchasesStore.purchases_list" :key="purchase.id">
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
        <td>{{ purchasesStore.getAmountPrice(purchase.id) }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import {onBeforeMount} from "vue";
import {usePurchasesStore} from "@/store/storePurchases";
import {useBaseVarStore} from "@/store/baseVar";
import axios from "axios";

// const purchasesList = reactive([])
const purchasesStore = usePurchasesStore()

const baseVarStore = useBaseVarStore()


onBeforeMount(() => {
  axios.get(baseVarStore.url + '/purchases/').then((response) => {
    console.log(response.data.results);
    purchasesStore.updatePurchasesList(response.data.results)
  }).catch((reason) => {
    console.log(reason)
  })
})

</script>

<style scoped>

</style>