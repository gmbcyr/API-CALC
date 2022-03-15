import * as fromEvalSal from './eval-sal.actions';

describe('loadEvalSals', () => {
  it('should return an action', () => {
    expect(fromEvalSal.loadEvalSals().type).toBe('[EvalSal] Load EvalSals');
  });
});
