
async function getData(id) {
    const res = await fetch(`http://localhost:3000/api/movies/${id}`, {
        cache: "no-store",
    });

    // console.log(res);

    if (!res.ok) {
        return 'error'
    }

    return res.json();
}



const MovieDetails = async ({ params }) => {
    console.log(params.id);

    const data = await getData(params.id);
    console.log(data);

    return (
        <div>
            <h2>{data.title}</h2>
            <h2>{data.description}</h2>
            <h2>{data.time}</h2>
            <h2>{data.rating}</h2>
        </div>
    );
};

export default MovieDetails;