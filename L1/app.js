//function
function greet()
{
    console.log("hii");
}
greet();//invoke the function or calling a function

//function are first class
function gretting(fn)//parameter recive here that is 'fn'
{
    fn();
}
gretting(greet);//argument pass
