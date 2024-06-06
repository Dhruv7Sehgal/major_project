"use client";

import { Input } from "@/components/ui/input";
import { updateQueryParams } from "@/lib/utils";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ChangeEvent, useMemo, useState } from "react";
import { SearchIcon } from "./Nav";

// Debounce function
function debounce<T extends (...args: any[]) => void>(func: T, wait: number) {
  let timeout: NodeJS.Timeout;
  return function (this: void, ...args: Parameters<T>) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

export function Search() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const debouncedSearch = useMemo(
    () =>
      debounce((value: string) => {
        const url =
          value === ""
            ? updateQueryParams(pathname, "", "q", searchParams)
            : updateQueryParams(pathname, value, "q", searchParams);

        router.push(url);
      }, 500),
    [router, pathname, searchParams]
  );

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    debouncedSearch(e.target.value);
  };

  return (
    <div className="relative">
      <SearchIcon className="absolute left-4 top-4 h-4 w-4 text-gray-500 dark:text-gray-400" />
      <Input
        value={search}
        onChange={handleSearch}
        className="w-full rounded-md border border-gray-300 bg-white px-12 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary dark:border-gray-700 dark:bg-gray-950 dark:text-gray-50"
        placeholder="Search products..."
        type="search"
      />
    </div>
  );
}
