import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

const galleryImages = [
  { src: 'https://picsum.photos/seed/gallery1/600/400', alt: 'Gallery Image 1', hint: 'abstract architecture' },
  { src: 'https://picsum.photos/seed/gallery2/600/800', alt: 'Gallery Image 2', hint: 'nature landscape' },
  { src: 'https://picsum.photos/seed/gallery3/800/600', alt: 'Gallery Image 3', hint: 'city skyline' },
  { src: 'https://picsum.photos/seed/gallery4/600/400', alt: 'Gallery Image 4', hint: 'technology design' },
  { src: 'https://picsum.photos/seed/gallery5/800/600', alt: 'Gallery Image 5', hint: 'team working' },
  { src: 'https://picsum.photos/seed/gallery6/600/800', alt: 'Gallery Image 6', hint: 'modern office' },
  { src: 'https://picsum.photos/seed/gallery7/600/400', alt: 'Gallery Image 7', hint: 'data visualization' },
  { src: 'https://picsum.photos/seed/gallery8/800/600', alt: 'Gallery Image 8', hint: 'innovation concept' },
];


export default function GalleryPage() {
  return (
    <>
      <section className="bg-primary/5">
        <div className="container mx-auto py-16 text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Our Gallery</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            A glimpse into our world. See our team, our projects, and our culture in action.
          </p>
        </div>
      </section>

      <section>
        <div className="container mx-auto">
          <div className="columns-1 gap-4 sm:columns-2 md:columns-3 lg:columns-4">
            {galleryImages.map((image, index) => (
              <Card key={index} className="mb-4 break-inside-avoid overflow-hidden">
                <CardContent className="p-0">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    data-ai-hint={image.hint}
                    width={800}
                    height={600}
                    className="h-auto w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
