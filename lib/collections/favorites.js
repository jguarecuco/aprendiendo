favorites = new Mongo.Collection("favorites")
favorites.allow({
    insert: function () {
        return false;
    }, update: function () {
        return false;
    }, remove: function () {
        return false;
    }
});