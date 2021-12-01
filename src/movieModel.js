var app= window.app || {};

app.Models=app.Models || {};

app.Models.Movie=Backbone.Model.extend({

    defaults: function(){
        return{
            name:"XYZ",
            rating:5,
            comments:[],
            types:[],
            dateAdded:Date.now()
        }
    },

    containHorror:function(){
        return this.checkForMovieType('isHorror');
    },
    containRomance:function(){
        return this.checkForMovieType('isRomance');
    },
    containComedy:function(){
        return this.checkForMovieType('isComedy');
    },

    checkForMovieType:function(propertyName){
        var types=this.get('types');

        for(let i=0;i<types.length;i++)
        {
                if(types[i][propertyName]){
                    return true;
                }
        }
        return false;
    }
});