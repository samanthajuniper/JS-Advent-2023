// In Santa's workshop, the elves have a gift list they wish to make and a limited set of materials.
// Gifts are strings of text and materials are characters. Your task is to write a function that, given a list of gifts and the available materials, returns a list of the gifts that can be made.
// A gift can be made if we have all the necessary materials to make it.

// Examples
// const gifts = ['tren', 'oso', 'pelota']
// const materials = 'tronesa'
// manufacture(gifts, materials) ["tren", "oso"]

// const gifts = ['libro', 'ps5']
// const materials = 'psli'
// manufacture(gifts, materials) []

// Solution
function manufacture(gifts, materials) {
    // Set = O(1)/constant-tinme lookups --> more efficient than searching arrays
  const materialsSet = new Set(materials);

  const canMakeGift = (gift) => {
    const giftSet = new Set(gift);
    return [...giftSet].every((material) => materialsSet.has(material));
  };

  return gifts.filter(canMakeGift);
}