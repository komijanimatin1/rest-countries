import axios from "axios";
export const revalidate = 7200;

export async function generateStaticParams() {
    const res = await fetch('http://localhost:3000/countries', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        cache: "force-cache"
    });
    const countries = await res.json();
    return countries.map((country: { id: string }) => ({ id: country.id }));

}
export default async function page({ params }: { params: { id: string } }) {
    const res = await fetch(`http://localhost:3000/countries/${params.id}`);
    const countries = await res.json();

    return (
        <div>


        </div>
    )
}
