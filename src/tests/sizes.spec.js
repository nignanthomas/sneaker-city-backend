import chai from 'chai';
import chaiHttp from 'chai-http';
import { describe, it } from 'mocha';
import app from '../index';

chai.should();
chai.use(chaiHttp);

describe('Sizes Tesst', () => {
  it('it should retrieve products ', done => {
    chai.request(app)
      .get('/api/sizes')
      .end((err, res) => {
        res.should.have.property('status').eql(200);
        res.body.data.should.be.a('array');
        done();
      });
  });
});
