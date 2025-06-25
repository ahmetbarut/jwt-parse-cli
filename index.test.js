const { exec } = require('child_process');
const path = require('path');

const cliPath = path.resolve(__dirname, 'index.js');
const validToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
const invalidToken = 'invalid-token';

describe('JWT Parser CLI', () => {
  test('should decode a valid JWT and show header, payload, and signature', (done) => {
    exec(`node ${cliPath} ${validToken}`, (error, stdout, stderr) => {
      expect(error).toBeNull();
      expect(stderr).toBe('');
      expect(stdout).toContain('Header');
      expect(stdout).toContain('Payload');
      expect(stdout).toContain('Signature');
      expect(stdout).toContain('"alg": "HS256"');
      expect(stdout).toContain('"name": "John Doe"');
      expect(stdout).toContain('SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c');
      done();
    });
  });

  test('should show an error for an invalid JWT', (done) => {
    exec(`node ${cliPath} ${invalidToken}`, (error, stdout, stderr) => {
      expect(error).not.toBeNull();
      expect(stderr).toContain('Invalid JWT provided.');
      done();
    });
  });

  test('should show an error when no JWT is provided', (done) => {
    exec(`node ${cliPath}`, (error, stdout, stderr) => {
      expect(error).not.toBeNull();
      expect(stderr).toContain('Please provide a JWT to decode.');
      done();
    });
  });
});
