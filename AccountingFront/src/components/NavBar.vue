<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary mb-5">
    <div class="container-fluid">
      <RouterLink class="navbar-brand" to="/">Главная</RouterLink>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
              aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <RouterLink class="nav-link active" aria-current="page" to="/organizations">Список организаций</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/purchases">Закупки</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/warehouses">Склады</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>