const checklist = /\s*-\s+\[\s*([xX]?)\s*\]\s+([A-Z]*):?\s*/gm

export async function checks(
  body: NonNullable<string>
): Promise<{[id: string]: boolean}> {
  return new Promise(() => {
    const checked: {[id: string]: boolean} = {}
    let match = checklist.exec(body)
    let index = 0
    while (match != null) {
      let key
      if (match[2] !== '') {
        key = match[2]
      } else {
        key = `check${index}`
      }
      checked[key] = match[1] ? true : false
      index++
      match = checklist.exec(body)
    }
    return checked
  })
}
