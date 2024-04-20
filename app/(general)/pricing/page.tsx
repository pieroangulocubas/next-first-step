import type { Metadata } from "next";

export const metadata:Metadata = {
    title: 'Princing Title',
    description: 'Princing Description',
   };

export default function PricingPage(){
    return (
        <main className="flex min-h-screen flex-col items-center p-24">
            <span className="text-5xl">Pricing</span>
        </main>
    )
}

