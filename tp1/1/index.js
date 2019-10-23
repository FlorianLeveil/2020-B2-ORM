const datasets = require("./datasets.json")
const reset = '\x1b[0m'
const bright = '\x1b[1m'

exports = module.exports = {
  name: "Marathon",
  datasets,
  algo: function (input) {
    // YOUR CODE BETWEEN HERE
        let placedepart = input.shift()
        
        const l = input.length
        for (let i = 0; i < l ;i++) {
            let var1 = input[i].split('')
            
            placedepart = (parseInt(placedepart)) + (parseInt(var1[0]))
            placedepart = (parseInt(placedepart)) - (parseInt(var1[2]))
            
        }

        let sous = 0
        let abon = 'OK'
        if (placedepart < 100) {
            sous += 1000
        } else if (l === 42) {
           sous += 100
        }

        if (placedepart > 10000) {
            abon = 'KO'
        }
        if (abon === 'KO') {
            return abon
        } else {
            return sous
        }
        
        
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
