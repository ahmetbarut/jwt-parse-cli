# JWT Parser CLI

A simple command-line tool to parse and display the contents of a JSON Web Token (JWT).

<!-- ![Screenshot of the CLI output](https://i.imgur.com/some-image.png) Replace with an actual screenshot URL -->

## Installation

Install the CLI globally using npm:

```bash
npm install -g jwt-parser-cli
```

## Usage

To use the CLI, simply run the `jwt-parse` command followed by the JWT you want to decode:

```bash
jwt-parse <your_jwt_here>
```

### Example

```bash
jwt-parse eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
```

This will display the header, payload, and signature of the JWT in a colorized and easy-to-read format.

## Development

To run the project locally for development:

1.  Clone the repository:
    ```bash
    git clone https://github.com/your-username/jwt-parser-cli.git
    cd jwt-parser-cli
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Run the tests:
    ```bash
    npm test
    ```

## License

ISC
