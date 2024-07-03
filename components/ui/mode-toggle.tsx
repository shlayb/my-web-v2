'use client';
import { use, useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { DropdownMenuCheckboxItemProps, DropdownMenuItem } from '@radix-ui/react-dropdown-menu';
import { Moon, Sun } from 'lucide-react';

type Checked = DropdownMenuCheckboxItemProps['checked'];
export default function ModeToggle() {
  const [showStatusBar, setShowStatusBar] = useState<Checked>(true);
  const [showActivityBar, setShowActivityBar] = useState<Checked>(false);
  const [showPanel, setShowPanel] = useState<Checked>(false);
  const [Darkmode, setDark] = useState(true);
  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
      setDark(true);
    } else {
      setDark(false);
    }
  }, []);

  const modeDesk = useRef<HTMLButtonElement>(null);
  const modeMobile = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const modeDeskCurrent = modeDesk.current;
    const modeMobileCurrent = modeMobile.current;
    if (Darkmode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [Darkmode]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="w-9 h-9 text-xl text-dark dark:text-light">
          <Sun className="w-[80%] h-[80%] rotate-0 scale-100 transition-all dark:rotate-90 dark:scale-0" />
          <Moon className="w-[80%] h-[80%] rotate-90 scale-0 transition-all dark:rotate-90 dark:scale-100 " />
          <span className="sr-only">Toggle Mode</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-36 px-4 py-2 outline-none focus:outline-none focus:ring-0">
        <DropdownMenuItem
          className="py-1"
          onClick={() => {
            setDark(true);
          }}
        >
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem
          className="py-1"
          onClick={() => {
            setDark(false);
          }}
        >
          light
        </DropdownMenuItem>
        <DropdownMenuItem
          className="py-1"
          onClick={() => {
            const theme = localStorage.getItem('theme');
            if (theme !== 'dark') {
              setDark(false);
            }
            setDark(true);
          }}
        >
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
