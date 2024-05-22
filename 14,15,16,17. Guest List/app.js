var guest_list = ['ali', 'farhan', 'raza', 'ayesha'];
for (var i = 0; i < guest_list.length; i++) {
    console.log('Respected sir/madam: ' + guest_list[i] + ',\nwe invited you on dinner tomorrow.\nThank You\n');
}
var not_present = 'raza';
var new_guest = 'Shahid Afridi';
guest_list[1] = new_guest;
for (var i = 0; i < guest_list.length; i++) {
    console.log('Respected sir/madam: ' + guest_list[i] + ',\nwe invited you on dinner tomorrow.\nThank You\n');
}
console.log("Mr. ".concat(not_present, " will not coming tomorrow dinner."));
