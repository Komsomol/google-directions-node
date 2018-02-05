//jshint esversion:6

var assert = require('assert');
var expect = require('chai').expect;
var should = require('chai').should();

var app = require('./../index.js');

// check API key is present
describe('Directions API', function () {
	describe('Testing API Key', function (){
		it('API key should be present, a string and 39 chars long', function (){
			expect(app.API_KEY).to.be.a('string');
			expect(app.API_KEY).to.have.lengthOf(39);
		});
	});
});

// Check a call, inspect data object against known LDN-MCH route
describe('Directions API', function (){
	describe('Testing Directions', function (){

		let origin = 'London, UK';
		let dest = 'Manchester, UK';

		it('Check London to Manchester', function (done){
			app.getTime(origin, dest).then((result) =>{
				done();
				should.exist(result);
				expect(result.status).to.equal('OK');
				expect(result.origin).to.equal(origin);
				expect(result.destination).to.equal(dest);
				console.dir(result,{ depth: null, colors: true });
			}).catch((err) =>{
				console.log(err);
			});
		});
	});
});


// Check a call, inspect data object against known LDN-MCH route
describe('Directions API', function (){
	describe('Testing Directions', function (){

		let origin = 'Oxford Street, Soho, London W1';
		let dest = 'Bayswater Rd, London W2';

		it('Check Oxford to Marble Arch', function (done){
			app.getTime(origin, dest).then((result) =>{
				done();
				should.exist(result);
				expect(result.status).to.equal('OK');
				console.dir(result,{ depth: null, colors: true });
			}).catch((err) =>{
				console.log(err);
			});
		});
	});
});


