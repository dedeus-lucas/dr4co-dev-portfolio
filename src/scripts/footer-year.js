export function initFooterYear() {
  const yearElement = document.getElementById("copyright-year");
  if (!yearElement) return;

  const startYear = 2024;
  const currentYear = new Date().getFullYear();

  if (currentYear > startYear) {
    yearElement.textContent = `${startYear} - ${currentYear}`;
  } else {
    yearElement.textContent = `${startYear}`;
  }
}
