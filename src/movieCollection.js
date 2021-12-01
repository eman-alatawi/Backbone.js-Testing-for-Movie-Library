var app=window.app || {};
app.Collections=app.Collections || {};

app.Collections.Movies=Backbone.Collection.extend({
    model: app.Models.Movie,
    comparator:'dateAdded',
    url:'/movies',
    //functions
    getMoviesNames:function(){
        return _.unique(this.pluck('name'));
    },
    getNewFromName:function(movieName){
        var variation= this.where({
            name:movieName
        })
        return _.last(variation);
    }
});