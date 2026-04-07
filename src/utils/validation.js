export const ALLOWED_EMAIL_SUFFIXES = ['.edu', '.ac.uk', '@studentmdx.ac', '@live.mdx.ac.uk'];

export function isAllowedEmailDomain(email) {
  if (!email || typeof email !== 'string') return false;
  const lowerEmail = email.toLowerCase().trim();
  return ALLOWED_EMAIL_SUFFIXES.some(suffix => lowerEmail.endsWith(suffix));
}
