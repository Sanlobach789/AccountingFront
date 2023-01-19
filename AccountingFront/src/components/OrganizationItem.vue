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
  <ContactsList />
</template>

<script setup>
</script>

<style scoped>

</style>