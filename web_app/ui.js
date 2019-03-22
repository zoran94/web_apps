

const renderPeople = (response) => {
    
    response.forEach(item => {
       

        const displayCard = $(`
                <div class="row">
                <div class="">
                <img src="${item.picture}"class="card-img" alt="...">
                </div>
                <div class="col-lg-8">
                <div class="">
                <h4>${item.name} ${item.lastName}<h4>
                <p>Email: ${item.email}</p>
                <p>${item.date}</p>
                </div>
                </div>
                
                </div>`

                )
                    if(item.gender === "female"){       
                              
                        $(".row").addClass("pink")
                    }

                $("main").append(displayCard);

    })
}


export { renderPeople }