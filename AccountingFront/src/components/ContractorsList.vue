<template>
  <div class="contractors mb-5">
    <h4 class="mb-3">Список контрагентов</h4>
    <table class="table">
      <thead>
      <tr>
        <th scope="col">id</th>
        <th scope="col">Название</th>
        <th scope="col">ИНН</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <th scope="row">1</th>
        <td>{contractor.title}</td>
        <td>{contractor.inn}</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>{contractor.title}</td>
        <td>{contractor.inn}</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>{contractor.title}</td>
        <td>{contractor.inn}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>

</script>

<style scoped>

</style>