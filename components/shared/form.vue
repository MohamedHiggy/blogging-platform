<template>
  <v-form v-model="valid" @submit.prevent="sendData">
    <v-container>
      <v-row>
        <v-col cols="12" md="12">
          <v-text-field
            label="Title"
            v-model="form.title"
            :rules="rules.title"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="12">
          <v-textarea
            label="Description"
            v-model="form.body"
            auto-grow
            :rules="rules.body"
            required
          ></v-textarea>
        </v-col>
        <v-btn
          type="submit"
          :loading="addPostLoading"
          color="deep-purple accent-4"
          :dark="valid"
          :disabled="!valid"
          >{{ btnText }}</v-btn
        >
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
export default {
  name: "Form",
  data() {
    return {
      valid: false,
      addPostLoading: false,
      form: {
        title: "",
        body: ""
      },
      rules: {
        title: [
          v => !!v || "Title is required",
          v => v.length >= 15 || "Title must be at least 15 characters"
        ],
        body: [
          v => !!v || "Body is required",
          v => v.length >= 20 || "Body must be at least 20 characters"
        ]
      }
    };
  },
  computed: {
    postId() {
      return +this.$route.params.id;
    },
    btnText() {
      return this.postId ? "Edit" : "submit";
    }
  },
  mounted() {
    this.postId && this.getPost();
  },
  methods: {
    sendData() {
      this.addPostLoading = true;
      const action  = this.postId 
      ? 
      {name: "editPost", payload: {...this.form, id: this.postId}} 
      :    
      {name: "addPost", payload: this.form}
      this.$store
        .dispatch(action.name, action.payload)
        .then(() => {
          this.$router.push("/admin");
        })
        .finally(() => {
          this.addPostLoading = false;
        });
    },
    getPost() {
      this.$store.dispatch("getPost", this.postId).then(post => {
        (this.form.title = post.title), (this.form.body = post.body);
      });
    }
  }
};
</script>
