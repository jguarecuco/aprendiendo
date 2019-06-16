movieYTS = new Mongo.Collection("movieYTS")
movieYTS.allow({
    insert: function () {
        return false;
    }, update: function () {
        return false;
    }, remove: function () {
        return false;
    }
});