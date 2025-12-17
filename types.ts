import { LucideIcon } from 'lucide-react';

export type Theme = 'brand' | 'white' | 'dark';

export interface NavItem {
  id: string;
  label: string;
  icon: LucideIcon;
  href: string;
}

export interface UserProfile {
  name: string;
  role: string;
  avatarUrl: string;
}

export interface VideoResource {
  id: string;
  title: string;
  thumbnail: string;
  duration: string;
}