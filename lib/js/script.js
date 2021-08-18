// const FireStore = require("@google-cloud/firestore");
// var firebase = require("firebase-admin");


// firebase.initializeApp({
//   credential: firebase.credential.cert({
//     type: "service_account",
//     project_id: "computerworld-4ef27",
//     private_key_id: "49b7635dbcfc351e47a3d1eeac5b4a5461baa86a",
//     private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQC6v3jEMbM8iCL2\niv+0xUm6W1CfBdw8I6/z6tt/XNOe4wbZ4ySPU/+2GdDKu/uIV3vD4vKBGqgUJ+IW\nZSUpwSmCYaxWttCi/5E0AFKNTwi6HMDGnV5quoS6/qE1Fz3Mad+oRXOHDGcxzMHB\nW27Myc/8CZhUf8lRfVGH14OQAno0AGWlgPrCgfLFNdObD8Fx8tOOI81uX393/zlb\n122vE6xRyZ8ZmNlwlTVMaK1qIGu4tCPQCchPpTr+LMfp4lSutXV6E1MMERGYZz7G\nHi75bQuuZKi+Lrd2Y3zqfnk4sHRntcbYe4YJP17KG90zfVwprqhkavBs/OACcGBX\nZG27ZBDpAgMBAAECggEASdYasbfU3kIVUNV0dMzscbpZDgcLJNwXXaGmV50kLtYk\nh1G/ysuzdxSN8RqSQT4VuUWqDFG10wJR6fjj0LaG6v4jXcW6iDfz+VOHUEfHc46a\nyey+wAQvJqA2rP8beA8EV0veea71vkLu+Lxl+qJwkX5ZtE8yEf4yljsn0XCpUJWK\nsiwUH5Zk3V514VIbfnnAMorFAZ39RMaKTeuFCLHrWDh0vtnMXrv7ZV16w+CPnuLm\nGe/ovzi2ncn/940CaZUM/9PH8Wg4sHDjvGowe9kCm07JzCQkExrQCmvxyNo8i1gq\nCV42tuCpQrBNLAwsmZoxvWmec+7rjiTXBmSuIIDY4QKBgQDcv5nVkQnosUMEWrkH\nWXcP7OfcyD/Z5z7/aiTT9ZG+QPZVOzl24wzu+VhlZuq/Bycbgr26USFYjVPVhH4H\np9qnL0IhzMjqgtonci6vSSfxlz1t+CVT4rUdbDepGKpC8mfArxVxgIyy4A8J/d3d\n+BrYqrs7EkLEs7/eyRv1AZ9VqwKBgQDYkeYieELNvFfJU2MCVFdrnpi7zx01JdsH\nZUVXr/RV0d/ip0xiY7fprhrzMVWSJIZD2Q2/SD31WGtEGs+dBp92l6IWt/glk3Dp\nq9hK6VHXk/A/pRlF8g/fj2Nh+sIW2MP5Bsc3Lkk8M8akTDbXhvLwStf6nWGC9BwG\nJcKJ54p3uwKBgCs6kkOSbaBV5kvaAFYCHSDPQfCofmiLsniOLrwbYPki+5phSLWR\nbRz3U2o4J0xVeEEY71KnRKJ0urAbjBqvsk//HzJDSi0yhsomwCGvb9UNywfYCmdN\nBC7I3HWO0PjfQ5YmM0rQ47y7x/Yq8uHfDlLTzGqa/txKXw6fz4vBT5SVAoGAK5BV\nqbNlRLtRMVdLwEk0+JoDgSvtZSaDQ56Ub0oerTC1h4M9s0D52tDB7Q+MdgRQ2c8M\nm+CtTfAGS8HU53JQm2tvGIDTMsPQ38BIlvEOHH5Owo60YcSKet7+D9SAPFZIPYym\ngCwYYTrNB3mpQnuL3NhBT9Ferxfplzb7RgBEc0cCgYAbW+Ift3hXDG5Eq7VH7h0g\nqw6jcXLe2HhxvcFXs/S6NDMoyTaO3i9vhNVOSPdc+P2Ow8cdgLNs3NXNocNBW+0A\nBFvB6TRkzrSrKuwbBTepROhhxhCGxYtygl03idtll8b6C5gXeXsyOScxy+1a3PwK\nzF+0veQD190QVumHJgqpHg==\n-----END PRIVATE KEY-----\n",
//     client_email: "firebase-adminsdk-o0xvp@computerworld-4ef27.iam.gserviceaccount.com",
//     client_id: "109680125384321118817",
//     auth_uri: "https://accounts.google.com/o/oauth2/auth",
//     token_uri: "https://oauth2.googleapis.com/token",
//     auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
//     client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-o0xvp%40computerworld-4ef27.iam.gserviceaccount.com",
//   }),
// });

