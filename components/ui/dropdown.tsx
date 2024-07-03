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
import frameworks from '@/app/Notes/_meta.json';
import NotFound from '@/components/ui/notfound';
import Link from 'next/link';

interface DropDownProps {
  matkul: string;
}

export default function DropDown({ matkul }: DropDownProps) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(matkul);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" role="combobox" aria-expanded={open} className="w-[200px] justify-between max-lg:w-[150px] max-lg:text-[12px]">
          {value ? frameworks.find((framework) => framework.value === value)?.label : 'Select Subject..'}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0 max-lg:w-[150px]">
        <Command>
          <CommandInput placeholder="Search framework..." />
          <CommandList>
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup>
              {frameworks.map((framework) => (
                <CommandItem
                  key={framework.value}
                  value={framework.value}
                  onSelect={(currentValue) => {
                    setOpen(false);
                  }}
                >
                  <Check className={cn('mr-2 h-4 w-4', value === framework.value ? 'opacity-100' : 'opacity-0')} />
                  <Link href={framework.value === '' ? '/Notes' : '../Notes/' + framework.value}>{framework.label}</Link>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
