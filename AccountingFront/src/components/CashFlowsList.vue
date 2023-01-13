<template>
  <div class="cash-flows mb-5">
    <h4 class="mb-3">Движения денежных средств</h4>
    <table class="table">
      <thead>
      <tr>
        <th scope="col">id</th>
        <th scope="col">Дата</th>
        <th scope="col">Тип движения</th>
        <th scope="col">Сумма, руб</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <th scope="row">1</th>
        <td>01.02.2022</td>
        <td>Списание</td>
        <td>24 000,50</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>02.02.2022</td>
        <td>Поступление</td>
        <td>150 000,00</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>03.02.2022</td>
        <td>Поступление</td>
        <td>15 000,30</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "CashFlowsList"
}
</script>

<style scoped>

</style>