// const firestore = firebase.firestore();
// let ram -[16,34,343434, 16, 16,16, etc]
// let no_duplicates = [];
// let parts_set = new Set();

// for (i = 0; i < storage_drives.length; i++) {
//   const combined_strings =
//     storage_drives[i].name +
//     storage_drives[i].rating +
//     storage_drives[i].rating_count +
//     storage_drives[i].price_usd +
//     storage_drives[i].capacity +
//     storage_drives[i].type +
//     storage_drives[i].form_factor +
//     storage_drives[i].interface;

//   if (parts_set.has(combined_strings)) {
//     continue;
//   }
//   parts_set.add(combined_strings);
//   no_duplicates.push(storage_drives[i]);
// }

// for (i = 0; i < no_duplicates.length; i++) {
//   console.log(no_duplicates[i], i);
//   firestore
//     .collection("storage")
//     .doc()
//     .create(no_duplicates[i])
//     .catch(() => {});
// }

// let db = firebase.firestore();
// let collection = db.collection("CPUs");

//   collection.limit(20).get().then((querySnapshot) => {
//     if(!querySnapshot.empty) {
//       querySnapshot.docs.forEach((doc) => {
//         console.log(doc.data())
//       })
//     } else {
//       console.log("No data")
//     }
//   })

// const searchButton = document.getElementById("Search");

// const slider = document.getElementById("price_slider");
// const priceDisplay = document.getElementById("price_display");
const fs = firebase.default.firestore();
// priceDisplay.innerText = "$" + slider.value;
const cpu = document.getElementById("cpu");
const gpu = document.getElementById("gpu");
const psu = document.getElementById("psu");
const ram = document.getElementById("ram");
const mb = document.getElementById("mb");
const storage = document.getElementById("storage");
const chasis = document.getElementById("case");




function check() {
  let status = document.getElementById("cpu").checked;
  if (status) {
    onselect();
  }
}

cpu.addEventListener("change", onselect);

function onselect() {
  document.getElementById('cards').innerText = '';
  console.log("click")
  fs.collection("/CPUs")
    .orderBy("price_usd", "asc")
    .get()
    .then((querySnapshot) => {
      querySnapshot.docs.forEach((doc) => {
        const data = doc.data();
        console.log(data);
        const card = document.createElement("div");
        card.className = "card testing";
        const name = document.createElement("p");
        const price = document.createElement("p");
        const core_clock = document.createElement("p");
        const core_count = document.createElement("p");
        name.innerHTML = `Name: ${data.name}`;
        price.innerText = "Price:" + data.price_usd;
        core_clock.innerText = "core clock:" + data.core_clock;
        core_count.innerText = "core count:" + data.core_count;
        if (data.price_usd > 0) {
          card.appendChild(name);
          card.appendChild(price);
          card.appendChild(core_clock);
          card.appendChild(core_count);
          document.getElementById("cards").appendChild(card);
        } else {
          return 0;
        }

      });
    });
};




gpu.addEventListener("change", selectGpu);

