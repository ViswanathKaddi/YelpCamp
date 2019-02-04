var chai = require('chai'), chaiHttp = require('chai-http');

chai.use(chaiHttp);

var expect = chai.expect;

const userCredentials = {
    name:'Rajath',
    email: 'rajathg@gmail.com',
    password: 'abcdef'
    
};


it("Should check credentials and return status code", function(done){
    chai.request('http://localhost:3001')
    .post('/register')
    .send(userCredentials)
    .end(function (err, res) {
        expect(res).to.have.status(200);
        done();
    });
})