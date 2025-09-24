
'use client';

import * as React from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { SocialLink } from '@/components/shared/SocialLink';
import { teamMembers } from '@/lib/data';

function FounderCard() {
  const [founder] = teamMembers;

  return (
    <div className="relative mt-8 md:mt-0">
      <div className="relative flex flex-col md:flex-row md:items-center">
        <div className="md:w-1/2 lg:w-5/12">
          <Card className="overflow-hidden shadow-xl transition-all duration-300 hover:shadow-2xl">
            <Image
              src={founder.image.src}
              alt={founder.name}
              data-ai-hint={founder.image.hint}
              width={founder.image.width}
              height={founder.image.height}
              className="h-full w-full object-cover"
            />
          </Card>
        </div>
        <div className="w-full md:w-1/2 lg:w-7/12">
          <Card className="relative -mt-8 rounded-lg border bg-card p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 md:-ml-16 md:mt-0 md:p-10">
            <CardContent className="p-0">
              <h3 className="font-heading text-2xl font-bold">{founder.name}</h3>
              <p className="text-lg font-medium text-primary">{founder.role}</p>
              <p className="mt-4 text-muted-foreground">{founder.bio}</p>
              <div className="mt-6 flex gap-2">
                <SocialLink platform="linkedin" url={founder.socials?.linkedin} />
                <SocialLink platform="twitter" url={founder.socials?.twitter} />
                <SocialLink platform="github" url={founder.socials?.github} />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export function FounderSection() {
    return (
        <div id="founder" className="space-y-8">
            <h2 className="font-heading text-center text-3xl font-bold tracking-tighter">Meet the Founder</h2>
            <FounderCard />
        </div>
    );
}
