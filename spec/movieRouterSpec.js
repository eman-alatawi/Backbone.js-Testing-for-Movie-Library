describe('The application router', function(){
    var router;

    var routerSetup = function(){
        router = new app.Routers.MovieRouter();
        Backbone.history.start();
    }

    // beforeEach(function(){
    //     routerSetup()
    // })

    afterEach(function(){
        Backbone.history.stop()
    })

    it('should navigate to a movie by Id', function(){
        var routerSpy = spyOn(app.Routers.MovieRouter.prototype, 'openMovie')
        routerSetup()

        router.navigate('movies/3', {trigger: true})
        expect(routerSpy).toHaveBeenCalled()
        expect(routerSpy).toHaveBeenCalledWith('3', null)

    })

    var spyAndSetup = function(spyConfig){
        for(var method in spyConfig){
            spyOn(spyConfig[method], method)
        }

        routerSetup();
    }

    it('should create another variation', function(){
        spyAndSetup({'createVariation':app.Routers.MovieRouter.prototype})
        router.navigate('movies/3/variation', {trigger: true})

        expect(router.createVariation).toHaveBeenCalled()
        expect(router.createVariation).toHaveBeenCalledWith('3', null)
    })


})