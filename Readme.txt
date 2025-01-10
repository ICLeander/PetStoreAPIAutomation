This project implements automated API testing for the PetStore API using TypeScript and Playwright. The provided files  are part of a modular structure that improves maintainability and scalability of tests.

Files

petstore.api.ts
This file contains utility functions for interacting with the PetStore API endpoints, including creating, retrieving, updating, ordering, and deleting pets. These functions centralize API request logic to avoid duplication in individual test files. The tests have checkpoints for status and data returned by the endpoints. The tests are created in a sequence to manage test data without any manual intervention.

constants.ts
Defines reusable constants such as API base URLs, common headers, and test data defaults.

api-utils.ts
This file is the repository of all the actions to perform using the endpoints.

data.ts
This file contains information about the data payloads required to complete the requests.

Execution of tests

To successfully run these tests you need to open the folder in VC code and execute the following command

npm  install

npx Playwright test