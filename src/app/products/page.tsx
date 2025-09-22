import { Package } from "lucide-react";
import Image from "next/image";

export default function ProductsPage() {
  return (
    <>
      <section className="bg-primary/5">
        <div className="container mx-auto py-16 text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl font-heading">Our Products</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Discover our suite of proprietary software products designed to streamline your business operations.
          </p>
        </div>
      </section>

      <section>
        <div className="container mx-auto text-center">
            <Image 
                src="https://picsum.photos/seed/products-soon/800/600"
                alt="Products coming soon"
                data-ai-hint="blueprint product"
                width={800}
                height={600}
                className="mb-8 inline-block rounded-lg object-cover shadow-lg"
            />
          <div className="flex flex-col items-center gap-4">
            <Package className="h-24 w-24 text-muted-foreground" />
            <h2 className="text-2xl font-bold font-heading">Coming Soon</h2>
            <p className="max-w-md text-muted-foreground">
              We are hard at work developing innovative products. Please check back later for updates.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