function selectGpu() {
  document.getElementById('cards').innerText = '';
  console.log("click")
  fs.collection("/GPUs")
    .orderBy("price_usd", "asc")
    .get()
    .then((querySnapshot) => {
      querySnapshot.docs.forEach((doc) => {
        const data = doc.data();
        console.log(data);
        const card = document.createElement("div");
        card.className = "card testing";
        const name = document.createElement("p");
        const price = document.createElement("p");
        const core_clock = document.createElement("p");
        const memory = document.createElement("p");
        const chipset = document.createElement("p");
        const color = document.createElement("p");
        const length = document.createElement("p");

        name.innerHTML = `Name: ${data.name}`;
        price.innerText = "Price:" + data.price_usd;
        core_clock.innerText = "core clock:" + data.core_clock;
        memory.innerText = "memory:" + data.memory;
        chipset.innerText = "chipset:" + data.chipset;
        color.innerText = "color:" + data.color;
        length.innerText = "length:" + data.length;


        if (data.price_usd > 0) {
          card.appendChild(name);
          card.appendChild(price);
          card.appendChild(core_clock);
          card.appendChild(memory);
          card.appendChild(chipset);
          card.appendChild(color);
          card.appendChild(length);
          document.getElementById("cards").appendChild(card);
        } else {
          return 0;
        }

      });
    });
};

psu.addEventListener("change", selectPsu);

function selectPsu() {
  document.getElementById('cards').innerText = '';
  console.log("click")
  fs.collection("/PSUs")
    .orderBy("price_usd", "asc")
    .get()
    .then((querySnapshot) => {
      querySnapshot.docs.forEach((doc) => {
        const data = doc.data();
        console.log(data);
        const card = document.createElement("div");
        card.className = "card testing";
        const name = document.createElement("p");
        const price = document.createElement("p");
        const modular = document.createElement("p");
        const efficiency_rating = document.createElement("p");
        const form_factor = document.createElement("p");
        const wattage = document.createElement("p");

        name.innerHTML = `Name: ${data.name}`;
        price.innerText = "Price:" + data.price_usd;
        modular.innerText = "Modular:" + data.modular;
        efficiency_rating.innerText = "Effeciency rating:" + data.efficiency_rating;
        form_factor.innerText = "Form factor:" + data.form_factor;
       wattage.innerText = "Wattage:" + data.wattage;

        if (data.price_usd > 0) {
          card.appendChild(name);
          card.appendChild(price);
          card.appendChild(modular);
          card.appendChild(efficiency_rating);
          card.appendChild(form_factor);
          card.appendChild(wattage);
          document.getElementById("cards").appendChild(card);
        } else {
          return 0;
        }

      });
    });
};


chasis.addEventListener("change", selectChasis);

function selectChasis() {
  document.getElementById('cards').innerText = '';
  console.log("click")
  fs.collection("/cases")
    .orderBy("price_usd", "asc")
    .get()
    .then((querySnapshot) => {
      querySnapshot.docs.forEach((doc) => {
        const data = doc.data();
        console.log(data);
        const card = document.createElement("div");
        card.className = "card testing";
        const name = document.createElement("p");
        const price = document.createElement("p");
        const color = document.createElement("p");
        const side_panel_window = document.createElement("p");
        const type = document.createElement("p");

        name.innerHTML = `Name: ${data.name}`;
        price.innerText = "Price:" + data.price_usd;
        color.innerText = "Color:" + data.color;
       side_panel_window.innerText = "Side Panel:" + data.side_panel_window;
        type.innerText = "Type:" + data.type;

        if (data.price_usd > 0 && data.side_panel_window!=null) {
          card.appendChild(name);
          card.appendChild(price);
          card.appendChild(color);
          card.appendChild(side_panel_window);
          card.appendChild(type);
          document.getElementById("cards").appendChild(card);
        } else {
          return 0;
        }

      });
    });
};



mb.addEventListener("change", selectMb);

