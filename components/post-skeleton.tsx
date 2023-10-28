import { Skeleton } from './ui/skeleton';

export default function PostSkeleton() {
  return (
    <div className='space-y-5'>
      <section className='flex gap-x-3.5'>
        <Skeleton className='w-12 h-12 rounded-full' />
        <article className='flex flex-col justify-between'>
          <Skeleton className='w-24 h-5' />
          <Skeleton className='w-20 h-5' />
        </article>
      </section>
      <Skeleton className='w-full h-96 rounded-sm' />
    </div>
  );
}
