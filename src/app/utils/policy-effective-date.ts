export function getPolicyEffectiveDate(now: Date = new Date()): Date {
  const effectiveDate = new Date(now);
  effectiveDate.setDate(effectiveDate.getDate() - 30);
  return effectiveDate;
}
