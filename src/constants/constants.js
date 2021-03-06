const LANDSCAPE = "Landscape";
const PORTRAIT = "Portrait";
const BACKTEXTS = [{
    "text": "Card Maker By Team Justice",
    "locationX": 100,
    "locationY": 400,
    "fontName": "Times New Roman",
    "fontSize": "26",
    "fontType": "Normal"   
}, {
    "text": "Team: Chen, George, Hung, Sami",
    "locationX": 100,
    "locationY": 430,
    "fontName": "Times New Roman",
    "fontSize": "18",
    "fontType": "Normal"   
}];

const CONSTANTS = {
    EVENTS: ["Anniversary", "Back to School", "Baptism and Christening", "Baby", "Bar/Ba Mitzvah", "Birthday", "Confirmation", "Congratulations", "Encouragement", "First Communion", "Get Well", "Graduation", "Retirement", "Sympathy", "Teacher Appreciation", "Thank You", "Wedding"],
    ORIENTATIONS: [LANDSCAPE, PORTRAIT],
    LANDSCAPE: LANDSCAPE,
    PORTRAIT: PORTRAIT,
    PAGENAMES: ["front", "innerLeft", "innerRight", "back"],
    FONTS: ["Arial", "Comic Sans", "Courier New", "Lucida Calligraphy", "Times New Roman"],
    FONTSIZES: [10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60],
    FONTTYPES: ["Bold", "Italic", "Normal", "Oblique", "Small-caps"],
    BACKPAGE: {
        "name": "back",
        "pageId": "back101",
        "texts": BACKTEXTS,
        "images": [],                     
    }
};

export default CONSTANTS;