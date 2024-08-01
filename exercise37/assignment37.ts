function make_shirt(size:string='large',text:string=' "I love typescript" '):void{
    console.log(`You have order a ${size} size shirt that says ${text}`);
    }

    make_shirt();
    make_shirt(`medium`);

    //different message;
    make_shirt('small',' "I need a big shirt to wear" ')
