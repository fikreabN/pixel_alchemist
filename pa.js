const goBack = document.querySelectorAll(".back");
const goFor = document.querySelectorAll(".for");
const bttn1 = document.querySelectorAll(".bttn-1");
const bttn2 = document.querySelectorAll(".bttn-2");
const container = document.querySelector(".w-cont");
const redNot = document.querySelector(".red-not");
const cart = document.getElementById("cart");
const dialog = document.querySelector("dialog")
const items = [
    {
        no: 1,
        img1: "1.jpg",
        img3: "11.jpg",
        name: "Headphones",
        price: "3,000"
    },
    {
        no: 3,
        img1: "3.jpg",
        img3: "33.jpg",
        name: "iphone 15 pro max",
        price: "100,000"
    },
    {
        no: 3,
        img1: "3.jpg",
        img3: "33.jpg",
        name: "Speaker",
        price: "3,500"
    },
    {
        no: 4,
        img1: "4.jpg",
        img3: "44.jpg",
        name: "Jacket",
        price: "1,000"
    },
    {
        no: 5,
        img1: "5.jpg",
        img3: "55.jpg",
        name: "Sofa",
        price: "13,000"
    },
    {
        no: 6,
        img1: "6.jpg",
        img3: "66.jpg",
        name: "Bean Bag Chair",
        price: "5,500"
    },
    {
        no: 7,
        img1: "7.jpg",
        img3: "77.jpg",
        name: "Shelf",
        price: "1,350"
    },
    {
        no: 8,
        img1: "8.jpg",
        img3: "88.jpg",
        name: "TV",
        price: "30,000"
    },
    {
        no: 9,
        img1: "9.jpg",
        img3: "99.jpg",
        name: "Vision Pro",
        price: "300,000"
    },
    {
        no: 10,
        img1: "10.jpg",
        img3: "1010.jpg",
        name: "Shoes",
        price: "5,000"
    }
]
function incr () {
    let count = 0;
    count += 1;
    const cont = parseFloat(redNot.textContent)
    redNot.innerHTML = cont + 1;
    redNot.style.opacity = 1;
    if (cont >= 9){
        redNot.style.width = "35px"
    }
    if (parseFloat(redNot.textContent) <= 1) {
        alert("Check your Cart!")
    }
    
}
for(let i = 0; i < bttn2.length; i++){
    bttn2[i].addEventListener("click", incr)
    
}
for(let i = 0; i < bttn1.length; i++){
    bttn1[i].addEventListener("click", () => {
    alert("Your order is placed!")
})
}
// 1
document.getElementById("back1").addEventListener("click", () => {
        document.getElementById("img1").classList.toggle("db");
        document.getElementById("img11").classList.toggle("db");
        document.getElementById("back1").classList.toggle("db");
        document.getElementById("for1").classList.toggle("db")
    })
document.getElementById("for1").addEventListener("click", () => {
        document.getElementById("img11").classList.toggle("db");
        document.getElementById("img1").classList.toggle("db");
        document.getElementById("for1").classList.toggle("db");
        document.getElementById("back1").classList.toggle("db")
    })
