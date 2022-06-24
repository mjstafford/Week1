function greet(name) {
  console.log(`Hello ${name}!`)
}

// greet('Michael')

artistList = ['1', '2', '3', '4']

function findArtist(name) {
  for (let i = 0; i < artistList.length; i++) {
    console.log('first')
    if (artistList[i] == name) {
      console.log('artist found')
      return i
    }
    console.log('end')
  }
}

console.log(findArtist('2'))

//cannot return out of a .forEach loop, it will go through the entire loop

// function findArtist(name) {
//   let myIndex = null
//   artistList.forEach((artist, index) => {
//     console.log('first')
//     if (artist == name) {
//       console.log('artist found')
//       myIndex = index
//     }
//     console.log('end')
//   });
//   return myIndex
// }

// console.log(findArtist('2'))