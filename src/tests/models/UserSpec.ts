import {  UserModel } from "../../models/User.model";

const user = new UserModel();

describe('User Model',()=>{

    it('should have an signup method', () => {
        expect(user.signup).toBeDefined();
    });

    it('should have an signin method', () => {
        expect(user.signin).toBeDefined();
    });
    
    it('should have an show method', () => {
        expect(user.show).toBeDefined();
    });

    it('should have an index method', () => {
        expect(user.index).toBeDefined();
    });

    it('signup method should create a new user', async () => {
        const result = await user.signup({first_name:'ali',last_name:'ahamed',password:'1234',email:'abcd@efg.hi'});
        expect({ user_id:result.user_id})
                .toEqual({ user_id:6 });
    });

    it('signin method should return a user', async () => {
        let result = await user.signin('abcd@efg.hi','1234');
        expect(result?.user_id)
                .toEqual(6);
    });

    it('signin method should return a null (Wrong password)', async () => {
        let result = await user.signin('abcd@efg.hi','1235');
        expect(result).toBeNull();
    });
    


});