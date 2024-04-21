import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

// Define the diseases array
const diseases = [
    { 
        name: "Acne and Rosacea", 
        description: "Acne and Rosacea are common skin conditions that affect the face. Acne is characterized by pimples, blackheads, and whiteheads, while Rosacea causes redness and visible blood vessels on the face. Acne is often caused by hormonal changes, bacteria, and excess oil production, while Rosacea's exact cause is unknown. Both conditions can be managed with proper skincare and medication.",
        risk: "low",
        source: "Hormonal changes, bacteria, excess oil production"
    },
    { 
        name: "Actinic Keratosis", 
        description: "Actinic Keratosis, also known as solar keratosis, is a precancerous skin condition caused by long-term sun exposure. It usually appears as rough, scaly patches on the skin, commonly on areas exposed to the sun, such as the face, ears, hands, and arms. Actinic Keratosis can progress to squamous cell carcinoma if left untreated, so it's essential to monitor and treat affected areas.",
        risk: "medium",
        source: "Long-term sun exposure"
    },
    { 
        name: "Basal Cell Carcinoma and other Malignant Lesions", 
        description: "Basal Cell Carcinoma (BCC) is the most common type of skin cancer. It usually appears as a shiny or pearly bump on the skin, often on areas exposed to the sun. BCC rarely spreads to other parts of the body but can cause disfigurement if left untreated. Other malignant lesions include squamous cell carcinoma and melanoma, which are less common but more aggressive forms of skin cancer.",
        risk: "high",
        source: "Sun exposure, genetic predisposition"
    },
    { 
        name: "Atopic Dermatitis", 
        description: "Atopic Dermatitis, also known as eczema, is a chronic inflammatory skin condition that causes dry, itchy, and red skin. It often appears in patches on the face, hands, feet, and other parts of the body. Atopic Dermatitis can be triggered by various factors, including genetics, allergens, stress, and environmental factors. Treatment usually involves moisturizing the skin, avoiding triggers, and using topical medications.",
        risk: "medium",
        source: "Genetics, allergens, stress, environmental factors"
    },
    { 
        name: "Bullous Disease", 
        description: "Bullous Disease refers to a group of skin disorders characterized by the formation of fluid-filled blisters (bullae) on the skin. There are various types of bullous diseases, including pemphigus, pemphigoid, and epidermolysis bullosa. These conditions can be caused by autoimmune reactions, genetic mutations, or other factors. Treatment depends on the underlying cause and may include topical or systemic medications.",
        risk: "medium",
        source: "Autoimmune reactions, genetic mutations"
    },
    { 
        name: "Cellulitis", 
        description: "Cellulitis is a bacterial skin infection that affects the deeper layers of the skin and underlying tissues. It usually occurs as a result of a break in the skin, such as a cut, scrape, or insect bite, allowing bacteria to enter and cause infection. Cellulitis typically presents as red, swollen, and painful areas on the skin, often accompanied by fever and chills. Treatment involves antibiotics and proper wound care.",
        risk: "high",
        source: "Bacteria entering through breaks in the skin"
    },
    { 
        name: "Impetigo and other Bacterial Infections", 
        description: "Impetigo is a contagious bacterial skin infection commonly caused by Staphylococcus aureus or Streptococcus pyogenes bacteria. It usually affects children and infants and presents as red sores or blisters on the face, hands, and diaper area. Other bacterial skin infections include folliculitis, furuncles, and carbuncles, which can occur anywhere on the body. Treatment involves antibiotics and proper hygiene practices.",
        risk: "medium",
        source: "Contagious bacteria such as Staphylococcus aureus or Streptococcus pyogenes"
    },
    { 
        name: "Exanthems and Drug Eruptions", 
        description: "Exanthems, also known as rashes, are widespread skin eruptions that result from various causes, including infections, allergies, medications, and systemic diseases. Drug eruptions, specifically, are adverse reactions to medications that can manifest as rashes, hives, blisters, or other skin changes. Treatment depends on the underlying cause and may include discontinuation of the offending drug, supportive care, and topical or systemic medications.",
        risk: "medium",
        source: "Infections, allergies, medications, systemic diseases"
    },
    { 
        name: "Hair Loss", 
        description: "Hair Loss, or alopecia, refers to the partial or complete absence of hair from areas of the body where it normally grows. There are various types of hair loss, including androgenetic alopecia (male and female pattern baldness), alopecia areata (autoimmune-related hair loss), and telogen effluvium (temporary hair shedding). Treatment options depend on the underlying cause and may include medications, topical treatments, or hair transplantation.",
        risk: "low",
        source: "Varies depending on the type of hair loss"
    },
    { 
        name: "Herpes HPV and other STDs", 
        description: "Herpes, Human Papillomavirus (HPV), and other Sexually Transmitted Diseases (STDs) are infections that can affect the skin and mucous membranes of the genital area and other parts of the body. Herpes is caused by the herpes simplex virus and presents as painful blisters or sores on the genitals or mouth. HPV can cause genital warts and is associated with various cancers, including cervical cancer. Other STDs, such as syphilis, gonorrhea, and chlamydia, can cause skin lesions, rashes, or ulcers. Treatment depends on the specific infection and may include antiviral medications, antibiotics, or other treatments.",
        risk: "high",
        source: "Sexual contact, close skin-to-skin contact"
    },
    { 
        name: "Light Diseases and Disorders of Pigmentation", 
        description: "Light Diseases and Disorders of Pigmentation refer to skin conditions characterized by changes in skin color or pigmentation. These include conditions such as vitiligo (loss of skin color), hyperpigmentation (excess skin pigmentation), and hypopigmentation (reduced skin pigmentation). These conditions can be caused by various factors, including genetics, sun exposure, hormonal changes, and underlying medical conditions. Treatment options depend on the specific condition and may include medications, phototherapy, or cosmetic procedures.",
        risk: "medium",
        source: "Genetics, sun exposure, hormonal changes, underlying medical conditions"
    },
    { 
        name: "Lupus and other Connective Tissue diseases", 
        description: "Lupus and other Connective Tissue Diseases are autoimmune disorders that affect the skin and other organs of the body. Lupus, specifically systemic lupus erythematosus (SLE), can cause a wide range of skin manifestations, including rashes, lesions, and photosensitivity. Other connective tissue diseases, such as scleroderma, dermatomyositis, and mixed connective tissue disease, can also affect the skin and cause various symptoms. Treatment involves medications to suppress the immune system and manage symptoms.",
        risk: "high",
        source: "Autoimmune reactions"
    },
    { 
        name: "Melanoma Skin Cancer", 
        description: "Melanoma is a type of skin cancer that develops from melanocytes, the cells that produce pigment in the skin. It is the most dangerous form of skin cancer and can spread to other parts of the body if not detected and treated early. Melanoma often appears as a new mole or a change in an existing mole, with irregular borders, uneven color, and asymmetrical shape. Risk factors for melanoma include sun exposure, family history, and genetic factors. Treatment options include surgery, chemotherapy, radiation therapy, immunotherapy, and targeted therapy.",
        risk: "high",
        source: "Sun exposure, genetic factors"
    },
    { 
        name: "Nevi and Moles", 
        description: "Nevi, also known as moles, are common benign growths on the skin that develop from melanocytes. Moles can vary in size, color, and shape, and most are harmless. However, some moles may develop into melanoma or other skin cancers, so it's essential to monitor them for changes. Risk factors for developing atypical moles or melanoma include sun exposure, family history, and genetic factors. Treatment may involve monitoring, removal, or biopsy of suspicious moles.",
        risk: "medium",
        source: "Genetic factors, sun exposure"
    },
    { 
        name: "Nail Fungus and other Nail Disease", 
        description: "Nail Fungus, also known as onychomycosis, is a fungal infection of the nails that causes thickening, discoloration, and crumbling of the nails. It is commonly caused by dermatophyte fungi and can affect the fingernails or toenails. Other nail diseases include nail psoriasis, nail trauma, and bacterial infections, which can cause similar symptoms. Treatment options for nail fungus include oral or topical antifungal medications, laser therapy, or surgical removal of the affected nails.",
        risk: "medium",
        source: "Fungal pathogens"
    },
    { 
        name: "Normal Skin", 
        description: "Normal Skin refers to healthy skin that is free from disease or abnormalities. Normal skin has a balanced moisture content, even tone, and smooth texture. It is not excessively dry, oily, or sensitive and is less prone to irritation, inflammation, or infection. Maintaining normal skin health involves proper skincare, including cleansing, moisturizing, sun protection, and avoiding harsh products or environmental factors.",
        risk: "low",
        source: "N/A"
    },
    { 
        name: "Poison Ivy and other Contact Dermatitis", 
        description: "Poison Ivy and other Contact Dermatitis are skin reactions caused by contact with irritants or allergens. Poison Ivy is a plant that contains urushiol oil, which can cause an itchy, blistering rash when it comes into contact with the skin. Other common irritants and allergens that can cause contact dermatitis include soaps, detergents, cosmetics, metals (e.g., nickel), and latex. Treatment involves avoiding the offending substance, washing the affected area, applying soothing creams or ointments, and taking oral antihistamines or corticosteroids.",
        risk: "medium",
        source: "Irritants or allergens such as plants, soaps, cosmetics, metals"
    },
    { 
        name: "Psoriasis", 
        description: "Psoriasis is a chronic autoimmune skin condition that causes red, scaly patches on the skin. It occurs when the immune system mistakenly attacks healthy skin cells, leading to rapid turnover of skin cells and inflammation. Psoriasis can affect any part of the body, including the scalp, elbows, knees, and nails. It often runs in families and can be triggered by factors such as stress, infections, medications, and cold weather. Treatment options include topical medications, phototherapy, oral medications, and biologic agents.",
        risk: "high",
        source: "Autoimmune reactions"
    },
    { 
        name: "Lichen Dermatosis and related diseases", 
        description: "Lichen Dermatosis refers to a group of skin conditions characterized by the presence of lichenoid eruptions or lesions on the skin. These lesions often have a flat, scaly appearance and may be itchy or painful. Lichen planus, lichen sclerosus, and lichen simplex chronicus are examples of lichenoid disorders that can affect the skin. The exact cause of these conditions is unknown, but they may be related to autoimmune reactions, infections, or other factors. Treatment depends on the specific condition and may include topical or systemic medications.",
        risk: "medium",
        source: "Unknown, possibly autoimmune reactions, infections"
    },
    { 
        name: "Scabies", 
        description: "Scabies is a contagious skin infestation caused by the Sarcoptes scabiei mite. It is characterized by intense itching and a pimple-like rash, often in the webbing between the fingers, on the wrists, elbows, armpits, waist, genital area, and buttocks. Scabies is transmitted through close contact with an infested person or their belongings. Treatment involves prescription medications, such as topical scabicides or oral ivermectin, as well as washing clothing, bedding, and other items to prevent reinfestation.",
        risk: "medium",
        source: "Close contact with infested person or belongings"
    },
    { 
        name: "Lyme Disease and other Infestations and Bites", 
        description: "Lyme Disease and other Infestations and Bites refer to skin conditions caused by insect bites, stings, or infestations. Lyme Disease is a bacterial infection transmitted by tick bites and can cause a characteristic rash known as erythema migrans, along with flu-like symptoms. Other infestations and bites, such as mosquito bites, flea bites, bedbug bites, and spider bites, can cause itching, redness, swelling, or pain. Treatment depends on the specific condition and may include antibiotics, antihistamines, or other medications.",
        risk: "medium",
        source: "Insect bites, tick bites, infestations"
    },
    { 
        name: "Seborrheic Keratoses and other Benign Tumors", 
        description: "Seborrheic Keratoses and other Benign Tumors are noncancerous growths that develop on the skin. Seborrheic keratoses are common, wart-like growths that can vary in color and texture. Other benign tumors include skin tags, dermatofibromas, and lipomas, which can appear as small bumps or lumps on the skin. These growths are typically harmless but may be removed for cosmetic reasons or if they cause symptoms.",
        risk: "low",
        source: "N/A"
    },
    { 
        name: "Systemic Disease", 
        description: "Systemic Diseases are conditions that affect multiple organ systems in the body, including the skin. Examples of systemic diseases that can cause skin manifestations include diabetes, lupus, scleroderma, and liver disease. These conditions can present with various skin changes, such as rashes, ulcers, discoloration, or itching. Treatment involves managing the underlying systemic condition and addressing specific skin symptoms.",
        risk: "high",
        source: "Underlying systemic conditions"
    },
    { 
        name: "Tinea Ringworm Candidiasis and other Fungal Infections", 
        description: "Tinea Ringworm, Candidiasis, and other Fungal Infections are skin conditions caused by fungal pathogens. Tinea, also known as ringworm, is a contagious fungal infection that can affect the skin, scalp, and nails, causing red, itchy patches or blisters. Candidiasis, or yeast infection, is caused by Candida fungi and can occur in moist areas of the body, such as the mouth, groin, and armpits, resulting in red, itchy rashes. Other fungal infections, such as athlete's foot and jock itch, can cause similar symptoms. Treatment involves antifungal medications, topical creams, or oral medications, depending on the severity and location of the infection.",
        risk: "medium",
        source: "Fungal pathogens"
    },
    { 
        name: "Urticaria Hives", 
        description: "Urticaria, also known as hives, is a skin condition characterized by raised, red, itchy welts or bumps on the skin. Hives can vary in size and shape and may appear suddenly and disappear within a few hours. They are often caused by allergic reactions to food, medications, insect bites, or other triggers. Other causes of hives include infections, stress, and temperature changes. Treatment involves identifying and avoiding triggers, taking antihistamines, and using topical corticosteroids or other medications to relieve itching and inflammation.",
        risk: "medium",
        source: "Allergens, infections, stress, temperature changes"
    },
    { 
        name: "Vascular Tumors", 
        description: "Vascular Tumors are abnormal growths that develop in blood vessels or lymphatic vessels. Examples include hemangiomas and lymphangiomas, which can appear as red, pink, or purple masses on the skin or mucous membranes. Vascular tumors can occur anywhere on the body and may be present at birth or develop later in life. Treatment depends on the size, location, and symptoms of the tumor and may include observation, medication, or surgical removal.",
        risk: "medium",
        source: "Unknown"
    },
    { 
        name: "Vasculitis", 
        description: "Vasculitis is a group of inflammatory diseases that affect blood vessels, including arteries, veins, and capillaries. These conditions occur when the immune system mistakenly attacks blood vessels, leading to inflammation, tissue damage, and impaired blood flow. Vasculitis can affect the skin and cause symptoms such as red or purple spots (petechiae), bruises (purpura), ulcers, or nodules. Treatment depends on the type and severity of vasculitis and may include medications to suppress the immune system, control inflammation, and prevent complications.",
        risk: "high",
        source: "Autoimmune reactions"
    },
    { 
        name: "Viral infections", 
        description: "Viral Infections are caused by viruses that can affect the skin and mucous membranes. Examples include herpes simplex virus (HSV), which causes cold sores or genital herpes, and varicella-zoster virus (VZV), which causes chickenpox and shingles. Other viral infections, such as molluscum contagiosum, hand-foot-and-mouth disease, and viral warts, can also affect the skin and cause various symptoms. Treatment depends on the specific virus and may include antiviral medications, supportive care, and symptomatic treatment.",
        risk: "medium",
        source: "Viruses"
    },
    { 
        name: "Warts", 
        description: "Warts are benign growths caused by the human papillomavirus (HPV). They often appear as rough, raised bumps on the skin and can occur anywhere on the body. Common warts typically develop on the hands, fingers, or knees, while plantar warts occur on the soles of the feet, and genital warts occur on the genitals. Warts are contagious and can spread through direct contact with the virus. Treatment options include topical medications, cryotherapy, laser therapy, or surgical removal.",
        risk: "medium",
        source: "Human papillomavirus (HPV)"
    },
    { 
        name: "Molluscum", 
        description: "Molluscum contagiosum is a viral skin infection caused by the molluscum contagiosum virus (MCV). It typically presents as small, flesh-colored bumps on the skin, often in clusters or rows. Molluscum contagiosum is highly contagious and can spread through direct contact with an infected person or contaminated objects. It is common in children but can affect people of all ages. Treatment may involve topical medications, cryotherapy, or other interventions to remove the lesions and prevent spread.",
        risk: "medium",
        source: "Molluscum contagiosum virus (MCV)"
    },
    { 
        name: "Xerosis", 
        description: "Xerosis, or dry skin, is a common skin condition characterized by rough, itchy, and flaky skin. It often occurs due to environmental factors such as cold weather, low humidity, and excessive bathing or washing. Other factors that can contribute to xerosis include aging, certain medical conditions, and medications. Treatment involves moisturizing the skin regularly, avoiding hot baths or showers, using mild soaps, and staying hydrated.",
        risk: "low",
        source: "Environmental factors, aging, certain medical conditions"
    }
];



