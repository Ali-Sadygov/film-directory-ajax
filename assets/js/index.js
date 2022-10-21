$(document).ready(function () {
    const input = document.querySelector('.input')
    $('.btn').on('click', function () {
        $.ajax({
            url: "https://www.omdbapi.com/?i=tt3896198&apikey=dbb229df&t=" + input.value
        }).then(response => {
            if (response.Response === "True") {
                $('.title').html(response.Title);
                $('.released').html(response.Released);
                $('.image').attr('src', response.Poster);
                $('.director').html(response.Director)
            } else {
                $('.title').html("Təəssüfki belə bir film yoxdur((");
                $('.released').html("");
                $('.director').html("");
                $('.image').removeAttr('src');
            }
        })
    })
})
