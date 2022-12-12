const originalDisorderFormat =
  'Depression|$|Bipolar|$|Manic|$|Anxiety|$|Anorexia|$|Posttraumtic Stress|$|Seasonal Affective|$|Bulimia'

const [disorder, disorderTwo, disorderThree, disorderFour, disorderFive, disorderSix, disorderSeven, disorderEight] = originalDisorderFormat.split('|$|')

const allDisorders = [disorder, disorderTwo, disorderThree, disorderFour, disorderFive, disorderSix, disorderSeven, disorderEight]

const listDisorder = allDisorders.join('</div><div>')

console.log(`<div>${listDisorder}</div>`)