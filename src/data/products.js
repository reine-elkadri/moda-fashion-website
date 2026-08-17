const products = [
  { id: 1,  name: 'Blush Midi Dress',        price: 50,  category: 'clothes', subcategory: 'Dresses',   image: '/images/mididress.jpg' },
  { id: 2,  name: 'Wrap Dress',              price: 60,  category: 'clothes', subcategory: 'Dresses',   image: '/images/wrapdress.jpg' },
  { id: 3,  name: 'Blue Dress',              price: 55,  category: 'clothes', subcategory: 'Dresses',   image: '/images/bluedress.jpg' },

  { id: 4,  name: 'Olive Silk Shirt',        price: 35,  category: 'clothes', subcategory: 'Tops',      image: '/images/silkshirt.jpg' },
  { id: 5,  name: 'White Blouse',            price: 40,  category: 'clothes', subcategory: 'Tops',      image: '/images/laceblouse.jpg' },
  { id: 6,  name: 'Striped Linen Top',       price: 30,  category: 'clothes', subcategory: 'Tops',      image: '/images/linentop.jpg' },

  { id: 7,  name: 'Floral Wrap Skirt',       price: 45,  category: 'clothes', subcategory: 'Skirts',    image: '/images/skirt.jpg' },
  { id: 8,  name: 'Pleated Midi Skirt',      price: 50,  category: 'clothes', subcategory: 'Skirts',    image: '/images/pleatedskirt.jpg' },
  { id: 9,  name: 'Denim Mini Skirt',        price: 38,  category: 'clothes', subcategory: 'Skirts',    image: '/images/denimskirt.jpg' },

  { id: 10, name: 'Camel Trench Coat',       price: 120, category: 'clothes', subcategory: 'Outerwear', image: '/images/trenchcoat.jpg' },
  { id: 11, name: 'Oversized Blazer',        price: 85,  category: 'clothes', subcategory: 'Outerwear', image: '/images/blazer.jpg' },
  { id: 12, name: 'Wool Wrap Coat',          price: 140, category: 'clothes', subcategory: 'Outerwear', image: '/images/wrapcoat.jpg' },

  { id: 13, name: 'Classic Handbag',         price: 15,  category: 'bags', subcategory: 'Handbags',  image: '/images/handbag2.jpg' },
  { id: 14, name: 'Tan Leather Satchel',     price: 45,  category: 'bags', subcategory: 'Handbags',  image: '/images/satchel.jpg' },
  { id: 15, name: 'Black Top Handle Bag',    price: 55,  category: 'bags', subcategory: 'Handbags',  image: '/images/tophandlebag.jpg' },

  { id: 16, name: 'Mini Crossbody',          price: 30,  category: 'bags', subcategory: 'Crossbody', image: '/images/crossbody.jpg' },
  { id: 17, name: 'Chain Strap Bag',         price: 40,  category: 'bags', subcategory: 'Crossbody', image: '/images/chainbag.jpg' },
  { id: 18, name: 'Canvas Belt Bag',         price: 25,  category: 'bags', subcategory: 'Crossbody', image: '/images/beltbag.jpg' },

  { id: 19, name: 'Soft Tote Bag',           price: 10,  category: 'bags', subcategory: 'Tote Bags', image: '/images/totebag.jpg' },
  { id: 20, name: 'Woven Straw Tote',        price: 20,  category: 'bags', subcategory: 'Tote Bags', image: '/images/strawtote.jpg' },
  { id: 21, name: 'Canvas Market Tote',      price: 15,  category: 'bags', subcategory: 'Tote Bags', image: '/images/canvastote.jpg' },

  { id: 22, name: 'Leather Burgundy',           price: 10,  category: 'bags', subcategory: 'Mini Bags', image: '/images/leather.jpg' },
  { id: 23, name: 'Black Mini',        price: 20,  category: 'bags', subcategory: 'Mini Bags', image: '/images/blackmini.jpg' },
  { id: 24, name: 'Brown Mini',      price: 15,  category: 'bags', subcategory: 'Mini Bags', image: '/images/brownmini.jpg' },

  { id: 25, name: 'Gold Necklace',           price: 10,  category: 'accessories', subcategory: 'Jewelry',    image: '/images/necklace.jpg' },
  { id: 26, name: 'Pearl Drop Earrings',     price: 18,  category: 'accessories', subcategory: 'Jewelry',    image: '/images/earrings.jpg' },
  { id: 27, name: 'Delicate Gold Bracelet',  price: 14,  category: 'accessories', subcategory: 'Jewelry',    image: '/images/bracelet.jpg' },



  { id: 28, name: 'Silk Scarf',              price: 6,   category: 'accessories', subcategory: 'Scarves',    image: '/images/silkscarf.jpg' },
  { id: 29, name: 'Floral Print Scarf',      price: 8,   category: 'accessories', subcategory: 'Scarves',    image: '/images/floralscarf.jpg' },
  { id: 30, name: 'Wool Tartan Scarf',       price: 12,  category: 'accessories', subcategory: 'Scarves',    image: '/images/tartanscarf.jpg' },

  { id: 31, name: 'Classic Sunglasses',      price: 20,  category: 'accessories', subcategory: 'Sunglasses', image: '/images/sunglasses.jpg' },
  { id: 32, name: 'Retro Round Frames',      price: 25,  category: 'accessories', subcategory: 'Sunglasses', image: '/images/roundsunglasses.jpg' },
  { id: 33, name: 'Cat-Eye Sunglasses',      price: 30,  category: 'accessories', subcategory: 'Sunglasses', image: '/images/cateyesunglasses.jpg' },

  { id: 34, name: 'Elegant Heels',           price: 40,  category: 'shoes', subcategory: 'Heels',    image: '/images/heels.jpg' },
  { id: 35, name: 'Strappy Sandal Heels',    price: 55,  category: 'shoes', subcategory: 'Heels',    image: '/images/strapheels.jpg' },
  { id: 36, name: 'Block Heel Mules',        price: 48,  category: 'shoes', subcategory: 'Heels',    image: '/images/mules.jpg' },

  { id: 37, name: 'Casual Sneakers',         price: 35,  category: 'shoes', subcategory: 'Sneakers', image: '/images/shoes.jpg' },
  { id: 38, name: 'Platform Sneakers',       price: 50,  category: 'shoes', subcategory: 'Sneakers', image: '/images/platformsneakers.jpg' },
  { id: 39, name: 'Leather Low-tops',        price: 45,  category: 'shoes', subcategory: 'Sneakers', image: '/images/lowtops.jpg' },


  { id: 40, name: 'Modern Boots',            price: 65,  category: 'shoes', subcategory: 'Boots',    image: '/images/boots.jpg' },
  { id: 41, name: 'Knee-High Leather Boots', price: 90,  category: 'shoes', subcategory: 'Boots',    image: '/images/kneeboots.jpg' },
  { id: 42, name: 'Ankle Chelsea Boots',     price: 70,  category: 'shoes', subcategory: 'Boots',    image: '/images/chelseaboots.jpg' },

  { id: 43, name: 'Black Belt',  price: 14,  category: 'accessories', subcategory: 'Belts',    image: '/images/blackbelt.jpg' },

];

export default products;