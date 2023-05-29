const addRemove = require('./funtions.js');

global.localStorage = {
  getItem: jest.fn(() => null),
  setItem: jest.fn(() => null),
  removeItem: jest.fn(() => null),
};

const create = [
  {
    description: 'hasnat',
    completed: false,
    index: 1,
  },
  {
    description: 'shayan',
    completed: false,
    index: 2,
  },
  {
    description: 'huzaifa',
    completed: false,
    index: 3,
  },
];

describe('adding and removing todo', () => {
  test('should add the todo', () => {
    const results = [];
    create.forEach((item) => {
      results.push(addRemove.Add(item));
    });
    expect(results).toHaveLength(3);
  });

  test('should delete todo child', () => {
    expect(addRemove.Remove(2)).toHaveLength(2);
  });
});