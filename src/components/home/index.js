// Home.js
import React, { Component } from "react";
import { MultiSelect } from "react-multi-select-component";
import InformationCards from '../informationcards';
import './index.css';

const jsonString = '[{"label": "itching", "value": "itching"}, {"label": "skin rash", "value": "skin_rash"}, {"label": "nodal skin eruptions", "value": "nodal_skin_eruptions"}, {"label": "continuous sneezing", "value": "continuous_sneezing"}, {"label": "shivering", "value": "shivering"}, {"label": "chills", "value": "chills"}, {"label": "joint pain", "value": "joint_pain"}, {"label": "stomach pain", "value": "stomach_pain"}, {"label": "acidity", "value": "acidity"}, {"label": "ulcers on tongue", "value": "ulcers_on_tongue"}, {"label": "muscle wasting", "value": "muscle_wasting"}, {"label": "vomiting", "value": "vomiting"}, {"label": "burning micturition", "value": "burning_micturition"}, {"label": "spotting  urination", "value": "spotting_ urination"}, {"label": "fatigue", "value": "fatigue"}, {"label": "weight gain", "value": "weight_gain"}, {"label": "anxiety", "value": "anxiety"}, {"label": "cold hands and feets", "value": "cold_hands_and_feets"}, {"label": "mood swings", "value": "mood_swings"}, {"label": "weight loss", "value": "weight_loss"}, {"label": "restlessness", "value": "restlessness"}, {"label": "lethargy", "value": "lethargy"}, {"label": "patches in throat", "value": "patches_in_throat"}, {"label": "irregular sugar level", "value": "irregular_sugar_level"}, {"label": "cough", "value": "cough"}, {"label": "high fever", "value": "high_fever"}, {"label": "sunken eyes", "value": "sunken_eyes"}, {"label": "breathlessness", "value": "breathlessness"}, {"label": "sweating", "value": "sweating"}, {"label": "dehydration", "value": "dehydration"}, {"label": "indigestion", "value": "indigestion"}, {"label": "headache", "value": "headache"}, {"label": "yellowish skin", "value": "yellowish_skin"}, {"label": "dark urine", "value": "dark_urine"}, {"label": "nausea", "value": "nausea"}, {"label": "loss of appetite", "value": "loss_of_appetite"}, {"label": "pain behind the eyes", "value": "pain_behind_the_eyes"}, {"label": "back pain", "value": "back_pain"}, {"label": "constipation", "value": "constipation"}, {"label": "abdominal pain", "value": "abdominal_pain"}, {"label": "diarrhoea", "value": "diarrhoea"}, {"label": "mild fever", "value": "mild_fever"}, {"label": "yellow urine", "value": "yellow_urine"}, {"label": "yellowing of eyes", "value": "yellowing_of_eyes"}, {"label": "acute liver failure", "value": "acute_liver_failure"}, {"label": "fluid overload", "value": "fluid_overload"}, {"label": "swelling of stomach", "value": "swelling_of_stomach"}, {"label": "swelled lymph nodes", "value": "swelled_lymph_nodes"}, {"label": "malaise", "value": "malaise"}, {"label": "blurred and distorted vision", "value": "blurred_and_distorted_vision"}, {"label": "phlegm", "value": "phlegm"}, {"label": "throat irritation", "value": "throat_irritation"}, {"label": "redness of eyes", "value": "redness_of_eyes"}, {"label": "sinus pressure", "value": "sinus_pressure"}, {"label": "runny nose", "value": "runny_nose"}, {"label": "congestion", "value": "congestion"}, {"label": "chest pain", "value": "chest_pain"}, {"label": "weakness in limbs", "value": "weakness_in_limbs"}, {"label": "fast heart rate", "value": "fast_heart_rate"}, {"label": "pain during bowel movements", "value": "pain_during_bowel_movements"}, {"label": "pain in anal region", "value": "pain_in_anal_region"}, {"label": "bloody stool", "value": "bloody_stool"}, {"label": "irritation in anus", "value": "irritation_in_anus"}, {"label": "neck pain", "value": "neck_pain"}, {"label": "dizziness", "value": "dizziness"}, {"label": "cramps", "value": "cramps"}, {"label": "bruising", "value": "bruising"}, {"label": "obesity", "value": "obesity"}, {"label": "swollen legs", "value": "swollen_legs"}, {"label": "swollen blood vessels", "value": "swollen_blood_vessels"}, {"label": "puffy face and eyes", "value": "puffy_face_and_eyes"}, {"label": "enlarged thyroid", "value": "enlarged_thyroid"}, {"label": "brittle nails", "value": "brittle_nails"}, {"label": "swollen extremeties", "value": "swollen_extremeties"}, {"label": "excessive hunger", "value": "excessive_hunger"}, {"label": "extra marital contacts", "value": "extra_marital_contacts"}, {"label": "drying and tingling lips", "value": "drying_and_tingling_lips"}, {"label": "slurred speech", "value": "slurred_speech"}, {"label": "knee pain", "value": "knee_pain"}, {"label": "hip joint pain", "value": "hip_joint_pain"}, {"label": "muscle weakness", "value": "muscle_weakness"}, {"label": "stiff neck", "value": "stiff_neck"}, {"label": "swelling joints", "value": "swelling_joints"}, {"label": "movement stiffness", "value": "movement_stiffness"}, {"label": "spinning movements", "value": "spinning_movements"}, {"label": "loss of balance", "value": "loss_of_balance"}, {"label": "unsteadiness", "value": "unsteadiness"}, {"label": "weakness of one body side", "value": "weakness_of_one_body_side"}, {"label": "loss of smell", "value": "loss_of_smell"}, {"label": "bladder discomfort", "value": "bladder_discomfort"}, {"label": "foul smell of urine", "value": "foul_smell_of urine"}, {"label": "continuous feel of urine", "value": "continuous_feel_of_urine"}, {"label": "passage of gases", "value": "passage_of_gases"}, {"label": "internal itching", "value": "internal_itching"}, {"label": "toxic look (typhos)", "value": "toxic_look_(typhos)"}, {"label": "depression", "value": "depression"}, {"label": "irritability", "value": "irritability"}, {"label": "muscle pain", "value": "muscle_pain"}, {"label": "altered sensorium", "value": "altered_sensorium"}, {"label": "red spots over body", "value": "red_spots_over_body"}, {"label": "belly pain", "value": "belly_pain"}, {"label": "abnormal menstruation", "value": "abnormal_menstruation"}, {"label": "dischromic  patches", "value": "dischromic _patches"}, {"label": "watering from eyes", "value": "watering_from_eyes"}, {"label": "increased appetite", "value": "increased_appetite"}, {"label": "polyuria", "value": "polyuria"}, {"label": "family history", "value": "family_history"}, {"label": "mucoid sputum", "value": "mucoid_sputum"}, {"label": "rusty sputum", "value": "rusty_sputum"}, {"label": "lack of concentration", "value": "lack_of_concentration"}, {"label": "visual disturbances", "value": "visual_disturbances"}, {"label": "receiving blood transfusion", "value": "receiving_blood_transfusion"}, {"label": "receiving unsterile injections", "value": "receiving_unsterile_injections"}, {"label": "coma", "value": "coma"}, {"label": "stomach bleeding", "value": "stomach_bleeding"}, {"label": "distention of abdomen", "value": "distention_of_abdomen"}, {"label": "history of alcohol consumption", "value": "history_of_alcohol_consumption"}, {"label": "fluid overload.1", "value": "fluid_overload.1"}, {"label": "blood in sputum", "value": "blood_in_sputum"}, {"label": "prominent veins on calf", "value": "prominent_veins_on_calf"}, {"label": "palpitations", "value": "palpitations"}, {"label": "painful walking", "value": "painful_walking"}, {"label": "pus filled pimples", "value": "pus_filled_pimples"}, {"label": "blackheads", "value": "blackheads"}, {"label": "scurring", "value": "scurring"}, {"label": "skin peeling", "value": "skin_peeling"}, {"label": "silver like dusting", "value": "silver_like_dusting"}, {"label": "small dents in nails", "value": "small_dents_in_nails"}, {"label": "inflammatory nails", "value": "inflammatory_nails"}, {"label": "blister", "value": "blister"}, {"label": "red sore around nose", "value": "red_sore_around_nose"}, {"label": "yellow crust ooze", "value": "yellow_crust_ooze"}]';

