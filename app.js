function buildCard(data) {
    data.forEach(element => {
        const card = `
                <div class="contactContainer">
                <img src='${element.picture.large}'class="pictureImg">
                <div class="contactInformation">
                    <h3> ${element.name.first} ${element.name.last} </h3>
                    <h4> ${element.location.city} , ${element.location.country}</h4>
                    <h5>${element.email}</h5>
                    <h6> ${element.phone} </h6>
                </div>
            </div>
                `;
        $('#cardContainer').append(card);
    });

}


$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: "https://randomuser.me/api/?results=100",
        dataType: "json",
        success: async function (response) {
            await buildCard(response.results);
        }
    });
});