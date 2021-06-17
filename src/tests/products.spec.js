import chai from 'chai';
import chaiHttp from 'chai-http';
import { describe, it } from 'mocha';
import app from '../index';

chai.should();
chai.use(chaiHttp);

describe('Products Tests', () => {
  it('it should retrieve products ', done => {
    chai.request(app)
      .get('/api/products')
      .end((err, res) => {
        res.should.have.property('status').eql(200);
        res.body.data.should.be.a('array');
        done();
      });
  });

  it('it should retrieve one product ', done => {
    chai.request(app)
      .get('/api/products/1')
      .end((err, res) => {
        res.should.have.property('status').eql(200);
        res.body.data.should.be.a('object');
        res.body.data.should.have.property('brand').eql('Nike');
        done();
      });
  });

  it('it should retrieve latest products ', done => {
    chai.request(app)
      .get('/api/products/latest')
      .end((err, res) => {
        res.should.have.property('status').eql(200);
        res.body.data.should.be.a('array');
        res.body.data.length.should.be.lte(10);
        done();
      });
  });

  it('it should retrieve men products ', done => {
    chai.request(app)
      .get('/api/products/category/1')
      .end((err, res) => {
        res.should.have.property('status').eql(200);
        res.body.data.should.be.a('array');
        res.body.data[0].should.have.property('categoryId').eql(1);
        done();
      });
  });

  it('it should retrieve womenmen products ', done => {
    chai.request(app)
      .get('/api/products/category/2')
      .end((err, res) => {
        res.should.have.property('status').eql(200);
        res.body.data.should.be.a('array');
        res.body.data[0].should.have.property('categoryId').eql(2);
        done();
      });
  });
});
