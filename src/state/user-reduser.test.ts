import {ActionType, userReducer, UserType} from "./user-reducer";
//JEST
test("increment age", () => {
    const startUser: UserType = {
        name: 'Alex',
        age: 29,
        childrenCount: 3
    }

    const myAction: ActionType = {type: 'INCREMENT-AGE'}

    const endUser = userReducer(startUser, {type: 'INCREMENT-AGE'})
    expect(endUser.age).toBe(30)
})

test("increment children count", () => {
    const startUser: UserType = {
        name: 'Alex',
        age: 29,
        childrenCount: 3
    }

    const myAction: ActionType = {type: 'INCREMENT-CHILDREN-COUNT'}

    const endUser = userReducer(startUser, myAction)
    expect(endUser.childrenCount).toBe(4)
})

test("change user name", () => {
    const startUser: UserType = {
        name: 'Alex',
        age: 29,
        childrenCount: 3
    }

    const myAction: ActionType = {type: 'CHANGE-NAME', newName: 'Bob'}

    const endUser = userReducer(startUser, myAction)
    expect(endUser.name).toBe("Bob")
})