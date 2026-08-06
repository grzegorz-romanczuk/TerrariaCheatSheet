import { env } from 'cloudflare:workers';

import type { Route } from './+types/home';
import { Welcome } from '../pages/Welcome';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Terraria Cheat Sheet' },
    { name: 'description', content: 'Welcome to cheet sheat for Terraria!' },
  ];
}

export default function Home() {
  return <Welcome />;
}
