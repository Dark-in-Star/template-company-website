
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { DateTime } from 'luxon';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDistanceToNow(date: string): string {
    const relativeTime = DateTime.fromISO(date).toRelative();
    if (relativeTime) {
        return relativeTime;
    }
    return '';
}
