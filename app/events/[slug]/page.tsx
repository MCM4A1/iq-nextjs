import { redirect } from 'next/navigation';

export default async function Page({
   params
}: {
    params: Promise<{ slug: string }>
}) {
    const slug = (await params).slug;

    const isValidDate = /^\d{4}-\d{2}-\d{2}$/.test(slug);
    if (!isValidDate) {
        redirect('/events');
    }

    return (
        <div>
            Event Item placeholder for {slug}
        </div>
    );
}