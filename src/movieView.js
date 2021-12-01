var app = window.app || {};

app.Views = app.Views || {};


app.Views.Movie = Backbone.View.extend({

    template: Handlebars.compile($('#movie-tmpl').html()),

    initialize: function () {

        if (!this.model) {

            this.model = new app.Models.Movie();

        }

    },

    render: function () {

        var data = this.model.toJSON();


        this.$el.html(this.template(data));

    },




});

