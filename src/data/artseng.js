let allArts = [
  {
    id: 0,
    title: "The Scream",
    author: "Edvard Munch",
    desc: "Scream or Scream (Norwegian Skrik) is the name for a series of the most famous paintings by Edvard Munch, the Norwegian expressionist painter.[1] The painting shows a terrified, slightly demonic sexless figure standing on a bridge against a blood-red sky. This image is a symbol of modern man's anxiety and mental pain, misunderstanding, emptiness. The landscape in the background is the Oslofjord, seen from a hill not far from Oslo. The dimensions of this piece are 91 × 73.5 cm.",
    type: 0,
    imageUrl:
      "https://media.npr.org/assets/img/2012/04/30/scream_custom-9ef574d2014bd441879317ecf242ad060e34e743-s1100-c50.jpg",
    estimatedValue: "$10,000,000",
    estimatedAge: "1893",
    imagesList: [
      "https://media.npr.org/assets/img/2012/04/30/scream_custom-9ef574d2014bd441879317ecf242ad060e34e743-s1100-c50.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcY6Z3prtv-CUAKnYSFitCkasczsPNtAkLONBSOFg7kaaCku5dQPwkO96YTfs8ZwqaOlw&usqp=CAU",
      "https://fatcatart.com/wp-content/uploads/2016/08/Munch-The_Scream-1893-cat-w.jpg",
    ],
  },
  {
    id: 1,
    title: "The last supper",
    author: "Leonardo da Vinci",
    desc: "The Last Supper or Last Supper (Italian: Ultima Cena) is one of Leonardo da Vinci's most significant works, and he considers it one of the world's greatest artistic masterpieces.[1] Painted using the fresco technique, it was created in the Renaissance period, probably from 1494 to 1498.",
    type: 0,
    imageUrl:
      "https://opusteno.rs/slike/2021/12/zanimljivosti-zanimljive-cinjenice-44041/tajna-vecera-1.jpg",
    estimatedValue: "$50,000,000",
    estimatedAge: "1495-1498",
    imagesList: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Ultima_Cena_%28Ponte_Capriasca%29.jpg/1200px-Ultima_Cena_%28Ponte_Capriasca%29.jpg?20140705210733",
      "https://sdelbiombo.blogia.com/upload/externo-d55f6ec2af5c51a6354d08b09461e0b5.jpg",
      "https://www.lombardiabeniculturali.it/new_img_db/bcoa/3o210/2/l/SC_OA_3o210-01279_IMG-0000479447.jpg",
    ],
  },
  {
    id: 2,
    title: "Mona Lisa",
    author: "Leonardo da Vinci",
    desc: "Mona Lisa or Gioconda (Italian Monna Lisa, La Gioconda, French La Joconde) is a famous masterpiece of the Renaissance painter Leonardo da Vinci. It was made using the oil technique on a poplar wood panel. It presents a portrait of a young Florentine lady, Lisa del Giocondo. Today, the portrait of Mona Lisa is exhibited in the Louvre Museum, in Paris.",
    type: 0,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/1200px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg",
    estimatedValue: "$800,000,000",
    estimatedAge: "1503-1506",
    imagesList: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqb3ZtO2sYQvWpBr8dCNlbL8-3bBL6HGQjoQ&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdyVNVHtSi2mekDUhbfKxHPHVzQGN_AJEMwiTA19-XvB24M3c5Hy_RYT_5F0V1y6agP7A&usqp=CAU",
      "https://025info.rs/wp-content/uploads/2022/05/Mona-Liza.jpg",
      "https://media.tenor.com/dxguKWd-nugAAAAC/mona-lisa-mona-mona-lisa.gif",
    ],
  },
  {
    id: 3,
    title: "Discus Thrower",
    author: "Miron",
    desc: "Mironov's Discus Thrower ('discus thrower', Greek Δισκοβόλος, Diskobolos) is a Greek sculpture that was built towards the end of the early classical period, around 460-450 BC. n. e. The original Greek sculpture in bronze is lost, but the work is known through numerous Roman copies, in original size in marble, which was cheaper than bronze.",
    type: 1,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Discobolus_in_National_Roman_Museum_Palazzo_Massimo_alle_Terme.JPG/330px-Discobolus_in_National_Roman_Museum_Palazzo_Massimo_alle_Terme.JPG",
    estimatedValue: "$2,000,000",
    estimatedAge: "5th century BCE",
    imagesList: [
      "https://proleksis.lzmk.hr/slike1/x_d0358.JPG",
      "https://2.bp.blogspot.com/-YWtwl38pocU/VPYhz3FTHeI/AAAAAAAAD_I/rJBI0ep7oAg/s1600/AN00396828_001_l.jpg",
      "https://4.bp.blogspot.com/-v7S07A7GHuQ/VPYh0HJYhxI/AAAAAAAAD_M/etYQNk09jRU/s1600/AN00398497_001_l.jpg",
    ],
  },
  {
    id: 4,
    title: "David",
    author: "Mikelangelo Buanoroti",
    desc: "Michelangelo's David is Michelangelo's masterpiece from the Renaissance era, which was carved in marble between 1501 and 1504. The statue, 5.17 m high including the base, represents the biblical figure of David in a moment of concentration before the fight with Goliath, and was carved as a symbol of the medieval state of Florence. It was originally placed in front of today's Palazzo Vecchio, the seat of Florentine government. The sculpture was discovered on September 8, 1504. A replica of the sculpture has been in its original place since 1910, and the original is from 1873, in the Galleria dell'Accademia in Florence, where it is protected from damage.",
    type: 1,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/%27David%27_by_Michelangelo_Fir_JBU002.jpg/375px-%27David%27_by_Michelangelo_Fir_JBU002.jpg",
    estimatedValue: "$600,000,000",
    estimatedAge: "1501-1504",
    imagesList: [
      "https://trendy.rs/wp-content/uploads/2021/06/mikelandjelov-david-trendy-1.jpg",
      "https://vojvodinauzivo.rs/wp-content/uploads/2023/03/florence-2428745_960_720.jpg",
      "https://24sedam.rs/data/images/2023-03-25/411203_profimedia-0585353074_f.jpg",
    ],
  },
  {
    id: 5,
    title: "Milos Venus",
    author: "Aleksandros of Antilohije",
    desc: "The Venus de Milo (Greek: Ἀφροδίτη τῆς Μήλου, Aphroditē tēs Mēlou) is an ancient Greek sculpture created during the Hellenistic period, sometime between 150 and 125 BC. n. well..[1] It is one of the most famous works of ancient Greek sculpture, and was displayed in the Louvre Museum shortly after the statue was rediscovered on the island of Milos, Greece, on April 8, 1820.[2] The Venus de Milo was made by Alexandros, a sculptor from Antioch, around 150 BC, and is believed to represent Aphrodite, the Greek goddess of beauty and love.",
    type: 1,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/9/9c/MG-Paris-Aphrodite_of_Milos.jpg",
    estimatedValue: "$100,000,000",
    estimatedAge: "130-100 BCE",
    imagesList: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Venus_de_Milo_Louvre_Ma399_n4.jpg/280px-Venus_de_Milo_Louvre_Ma399_n4.jpg",
      "https://4.bp.blogspot.com/-3wjDEvn-c4c/VPY1l3howyI/AAAAAAAAEAc/CEx-Z7UNcBI/s1600/Venus-de-Milo-Louvre.jpg",
      "https://4.bp.blogspot.com/-0Sa5H1Vfgqk/VPY1rLECp6I/AAAAAAAAEA0/8Q-g0tQW1uo/s1600/Venus_de_Milo_Louvre_Ma399_n7.jpg",
      "https://1.bp.blogspot.com/-ajlPUGNq20A/VPY1utorV9I/AAAAAAAAEBM/qgUJr3v5LwA/s1600/url.jpg",
    ],
  },
  {
    id: 6,
    title: "La Sagrada Familia",
    author: "Antoni Gaudi",
    desc: "The Sagrada Família (Catalan/Spanish: La Sagrada Família) or The Holy Family is a church under construction located in Barcelona, ​​Catalonia, Spain, a masterpiece by Antoni Gaudi. The Sagrada Familia is a Roman Catholic basilica built in the Gothic style. The church began to be built by the architect Francesc de Paula del Villar, and in 1882 Gaudi took over the project and completely changed it. At that time, the location where construction began was 1.5 km away from Barcelona. Gaudí worked on the project for 40 years, of which the last 15 he worked exclusively on that project.",
    type: 2,
    imageUrl:
      "https://images.adsttc.com/media/images/5254/4190/e8e4/4eff/0200/06cf/medium_jpg/sfpassio.jpg?1381253501",
    estimatedValue: "$1,500,000,000",
    estimatedAge: "1882-present",
    imagesList: [
      "https://cdn.britannica.com/38/122138-050-B556649B/Antoni-Gaudi-Temple-Expiatori-de-la-Sagrada-Familia-Barcelona-Spain.jpg",
      "https://cdn-imgix.headout.com/mircobrands-content/image/b299bd25f75c1e299c877fed458576fa-Sagrada%20Familia%20-%20Facades.jpg",
      "https://blog.sagradafamilia.org/wp-content/uploads/2020/06/sagrada-familia-interior.jpg",
    ],
  },
  {
    id: 7,
    title: "Leaning Tower of Pisa",
    author: "Bonano Pizano",
    desc: "The Leaning Tower of Pisa (Italian: Torre pendente di Pisa or simply Torre di Pisa[1]), is the bell tower of the Cathedral of Pisa, Italy, in the square called Campo dei Miracoli (Campo dei Miracoli). The belfry was supposed to be completely vertical, but it began to bend immediately after the construction of the tower began in August 1173. The height of the tower from the ground to the lower side is 55.86 meters, and from the ground to the higher side is 56.7 meters. The thickness of the walls at the bottom is 4.09 m, and at the top 2.48 m. The tower is warped by 5.5%.[2] The mass of the tower is estimated at about 14,453 tons. The bell tower has 294 steps.",
    type: 2,
    imageUrl:
      "https://static.nationalgeographic.rs/Picture/41062/jpeg/krivi-toranj-u-pizi_248741038?ts=2021-10-01T13:22:05",
    estimatedValue: "$100,000,000",
    estimatedAge: "1173-1372",
    imagesList: [
      "https://xdn.tf.rs/2022/11/20/heidi-kaden-xvpsa9riev4-unsplash-830x553.jpg?ver=647742",
      "https://static.mondo.rs/Picture/1079929/jpeg/Krivi-toranj-u-Pizi.jpeg?ts=2021-12-03T11:49:52",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh81pKPoUSBvIL7-4iLkTnzBrRn76SnI-inw&usqp=CAU",
    ],
  },
  {
    id: 8,
    title: "Taj Mahal",
    author: "Ustad Ahmad Lahori",
    desc: "The Taj Mahal (Hindi: ताज महल, Farsi: ताज महल), is a building in Agra, India, built between 1631 and 1654. It was built by 22,000 people. Shah Jahan ordered the construction of this mausoleum for his favorite wife, Arjumand Bano Begum, who is better known as Mumtaz Mahal. The Taj Mahal is considered the ultimate achievement of Mughal architecture, a style that combines elements of Persian, Indian and Islamic architectural styles. In 1983, the Taj Mahal became a UNESCO World Heritage Site described as 'the jewel of Islamic art in India and one of the universally recognized masterpieces of world heritage.'",
    type: 2,
    imageUrl:
      "https://media.architecturaldigest.com/photos/5762c8bb7b6409155b8709cb/1:1/w_2133,h_2133,c_limit/taj-mahal-getty-images.jpg",
    estimatedValue: "$800,000,000",
    estimatedAge: "1632-1653",
    imagesList: [
      "https://images.pexels.com/photos/3224533/pexels-photo-3224533.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZT0r07aegGGa58HwZye9DsbUso3YhP_3a8w&usqp=CAU",
      "https://images.squarespace-cdn.com/content/v1/59d89989bebafb24a356f24c/bf78c6f2-ad32-44f4-b700-ccef0111a4a1/Taj+18.jpg",
    ],
  },
];

export default allArts;
