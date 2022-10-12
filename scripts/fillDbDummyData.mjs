import axios from 'axios';

const fillDbWithDummyData = async () => {
  const dummyProductData = [
    {
      title: `Gildan Men's Ultra Cotton T-Shirt`,
      slug: 't-shirt1',
      desc: '100% cotton, this classic fit preshrunk jersey knit provides unmatched comfort with each wear.',
      img: '/tshirt.jpg',
      category: 't-shirts',
      price: '55',
      availableQty: '132',
      size: 'large',
      color: 'black',
    },
    {
      title: `Gildan Womens's Ultra Cotton T-Shirt`,
      slug: 't-shirt2',
      desc: '100% cotton, this classic fit preshrunk jersey knit provides unmatched comfort with each wear.',
      img: '/tshirt.jpg',
      category: 't-shirts',
      price: '55',
      availableQty: '132',
      size: 'large',
      color: 'black',
    },
    {
      title: `Gildan Childrens's Ultra Cotton T-Shirt`,
      slug: 't-shirt3',
      desc: '100% cotton, this classic fit preshrunk jersey knit provides unmatched comfort with each wear.',
      img: '/tshirt.jpg',
      category: 't-shirts',
      price: '55',
      availableQty: '132',
      size: 'large',
      color: 'black',
    },
    {
      title: 'Gildan Adult Fleece Hoodie',
      slug: 'hoodie1',
      desc: 'Equal parts durable, comfortable and stylish, the Gildan Adult Fleece Hooded Sweatshirt belongs in every collection.',
      img: '/hoodies.jpg',
      category: 'hoodies',
      price: '100',
      availableQty: '555',
      size: 'large',
      color: 'black',
    },
    {
      title: `Gildan Children's Fleece Hoodie`,
      slug: 'hoodie2',
      desc: 'Equal parts durable, comfortable and stylish, the Gildan Adult Fleece Hooded Sweatshirt belongs in every collection.',
      img: '/hoodies.jpg',
      category: 'hoodies',
      price: '100',
      availableQty: '555',
      size: 'large',
      color: 'black',
    },
    {
      title: `Fossil Men's Quartz Chronograph Watch`,
      slug: 'watch1',
      desc: 'Military-inspired design with oversized lugs and bold details offers a laid-back yet rugged feel that is perfect for any adventure, day or night.',
      img: '/watches.jpg',
      category: 'watches',
      price: '200',
      availableQty: '34',
      size: null,
      color: null,
    },
    {
      title: `Fossil Women's Quartz Chronograph Watch`,
      slug: 'watch2',
      desc: 'Military-inspired design with oversized lugs and bold details offers a laid-back yet rugged feel that is perfect for any adventure, day or night.',
      img: '/watches.jpg',
      category: 'watches',
      price: '200',
      availableQty: '34',
      size: null,
      color: null,
    },
    {
      title: 'Goku and Vegeta Sticker',
      slug: 'sticker1',
      desc: 'High quality decal die-cut laptop sticker in black color.',
      img: '/stickers.jpg',
      category: 'stickers',
      price: '12',
      availableQty: '117',
      size: null,
      color: null,
    },
  ];

  try {
    const response = await axios({
      url: 'http://localhost:3000/api/addproduct',
      method: 'post',
      data: dummyProductData,
    });

    console.log('DB FILL SCRIPT SUCCESS');
    return response.data;
  } catch (error) {
    console.log('FILL SCRIPT FAILED -->', error);
  }
};

fillDbWithDummyData();
