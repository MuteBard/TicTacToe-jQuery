function loop (min, max){
  if(min > max-1){
    return null;
  }else{
    //-------------//
    console.log(min);
    //-------------//
    min++;
    loop (min, max);
    return null;
  }
}


loop(0,10);
