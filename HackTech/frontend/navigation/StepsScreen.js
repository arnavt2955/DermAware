import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

export default function StepsScreen({ navigation }) {
    const possibleDiseases = [
        { 
            name: "Acne and Rosacea", 
            steps: [
                "Cleanse your face twice daily with a gentle cleanser.",
                "Use over-the-counter acne treatments containing benzoyl peroxide or salicylic acid.",
                "Avoid picking or squeezing pimples, as this can worsen inflammation and scarring.",
                "Apply topical medications prescribed by your dermatologist, such as retinoids or antibiotics.",
                "Manage stress levels through relaxation techniques or counseling, as stress can exacerbate acne and rosacea.",
                "Protect your skin from sun exposure by wearing sunscreen with an SPF of 30 or higher and avoiding prolonged sun exposure."
            ]
        },
        { 
            name: "Actinic Keratosis", 
            steps: [
                "Protect your skin from the sun by wearing sunscreen with an SPF of 30 or higher, protective clothing, and seeking shade.",
                "Avoid outdoor activities during peak sun hours (10 a.m. to 4 p.m.).",
                "Inspect your skin regularly for any new or changing growths, and report them to your dermatologist.",
                "Undergo regular skin cancer screenings with your dermatologist, especially if you have a history of sun exposure or skin cancer.",
                "Follow your dermatologist's recommendations for treatment, which may include cryotherapy, topical medications, photodynamic therapy, or surgical removal."
            ]
        },
        { 
            name: "Basal Cell Carcinoma and other Malignant Lesions", 
            steps: [
                "Protect your skin from the sun by wearing sunscreen with an SPF of 30 or higher, protective clothing, and seeking shade.",
                "Avoid indoor tanning and prolonged sun exposure, especially during peak hours (10 a.m. to 4 p.m.).",
                "Inspect your skin regularly for any new or changing growths, and report them to your dermatologist.",
                "Undergo regular skin cancer screenings with your dermatologist, especially if you have a history of sun exposure or skin cancer.",
                "Follow your dermatologist's recommendations for treatment, which may include surgical removal, Mohs surgery, radiation therapy, or topical medications."
            ]
        },
        { 
            name: "Atopic Dermatitis", 
            steps: [
                "Moisturize your skin daily with a fragrance-free moisturizer to prevent dryness.",
                "Avoid harsh soaps, detergents, and skincare products that may irritate your skin.",
                "Identify and avoid triggers that exacerbate your eczema, such as certain fabrics, stress, or environmental factors.",
                "Apply topical corticosteroids or calcineurin inhibitors as prescribed by your dermatologist to reduce inflammation and itching.",
                "Practice good skincare habits, including taking short, lukewarm showers and patting your skin dry gently with a towel.",
                "Consider phototherapy or systemic medications if topical treatments are ineffective in managing your eczema."
            ]
        },
        { 
            name: "Bullous Disease", 
            steps: [
                "Consult a dermatologist for a proper diagnosis and treatment plan.",
                "Manage underlying conditions or triggers that may contribute to bullous disease, such as autoimmune disorders or genetic mutations.",
                "Follow your dermatologist's recommendations for treatment, which may include topical or systemic medications to reduce inflammation and blister formation.",
                "Practice good wound care by keeping blisters clean and protected to prevent infection.",
                "Attend regular follow-up appointments with your dermatologist to monitor your condition and adjust treatment as needed."
            ]
        },
        { 
            name: "Cellulitis", 
            steps: [
                "Seek medical attention promptly if you suspect you have cellulitis, as it requires treatment with antibiotics.",
                "Take prescribed antibiotics as directed by your healthcare provider, and complete the full course of treatment.",
                "Elevate the affected area and apply warm compresses to reduce pain and swelling.",
                "Keep the affected area clean and dry, and avoid scratching or rubbing it to prevent further irritation or infection.",
                "Monitor your symptoms closely and contact your healthcare provider if they worsen or if you develop a fever."
            ]
        },
        { 
            name: "Impetigo and other Bacterial Infections", 
            steps: [
                "Keep the affected area clean by washing it with soap and water regularly.",
                "Apply antibiotic ointment to the affected area as directed by your healthcare provider.",
                "Cover any open sores or blisters with a clean, dry bandage to prevent the spread of infection.",
                "Avoid touching or scratching the affected area to prevent further irritation or spread of bacteria.",
                "Wash your hands frequently, especially after touching the affected area, to prevent spreading the infection to others."
            ]
        },
        { 
            name: "Exanthems and Drug Eruptions", 
            steps: [
                "Identify and avoid the offending drug or trigger that caused the rash or eruption.",
                "Consult a healthcare provider for evaluation and treatment of the rash, especially if it is severe or accompanied by other symptoms.",
                "Take antihistamines or other medications as prescribed by your healthcare provider to relieve itching and discomfort.",
                "Apply soothing lotions or creams to the affected area to help reduce inflammation and promote healing.",
                "Follow up with your healthcare provider to monitor your condition and adjust treatment as needed."
            ]
        },
        { 
            name: "Hair Loss", 
            steps: [
                "Consult a dermatologist or healthcare provider for evaluation and diagnosis of the underlying cause of hair loss.",
                "Follow a healthy diet rich in vitamins and minerals that support hair growth, such as biotin, zinc, and iron.",
                "Consider treatment options such as minoxidil (Rogaine), finasteride (Propecia), or hair transplant surgery, depending on the underlying cause and severity of hair loss.",
                "Avoid hairstyles and treatments that can further damage or stress your hair, such as tight ponytails, braids, or chemical treatments.",
                "Manage stress levels through relaxation techniques, counseling, or other stress-reduction strategies, as stress can contribute to hair loss."
            ]
        },
        { 
            name: "Herpes HPV and other STDs", 
            steps: [
                "Practice safe sex by using condoms and limiting the number of sexual partners to reduce the risk of contracting STDs.",
                "Get vaccinated against HPV to protect against genital warts and certain types of cancer, such as cervical cancer.",
                "Seek medical attention if you suspect you have an STD, as many can be treated with antiviral medications or antibiotics.",
                "Inform sexual partners if you have been diagnosed with an STD so that they can get tested and receive treatment if necessary.",
                "Avoid sexual contact during outbreaks of herpes or other STDs to prevent spreading the infection to others."
            ]
        },
        { 
            name: "Light Diseases and Disorders of Pigmentation", 
            steps: [
                "Protect your skin from the sun by wearing sunscreen with an SPF of 30 or higher, protective clothing, and seeking shade.",
                "Avoid excessive sun exposure, especially during peak hours (10 a.m. to 4 p.m.), to reduce the risk of developing pigmentary disorders.",
                "Consult a dermatologist for evaluation and treatment of pigmentary disorders, such as vitiligo or hyperpigmentation.",
                "Follow your dermatologist's recommendations for treatment, which may include topical medications, phototherapy, or cosmetic procedures to even out skin tone."
            ]
        },
        { 
            name: "Lupus and other Connective Tissue diseases", 
            steps: [
                "Consult a rheumatologist or dermatologist for evaluation and treatment of lupus or other connective tissue diseases.",
                "Follow a treatment plan prescribed by your healthcare provider, which may include medications to suppress the immune system, control inflammation, and manage symptoms.",
                "Avoid sun exposure, as it can trigger lupus flares and worsen skin symptoms.",
                "Practice good skincare habits, such as using gentle cleansers and moisturizers, to help manage skin symptoms.",
                "Monitor your symptoms closely and report any changes or concerns to your healthcare provider."
            ]
        },
        { 
            name: "Melanoma Skin Cancer", 
            steps: [
                "Protect your skin from the sun by wearing sunscreen with an SPF of 30 or higher, protective clothing, and seeking shade.",
                "Perform regular self-examinations of your skin to check for any new or changing moles, lesions, or spots.",
                "Schedule regular skin cancer screenings with your dermatologist, especially if you have a history of sun exposure, sunburns, or skin cancer.",
                "Seek medical attention promptly if you notice any suspicious changes in your skin, such as asymmetry, irregular borders, uneven color, or changes in size or shape.",
                "Follow your dermatologist's recommendations for treatment, which may include surgical removal, chemotherapy, radiation therapy, immunotherapy, or targeted therapy."
            ]
        },
        { 
            name: "Nevi and Moles", 
            steps: [
                "Monitor your moles regularly for any changes in size, shape, color, or texture.",
                "Use the ABCDE rule as a guide for identifying suspicious moles: Asymmetry, Border irregularity, Color variation, Diameter greater than 6mm, Evolution or change over time.",
                "Consult a dermatologist for evaluation and monitoring of atypical moles or changes in existing moles.",
                "Consider mole removal for suspicious or changing moles, especially if they exhibit features associated with melanoma.",
                "Protect your skin from the sun by wearing sunscreen and seeking shade to reduce the risk of developing new moles or skin cancer."
            ]
        },
        { 
            name: "Nail Fungus and other Nail Disease", 
            steps: [
                "Keep your nails clean and dry to prevent fungal infections from developing.",
                "Avoid sharing nail clippers, files, or other tools to reduce the risk of spreading fungal infections.",
                "Trim your nails straight across and avoid cutting them too short to prevent ingrown toenails and other nail problems.",
                "Consult a dermatologist for evaluation and treatment of nail fungus or other nail diseases.",
                "Follow your dermatologist's recommendations for treatment, which may include oral or topical antifungal medications, laser therapy, or surgical removal of the affected nails."
            ]
        },
        { 
            name: "Poison Ivy and other Contact Dermatitis", 
            steps: [
                "Avoid contact with plants known to cause contact dermatitis, such as poison ivy, poison oak, and poison sumac.",
                "Wear protective clothing, such as long sleeves and gloves, when working outdoors or in areas where contact with irritants or allergens is possible.",
                "Wash your skin with soap and water immediately after contact with potential irritants or allergens to remove the offending substance.",
                "Apply over-the-counter corticosteroid creams or ointments to the affected area to reduce inflammation and itching.",
                "Take oral antihistamines as directed by your healthcare provider to relieve itching and discomfort."
            ]
        },
        { 
            name: "Psoriasis", 
            steps: [
                "Moisturize your skin regularly with fragrance-free moisturizers to prevent dryness and itching.",
                "Avoid triggers that exacerbate your psoriasis, such as stress, infections, certain medications, and cold weather.",
                "Use topical medications, such as corticosteroids, vitamin D analogs, or retinoids, as prescribed by your dermatologist to reduce inflammation and slow skin cell turnover.",
                "Consider phototherapy or systemic medications, such as methotrexate, cyclosporine, or biologic agents, if topical treatments are ineffective in managing your psoriasis.",
                "Attend regular follow-up appointments with your dermatologist to monitor your condition and adjust treatment as needed."
            ]
        },
        { 
            name: "Lichen Dermatosis and related diseases", 
            steps: [
                "Consult a dermatologist for evaluation and treatment of lichenoid eruptions or lesions.",
                "Follow your dermatologist's recommendations for treatment, which may include topical or systemic medications to reduce inflammation and itching.",
                "Avoid triggers that exacerbate your symptoms, such as stress, certain medications, or environmental factors.",
                "Practice good skincare habits, such as moisturizing regularly and avoiding harsh soaps or cleansers, to help manage your condition.",
                "Attend regular follow-up appointments with your dermatologist to monitor your condition and adjust treatment as needed."
            ]
        },
        { 
            name: "Scabies", 
            steps: [
                "Seek medical attention promptly if you suspect you have scabies, as it requires treatment with prescription medications.",
                "Take prescribed scabicides or other medications as directed by your healthcare provider, and follow the full course of treatment.",
                "Wash all clothing, bedding, and towels in hot water and dry them on high heat to kill any scabies mites and prevent reinfestation.",
                "Thoroughly clean and vacuum your home, car, and other living spaces to remove any scabies mites or eggs.",
                "Avoid close contact with others until you have completed treatment and are no longer contagious."
            ]
        },
        { 
            name: "Lyme Disease and other Infestations and Bites", 
            steps: [
                "Prevent tick bites by wearing long sleeves, pants, and socks when outdoors, and using insect repellents containing DEET or permethrin.",
                "Perform regular tick checks after spending time outdoors, and promptly remove any ticks using fine-tipped tweezers.",
                "Seek medical attention promptly if you develop symptoms of Lyme disease or other tick-borne illnesses, such as fever, rash, fatigue, or joint pain.",
                "Follow your healthcare provider's recommendations for treatment, which may include antibiotics or other medications to manage the infection.",
                "Take steps to prevent mosquito bites by using insect repellents, wearing long sleeves and pants, and avoiding outdoor activities during peak mosquito hours."
            ]
        },
        { 
            name: "Seborrheic Keratoses and other Benign Tumors", 
            steps: [
                "Consult a dermatologist for evaluation and diagnosis of benign tumors, such as seborrheic keratoses or skin tags.",
                "Consider treatment options for benign tumors, such as cryotherapy, electrosurgery, or laser therapy, if they cause discomfort or cosmetic concerns.",
                "Practice good skincare habits, such as moisturizing regularly and protecting your skin from the sun, to maintain overall skin health.",
                "Monitor benign tumors for any changes in size, shape, color, or texture, and report any concerns to your dermatologist.",
                "Attend regular follow-up appointments with your dermatologist to monitor your skin health and address any new or changing lesions."
            ]
        },
        { 
            name: "Urticaria Angioedema and other Vascular Reactions", 
            steps: [
                "Identify and avoid triggers that may cause hives or angioedema, such as certain foods, medications, or environmental factors.",
                "Take antihistamines or other medications as prescribed by your healthcare provider to relieve itching and reduce swelling.",
                "Apply cool compresses or take cool baths to soothe irritated skin and reduce inflammation.",
                "Seek medical attention if you experience difficulty breathing, swelling of the throat or tongue, or other symptoms of a severe allergic reaction.",
                "Follow up with your healthcare provider to determine the underlying cause of your vascular reactions and develop a treatment plan."
            ]
        },
        { 
            name: "Vitiligo and other Hypopigmentation", 
            steps: [
                "Consult a dermatologist for evaluation and diagnosis of hypopigmentation disorders, such as vitiligo.",
                "Follow your dermatologist's recommendations for treatment, which may include topical medications, phototherapy, or surgical procedures to repigment the skin.",
                "Protect your skin from the sun by wearing sunscreen with an SPF of 30 or higher and avoiding prolonged sun exposure.",
                "Practice good skincare habits, such as moisturizing regularly and avoiding harsh soaps or cleansers, to help maintain overall skin health.",
                "Seek support from healthcare providers, support groups, or counseling to cope with the emotional impact of living with a visible skin condition."
            ]
        }
    ];
    

    const [expandedDisease, setExpandedDisease] = useState('');

    const toggleExpand = (diseaseName) => {
        setExpandedDisease(expandedDisease === diseaseName ? '' : diseaseName);
    };

    const renderItem = ({ item }) => {
        const isExpanded = expandedDisease === item.name;
        return (
            <TouchableOpacity onPress={() => toggleExpand(item.name)}>
                <View style={{ backgroundColor: '#ebebeb', padding: 10, marginVertical: 5 }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.name}</Text>
                    {isExpanded && (
                        <View style={{ marginTop: 10 }}>
                            {item.steps.map((step, index) => (
                                <Text key={index} style={{ fontSize: 16 }}>{step}</Text>
                            ))}
                        </View>
                    )}
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={possibleDiseases}
                renderItem={renderItem}
                keyExtractor={(item) => item.name}
                extraData={expandedDisease}
            />
        </View>
    );
}
