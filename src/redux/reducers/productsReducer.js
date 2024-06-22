import { createReducer } from "@reduxjs/toolkit";

const initialState = {
    watches: [
        {
            brand: "Rolex",
            model: "Submariner",
            price: 8000,
            color: "Black",
            caseSize: "40mm",
            strapMaterial: "Stainless Steel",
            waterResistance: "300m",
            movementType: "Automatic",
            img: 'https://corkerro.github.io/volumenzeit/img/watches/Volumenzeit_S-1.png'
        },
        {
            brand: "Omega",
            model: "Speedmaster",
            price: 6000,
            color: "Silver",
            caseSize: "42mm",
            strapMaterial: "Stainless Steel",
            waterResistance: "50m",
            movementType: "Manual",
            img: 'https://corkerro.github.io/volumenzeit/img/watches/Volumenzeit_S-2.png'

        },
        {
            brand: "Tag Heuer",
            model: "Carrera",
            price: 4500,
            color: "Blue",
            caseSize: "41mm",
            strapMaterial: "Leather",
            waterResistance: "100m",
            movementType: "Automatic",
            img: 'https://corkerro.github.io/volumenzeit/img/watches/Volumenzeit_S-3.png'

        },
        {
            brand: "Breitling",
            model: "Navitimer",
            price: 7000,
            color: "Black",
            caseSize: "43mm",
            strapMaterial: "Stainless Steel",
            waterResistance: "30m",
            movementType: "Automatic",
            img: 'https://corkerro.github.io/volumenzeit/img/watches/Volumenzeit_S-2.png'

        },
        {
            brand: "Seiko",
            model: "Prospex",
            price: 500,
            color: "Green",
            caseSize: "44mm",
            strapMaterial: "Rubber",
            waterResistance: "200m",
            movementType: "Automatic",
            img: 'https://corkerro.github.io/volumenzeit/img/watches/Volumenzeit_S-1.png'

        },
        {
            brand: "Casio",
            model: "G-Shock",
            price: 150,
            color: "Red",
            caseSize: "48mm",
            strapMaterial: "Resin",
            waterResistance: "200m",
            movementType: "Quartz",
            img: 'https://corkerro.github.io/volumenzeit/img/watches/Volumenzeit_S-3.png'

        },
        {
            brand: "Patek Philippe",
            model: "Nautilus",
            price: 30000,
            color: "Blue",
            caseSize: "40mm",
            strapMaterial: "Stainless Steel",
            waterResistance: "120m",
            movementType: "Automatic",
            img: 'https://corkerro.github.io/volumenzeit/img/watches/Volumenzeit_S-1.png'

        },
        {
            brand: "Audemars Piguet",
            model: "Royal Oak",
            price: 25000,
            color: "Silver",
            caseSize: "41mm",
            strapMaterial: "Stainless Steel",
            waterResistance: "50m",
            movementType: "Automatic",
            img: 'https://corkerro.github.io/volumenzeit/img/watches/Volumenzeit_S-2.png'

        },
        {
            brand: "Tissot",
            model: "Le Locle",
            price: 800,
            color: "White",
            caseSize: "39mm",
            strapMaterial: "Leather",
            waterResistance: "30m",
            movementType: "Automatic",
            img: 'https://corkerro.github.io/volumenzeit/img/watches/Volumenzeit_S-3.png'

        },
        {
            brand: "Fossil",
            model: "Gen 5",
            price: 300,
            color: "Black",
            caseSize: "44mm",
            strapMaterial: "Silicone",
            waterResistance: "30m",
            movementType: "Quartz",
            img: 'https://corkerro.github.io/volumenzeit/img/watches/Volumenzeit_S-2.png'

        }
    ]
}

export const productsReducer = createReducer(initialState, (builder)=>{
    
})