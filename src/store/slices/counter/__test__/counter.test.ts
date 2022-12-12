import counterReducer, { add, ICounter, reset, subtract } from '../counter';

describe('Counter Reducer testing', () => {
  it('Should add 1 when payload is 1', () => {
    const prevState: ICounter = {
      counter: 0,
    };
    expect(counterReducer(prevState, add(1))).toMatchObject({
      counter: 1,
    });
  });
  it('should subtract 1 when payload is 1', () => {
    const prevState: ICounter = {
      counter: 10,
    };
    expect(counterReducer(prevState, subtract(1))).toMatchObject({
      counter: 9,
    });
  });

  it('should reset to 0', () => {
    const prevState: ICounter = {
      counter: 10,
    };
    expect(counterReducer(prevState, reset)).toMatchObject({
      counter: 0,
    });
  });
});
