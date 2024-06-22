

// document.addEventListener("DOMContentLoaded", function() {
//     const fruits = [
//         {
//             name: "Apple",
//             title: "Delicious Fruit",
//             description: "An apple is a sweet, edible fruit produced by an apple tree.",
//             types: ["Red Delicious", "Granny Smith", "Fuji"]
//         },
//         {
//             name: "Apple",
//             title: "Delicious Fruit",
//             description: "An apple is a sweet, edible fruit produced by an apple tree.",
//             types: ["Red Delicious", "Granny Smith", "Fuji"]
            
//         },
//         {
//             name: "Grapes",
//             title: "Delicious Fruit",
//             description: "An apple is a sweet, edible fruit produced by an apple tree.",
//             types: ["Red Delicious", "Granny Smith", "Fuji"]
//         },
//         {
//             name: "Apple",
//             title: "Delicious Fruit",
//             description: "An apple is a sweet, edible fruit produced by an apple tree.",
//             types: ["Red Delicious", "Granny Smith", "Fuji"]
//         },
//         {
//             name: "Apple",
//             title: "Delicious Fruit",
//             description: "An apple is a sweet, edible fruit produced by an apple tree.",
//             types: ["Red Delicious", "Granny Smith", "Fuji"]
//         },
//         {
//             name: "Apple",
//             title: "Delicious Fruit",
//             description: "An apple is a sweet, edible fruit produced by an apple tree.",
//             types: ["Red Delicious", "Granny Smith", "Fuji"]
//         },
//         // Add other fruits similarly
//     ];

//     const container = document.getElementById("container");

//     fruits.forEach((fruit, index) => {
//         const card = document.createElement("div");
//         card.classList.add("fruit-card");

//         const image = document.createElement("img");
//         image.src = `https://images.unsplash.com/photo-1584306670957-acf935f5033c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFwcGxlfGVufDB8fDB8fHww${fruit.name.toLowerCase()}.jpg`; // Assuming image names are lowercase fruit names
//         image.alt = fruit.name;
//         card.appendChild(image);

//         const info = document.createElement("div");
//         info.classList.add("info");

//         const name = document.createElement("h2");
//         name.textContent = fruit.name;
//         info.appendChild(name);

//         const title = document.createElement("p");
//         title.classList.add("title");
//         title.textContent = fruit.title;
//         info.appendChild(title);

//         const description = document.createElement("p");
//         description.classList.add("description");
//         description.textContent = fruit.description;
//         info.appendChild(description);

//         const types = document.createElement("p");
//         types.classList.add("types");
//         types.textContent = "Types: " + fruit.types.join(", ");
//         info.appendChild(types);

//         const editBtn = document.createElement("button");
//         editBtn.classList.add("edit-btn");
//         editBtn.textContent = "Edit";
//         editBtn.addEventListener("click", function() {
//             const newText = prompt("Enter new description:");
//             if (newText !== null) {
//                 description.textContent = newText;
//             }
//         });
//         info.appendChild(editBtn);

//         const deleteBtn = document.createElement("button");
//         deleteBtn.classList.add("delete-btn");
//         deleteBtn.textContent = "Delete";
//         deleteBtn.addEventListener("click", function() {
//             container.removeChild(card);
//             fruits.splice(index, 1);
//         });
//         info.appendChild(deleteBtn);

//         card.appendChild(info);
//         container.appendChild(card);
//     });
// });









// document.addEventListener("DOMContentLoaded", function() {
//     const fruits = [
//         {
//             name: "Apple",
//             title: "Delicious Fruit",
//             description: "An apple is a sweet, edible fruit produced by an apple tree.",
//             types: ["Red Delicious", "Granny Smith", "Fuji"],
//             image: "apple.img.jpg" // Updated image file name
//         },
//         {
//             name: "Banana",
//             title: "Tropical Fruit",
//             description: "A banana is an elongated, edible fruit produced by several kinds of large herbaceous flowering plants in the genus Musa.",
//             types: ["Cavendish", "Lady Finger", "Red Banana"],
//             image: "banana.img.jpg" // Updated image file name
//         },
//         {
//             name: "Orange",
//             title: "Citrus Fruit",
//             description: "An orange is a citrus fruit that is round and orange in color, with a tough outer skin and juicy, sweet pulp.",
//             types: ["Navel", "Valencia", "Blood Orange"],
//             image: "orange.img.jpg" // Updated image file name
//         },
//         {
//             name: "Strawberry",
//             title: "Sweet Berry",
//             description: "A strawberry is a red, juicy fruit that grows on low plants with white flowers.",
//             types: ["Albion", "Seascape", "Camino Real"],
//             image: "strawberry.img.jpg" // Updated image file name
//         },
//         {
//             name: "Grapes",
//             title: "Vine Fruit",
//             description: "Grapes are small, round, sweet or sour berries that grow in bunches on a vine.",
//             types: ["Cabernet Sauvignon", "Chardonnay", "Thompson Seedless"],
//             image: "grapes.img.jpg" // Updated image file name
//         },
//         // Add more fruits as needed
//     ];

