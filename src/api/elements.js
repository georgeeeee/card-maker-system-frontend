import httpService from '../services/HttpService';

class ElementApi {
    static listAllCards(callback) {
        let url = `/cards`;

        return httpService.get(url, callback);
    }

    static addTextElement(pageId, text, callback) {
        let url = `/page/${pageId}/text`;

        return httpService.post(url, text, callback);
    }

    static editTextElement(pageId, elementId, text, callback) {
        let url = `/page/${pageId}/element/${elementId}/edit/text`;

        return httpService.post(url, text, callback);
    }

    static deleteElement(pageId, elementId, callback) {
        let url = `/page/${pageId}/element/${elementId}`;
        let data = {
            pageId,
            elementId
        };

        return httpService.post(url, data, callback);
    }

}

export default ElementApi;