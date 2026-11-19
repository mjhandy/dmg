import { getPolicyEffectiveDate } from './policy-effective-date';

describe('getPolicyEffectiveDate', () => {
  it('uses the local calendar date 30 days before now without mutating the input', () => {
    const now = new Date(2026, 10, 19, 12);
    const effectiveDate = getPolicyEffectiveDate(now);

    expect(effectiveDate.getFullYear()).toBe(2026);
    expect(effectiveDate.getMonth()).toBe(9);
    expect(effectiveDate.getDate()).toBe(20);
    expect(now.getDate()).toBe(19);
  });
});
