'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

// Inner component — where useSearchParams is actually used
function ScrollToAnchorInner() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const id = hash.substring(1);
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 0);
    }
  }, [pathname, searchParams]);

  return null;
}

// ✅ Outer wrapper — provides the required Suspense boundary
export default function ScrollToAnchor() {
  return (
    <Suspense fallback={null}>
      <ScrollToAnchorInner />
    </Suspense>
  );
}
