export async function fetchFeatureFlags() {
  try {
    const res = await fetch('/config/feature-flags.json');
    if (!res.ok) throw new Error('Failed to fetch flags');
    return await res.json();
  } catch (e) {
    console.error("Feature flags fetch error:", e);
    return {
      task: 'T15',
      showInsights: false,
      valueRedacted: true,
    };
  }
}
