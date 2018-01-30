<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <router-link to="/" class="navbar-brand">Vue SPA</router-link>

      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <router-link tag="li" class="nav-item" active-class="active" to="/users" exact>
            <a class="nav-link">Список пользователей</a>
          </router-link>
          <router-link tag="li" class="nav-item" active-class="active" to="/users/edit">
            <a class="nav-link">Редактирование пользователей</a>
          </router-link>
        </ul>
      </div>
    </nav>

    <main class="container">
      <router-view/>
    </main>

  </div>
</template>

<script>
  import 'bootstrap/dist/css/bootstrap.css'

  export default {
    name: 'App'
  }
</script>
