export default function compareDates(d1, d2){
    let parts =d1.split('-');
    d1 = Number(parts[2] + parts[1] + parts[0]);
    parts = d2.split('-');
    d2 = Number(parts[2] + parts[1] + parts[0]);
    return d1 <= d2;
    }