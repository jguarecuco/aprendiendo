movieDetails = new Mongo.Collection("movieDetails")
movieDetails.allow({
    insert: function () {
        return false;
    }, update: function () {
        return false;
    }, remove: function () {
        return false;
    }
});