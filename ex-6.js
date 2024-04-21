let height = undefined;
let result;

function change(height){
    height = height ?? null;
    if (height === null){
    return "Height is no defined"};
}

console.log(change(result)); //  Result ควรจะได้ออกมาเป็น “Height is not defined”
