export default {
    state: () => ({
        posts: [],
        selectedPost: {}
    }),
    mutations: {
        updatePosts(state, posts) {
            state.posts = posts;
        },
        updateSelectedPost(state, post) {
            state.selectedPost = post;
        }
    },
    actions: {
        deletePost({ state, commit }, postId) {
            return this.$axios.$delete(`/posts/${postId}`).then(() => {
                commit('updatePosts', state.posts.filter(post => post.id != postId))
            })
        },
    }
}