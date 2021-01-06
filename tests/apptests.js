const request = require("supertest")

describe("Begin testing", function (){
    var server
    beforeEach(function(){
        delete require.cache[require.resolve("../app")]
        server = require("../app")
    })
    afterEach(function(done){
        server.close(done)
    })
    it("/shorten", function testShorten(done){
        request(server)
            .get('/shorten?url=https://www.google.com&name=foobar')
            .expect("foobar")
            .expect(200, done)
    })
    it("/:shortcode", function testShortcode(done){
        request(server)
            .get('/foobar')
            .expect(200, done)
    })
    it("/:shortcode/stats", function testStats(done){
        request(server)
            .get('/foobar/stats')
            .expect("Error: Shortcode does not exist.")
            .expect(200, done)
    })
})