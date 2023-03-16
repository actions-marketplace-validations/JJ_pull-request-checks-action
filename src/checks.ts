const checklist = /\s*-\s+\[\s*([xX]?)\s*\]\s+([A-Z]+:)?\s*/gm

export function checks(body: NonNullable<string>): {[id: string]: boolean} {
  const checked: {[id: string]: boolean} = {}
  let match = checklist.exec(body)
  let index = 0
  while (match != null) {
    console.log(match[2])
    let key
    if (match[2] !== undefined) {
      key = match[2]
    } else {
      key = `check${index}`
    }
    console.log(key)
    checked[key] = match[1] ? true : false
    index++
    match = checklist.exec(body)
  }
  console.log(checked)
  return checked
}
