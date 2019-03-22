

const renderPeople = (response) => {

    response.forEach(item => {
        console.log(item.name)

        const displayCard = $(`<div class="card mb-3" style="max-width: 240px;">
                <div class="row no-gutters">
                    <div class="col-md-4">
                        <img src="${item.picture}"class="card-img" alt="...">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h4>${item.name} ${item.lastName}<h4>
                        </div>
                    </div>
                </div>
            </div>`)

        $("main").append(displayCard);

    })
}


export { renderPeople }