import type { Metadata } from "next";

export const metadata:Metadata = {
    title: 'Contact Title',
    description: 'Contact Description',
   };

export default function ContactPage(){
    return (
        <main className="flex min-h-screen flex-col items-center p-24">
            <span className="text-5xl">Contact</span>
        </main>
    )
}