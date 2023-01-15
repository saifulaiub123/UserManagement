import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS = [
  {
    title: 'Dashboard',
    icon: 'keypad-outline',
    link: '/feature/dashboard',
    role: ['Admin'],
    home: true,
  },
  {
    title: 'User',
    icon: 'keypad-outline',
    link: '/feature/user',
    role: ['Admin']
  },
  {
    title: 'My Order',
    icon: 'keypad-outline',
    link: '/feature/Order',
    role: ['User']
  },
  {
    title: 'Reward Points',
    icon: 'keypad-outline',
    link: '/feature/reward-points',
    role: ['User','Partner']
  },
  {
    title: 'Reports',
    icon: 'keypad-outline',
    link: '/feature/reports',
    role: ['Partner']
  },
];
