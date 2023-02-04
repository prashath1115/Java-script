//push
//let a=[10,20,30,40,50,]
//a.push(60)
//console.log(a)

//pop
//let a=[10,20,30,40,50,]
//a.pop(50)
//console.log(a)

//shift
//let a=[1,2,3,4,5,6,7]
//a.shift(1)
//console.log(a)

//unshift
//let a=[1,2,3,4,5,6,7]
//a.unshift(0)
//console.log(a)

//function (invoking)
//function add(a,b,c=1){
//console.log(a+b+c)
//}
//add(2,3,5);
//add(2,6,7);
//add(23,6,7);
//add(1,2,3);
//add(8,89,0);
//add(6,7,6);

//function cal_Age(year) {
    //processing
  //  return 2022 - year
//}
//let age = cal_Age(1983)
//console.log(age)
//let age1 = cal_Age(1993)
//console.log(age1)

//For of
//let id=[10,20,30,40,50,60,70]
//for(id of id){
 //   console.log(id)
//}

//while length
//let ids = [101, 102, 103, 104, 105, 106, 107, 108]
//print last emp id 
//console.log(ids[ids.length - 1])
//console.log(ids.length)

//object orient pro
//ex-1
//class emp{
//  eid=111;
//}
//let even=new emp();

//objectop (using this)
//class account{
  //min_bal=50;
  //acc_bal=0;
  //opening_account(){}
  //deposit_amount(amount){
  //this.acc_bal=this.acc_bal+amount  
  //}
  //get_bal(){return this.acc_bal-this.min_bal
  //}
  //withdraw(){}
  //close_acc(){}
//}
//let a1=new account();
//a1.opening_account();
//a1.deposit_amount(5000);

//class Account {
 // min_Bal = 500
  //open_Account() { }
  //deposit_Amount() { }
  //get_Bal() { }
  //get_St() { }
  //withdrawl() { }
  //close_account() { }
//}
//let a1 = new Account()
//let a2 = new Account()
//console.log(a1)
//console.log(a2)

//extends
class account{
  open_account(){}
  get_account_details(){}
}
class saving_account extends account{
  min_bal=500
  deposit_amount(){}
}
let saving_account=new saving_account();
saving_account1.open_account