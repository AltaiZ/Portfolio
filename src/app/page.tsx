import React from 'react';
import {
  Component,
  Contact2,
  Gamepad2,
  HomeIcon,
  User,
} from 'lucide-react';
import { Dock, DockIcon, DockItem, DockLabel } from '@/components/motion-primitives/dock';
import Link from 'next/link';


const data = [
  {
    title: 'Home',
    icon: (
      <Link href={'/page'}><HomeIcon className='h-full w-full text-neutral-600 dark:text-neutral-300' /></Link>
    ),
    href: '#',
  },
  {
    title: 'About',
    icon: (
      <Link href={'/About'}><User className='h-full w-full text-neutral-600 dark:text-neutral-300' /></Link>
    ),
    href: '#',
  },
  {
    title: 'Skills',
    icon: (
      <Link href={'/Skills'}><Component className='h-full w-full text-neutral-600 dark:text-neutral-300' /></Link>
    ),
    href: '#',
  },
  {
    title: 'Contact',
    icon: (
      <Link href={'/Contact'}><Contact2 className='h-full w-full text-neutral-600 dark:text-neutral-300' /></Link>
    ),
    href: '#',
  },
  {
    title: 'Have Fun',
    icon: (
     <Link href={'/Play'}> <Gamepad2 className='h-full w-full text-neutral-600 dark:text-neutral-300' /></Link>
    ),
    href: '#',
  },
 
  
];

export default function Page() {
  return (
    <div className='absolute bottom-20 left-1/2 max-w-full -translate-x-1/2'>
      <Dock className='items-end pb-3'>
        {data.map((item, idx) => (
          <DockItem
            key={idx}
            className='aspect-square rounded-full bg-gray-200 dark:bg-neutral-800'
          >
            <DockLabel>{item.title}</DockLabel>
            <DockIcon>{item.icon}</DockIcon>
          </DockItem>
        ))}
      </Dock>
    </div>
  );
}
