const checklist = /\s*\-\s+\[\s*([xX]?)\s*\]\s+(.+?)\.\s+/mg;



export async function checks(body: string ): Promise<{ [id:string] : boolean}> {
    return new Promise(resolve => {
        var checks : { [id:string] : boolean} = {}
        var match = checklist.exec(body)
        while (match != null) {
            checks[match[2]] = match[1]?true:false
            match = checklist.exec(body)
        }
        return match
    })
}
