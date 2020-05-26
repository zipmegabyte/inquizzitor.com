<template>
  <v-container>
    <v-card class="mx-auto mt-5">
      <v-card-title>My Quizzes</v-card-title>
      <v-card-text>
        <v-list>
          <v-list-item
            v-for="quiz in quizzes"
            :key="quiz.id"
            @click="onListItemClick(quiz.id)"
          >
            <v-list-item-content>
              <v-list-item-title v-text="quiz.title" />
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card-text>
      <v-btn
        fab
        color="cyan accent-2"
        bottom
        right
        absolute
        @click="dialog = !dialog"
      >
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'Home',
  computed: {
    quizzes() {
      return this.$store.state.user.quizzes;
    },
  },
  methods: {
    onListItemClick(quizId) {
      this.$router.push({ name: 'Quiz', params: { id: quizId } });
    },
  },
};
</script>

<style></style>
