const Intern = require('../utils/internsubclass')

const alex = new Intern(
    "alex",
    "1990",
    "alex@2u.com",
    "777"
)
// test the entire constructer
test('verify constructor takes values', () => {
    expect(alex.theirname).toBe('alex')
    expect(alex.id).toBe('1990')
    expect(alex.email).toBe('alex@2u.com')
    expect(alex.officenumber).toBe('777')
})  

//testing the methods

test("testing getRole method", () =>{
expect(alex.getRole()).toBe("manager")
})


test("testing getName method", () =>{
    expect(alex.getName()).toBe("alex")
})

test("testing getId method", () =>{
    expect(alex.getId()).toBe("1990")
})

test("testing getEmail method", () =>{
    expect(alex.getEmail()).toBe("alex@2u.com")
})
test("testing getSchool method", () =>{
    expect(alex.getOffice()).toBe("777")
})