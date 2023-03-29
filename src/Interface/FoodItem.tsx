// {
//     "food": {
//     "foodId": "food_a94vzjzbks4ukmbd74yn2a04lv8h",
//         "uri": "http://www.edamam.com/ontologies/edamam.owl#Food_FDCBR_1077485",
//         "label": "Hamburger Buns, Hamburger",
//         "nutrients": {
//              "ENERC_KCAL": 281,
//             "PROCNT": 8.770000457763672,
//             "FAT": 2.630000114440918,
//             "CHOCDF": 52.630001068115234,
//             "FIBTG": 1.7999999523162842
//     },
//     "brand": "Bimbo Bakeries USA, Inc.",
//         "category": "Packaged foods",
//         "categoryLabel": "food",
//         "foodContentsLabel": "ENRICHED WHEAT FLOUR [FLOUR; MALTED BARLEY FLOUR; REDUCED IRON; NIACIN; THIAMIN MONONITRATE (VITAMIN B1); RIBOFLAVIN (VITAMIN B2); FOLIC ACID]; WATER; SUGAR; YEAST; SOYBEAN OIL; WHEAT GLUTEN; SALT; MONOGLYCERIDES; CALCIUM PROPIONATE (PRESERVATIVE) DATEM; GRAIN VINEGAR; MONOCALCIUM PHOSPHATE; CALCIUM SULFATE; CITRIC ACID; POTASSIUM IODATE; SOY LECITHIN.",
//         "image": "https://www.edamam.com/food-img/821/8211fa39a73b8e62e45742a009d2b8b0.jpg"
// }
// }

interface FoodItem {
    food: {
        foodId: string;
        label: string;
        image: string;
        nutrients: {
            ENERC_KCAL: number;
            PROCNT: number;
            FAT: number;
            CHOCDF: number;
            FIBTG: number;
        }
    };
}

export default FoodItem;