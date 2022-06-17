import { observable, action, computed, makeObservable } from 'mobx'

class UserStore {
    constructor() {
        makeObservable(this)
    }

    @observable user = null
    @observable num = 0

    @action
    add() {
        console.log(this);
        this.num++
    }
    @action.bound
    setUser(param) {
        this.user = param
        console.log(this.user, this);
    }

    @computed get getUser(){
        return this.user
    }
}

export default UserStore