$(document).ready(function() {
    
        $('#c1').click(function(){
            confirm("Combo Completo de MOVIX -> $20.50");
        });

        $('#c2').click(function(){
            confirm("Nachos, panchos y coca grande -> $18.50");
        });

        $('#c3').click(function(){
            confirm("Pop, pancho y coca mediano -> $16.50");
        });

        $('#c4').click(function(){
            confirm("Pop gradne y dos cocas medianas -> $18.00");
        });

        $('#c5').click(function(){
            confirm("Nachos, panchos y coca grande -> $18.50");
        });

        
        function traer(){
            fetch('https://api.movie.com.uy/api/shows/rss/data')
            .then(res => res.json())
            .then(data => {
                if(data.contentCinemaShows[0].cinemaShows[0].cinema == 'Movie Punta Carretas'){
                var count = 0;
                data.contentCinemaShows.forEach(element => {
                    document.getElementById('movie'+count).innerHTML = 
                    `<img src="${element.posterURL}" class="img-fluid"> `;
                    count++;
                }); 
            }
            })
        }

        function traer3(){
            fetch('https://api.movie.com.uy/api/shows/rss/data')
            .then(res => res.json())
            .then(data => {
                if(data.contentCinemaShows[0].cinemaShows[0].cinema == 'Movie Montevideo'){
                var count = 0;
                data.contentCinemaShows.forEach(element => {
                    document.getElementById('movie'+count).innerHTML = 
                    `<img src="${element.posterURL}" class="img-fluid"> `;
                    count++;
                }); 
            }
            })
        }

        function traer2(){
            fetch('https://api.movie.com.uy/api/shows/rss/data')
            .then(res => res.json())
            .then(data => {
                if(data.contentCinemaShows[0].cinemaShows[0].cinema == 'Movie Portones'){
                var count = 0;
                data.contentCinemaShows.forEach(element => {
                    document.getElementById('movie'+count).html = 
                    `<img src="${element.posterURL}" class="img-fluid"> `;
                    count++;
                }); 
            }
            })
        }

        function datos(){
            fetch('https://api.movie.com.uy/api/shows/rss/data')
            .then(res => res.json())
            .then(data => {
                
                    confirm("Uds selecciono "+data.contentCinemaShows[0].movie);
            
            }); 
        }
        function datos2(){
            fetch('https://api.movie.com.uy/api/shows/rss/data')
            .then(res => res.json())
            .then(data => {
                confirm("Uds selecciono "+data.contentCinemaShows[1].movie);
            }); 
        }

        $(pcs).click(traer);
       $(movie0).click(datos);
       $(movie1).click(datos2);
       $(ms).click(traer2);
       $(ps).click(traer3);
        

    });