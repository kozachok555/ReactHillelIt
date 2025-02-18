import {cat} from './App'

test("Містить імʼя",()=>{
    expect(cat.name).toBe("Timmy")
    expect(typeof(cat.name)).toBe("string")
    expect(typeof(cat.age)).toBe("number")
})
