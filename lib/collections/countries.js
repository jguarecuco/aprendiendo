countries = new Mongo.Collection("countries")
countries.allow({
    insert: function () {
        return false;
    }, update: function () {
        return false;
    }, remove: function () {
        return false;
    }
});