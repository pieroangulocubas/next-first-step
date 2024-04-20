import type { Metadata } from "next";

export const metadata:Metadata = {
 title: 'About Title',
 description: 'About Description',
};
export default function AboutPage(){
    return (
        <main className="flex min-h-screen flex-col items-center p-24">
            <span className="text-5xl">About</span>
        </main>
    )
}