const options = JSON.parse(jsonString);

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: [],
      showdisease: false,
      disease: undefined,
      showInfoCards: false,
      info:undefined,
      loading: false ,
      errmsg:false
    };
  }

  handleClick = async () => {
    this.setState({ loading: true }); // Show loader
    const { selected } = this.state;
    console.log(selected);
    console.log("button clicked");
    const url = "https://dps-flaskserver.onrender.com/predict";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({"data":selected})
    };
    const response = await fetch(url, options);
    const res = await response.json();
    console.log(res);
    this.setState({
      showdisease: true,
      errmsg: false,
      disease: res.prediction,
      loading: false, // Hide loader
      showInfoCards: false
    });
  };

  // handleShowInfoCards = async () => {
  //   this.setState({ loading: true }); 
  //   const { disease } = this.state;

  //   if(disease!==undefined){
  //     const url = "https://dps-flaskserver.onrender.com/api/data";
  //   const options = {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify({"disease_name":disease})
  //   };
  //   const response = await fetch(url, options);
  //   const res = await response.json();
  //   console.log("response data");
  //   console.log(res[0])
  //   console.log(typeof(res));
  //   this.setState({
  //     info:res[0],
  //     loading: false // Hide loader
  //   });
  //   this.setState({ errmsg:false,showInfoCards: true });
  //   }
  //   else{
  //     this.setState({
  //       errmsg: true
  //     })
  //   }
    
  // };

  handleShowInfoCards = async () => {
    this.setState({ loading: true }); 
    const { disease } = this.state;
  
    try {
      if (disease !== undefined) {
        const url = "https://dps-flaskserver.onrender.com/api/data";
        const options = {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({"disease_name": disease})
        };
        const response = await fetch(url, options);
        const res = await response.json();
        
        if (res.length > 0) {
          this.setState({
            info: res[0],
            loading: false,
            errmsg: false,
            showInfoCards: true
          });
        } else {
          throw new Error("No information available for the selected disease.");
        }
      } else {
        throw new Error("No disease selected.");
      }
    } catch (error) {
      console.error("Error fetching information:", error.message);
      this.setState({
        errmsg: true,
        loading: false
      });
    }
  };
  

  render() {
    const { showdisease, disease, showInfoCards, loading,info ,errmsg} = this.state;

    // const hyperthyroidismData = {
    //   name: "Hyperthyroidism",
    //   lifestyle_changes: [
    //     "Take prescribed medications to manage thyroid function.",
    //     "Follow a well-balanced diet with adequate nutrients and calories.",
    //     "Engage in regular physical activity to support metabolism and overall health.",
    //     "Manage stress through relaxation techniques or therapy."
    //   ],
    //   recommended_foods: [
    //     "Calcium-rich foods (e.g., dairy products, leafy greens)",
    //     "Iodine-rich foods in moderation (e.g., seafood, dairy products)",
    //     "Lean proteins (e.g., chicken, fish, tofu)",
    //     "Whole grains (e.g., oats, brown rice)",
    //     "Fruits and vegetables (e.g., berries, leafy greens)"
    //   ],
    //   preventive_measures: [
    //     "Get regular thyroid function tests to monitor hormone levels.",
    //     "Avoid excessive consumption of iodine-rich foods if sensitive.",
    //     "Limit caffeine intake, as it can exacerbate symptoms of hyperthyroidism.",
    //     "Seek medical attention for symptoms such as rapid heartbeat, weight loss, and heat intolerance."
    //   ]
    // };

    return (
      <div>
        {loading && (
          <div className="loader-container">
            <div className="loader"></div>
          </div>
        )}
        <div className="quotes">
          <p className="quote left-to-right">"Early detection, better protection."</p>
          <p className="quote right-to-left">"Predict early, prevent early."</p>
        </div>
        <div className="header">
          <img src="https://res.cloudinary.com/dh61azok1/image/upload/v1717182274/Screenshot_2024-03-19_172809-removebg-preview_mrnvpl.png" alt="DiagnoMate Logo" className="logo" />
        </div>
        
        
       
        {showdisease && <h1>Predicted disease : {disease}</h1>}
        {!showdisease && <h1>Select Symptoms to Predict disease</h1>}
        {/* <pre>{JSON.stringify(this.state.selected)}</pre> */}
        <div className="testing">
          <MultiSelect
            options={options}
            value={this.state.selected}
            onChange={(selected) => this.setState({ selected })}
            labelledBy="Select"
            hasSelectAll={false}
            className="multi-select"
          />
          <button type="button" onClick={this.handleClick}>Predict</button>

        </div>
        <div className="secondSec">
          <div className="card1">
            {!showInfoCards && <button type="button" onClick={this.handleShowInfoCards}> Show Information Cards</button>}
            {errmsg && <p>Information Not available,Please Predict the disease if not predicted to get information</p>}
            {showInfoCards && <InformationCards {...info} />}
          </div>
          
        </div>
      </div>
    );
  }
}

export default Home;
