 What is a JWT?
A JWT (JSON Web Token) is a compact, URL-safe token used to securely transmit information between parties as a JSON object. It is commonly used for authentication and authorization.

 What is the signature portion of the JWT? What does it do?
The signature is the third part of a JWT and is used to verify the integrity of the token and ensure it hasn't been tampered with. It's created by combining the header and payload, then signing them with a secret key using an algorithm like HMAC SHA256.

 If a JWT is intercepted, can the attacker see what's inside the payload?
Yes. JWTs are not encrypted by default—they are only base64-encoded, so anyone who intercepts it can read the payload. However, they cannot modify it without invalidating the signature unless they have the secret.

 How can you implement authentication with a JWT? Describe how it works at a high level.
Login: User submits credentials (e.g., username/password).

Generate Token: Server verifies credentials and returns a JWT with a payload (e.g., user ID).

Store Token: Client stores the token (usually in localStorage or cookies).

Access Protected Routes: Client includes the JWT in Authorization headers for API requests.

Verify Token: Server checks the token’s signature and payload to grant or deny access.

 Compare and contrast unit, integration, and end-to-end tests.
Unit Tests: Test individual functions/components in isolation (e.g., add(x, y) returns x+y).

Integration Tests: Test interactions between modules (e.g., API route calling DB).

End-to-End Tests (E2E): Test the entire application flow from the user's perspective (e.g., logging in through UI).

 What is a mock? What are some things you would mock?
A mock is a simulated object or function that mimics real dependencies.
You might mock:

API calls

Database queries

External services (like email or Stripe)

Time functions

 What is continuous integration?
Continuous Integration (CI) is a development practice where developers frequently merge code into a shared repository, often with automated tests and builds triggered to catch issues early.

 What is an environment variable and what are they used for?
An environment variable is a key-value pair in the environment used to store configuration data like:

API keys

Database URLs

Secret keys
They help keep sensitive or environment-specific data out of source code.

 What is TDD? What are some benefits and drawbacks?
Test-Driven Development (TDD) means writing tests before writing the code that satisfies them.
Benefits:

Encourages clean, modular code

Catches bugs early

Improves confidence in refactoring
Drawbacks:

Slower upfront development

Can be overkill for small features or throwaway code

 What is the value of using JSONSchema for validation?
JSONSchema provides a standard way to validate the structure and types of JSON data.
It ensures:

Clients send expected formats

APIs respond predictably

Bugs are caught early

 What are some ways to decide which code to test?
Critical business logic

Edge cases and error handling

Reusable functions or components

Any code likely to change or break

High-risk or complex areas

 What does RETURNING do in SQL? When would you use it?
The RETURNING clause lets you return values from rows affected by an INSERT, UPDATE, or DELETE.
Useful when:

You need the auto-generated ID after an insert

You want to confirm changes after an update

 What are some differences between WebSockets and HTTP?
HTTP: Request-response model; connection closes after each interaction

WebSockets: Persistent connection; enables real-time, two-way communication
WebSockets are ideal for chat apps, live feeds, or games.

 Did you prefer using Flask over Express? Why or why not?
I enjoyed using Flask for its simplicity and readability—it's great for quickly building APIs in Python, especially with its clean routing and built-in dev server.
However, Express felt more flexible and better integrated with frontend JavaScript tools, making it easier for full-stack JS projects.
Preference depends on the project: I’d choose Flask for Python-heavy apps and Express for JS/Node-based ecosystems.