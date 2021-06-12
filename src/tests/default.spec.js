import chai from 'chai';
import chaiHttp from 'chai-http';
import { describe, it } from 'mocha';
import app from '../index';


chai.should();
chai.use(chaiHttp);

describe('router test', () => {
  it('it should display welcome message ', done => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        res.should.have.property('status').eql(200);
        res.body.should.have.property('message').eql('Welcome to Sneaker City!');
        done();
      });
  });

  it('it should test wrong routes ', done => {
    chai.request(app)
      .get('/pi')
      .end((err, res) => {
        res.should.have.property('status').eql(404);
        res.body.should.have.property('message').eql('Sorry this route does not exist !');
        done();
      });
  });
});
