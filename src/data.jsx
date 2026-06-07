const data = [
  {
    "id": 1,
    "name": "Jaipur",
    "info": "Jaipur, the Pink City of India, is the capital of Rajasthan and is famous for its stunning Mughal and Rajput architecture.",
    "image": "https://cdn.thecodehelp.in/Jaipur.jpeg",
    "price": "₹45,595"
  },
  {
    "id": 2,
    "name": "Goa",
    "info": "Goa is India's smallest state and is renowned for its stunning beaches, Portuguese heritage, and vibrant nightlife.",
    "image": "https://cdn.thecodehelp.in/Goa.jpeg",
    "price": "₹52,000"
  },
  {
    "id": 3,
    "name": "Agra",
    "info": "Agra is home to the iconic Taj Mahal, one of the Seven Wonders of the World, and is a city rich in Mughal history.",
    "image": "https://cdn.thecodehelp.in/Agra.jpeg",
    "price": "₹38,999"
  },
  {
    "id": 4,
    "name": "Varanasi",
    "info": "Varanasi is one of the world's oldest cities, situated on the banks of the Ganges and considered the spiritual capital of India.",
    "image": "https://cdn.thecodehelp.in/Varanasi.jpeg",
    "price": "₹41,500"
  },
  {
    "id": 5,
    "name": "Darjeeling",
    "info": "Starting in the colorful port city of Gdańsk, you'll escape the crowds and discover Darjeeling's famous tea gardens and views of Kanchenjunga.",
    "image": "https://cdn.thecodehelp.in/Darjeeling.jpeg",
    "price": "₹78,595"
  },
  {
    "id": 6,
    "name": "Jaisalmer",
    "info": "Jaisalmer is a city in the Indian state of Rajasthan, known for its magnificent sand dunes and the grand Jaisalmer Fort.",
    "image": "https://cdn.thecodehelp.in/Jaisalmer.jpeg",
    "price": "₹68,595"
  },
  {
    "id": 7,
    "name": "Manali",
    "info": "Manali is a high-altitude Himalayan resort town in Himachal Pradesh, offering adventure sports, scenic valleys, and snow-capped peaks.",
    "image": "https://s7ap1.scene7.com/is/image/incredibleindia/The-Best-Adventure-Experiences-in-Manali1-hero?qlt=82&ts=1726731002736",
    "price": "₹55,000"
  },
  {
    "id": 8,
    "name": "Shimla",
    "info": "Shimla is the capital of Himachal Pradesh and was once the summer capital of British India, nestled in the Himalayan foothills.",
    "image": "https://s7ap1.scene7.com/is/image/incredibleindia/cityscape-of-shimla-himachal-pradesh-city-1-hero?qlt=82&ts=1742171983523",
    "price": "₹48,000"
  },
  {
    "id": 9,
    "name": "Udaipur",
    "info": "Udaipur, known as the City of Lakes, is a picturesque city in Rajasthan famous for its palaces, lakes, and royal heritage.",
    "image": "https://static.toiimg.com/thumb/msid-82304823,width-748,height-499,resizemode=4,imgsize-647878/.jpg",
    "price": "₹62,000"
  },
  {
    "id": 10,
    "name": "Kerala",
    "info": "Kerala, known as God's Own Country, is famous for its tranquil backwaters, lush greenery, Ayurvedic treatments, and stunning beaches.",
    "image": "https://production-nuego-cms.blr1.digitaloceanspaces.com/static-contents/prod-v1/shutterstock_545452072_557_X_310_px_6584e509b1.jpg",
    "price": "₹72,000"
  },
  {
    "id": 11,
    "name": "Mysuru",
    "info": "Mysuru, also known as Mysore, is a city in Karnataka famous for its magnificent Mysore Palace, silk sarees, and Dasara celebrations.",
    "image": "https://trekentrip.com/wp-content/uploads/2024/10/mysuru-palace.jpg",
    "price": "₹39,500"
  },
  {
    "id": 12,
    "name": "Rishikesh",
    "info": "Rishikesh is a spiritual town in Uttarakhand on the banks of the Ganges, known as the yoga capital of the world and a gateway for Himalayan treks.",
    "image": "https://s7ap1.scene7.com/is/image/incredibleindia/laxman%20jhula-rishikesh-uttrakhand-hero?qlt=82&ts=1726646312953",
    "price": "₹34,000"
  },
  {
    "id": 13,
    "name": "Amritsar",
    "info": "Amritsar is a city in Punjab and home to the Golden Temple, the holiest shrine in Sikhism, drawing millions of pilgrims each year.",
    "image": "https://s7ap1.scene7.com/is/image/incredibleindia/golden-temple-amritsar-punjab-tri-hero?qlt=82&ts=1727166214134",
    "price": "₹36,000"
  },
  {
    "id": 14,
    "name": "Ooty",
    "info": "Ooty, short for Udhagamandalam, is a popular hill station in Tamil Nadu known for its tea gardens, Nilgiri Mountain Railway, and cool climate.",
    "image": "https://ootymade.com/cdn/shop/articles/Gemini_Generated_Image_1q5g0r1q5g0r1q5g.png?v=1774775765",
    "price": "₹44,000"
  },
  {
    "id": 15,
    "name": "Coorg",
    "info": "Coorg, or Kodagu, is a scenic hill district in Karnataka known for its coffee plantations, misty mountains, and vibrant Kodava culture.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHdWucCysBIFTLhQDsLU8Qy_dfmbYmfH3OgQ&s",
    "price": "₹49,500"
  },
  {
    "id": 16,
    "name": "Leh",
    "info": "Leh is the capital of Ladakh, a high-altitude desert region with dramatic landscapes, ancient monasteries, and a unique Tibetan-influenced culture.",
    "image": "https://www.remotelands.com/storage/media/4183/conversions/b160729204-banner-size.jpg",
    "price": "₹85,000"
  },
  {
    "id": 17,
    "name": "Andaman Islands",
    "info": "The Andaman Islands are an archipelago in the Bay of Bengal, known for pristine beaches, crystal-clear waters, and rich marine biodiversity.",
    "image": "https://www.indiantempletour.com/wp-content/uploads/2022/08/Andaman-and-Nicobar-Islands-Package-1.jpg",
    "price": "₹92,000"
  },
  {
    "id": 18,
    "name": "Hampi",
    "info": "Hampi is a UNESCO World Heritage Site in Karnataka featuring the ruins of the Vijayanagara Empire, surrounded by stunning boulder-strewn landscapes.",
    "image": "https://www.shivavilaspalacehotel.com/blog/admin/assets/img/post/image_2025-03-24-08-23-39_67e1168be72ae.jpg",
    "price": "₹33,000"
  },
  {
    "id": 19,
    "name": "Pushkar",
    "info": "Pushkar is a sacred town in Rajasthan situated around the holy Pushkar Lake, famous for its Brahma Temple and the colorful Pushkar Camel Fair.",
    "image": "https://hblimg.mmtcdn.com/content/hubble/img/desttvimg/mmt/destination/m_Pushkar_tv_destination_img_1_l_739_1111.jpg",
    "price": "₹31,000"
  },
  {
    "id": 20,
    "name": "Spiti Valley",
    "info": "Spiti Valley is a cold desert mountain valley in Himachal Pradesh, offering breathtaking high-altitude landscapes, ancient monasteries, and adventurous roads.",
    "image": "https://bloominghimalaya.com/wp-content/uploads/2025/01/spiti.jpeg",
    "price": "₹79,000"
  },
  {
    "id": 21,
    "name": "Mahabaleshwar",
    "info": "Mahabaleshwar is a hill station in Maharashtra known for its strawberry farms, panoramic viewpoints, and pleasant climate throughout the year.",
    "image": "https://s7ap1.scene7.com/is/image/incredibleindia/1-pratapgarh-fort-mahabaleshwar-maharashtra-2-city-hero?qlt=82&ts=1726668937680",
    "price": "₹37,000"
  },
  {
    "id": 22,
    "name": "Munnar",
    "info": "Munnar is a hill station in Kerala surrounded by lush tea gardens, misty mountains, and scenic valleys, offering a perfect getaway into nature.",
    "image": "https://www.thefogmunnar.com/images/munnar-banner-mob.webp",
    "price": "₹53,000"
  },
  {
    "id": 23,
    "name": "Jodhpur",
    "info": "Jodhpur, the Blue City of Rajasthan, is famous for the majestic Mehrangarh Fort and its unique blue-painted old city houses.",
    "image": "https://discoverindiabycar.com/wp-content/uploads/2022/12/bik-1024x514.png",
    "price": "₹47,000"
  },
  {
    "id": 24,
    "name": "Sikkim",
    "info": "Sikkim is a northeastern Indian state nestled in the Himalayas, known for its Buddhist monasteries, rhododendron forests, and views of Kanchenjunga.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/f/f9/Buddha_statue_at_Buddha_Park_of_Ravangla%2C_Sikkim%2C_India_%281%29.jpg",
    "price": "₹67,000"
  },
  {
    "id": 25,
    "name": "Khajuraho",
    "info": "Khajuraho is a town in Madhya Pradesh known for its group of Hindu and Jain temples featuring intricately carved erotic sculptures.",
    "image": "https://indiaholidaymall.com/images/blog/Khajuraho-Temple.jpg",
    "price": "₹42,000"
  }
];

export default data;