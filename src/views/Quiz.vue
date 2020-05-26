<template>
  <v-container v-if="quiz">
    <div class="d-flex">
      <h1 class="flex-grow-1">{{ quiz.title }}</h1>
      <v-btn color="primary" @click="showPartyInviteDialog = true">
        Create Party!
      </v-btn>
    </div>
    <v-card
      class="mx-auto mt-5"
      v-for="question in quiz.questions"
      :key="question.id"
    >
      <v-card-title>{{ question.question }}</v-card-title>
      <v-card-text>
        <ol type="a" v-if="question.answers.length">
          <li
            v-for="answer in question.answers"
            :key="answer.id"
            class="body-1 my-2"
          >
            {{ answer.answer }}
            <v-icon v-if="answer.correct" color="pink">mdi-star</v-icon>
          </li>
        </ol>
        <p v-else class="body-1 my-2 text-center">
          &lt;&lt; Freeform answer &gt;&gt;
        </p>
      </v-card-text>
    </v-card>
    <v-dialog v-model="showPartyInviteDialog">
      <PartyInvite />
    </v-dialog>
  </v-container>
</template>

<script>
import axios from 'axios';
import PartyInvite from '../components/PartyInvite';

export default {
  name: 'Quiz',
  components: {
    PartyInvite,
  },
  props: {
    id: String,
  },
  data() {
    return {
      quiz: undefined,
      showPartyInviteDialog: false,
    };
  },
  created() {
    // this.$store.dispatch('loadQuiz', this.id);
    axios
      .get(`http://127.0.0.1:3000/quizzes/${this.id}`)
      .then((response) => (this.quiz = response.data));
  },
};
</script>

<style></style>
