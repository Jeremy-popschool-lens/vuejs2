new Vue ({

  el: '#app',
  data: {

    Message: 'Salut les gens !',
    link: 'dev-en-herbe.fr',
    success: true,
    members: ['Jérémy', 'Arnaud', 'Jordy', 'Romain', 'Clément']

  },

  methods: {
    close: function() {
      this.success = false
    }
  }


})
