<template>
  <v-container>
    <v-form @submit.prevent="onFormSubmit">
      <v-card class="mx-auto mt-5" max-width="344">
        <v-card-title>Identification</v-card-title>
        <v-card-text>
          <v-text-field
            v-model="email"
            label="Email"
            type="email"
          ></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" type="submit">Login</v-btn>
        </v-card-actions>
      </v-card>
    </v-form>
  </v-container>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Login',
  data() {
    return {
      email: '',
    };
  },
  methods: {
    onFormSubmit() {
      axios
        .get(
          `http://127.0.0.1:3000/user?email=${encodeURIComponent(this.email)}`
        )
        .then((response) => {
          this.$store.commit('SET_USER', response.data);
          this.$router.replace({ name: 'Home' });
        });
    },
  },
};
</script>

<style></style>
