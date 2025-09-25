
'use client';

import * as React from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Star, Globe, Play, Sparkles } from 'lucide-react';
import * as placeholderImages from '@/app/lib/placeholder-images.json';
import { VideoPlayer } from '@/components/shared/VideoPlayer';

export function TrustSection() {
    const [showVideo, setShowVideo] = React.useState(false);
    const videoThumbnail = placeholderImages.videoThumbnail;

    return (
        <>
            <section className="bg-background -mt-32 pb-16 relative z-10">
                <div className="container mx-auto">
                    <Card className="bg-gradient-to-br from-card to-secondary/20 text-card-foreground p-4 shadow-2xl rounded-3xl">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            <div className="lg:col-span-2 flex flex-col justify-center items-center md:items-start text-center md:text-left p-6">
                                <h2 className="font-heading text-3xl font-bold tracking-tighter sm:text-4xl">Trusted By 250,000+ Business</h2>
                                <div className="flex items-center gap-2 mt-2 text-muted-foreground">
                                    <Globe className="h-5 w-5 text-primary" />
                                    <Sparkles className="h-5 w-5 text-primary" />
                                </div>
                            </div>

                            <Card className="bg-secondary/30 overflow-hidden cursor-pointer group" onClick={() => setShowVideo(true)}>
                                <CardContent className="p-0 relative">
                                    <Image 
                                        src={videoThumbnail.src}
                                        alt="Team collaboration video"
                                        width={videoThumbnail.width}
                                        height={videoThumbnail.height}
                                        data-ai-hint={videoThumbnail.hint}
                                        className="object-cover w-full h-48 group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                                        <div className="h-16 w-16 bg-white/30 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:scale-110 group-hover:bg-white/50 transition-all duration-300">
                                            <Play className="h-8 w-8 text-white fill-white" />
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            <div className="grid grid-cols-2 gap-4">
                                <Card className="bg-secondary/30">
                                    <CardContent className="p-4 flex flex-col justify-center items-center text-center">
                                        <div className="flex text-yellow-400">
                                            <Star className="h-5 w-5 fill-current" />
                                            <Star className="h-5 w-5 fill-current" />
                                            <Star className="h-5 w-5 fill-current" />
                                            <Star className="h-5 w-5 fill-current" />
                                            <Star className="h-5 w-5 fill-current" />
                                        </div>
                                        <p className="font-bold text-sm mt-1">Rated 4.9/5</p>
                                        <p className="text-xs text-muted-foreground">From Over 600 Reviews</p>
                                    </CardContent>
                                </Card>
                                <Card className="bg-secondary/30">
                                     <CardContent className="p-4 flex flex-col justify-center items-center text-center">
                                        <p className="text-xs text-muted-foreground">Monthly Traffic</p>
                                        <p className="font-bold text-xl">33.4k</p>
                                        <Progress value={75} className="h-1 w-full mt-2" />
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </Card>
                </div>
            </section>
            {showVideo && (
                <VideoPlayer 
                    youtubeId="dQw4w9WgXcQ" 
                    onClose={() => setShowVideo(false)}
                />
            )}
        </>
    );
}
