export const findMyColor= ( timeInt )=> {
    const h =  timeInt%360;
    const s =  timeInt%100;
    const l =  timeInt%100;
    const color = {h,s,l};
    const bgColor = {h:360-h,s:100-s,l:100-l};
    return {color,bgColor};
}

