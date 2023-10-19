// pages/api/shopping-list.js

const shoppingList = ["Melk", "Egg", "BULL"]; // Dette kan være en felles datastruktur for handlelisten

export default function handler(req, res) {
  if (req.method === 'POST') {
    // Tar imot data som sendes med forespørselen
    const data = req.body;

    // Legger til data i quiz-listen vår
    shoppingList.push(data);

    // Sender status 201 (Created) og den nye oppdaterte listen
    res.status(201).json({ success: true, data: shoppingList });
  } else {
    // Dette er for GET-forespørsler
    res.status(200).json({ success: true, data: shoppingList });
  }
}
