<template>
  <div class="blocCards">
    <div v-for="index in registerBuffer" :id="index.id" :key="index.id">
      <!-- i correspond a la props / index correspond a l'iteration du 2 Tab -->
      <div class="row">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Entreprise</th>
              <th scope="col">E-mail</th>
              <th scope="col">Téléphone</th>
              <th scope="col">Adresse</th>
              <th scope="col">Ville</th>
              <th scope="col">Code Postal</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>{{ index.name }}</td>
              <td>{{ index.email }}</td>
              <td>{{ index.phone }}</td>
              <td>{{ index.adress }}</td>
              <td>{{ index.city }}</td>
              <td>{{ index.postal_code }}</td>
              <td>
                <button type="button" class="btn btn-warning">
                  Modifier
                </button>
              </td>
              <td>
                <div class="col-md-2">
                  <button @click="deleteUser(index.id)" class="btn btn-danger">
                    Refuser
                  </button>
                </div>
              </td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {},
};
</script>

<style lang="sass"></style>
