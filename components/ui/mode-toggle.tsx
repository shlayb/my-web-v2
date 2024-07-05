'use client';
import { use, useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { DropdownMenuCheckboxItemProps, DropdownMenuItem } from '@radix-ui/react-dropdown-menu';
import { Moon, Sun } from 'lucide-react';
import { s } from 'velite';

export default function ModeToggle() {
  const [Darkmode, setDark] = useState(localStorage.getItem('theme') === 'dark');

  useEffect(() => {
    if (Darkmode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [Darkmode]);

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
      setDark(true);
    } else {
      setDark(false);
    }
  }, []);
  return (
    <>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" />
      <Button
        className="w-8 h-8 items-center text-xl bg-transparent hover:bg-transparent text-dark dark:text-light"
        onClick={() => {
          setDark(!Darkmode);
        }}
      >
        {!Darkmode ? (
          <i className="w-[80%] h-[80%] opacity-100 fa-solid fa-lightbulb scale-100 transition-all  dark:scale-0 dark:opacity-0"></i>
        ) : (
          <i className="w-[80%] h-[80%] opacity-0  fa-regular fa-lightbulb scale-0 transition-all  dark:scale-100 dark:opacity-100"></i>
        )}
      </Button>
    </>
  );
}
