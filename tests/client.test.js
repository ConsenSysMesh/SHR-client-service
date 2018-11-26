const chai = require('chai');
const chaiHttp = require('chai-http');
const request = require('request-promise');
const cheerio = require('cheerio');
const should = chai.should();

const server = 'http://api:3000';
chai.use(chaiHttp);

/*
  * Test the /GET route
  */
 describe('/GET client', () => {
  it('it should GET all the clients', (done) => {
    chai.request(server)
        .get('/client')
        .end((err, res) => {
              res.should.have.status(200);
              res.body.should.be.a('array');
              res.body.length.should.be.eql(0);
          done();
        });
  });
});