function selectMb() {
  document.getElementById('cards').innerText = '';
  console.log("click")
  fs.collection("/mb")
    .orderBy("price_usd", "asc")
    .get()
    .then((querySnapshot) => {
      querySnapshot.docs.forEach((doc) => {
        const data = doc.data();
        console.log(data);
        const card = document.createElement("div");
        card.className = "card testing";
        const name = document.createElement("p");
        const price = document.createElement("p");
        const form_factor = document.createElement("p");
        const memory_slots = document.createElement("p");
        const color = document.createElement("p");
        const memory_max = document.createElement("p");

        name.innerHTML = `Name: ${data.name}`;
        price.innerText = "Price:" + data.price_usd;
        form_factor.innerText = "Form factor:" + data.form_factor;
        memory_slots.innerText = "Memory slots:" + data.memory_slots;
       color.innerText = "Color:" + data.color;
       memory_max.innerText = "Max memory:" + data.memory_max

        if (data.price_usd > 0) {
          card.appendChild(name);
          card.appendChild(price);
          card.appendChild(form_factor);
          card.appendChild(memory_slots);
          card.appendChild(color);
          card.appendChild(memory_max);

          document.getElementById("cards").appendChild(card);
        } else {
          return 0;
        }

      });
    });
};




ram.addEventListener("change", selectRam);

function selectRam() {
  document.getElementById('cards').innerText = '';
  console.log("click")
  fs.collection("/ram")
    .orderBy("price_usd", "asc")
    .get()
    .then((querySnapshot) => {
      querySnapshot.docs.forEach((doc) => {
        const data = doc.data();
        console.log(data);
        const card = document.createElement("div");
        card.className = "card testing";
        const name = document.createElement("p");
        const price = document.createElement("p");
        const modules = document.createElement("p");
        const speed = document.createElement("p");
        const color = document.createElement("p");

        name.innerHTML = `Name: ${data.name}`;
        price.innerText = "Price:" + data.price_usd;
        modules.innerText = "Modules:" + data.modules;
        speed.innerText = "Speed:" + data.speed;
       color.innerText = "Color:" + data.color;

        if (data.price_usd > 0) {
          card.appendChild(name);
          card.appendChild(price);
          card.appendChild(modules);
          card.appendChild(speed);
          card.appendChild(color);

          document.getElementById("cards").appendChild(card);
        } else {
          return 0;
        }

      });
    });
};


storage.addEventListener("change", selectStorage);

function selectStorage() {
  document.getElementById('cards').innerText = '';
  console.log("click")
  fs.collection("/storage")
    .orderBy("price_usd", "asc")
    .get()
    .then((querySnapshot) => {
      querySnapshot.docs.forEach((doc) => {
        const data = doc.data();
        console.log(data);
        const card = document.createElement("div");
        card.className = "card testing";
        const name = document.createElement("p");
        const price = document.createElement("p");
        const type = document.createElement("p");
        const Interface = document.createElement("p");
        const capacity = document.createElement("p");

        name.innerHTML = `Name: ${data.name}`;
        price.innerText = "Price:" + data.price_usd;
        type.innerText = "Type:" + data.type;
        Interface.innerText = "Interface:" + data.interface;
      capacity.innerText = "Capacity:" + data.capacity;

        if (data.price_usd > 0) {
          card.appendChild(name);
          card.appendChild(price);
          card.appendChild(type);
          card.appendChild(Interface);
          card.appendChild(capacity);

          document.getElementById("cards").appendChild(card);
        } else {
          return 0;
        }

      });
    });
};


// slider.oninput = () => {
//   priceDisplay.innerText = "$" + slider.value;
// };

// slider.onchange = () => {
//   document.getElementById("cards").innerHTML = "";
//   const slider_value = Number(slider.value);
//   console.log(slider_value);
//   fs.collection("/CPUs")
//     .where("price_usd", "<=", slider_value)
//     .orderBy("price_usd", "asc")
//     .get()
//     .then((querySnapshot) => {
//       querySnapshot.docs.forEach((doc) => {
//         const data = doc.data();
//         console.log(data);
//         const card = document.createElement("div");
//         card.className = "card testing";
//         const name = document.createElement("p");
//         const price = document.createElement("p");
//         const core_clock = document.createElement("p");
//         const core_count = document.createElement("p");
//         name.innerHTML = `<b>Name: ${data.name}</b>`;
//         price.innerText = "Price:" + data.price_usd;
//         core_clock.innerText = data.core_clock;
//         core_count.innerText = data.core_count;
//         card.appendChild(name);
//         card.appendChild(price);
//         card.appendChild(core_clock);
//         card.appendChild(core_count);
//         document.getElementById("cards").appendChild(card);
//       });
//     });
// };