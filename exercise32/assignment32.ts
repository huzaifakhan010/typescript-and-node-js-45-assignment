let current_users=["admin","Eric","Huzaifa","Wasi","sami"];
let new_users=["admin","sami","Ali","Bilal","Filza"];

let current_users_lower:string[]=current_users.map(user => user.toLowerCase())

for(let new_user of new_users){
    if(current_users_lower.includes(new_user.toLowerCase())){
        console.log(`Sorry ${new_user},that name is taken`);
        }else{
            console.log(`Yes ${new_user},is still in available list`);
            
        }
    }