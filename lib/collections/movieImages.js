movieImages = new Mongo.Collection("movieImages")
movieImages.allow({
    insert: function () {
        return false;
    }, update: function () {
        return false;
    }, remove: function () {
        return false;
    }
});