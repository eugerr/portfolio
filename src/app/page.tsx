import { Globe } from '@/components/Globe';
import { Suspense } from 'react';

export default function Posts() {
  return (
    <section>
      <Suspense fallback={<p>Loading feed...</p>}>
        <Globe />
      </Suspense>
    </section>
  );
}
