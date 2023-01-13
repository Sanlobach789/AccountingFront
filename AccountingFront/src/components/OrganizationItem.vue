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
          {{ orgItem.id }}
        </div>
        <div class="col">
          {{ orgItem.title }}
        </div>
        <div class="col">
          {{ orgItem.balance }}
        </div>
      </div>
    </div>
  </div>
  <ContactsList :contactsList="orgItem.contacts_list"/>
</template>

<script setup>
import {useRoute} from "vue-router"
import {useBaseVarStore} from "@/store/baseVar";
import {onBeforeMount, reactive, ref} from "vue";
import axios from "axios";
import ContactsList from "@/components/ContactsList";

const baseVar = useBaseVarStore()
const orgItem = ref({
  id: 0,
  title: '',
  balance: 0,
  contacts_list: reactive([])
})
const route = useRoute()


const getOrganization = (id) => {
  axios.get(baseVar.url + '/organizations/' + id).then((response) => {
    const contacts_list = response.data.contacts_list
    orgItem.value = response.data;
    orgItem.value.contacts_list = contacts_list
  }).catch((reason) => {
    console.log(reason)
  })
}

onBeforeMount(() => getOrganization(route.params.id))
</script>

<style scoped>

</style>