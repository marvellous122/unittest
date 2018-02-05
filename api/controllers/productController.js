'use strict';

var models  = require('../models');

exports.list_all_products = function(req, res) {
	models.Product.findAll()
	.then(products => {
		res.json(products);
	})
	.catch(err => {
		res.send(err);
	});
}

exports.create_a_product = function(req, res) {
	var new_product = new models.Product(req.query);
	new_product.save()
	.then(product => {
		res.json(product);
	})
	.catch(err => {
		res.send(err);
	});
}

exports.read_a_product = function(req, res) {
	console.log('Param: ', req.params);
	models.Product.findById(req.params.productSku)
	.then(product => {
		res.json(product);
	})
	.catch(err => {
		res.send(err);
	});
}

exports.update_a_product = function(req, res) {
	models.Product.update(req.query, {where: {sku: req.params.productSku}})
	.then(product => {
		res.json(product);
	})
	.catch(err => {
		res.send(err);
	});
}

exports.delete_a_product = function (req, res) {
	models.Product.destroy({where: {sku: req.params.productSku}})
	.then(product => {
		res.json(product);
	})
	.catch(err => {
		res.send(err);
	});
}