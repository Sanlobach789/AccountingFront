<template>
  <div class="organization-list mb-5">
    <h4>Список организаций</h4>
    <ul class="list-group">
      <li v-for="item in orgList.orgList" :key="item.id" class="list-group-item">
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
import {onBeforeMount} from "vue";
import axios from "axios";
import {useBaseVarStore} from "@/store/baseVar";
import {useOrganizationsStore} from "@/store/storeOrganizations";

const baseVar = useBaseVarStore()
const orgList = useOrganizationsStore()

const getOrganizationsList = () => {
  axios.get(baseVar.url + '/organizations').then((response) => {
    orgList.updateOrganizationList(response.data.results)
  }).catch((reason) => {
    console.log(reason)
  })
}

onBeforeMount(() => getOrganizationsList())
</script>

<style scoped>

</style>