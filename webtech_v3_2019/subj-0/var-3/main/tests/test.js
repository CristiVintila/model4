// Import the dependencies for testing
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../server');

// Configure chai
chai.use(chaiHttp);
chai.use(require('chai-json-schema'));
chai.should();

let schema = {
    title: 'Account schema',
    type: 'object',
    required: ['accountHolder', 'currentBalance', 'iban', 'currency', 'transactions'],
    properties: {
        accountHolder: {
            type: 'string'
        },
        currentBalance: {
            type: 'number'
        },
        iban: {
            type: 'string'
        },
        currency: {
            type: 'string'
        },
        transactions: {
            type: 'array',
            minItems: 2,
            items: {
                type: 'object',
                required: ['amount', 'transactionType', 'beneficiaryName', 'approved'],
                properties: {
                    amount: {
                        type: 'number'
                    },
                    transactionType: {
                        type: 'string'
                    },
                    beneficiaryName: {
                        type: 'string'
                    },
                    approved: {
                        type: 'boolean'
                    }
                }
            }
        }
    }
}

describe("JSON", () => {
    describe("GET /account.json", () => {
        it('should return a valid json', (done) => {
            chai.request(app)
                 .get('/account.json')
                 .end((err, res) => {
                     res.should.have.status(200);
                     res.body.should.be.a('object');
                     chai.assert.jsonSchema(res.body, schema)
                     done();
                  });
        })
    })
});