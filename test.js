var expect = require('chai').expect
var app      = require('./server');
var request  = require('supertest');

describe('models/task', function () {
  before(function () {
    return require('./api/models').sequelize.sync();
  });

  beforeEach(function () {
    this.Product = require('./api/models').Product;
    this.Product.destroy({where:{}});
  });

  describe('create', function () {
    it('creates a task', function (done) {
      this.Product.create({ name: 'test2', sku: 'test8', cost: 10, freight: 10 }).bind(this).then(function (product) {
        expect(product.name).to.equal('test2');
        done();
      });
    });
  });
});

describe('user creation page', function () {
  it('loads correctly', function (done) {
    request(app).get('/').expect(200, done);
  });
});