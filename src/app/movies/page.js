
import Link from 'next/link';

async function getData() {
    const res = await fetch('http://localhost:3000/api/movies', {
        cache: "no-store"
    })
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        console.log('Failed to fetch data')
    }

    return res.json()
}

export default async function MoviesPage() {
    const data = await getData()
    console.log(data);
    return <main>

        {

            data.map(item => <div key={item._id}>
                <div className="p-12 mt-4 bg-blue-50">
                    hle
                    <h1>{item.title}</h1>
                    <h2>{item.description}</h2>
                    <h2>{item.time}</h2>
                    <h2>{item.rating}</h2>
                    <Link href={`movies/${item._id}`}><button className="bg-black text-white">Details</button></Link>
                </div>
            </div>)

        }
    </main>
}



