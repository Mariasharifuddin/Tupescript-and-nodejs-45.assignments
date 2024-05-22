let guest_list : string [] = ['ali','farhan','raza','ayesha'];
for(let i=0; i<guest_list.length; i++){
    console.log('Respected sir/madam: ' + guest_list[i] +',\nwe invited you on dinner tomorrow.\nThank You\n')

}
let not_present : string = 'raza';
let new_guest : string = 'Shahid Afridi';
guest_list[1] = new_guest ;
for(let i=0; i<guest_list.length; i++){
    console.log('Respected sir/madam: ' + guest_list[i] +',\nwe invited you on dinner tomorrow.\nThank You\n')

}
console.log(`Mr. ${not_present} will not coming tomorrow dinner.`);