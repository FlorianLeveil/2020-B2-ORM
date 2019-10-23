const datasets = require("./datasets.json")
const reset = '\x1b[0m'
const bright = '\x1b[1m'

exports = module.exports = {
  name: "Déménagement",
  datasets,
  algo: function (input) {
    // YOUR CODE BETWEEN HERE
    
      const nbcarton = input.shift()
      const l = input.length
      let poid = 0
      let compteur = 0
      let poidtotal = 0 
      
      for (let i = 0; i < l ;i++) {
          poid = input[i]
          console.log(poid)
          poidtotal = poidtotal + poid
           
          if (poidtotal > 100) {
               compteur++
          }
 
      }
      if (poidtotal <= 100){
          compteur = 1
          return compteur
      } else {
          if (poidtotal === 200) {
              return compteur
          } else {
              compteur = compteur + 1
              return compteur
          }
      }
      console.log(poidtotal)
      console.log(compteur)
      
    // AND HERE
  },
  verify: function (dataset, output) {
    if (dataset.output !== output) {
      throw new Error(`${bright}Got ${output} but expected ${dataset.output}${reset}`)
    } else {
      return true
    }
  }
}
