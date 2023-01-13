<template>
  <div class="purchase cu mb-5">
    <h4>Добавление данных о закупке</h4>
    <form>
      <div class="mb-3">
        <div class="mb-2">
          <AutoComplete
              @input="getItems"
              :results="items"
          ></AutoComplete>
        </div>
        <label for="p-contractor" class="form-label">Контрагент</label>
        <input type="text" class="form-control" id="p-contractor">
        <!--        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>-->
      </div>
      <div class="mb-3">
        <label for="p-count" class="form-label">Количество</label>
        <input type="text" class="form-control" id="p-count">
      </div>
      <div class="mb-3">
        <label for="p-price" class="form-label">Цена, руб</label>
        <input type="text" class="form-control" id="p-price">
      </div>
      <div class="mb-3">
        <label for="p-delprice" class="form-label">Цена доставки, руб</label>
        <input type="text" class="form-control" id="p-delprice">
      </div>
      <div class="mb-3">
        <label for="p-date" class="form-label">Дата</label>
        <input type="text" class="form-control" id="p-date">
      </div>
      <div class="mb-3">
        <label for="p-status" class="form-label">Статус</label>
        <select class="form-select" id="p-status" aria-label="p-status">
          <option selected>Оформлено</option>
          <option value="1">В доставке</option>
          <option value="2">Доставлено</option>
        </select>
      </div>
      <div class="mb-3">
        <label for="p-comment" class="form-label">Комментарии</label>
        <input type="text" class="form-control" id="p-comment">
      </div>

      <!--      <div class="mb-3 form-check">-->
      <!--        <input type="checkbox" class="form-check-input" id="exampleCheck1">-->
      <!--        <label class="form-check-label" for="exampleCheck1">Check me out</label>-->
      <!--      </div>-->
      <button type="submit" class="btn btn-primary">Подтвердить</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "PurchaseCU"
}
</script>

<style scoped>

</style>