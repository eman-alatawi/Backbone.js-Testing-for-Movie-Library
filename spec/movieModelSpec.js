describe("A movie",function(){

    it ("Should exist",function(){
        expect(app.Models.Movie).toBeDefined();
    })

    it("should have some default values",function(){
        var movie=new app.Models.Movie();

        expect(movie.get("name")).toEqual("XYZ");
        expect(movie.get("rating")).toEqual(5);

        //check more default values
        expect(movie.get('types').length).toEqual(0);
        expect(movie.get('comments').length).toEqual(0);
        expect(movie.get('dateAdded')).toBeDefined();
    })

    //add more test cases
    //check with horror
    it('should identify if it has horror',function(){
        var noRestriction= new app.Models.Movie(FIXTURES.movies.noRestriction);

        var withHorror= new app.Models.Movie(FIXTURES.movies.withHorror);

        expect(noRestriction.containHorror()).toBeFalse();
        expect(withHorror.containHorror()).toBeTruthy();
    })

    //check with romance
    it('should identify if it has Romance',function(){
        var noRestriction= new app.Models.Movie(FIXTURES.movies.noRestriction);

        var withRomance= new app.Models.Movie(FIXTURES.movies.withRomance);

        expect(noRestriction.containRomance()).toBeFalse();
        expect(withRomance.containRomance()).toBeTruthy();
    })
    //check with comedy
    it('should identify if it has comedy',function(){
        var noRestriction= new app.Models.Movie(FIXTURES.movies.noRestriction);

        var withComedy= new app.Models.Movie(FIXTURES.movies.withComedy);

        expect(noRestriction.containComedy()).toBeFalse();
        expect(withComedy.containComedy()).toBeTruthy();
    })
})