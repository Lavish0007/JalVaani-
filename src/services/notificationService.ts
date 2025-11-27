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
