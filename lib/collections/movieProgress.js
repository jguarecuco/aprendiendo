movieProgress = new Mongo.Collection("movieProgress")
movieProgress.allow({
    insert: function () {
        return false;
    }, update: function () {
        return false;
    }, remove: function () {
        return false;
    }
});