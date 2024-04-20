// InfoPage.js
import React, { useState } from 'react';
import './InfoPage.css'; // Import CSS file for styling

function InfoPage() {
  // Define the list of skin diseases with their descriptions
  const diseases = [
    { name: "Acne and Rosacea", description: "Description of Acne and Rosacea." },
    { name: "Actinic Keratosis", description: "Description of Actinic Keratosis." },
    { name: "Basal Cell Carcinoma and other Malignant Lesions", description: "Description of Basal Cell Carcinoma and other Malignant Lesions." },
    { name: "Atopic Dermatitis", description: "Description of Atopic Dermatitis." },
    { name: "Bullous Disease", description: "Description of Bullous Disease." },
    { name: "Cellulitis", description: "Description of Cellulitis." },
    { name: "Impetigo and other Bacterial Infections", description: "Description of Impetigo and other Bacterial Infections." },
    { name: "Eczema", description: "Description of Eczema." },
    { name: "Exanthems and Drug Eruptions", description: "Description of Exanthems and Drug Eruptions." },
    { name: "Hair Loss", description: "Description of Hair Loss." },
    { name: "Herpes HPV and other STDs", description: "Description of Herpes HPV and other STDs." },
    { name: "Light Diseases and Disorders of Pigmentation", description: "Description of Light Diseases and Disorders of Pigmentation." },
    { name: "Lupus and other Connective Tissue diseases", description: "Description of Lupus and other Connective Tissue diseases." },
    { name: "Melanoma Skin Cancer", description: "Description of Melanoma Skin Cancer." },
    { name: "Nevi and Moles", description: "Description of Nevi and Moles." },
    { name: "Nail Fungus and other Nail Disease", description: "Description of Nail Fungus and other Nail Disease." },
    { name: "Normal Skin", description: "Description of Normal Skin." },
    { name: "Poison Ivy and other Contact Dermatitis", description: "Description of Poison Ivy and other Contact Dermatitis." },
    { name: "Psoriasis", description: "Description of Psoriasis." },
    { name: "Lichen Dermatosis and related diseases", description: "Description of Lichen Dermatosis and related diseases." },
    { name: "Scabies", description: "Description of Scabies." },
    { name: "Lyme Disease and other Infestations and Bites", description: "Description of Lyme Disease and other Infestations and Bites." },
    { name: "Seborrheic Keratoses and other Benign Tumors", description: "Description of Seborrheic Keratoses and other Benign Tumors." },
    { name: "Systemic Disease", description: "Description of Systemic Disease." },
    { name: "Tinea Ringworm Candidiasis and other Fungal Infections", description: "Description of Tinea Ringworm Candidiasis and other Fungal Infections." },
    { name: "Urticaria Hives", description: "Description of Urticaria Hives." },
    { name: "Vascular Tumors", description: "Description of Vascular Tumors." },
    { name: "Vasculitis", description: "Description of Vasculitis." },
    { name: "Viral infections", description: "Description of Viral infections." },
    { name: "Warts", description: "Description of Warts." },
    { name: "Molluscum", description: "Description of Molluscum." },
    // Add more diseases as needed
  ];

  // State to handle filtering and sorting
  const [filter, setFilter] = useState(''); // For filtering by name
  const [sortOrder, setSortOrder] = useState('asc'); // For sorting order

  // Function to handle sorting order
  const handleSortOrderChange = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  // Function to handle filtering
  const filteredDiseases = diseases
    .filter(disease => disease.name.toLowerCase().includes(filter.toLowerCase()))
    .sort((a, b) => sortOrder === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name));

  return (
    <div className="info-page">
      <h1>Information</h1>
      <input
        type="text"
        placeholder="Search..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <button onClick={handleSortOrderChange}>
        {sortOrder === 'asc' ? 'Sort A-Z' : 'Sort Z-A'}
      </button>
      <div className="disease-list">
        {filteredDiseases.map(disease => (
          <div key={disease.name} className="disease">
            <h2>{disease.name}</h2>
            <p>{disease.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default InfoPage;
