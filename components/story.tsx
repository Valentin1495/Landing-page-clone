import { PublishedType } from '@/types';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from '@/components/ui/dialog';
import Image from 'next/image';
import { CopyIcon } from '@radix-ui/react-icons';
import { format } from 'date-fns';
import Link from 'next/link';
import UserAvatar from './user-avatar';
import useCopy from '@/hooks/use-copy';

export default function Story({
  prompt,
  timestamp,
  storyId,
  karloImage,
  profilePic,
  username,
}: PublishedType) {
  const formattedDate = format(new Date(timestamp), 'MM/dd/yyyy');
  const modifiedUsername = username.split(' ').join('');
  const copyToClipboard = useCopy(prompt);

  return (
    <Dialog>
      <DialogTrigger className='relative aspect-square w-full overflow-hidden'>
        <Image
          src={karloImage}
          alt='Story thumbnail'
          fill
          className='object-cover absolute'
        />
        <section className='bg-black/75 inset-0 p-1.5 opacity-0 hover:opacity-100 absolute transition'>
          <p className='top-2 absolute prompt-summary px-1.5 text-left text-white/90'>
            {prompt}
          </p>
          <UserAvatar
            image={profilePic}
            className='bottom-2 absolute w-8 h-8 mt-2.5'
          />
        </section>
      </DialogTrigger>
      <DialogContent className='max-w-fit'>
        <DialogHeader className='flex flex-row items-center gap-x-2'>
          <UserAvatar image={profilePic} className='w-8 h-8 mt-2.5' />

          <h1 className='text-primary text-sm'>{username}</h1>
        </DialogHeader>
        <section className='relative aspect-square w-52 sm:w-80 overflow-hidden rounded-lg'>
          <Image
            src={karloImage}
            alt='Thumbnail'
            fill
            className='object-cover'
          />
        </section>
        <section className='w-52 sm:w-80 space-y-2'>
          <article className='flex items-center gap-x-2.5'>
            <h1 className='text-primary font-bold'>Prompt</h1>
            <button
              onClick={copyToClipboard}
              className='text-sm flex items-center text-slate-400 gap-x-0.5'
            >
              <CopyIcon className='w-4 h-4' />
              Copy
            </button>
          </article>
          <article className='bg-secondary/75 px-4 py-3'>
            <p className='text-slate-400  rounded-lg prompt-summary'>
              {prompt}
            </p>
          </article>
        </section>
        <Link
          href={`/@${modifiedUsername}/${storyId}`}
          className='bg-primary text-primary-foreground shadow hover:bg-primary/90 font-bol transition text-center rounded-sm py-2'
        >
          Read the story
        </Link>
        <section className='flex justify-between'>
          <article>
            <h2 className='text-slate-500'>Generated</h2>
            <p className='text-primary/90'>{formattedDate}</p>
          </article>
          <article>
            <h2 className='text-slate-500'>Base Model</h2>
            <p className='text-primary/90'>Karlo 2.0</p>
          </article>
        </section>
      </DialogContent>
    </Dialog>
  );
}
