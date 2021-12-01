describe('A movie view', function () {

    it('should exist', function () {

        expect(app.Views.Movie).toBeDefined();

        expect($('#movie-tmpl')).toBeInDOM();

    });



    it('should have a template', function () {

        var movieModel = new app.Models.Movie(FIXTURES.movies.noRestrictions);


        var movieView = new app.Views.Movie({

            model: movieModel

        });


        expect(movieView.template).toBeDefined();

    });



    describe('A rendered view', function () {

        var movieView, movieModel;


        beforeEach(function () {

            movieModel = new app.Models.Movie(FIXTURES.movies.noRestrictions);

            movieView = new app.Views.Movie({

                model: movieModel

            });


            movieView.render();

        });



        it('should have a title', function () {

            expect(movieView.$('.movie-name')).toHaveText(movieModel.get('name'));

        });



        it('should have a rating', function () {

            expect(movieView.$('.rating')).toHaveText(movieModel.get('rating'));

        });



        it('should list types', function () {

            var typesEl = movieView.$('.type').first();

            var type = movieModel.get('types')[0];

            var expectedString = type.genre


            expect(typesEl).toHaveText(expectedString);

        });



        it('should list comments', function () {

            var commentEl = movieView.$('.comment').first();

            var comment = movieModel.get('comments')[0];


            expect(commentEl).toHaveText(comment);

        });

    });



    // describe('A notes section', function () {

    //     var movieModel;

    //     var movieView;


    //     beforeEach(function () {

    //         movieModel = new app.Models.Recipe(FIXTURES.movies.noRestrictions);

    //         movieView = new app.Views.Movie({

    //             model: movieModel

    //         });

    //         movieView.render();

    //         movieView.$el.appendTo('body');

    //     });



    //     afterEach(function () {

    //         movieView.$el.remove();

    //     });



    //     it('should have an add notes button', function () {

    //         expect(movieView.$('.add-note')).toBeVisible();

    //     });



    //     it('should reveal a notes section when the button is clicked', function () {

    //         expect(movieView.$('.note-area')).not.toBeVisible();

    //         movieView.$('.add-note').click();


    //         // View after clicking add note


    //         expect(movieView.$('.note-area')).toBeVisible();

    //         expect(movieView.$('.add-note')).not.toBeVisible();

    //         expect(movieView.$('.save-note')).toBeVisible();

    //         expect(movieView.$('.cancel-note')).toBeVisible();

    //     });



    //     it('should return to it\'s normal state when cancelled', function () {

    //         movieView.$('.add-note').click();


    //         movieView.$('.cancel-note').click();



    //         // View after cancelling

    //         expect(movieView.$('.note-area')).not.toBeVisible();

    //         expect(movieView.$('.save-note')).not.toBeVisible();

    //         expect(movieView.$('.cancel-note')).not.toBeVisible();

    //         expect(movieView.$('.add-note')).toBeVisible();

    //     });



    //     it('should show a saved note', function () {

    //         var noteStr = 'Needs some spice. Maybe red pepper flakes when adding tomatoes?';


    //         // Simulate UI interactions

    //         movieView.$('.add-note').click();

    //         movieView.$('.note-area').val(noteStr);

    //         movieView.$('.save-note').click();


    //         // View after saving

    //         expect(movieView.$('.note-area')).not.toBeVisible();

    //         expect(movieView.$('.save-note')).not.toBeVisible();

    //         expect(movieView.$('.cancel-note')).not.toBeVisible();

    //         expect(movieView.$('.add-note')).not.toBeVisible();

    //         expect(movieView.$('.note')).toBeVisible();


    //         // Verify model has data

    //         expect(movieModel.get('note')).toBe(noteStr);


    //         // Verify the view

    //         expect(movieView.$('.note')).toHaveText(noteStr);

    //     });

    // });

});
