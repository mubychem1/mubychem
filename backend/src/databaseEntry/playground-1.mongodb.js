/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.
use('mubychem');

// Insert a few documents into the sales collection.


// db.getCollection('products').insertMany([
//     {
//         "product_name": "ACACIA", 
//         "img": "https://res.cloudinary.com/dqwovqy2u/image/upload/v1744104965/acacia-gum-power1_yotiqe.png ", 
//         "cas_no": "9000-01-5", 
//         "molecular_formula": "(C5H8O4)n(C14H23O10)m", 
//         "commonId": "1"
//     },
//     {
//         "product_name": "ACETONE", 
//         "img": "https://res.cloudinary.com/dqwovqy2u/image/upload/v1744104965/acacia-gum-power1_yotiqe.png ", 
//         "cas_no": "67-64-1", 
//         "molecular_formula": "C3H6O or CH3COCH3", 
//         "commonId": "2"
//     },
//     {
//         "product_name": "ACTIVATED CHARCOAL", 
//         "img": "https://res.cloudinary.com/dqwovqy2u/image/upload/v1744104965/acacia-gum-power1_yotiqe.png ", 
//         "cas_no": "7440-44-0", 
//         "molecular_formula": "C", 
//         "commonId": "3"
//     },
//     {
//         "product_name": "ADIPIC ACID", 
//         "img": "https://res.cloudinary.com/dqwovqy2u/image/upload/v1744104965/acacia-gum-power1_yotiqe.png ", 
//         "cas_no": " 124-04-9", 
//         "molecular_formula": "C6H10O4", 
//         "commonId": "4"
//     },
//     {
//         "product_name": "ALUM", 
//         "img": "https://res.cloudinary.com/dqwovqy2u/image/upload/v1744104965/acacia-gum-power1_yotiqe.png ", 
//         "cas_no": "7784-24-9", 
//         "molecular_formula": "KAl(SO₄)₂·12H₂O", 
//         "commonId": "5"
//     },
//     {
//         "product_name": "ALUMINIUM CHLORIDE HEXAHYDRATE", 
//         "img": "https://res.cloudinary.com/dqwovqy2u/image/upload/v1744104965/acacia-gum-power1_yotiqe.png ", 
//         "cas_no": "7784-13-6", 
//         "molecular_formula": "AlCl3·6H2O", 
//         "commonId": "6"
//     },
//     {
//         "product_name": "ALUMINIUM CHLORIDE", 
//         "img": "https://res.cloudinary.com/dqwovqy2u/image/upload/v1744104965/acacia-gum-power1_yotiqe.png ", 
//         "cas_no": "7446-70-0", 
//         "molecular_formula": "AlCl₃", 
//         "commonId": "7"
//     },
//     {
//         "product_name": "ALUMINIUM CHLOROHYDRATE SOLUTION", 
//         "img": "https://res.cloudinary.com/dqwovqy2u/image/upload/v1744104965/acacia-gum-power1_yotiqe.png ", 
//         "cas_no": "12042-91-0", 
//         "molecular_formula": "Al₂ClH₅O₅", 
//         "commonId": "8"
//     },
//     {
//         "product_name": "ALUMINIUM GLYCINATE", 
//         "img": "https://res.cloudinary.com/dqwovqy2u/image/upload/v1744104965/acacia-gum-power1_yotiqe.png ", 
//         "cas_no": "13682-92-3", 
//         "molecular_formula": "Al₂ClH₅O₅", 
//         "commonId": "9"
//     },
//     {
//         "product_name": "ALUMINIUM MAGNESIUM SILICATE", 
//         "img": "https://res.cloudinary.com/dqwovqy2u/image/upload/v1744104965/acacia-gum-power1_yotiqe.png ", 
//         "cas_no": "1327-43-1", 
//         "molecular_formula": "MgAl2(SiO4)2", 
//         "commonId": "10"
//     },
//     {
//         "product_name": "ALUMINIUM PHOSPHATE GEL", 
//         "img": "https://res.cloudinary.com/dqwovqy2u/image/upload/v1744104965/acacia-gum-power1_yotiqe.png ", 
//         "cas_no": "7784-30-7", 
//         "molecular_formula": "AlPO4", 
//         "commonId": "11"
//     },
//     {
//         "product_name": "ALUMINIUM SODIUM SILICATE", 
//         "img": "https://res.cloudinary.com/dqwovqy2u/image/upload/v1744104965/acacia-gum-power1_yotiqe.png ", 
//         "cas_no": "1344-00-9", 
//         "molecular_formula": "AlNa12SiO5", 
//         "commonId": "12"
//     },
//     {
//         "product_name": "ALUMINIUM SULFATE", 
//         "img": "https://res.cloudinary.com/dqwovqy2u/image/upload/v1744104965/acacia-gum-power1_yotiqe.png ", 
//         "cas_no": " 10043-01-3", 
//         "molecular_formula": "Al₂(SO₄)₃", 
//         "commonId": "13"
//     },
//     {
//         "product_name": "ALUMINIUM SULPHATE", 
//         "img": "https://res.cloudinary.com/dqwovqy2u/image/upload/v1744104965/acacia-gum-power1_yotiqe.png ", 
//         "cas_no": "10043-01-3", 
//         "molecular_formula": "Al₂(SO₄)₃", 
//         "commonId": "14"
//     },

// ])

const updates =[
    // {
    //     commonId: "1",
    //     img:"/src/assets/product_list/acacia-gum.png"
    // },
    // {
    //     commonId: "2",
    //     img:"/assets/product_list/acetone.png"
    // },
    // {
    //     commonId: "3",
    //     img:"/src/assets/product_list/activatedCharcoal.png"
    // },
    // {
    //     commonId: "4",
    //     img:"/src/assets/product_list/adipicAcid.png"
    // },
    // {
    //     commonId: "5",
    //     img:"/src/assets/product_list/alum.png"
    // },
    // {
    //     commonId: "6",
    //     img:"/src/assets/product_list/Aluminum_Chloride_Hexahydrate.png"
    // },
    // {
    //     commonId: "14",
    //     img:"/src/assets/product_list/aluminiumSulfate.png"
    // },
    // {
    //     commonId: "8",
    //     img:"/src/assets/product_list/aluminiumChlorohydrateSolution.png"
    // },
    {
        commonId: "11",
        img:"/src/assets/product_list/aluminiumPhosphateGel.png"
    },
    {
        commonId: "13",
        img:"/src/assets/product_list/aluminiumPhosphateGel.png"
    },
]

updates.forEach(update => {
    db.getCollection('products').updateOne(
      { commonId: update.commonId },
      { $set: { img: update.img } }
    );
  });
