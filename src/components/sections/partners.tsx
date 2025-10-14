import Image from 'next/image';
import { placeholderImages } from '@/lib/placeholder-images';
import { Logo } from '../logo';

export default function Partners() {
  const partners = [
    { id: 'zelar-logo' },
    { id: 'iso-logo' },
    { id: 'award-logo-1' },
    { id: 'award-logo-2' },
  ];

  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container max-w-screen-xl">
        <div className="mx-auto max-w-4xl rounded-xl shadow-lg border p-8">
            <div className="flex justify-around items-center flex-wrap gap-8">
                {partners.map(partner => {
                    const image = placeholderImages.find(p => p.id === partner.id);
                    if (!image) return null;
                    if (partner.id === 'zelar-logo') {
                        return <Logo key={partner.id} className="h-10 w-auto text-muted-foreground" />
                    }
                    return (
                        <Image
                            key={partner.id}
                            src={image.imageUrl}
                            alt={image.description}
                            width={150}
                            height={75}
                            className="object-contain"
                            data-ai-hint={image.imageHint}
                        />
                    )
                })}
            </div>
        </div>
      </div>
    </section>
  );
}
