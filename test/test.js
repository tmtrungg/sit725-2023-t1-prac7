var expect  = require("chai").expect;
var request = require("request");
var url = "http://localhost:3000/api/cats"; 
let cat = {
    title: "kitten-u",
    image: "image-u",
    link: "link-u",
    description: "des-u"
};

describe("GET request test", function() {
    it("returns status 200 to check if api works", function(done) {
        request(url, function(error, response, body) {
            expect(response.statusCode).to.equal(200);
            done();
        });
    });

    it("return data from Database", function (done){
        request(url, function(error, response, body) {
            body = JSON.parse(body);
            expect(body.data).to.be.a('array');
            done();
        });
    });
});

describe("POST request test", function() {
    it("insert cat testing", function(done) {
        request.post({url:url, form:cat}, function(error, response, body) {
            body = JSON.parse(body);
            expect(body.message).to.contain('added');
            done();
        });
    });
});

describe("DELETE request test", function() {
    it("delete a cat from database", function(done) {
        request.delete({url:url, form:cat}, function(error, response, body) {
            body = JSON.parse(body);
            expect(body.message).to.contain('removed');
            done();
        });
    });
});