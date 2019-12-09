const LANDSCAPE = "Landscape";
const PORTRAIT = "Portrait";
const BACKTEXTS = [{
    "text": "Card Maker By Team Justice",
    "locationX": 350,
    "locationY": 400,
    "fontName": "Times New Roman",
    "fontSize": "26",
    "fontType": "Normal"   
}, {
    "text": "Team: Chen, George, Hung, Sami",
    "locationX": 350,
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
    FONTS: ["Comic San", "Arial", "Times New Roman"],
    FONTSIZES: [10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36],
    FONTTYPES: ["Normal", "Italic", "Bold", "Underline"],
    BACKPAGE: {
        "name": "back",
        "pageId": "back101",
        "texts": BACKTEXTS,
        "images": [],                     
    }
};

export default CONSTANTS;