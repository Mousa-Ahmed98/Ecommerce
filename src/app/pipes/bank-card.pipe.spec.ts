import { BankCardPipe } from './bank-card.pipe';

describe('BankCardPipe', () => {
  it('create an instance', () => {
    const pipe = new BankCardPipe();
    expect(pipe).toBeTruthy();
  });
});