//     const container = document.getElementById("container");

//     fruits.forEach((fruit, index) => {
//         const card = document.createElement("div");
//         card.classList.add("fruit-card");

//         const image = document.createElement("img");
//         image.src = `images/${fruit.image}`; // Updated to use dynamic image source
//         image.alt = fruit.name;
//         card.appendChild(image);

//         const info = document.createElement("div");
//         info.classList.add("info");

//         const name = document.createElement("h2");
//         name.textContent = fruit.name;
//         info.appendChild(name);

//         const title = document.createElement("p");
//         title.classList.add("title");
//         title.textContent = fruit.title;
//         info.appendChild(title);

//         const description = document.createElement("p");
//         description.classList.add("description");
//         description.textContent = fruit.description;
//         info.appendChild(description);

//         const types = document.createElement("p");
//         types.classList.add("types");
//         types.textContent = "Types: " + fruit.types.join(", ");
//         info.appendChild(types);

//         const editBtn = document.createElement("button");
//         editBtn.classList.add("edit-btn");
//         editBtn.textContent = "Edit";
//         editBtn.addEventListener("click", function() {
//             const newText = prompt("Enter new description:");
//             if (newText !== null) {
//                 description.textContent = newText;
//             }
//         });
//         info.appendChild(editBtn);

//         const deleteBtn = document.createElement("button");
//         deleteBtn.classList.add("delete-btn");
//         deleteBtn.textContent = "Delete";
//         deleteBtn.addEventListener("click", function() {
//             container.removeChild(card);
//             fruits.splice(index, 1);
//         });
//         info.appendChild(deleteBtn);

//         card.appendChild(info);
//         container.appendChild(card);
//     });
// });





// document.addEventListener("DOMContentLoaded", function() {
//     const fruits = [
//         {
//             name: "Apple",
//             title: "Delicious Fruit",
//             description: "An apple is a sweet, edible fruit produced by an apple tree.",
//             types: ["Red Delicious", "Granny Smith", "Fuji"],
//             imageUrl: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmFuYW5hfGVufDB8fDB8fHww", // URL for Apple image
//             backgroundUrl: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmFuYW5hfGVufDB8fDB8fHww" // URL for Apple background image
//         },
//         {
//             name: "Banana",
//             title: "Tropical Fruit",
//             description: "A banana is an elongated, edible fruit produced by several kinds of large herbaceous flowering plants in the genus Musa.",
//             types: ["Cavendish", "Lady Finger", "Red Banana"],
//             imageUrl: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmFuYW5hfGVufDB8fDB8fHww", // URL for Banana image
//             backgroundUrl: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmFuYW5hfGVufDB8fDB8fHww" // URL for Banana background image
//         },
//         {
//             name: "Orange",
//             title: "Tropical Fruit",
//             description: "A banana is an elongated, edible fruit produced by several kinds of large herbaceous flowering plants in the genus Musa.",
//             types: ["Cavendish", "Lady Finger", "Red Banana"],
//             imageUrl: "https://images.unsplash.com/photo-1547514701-42782101795e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG9yYW5nZXxlbnwwfHwwfHx8MA%3D%3D", // URL for Banana image
//             backgroundUrl: "https://images.unsplash.com/photo-1547514701-42782101795e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG9yYW5nZXxlbnwwfHwwfHx8MA%3D%3D" // URL for Banana background image
//         },
//         {
//             name: "Banana",
//             title: "Tropical Fruit",
//             description: "A banana is an elongated, edible fruit produced by several kinds of large herbaceous flowering plants in the genus Musa.",
//             types: ["Cavendish", "Lady Finger", "Red Banana"],
//             imageUrl: "https://images.unsplash.com/photo-1547514701-42782101795e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG9yYW5nZXxlbnwwfHwwfHx8MA%3D%3D", // URL for Banana image
//             backgroundUrl: "https://images.unsplash.com/photo-1547514701-42782101795e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG9yYW5nZXxlbnwwfHwwfHx8MA%3D%3D" // URL for Banana background image
//         },
//         {
//             name: "Banana",
//             title: "Tropical Fruit",
//             description: "A banana is an elongated, edible fruit produced by several kinds of large herbaceous flowering plants in the genus Musa.",
//             types: ["Cavendish", "Lady Finger", "Red Banana"],
//             imageUrl: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmFuYW5hfGVufDB8fDB8fHww", // URL for Banana image
//             backgroundUrl: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmFuYW5hfGVufDB8fDB8fHww" // URL for Banana background image
//         },
//         // Add more fruits with their respective URLs
//     ];

