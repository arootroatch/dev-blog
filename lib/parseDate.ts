export default function parseDate(dateStr: string): Date {
  // Fix timezone offsets like -6:00 to -06:00 for valid ISO 8601
  const fixed = dateStr.replace(/([+-])(\d):/, "$10$2:");
  return new Date(fixed);
}
