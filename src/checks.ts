const checklist = /\s*-\s+\[\s*([xX]?)\s*\]\s+(.+?)\.\s+/gm

export async function checks(
  body: NonNullable<string>
): Promise<{[id: string]: boolean}> {
  return new Promise(() => {
    const checked: {[id: string]: boolean} = {}
    let match = checklist.exec(body)
    while (match != null) {
      checked[match[2]] = match[1] ? true : false
      match = checklist.exec(body)
    }
    return checked
  })
}
