describe('A movie collection',function(){

    var fakeServer;

    beforeEach(function(){
        fakeServer=sinon.fakeServer.create();
        fakeServer.respondImmediately=true;
    })

    afterEach(function(){
        fakeServer.restore();
    })

    it('should exist',function(){
        expect(app.Collections.Movies).toBeDefined();
    })

    it('should contain movies',function(){
        var movies= new app.Collections.Movies(
            [
                FIXTURES.movies.noRestrictions,
                FIXTURES.movies.withComedy
            ]
        );
        expect(movies.length).toEqual(2);
        expect(movies.first() instanceof app.Models.Movie).toBeTruthy();
    })

    it('should give movie names',function(){
        var movies= new app.Collections.Movies([
            FIXTURES.movies.noRestrictions,
            FIXTURES.movies.withRomance
        ]);

        expect(movies.getMoviesNames()).toEqual(['My Korean Teacher','I Love You'])
    })

    it('return most recent values',function(){
        var movies= new app.Collections.Movies([
            FIXTURES.movies.noRestrictionsRecent,
            FIXTURES.movies.noRestrictions
        ]); 
        var newdate=movies.getNewFromName('My Korean Teacher').get('dateAdded');
        expect(newdate).toEqual(FIXTURES.movies.noRestrictionsRecent.dateAdded);
    })

    //Mocking AJAX with sinon.js
    it('should have a remote data source',function(){
        var movies= new app.Collections.Movies();
        expect(movies.url).toBeDefined();
    })

    //before refractor
    xit('should populate data from backend',function(){
        var movies= new app.Collections.Movies();
        var fakeServer=sinon.fakeServer.create();
        fakeServer.respondWith('/movies',['200',
            {'Content-Type':'application/json'},
            JSON.stringify(FIXTURES.movies.noRestrictions)]);
        movies.fetch();
        fakeServer.respond();
        
        expect(movies.length).toBeGreaterThan(0);
        fakeServer.restore();
    })

    //afterrefractor
    it('should populate data from backend',function(){
        var movies= new app.Collections.Movies();
        fakeServer.respondWith('/movies',FIXTURES.server.movies.ok);
        movies.fetch();

        expect(movies.length).toBeGreaterThan(0);
        fakeServer.restore();
    })
})