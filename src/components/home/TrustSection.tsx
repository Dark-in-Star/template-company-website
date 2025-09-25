
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
            <section className="bg-transparent -mt-24 pb-16 relative z-10">
                <div className="container mx-auto">
                    <Card className="bg-card text-card-foreground px-8 py-6 shadow-2xl rounded-full backdrop-blur-sm">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                            
                            <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left">
                                <h2 className="font-heading text-3xl font-bold tracking-tighter sm:text-4xl">Trusted By <br /> 250,000+ Business</h2>
                                <div className="flex items-center gap-2 mt-2 text-muted-foreground">
                                    <Globe className="h-5 w-5 text-primary" />
                                    <Sparkles className="h-5 w-5 text-primary" />
                                </div>
                            </div>

                            <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
                                <Card className="bg-transparent border-0 shadow-none overflow-hidden cursor-pointer group" onClick={() => setShowVideo(true)}>
                                    <CardContent className="p-0 relative">
                                        <Image 
                                            src={videoThumbnail.src}
                                            alt="Team collaboration video"
                                            width={videoThumbnail.width}
                                            height={videoThumbnail.height}
                                            data-ai-hint={videoThumbnail.hint}
                                            className="object-cover w-full h-40 rounded-3xl group-hover:scale-105 transition-transform duration-300"
                                        />
                                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center rounded-3xl">
                                            <div className="h-16 w-16 bg-white/30 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:scale-110 group-hover:bg-white/50 transition-all duration-300">
                                                <Play className="h-8 w-8 text-white fill-white" />
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card className="bg-secondary/30 rounded-3xl">
                                    <CardContent className="p-4 flex flex-col justify-center items-center text-center h-40">
                                        <div className="flex text-yellow-400">
                                            <Star className="h-5 w-5 fill-current" />
                                            <Star className="h-5 w-5 fill-current" />
                                            <Star className="h-5 w-5 fill-current" />
                                            <Star className="h-5 w-5 fill-current" />
                                            <Star className="h-5 w-5 fill-current" />
                                        </div>
                                        <p className="font-bold text-sm mt-2">Rated 4.9/5</p>
                                        <p className="text-xs text-muted-foreground mt-1">From Over 600 Reviews</p>
                                    </CardContent>
                                </Card>
                                
                                <Card className="bg-secondary/30 rounded-3xl">
                                     <CardContent className="p-4 flex flex-col justify-center items-center text-center h-40">
                                        <p className="text-sm text-muted-foreground">Monthly Traffic</p>
                                        <p className="font-bold text-3xl">33.4k</p>
                                        <Progress value={75} className="h-1.5 w-full mt-2" />
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
