movieVideos = new Mongo.Collection("movieVideos")
movieVideos.allow({
    insert: function () {
        return false;
    }, update: function () {
        return false;
    }, remove: function () {
        return false;
    }
});