var app = window.app || {}
app.Routers = app.Routers || {}

app.Routers.MovieRouter = Backbone.Router.extend({
    routes:{
        'movies/:id': 'openMovie',
        'movies/:id/variation': 'createVariation'

    },
    openMovie: function(){

    },
    createVariation: function(){

    }
})