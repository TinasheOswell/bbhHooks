import { render, screen } from '@testing-library/react';
import App from './App';
import { calculateSum, calculateMedian } from './App';

describe('calculateSum', () => {
  it('calculates the correct sum of ages', () => {
    const people = [{ name: 'Alice', age: 30 }, { name: 'Bob', age: 25 }];
    expect(calculateSum(people)).toBe(55);
  });

  it('returns 0 when there are no people', () => {
    expect(calculateSum([])).toBe(0);
  });
});

describe('calculateMedian', () => {
  it('calculates the correct median for an odd number of ages', () => {
    const people = [{ name: 'Alice', age: 30 }, { name: 'Bob', age: 25 }, { name: 'Charlie', age: 35 }];
    expect(calculateMedian(people)).toBe(30);
  });

  it('calculates the correct median for an even number of ages', () => {
    const people = [{ name: 'Alice', age: 30 }, { name: 'Bob', age: 20 }, { name: 'Charlie', age: 40 }, { name: 'Dave', age: 10 }];
    expect(calculateMedian(people)).toBe(25);
  });
});