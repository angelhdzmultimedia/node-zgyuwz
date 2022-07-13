<script lang="ts">
import { extend } from 'vee-validate';
import { required } from 'vee-validate/dist/rules';
export default {
  name: 'App',
  components: {},
  mounted() {
    extend('required', {
      ...required,
      message: 'Nombre es requerido.',
    });

    extend('edad-max', {
      validate: (value) => {
        return +this.max > +this.min;
      },
      message: 'Edad máxima debe ser mayor a edad mínima.',
    });

    extend('edad-min', {
      validate: (value) => {
        return +this.min < +this.max;
      },
      message: 'Edad mínima debe ser menor a edad máxima.',
    });
  },
  data() {
    return {
      max: 100,
      min: 1,
      formCategory: {
        nombre: null,
      },
    };
  },
  methods: {},
};
</script>

<template>
  <div>
    <form class="col-6">
      <ValidationObserver v-slot="{ invalid }">
        <ValidationProvider
          class="d-flex flex-column"
          rules="required"
          v-slot="{ errors }"
        >
          <label for="nombre"
            >Nombre
            <span class="text-danger">*</span>
          </label>
          <input
            type="text"
            v-model="formCategory.nombre"
            placeholder="Nombre"
          />
          <span class="text-danger" v-for="error in errors">
            {{ error }}
          </span>
        </ValidationProvider>
        <ValidationProvider
          class="d-flex flex-column"
          rules="edad-min"
          v-slot="{ errors }"
        >
          <label for="edad-min"
            >Edad Mínima
            <span class="text-danger">*</span>
          </label>
          <input
            min="1"
            type="number"
            v-model="min"
            placeholder="Edad Mínima"
          />
          <span class="text-danger" v-for="error in errors">
            {{ error }}
          </span>
        </ValidationProvider>
        <ValidationProvider
          alidationProvider
          class="d-flex flex-column"
          rules="edad-max"
          v-slot="{ errors }"
        >
          <label for="edad-max"
            >Edad Máxima
            <span class="text-danger">*</span>
          </label>
          <input
            min="1"
            type="number"
            v-model="max"
            placeholder="Edad Máxima"
          />
          <span class="text-danger" v-for="error in errors">
            {{ error }}
          </span>
        </ValidationProvider>
        <button :disabled="invalid" class="btn btn-primary">Actualizar</button>
      </ValidationObserver>
    </form>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
