movieTranslations = new Mongo.Collection("movieTranslations")
movieTranslations.allow({
    insert: function () {
        return false;
    }, update: function () {
        return false;
    }, remove: function () {
        return false;
    }
});