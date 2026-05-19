// RecipeOnFire — Recipe Data
// Each object = one recipe card. Add a new object to add a new card automatically.

const recipes = [
    {
        id: 1,
        name: "Spaghetti Carbonara",
        category: "Italian",
        time: "30 mins",
        difficulty: "Medium",
        image: "./Images/recipes/1.jpg",
        description: "A classic Italian pasta dish with a rich, creamy egg sauce, crispy pancetta, and a generous handful of Parmesan cheese. No cream needed — the eggs do all the magic!",
        ingredients: ["200g Spaghetti", "100g Pancetta or Bacon", "2 Whole Eggs", "2 Egg Yolks", "50g Parmesan (grated)", "2 cloves Garlic", "Salt & Black Pepper", "Fresh Parsley"],
        steps: [
            "Boil spaghetti in heavily salted water until al dente.",
            "Fry pancetta with garlic in a pan until crispy, then remove garlic.",
            "Whisk together eggs, egg yolks, and grated Parmesan. Season with pepper.",
            "Drain pasta, reserving 1 cup of pasta water.",
            "Toss hot pasta with pancetta (off the heat), then quickly stir in egg mixture.",
            "Add pasta water little by little to achieve a creamy consistency.",
            "Serve immediately topped with extra Parmesan and fresh parsley."
        ]
    },
    {
        id: 2,
        name: "Chicken Tikka Masala",
        category: "Indian",
        time: "45 mins",
        difficulty: "Medium",
        image:  "./Images/recipes/2.jpg",
        description: "Succulent grilled chicken pieces simmered in a rich, velvety tomato-cream curry sauce bursting with aromatic Indian spices. A crowd-pleaser worldwide!",
        ingredients: ["500g Chicken Breast", "1 cup Plain Yogurt", "2 cups Tomato Puree", "1 cup Heavy Cream", "1 tsp Garam Masala", "1 tsp Cumin", "1 tsp Coriander Powder", "4 cloves Garlic", "1 inch Ginger", "Kasuri Methi", "Oil & Salt"],
        steps: [
            "Cut chicken into cubes and marinate with yogurt, garlic, ginger, and spices for 1 hour.",
            "Grill or pan-fry marinated chicken until slightly charred. Set aside.",
            "In the same pan, sauté garlic and ginger, then add tomato puree.",
            "Add garam masala, cumin, coriander, and salt. Cook sauce for 15 minutes.",
            "Stir in cream and kasuri methi (dried fenugreek). Simmer 5 minutes.",
            "Add grilled chicken to sauce and simmer for 10 more minutes.",
            "Garnish with coriander and serve hot with naan or rice."
        ]
    },
    {
        id: 3,
        name: "Classic Beef Burger",
        category: "American",
        time: "25 mins",
        difficulty: "Easy",
        image:  "./Images/recipes/3.jpg",
        description: "Thick, juicy homemade beef patty stacked with fresh crispy lettuce, ripe tomatoes, melted cheddar, pickles, and a tangy special sauce in a toasted brioche bun.",
        ingredients: ["300g Ground Beef (80/20)", "Brioche Burger Buns", "Cheddar Cheese Slices", "Lettuce Leaves", "Tomato Slices", "Red Onion Rings", "Pickles", "Mayonnaise", "Ketchup", "Mustard", "Salt & Pepper"],
        steps: [
            "Season ground beef with salt, pepper, and a pinch of garlic powder.",
            "Divide into two patties and press a small indent in the center.",
            "Heat a cast-iron skillet or grill to high heat.",
            "Cook patties 4 minutes per side without pressing them down.",
            "Add cheese slice in the last minute and cover to melt.",
            "Mix mayo, ketchup, and mustard for the special sauce.",
            "Toast buns, then layer sauce, lettuce, tomato, onion, patty, and pickles."
        ]
    },
    {
        id: 4,
        name: "Chicken Biryani",
        category: "Pakistani",
        time: "60 mins",
        difficulty: "Hard",
        image:  "./Images/recipes/4.jpg",
        description: "The crown jewel of South Asian cooking — fragrant basmati rice layered with spiced chicken, golden fried onions, fresh mint, and saffron for an unforgettable feast.",
        ingredients: ["500g Chicken Pieces", "2 cups Basmati Rice", "2 Onions (thinly sliced)", "1 cup Yogurt", "Pinch of Saffron", "Whole Spices (bay leaf, cloves, cardamom)", "Fresh Mint Leaves", "Ghee or Oil", "Biryani Masala", "Salt"],
        steps: [
            "Marinate chicken with yogurt, biryani masala, garlic, ginger, and salt for 2+ hours.",
            "Deep fry sliced onions until golden brown. Set aside half for garnish.",
            "Cook marinated chicken with half the fried onions until 70% done.",
            "Parboil rice with whole spices and salt until 70% cooked. Drain.",
            "Layer parboiled rice over chicken in a heavy-bottomed pot.",
            "Add saffron milk, remaining fried onions, and fresh mint on top.",
            "Seal pot with foil and lid. Cook on low heat (dum) for 25 minutes.",
            "Gently mix before serving with raita and salad."
        ]
    },
    {
        id: 5,
        name: "Margherita Pizza",
        category: "Italian",
        time: "40 mins",
        difficulty: "Medium",
        image: "./Images/recipes/5.jpg",
        description: "The timeless Neapolitan classic — thin crispy crust spread with vibrant tomato sauce, topped with fresh mozzarella and fragrant basil. Simple perfection.",
        ingredients: ["Pizza Dough (store-bought or homemade)", "1/2 cup Tomato Sauce", "200g Fresh Mozzarella", "Fresh Basil Leaves", "2 tbsp Olive Oil", "Pinch of Salt"],
        steps: [
            "Preheat oven to 250°C (480°F). Place pizza stone or baking tray inside to heat.",
            "Stretch dough by hand into a thin, roughly round shape.",
            "Spread tomato sauce evenly, leaving a border for the crust.",
            "Tear mozzarella into pieces and distribute over the sauce.",
            "Slide onto hot stone/tray and bake 10-12 minutes until crust is golden and cheese is bubbling.",
            "Remove from oven, immediately add fresh basil leaves.",
            "Drizzle with olive oil and serve hot."
        ]
    },
    {
        id: 6,
        name: "Chocolate Lava Cake",
        category: "Dessert",
        time: "20 mins",
        difficulty: "Medium",
        image: "./Images/recipes/6.jpg",
        description: "A sinfully indulgent warm chocolate cake with a perfectly molten, gooey center that flows out when you cut in. The ultimate dessert for chocolate lovers!",
        ingredients: ["100g Dark Chocolate (70%+)", "100g Unsalted Butter", "2 Whole Eggs", "2 Egg Yolks", "60g Caster Sugar", "30g Plain Flour", "Pinch of Salt", "Powdered Sugar to serve"],
        steps: [
            "Preheat oven to 200°C. Butter 4 ramekins and dust with cocoa powder.",
            "Melt chocolate and butter together in a bowl over simmering water. Stir until smooth.",
            "In another bowl, whisk eggs, yolks, and sugar until pale and fluffy.",
            "Pour melted chocolate into egg mixture and gently fold together.",
            "Sift in flour and a pinch of salt. Fold until just combined.",
            "Pour batter into ramekins. Refrigerate up to 24 hours if preparing ahead.",
            "Bake for 12 minutes — edges should be set, center still wobbly.",
            "Immediately invert onto plates. Dust with powdered sugar and serve."
        ]
    },
    {
        id: 7,
        name: "Caesar Salad",
        category: "American",
        time: "15 mins",
        difficulty: "Easy",
        image: "./Images/recipes/7.jpg",
        description: "Crisp, cold romaine lettuce tossed with a bold garlicky Caesar dressing, golden croutons, and generous shavings of Parmesan. A restaurant-classic made at home.",
        ingredients: ["1 head Romaine Lettuce", "Caesar Dressing", "Croutons", "Parmesan Cheese (shaved)", "1 Lemon (juiced)", "2 cloves Garlic", "1 tsp Anchovy Paste", "2 tbsp Mayonnaise"],
        steps: [
            "Wash and dry romaine lettuce thoroughly. Tear or chop into pieces.",
            "Make dressing: blend garlic, anchovy paste, lemon juice, mayo, and Parmesan until smooth.",
            "Toss lettuce in dressing until every leaf is well coated.",
            "Add croutons and toss lightly.",
            "Top with extra Parmesan shavings and a crack of black pepper.",
            "Serve immediately for maximum crunch."
        ]
    },
    {
        id: 8,
        name: "Butter Chicken",
        category: "Indian",
        time: "50 mins",
        difficulty: "Medium",
        image: "./Images/recipes/8.jpg",
        description: "Melt-in-your-mouth chicken in a silky, mildly-spiced tomato and butter gravy. Murgh Makhani — the world's most beloved Indian curry.",
        ingredients: ["500g Chicken (cubed)", "3 Tomatoes", "2 tbsp Butter", "1/2 cup Fresh Cream", "1 tsp Kashmiri Chili Powder", "1 tsp Kasuri Methi", "Garlic", "Ginger", "Salt & Sugar to taste"],
        steps: [
            "Marinate chicken with yogurt, ginger-garlic paste, and spices. Grill until cooked.",
            "Roast tomatoes, then blend with cashews into a smooth puree.",
            "Heat butter, sauté garlic, then add tomato puree. Cook 10 minutes.",
            "Add Kashmiri chili powder, coriander powder, and salt.",
            "Pour in cream and add Kasuri methi. Stir and simmer 5 minutes.",
            "Add grilled chicken. Simmer for 10 minutes. Adjust seasoning.",
            "Serve with butter naan or steamed basmati rice."
        ]
    },
    {
        id: 9,
        name: "Tacos al Pastor",
        category: "Mexican",
        time: "35 mins",
        difficulty: "Medium",
        image: "./Images/recipes/9.jpg",
        description: "Mexico City's iconic street taco — pork marinated in smoky achiote and chili paste, grilled with pineapple, then served on warm tortillas with fresh toppings.",
        ingredients: ["500g Pork Shoulder (thinly sliced)", "Corn Tortillas", "1/4 Pineapple (in chunks)", "Fresh Cilantro", "White Onion (diced)", "Achiote Paste", "Dried Guajillo Chilis", "Lime", "Salt"],
        steps: [
            "Blend achiote, guajillo chilies, garlic, cumin, and vinegar into a paste.",
            "Marinate pork slices in the paste for 2+ hours (overnight is best).",
            "Cook pork on a very hot grill or skillet in batches until caramelized.",
            "Grill pineapple chunks until golden and slightly charred.",
            "Warm corn tortillas on a dry griddle for 30 seconds per side.",
            "Load tortillas with pork, grilled pineapple, diced onion, and cilantro.",
            "Squeeze fresh lime juice generously over tacos and serve immediately."
        ]
    },
    {
        id: 10,
        name: "Greek Moussaka",
        category: "Greek",
        time: "90 mins",
        difficulty: "Hard",
        image: "./Images/recipes/10.jpg",
        description: "Greece's greatest comfort food — layers of tender fried eggplant, richly spiced lamb mince in tomato sauce, crowned with a thick, creamy béchamel topping.",
        ingredients: ["2 large Eggplants", "500g Minced Lamb", "1 Onion", "2 Tomatoes (pureed)", "Cinnamon", "Allspice", "500ml Milk", "50g Butter", "50g Flour", "2 Eggs", "Nutmeg", "Parmesan"],
        steps: [
            "Slice eggplant, salt generously, and let rest 30 minutes. Rinse and pat dry.",
            "Fry eggplant slices in olive oil until golden. Set aside on paper towel.",
            "Sauté onion, add lamb mince. Brown well, drain excess fat.",
            "Add tomato puree, cinnamon, allspice, and salt. Simmer 20 minutes.",
            "Make béchamel: melt butter, whisk in flour, slowly add heated milk. Stir until thick. Add nutmeg and beaten eggs.",
            "In a baking dish: layer eggplant → meat sauce → remaining eggplant → béchamel.",
            "Top with Parmesan. Bake at 180°C for 45 minutes until golden.",
            "Let rest 20 minutes before cutting to serve."
        ]
    },
    {
        id: 11,
        name: "Pad Thai",
        category: "Thai",
        time: "25 mins",
        difficulty: "Easy",
        image: "./Images/recipes/11.jpg",
        description: "Thailand's national dish — stir-fried rice noodles with shrimp, silky tofu, eggs, and a perfectly balanced tangy-sweet tamarind sauce, topped with crunchy peanuts.",
        ingredients: ["200g Rice Noodles", "150g Shrimp (peeled)", "100g Firm Tofu (cubed)", "2 Eggs", "3 tbsp Tamarind Paste", "2 tbsp Fish Sauce", "1 tbsp Palm Sugar", "Bean Sprouts", "Spring Onions", "Crushed Peanuts", "Lime"],
        steps: [
            "Soak rice noodles in warm water for 20 minutes until softened. Drain.",
            "Mix tamarind paste, fish sauce, and palm sugar into a sauce. Set aside.",
            "Heat wok to high. Stir-fry shrimp and tofu separately. Set aside.",
            "Add a splash of oil, scramble eggs in the wok until just set.",
            "Add noodles and sauce, toss everything together over high heat.",
            "Return shrimp, tofu, bean sprouts, and green onions to wok. Toss.",
            "Serve topped with crushed peanuts, extra lime, and chili flakes."
        ]
    },
    {
        id: 12,
        name: "French Croissant",
        category: "French",
        time: "180 mins",
        difficulty: "Hard",
        image: "./Images/recipes/12.jpg",
        description: "The iconic French viennoiserie — impossibly flaky, buttery laminated pastry with a shattering crust and soft, honeycomb interior. Worth every minute of effort!",
        ingredients: ["500g Strong Bread Flour", "300g Cold Unsalted Butter (for lamination)", "250ml Cold Whole Milk", "7g Instant Dry Yeast", "10g Salt", "60g Caster Sugar", "Egg Wash (1 egg + splash of milk)"],
        steps: [
            "Combine flour, yeast, sugar, salt, and milk. Mix into a dough — do not over-knead. Refrigerate 1 hour.",
            "Beat cold butter into a flat 20x20cm sheet between plastic wrap. Refrigerate.",
            "Roll dough into a rectangle. Place butter sheet in center, fold dough over it like an envelope.",
            "Roll out and fold into thirds (letter fold) — this is one turn. Refrigerate 30 mins.",
            "Repeat rolling and folding for 5 more turns total, chilling between each.",
            "Roll dough 3-4mm thick. Cut into long triangles. Roll each triangle into a croissant.",
            "Place on baking tray and proof at room temperature 2 hours until doubled and jiggly.",
            "Brush gently with egg wash. Bake at 200°C for 18-20 minutes until deep golden."
        ]
    }
    ,{
        id: 13,
        name: "Beef Lasagna",
        category: "Italian",
        time: "75 mins",
        difficulty: "Medium",
        image: "./Images/recipes/13.jpg",
        description: "Classic layered Italian comfort food — sheets of pasta alternating with rich bolognese meat sauce, creamy béchamel, and melted mozzarella, baked to golden perfection.",
        ingredients: ["500g Ground Beef", "Lasagna Sheets", "400g Tomato Passata", "1 Onion", "3 Garlic Cloves", "500ml Béchamel Sauce", "200g Mozzarella", "50g Parmesan", "Olive Oil", "Salt & Pepper", "Fresh Basil"],
        steps: [
            "Brown ground beef with onion and garlic in olive oil. Season well.",
            "Add tomato passata and simmer for 20 minutes until thick.",
            "Prepare béchamel: melt butter, add flour, pour in milk gradually, stir until smooth.",
            "Layer lasagna sheets, meat sauce, and béchamel in a baking dish. Repeat.",
            "Top with mozzarella and Parmesan. Cover with foil.",
            "Bake at 180°C for 35 minutes, remove foil and bake 10 more minutes until golden.",
            "Rest 10 minutes before slicing. Garnish with fresh basil."
        ]
    },{
        id: 14,
        name: "Shakshuka",
        category: "Middle Eastern",
        time: "30 mins",
        difficulty: "Easy",
        image: "./Images/recipes/14.jpg",
        description: "A bold, smoky North African dish of eggs poached in a spiced tomato and pepper sauce. One pan, minimal effort, maximum flavour — perfect for breakfast or dinner.",
        ingredients: ["6 Eggs", "2 Cans Crushed Tomatoes", "2 Red Bell Peppers", "1 Onion", "4 Garlic Cloves", "1 tsp Cumin", "1 tsp Paprika", "½ tsp Cayenne", "Fresh Parsley", "Feta Cheese", "Olive Oil"],
        steps: [
            "Sauté diced onion and peppers in olive oil until softened, about 7 minutes.",
            "Add garlic, cumin, paprika, and cayenne. Stir 1 minute.",
            "Pour in crushed tomatoes. Season and simmer 15 minutes until sauce thickens.",
            "Make 6 wells in the sauce. Crack an egg into each well.",
            "Cover and cook on low heat 7–10 minutes until whites are set, yolks still runny.",
            "Crumble feta on top and scatter fresh parsley.",
            "Serve straight from the pan with crusty bread."
        ]
    },{
        id: 15,
        name: "Beef Rendang",
        category: "Malaysian",
        time: "120 mins",
        difficulty: "Hard",
        image: "./Images/recipes/15.jpg",
        description: "Indonesia and Malaysia's most celebrated dry curry — beef slow-cooked in coconut milk and an aromatic paste of lemongrass, galangal, and chilies until deeply caramelised.",
        ingredients: ["1kg Beef Chuck (cubed)", "400ml Coconut Milk", "4 Stalks Lemongrass", "6 Dried Chilies", "1 inch Galangal", "4 Shallots", "4 Garlic Cloves", "1 tsp Turmeric", "Kerisik (toasted coconut)", "Kaffir Lime Leaves", "Salt"],
        steps: [
            "Blend chilies, shallots, garlic, lemongrass, and galangal into a smooth paste.",
            "Fry paste in oil until fragrant and oil separates, about 10 minutes.",
            "Add beef and coat well in the paste. Cook 5 minutes.",
            "Pour in coconut milk and add kaffir lime leaves. Bring to a boil.",
            "Reduce to a very low simmer. Cook uncovered 90 minutes, stirring occasionally.",
            "Add kerisik when sauce is nearly dry. Stir well until beef is dark and coated.",
            "Season and serve with steamed rice."
        ]
    },{
        id: 16,
        name: "Chicken Shawarma",
        category: "Middle Eastern",
        time: "40 mins",
        difficulty: "Easy",
        image: "./Images/recipes/16.jpg",
        description: "Street-food perfection — chicken thighs marinated in warm Middle Eastern spices, grilled until charred, then wrapped in flatbread with garlic sauce and pickled vegetables.",
        ingredients: ["700g Chicken Thighs", "1 tsp Cumin", "1 tsp Coriander", "1 tsp Paprika", "½ tsp Turmeric", "½ tsp Cinnamon", "4 Garlic Cloves", "Juice of 1 Lemon", "3 tbsp Olive Oil", "Flatbreads", "Garlic Sauce", "Pickled Turnips"],
        steps: [
            "Combine all spices, garlic, lemon juice, and olive oil. Coat chicken thighs thoroughly.",
            "Marinate for at least 2 hours (overnight is best).",
            "Grill or pan-fry chicken thighs on high heat 5–6 minutes per side.",
            "Rest 5 minutes then slice thinly against the grain.",
            "Warm flatbreads on a dry skillet.",
            "Spread garlic sauce on bread, add sliced chicken, pickled turnips, and tomatoes.",
            "Wrap tightly and serve immediately."
        ]
    },{
        id: 17,
        name: "Beef Stroganoff",
        category: "Russian",
        time: "35 mins",
        difficulty: "Medium",
        image: "./Images/recipes/17.jpg",
        description: "A Russian classic loved worldwide — tender strips of beef and earthy mushrooms bathed in a silky, tangy sour cream sauce. Rich, warming, and perfect over egg noodles.",
        ingredients: ["500g Beef Sirloin (strips)", "250g Button Mushrooms", "1 Onion", "2 Garlic Cloves", "1 cup Sour Cream", "1 cup Beef Stock", "1 tbsp Dijon Mustard", "2 tbsp Butter", "Flour", "Fresh Parsley", "Egg Noodles"],
        steps: [
            "Season beef strips with salt and pepper. Dust lightly with flour.",
            "Sear beef in hot butter in batches until browned. Remove and set aside.",
            "In the same pan, sauté onion until soft. Add mushrooms and cook until golden.",
            "Add garlic and mustard. Stir 1 minute.",
            "Pour in beef stock and scrape up browned bits. Simmer 5 minutes.",
            "Reduce heat. Stir in sour cream. Return beef to pan. Simmer gently 5 minutes.",
            "Serve over egg noodles, garnished with fresh parsley."
        ]
    },{
        id: 18,
        name: "Tiramisu",
        category: "Dessert",
        time: "30 mins",
        difficulty: "Easy",
        image: "./Images/recipes/18.jpg",
        description: "Italy's beloved no-bake dessert — delicate ladyfinger biscuits soaked in espresso, layered with a luscious mascarpone cream, and dusted with rich dark cocoa powder.",
        ingredients: ["300g Mascarpone", "4 Eggs (separated)", "100g Caster Sugar", "200g Ladyfinger Biscuits", "250ml Strong Espresso (cooled)", "3 tbsp Coffee Liqueur", "Cocoa Powder to dust", "Dark Chocolate (grated)"],
        steps: [
            "Whisk egg yolks and sugar until pale and creamy, about 5 minutes.",
            "Fold mascarpone into egg yolk mixture until smooth.",
            "Whisk egg whites to stiff peaks. Gently fold into mascarpone cream in two batches.",
            "Mix espresso and coffee liqueur in a shallow bowl.",
            "Quickly dip each ladyfinger (1 second per side) and layer in a dish.",
            "Spread half the mascarpone cream over the biscuits. Repeat layers.",
            "Cover and refrigerate at least 6 hours. Dust generously with cocoa before serving."
        ]
    },{
        id: 19,
        name: "Fluffy American Pancakes",
        category: "American",
        time: "20 mins",
        difficulty: "Easy",
        image: "./Images/recipes/19.jpg",
        description: "Thick, cloud-like pancakes with a golden crust and pillowy soft interior. The secret is the rested batter. Stack them high and drown in maple syrup and fresh berries.",
        ingredients: ["200g Plain Flour", "2 tsp Baking Powder", "½ tsp Baking Soda", "2 tbsp Sugar", "Pinch of Salt", "250ml Buttermilk", "1 Egg", "2 tbsp Melted Butter", "1 tsp Vanilla Extract", "Maple Syrup", "Mixed Berries"],
        steps: [
            "Whisk flour, baking powder, baking soda, sugar, and salt in a bowl.",
            "In another bowl, mix buttermilk, egg, melted butter, and vanilla.",
            "Pour wet ingredients into dry and stir until just combined — lumps are fine. Rest 5 minutes.",
            "Heat a non-stick pan over medium-low heat. Lightly grease.",
            "Pour ¼ cup batter per pancake. Cook until bubbles appear and edges look set, about 2 minutes.",
            "Flip and cook 1 more minute until golden. Do not press down.",
            "Stack and serve immediately with maple syrup and fresh berries."
        ]
    },{
        id: 20,
        name: "Pho Bo",
        category: "Vietnamese",
        time: "180 mins",
        difficulty: "Hard",
        image: "./Images/recipes/20.jpg",
        description: "Vietnam's soul-warming national dish — a crystal-clear, star anise-scented beef broth poured over silky rice noodles and tender beef slices, finished with a mountain of fresh herbs.",
        ingredients: ["1kg Beef Bones", "300g Beef Brisket", "200g Rice Noodles", "2 Star Anise", "1 Cinnamon Stick", "4 Cloves", "1 inch Ginger (charred)", "1 Onion (charred)", "Fish Sauce", "Bean Sprouts", "Fresh Basil", "Lime", "Chili"],
        steps: [
            "Char ginger and onion directly over flame or under broiler until blackened.",
            "Blanch beef bones in boiling water 5 minutes. Discard water, rinse bones.",
            "Simmer bones with 3L fresh water, charred aromatics, and whole spices for 3 hours.",
            "Add brisket in the last 45 minutes. Remove when tender, slice thinly.",
            "Strain broth, season generously with fish sauce and salt.",
            "Soak then cook rice noodles per packet instructions.",
            "Assemble: noodles in bowl, lay brisket slices on top, ladle boiling broth over. Serve with fresh herbs, sprouts, lime, and chili on the side."
        ]
    },{
        id: 21,
        name: "Tom Yum Goong",
        category: "Thai",
        time: "25 mins",
        difficulty: "Easy",
        image: "./Images/recipes/21.jpg",
        description: "Thailand's iconic hot and sour prawn soup — a fiery, fragrant broth of lemongrass, galangal, kaffir lime, and chilies packed with juicy prawns and mushrooms.",
        ingredients: ["300g Tiger Prawns (peeled)", "200g Mushrooms", "2 Stalks Lemongrass", "4 Kaffir Lime Leaves", "3 Slices Galangal", "3 Thai Chilies", "2 tbsp Fish Sauce", "2 tbsp Lime Juice", "1 tbsp Nam Prik Pao (roasted chili paste)", "Fresh Coriander", "1L Chicken Stock"],
        steps: [
            "Bruise lemongrass and slice galangal. Add to stock and bring to boil.",
            "Add kaffir lime leaves and chilies. Simmer 5 minutes to infuse.",
            "Stir in nam prik pao paste.",
            "Add mushrooms and cook 3 minutes.",
            "Add prawns and cook just until pink, about 2 minutes.",
            "Season with fish sauce and lime juice. Taste and adjust — should be hot, sour, and salty.",
            "Ladle into bowls and top generously with fresh coriander."
        ]
    },{
        id: 22,
        name: "Crispy Falafel",
        category: "Middle Eastern",
        time: "45 mins",
        difficulty: "Medium",
        image: "./Images/recipes/22.jpg",
        description: "Golden, herb-packed chickpea fritters with a shatteringly crisp exterior and fluffy interior. Served in warm pita with tahini, pickles, and fresh salad — a street food icon.",
        ingredients: ["400g Dried Chickpeas (soaked overnight)", "1 Onion", "4 Garlic Cloves", "Large bunch Fresh Parsley", "Large bunch Fresh Coriander", "1 tsp Cumin", "1 tsp Coriander Powder", "½ tsp Cayenne", "1 tsp Baking Powder", "Salt", "Oil for frying", "Pita Bread", "Tahini Sauce"],
        steps: [
            "Drain soaked chickpeas (do NOT use canned — they will fall apart).",
            "Blend chickpeas, onion, garlic, herbs, and spices until coarse — not smooth.",
            "Add baking powder and salt. Mix well. Refrigerate 30 minutes.",
            "Shape into small balls or patties using wet hands.",
            "Heat oil to 175°C. Fry falafel in batches 3–4 minutes until deep golden brown.",
            "Drain on paper towels. Do not crowd the pan.",
            "Stuff into warm pita with tahini, tomato, cucumber, and pickles."
        ]
    },{
        id: 23,
        name: "Dal Tadka",
        category: "Indian",
        time: "40 mins",
        difficulty: "Easy",
        image: "./Images/recipes/23.jpg",
        description: "The heartbeat of Indian home cooking — yellow lentils simmered until velvety, then finished with a sizzling tarka of cumin, garlic, dried chilies, and ghee. Comfort in a bowl.",
        ingredients: ["250g Yellow Lentils (toor dal)", "1 Tomato", "1 Onion", "4 Garlic Cloves", "1 inch Ginger", "1 tsp Turmeric", "1 tsp Cumin Seeds", "2 Dried Red Chilies", "1 tsp Garam Masala", "2 tbsp Ghee", "Fresh Coriander", "Salt"],
        steps: [
            "Rinse lentils and cook with 3 cups water, turmeric, and salt until very soft, about 25 minutes.",
            "Mash lightly with the back of a spoon.",
            "In a separate pan, heat ghee until shimmering.",
            "Add cumin seeds and dried chilies. Sizzle 30 seconds.",
            "Add onion and fry until golden brown, about 8 minutes.",
            "Add garlic and ginger. Fry 2 minutes. Add tomato and cook until pulpy.",
            "Pour tarka over the dal. Stir in garam masala. Garnish with coriander and serve with rice or roti."
        ]
    },{
        id: 24,
        name: "Tonkotsu Ramen",
        category: "Japanese",
        time: "60 mins",
        difficulty: "Hard",
        image: "./Images/recipes/24.jpg",
        description: "Japan's richest, most indulgent noodle soup — a milky, pork bone broth simmered for hours, topped with chashu pork, a jammy soft-boiled egg, nori, and spring onions.",
        ingredients: ["1kg Pork Neck Bones", "200g Ramen Noodles", "300g Pork Belly", "4 Eggs", "4 tbsp Soy Sauce", "2 tbsp Mirin", "1 tbsp Sake", "4 Garlic Cloves", "1 inch Ginger", "4 Spring Onions", "Nori Sheets", "Bamboo Shoots", "Sesame Oil"],
        steps: [
            "Blanch pork bones 10 minutes, rinse thoroughly.",
            "Simmer bones in 3L fresh water at a rolling boil for 4 hours until broth is milky white.",
            "Roll pork belly tightly, tie with string. Braise in soy sauce, mirin, sake, garlic for 2 hours.",
            "Soft-boil eggs 6.5 minutes, peel, marinate in soy sauce mixture overnight.",
            "Season broth with salt, garlic, and a splash of soy sauce.",
            "Cook ramen noodles per packet. Slice chashu pork.",
            "Assemble: noodles in bowl, ladle hot broth, arrange chashu, halved egg, nori, spring onions, bamboo shoots. Drizzle sesame oil."
        ]
    },{
        id: 25,
        name: "Lamb Rogan Josh",
        category: "Indian",
        time: "70 mins",
        difficulty: "Medium",
        image: "./Images/recipes/25.jpg",
        description: "Kashmir's crown jewel — tender lamb pieces slow-cooked in a vivid crimson sauce of Kashmiri chilies, yogurt, and whole spices. Deeply aromatic and intensely satisfying.",
        ingredients: ["700g Lamb Shoulder (bone-in)", "1 cup Plain Yogurt", "2 Onions", "4 Kashmiri Red Chilies", "1 tsp Fennel Powder", "1 tsp Ginger Powder", "4 Cardamom Pods", "2 Bay Leaves", "1 Cinnamon Stick", "Mustard Oil", "Salt"],
        steps: [
            "Fry whole spices in mustard oil until aromatic.",
            "Add sliced onions and fry until deep golden brown.",
            "Add lamb pieces and sear on all sides until browned.",
            "Whisk yogurt with Kashmiri chili powder. Pour over lamb on low heat, stirring constantly.",
            "Add fennel, ginger powder, and salt. Stir well.",
            "Add a cup of water, cover and simmer 45–50 minutes until lamb is tender.",
            "Uncover and reduce sauce until it coats the lamb. Serve with steamed rice."
        ]
    },{
        id: 26,
        name: "Churros with Chocolate Sauce",
        category: "Spanish",
        time: "30 mins",
        difficulty: "Medium",
        image: "./Images/recipes/26.jpg",
        description: "Spain's beloved fried dough pastry — crisp on the outside, doughy within, rolled in cinnamon sugar and served with a thick, bittersweet dark chocolate dipping sauce.",
        ingredients: ["250ml Water", "150g Plain Flour", "Pinch of Salt", "1 tsp Baking Powder", "Oil for frying", "50g Caster Sugar", "1 tsp Ground Cinnamon", "200g Dark Chocolate", "200ml Double Cream"],
        steps: [
            "Bring water to a boil with salt. Remove from heat, add flour and baking powder all at once.",
            "Beat vigorously until dough is smooth and comes away from sides.",
            "Fill a piping bag with a large star nozzle. Heat oil to 180°C.",
            "Pipe 12cm lengths directly into the hot oil, cutting with scissors.",
            "Fry in batches 2–3 minutes until golden and crisp.",
            "Mix sugar and cinnamon. Roll hot churros immediately in cinnamon sugar.",
            "Heat cream, pour over chopped chocolate, stir until smooth. Serve alongside."
        ]
    },{
        id: 27,
        name: "Honey Garlic Salmon",
        category: "American",
        time: "20 mins",
        difficulty: "Easy",
        image: "./Images/recipes/27.jpg",
        description: "Pan-seared salmon fillets glazed in a sticky honey garlic sauce — golden, caramelised, and ready in under 20 minutes. Elegant enough for guests, easy enough for weeknights.",
        ingredients: ["4 Salmon Fillets", "4 Garlic Cloves (minced)", "3 tbsp Honey", "2 tbsp Soy Sauce", "1 tbsp Lemon Juice", "1 tbsp Olive Oil", "Salt & Pepper", "Fresh Parsley", "Lemon Wedges"],
        steps: [
            "Pat salmon dry and season with salt and pepper.",
            "Mix honey, soy sauce, garlic, and lemon juice in a bowl.",
            "Heat olive oil in a pan over high heat until smoking.",
            "Place salmon skin-side up. Sear 3 minutes without moving.",
            "Flip and pour honey garlic sauce over the fish.",
            "Cook 2 more minutes, basting constantly until sauce is thick and caramelised.",
            "Garnish with parsley and serve with lemon wedges."
        ]
    },{
        id: 28,
        name: "Chicken Parmigiana",
        category: "Italian",
        time: "45 mins",
        difficulty: "Medium",
        image: "./Images/recipes/28.jpg",
        description: "Italy meets America in this iconic dish — crispy breaded chicken breast smothered in rich tomato sauce and blanketed under bubbling melted mozzarella. Pure comfort food.",
        ingredients: ["4 Chicken Breasts", "2 Eggs", "100g Breadcrumbs", "50g Parmesan (grated)", "400g Tomato Passata", "200g Mozzarella", "2 Garlic Cloves", "1 tsp Oregano", "Olive Oil", "Fresh Basil", "Salt & Pepper"],
        steps: [
            "Butterfly chicken breasts and pound to even thickness.",
            "Dip in beaten egg, then coat in breadcrumbs mixed with Parmesan. Press firmly.",
            "Fry in olive oil 3 minutes per side until golden and cooked through.",
            "Make sauce: fry garlic in oil, add passata, oregano, salt. Simmer 10 minutes.",
            "Place fried chicken in a baking dish. Spoon sauce generously over each piece.",
            "Top with mozzarella slices. Grill/broil 5 minutes until bubbly and golden.",
            "Scatter fresh basil and serve with spaghetti or crusty bread."
        ]
    },{
        id: 29,
        name: "Chana Masala",
        category: "Indian",
        time: "45 mins",
        difficulty: "Easy",
        image: "./Images/recipes/29.jpg",
        description: "A vibrant, tangy North Indian chickpea curry — loaded with protein and spice. This beloved street food dish is hearty, vegan-friendly, and outrageously delicious.",
        ingredients: ["2 Cans Chickpeas", "2 Tomatoes", "1 Onion", "4 Garlic Cloves", "1 inch Ginger", "1 tsp Cumin Seeds", "1 tsp Coriander Powder", "1 tsp Chana Masala Powder", "½ tsp Turmeric", "1 tsp Amchur (dry mango powder)", "Oil", "Fresh Coriander"],
        steps: [
            "Fry cumin seeds in oil until they splutter.",
            "Add onion and fry until golden. Add garlic and ginger paste, cook 2 minutes.",
            "Add blended tomatoes. Cook until oil separates, about 8 minutes.",
            "Add coriander, turmeric, and chana masala powder. Stir well.",
            "Add drained chickpeas and ½ cup water. Mash a few chickpeas to thicken.",
            "Simmer 20 minutes. Add amchur powder and salt.",
            "Garnish with fresh coriander. Serve with bhatura, puri, or rice."
        ]
    },{
        id: 30,
        name: "Mango Sticky Rice",
        category: "Dessert",
        time: "40 mins",
        difficulty: "Easy",
        image: "./Images/recipes/30.jpg",
        description: "Thailand's most iconic dessert — glutinous rice cooked in rich coconut milk and served alongside perfectly ripe sweet mango. Simple, tropical, and absolutely divine.",
        ingredients: ["300g Glutinous Rice", "400ml Coconut Milk", "80g Palm Sugar", "½ tsp Salt", "2 Ripe Mangoes", "1 tsp Cornstarch", "Toasted Sesame Seeds"],
        steps: [
            "Soak glutinous rice in water for 4 hours. Drain.",
            "Steam rice in a steamer basket lined with cloth for 20–25 minutes until translucent.",
            "Heat ¾ of coconut milk with sugar and ¼ tsp salt until sugar dissolves. Do not boil.",
            "Pour warm coconut milk over cooked rice. Stir gently and cover 20 minutes to absorb.",
            "Make topping: heat remaining coconut milk with cornstarch and salt until slightly thickened.",
            "Peel and slice mangoes beside rice on a plate.",
            "Drizzle coconut topping over rice and sprinkle toasted sesame seeds."
        ]
    },{
        id: 31,
        name: "Chicken Quesadilla",
        category: "Mexican",
        time: "25 mins",
        difficulty: "Easy",
        image: "./Images/recipes/31.jpg",
        description: "Golden, crispy flour tortillas packed with seasoned shredded chicken, melted cheese, and roasted peppers. Quick, satisfying, and perfect with fresh guacamole and sour cream.",
        ingredients: ["4 Large Flour Tortillas", "350g Chicken Breast", "1 Red Bell Pepper", "1 Green Bell Pepper", "1 Onion", "200g Cheddar & Mozzarella Mix", "1 tsp Cumin", "1 tsp Smoked Paprika", "Olive Oil", "Guacamole", "Sour Cream", "Fresh Salsa"],
        steps: [
            "Season chicken with cumin, paprika, salt, and pepper.",
            "Grill or pan-fry chicken until cooked through. Rest and shred.",
            "Sauté sliced peppers and onion until caramelised. Set aside.",
            "Place tortilla in a dry pan over medium heat. Sprinkle cheese on half.",
            "Add chicken and peppers on top of the cheese.",
            "Fold tortilla over. Cook 2 minutes per side until golden and crispy.",
            "Slice into wedges and serve immediately with guacamole, sour cream, and salsa."
        ]
    },{
        id: 32,
        name: "BBQ Pulled Pork",
        category: "American",
        time: "240 mins",
        difficulty: "Hard",
        image: "./Images/recipes/32.jpg",
        description: "Low and slow is the motto — pork shoulder rubbed with smoky spices and oven-cooked for hours until fall-apart tender, then pulled and tossed in tangy BBQ sauce.",
        ingredients: ["1.5kg Pork Shoulder", "2 tbsp Brown Sugar", "1 tbsp Smoked Paprika", "1 tsp Garlic Powder", "1 tsp Onion Powder", "1 tsp Cumin", "½ tsp Cayenne", "Salt & Pepper", "250ml BBQ Sauce", "Brioche Buns", "Coleslaw"],
        steps: [
            "Mix sugar, paprika, garlic powder, onion powder, cumin, cayenne, salt, and pepper.",
            "Rub spice mix all over pork shoulder. Wrap in cling film and refrigerate overnight.",
            "Preheat oven to 150°C. Place pork in a deep roasting tin with ½ cup water. Cover tightly with foil.",
            "Roast for 3.5–4 hours until meat reaches 90°C and pulls apart easily.",
            "Discard excess fat from juices. Use two forks to shred all the pork.",
            "Toss shredded pork with BBQ sauce and some of the roasting juices.",
            "Pile high on toasted brioche buns with creamy coleslaw."
        ]
    }
];
