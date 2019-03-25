

const renderPeople = (response) => {
    
    response.forEach(item => {
       
//<div class="row">
        const displayCard = $(`
      <div class="row ${item.gender === 'female' ? 'pink' : ''}">
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
                
                $("main").append(displayCard);
                    // if(item.gender === "male"){       
                              
                    //     $(".row").addClass("pink");
                      
                    // }
                    
                })
}


export { renderPeople }