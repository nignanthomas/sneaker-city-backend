import chai from 'chai';
import chaiHttp from 'chai-http';
import { describe, it } from 'mocha';
import app from '../index';

chai.should();
chai.use(chaiHttp);

describe('Users Tests', () => {
  it('it should signup a user ', done => {
    chai.request(app)
      .post('/api/users/signup')
      .send({
        firstName: 'Johnny',
        lastName: 'Blazer',
        city: 'Kigali',
        email: 'johnnyblazer@email.com',
        password: 'password',
      })
      .end((err, res) => {
        console.log('res.error :>> ', res.error);
        res.should.have.property('status').eql(201);
        res.body.data.should.have.property('email').eql('johnnyblazer@email.com');
        done();
      });
  });

  it('it should login a user ', done => {
    chai.request(app)
      .post('/api/users/login')
      .send({
        email: 'johnnyblazer@email.com',
        password: 'password',
      })
      .end((err, res) => {
        res.should.have.property('status').eql(200);
        res.body.data.user.should.have.property('email').eql('johnnyblazer@email.com');
        done();
      });
  });
});
