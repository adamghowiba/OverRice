import type { Foods, Mains } from "./interfaces/Foods";

let foods: Foods | Mains = {
  Mains: [
    {
      src: '/images/pork_adobo.jpg',
      title: 'Filipino Style Plate Lunch',
      sides: 'Served with Jasmine Rice, Pancit, Lumpia Shangai with a Single or Mixed Plate Choice',
      description:
        'Signature OverRice plate lunch. Served over jasmine rice, pancit, lumpia shanghai and your choice(s) of protein. ',
      includes: ['Jasmine Rice', 'Pancit', 'Lumpia Shanghai'],
    },
    {
      src: '/images/lunch_combo_mix.jpg',
      title: 'Hawaiian Style Plate Lunch',
      sides: 'Serves with 2 scoop of Rice, a scoop of Mac Salad, Poi with a Single or Mixed Plate Choice',
      description:
        'Traditional Hawaiian plate lunch. Served with 2 scoops of jasmine rice, 1 scoop ono mac salad and your choice(s) of protein. ',
      includes: ['Jasmine Rice', 'Ona Mac'],
    },
  ],
  Pupus: [
    {
      src: '/images/lumpia_shanghai.jpg',
      title: 'Lumpia Shanghai',
      sides: 'Crispy Filled Spring Rolls',
      description:
        'Hand rolled Filipino crispy filled spring rolls. Options: Pork (served on our Filipino Plate Lunches), Chicken and Veggies',
      price: 10,
    },
    {
      src: '/images/noodles_orlando.jpg',
      title: 'Pancit',
      sides: 'Rice and wheat noodles sautéed in garlic with mixed vegetables.',
      description: 'Rice and wheat noodles seasoned and sauteed with mixed vegetables.',
      price: 30,
    },
    {
      src: '/images/food_truck_photo.jpg',
      title: 'Ono Mac Salad',
      sides: 'Elbow Noodles smothered with Mayonaisse, Eggs, Carrots, Potato.',
      description: 'Elbow noodles smothered with mayonnaise, eggs, carrots, potato, seasoned to perfection.',
      price: 40,
    },
    {
      src: '/images/atchara-filipino-papaya.jpg',
      title: 'Atchara',
      sides: 'Pickled Jicama, Green Papaya, Red Bells and a hint of spice.',
      description: 'Pickled Jicama, Green Papaya, Red Bells, and a hint of spice.',
      price: 15,
    },
    {
      src: '/images/beautfy_shot_egg_rolls.jpg',
      title: 'Frozen Lumpia Shanghai (Dozen)',
      sides: 'Meat by the Pound',
      description: 'Enjoy our hand rolled lumpias from the comfort of your home. ',
      price: 15,
    },
  ],
};

export default foods;
