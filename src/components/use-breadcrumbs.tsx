'use client';

import { usePathname } from 'next/navigation';
import { useMemo } from 'react';


export function useBreadcrumbs() {
  const pathname = usePathname();

  const breadcrumbs = useMemo(() => {

    const segments = pathname === '/' ? [] : pathname.split('/').filter(Boolean);
    const breadcrumbItems = segments.map((segment, index) => {
      const path = `/${segments.slice(0, index + 1).join('/')}`;
      return {
        title: segment.charAt(0).toUpperCase() + segment.slice(1),
        link: path
      };
    });
    return [{ title: 'Home', link: '/' }, ...breadcrumbItems];
  }, [pathname]);

  return breadcrumbs;
}
