// Inisial queue
const queue = ["ray", "fiki", "fadhilla", "farah"];
console.log("Initial queue:", queue);

// pelanggan baru tiba
queue.push("nabila");
console.log("Antrian setelah nabila datang:", queue);

// 2 pelanggan baru tiba
queue.push("maza", "elsi");
console.log("Antrian setelah maza dan elsi datang:", queue);

// pelanggan terakhir pergi
queue.pop();
console.log("Antrian setelah pelanggan terakhir pergi:", queue);

// Pelanggan pertama mendapatkan belanjaan dan pergi
queue.shift();
console.log("Antrian setelah pelanggan pertama pergi:", queue);

// Pelanggan kedua mendapatkan belanjaan dan pergi
queue.shift();
console.log("Antrian setelah pelanggan kedua pergi:", queue);

// Pelanggan baru datang menyerobot antrian
queue.unshift("tomi");
console.log("Antrian setelah tomi datang menyerobot:", queue);

// Final queue
console.log("Final antrian:", queue);
