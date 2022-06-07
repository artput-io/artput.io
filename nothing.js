import axios from "axios";
const domains = [
    {
        domainName: 'MLB-PAPER_NAPKINS',
        price: 44685,
        moq: 5
    },
    {
        domainName: 'MLB-POUND_CAKES',
        price: 44685,
        moq: 5
    },
    {
        domainName: 'MLB-CORN_KERNELS',
        price: 44839,
        moq: 3
    },
    {
        domainName: 'MLB-FRUIT_PULPS',
        price: 44839,
        moq: 5
    },
    {
        domainName: 'MLB-CEREALS',
        price: 44840,
        moq: 3
    },
    {
        domainName: 'MLB-ORTHODONTIC_RETAINER_BOXES',
        price: 44840,
        moq: 2
    },
    {
        domainName: 'MLB-SEASONINGS',
        price: 44842,
        moq: 2
    },
    {
        domainName: 'MLB-HYGIENIC_WET_WIPES',
        price: 44843,
        moq: 3
    },
    {
        domainName: 'MLB-CONDOMS',
        price: 44845,
        moq: 3
    },
    {
        domainName: 'MLB-BACK_SCRATCHERS',
        price: 44845,
        moq: 1
    },
    {
        domainName: 'MLB-PASTRY_SHEETS_FOR_EMPANADAS_AND_PIES',
        price: 44845,
        moq: 2
    },
    {
        domainName: 'MLB-HAIR_REMOVAL_STRIPS',
        price: 44848,
        moq: 2
    },
    {
        domainName: 'MLB-INSECTICIDES',
        price: 44849,
        moq: 2
    },
    {
        domainName: 'MLB-PANETTONES',
        price: 44850,
        moq: 2
    },
    {
        domainName: 'MLB-SPRINKLES',
        price: 7.50,
        moq: 1
    },
    {
        domainName: 'MLB-EGGS',
        price: 12.60,
        moq: 1
    },
    {
        domainName: 'MLB-FOOD_AND_DRINK_COLORINGS',
        price: 7.90,
        moq: 1
    },
    {
        domainName: 'MLB-PET_SANITARY_SHOVELS',
        price: 9.20,
        moq: 1
    },
    {
        domainName: 'MLB-BABY_CREAMS_AND_OINTMENTS',
        price: 44859,
        moq: 2
    },
    {
        domainName: 'MLB-HOME_CLEANING_BRUSHES',
        price: 12.60,
        moq: 1
    },
    {
        domainName: 'MLB-ORTHODONTIC_WAXES',
        price: 20.30,
        moq: 1
    },
    {
        domainName: 'MLB-GINGER',
        price: 15.20,
        moq: 1
    },
    {
        domainName: 'MLB-HOME_APPLIANCE_ODOR_NEUTRALIZERS',
        price: 17.60,
        moq: 1
    },
    {
        domainName: 'MLB-DISPOSABLE_AND_REFILLABLE_RAZORS',
        price: 10.20,
        moq: 3
    },
    {
        domainName: 'MLB-CATS_AND_DOGS_TREATS',
        price: 10.30,
        moq: 4
    },
    {
        domainName: 'MLB-EAR_WAX_REMOVERS',
        price: 18.80,
        moq: 1
    },
    {
        domainName: 'MLB-FACIAL_TISSUES',
        price: 10.40,
        moq: 3
    },
    {
        domainName: 'MLB-EDIBLE_SEAWEEDS',
        price: 10.40,
        moq: 4
    },
    {
        domainName: 'MLB-CLEANING_SUPPLIES',
        price: 10.60,
        moq: 2
    },
    {
        domainName: 'MLB-BROOM_HOLDERS',
        price: 10.60,
        moq: 3
    },
    {
        domainName: 'MLB-CLOTHESPINS',
        price: 10.80,
        moq: 2
    },
    {
        domainName: 'MLB-HOUSEHOLD_CLEANING_WAXES',
        price: 10.80,
        moq: 2
    },
    {
        domainName: 'MLB-SPARKLING_CIDERS',
        price: 10.30,
        moq: 1
    },
    {
        domainName: 'MLB-PADS',
        price: 11.20,
        moq: 3
    },
    {
        domainName: 'MLB-BROOMS',
        price: 11.30,
        moq: 2
    },
    {
        domainName: 'MLB-INSTANT_MASHED_POTATOES',
        price: 11.30,
        moq: 2
    },
    {
        domainName: 'MLB-SHOE_BRUSHES',
        price: 11.60,
        moq: 2
    },
    {
        domainName: 'MLB-TAMPONS',
        price: 11.80,
        moq: 2
    },
    {
        domainName: 'MLB-CAKE_COVER_PASTES',
        price: 19.20,
        moq: 1
    },
    {
        domainName: 'MLB-HAIR_TREATMENTS',
        price: 12.00,
        moq: 2
    },
    {
        domainName: 'MLB-BEAUTY_AND_PERSONAL_CARE_SUPPLIES',
        price: 12.00,
        moq: 4
    },
    {
        domainName: 'MLB-GRANOLA',
        price: 12.00,
        moq: 2
    },
    {
        domainName: 'MLB-TALCUMS',
        price: 12.00,
        moq: 3
    },
    {
        domainName: 'MLB-DEODORANTS',
        price: 12.20,
        moq: 3
    },
    {
        domainName: 'MLB-BABY_BOTTLE_BRUSHES',
        price: 14.60,
        moq: 1
    },
    {
        domainName: 'MLB-INSTANT_COFFEE',
        price: 12.40,
        moq: 4
    },
    {
        domainName: 'MLB-TOILET_PAPERS',
        price: 12.60,
        moq: 4
    },
    {
        domainName: 'MLB-STAIN_REMOVERS_AND_FABRIC_WHITENERS',
        price: 12.60,
        moq: 2
    },
    {
        domainName: 'MLB-NAIL_POLISH_REMOVERS',
        price: 18.30,
        moq: 1
    },
    {
        domainName: 'MLB-NAIL_POLISH_DRYER_SPRAYS',
        price: 20.90,
        moq: 1
    },
    {
        domainName: 'MLB-LAUNDRY_DETERGENTS',
        price: 12.80,
        moq: 3
    },
    {
        domainName: 'MLB-FABRIC_SOFTENERS',
        price: 12.80,
        moq: 2
    },
    {
        domainName: 'MLB-COGNACS',
        price: 12.90,
        moq: 3
    },
    {
        domainName: 'MLB-COFFEE_CREAMERS',
        price: 13.00,
        moq: 2
    },
    {
        domainName: 'MLB-DEPILATORY_WAXES',
        price: 13.20,
        moq: 5
    },
    {
        domainName: 'MLB-INTIMATE_SOAPS',
        price: 13.30,
        moq: 2
    },
    {
        domainName: 'MLB-DUSTPANS',
        price: 13.90,
        moq: 1
    },
    {
        domainName: 'MLB-DOG_POOP_BAGS',
        price: 13.30,
        moq: 2
    },
    {
        domainName: 'MLB-PANTY_LINERS',
        price: 13.30,
        moq: 2
    },
    {
        domainName: 'MLB-MEATS',
        price: 13.50,
        moq: 2
    },
    {
        domainName: 'MLB-FOOTWEAR_CLEANERS_AND_POLISHES',
        price: 13.50,
        moq: 2
    },
    {
        domainName: 'MLB-JAMS',
        price: 16.80,
        moq: 1
    },
    {
        domainName: 'MLB-AIR_FRESHENERS',
        price: 13.60,
        moq: 2
    },
    {
        domainName: 'MLB-LIP_BALMS',
        price: 13.70,
        moq: 2
    },
    {
        domainName: 'MLB-SWEETENERS',
        price: 13.80,
        moq: 2
    },
    {
        domainName: 'MLB-BATH_SPONGES',
        price: 23.50,
        moq: 1
    },
    {
        domainName: 'MLB-PERSONAL_LUBRICANTS_AND_GELS',
        price: 14.40,
        moq: 2
    },
    {
        domainName: 'MLB-HYDROPHILIC_COTTON',
        price: 14.40,
        moq: 2
    },
    {
        domainName: 'MLB-PEANUT_BUTTERS',
        price: 15.40,
        moq: 1
    },
    {
        domainName: 'MLB-COFFEE_CAPSULES',
        price: 18.80,
        moq: 1
    },
    {
        domainName: 'MLB-COOKING_BAGS',
        price: 14.60,
        moq: 2
    },
    {
        domainName: 'MLB-WRINKLE_RELEASERS',
        price: 14.70,
        moq: 2
    },
    {
        domainName: 'MLB-SKIN_REPELLENTS',
        price: 14.80,
        moq: 2
    },
    {
        domainName: 'MLB-DOG_FRISBEES',
        price: 16.70,
        moq: 1
    },
    {
        domainName: 'MLB-GROUND_AND_WHOLE_BEANS_COFFEE',
        price: 15.30,
        moq: 2
    },
    {
        domainName: 'MLB-BALSAMIC_VINEGARS',
        price: 17.60,
        moq: 1
    },
    {
        domainName: 'MLB-DUSTERS',
        price: 15.60,
        moq: 2
    },
    {
        domainName: 'MLB-YERBA_MATE',
        price: 15.90,
        moq: 2
    },
    {
        domainName: 'MLB-SHAVING_CREAMS',
        price: 16.00,
        moq: 2
    },
    {
        domainName: 'MLB-PET_TOY_BALLS',
        price: 20.30,
        moq: 1
    },
    {
        domainName: 'MLB-FOOD_AND_DRINK_EXTRACTS',
        price: 12.30,
        moq: 1
    },
    {
        domainName: 'MLB-CUTICLE_PUSHERS',
        price: 44851,
        moq: 1
    },
    {
        domainName: 'MLB-DOG_AND_CAT_BLANKETS',
        price: 19.80,
        moq: 1
    },
    {
        domainName: 'MLB-MAKEUP_REMOVERS',
        price: 16.80,
        moq: 2
    },
    {
        domainName: 'MLB-HONEY',
        price: 16.90,
        moq: 2
    },
    {
        domainName: 'MLB-MOUTHWASHES',
        price: 16.90,
        moq: 2
    },
    {
        domainName: 'MLB-HOPS',
        price: 17.20,
        moq: 2
    },
    {
        domainName: 'MLB-EDIBLE_SEEDS',
        price: 14.60,
        moq: 1
    },
    {
        domainName: 'MLB-FREEZER_BAGS',
        price: 17.60,
        moq: 2
    },
    {
        domainName: 'MLB-DOG_POOP_BAG_DISPENSERS',
        price: 20.80,
        moq: 1
    },
    {
        domainName: 'MLB-BABY_TOOTHBRUSHES',
        price: 22.40,
        moq: 1
    },
    {
        domainName: 'MLB-TONG_CLEANERS',
        price: 23.50,
        moq: 1
    },
    {
        domainName: 'MLB-AFTER_SUNS',
        price: 17.90,
        moq: 1
    },
    {
        domainName: 'MLB-DULCE_DE_LECHE',
        price: 16.80,
        moq: 1
    },
    {
        domainName: 'MLB-MAGNETIC_GLASS_CLEANERS',
        price: 18.00,
        moq: 1
    },
    {
        domainName: 'MLB-FACE_MASKS',
        price: 16.20,
        moq: 1
    },
    {
        domainName: 'MLB-STRAIGHT_RAZORS',
        price: 19.20,
        moq: 1
    },
    {
        domainName: 'MLB-PET_ROBES',
        price: 28.00,
        moq: 1
    },
    {
        domainName: 'MLB-CELL_BATTERIES',
        price: 18.90,
        moq: 2
    },
    {
        domainName: 'MLB-COMBS',
        price: 23.40,
        moq: 1
    },
    {
        domainName: 'MLB-NAIL_AND_CUTICLE_CUTTERS',
        price: 22.90,
        moq: 1
    },
    {
        domainName: 'MLB-SQUEEGEES',
        price: 13.30,
        moq: 1
    },
    {
        domainName: 'MLB-COLD_CUTS',
        price: 13.60,
        moq: 1
    },
    {
        domainName: 'MLB-HOME_REPELLENTS',
        price: 19.60,
        moq: 2
    },
    {
        domainName: 'MLB-PLASTIC_WRAPS',
        price: 19.80,
        moq: 2
    },
    {
        domainName: 'MLB-SHAVING_BRUSHES',
        price: 19.50,
        moq: 1
    },
    {
        domainName: 'MLB-DOG_TOY_BONES',
        price: 21.30,
        moq: 1
    },
    {
        domainName: 'MLB-INSTANT_NOODLES',
        price: 2.70,
        moq: 5
    },
    {
        domainName: 'MLB-EASTER_EGGS',
        price: 20.20,
        moq: 2
    },
    {
        domainName: 'MLB-STUFFED_PET_TOYS',
        price: 24.00,
        moq: 1
    },
    {
        domainName: 'MLB-MANUAL_MENSTRUAL_CUP_STERILIZERS',
        price: 18.80,
        moq: 1
    },
    {
        domainName: 'MLB-LAUNDRY_WASH_BAGS',
        price: 24.00,
        moq: 1
    },
    {
        domainName: 'MLB-HAIR_DYES_COLORANTS_DECOLORANTS',
        price: 20.90,
        moq: 2
    },
    {
        domainName: 'MLB-TOOTHBRUSHES',
        price: 20.90,
        moq: 2
    },
    {
        domainName: 'MLB-PET_DRESSES',
        price: 44864,
        moq: 1
    },
    {
        domainName: 'MLB-BODY_SKIN_CARE_PRODUCTS',
        price: 21.20,
        moq: 2
    },
    {
        domainName: 'MLB-COOKING_OILS',
        price: 21.20,
        moq: 2
    },
    {
        domainName: 'MLB-HAIR_SHAMPOOS_AND_CONDITIONERS',
        price: 21.30,
        moq: 2
    },
    {
        domainName: 'MLB-DEPILATORY_CREAMS',
        price: 24.90,
        moq: 1
    },
    {
        domainName: 'MLB-BABY_SUPPLIES',
        price: 21.40,
        moq: 1
    },
    {
        domainName: 'MLB-INTERDENTAL_BRUSHES',
        price: 21.60,
        moq: 2
    },
    {
        domainName: 'MLB-PROTECTIVE_ADHESIVE_BANDAGES',
        price: 21.70,
        moq: 2
    },
    {
        domainName: 'MLB-GAUZES',
        price: 21.80,
        moq: 2
    },
    {
        domainName: 'MLB-FOOD_AND_DRINK_SYRUPS',
        price: 21.90,
        moq: 2
    },
    {
        domainName: 'MLB-TEETH_WHITENING_KITS',
        price: 21.90,
        moq: 2
    },
    {
        domainName: 'MLB-ELECTRIC_INSECT_RACKETS',
        price: 22.00,
        moq: 2
    },
    {
        domainName: 'MLB-CUTICLE_REMOVERS',
        price: 23.20,
        moq: 1
    },
    {
        domainName: 'MLB-CATS_LITTER',
        price: 22.20,
        moq: 2
    },
    {
        domainName: 'MLB-VACUUM_CLEANER_BAGS',
        price: 25.80,
        moq: 1
    },
    {
        domainName: 'MLB-INCONTINENCE_PADS',
        price: 22.50,
        moq: 3
    },
    {
        domainName: 'MLB-RAZOR_CARTRIDGES',
        price: 22.60,
        moq: 2
    },
    {
        domainName: 'MLB-TWEEZERS',
        price: 44857,
        moq: 1
    },
    {
        domainName: 'MLB-CLEANING_MOP_REPLACEMENTS',
        price: 23.00,
        moq: 2
    },
    {
        domainName: 'MLB-PET_SEAT_BELTS',
        price: 19.80,
        moq: 1
    },
    {
        domainName: 'MLB-PET_BRUSHES',
        price: 44855,
        moq: 1
    },
    {
        domainName: 'MLB-DOG_AND_CAT_SHAMPOOS_AND_CONDITIONERS',
        price: 27.60,
        moq: 1
    },
    {
        domainName: 'MLB-NAIL_POLISH',
        price: 18.80,
        moq: 1
    },
    {
        domainName: 'MLB-PET_BOWS',
        price: 27.00,
        moq: 1
    },
    {
        domainName: 'MLB-PET_JACKETS_AND_COATS',
        price: 44860,
        moq: 1
    },
    {
        domainName: 'MLB-TART_SHELLS',
        price: 23.90,
        moq: 3
    },
    {
        domainName: 'MLB-PET_COLLARS',
        price: 25.30,
        moq: 1
    },
    {
        domainName: 'MLB-SAKES',
        price: 24.20,
        moq: 1
    },
    {
        domainName: 'MLB-REPELLENT_BRACELETS',
        price: 24.00,
        moq: 2
    },
    {
        domainName: 'MLB-DRIED_FRUITS',
        price: 24.20,
        moq: 2
    },
    {
        domainName: 'MLB-BUCKETS_AND_BASINS',
        price: 25.50,
        moq: 1
    },
    {
        domainName: 'MLB-NURSING_PADS',
        price: 24.30,
        moq: 2
    },
    {
        domainName: 'MLB-NAIL_FILES',
        price: 44853,
        moq: 1
    },
    {
        domainName: 'MLB-LAUNDRY_WASH_BALLS',
        price: 23.80,
        moq: 1
    },
    {
        domainName: 'MLB-GARDEN_AND_OUTDOOR_SUPPLIES',
        price: 24.90,
        moq: 2
    },
    {
        domainName: 'MLB-FABRIC_FRAGRANCES',
        price: 32.50,
        moq: 1
    },
    {
        domainName: 'MLB-WINES',
        price: 24.40,
        moq: 1
    },
    {
        domainName: 'MLB-BABY_FOOD_DISPENSER_SPOONS',
        price: 34.60,
        moq: 1
    },
    {
        domainName: 'MLB-SAUSAGE_CASINGS',
        price: 30.70,
        moq: 1
    },
    {
        domainName: 'MLB-PET_TOY_KITS',
        price: 30.90,
        moq: 1
    },
    {
        domainName: 'MLB-BABY_BOTTLE_DRYING_RACKS',
        price: 39.00,
        moq: 1
    },
    {
        domainName: 'MLB-IRONING_BOARD_COVERS',
        price: 35.50,
        moq: 1
    },
    {
        domainName: 'MLB-MANUAL_CLOTH_FOLDING_BOARDS',
        price: 38.70,
        moq: 1
    },
    {
        domainName: 'MLB-RAZOR_BLADES',
        price: 27.20,
        moq: 2
    },
    {
        domainName: 'MLB-PLUNGERS',
        price: 19.40,
        moq: 1
    },
    {
        domainName: 'MLB-HAIR_BRUSHES',
        price: 17.30,
        moq: 1
    },
    {
        domainName: 'MLB-DOG_LEASHES',
        price: 30.90,
        moq: 1
    },
    {
        domainName: 'MLB-SPARKLING_WINES',
        price: 28.90,
        moq: 1
    },
    {
        domainName: 'MLB-BABY_PLATES',
        price: 29.20,
        moq: 1
    },
    {
        domainName: 'MLB-GOJI_BERRIES',
        price: 25.20,
        moq: 1
    },
    {
        domainName: 'MLB-BABY_PACIFIERS',
        price: 30.20,
        moq: 1
    },
    {
        domainName: 'MLB-FLAVORED_WATERS',
        price: 3.15,
        moq: 6
    },
    {
        domainName: 'MLB-ICE_CREAM_AND_FROZEN_DESSERTS',
        price: 3.15,
        moq: 3
    },
    {
        domainName: 'MLB-JUICES',
        price: 3.45,
        moq: 6
    },
    {
        domainName: 'MLB-DISHWASHING_DETERGENTS',
        price: 3.45,
        moq: 5
    },
    {
        domainName: 'MLB-BAKING_POWDERS',
        price: 3.45,
        moq: 2
    },
    {
        domainName: 'MLB-COOKIES',
        price: 3.60,
        moq: 3
    },
    {
        domainName: 'MLB-EAR_COTTON_SWABS',
        price: 3.60,
        moq: 3
    },
    {
        domainName: 'MLB-CAKES',
        price: 3.75,
        moq: 5
    },
    {
        domainName: 'MLB-BROTHS',
        price: 3.90,
        moq: 3
    },
    {
        domainName: 'MLB-BABY_COLOGNES',
        price: 32.10,
        moq: 1
    },
    {
        domainName: 'MLB-ADULT_DIAPERS',
        price: 30.40,
        moq: 3
    },
    {
        domainName: 'MLB-DISPOSABLE_BABY_DIAPERS',
        price: 30.50,
        moq: 2
    },
    {
        domainName: 'MLB-SUN_TANNER_PRODUCTS',
        price: 27.90,
        moq: 1
    },
    {
        domainName: 'MLB-VODKAS',
        price: 23.60,
        moq: 1
    },
    {
        domainName: 'MLB-APERITIFS',
        price: 31.50,
        moq: 1
    },
    {
        domainName: 'MLB-WASHING_AND_DRYER_MACHINE_COVERS',
        price: 34.60,
        moq: 1
    },
    {
        domainName: 'MLB-BABY_BOTTLE_NIPPLES',
        price: 35.50,
        moq: 1
    },
    {
        domainName: 'MLB-RUM',
        price: 35.90,
        moq: 1
    },
    {
        domainName: 'MLB-ANIMAL_AND_PET_PRODUCTS',
        price: 44865,
        moq: 1
    },
    {
        domainName: 'MLB-CAT_TOYS',
        price: 32.50,
        moq: 1
    },
    {
        domainName: 'MLB-BABY_GROOMING_KITS',
        price: 31.60,
        moq: 1
    },
    {
        domainName: 'MLB-BABY_CUPS',
        price: 36.10,
        moq: 1
    },
    {
        domainName: 'MLB-FACIAL_SKIN_CARE_PRODUCTS',
        price: 26.60,
        moq: 1
    },
    {
        domainName: 'MLB-GINS',
        price: 22.20,
        moq: 1
    },
    {
        domainName: 'MLB-BABY_FEEDING_SETS',
        price: 36.70,
        moq: 1
    },
    {
        domainName: 'MLB-MAT_AND_LIQUID_REPELLENT_ELECTRIC_DEVICES',
        price: 34.20,
        moq: 2
    },
    {
        domainName: 'MLB-SUNSCREENS',
        price: 32.20,
        moq: 1
    },
    {
        domainName: 'MLB-BEARD_OILS_AND_BALMS',
        price: 32.70,
        moq: 1
    },
    {
        domainName: 'MLB-PET_TOOTHPASTES',
        price: 30.50,
        moq: 1
    },
    {
        domainName: 'MLB-CAT_LITTER_BOXES',
        price: 36.60,
        moq: 1
    },
    {
        domainName: 'MLB-CARPET_AND_UPHOLSTERY_CLEANERS',
        price: 28.50,
        moq: 1
    },
    {
        domainName: 'MLB-SKIN_CARE_SUPPLIES',
        price: 24.80,
        moq: 1
    },
    {
        domainName: 'MLB-MENSTRUAL_CUPS',
        price: 34.50,
        moq: 1
    },
    {
        domainName: 'MLB-DRYING_RACKS',
        price: 35.20,
        moq: 1
    },
    {
        domainName: 'MLB-TEETH_WHITENING_SYRINGES',
        price: 57.90,
        moq: 1
    },
    {
        domainName: 'MLB-CAT_HOUSES',
        price: 36.80,
        moq: 1
    },
    {
        domainName: 'MLB-CAT_AND_DOG_DRINKERS_AND_FEEDERS',
        price: 33.00,
        moq: 1
    },
    {
        domainName: 'MLB-PET_FOOD_STORAGE_CONTAINERS',
        price: 47.30,
        moq: 1
    },
    {
        domainName: 'MLB-BASIC_FOOD_BASKETS',
        price: 37.70,
        moq: 3
    },
    {
        domainName: 'MLB-CACHACAS',
        price: 31.50,
        moq: 1
    },
    {
        domainName: 'MLB-DOG_SUPPLEMENTS',
        price: 38.90,
        moq: 2
    },
    {
        domainName: 'MLB-AFTERSHAVES',
        price: 27.00,
        moq: 1
    },
    {
        domainName: 'MLB-LAUNDRY_BASKETS',
        price: 39.20,
        moq: 2
    },
    {
        domainName: 'MLB-CEREAL_BARS',
        price: 4.35,
        moq: 5
    },
    {
        domainName: 'MLB-COOKING_CREAMS',
        price: 4.35,
        moq: 6
    },
    {
        domainName: 'MLB-POPCORN',
        price: 4.35,
        moq: 4
    },
    {
        domainName: 'MLB-CATS_AND_DOGS_FOODS',
        price: 4.50,
        moq: 6
    },
    {
        domainName: 'MLB-SOFT_DRINKS',
        price: 4.50,
        moq: 6
    },
    {
        domainName: 'MLB-COOKING_YEASTS',
        price: 4.50,
        moq: 5
    },
    {
        domainName: 'MLB-PASTAS',
        price: 4.80,
        moq: 3
    },
    {
        domainName: 'MLB-TONIC_WATERS',
        price: 4.95,
        moq: 6
    },
    {
        domainName: 'MLB-TREAT_DISPENSING_PET_TOYS',
        price: 42.10,
        moq: 1
    },
    {
        domainName: 'MLB-SKIN_CARE_KITS',
        price: 34.40,
        moq: 1
    },
    {
        domainName: 'MLB-PET_DIAPERS',
        price: 45.40,
        moq: 2
    },
    {
        domainName: 'MLB-BEARD_KITS',
        price: 45.40,
        moq: 1
    },
    {
        domainName: 'MLB-SELF_TANNERS',
        price: 51.20,
        moq: 1
    },
    {
        domainName: 'MLB-TEQUILAS',
        price: 48.00,
        moq: 2
    },
    {
        domainName: 'MLB-BAR_SOAPS',
        price: 5.25,
        moq: 4
    },
    {
        domainName: 'MLB-CLEANING_SPONGES',
        price: 5.40,
        moq: 4
    },
    {
        domainName: 'MLB-SALTY_SNACKS',
        price: 5.55,
        moq: 2
    },
    {
        domainName: 'MLB-SAUCES_AND_DRESSINGS',
        price: 5.85,
        moq: 4
    },
    {
        domainName: 'MLB-BROOM_AND_SQUEEGEE_HANDLES',
        price: 43.70,
        moq: 1
    },
    {
        domainName: 'MLB-WHISKEYS',
        price: 62.40,
        moq: 1
    },
    {
        domainName: 'MLB-BEERS',
        price: 6.00,
        moq: 6
    },
    {
        domainName: 'MLB-LIQUORS',
        price: 6.00,
        moq: 6
    },
    {
        domainName: 'MLB-MINERAL_WATERS',
        price: 6.00,
        moq: 6
    },
    {
        domainName: 'MLB-CLEANING_GLOVES',
        price: 6.00,
        moq: 3
    },
    {
        domainName: 'MLB-SWEET_PREMIXES',
        price: 6.00,
        moq: 2
    },
    {
        domainName: 'MLB-CUPCAKES',
        price: 6.00,
        moq: 3
    },
    {
        domainName: 'MLB-FOODS_AND_DRINKS',
        price: 6.30,
        moq: 3
    },
    {
        domainName: 'MLB-READY_TO_DRINK_COCKTAILS',
        price: 6.30,
        moq: 6
    },
    {
        domainName: 'MLB-ALUMINUM_FOILS',
        price: 6.30,
        moq: 2
    },
    {
        domainName: 'MLB-CANDIES',
        price: 6.40,
        moq: 3
    },
    {
        domainName: 'MLB-FLOUR',
        price: 6.40,
        moq: 3
    },
    {
        domainName: 'MLB-SALT',
        price: 6.40,
        moq: 2
    },
    {
        domainName: 'MLB-SPORTS_DRINKS',
        price: 6.45,
        moq: 6
    },
    {
        domainName: 'MLB-LIQUID_HAND_AND_BODY_SOAPS',
        price: 6.70,
        moq: 3
    },
    {
        domainName: 'MLB-GRATED_COCONUT',
        price: 6.75,
        moq: 3
    },
    {
        domainName: 'MLB-ENERGY_DRINKS',
        price: 6.80,
        moq: 6
    },
    {
        domainName: 'MLB-ICED_TEA',
        price: 6.80,
        moq: 5
    },
    {
        domainName: 'MLB-CHOCOLATES',
        price: 6.90,
        moq: 3
    },
    {
        domainName: 'MLB-VINEGARS',
        price: 6.90,
        moq: 2
    },
    {
        domainName: 'MLB-BEANS',
        price: 6.90,
        moq: 3
    },
    {
        domainName: 'MLB-TOILET_DEODORIZERS',
        price: 6.90,
        moq: 3
    },
    {
        domainName: 'MLB-VEGETABLES',
        price: 6.90,
        moq: 2
    },
    {
        domainName: 'MLB-BRANDIES',
        price: 88.80,
        moq: 1
    },
    {
        domainName: 'MLB-MULTIPURPOSE_CLEANERS_AND_DISINFECTANTS',
        price: 7.30,
        moq: 2
    },
    {
        domainName: 'MLB-BREAD_CRUMBS',
        price: 7.30,
        moq: 2
    },
    {
        domainName: 'MLB-BREADS',
        price: 7.35,
        moq: 3
    },
    {
        domainName: 'MLB-INSTANT_SOUPS_AND_CREAMS',
        price: 7.35,
        moq: 3
    },
    {
        domainName: 'MLB-BABY_BISCUITS',
        price: 7.35,
        moq: 5
    },
    {
        domainName: 'MLB-PISCOS',
        price: 113.90,
        moq: 1
    },
    {
        domainName: 'MLB-CACAO',
        price: 7.60,
        moq: 3
    },
    {
        domainName: 'MLB-BLEACHES',
        price: 7.65,
        moq: 2
    },
    {
        domainName: 'MLB-EDIBLE_PAPERS',
        price: 44863,
        moq: 1
    },
    {
        domainName: 'MLB-CANNED_AND_PRESERVED_FOOD',
        price: 7.95,
        moq: 3
    },
    {
        domainName: 'MLB-CONDENSED_MILK',
        price: 7.95,
        moq: 6
    },
    {
        domainName: 'MLB-SOLID_SWEET_PASTES',
        price: 7.95,
        moq: 4
    },
    {
        domainName: 'MLB-SUGAR',
        price: 7.95,
        moq: 4
    },
    {
        domainName: 'MLB-ORAL_IRRIGATORS',
        price: 74.20,
        moq: 1
    },
    {
        domainName: 'MLB-TEA',
        price: 8.00,
        moq: 2
    },
    {
        domainName: 'MLB-OATMEAL',
        price: 8.25,
        moq: 2
    },
    {
        domainName: 'MLB-BABY_FOODS',
        price: 8.25,
        moq: 5
    },
    {
        domainName: 'MLB-FLOOR_DEODORIZERS',
        price: 8.40,
        moq: 2
    },
    {
        domainName: 'MLB-RICE',
        price: 8.40,
        moq: 2
    },
    {
        domainName: 'MLB-DIPS_AND_SPREADS',
        price: 8.50,
        moq: 3
    },
    {
        domainName: 'MLB-MILK',
        price: 8.55,
        moq: 6
    },
    {
        domainName: 'MLB-TOOTHPASTES',
        price: 8.70,
        moq: 3
    },
    {
        domainName: 'MLB-KITCHEN_PAPER_TOWELS',
        price: 8.70,
        moq: 2
    },
    {
        domainName: 'MLB-SPICES',
        price: 8.70,
        moq: 2
    },
    {
        domainName: 'MLB-HAZELNUT_CREAMS',
        price: 8.90,
        moq: 2
    },
    {
        domainName: 'MLB-PEANUTS',
        price: 8.90,
        moq: 2
    },
    {
        domainName: 'MLB-ELECTRIC_TOOTHBRUSHES',
        price: 101.70,
        moq: 1
    },
    {
        domainName: 'MLB-SALTY_PREMIXES',
        price: 9.20,
        moq: 2
    },
    {
        domainName: 'MLB-LENTILS',
        price: 9.20,
        moq: 2
    },
    {
        domainName: 'MLB-IRONING_BOARD_CENTERS',
        price: 287.60,
        moq: 1
    },
    {
        domainName: 'MLB-DENTAL_FLOSSES',
        price: 9.30,
        moq: 2
    },
    {
        domainName: 'MLB-CLEANING_CLOTHS',
        price: 9.50,
        moq: 4
    },
    {
        domainName: 'MLB-LAUNDRY_BAR_SOAPS',
        price: 9.50,
        moq: 2
    },
    {
        domainName: 'MLB-WET_BABY_WIPES',
        price: 9.80,
        moq: 3
    },
];

