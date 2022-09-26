const api = 'https://script.google.com/macros/s/AKfycbx1eF9XGwMmEDoC0_lpGgk5kCUHs9z4OiN0Eac89q2vkM8zCNPLf4DT9dw4Wfn362o/exec?path=areacodes'
const codeArea = document.getElementById('code_area')

const getData = async () => {
    const query = await fetch(api)
    const data = await query.json()
    return data
}

getData().then(res => {
    const codes = res.filter((code) => {
        if (code.jurisdiction === 'Ciudad Autónoma de Buenos Aires,  Provincia de Buenos Aires (dentro del área metropolitana)'
            || code.jurisdiction === 'Buenos Aires') return code
    })
    codes.map((code) => {
        const option = document.createElement('option')
        option.innerHTML = code.code
        codeArea.add(option)
    }) 
})