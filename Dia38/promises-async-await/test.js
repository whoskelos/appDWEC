/**PRUBEAS PROMESAS Y ASYNC AWAIT */

function getData() {
    return new Promise((resolve, reject) => {
        if (data.length === 0) {
            reject(new Error("Data is empty"));
        }
        setTimeout(() => {
            resolve(data);
        }, 2000);
    });
}

// getData()
//     .then((response) => console.log(response))
//     .catch((err) => console.log(err.message));

async function fetchingData() {
    const books = await getData();
    console.log(books);
}
fetchingData();

/**PRUBEAS PROMESAS Y ASYNC AWAIT */