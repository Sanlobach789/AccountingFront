<template>
  <div class="contact cu mb-5">
    <h4>Добавление/Изменение контакта</h4>
    <form>
      <div class="mb-3">
        <label for="c-name" class="form-label">Имя</label>
        <input type="text" class="form-control" id="c-name">
      </div>
      <div class="mb-3">
        <label for="c-phone" class="form-label">Номер телефона</label>
        <input type="text" class="form-control" id="c-phone">
      </div>
      <div class="mb-3">
        <label for="c-email" class="form-label">Email</label>
        <input type="email" class="form-control" id="c-email">
      </div>
      <div class="mb-3">
        <label for="c-type" class="form-label">Тип контактного лица</label>
        <select class="form-select" id="c-type" aria-label="c-type">
          <option selected>Сотрудник</option>
          <option value="1">Перевозчик</option>
          <option value="2">Прочее</option>
        </select>
      </div>
      <div class="mb-3">
        <label for="c-comment" class="form-label">Комментарии</label>
        <input type="text" class="form-control" id="c-comment">
      </div>
      <!--      <div class="mb-3 form-check">-->
      <!--        <input type="checkbox" class="form-check-input" id="exampleCheck1">-->
      <!--        <label class="form-check-label" for="exampleCheck1">Check me out</label>-->
      <!--      </div>-->
      <button type="submit" class="btn btn-primary">Подтвердить</button>
    </form>
  </div>
</template>

<script setup>

</script>

<style scoped>

</style>