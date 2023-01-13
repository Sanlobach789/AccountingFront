<template>
  <div class="cash-flow mb-5">
    <h4>Данные о движении средств № {cashFlow.id}</h4>
    <div class="form-floating mb-2">
      <input type="text" readonly class="form-control-plaintext" id="floatingEmptyPlaintextInput"
             placeholder="name@example.com" value="{cashFlow.id}">
      <label for="floatingEmptyPlaintextInput">Номер</label>
    </div>
    <div class="form-floating mb-2">
      <input type="text" readonly class="form-control-plaintext" id="floatingPlaintextInput"
             placeholder="name@example.com" value="{cashFlow.date}">
      <label for="floatingPlaintextInput">Дата</label>
    </div>
    <div class="form-floating mb-2">
      <input type="text" readonly class="form-control-plaintext" id="floatingPlaintextInput"
             placeholder="name@example.com" value="{cashFlow.sum_of_money}">
      <label for="floatingPlaintextInput">Сумма</label>
    </div>
    <div class="form-floating mb-2">
      <input type="text" readonly class="form-control-plaintext" id="floatingPlaintextInput"
             placeholder="name@example.com" value="{cashFlow.comment}">
      <label for="floatingPlaintextInput">Комментарий</label>
    </div>
    <div class="form-floating mb-2">
      <input type="text" readonly class="form-control-plaintext" id="floatingPlaintextInput"
             placeholder="name@example.com" value="{cashFlow.contractor}">
      <label for="floatingPlaintextInput">Контрагент</label>
    </div>
    <div class="form-floating mb-2">
      <input type="text" readonly class="form-control-plaintext" id="floatingPlaintextInput"
             placeholder="name@example.com" value="{cashFlow.fee}">
      <label for="floatingPlaintextInput">Комиссия</label>
    </div>
    <div class="form-floating mb-2">
      <input type="text" readonly class="form-control-plaintext" id="floatingPlaintextInput"
             placeholder="name@example.com" value="{cashFlow.type}">
      <label for="floatingPlaintextInput">Тип движения</label>
    </div>
    <div class="form-floating mb-2">
      <input type="text" readonly class="form-control-plaintext" id="floatingPlaintextInput"
             placeholder="name@example.com" value="{cashFlow.organization}">
      <label for="floatingPlaintextInput">Организация</label>
    </div>
    <div class="form-floating mb-2">
      <input type="text" readonly class="form-control-plaintext" id="floatingPlaintextInput"
             placeholder="name@example.com" value="{cashFlow.file}">
      <label for="floatingPlaintextInput">Файлы</label>
    </div>
  </div>
</template>

<script>
export default {
  name: "CashFlowItem"
}
</script>

<style scoped>

</style>