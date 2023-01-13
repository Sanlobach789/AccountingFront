<template>
  <div class="contractor cu mb-5">
    <h4>Добавление/Изменение КА</h4>
    <form>
      <div class="mb-3">
        <label for="ca-inn" class="form-label">ИНН</label>
        <input type="text" class="form-control" id="ca-inn" aria-describedby="emailHelp" v-model="formData.inn">
        <!--        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>-->
      </div>
      <div class="mb-3">
        <label for="ca-title" class="form-label">Название</label>
        <input type="text" class="form-control" id="ca-title" v-model="formData.title">
      </div>
      <div class="mb-3">
        <label for="ca-address" class="form-label">Адрес</label>
        <input type="text" class="form-control" id="ca-address" v-model="formData.address">
      </div>
      <div class="mb-3">
        <label for="ca-comment" class="form-label">Комментарии</label>
        <input type="text" class="form-control" id="ca-comment" v-model="formData.comment">
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
import {reactive} from "vue";

const formData = reactive({
  inn: "INN",
  title: "Title",
  address: "Address",
  comment: "Comment"
})

</script>

<style scoped>

</style>