import chai from 'chai';
import chaiHttp from 'chai-http';
import sinon from 'sinon';
import UserModel from './models/user.model';
import app from './server';
   
chai.use(chaiHttp);
const expect = chai.expect;

describe('GET /users', () => {
  it('should return a list of users with filtered fields', async () => {
     const mockUsers = [
       {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@example.com',
        password: "12345"
      },
      
    ];

    sinon.stub(UserModel, 'find').resolves(mockUsers);

    const res = await chai.request(app).get('/users');

    expect(res.status).to.equal(200);

    expect(res.body).to.be.an('array');
    expect(res.body[0]).to.have.property('firstName');
    expect(res.body[0]).to.have.property('lastName');
    expect(res.body[0]).to.have.property('email');
  });

 
});
 