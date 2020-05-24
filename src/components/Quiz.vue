<template>
  <v-container>
    <h1>{{ quiz.title }}</h1>
    <v-card
      class="mx-auto mt-5"
      v-for="question in quiz.questions"
      :key="question.id"
    >
      <v-card-title>{{ question.question }}</v-card-title>
      <v-card-text>
        <ol type="a">
          <li
            v-for="answer in question.answers"
            :key="answer.id"
            class="body-1 my-2"
          >
            {{ answer.answer }}
            <v-icon v-if="answer.correct" color="pink">mdi-star</v-icon>
          </li>
        </ol>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'Quiz',
  computed: {
    quiz() {
      return this.$store.state.quiz;
    },
  },
};
</script>

<style></style>
