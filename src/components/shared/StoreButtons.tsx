
'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';

const AppStoreIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 384 512" fill="currentColor" height="1em" width="1em" {...props}>
        <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C39.2 140.2 0 184.2 0 241.2c0 61.6 31.7 117.4 60.5 153.3 22.9 28.5 50.9 54.2 89.6 54.2 37.1 0 55.5-21.2 88.5-21.2 33.5 0 50.9 21.2 88.5 21.2 37.5 0 63.3-26.3 85.3-53.6-20.1-15.5-34.7-37.5-36.2-64.3zm-97.1 169.5c-13.6 21.2-33.5 44.6-61.5 44.6-28.2 0-48-23.3-61.5-44.6-13.3-21.2-24.3-49.8-17.6-77.8 13.6 21.2 33.5 44.6 61.5 44.6 27.9 0 48-23.3 61.5-44.6 13.3-21.2 24.3-49.8 17.6-77.8z" />
    </svg>
);

const GooglePlayIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 512 512" fill="currentColor" height="1em" width="1em" {...props}>
        <path fill="#4385F4" d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0L104.6 13 47 240.2 47 0z" />
        <path fill="#34A853" d="M104.6 499l280.8-161.2-60.1-60.1L104.6 499zM47 512l57.6-271.8L47 512z" />
        <path fill="#FBBC05" d="M466.5 256l-105.1-105.1-125.4 125.4 125.4 125.4 105.1-105.1z" />
        <path fill="#EA4335" d="M325.3 234.3L104.6 13l-57.6 221.3 278.3-11.2-60.1-60.1z" />
    </svg>
)

export function StoreButtons() {
    return (
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center md:justify-start">
            <Link href="https://play.google.com/store/apps/details?id=com.procellence.qynko&pli=1" target="_blank">
                <Button size="lg" variant="super" className="h-16 w-full sm:w-48">
                    <GooglePlayIcon className="mr-3 h-8 w-8" />
                    <div className="text-left">
                        <p className="text-xs">GET IT ON</p>
                        <p className="font-heading text-xl">Google Play</p>
                    </div>
                </Button>
            </Link>
            <Link href="https://apps.apple.com/in/app/qynko/id6739987793" target="_blank">
                <Button size="lg" variant="outline" className="h-16 w-full sm:w-48">
                    <AppStoreIcon className="mr-3 h-8 w-8" />
                    <div className="text-left">
                        <p className="text-xs">Available on the</p>
                        <p className="font-heading text-xl">App Store</p>
                    </div>
                </Button>
            </Link>
        </div>
    )
}
