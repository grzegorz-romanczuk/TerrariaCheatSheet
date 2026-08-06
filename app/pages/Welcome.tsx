import { Link } from 'react-router';
import { Sword, Skull, Users, Hammer, Mountain, ArrowRight } from 'lucide-react';

import { Button } from '~/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription } from '~/components/ui/card';

const sections = [
  {
    title: 'Items',
    description: 'Browse weapons, tools, accessories and armor.',
    href: '/items',
    icon: Sword,
  },
  {
    title: 'Bosses',
    description: 'Fight strategies, drops and summoning items.',
    href: '/bosses',
    icon: Skull,
  },
  {
    title: 'NPCs',
    description: 'Housing requirements and what they sell.',
    href: '/npcs',
    icon: Users,
  },
  {
    title: 'Crafting',
    description: 'Recipes, stations and material requirements.',
    href: '/crafting',
    icon: Hammer,
  },
  {
    title: 'Biomes',
    description: 'What to expect and how to prepare.',
    href: '/biomes',
    icon: Mountain,
  },
];

export function Welcome() {
  return (
    <main className="min-h-screen">
      <section className="flex flex-col items-center gap-6 px-4 pt-24 pb-16 text-center">
        <h1 className="font-heading text-5xl font-bold tracking-tight sm:text-6xl">
          Terraria <span className="text-primary">Cheat Sheet</span>
        </h1>
        <p className="max-w-xl text-lg text-muted-foreground">
          Everything you need on your journey — items, bosses, NPCs, crafting and biomes, in one
          place.
        </p>
      </section>

      <section className="mx-auto grid max-w-5xl grid-cols-1 gap-4 px-4 pb-24 sm:grid-cols-2 lg:grid-cols-3">
        {sections.map(({ title, description, href, icon: Icon }) => (
          <Link key={href} to={href}>
            <Card className="group h-full transition-colors hover:border-primary">
              <CardHeader>
                <Icon className="mb-2 size-8 text-primary" />
                <CardTitle className="flex items-center justify-between">
                  {title}
                  <ArrowRight className="size-4 opacity-0 transition-opacity group-hover:opacity-100" />
                </CardTitle>
                <CardDescription>{description}</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </section>

      <div className="flex justify-center pb-16">
        <Button size="lg">
          <Link to="/items">Start browsing</Link>
        </Button>
      </div>
    </main>
  );
}
