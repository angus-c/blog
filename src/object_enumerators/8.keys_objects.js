//Chrome, Safari, FF4, IE9

Object.keys("potato");
//TypeError: Object.keys called on non-object

Object.getOwnPropertyNames("potato");
//TypeError: Object.getOwnPropertyNames called on non-object

//Chrome, Safari, FF4, IE9

Object.keys(new String("potato"))
//["0", "1", "2", "3", "4", "5"]

Object.getOwnPropertyNames(new String("potato"))
//["0", "1", "2", "3", "4", "5", "length"]
