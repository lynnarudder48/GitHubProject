function generateRandomTsCode(): string {
  const randomNumber = Math.floor(Math.random() * 10);
  const randomString = 'hello world';
  const randomBoolean = Math.random() > 0.5;

  return `const x = ${randomNumber};
  const y = '${randomString}';
  const z = ${randomBoolean}`;
}