export default function InfoScreen({ navigation }) {
    // State to manage the expanded/collapsed state of each disease
    const [expanded, setExpanded] = useState({});

    // Function to toggle the expanded state of a disease
    const toggleExpanded = (index) => {
        setExpanded(prevState => ({
            ...prevState,
            [index]: !prevState[index]
        }));
    };

    // Render each disease item
    const renderItem = ({ item, index }) => {
        // Splitting the description to access "Areas Affected" and "Common Sources for Infection"
        const descriptionParts = item.description.split('Common Sources for Infection:');
        const areasAffected = descriptionParts[0];
        const commonSources = item.source ? item.source : 'N/A';

        return (
            <TouchableOpacity onPress={() => toggleExpanded(index)}>
                <View style={{ padding: 10, borderBottomWidth: 1, borderColor: '#ccc' }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.name}</Text>
                    {expanded[index] && (
                        <View>
                            <Text style={{ marginTop: 10 }}>
                                <Text style={{ fontWeight: 'bold' }}>Areas Affected:</Text> {areasAffected}
                            </Text>
                            <Text style={{ marginTop: 5 }}>
                                <Text style={{ fontWeight: 'bold' }}>Common Sources for Infection:</Text> {commonSources}
                            </Text>
                            <Text style={{ marginTop: 5 }}>
                                <Text style={{ fontWeight: 'bold' }}>Risk Level: </Text>
                                <Text style={{ fontWeight: 'bold', color: item.risk === 'low' ? 'green' : item.risk === 'medium' ? '#b1b100' : 'red' }}>
                                    {item.risk.toUpperCase()}
                                </Text>
                            </Text>
                        </View>
                    )}
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={diseases}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );
}

