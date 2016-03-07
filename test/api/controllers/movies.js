var should = require('should');
var request = require('supertest');
var server = require('../../../app');

describe('controllers', function () {

    describe('movies', function () {

        describe('GET /movies', function () {

            it('should return all movies', function (done) {

                request(server)
                    .get('/movies')
                    .set('Accept', 'application/json')
                    .expect('Content-Type', /json/)
                    .expect(200)
                    .end(function (err, res) {
                        should.not.exist(err);

                        res.body.should.have.length(5);

                        done();
                    });
            });
        });

        describe('POST and DELETE /movies', function () {

            it('create and delete movie', function (done) {

                request(server)
                    .post('/movies')
                    .send({title:"Godfather 2", year:1974})
                    .set('Accept', 'application/json')
                    .expect('Content-Type', /json/)
                    .expect(200)
                    .end(function (err, res) {

                        should.not.exist(err);

                        res.body.title.should.eql("Godfather 2");

                        request(server)
                            .get('/movies')
                            .set('Accept', 'application/json')
                            .expect('Content-Type', /json/)
                            .expect(200)
                            .end(function (err, res) {
                                should.not.exist(err);

                                res.body.should.have.length(6);

                                request(server)
                                    .delete('/movies/' + res.body._id)
                                    .expect(200)
                                    .end(function (err, res) {
                                        should.not.exist(err);

                                        done();
                                    });
                            });


                    });
            });
        });

    });

});
