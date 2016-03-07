var should = require('should');
var request = require('supertest');
var server = require('../../../app');

describe('controllers', function() {

  describe('actors', function() {

    describe('GET /actors', function() {

      it('should return all actors', function(done) {

        request(server)
          .get('/actors')
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .end(function(err, res) {
            should.not.exist(err);

            res.body.should.have.length(8);

            done();
          });
      });
    });

  });

});
