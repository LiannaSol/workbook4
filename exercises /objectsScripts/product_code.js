function parsePartCode(PartCode) {
    
    

    
    let partInformation = {
        supplierCode: "someValue",
        productNumber: "someValue",
        size: "some size",
    };
    return partInformation;
}

let PartCode1 = "XYZ:1234-L";
let partInformation = parsePartCode(PartCode1);
console.log(partInformation)

console.log(
    "Suplier: " +
    partInformation.supplierCode +
    " Product Number: " + 
    partInformation.productNumber +
    " size: " + 
    partInformation.size
);