//     const container = document.getElementById("container");

//     fruits.forEach((fruit, index) => {
//         const card = document.createElement("div");
//         card.classList.add("fruit-card");
//         card.style.backgroundImage = `url(${fruit.backgroundUrl})`; // Set background image

//         const image = document.createElement("img");
//         image.src = fruit.imageUrl; // Set image URL
//         image.alt = fruit.name;
//         card.appendChild(image);

//         const info = document.createElement("div");
//         info.classList.add("info");

//         const name = document.createElement("h2");
//         name.textContent = fruit.name;
//         info.appendChild(name);

//         const title = document.createElement("p");
//         title.classList.add("title");
//         title.textContent = fruit.title;
//         info.appendChild(title);

//         const description = document.createElement("p");
//         description.classList.add("description");
//         description.textContent = fruit.description;
//         info.appendChild(description);

//         const types = document.createElement("p");
//         types.classList.add("types");
//         types.textContent = "Types: " + fruit.types.join(", ");
//         info.appendChild(types);

//         const editBtn = document.createElement("button");
//         editBtn.classList.add("edit-btn");
//         editBtn.textContent = "Edit";
//         editBtn.addEventListener("click", function() {
//             const newText = prompt("Enter new description:");
//             if (newText !== null) {
//                 description.textContent = newText;
//             }
//         });
//         info.appendChild(editBtn);

//         const deleteBtn = document.createElement("button");
//         deleteBtn.classList.add("delete-btn");
//         deleteBtn.textContent = "Delete";
//         deleteBtn.addEventListener("click", function() {
//             container.removeChild(card);
//             fruits.splice(index, 1);
//         });
//         info.appendChild(deleteBtn);

//         card.appendChild(info);
//         container.appendChild(card);
//     });
// });








// var fruits = [
//     {
//       name: "Mango",
//       title: "Phalon ka badshah",
//       types: ["Chounsa", "Sindhri", "Langra", "Anwaratol", "Almaas"],
//       desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. ",
//       image:
//         "https://images.unsplash.com/photo-1591073113125-e46713c829ed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8TWFuZ298ZW58MHx8MHx8fDA%3D",
//     },
//     {
//       name: "Watermelon",
//       title: "Garmi ka dushman",
//       types: ["Red Melon", "Green Melon"],
//       image:
//         "https://images.unsplash.com/photo-1621583441131-c8c190794970?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2F0ZXIlMjBtZWxvbnxlbnwwfHwwfHx8MA%3D%3D",
//     },
//     {
//       name: "Peach",
//       title: "Juicy Peach",
//       types: ["Swat Wala", "Quetta Wala"],
//       image:
//         "https://images.unsplash.com/photo-1629828874514-c1e5103f2150?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGVhY2h8ZW58MHx8MHx8fDA%3D",
//     },
//     {
//       name: "Cherry",
//       title: "Khoon banane wali",
//       types: ["Black Cherry", "Red Cherry"],
//       image:
//         "https://plus.unsplash.com/premium_photo-1688671921089-628b61dae149?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2hlcnJ5fGVufDB8fDB8fHww",
//     },
//   ];
//   fruits.forEach(function (data, ind) {
//     var ele = `<div class="lg:w-1/3  sm:w-1/2 p-4">
//     <div class="flex relative h-[250px]">
//       <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="${
//         data.image
//       }">
//       <div id = ${ind} class="px-8 py-10  relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
//         <h2 class="tracking-widest text-xl title-font font-medium text-indigo-500 mb-1">${
//           data.name
//         }</h2>
//         <h1 class="title-font text-2xl font-medium text-gray-900 mb-3">${
//           data.title
//         }</h1>
//         <p class="leading-relaxed">${data.types.join(" , ")}</p>
//         <p class="leading-relaxed">${data.desc} </p>
//         <button onclick="updateDesc(this)">update</button>
//       </div>
//     </div>
//   </div>`;
//     list.innerHTML += ele;
//   });
  
