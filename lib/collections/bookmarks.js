bookmarks = new Mongo.Collection("bookmarks")
bookmarks.allow({
    insert: function () {
        return false;
    }, update: function () {
        return false;
    }, remove: function () {
        return false;
    }
});