import { logEvent, setUserProperties } from 'firebase/analytics';
import { analytics } from './firebase';

export function logResumeDownload(): void {
  if (!analytics) return;
  console.log('[analytics]', analytics);
  console.log('[logging resume download]');
  logEvent(analytics, 'resume_download');
  logEvent(analytics, 'test');
}

export function logLinkedInClick(source: 'navbar' | 'footer'): void {
  if (!analytics) return;
  console.log('[logging linkedin click]');
  logEvent(analytics, 'linkedin_click', { source });
}

export function logEmailClick(source: 'footer'): void {
  if (!analytics) return;
  console.log('[logging email click]');
  logEvent(analytics, 'email_click', { source });
}

export function logContactTabClick(): void {
  if (!analytics) return;
  console.log('[logging contact tab click]');
  logEvent(analytics, 'contact_tab_click');
}

export function logPortfolioView(itemName: string): void {
  if (!analytics) return;
  console.log('[logging portfolio view]');
  console.log('[portfolio view item name]', itemName);
  logEvent(analytics, 'portfolio_view', { item_name: itemName });
}

// Optional: expose a way to set user properties if needed later
export function setVisitorProperties(props: Record<string, string | number | boolean | null | undefined>): void {
  if (!analytics) return;
  console.log('[setting visitor properties]',props);
  setUserProperties(analytics, props);
}


