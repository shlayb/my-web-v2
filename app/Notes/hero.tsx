'use client';
import * as React from 'react';
import { Check, ChevronsUpDown } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { useEffect, useState } from 'react';
import { posts } from '#site/content';
import PropsItem from '@/components/ui/notes-prov';
import frameworks from './_meta.json';
import NotFound from '@/components/ui/notfound';
import Link from 'next/link';
import DropDown from '@/components/ui/dropdown';

export default function HeroNotes() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');
  const displayPosts = posts;

  return (
    <section className="w-[96%] h-full mx-auto my-0 font-Poppins">
      <div className="w-full max-h-20 flex justify-between items-stretch px-5 border-0">
        <h1 className="text-5xl font-semibold text-dark dark:text-light max-lg:text-3xl">Lecture Notes</h1>
        <DropDown matkul={value} />
      </div>
      <div className="px-10">
        <hr className="mt-7" />
        {displayPosts?.length > 0 ? (
          <ul className="flex flex-col">
            {displayPosts.map((post) => {
              const { slug, title, description, date, matkul } = post;
              return (
                <li key={slug}>
                  <PropsItem key={slug} slug={slug} title={title} description={description} date={date} matkul={matkul} />
                </li>
              );
            })}
          </ul>
        ) : (
          <NotFound key="not-found" />
        )}
      </div>
    </section>
  );
}
