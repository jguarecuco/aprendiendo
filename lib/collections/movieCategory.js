movieCategory = new Mongo.Collection("movieCategory")
movieCategory.allow({
    insert: function () {
        return false;
    }, update: function () {
        return false;
    }, remove: function () {
        return false;
    }
});