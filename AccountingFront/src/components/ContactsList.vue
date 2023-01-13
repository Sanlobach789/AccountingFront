<template>
  <div class="contacts mb-5">
    <h4 class="mb-3">Список контактов</h4>
    <div class="list-group">
      <a v-for="contact in contactsList" :key="contact.id" href="#" class="list-group-item list-group-item-action">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">{{contact.name}}</h5>
          <small>{{contact.type}}</small>
        </div>
        <p class="mb-1">{{contact.phone}}, {{contact.email}}</p>
        <small>{{ contact.comment }}</small>
      </a>
    </div>
  </div>
</template>

<script setup>
//eslint-disable-next-line no-unused-vars,no-undef
const props = defineProps({
      contactsList: {
        type: Array,
        required: true
      }
    }
)
</script>

<style scoped>

</style>