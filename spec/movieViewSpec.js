describe("A movie view", function () {
  it("should exist", function () {
    expect(app.Views.Movie).toBeDefined();

    expect($("#movie-tmpl")).toBeInDOM();
  });

  it("should have a template", function () {
    var movieModel = new app.Models.Movie(FIXTURES.movies.noRestrictions);

    var movieView = new app.Views.Movie({
      model: movieModel,
    });

    expect(movieView.template).toBeDefined();
  });

  describe("A rendered view", function () {
    var movieView, movieModel;

    beforeEach(function () {
      movieModel = new app.Models.Movie(FIXTURES.movies.noRestrictions);

      movieView = new app.Views.Movie({
        model: movieModel,
      });

      movieView.render();
    });

    it("should have a title", function () {
      expect(movieView.$(".movie-name")).toHaveText(movieModel.get("name"));
    });

    it("should have a rating", function () {
      expect(movieView.$(".rating")).toHaveText(movieModel.get("rating"));
    });

    it("should list types", function () {
      var typesEl = movieView.$(".type").first();

      var type = movieModel.get("types")[0];

      var expectedString = type.genre;

      expect(typesEl).toHaveText(expectedString);
    });

    it("should list comments", function () {
      var commentEl = movieView.$(".comment").first();

      var comment = movieModel.get("comments")[0];

      expect(commentEl).toHaveText(comment);
    });
  });

});