// 2
document.getElementById("back2").addEventListener("click", () => {
    document.getElementById("img2").classList.toggle("db");
    document.getElementById("img22").classList.toggle("db");
    document.getElementById("back2").classList.toggle("db");
    document.getElementById("for2").classList.toggle("db")
})
document.getElementById("for2").addEventListener("click", () => {
    document.getElementById("img22").classList.toggle("db");
    document.getElementById("img2").classList.toggle("db");
    document.getElementById("for2").classList.toggle("db");
    document.getElementById("back2").classList.toggle("db")
})
// 3
document.getElementById("back3").addEventListener("click", () => {
    document.getElementById("img3").classList.toggle("db");
    document.getElementById("img33").classList.toggle("db");
    document.getElementById("back3").classList.toggle("db");
    document.getElementById("for3").classList.toggle("db")
})
document.getElementById("for3").addEventListener("click", () => {
    document.getElementById("img33").classList.toggle("db");
    document.getElementById("img3").classList.toggle("db");
    document.getElementById("for3").classList.toggle("db");
    document.getElementById("back3").classList.toggle("db")
})
// 4
document.getElementById("back4").addEventListener("click", () => {
    document.getElementById("img4").classList.toggle("db");
    document.getElementById("img44").classList.toggle("db");
    document.getElementById("back4").classList.toggle("db");
    document.getElementById("for4").classList.toggle("db")
})
document.getElementById("for4").addEventListener("click", () => {
    document.getElementById("img44").classList.toggle("db");
    document.getElementById("img4").classList.toggle("db");
    document.getElementById("for4").classList.toggle("db");
    document.getElementById("back4").classList.toggle("db")
})
// 5
document.getElementById("back5").addEventListener("click", () => {
    document.getElementById("img5").classList.toggle("db");
    document.getElementById("img55").classList.toggle("db");
    document.getElementById("back5").classList.toggle("db");
    document.getElementById("for5").classList.toggle("db")
})
document.getElementById("for5").addEventListener("click", () => {
    document.getElementById("img55").classList.toggle("db");
    document.getElementById("img5").classList.toggle("db");
    document.getElementById("for5").classList.toggle("db");
    document.getElementById("back5").classList.toggle("db")
})
// 6
document.getElementById("back6").addEventListener("click", () => {
    document.getElementById("img6").classList.toggle("db");
    document.getElementById("img66").classList.toggle("db");
    document.getElementById("back6").classList.toggle("db");
    document.getElementById("for6").classList.toggle("db")
})
document.getElementById("for6").addEventListener("click", () => {
    document.getElementById("img66").classList.toggle("db");
    document.getElementById("img6").classList.toggle("db");
    document.getElementById("for6").classList.toggle("db");
    document.getElementById("back6").classList.toggle("db")
})
// 7
document.getElementById("back7").addEventListener("click", () => {
    document.getElementById("img7").classList.toggle("db");
    document.getElementById("img77").classList.toggle("db");
    document.getElementById("back7").classList.toggle("db");
    document.getElementById("for7").classList.toggle("db")
})
document.getElementById("for7").addEventListener("click", () => {
    document.getElementById("img77").classList.toggle("db");
    document.getElementById("img7").classList.toggle("db");
    document.getElementById("for7").classList.toggle("db");
    document.getElementById("back7").classList.toggle("db")
})
// 8
document.getElementById("back8").addEventListener("click", () => {
    document.getElementById("img8").classList.toggle("db");
    document.getElementById("img88").classList.toggle("db");
    document.getElementById("back8").classList.toggle("db");
    document.getElementById("for8").classList.toggle("db")
})
document.getElementById("for8").addEventListener("click", () => {
    document.getElementById("img88").classList.toggle("db");
    document.getElementById("img8").classList.toggle("db");
    document.getElementById("for8").classList.toggle("db");
    document.getElementById("back8").classList.toggle("db")
})
// 9
document.getElementById("back9").addEventListener("click", () => {
    document.getElementById("img9").classList.toggle("db");
    document.getElementById("img99").classList.toggle("db");
    document.getElementById("back9").classList.toggle("db");
    document.getElementById("for9").classList.toggle("db")
})
document.getElementById("for9").addEventListener("click", () => {
    document.getElementById("img99").classList.toggle("db");
    document.getElementById("img9").classList.toggle("db");
    document.getElementById("for9").classList.toggle("db");
    document.getElementById("back9").classList.toggle("db")
})
// 10
document.getElementById("back10").addEventListener("click", () => {
    document.getElementById("img10").classList.toggle("db");
    document.getElementById("img1010").classList.toggle("db");
    document.getElementById("back10").classList.toggle("db");
    document.getElementById("for10").classList.toggle("db")
})
document.getElementById("for10").addEventListener("click", () => {
    document.getElementById("img1010").classList.toggle("db");
    document.getElementById("img10").classList.toggle("db");
    document.getElementById("for10").classList.toggle("db");
    document.getElementById("back10").classList.toggle("db")
})
cart.addEventListener('click', (e) => {
    e.preventDefault()
    dialog.classList.toggle("db")
})
/*function display (objects = items) {
    container.innerHTML = objects.map((object) => {
        return `
        <div class="div-${object.no}">
            <img src="arr_b.png" class="back db"alt="" id="back${object.no}">              
                <img src="${object.img1}" alt="" class="img" id="img${object.no}">
                <img src="${object.img3} alt=""  class="db img" id="img${object.no}${object.no}">
            <img src="arr_f.png" class="for" alt="" id="for${object.no}">
            <p>${object.name}</p>
            <p>${object.price} Birr</p>
            <button class="bttn-1">Order Now</button>
            <button class="bttn-3">Add to Cart</button>
        </div>
        `
    }).join()
}
console.log(display())*/ 
/* <div class="div-8">
        <img src="arr_b.png" class="back db"alt="" id="back8">              
            <img src="8.jpg" alt="" class="img" id="img8">
            <img src="88.jpg" alt=""  class="db img" id="img88">
        <img src="arr_f.png" class="for" alt="" id="for8">
            <p>TV</p>
            <p>30,000</p>
            <button class="bttn-1">Order Now</button>
            <button class="bttn-2">Add to Cart</button>
            
        </div>

*/