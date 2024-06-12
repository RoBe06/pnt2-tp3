<template>
  <div>
    <h2>Formulario</h2>
    <form @submit.prevent="submitForm">
      <div class="mb-3">
        <label for="nombre" class="form-label">Nombre:</label>
        <input type="text" class="form-control" id="nombre" v-model="nombre" required pattern=".{5,15}">
      </div>
      <div class="mb-3">
        <label for="edad" class="form-label">Edad:</label>
        <input type="number" class="form-control" id="edad" v-model="edad" required min="18" max="120">
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Email:</label>
        <input type="email" class="form-control" id="email" v-model="email" required>
      </div>
      <button type="submit" class="btn btn-primary">Enviar</button>
    </form>
    <hr>
    <h3>Datos Ingresados:</h3>
    <table class="table">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Edad</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(data, index) in formDatas" :key="index">
          <td>{{ data.nombre }}</td>
          <td>{{ data.edad }}</td>
          <td>{{ data.email }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'FormularioUser',
  data() {
    return {
      nombre: '',
      edad: null,
      email: '',
      formDatas: []
    };
  },
  methods: {
    submitForm() {
      if (this.nombre && this.edad && this.email) {
        this.formDatas.push({ nombre: this.nombre, edad: this.edad, email: this.email });
        this.nombre = '';
        this.edad = null;
        this.email = '';
      } else {
        alert('Por favor, complete todos los campos.');
      }
    }
  }
}
</script>

<style scoped>

</style>