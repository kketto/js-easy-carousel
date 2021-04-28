let links = ['https://cdn.shopify.com/s/files/1/0901/0816/products/Explosive_Morning_Desktop_1_2048x.JPG?v=1568967112',
    'https://s3.amazonaws.com/fest-production/2015/07/03/22/20/45/948/Electric_Forest_2015_Keith_Griner_9.jpg',
    'https://steamuserimages-a.akamaihd.net/ugc/940586530515504757/CDDE77CB810474E1C07B945E40AE4713141AFD76/'];

let currentValue = 0;
let interval;



function next(fromClick) {
    if (fromClick) {
        clearInterval(interval);
        interval = setInterval(next, 5000);
    }

    if (currentValue !== links.length - 1) {
        currentValue++;
    } else {
        currentValue = 0;
    }
    document.getElementById("image").src = links[currentValue];
}

function prev() {

    if (currentValue === 0) {
        currentValue = links.length - 1;

    } else {
        currentValue--;
    }
    document.getElementById("image").src = links[currentValue];
}


interval = setInterval(next, 5000);

