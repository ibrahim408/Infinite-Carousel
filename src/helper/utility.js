const parseResponse = function(response) {
    if (response.data){
        return response.data;
    } else {
        return [];
    }
}

export {parseResponse};