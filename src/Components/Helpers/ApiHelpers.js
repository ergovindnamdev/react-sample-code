var productionApiUrl = 'https://dummyapi.io/data/v1/user/';
let appID = '626a305f9d0d1b40e6325066';

let PatchRequest = async (endPoint, requestBody) => {
    let result = await fetch(productionApiUrl + endPoint, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "app-id" : appID,
        },
        body: JSON.stringify(requestBody),
    });
    let response = await result.json();
    return response;
};
let PutRequest = async (endPoint, requestBody) => {
    let result = await fetch(productionApiUrl + endPoint, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "app-id" : appID,
        },
        body: JSON.stringify(requestBody),
    });
    let response = await result.json();
    return response;
};
let PutRequestFormControl = async (endPoint, requestBody) => {
    let result = await fetch(productionApiUrl + endPoint, {
        method: "PUT",
        headers: {
            "Access-Control-Allow-Origin": "*",
            "app-id" : appID,
        },
        body: requestBody,
    });
    let response = await result.json();
    return response;
};


let PostRequest = async (endPoint, requestBody) => {
    let result = await fetch(productionApiUrl + endPoint, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "app-id" : appID,
        },
        body: JSON.stringify(requestBody),
    });
    let response = await result.json();
    return response;
};
let GetRequest = async (endPoint) => {
   
    let result = await fetch(productionApiUrl + endPoint, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Origin": "*",
            "app-id" : appID,
        },
    });

    let response = await result.json();
    return response;
};


let DeleteRequest = async (endPoint) => {
    console.log(productionApiUrl + endPoint)
    let result = await fetch(productionApiUrl + endPoint, {
        method: "DELETE",
        headers: {
            "Access-Control-Allow-Origin": "*",
            "app-id" : appID,
        },
    });
    let response = await result.json();
    return response;
};

export { GetRequest, PatchRequest, PutRequest, PutRequestFormControl ,PostRequest,  DeleteRequest} 