import express from 'express';
import bodyParser from 'body-parser';
import {addMockFunctionsToSchema, removeMockFunctionsFromSchema} from 'lunar-core';
import deserialize from './deserialize';

export const createRouter = ({mocks, schema}) => {
  const router = express.Router();

  const currentMocks = [mocks];

  router.use(bodyParser.json());

  router.post('/reset', (req, res) => {
    currentMocks.splice(1, currentMocks.length);

    removeMockFunctionsFromSchema({schema});

    addMockFunctionsToSchema({schema, mocks});

    res.sendStatus(200);
  });

  router.post('/mock', (req, res) => {
    currentMocks.push(deserialize(req.body));

    addMockFunctionsToSchema({schema, mocks: currentMocks});

    res.sendStatus(200);
  });

  return router;
};
