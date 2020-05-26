<template>
  <v-container>
    <v-text-field label="Title" single-line solo>{{ quiz.title }}</v-text-field>
  </v-container>
</template>

<script>
export default {
  name: 'QuizEdit',
  props: {
    quiz: {
      type: Object,
      default() {
        return {
          title: '',
          questions: [],
        };
      },
    },
  },
};
</script>

<style></style>
