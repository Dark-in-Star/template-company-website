import Image from 'next/image';
import { teamMembers } from '@/lib/data';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

function TeamMemberCard({ member, isFounder = false }: { member: (typeof teamMembers)[0]; isFounder?: boolean }) {
  return (
    <div className={`grid grid-cols-1 items-center gap-8 ${isFounder ? 'md:grid-cols-3' : ''}`}>
      <div className={`flex justify-center ${isFounder ? 'md:col-span-1' : ''}`}>
        <Image
          src={member.image.src}
          alt={member.name}
          data-ai-hint={member.image.hint}
          width={member.image.width}
          height={member.image.height}
          className="h-64 w-64 rounded-full object-cover shadow-lg"
        />
      </div>
      <div className={isFounder ? 'md:col-span-2' : ''}>
        <h3 className="text-2xl font-bold">{member.name}</h3>
        <p className="text-lg font-medium text-primary">{member.role}</p>
        <p className="mt-4 text-muted-foreground">{member.bio}</p>
      </div>
    </div>
  );
}

export default function AboutPage() {
  const [founder, ...otherTeamMembers] = teamMembers;

  return (
    <>
      <section className="bg-primary/5">
        <div className="container mx-auto py-16 text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">About Procellence Technology</h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
            We are innovators, dreamers, and builders, united by a passion for technology and a commitment to our clients' success.
          </p>
        </div>
      </section>

      <section>
        <div className="container mx-auto space-y-12">
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter">Our Story</h2>
              <p className="mt-4 text-muted-foreground">
                Founded in a small garage with a big idea, Procellence Technology has grown from a humble startup into a leading technology solutions provider. Our journey has been fueled by a relentless pursuit of innovation and a steadfast dedication to our core values.
              </p>
              <p className="mt-4 text-muted-foreground">
                We believe that technology should be a force for good, empowering businesses to operate more efficiently, connect with their customers more meaningfully, and make a positive impact on the world.
              </p>
            </div>
            <Card>
              <CardContent className="p-0">
                <Image
                  src="https://picsum.photos/seed/story-img/600/400"
                  alt="Company story"
                  data-ai-hint="old garage"
                  width={600}
                  height={400}
                  className="rounded-lg object-cover"
                />
              </CardContent>
            </Card>
          </div>

          <Separator />

          <div>
            <h2 className="mb-8 text-center text-3xl font-bold tracking-tighter">Meet the Founder</h2>
            <TeamMemberCard member={founder} isFounder />
          </div>

          <Separator />

          <div>
            <h2 className="mb-8 text-center text-3xl font-bold tracking-tighter">Meet the Team</h2>
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
              {otherTeamMembers.map((member) => (
                <Card key={member.name} className="flex flex-col items-center p-6 text-center">
                  <Image
                    src={member.image.src}
                    alt={member.name}
                    data-ai-hint={member.image.hint}
                    width={150}
                    height={150}
                    className="h-32 w-32 rounded-full object-cover"
                  />
                  <h3 className="mt-4 text-xl font-bold">{member.name}</h3>
                  <p className="font-medium text-primary">{member.role}</p>
                  <p className="mt-2 flex-1 text-sm text-muted-foreground">{member.bio}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
