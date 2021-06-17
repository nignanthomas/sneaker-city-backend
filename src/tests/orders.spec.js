import chai from 'chai';
import chaiHttp from 'chai-http';
import { describe, it } from 'mocha';
import app from '../index';

chai.should();
chai.use(chaiHttp);

describe('Orders Tests', () => {
  it('it should retrieve orders ', done => {
    chai.request(app)
      .get('/api/orders')
      .end((err, res) => {
        res.should.have.property('status').eql(200);
        res.body.data.should.be.a('array');
        done();
      });
  });

  it('it should retrieve one order ', done => {
    chai.request(app)
      .get('/api/orders/1')
      .end((err, res) => {
        res.should.have.property('status').eql(200);
        res.body.data.should.be.a('object');
        res.body.data.payment.should.have.property('total').eql(150);
        done();
      });
  });

  it('it should create an order ', done => {
    chai.request(app)
      .post('/api/orders')
      .send({
        userId: 1,
        order: [],
        deliveryDetails: {
          firstName: 'Tom',
          lastName: 'Gedusor',
          city: 'Kigali',
          address: 'KK 7 Ave, no 4',
        },
        deliveryMethod: {
          name: 'Express',
          description: 'Delivery the same day',
          price: 5,
        },
        payment: {
          total: 299,
        },
      })
      .end((err, res) => {
        res.should.have.property('status').eql(201);
        res.body.data.should.be.a('object');
        res.body.data.payment.should.have.property('total').eql(299);
        done();
      });
  });
});
