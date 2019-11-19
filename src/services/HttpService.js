import URLS from './constants/urls';

class HttpService {
    async get(url, callback) {
        var xhr = new XMLHttpRequest();
        url = `${URLS.API_URL}url`;

        xhr.open("GET", url);
        xhr.send();

        xhr.onloadend = function () {
            this.handleResponse(xhr, callback);
        };

        return xhr;
    }

    async post(url, data, callback) {
        var xhr = new XMLHttpRequest();
        url = `${URLS.API_URL}url`;

        var js = JSON.stringify(data);
        xhr.open("POST", url, true);
        xhr.send(js);

        xhr.onloadend = function () {
            this.handleResponse(xhr, callback);
        };

        return xhr;
    }

    handleResponse(xhr, callbackSuccess, callbackError=null) {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                callbackSuccess(xhr.responseText);
            } else if (xhr.status === 400) {
                alert ("unable to process request");
            }
        } else {
            callbackError();
        }
    }
}

export const httpService = new HttpService();