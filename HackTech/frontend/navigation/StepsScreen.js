import * as React from 'react';
import { View, Text, Picker } from 'react-native';
import {useState} from 'react'

export default function StepsScreen({ navigation }) {

    const possibleDiseases = [
        "Acne and Rosacea Photos",
        "Actinic Keratosis Basal Cell Carcinoma and other Malignant Lesions",
        "Atopic Dermatitis Photos",
        "Bullous Disease Photos",
        "Cellulitis Impetigo and other Bacterial Infections",
        "Eczema Photos",
        "Exanthems and Drug Eruptions",
        "Hair Loss Photos Alopecia and other Hair Diseases",
        "Herpes HPV and other STDs Photos",
        "Light Diseases and Disorders of Pigmentation",
        "Lupus and other Connective Tissue diseases",
        "Melanoma Skin Cancer Nevi and Moles",
        "Nail Fungus and other Nail Disease",
        "Poison Ivy Photos and other Contact Dermatitis",
        "Psoriasis pictures Lichen Dermatosis and related diseases",
        "Scabies Lyme Disease and other Infestations and Bites",
        "Seborrheic Keratoses and other Benign Tumors",
        "Systemic Disease",
        "Tinea Ringworm Candidiasis and other Fungal Infections",
        "Urticaria Hives",
        "Vascular Tumors",
        "Vasculitis Photos",
        "Viral infections",
        "Warts Molluscum"
    ]




    const diseaseSteps = {
        "Acne and Rosacea Photos": [
            "Practice good skincare habits, including gentle cleansing and moisturizing.",
            "Use over-the-counter acne treatments containing ingredients like benzoyl peroxide or salicylic acid.",
            "Consult a dermatologist for prescription medications or treatments tailored to your specific condition.",
            "Consider lifestyle changes, such as diet adjustments or stress management techniques, to help manage symptoms."
        ],
        "Actinic Keratosis Basal Cell Carcinoma and other Malignant Lesions": [
            "Consult a dermatologist for proper diagnosis and treatment of Actinic Keratosis, Basal Cell Carcinoma, and other Malignant Lesions.",
            "For Actinic Keratosis, treatment options may include cryotherapy, topical medications, photodynamic therapy, or surgical removal.",
            "For Basal Cell Carcinoma and other Malignant Lesions, treatment options may include surgical excision, Mohs surgery, radiation therapy, or topical medications.",
            "Practice sun safety measures, including wearing sunscreen, protective clothing, and seeking shade, to prevent the development of new lesions and reduce the risk of skin cancer.",
            "Perform regular skin self-exams to monitor for changes in existing lesions or the appearance of new ones, and report any concerns to your healthcare provider.",
            "If you have a history of skin cancer or are at higher risk due to factors such as fair skin, a family history of skin cancer, or excessive sun exposure, schedule regular skin checks with a dermatologist.",
            "Follow your dermatologist's recommendations for follow-up appointments and surveillance to monitor for recurrence or new skin lesions.",
            "Stay informed about skin cancer prevention and early detection by seeking reliable sources of information and participating in skin cancer awareness campaigns.",
            "If you notice any changes in the size, shape, color, or texture of a skin lesion, or if it bleeds, itches, or fails to heal, seek prompt medical attention."
        ],
        "Atopic Dermatitis Photos": [
            "Identify and avoid triggers that worsen your symptoms, such as certain fabrics or skincare products.",
            "Use emollients and moisturizers regularly to hydrate the skin.",
            "Consult a dermatologist for prescription topical corticosteroids or immunomodulators if necessary.",
            "Consider allergy testing and allergen avoidance strategies if allergies contribute to your condition."
        ],
        "Bullous Disease Photos": [
            "Seek immediate medical attention if blisters are severe or widespread.",
            "Consult a dermatologist for a proper diagnosis and treatment plan, which may include corticosteroids or other medications.",
            "Follow up regularly with your healthcare provider for monitoring and management of symptoms."
        ], "Cellulitis Impetigo and other Bacterial Infections": [
            "Seek immediate medical attention for Cellulitis, as it can be a serious infection requiring antibiotics.",
            "Consult a healthcare provider for diagnosis and treatment of Impetigo, especially if the infection is spreading or causing discomfort.",
            "Other bacterial infections require medical attention for proper diagnosis and treatment, including antibiotics or other medications based on the type and severity of the infection.",
            "Follow your doctor's instructions for taking medications and completing the full course of treatment for bacterial infections.",
            "Practice good hygiene, including frequent handwashing, to prevent the spread of bacterial infections to others.",
            "Keep any wounds clean and covered to prevent bacterial contamination and promote healing.",
            "Monitor for signs of complications such as fever, increasing pain, or spreading redness, and seek medical attention if they occur."
        ], 
        "Eczema" : [
            "Identify and avoid triggers that worsen your eczema symptoms, such as certain fabrics, soaps, or skincare products.",
            "Use emollients and moisturizers regularly to hydrate the skin and prevent flare-ups.",
            "Consult a dermatologist for prescription topical corticosteroids or immunomodulators if necessary to manage eczema flare-ups.",
            "Consider allergy testing and allergen avoidance strategies if allergies contribute to your eczema.",
            "Follow a skincare routine that includes gentle cleansing and moisturizing to maintain skin health.",
            "Avoid scratching or rubbing the affected skin to prevent further irritation and potential infection.",
            "Manage stress through relaxation techniques, exercise, or therapy, as stress can trigger eczema flare-ups.",
            "Stay informed about new treatment options or strategies for managing eczema and discuss them with your healthcare provider."
        ],
        "Exanthems and Drug Eruptions": [
            "Consult a healthcare provider for diagnosis and treatment of exanthems and drug eruptions.",
            "Discontinue the suspected medication immediately if a drug eruption is suspected, and seek medical advice.",
            "Your healthcare provider may prescribe antihistamines, topical corticosteroids, or other medications to relieve symptoms.",
            "Avoid further exposure to the suspected trigger, whether it's a medication or another allergen.",
            "If the eruption is severe or accompanied by symptoms such as difficulty breathing or swelling of the face or throat, seek emergency medical attention.",
            "Follow up with your healthcare provider to monitor your condition and adjust treatment as needed.",
            "Inform your healthcare provider of any medications or supplements you are taking to help identify potential triggers for drug eruptions.",
            "If you are prone to drug eruptions, consider wearing a medical alert bracelet or carrying a card listing your known allergies."
        ],
        "Hair Loss Photos Alopecia and other Hair Diseases": [
            "Consult a dermatologist to determine the underlying cause of hair loss.",
            "Consider treatments such as minoxidil, finasteride, or hair transplant surgery, depending on the cause and severity of hair loss.",
            "Follow a healthy diet rich in vitamins and minerals that support hair growth, such as iron, zinc, and biotin.",
            "Practice stress management techniques, as stress can contribute to hair loss.",
            "Avoid harsh treatments or styling practices that can further damage hair, such as tight hairstyles or excessive heat styling.",
            "Consider using hair loss concealers or wigs if hair loss is causing distress or affecting self-esteem.",
            "Stay informed about new treatments for hair loss, such as platelet-rich plasma therapy or laser therapy, and discuss them with your healthcare provider.",
            "Join a support group or seek counseling if hair loss is impacting your mental health or self-confidence."
        ],
        "Herpes HPV and other STDs Photos": [
            "Seek medical attention for proper testing and diagnosis of STDs, including Herpes and HPV.",
            "Follow your healthcare provider's treatment plan, which may include antiviral medications for Herpes or other appropriate medications for other STDs.",
            "Inform sexual partners about your diagnosis to prevent transmission of STDs.",
            "Practice safe sex by using condoms to reduce the risk of transmitting or acquiring STDs.",
            "Get regular screenings for STDs, especially if you are sexually active.",
            "Educate yourself about STD prevention and transmission to reduce your risk of infection.",
            "Avoid high-risk behaviors such as unprotected sex or sharing needles to prevent STD transmission.",
            "If you are diagnosed with an STD, notify recent sexual partners so they can get tested and treated as well.",
            "Consider vaccination for preventable STDs such as HPV to reduce your risk of infection."
        ], 
        "Light Diseases and Disorders of Pigmentation": [
            "Consult a dermatologist for a proper diagnosis and treatment plan for light diseases and disorders of pigmentation.",
            "Use broad-spectrum sunscreen daily to protect your skin from further damage and to prevent worsening of pigmentation disorders.",
            "Consider treatments such as topical retinoids, hydroquinone, chemical peels, or laser therapy, depending on the specific pigmentation condition.",
            "Follow a skincare routine that includes gentle cleansing and moisturizing to maintain skin health.",
            "Avoid excessive sun exposure and tanning beds, as they can exacerbate pigmentation disorders and increase the risk of skin cancer.",
            "Wear protective clothing, such as hats and sunglasses, when outdoors to shield your skin from the sun's harmful rays.",
            "Stay informed about new treatments or technologies for pigmentation disorders, and discuss them with your dermatologist.",
            "Be patient with treatment, as improving pigmentation disorders often takes time and consistent effort."
        ], 
        "Lupus and other Connective Tissue diseases":[
            "Work with a rheumatologist or dermatologist to manage symptoms and prevent flare-ups of Lupus and other Connective Tissue diseases.",
            "Take medications as prescribed, which may include nonsteroidal anti-inflammatory drugs (NSAIDs), corticosteroids, or immunosuppressants.",
            "Protect your skin from UV exposure by wearing sunscreen and protective clothing, as sunlight can trigger Lupus flare-ups.",
            "Manage stress through relaxation techniques, exercise, or therapy, as stress can exacerbate symptoms of Lupus and other Connective Tissue diseases.",
            "Stay informed about your condition and educate yourself about potential triggers and treatment options.",
            "Monitor for signs of disease activity, such as joint pain, fatigue, or skin rashes, and report them to your healthcare provider.",
            "Participate in support groups or seek counseling to connect with others who understand your experience and to learn coping strategies.",
            "Discuss any concerns or questions you have about your treatment plan with your healthcare provider to ensure you are receiving the best care possible."
        ], 
        "Melanoma Skin Cancer Nevi and Moles": [
            "Consult an oncologist or dermatologist immediately for further evaluation and treatment of Melanoma Skin Cancer.",
            "Treatment options may include surgery, chemotherapy, immunotherapy, or targeted therapy, depending on the stage and severity of melanoma.",
            "Follow your doctor's recommendations for regular skin exams and surveillance to monitor for recurrence or new skin cancers.",
            "Practice sun safety measures, including wearing protective clothing, using sunscreen, and avoiding tanning beds, to reduce the risk of melanoma and other skin cancers.",
            "Educate yourself about melanoma and its warning signs, and perform regular self-exams to monitor your moles and skin changes.",
            "Consult a dermatologist for proper evaluation and monitoring of Nevi and Moles, especially if you notice any changes in size, shape, or color.",
            "Avoid excessive sun exposure, as it can increase the risk of developing abnormal or cancerous moles.",
            "Consider genetic counseling if you have a family history of melanoma or multiple unusual moles.",
            "Follow up with your healthcare provider regularly to ensure early detection and appropriate management of any skin concerns."
        ], 
        "Nail Fungus and other Nail Disease":[
            "Consult a dermatologist for proper diagnosis and treatment of Nail Fungus and other Nail Diseases.",
            "Consider topical antifungal medications or oral antifungal drugs for Nail Fungus, depending on the severity and extent of the infection.",
            "Practice good nail hygiene, including keeping nails clean, dry, and trimmed.",
            "Avoid sharing nail clippers or other tools to prevent the spread of fungal infections.",
            "Use over-the-counter treatments such as medicated nail polish or nail creams to help manage Nail Fungus.",
            "Keep your feet dry and wear breathable shoes to prevent fungal infections from recurring.",
            "Consult a healthcare provider if you notice any changes in the color, shape, or texture of your nails, as they may indicate underlying nail disease.",
            "Be patient with treatment, as it can take several months for Nail Fungus to resolve completely.",
            "Follow your doctor's recommendations for follow-up appointments and monitoring to ensure the infection clears up completely."
        ], 
        "Poison Ivy Photos and other Contact Dermatitis": [
            "If exposed to Poison Ivy or other allergens causing Contact Dermatitis, wash the affected area with soap and water immediately to remove the irritant.",
            "Apply cool compresses or calamine lotion to soothe itching and reduce inflammation.",
            "Avoid scratching the rash, as it can lead to further irritation and potential infection.",
            "Use over-the-counter hydrocortisone cream or oral antihistamines to relieve itching and discomfort.",
            "If the rash is severe or widespread, consult a healthcare provider for prescription-strength treatments such as corticosteroids.",
            "Identify and avoid triggers that cause Contact Dermatitis, such as certain plants, metals, or chemicals.",
            "Wear protective clothing or gloves when handling potential irritants to prevent exposure.",
            "If you suspect an allergic reaction to a specific substance, consider allergy testing to identify the trigger.",
            "Follow up with your healthcare provider if symptoms persist or worsen, as you may need further evaluation or treatment."
        ], 
        "Psoriasis pictures Lichen Dermatosis and related diseases": [
            "Consult a dermatologist for proper diagnosis and treatment of Psoriasis, Lichen Dermatosis, and related diseases.",
            "Follow your doctor's treatment plan, which may include topical medications, phototherapy, oral medications, or biologic agents, depending on the severity of your condition.",
            "Keep your skin moisturized with emollients to help soothe and hydrate dry, flaky skin associated with Psoriasis and Lichen Dermatosis.",
            "Avoid triggers that worsen your symptoms, such as stress, certain medications, or skin injuries.",
            "Practice sun safety by using sunscreen and protective clothing to prevent sunburn, which can trigger Psoriasis flare-ups.",
            "Consider lifestyle modifications such as quitting smoking, maintaining a healthy weight, and managing stress to help reduce the frequency and severity of flare-ups.",
            "Join a support group or seek counseling to connect with others who understand your experience and to learn coping strategies.",
            "Stay informed about new treatments and research developments for Psoriasis and related skin conditions, and discuss them with your healthcare provider.",
            "Follow up with your dermatologist regularly to monitor your condition and adjust treatment as needed."
        ], 
        "Scabies Lyme Disease and other Infestations and Bites" : [
            "Consult a healthcare provider for proper diagnosis and treatment of Scabies, Lyme Disease, and other Infestations and Bites.",
            "For Scabies, your doctor may prescribe topical medications such as permethrin or oral medications such as ivermectin to kill the mites.",
            "For Lyme Disease, early treatment with antibiotics is essential to prevent complications. If you suspect you have been bitten by a tick and have symptoms such as a bull's-eye rash, fever, or joint pain, seek medical attention.",
            "For other infestations and bites, such as bed bug bites or mosquito bites, apply over-the-counter anti-itch creams and take antihistamines to reduce itching and inflammation.",
            "Avoid scratching bites or infested areas to prevent secondary infections.",
            "Wash bedding, clothing, and personal items in hot water to kill any mites or insects and prevent reinfestation.",
            "Consider preventive measures such as using insect repellent, wearing long sleeves and pants in wooded areas, and checking for ticks after outdoor activities to reduce the risk of bites and infestations.",
            "If you experience severe symptoms or allergic reactions to bites or infestations, seek medical attention immediately.",
            "Follow up with your healthcare provider for monitoring and additional treatment if needed."
        ], 
        "Seborrheic Keratoses and other Benign Tumors": [
            "Consult a dermatologist for proper diagnosis and treatment of Seborrheic Keratoses, other Benign Tumors, and related conditions.",
            "While benign, Seborrheic Keratoses can be cosmetically bothersome. Your dermatologist may recommend treatments such as cryotherapy, curettage, or laser therapy to remove them if desired.",
            "For other types of benign tumors, your doctor may recommend monitoring the growth and appearance over time or may recommend removal if they are causing symptoms or are at risk of becoming cancerous.",
            "If you notice any changes in size, shape, or color of a benign tumor, or if it becomes painful or starts to bleed, consult your healthcare provider for evaluation.",
            "Practice sun safety by using sunscreen and protective clothing to reduce the risk of developing new Seborrheic Keratoses and other benign tumors.",
            "Educate yourself about the characteristics of benign tumors and how to distinguish them from potentially cancerous growths.",
            "Regular skin checks and follow-up appointments with your dermatologist are important for monitoring benign tumors and detecting any changes or abnormalities.",
            "If you have concerns about the appearance or growth of benign tumors, discuss them with your healthcare provider to determine the best course of action."
        ], 
        "Systemic Disease" : [
            "Consult with a healthcare provider for proper diagnosis and management of Systemic Diseases.",
            "Follow your doctor's treatment plan, which may include medications, lifestyle changes, and other interventions to manage symptoms and improve quality of life.",
            "For chronic systemic conditions such as diabetes, hypertension, or autoimmune diseases, adhere to your treatment regimen and attend regular check-ups to monitor your condition.",
            "Maintain a healthy lifestyle by eating a balanced diet, getting regular exercise, managing stress, and avoiding harmful habits such as smoking or excessive alcohol consumption.",
            "Stay informed about your condition and work with your healthcare team to adjust your treatment plan as needed.",
            "Seek support from family, friends, or support groups to help cope with the challenges of living with a systemic disease.",
            "Monitor your symptoms and report any changes or concerns to your healthcare provider promptly.",
            "Take steps to prevent complications associated with systemic diseases, such as following a heart-healthy diet and exercising regularly to reduce the risk of cardiovascular disease in diabetes.",
            "Educate yourself about the potential complications and management strategies for your specific systemic disease."
        ], 
        "Tinea Ringworm Candidiasis and other Fungal Infections": [
            "Consult a healthcare provider for proper diagnosis and treatment of Tinea (Ringworm), Candidiasis, and other Fungal Infections.",
            "For Tinea infections, your doctor may recommend antifungal creams, powders, or oral medications to clear the infection.",
            "For Candidiasis, treatments may include antifungal medications in the form of creams, ointments, or oral tablets.",
            "Practice good hygiene, including keeping the affected area clean and dry, to prevent the spread of fungal infections.",
            "Avoid sharing personal items such as towels, clothing, or hairbrushes to reduce the risk of spreading fungal infections to others.",
            "Wear loose-fitting clothing made from breathable fabrics to help prevent moisture buildup, which can promote fungal growth.",
            "Keep your feet dry and clean, especially in between the toes, to prevent Tinea Pedis (Athlete's Foot).",
            "Consider lifestyle factors that may contribute to fungal infections, such as obesity, diabetes, or weakened immune system, and take steps to manage these conditions.",
            "Follow your healthcare provider's instructions for treatment and follow-up appointments to ensure the infection clears up completely and does not recur."
        ], 
        "Urticaria Hives":[
            "Consult a healthcare provider for proper diagnosis and treatment of Urticaria (Hives).",
            "Identify and avoid triggers that may cause hives, such as certain foods, medications, insect bites, or environmental factors.",
            "Take antihistamines as directed by your doctor to relieve itching and reduce the severity of hives.",
            "Apply cool compresses or take cool baths to soothe the skin and reduce inflammation.",
            "If hives are severe or persistent, your doctor may prescribe oral corticosteroids or other medications to control symptoms.",
            "Keep a diary to track your symptoms and potential triggers, which can help you and your doctor identify patterns and make necessary adjustments to your treatment plan.",
            "Avoid scratching or rubbing the hives, as this can worsen symptoms and increase the risk of infection.",
            "If you have chronic hives that last for more than six weeks, your doctor may recommend additional testing or referral to a specialist to determine the underlying cause.",
            "Stay informed about new treatment options and research developments for Urticaria and discuss them with your healthcare provider."
        ], 
        "Vascular Tumors":[
            "Consult with a healthcare provider, such as a dermatologist or oncologist, for proper diagnosis and management of Vascular Tumors.",
            "Your healthcare provider may recommend observation, medical therapy, or surgical intervention depending on the type, location, and size of the vascular tumor.",
            "Treatment options may include laser therapy, sclerotherapy, embolization, or surgical excision.",
            "Regular monitoring and follow-up appointments with your healthcare provider are essential to track the progression of the vascular tumor and assess treatment effectiveness.",
            "Educate yourself about vascular tumors and their potential complications to make informed decisions about your treatment plan.",
            "Discuss any concerns or questions you have about vascular tumors with your healthcare provider to ensure you receive the best care possible.",
            "If you experience symptoms such as pain, bleeding, or changes in the appearance of the vascular tumor, notify your healthcare provider promptly.",
            "Seek support from family, friends, or support groups to help cope with the emotional and physical challenges of managing a vascular tumor."
        ], 
         "Vasculitis Photos": [
            "Consult with a healthcare provider, such as a rheumatologist or dermatologist, for proper diagnosis and management of Vasculitis.",
            "Your healthcare provider may recommend a combination of medications, including corticosteroids, immunosuppressants, and biologics, to control inflammation and prevent damage to blood vessels.",
            "Follow your treatment plan as prescribed by your healthcare provider and attend regular follow-up appointments to monitor your condition.",
            "Practice self-care techniques such as stress management, getting adequate rest, and maintaining a healthy lifestyle to support your overall well-being.",
            "Be vigilant for signs of flare-ups or complications, such as new symptoms, changes in existing symptoms, or worsening of the condition, and report them to your healthcare provider promptly.",
            "Stay informed about vasculitis and its treatment options by seeking reliable sources of information and asking questions during your healthcare appointments.",
            "Join a support group or connect with others who have vasculitis to share experiences, gain support, and learn coping strategies.",
            "If you have concerns about the appearance of your skin or other symptoms associated with vasculitis, discuss them openly with your healthcare provider to explore possible treatment options."
        ], 
        "Viral infections" : [
            "Consult with a healthcare provider for proper diagnosis and treatment of viral infections.",
            "Follow your doctor's recommendations for managing symptoms and preventing the spread of the virus to others.",
            "For certain viral infections such as influenza or COVID-19, antiviral medications may be prescribed to reduce symptoms and duration of illness.",
            "Get vaccinated against common viral infections such as influenza, measles, mumps, rubella, and COVID-19 to prevent illness and protect others in the community.",
            "Practice good hygiene, including frequent handwashing, covering your mouth and nose when coughing or sneezing, and avoiding close contact with sick individuals.",
            "If you have a viral infection, stay home from work, school, and other public places to prevent spreading the virus to others.",
            "Stay informed about the latest developments in viral infections, including new treatments, vaccines, and public health recommendations.",
            "If you have a weakened immune system or are at higher risk for complications from viral infections, talk to your healthcare provider about additional precautions or treatments."
        ], 
        "Warts Molluscum": [
            "Consult with a healthcare provider for proper diagnosis and treatment of Warts and Molluscum.",
            "For Warts, treatment options may include over-the-counter topical treatments, cryotherapy, laser therapy, or surgical removal.",
            "For Molluscum contagiosum, treatment may include topical medications, cryotherapy, or curettage.",
            "Avoid picking or scratching Warts or Molluscum lesions to prevent spreading the virus to other areas of the skin.",
            "Keep the affected area clean and dry to reduce the risk of bacterial infection and promote healing.",
            "If you have Warts or Molluscum, avoid sharing towels, clothing, or personal items with others to prevent spreading the infection.",
            "Monitor the affected area for changes or new lesions and report them to your healthcare provider.",
            "Consider preventive measures such as wearing flip-flops in public showers or pools to reduce the risk of contracting Molluscum contagiosum.",
            "If you have concerns about the appearance or treatment of Warts or Molluscum, discuss them with your healthcare provider to explore your options."
        ]    
    }
    const [selectedDisease, setSelectedDisease] = useState(possibleDiseases[0]);
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 26, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 }}>Steps for {selectedDisease}:</Text>
            
            <Picker
                selectedValue={selectedDisease}
                onValueChange={(itemValue, itemIndex) => setSelectedDisease(itemValue)}
                style={{ height: 50, width: 200 }}
            >
                {possibleDiseases.map((disease, index) => (
                    <Picker.Item key={index} label={disease} value={disease} />
                ))}
            </Picker>

            {diseaseSteps[selectedDisease].map((step, index) => (
                <Text key={index} style={{ fontSize: 16, textAlign: 'center', marginTop: 10 }}>{step}</Text>
            ))}
        </View>
    );
}
