const cargarPeliculas = async() => {
    const respuesta = await fetch("https://api.themoviedb.org/3/movie/550?api_key=d9cea79d90fc09560fb9bc8ef5fd21b4");

    console.log(respuesta);
}
cargarPeliculas();