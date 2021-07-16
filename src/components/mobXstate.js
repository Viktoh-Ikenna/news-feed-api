import { makeObservable,configure, observable, computed, action, flow } from "mobx";
import axios from "axios";


configure({
    useProxies: "never",
})

class newFeed {
  Today = [];
  Us = [];
  Ru = [];
  Comments=[];
  constructor() {
    makeObservable(this, {
      Today: observable,
      getToday: computed,
      Us:observable,
      getUs:computed,
      Ru:observable,
      getRu:computed,
      setToday: action,
      Comments:observable,
      getComments:computed,
      setComments:action
    });
  }
  get getUs(){
      return this.Us;
  }
  get getToday() {
    return this.Today;
  }
  get getRu(){
    return this.Ru;
}
get getComments(){
  return this.Comments;
}
setComments(data){
  return this.Comments=[...this.Comments,data]
}
  setToday(url) {
      (
          async()=>{
          const res=await axios.get(url);
          let data= await res.data
             this.Today=(data.articles);
          }
      )();
 
  }
}

const store = (window.store = new newFeed());
export default store;
