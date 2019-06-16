chapters = new Mongo.Collection("chapters");
chapters.allow({
    insert: function () {
        return false;
    }, update: function () {
        return false;
    }, remove: function () {
        return false;
    }
});