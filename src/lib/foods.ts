import type { Foods, Mains } from './interfaces/Foods';

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
    {
      src: '/images/chicken_katsu.jpg',
      title: 'Chicken Katsu',
      sides: 'Serves with 2 scoop of Rice, a scoop of Mac Salad',
      description:
        'Boneless "HALAL" panko crusted chicken thigh, fried until golden, served hawaiian style. Offering a taste of the islands in every bite',
      includes: ['Jasmine Rice', 'Ona Mac'],
    },
    {
      src: '/images/soy_ginger_salmon_with_jasmine_rice.jpg',
      title: 'Soy Ginger Salmon',
      sides: 'Serves with 2 scoop of Rice, a scoop of Mac Salad',
      description: '6oz pan seared filet marinated in house. Served "Filipino" or "Hawaiian" style',
      includes: ['Jasmine Rice', 'Ona Mac'],
    },
    {
      src: '/images/sisig_filipino.jpg',
      title: 'Sisig',
      sides: '',
      description: 'Sizzling Filipino delicacy featuring finely chopped, crispy pork belly, ears, and liver, seasoned with spicy chili, onions, and calamansi',
      includes: [],
    }
  ],
  Pupus: [
    {
      src: '/images/lumpia_shanghai.jpg',
      title: 'Lumpia Shanghai',
      sides: 'Crispy Filled Spring Rolls',
      description:
        'Hand rolled Filipino crispy filled spring rolls. Options: Pork (served on our Filipino Plate Lunches), Chicken and Veggies',
    },
    {
      src: '/images/noodles_orlando.jpg',
      title: 'Pancit',
      sides: 'Rice and wheat noodles sautéed in garlic with mixed vegetables.',
      description: 'Rice and wheat noodles seasoned and sauteed with mixed vegetables.',
    },
    {
      src: '/images/food_truck_photo.jpg',
      title: 'Ono Mac Salad',
      sides: 'Elbow Noodles smothered with Mayonnaise, Eggs, Carrots, Potato.',
      description: 'Elbow noodles smothered with mayonnaise, eggs, carrots, potato, seasoned to perfection.',
    },
    {
      src: '/images/atchara-filipino-papaya.jpg',
      title: 'Atchara',
      sides: 'Pickled Jicama, Green Papaya, Red Bells and a hint of spice.',
      description: 'Pickled Jicama, Green Papaya, Red Bells, and a hint of spice.',
    },
    {
      src: '/images/beautfy_shot_egg_rolls.jpg',
      title: 'Frozen Lumpia Shanghai (Dozen)',
      sides: 'Meat by the Pound',
      description: "Enjoy our hand rolled lumpia's from the comfort of your home.",
    },
    {
      src: '/images/haupia_coconut_pudding_recipe.jpg',
      title: 'Haupia',
      sides: 'Coconut Hawaiian pudding',
      description: 'Coconut Hawaiian pudding',
    },
    {
      src: '/images/sauteed_vegetable.jpg',
      title: 'Sauteed Mixed Veggies',
      sides: '',
      description: '',
    },
  ],
};

export default foods;