const options = {
    method: 'POST',
    url: 'https://internal-api.mercadolibre.com//supermarket/policies/sites/MLB/purchase-rules',
    headers: {
        'remote-user': 'josales',
        'x-client-id': '1640573877505041',
        'Content-Type': 'application/json',
        Cookie: '_d2id=4ab96af5-d17d-47b9-8464-f829f6f286de-f-n'
    },
    data: {
        limit: 2,
        site_id: 'MLB',
        type: 'DOMAIN',
        value: 'MLB-MULTIPURPOSE_CLEANERS_AND_DISINFECTANTS',
        validation_type: 'MIN_QUANTITY',
        minimum_moq_allowed: null,
        maximum_moq_allowed: 7.3
    }
};

domains.forEach(domain => {
    const siteId = "MLB"
    const options = {
        method: 'POST',
        url: `https://internal-api.mercadolibre.com//supermarket/policies/sites/${siteId}/purchase-rules`,
        headers: {
            'remote-user': 'josales',
            'x-client-id': '1640573877505041',
            'Content-Type': 'application/json',
            Cookie: '_d2id=4ab96af5-d17d-47b9-8464-f829f6f286de-f-n'
        },
        data: {
            limit: domain.moq,
            site_id: siteId,
            type: 'DOMAIN',
            value: domain.domainName,
            validation_type: 'MIN_QUANTITY',
            minimum_price_allowed: null,
            maximum_price_allowed: domain.price
        }
    };
})

axios.request(options).then(function (response) {
    console.log(response.data);
}).catch(function (error) {
    console.error(error);
});