import { Package } from "lucide-react";

export default function ProductsPage() {
  return (
    <>
      <section className="bg-primary/5">
        <div className="container mx-auto py-16 text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Our Products</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Discover our suite of proprietary software products designed to streamline your business operations.
          </p>
        </div>
      </section>

      <section>
        <div className="container mx-auto text-center">
          <div className="flex flex-col items-center gap-4">
            <Package className="h-24 w-24 text-muted-foreground" />
            <h2 className="text-2xl font-bold">Coming Soon</h2>
            <p className="max-w-md text-muted-foreground">
              We are hard at work developing innovative products. Please check back later for updates.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
