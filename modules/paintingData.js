export const paintingData = [
  // Front Wall
  ...Array.from({ length: 4 }, (_, i) => ({
    // Array.from creates an array from an array-like object. The first parameter is the array-like object. The second parameter is a map function that is called for each element in the array-like object. The map function takes two parameters: the element and the index. The map function returns the value that will be added to the new array. In this case, we are returning an object with the painting data. `_` is a placeholder for the element. We don't need it because we are not using the element. `i` is the index. We use it to set the painting number.
    imgSrc: `artworks/${i + 1}.jpg`, // `i + 1` is the painting number. We add 1 to the index because the index starts at 0 but we want the painting numbers to start at 1.
    width: 5, // width of the painting
    height: 3, // height of the painting
    position: { x: -15 + 10 * i, y: 2, z: -19.5 }, // position of the painting
    rotationY: 0, // rotation of the painting
    info: {
      // info about the painting
      title: `Lukisan Raden Saleh ${i + 1}`,
      artist: 'Raden Saleh',
      description: `Ini adalah salah satu mahakarya Raden Saleh yang menampilkan gaya unik dan kejujuran emosionalnya.`,
      link: 'https://id.wikipedia.org/wiki/Raden_Saleh',
     
    },
  })),
  // Back Wall
  ...Array.from({ length: 4 }, (_, i) => ({
    imgSrc: `artworks/${i + 5}.jpg`,
    width: 5,
    height: 3,
    position: { x: -15 + 10 * i, y: 2, z: 19.5 },
    rotationY: Math.PI,
    info: {
      title: `Lukisan Affandi Koesoema ${i + 5}`,
      artist: 'Affandi Koesoema',
      description: `Artwork ${
        i + 5
      } karya Affandi Koesoema adalah karya luar biasa yang menunjukkan kemampuannya yang luar biasa dalam menangkap emosi dan suasana.`,
      link: 'https://id.wikipedia.org/wiki/Affandi',
    },
  })),
  // Left Wall
  ...Array.from({ length: 4 }, (_, i) => ({
    imgSrc: `artworks/${i + 9}.jpg`,
    width: 5,
    height: 3,
    position: { x: -19.5, y: 2, z: -15 + 10 * i },
    rotationY: Math.PI / 2,
    info: {
      title: `Lukisan Agus Djaya ${i + 9}`,
      artist: 'Agus Djaya',
      description: `Dengan penggunaan warna dan sapuan kuas yang mencolok, Karya Seni ${
        i + 9
      } merupakan bukti kejeniusan seni Agus Djaya.`,
      link: 'https://id.wikipedia.org/wiki/Agus_Djaya',
    },
  })),
  // Right Wall
  ...Array.from({ length: 4 }, (_, i) => ({
    imgSrc: `artworks/${i + 13}.jpg`,
    width: 5,
    height: 3,
    position: { x: 19.5, y: 2, z: -15 + 10 * i },
    rotationY: -Math.PI / 2,
    info: {
      title: `Lukisan Basoeki Abdullah ${i + 13}`,
      artist: 'Basoeki Abdullah',
      description: `Artwork ${
        i + 13
      } adalah karya menawan karya Vincent van Gogh, yang mencerminkan gaya khas dan kecintaannya yang mendalam terhadap seni.`,
      link: 'https://id.wikipedia.org/wiki/Basuki_Abdullah',
    },
  })),
];
