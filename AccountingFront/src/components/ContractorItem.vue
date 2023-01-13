<template>
  <div class="contractor mb-5">
    <h4>Данные о контрагенте {id}</h4>
    <dl class="row">
      <dt class="col-sm-3">ИНН</dt>
      <dd class="col-sm-9">{contractor.inn}</dd>

      <dt class="col-sm-3">Название</dt>
      <dd class="col-sm-9">
        <p>{contractor.title}</p>
      </dd>

      <dt class="col-sm-3">Адрес</dt>
      <dd class="col-sm-9">{contractor.address}</dd>

      <dt class="col-sm-3">Комментарии</dt>
      <dd class="col-sm-9">{contractor.comment}</dd>

      <!--      <dt class="col-sm-3">Nesting</dt>-->
      <!--      <dd class="col-sm-9">-->
      <!--        <dl class="row">-->
      <!--          <dt class="col-sm-4">Nested definition list</dt>-->
      <!--          <dd class="col-sm-8">I heard you like definition lists. Let me put a definition list inside your definition-->
      <!--            list.-->
      <!--          </dd>-->
      <!--        </dl>-->
      <!--      </dd>-->
    </dl>
    Список контактов....
  </div>
</template>

<script>
export default {
  name: "ContractorItem"
}
</script>

<style scoped>

</style>