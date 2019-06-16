movieCredits = new Mongo.Collection("movieCredits")
movieCredits.allow({
    insert: function () {
        return false;
    }, update: function () {
        return false;
    }, remove: function () {
        return false;
    }
});