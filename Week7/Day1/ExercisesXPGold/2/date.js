//export function minLived(bdate){

exports.minLived = (bdate) => {
    let now = new Date();
    let birthdate = new Date(bdate);
    let delta = now - birthdate;
    let minutes = parseInt(delta / (1000 * 60));
    return minutes + ' minutes';
}