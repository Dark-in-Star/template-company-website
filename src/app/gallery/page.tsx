

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { galleryImages } from '@/lib/data';

export default function GalleryPage() {
  return (
    <>
      <section>
        <div className="container mx-auto">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl font-heading">Our Gallery</h1>
                <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                    A glimpse into our world. See our team, our projects, and our culture in action.
                </p>
            </div>
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