//   function updateDesc(ele) {
//     console.log("ele=>", ele.previousElementSibling);
//     console.log("ele parentr=>", ele.parentElement);
//   }
//   var index = ele.parentElement.id;
//   fruits[index].desc = prompt("Desc");
//   console.log("fruits-->", fruits);
//   fruits.forEach(function (data, ind) {
//     var ele = `<div class="lg:w-1/3  sm:w-1/2 p-4">
//     <div class="flex relative h-[250px]">
//       <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="${
//         data.image
//       }">
//       <div id = ${ind} class="px-8 py-10  relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
//         <h2 class="tracking-widest text-xl title-font font-medium text-indigo-500 mb-1">${
//           data.name
//         }</h2>
//         <h1 class="title-font text-2xl font-medium text-gray-900 mb-3">${
//           data.title
//         }</h1>
//         <p class="leading-relaxed">${data.types.join(" , ")}</p>
//         <p class="leading-relaxed">${data.desc} </p>
//         <button onclick="updateDesc(this)">update</button>
//       </div>
//     </div>
//   </div>`;
//     list.innerHTML += ele;
// });

// var desc = prompt("Desc");
// ele.previousElementSibling.innerText = desc;




var fruits = [
    {
      name: "Mango",
      title: "Phalon ka badshah",
      types: ["Chounsa", "Sindhri", "Langra", "Anwaratol", "Almaas"],
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. ",
      image:
        "https://images.unsplash.com/photo-1591073113125-e46713c829ed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8TWFuZ298ZW58MHx8MHx8fDA%3D",
    },
    {
      name: "Watermelon",
      title: "Garmi ka dushman",
      types: ["Red Melon", "Green Melon"],
      image:
        "https://images.unsplash.com/photo-1621583441131-c8c190794970?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2F0ZXIlMjBtZWxvbnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      name: "Peach",
      title: "Juicy Peach",
      types: ["Swat Wala", "Quetta Wala"],
      image:
        "https://images.unsplash.com/photo-1629828874514-c1e5103f2150?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGVhY2h8ZW58MHx8MHx8fDA%3D",
    },
    {
      name: "Cherry",
      title: "Khoon banane wali",
      types: ["Black Cherry", "Red Cherry"],
      image:
        "https://plus.unsplash.com/premium_photo-1688671921089-628b61dae149?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2hlcnJ5fGVufDB8fDB8fHww",
    },
  ];

fruits.forEach(function (data, ind) {
    var ele = `<div class="lg:w-1/3  sm:w-1/2 p-4">
    <div class="flex relative h-[250px]">
      <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="${
        data.image
      }">
      <div id = ${ind} class="px-8 py-10  relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
        <h2 class="tracking-widest text-xl title-font font-medium text-indigo-500 mb-1">${
          data.name
        }</h2>
        <h1 class="title-font text-2xl font-medium text-gray-900 mb-3">${
          data.title
        }</h1>
        <p class="leading-relaxed">${data.types.join(" , ")}</p>
        <p class="leading-relaxed">${data.desc} </p>
        <button onclick="updateDesc(${ind})">update</button>
      </div>
    </div>
  </div>`;
    list.innerHTML += ele;
});

function updateDesc(index) {
    var newDesc = prompt("Update new description:");
    if (newDesc !== null) {
        fruits[index].desc = newDesc;
        list.innerHTML = ""; // Clear existing HTML
        fruits.forEach(function (data, ind) {
            var ele = `<div class="lg:w-1/3  sm:w-1/2 p-4">
            <div class="flex relative h-[250px]">
              <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="${
                data.image
              }">
              <div id = ${ind} class="px-8 py-10  relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                <h2 class="tracking-widest text-xl title-font font-medium text-indigo-500 mb-1">${
                  data.name
                }</h2>
                <h1 class="title-font text-2xl font-medium text-gray-900 mb-3">${
                  data.title
                }</h1>
                <p class="leading-relaxed">${data.types.join(" , ")}</p>
                <p class="leading-relaxed">${data.desc} </p>
                <button onclick="updateDesc(${ind})">update</button>
              </div>
            </div>
          </div>`;
            list.innerHTML += ele;
        });
    }
}
 