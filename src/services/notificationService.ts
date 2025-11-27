export type Notification = {
  id: string;
  text: string;
  timestamp: number;
  village?: string;
};

const STORAGE_KEY = 'jalvaani_notifications';

export function getNotifications(): Notification[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw) as Notification[];
  } catch {
    return [];
  }
}

export function saveNotifications(list: Notification[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
}

export function addNotification(n: Omit<Notification, 'id' | 'timestamp'>) {
  const list = getNotifications();
  const item: Notification = {
    id: Date.now().toString(36) + Math.random().toString(36).slice(2, 7),
    timestamp: Date.now(),
    ...n
  } as Notification;
  list.unshift(item);
  saveNotifications(list);
  return item;
}

export function removeNotification(id: string) {
  const list = getNotifications().filter(x => x.id !== id);
  saveNotifications(list);
}

export function clearNotifications() {
  saveNotifications([]);
}

export function seedSampleNotifications() {
  const existing = getNotifications();
  if (existing.length > 0) return existing;

  const samples: Notification[] = [
    {
      id: 'sample1',
      text: 'Weather advisory: Heavy rain expected in nearby villages tomorrow.',
      timestamp: Date.now() - 1000 * 60 * 60,
      village: 'Kisanpur'
    },
    {
      id: 'sample2',
      text: 'Planner tip: Reduce irrigation by 20% for Rice due to upcoming showers.',
      timestamp: Date.now() - 1000 * 60 * 30,
      village: 'Kisanpur'
    },
    {
      id: 'sample3',
      text: 'New feature: Localized disease alerts are now available for your area.',
      timestamp: Date.now() - 1000 * 60 * 5
    }
  ];

  saveNotifications(samples);
  return samples;
}
