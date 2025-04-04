import React from 'react'
import {
  FaEnvelope,
  FaPhone,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa" 


const Page1 = () => {
  return (
    <>
      <div>
        <div className=" flex flex-col items-center py-6 px-3">
          <h2 className="text-5xl text-center mt-4 text-gray-900 mb-6" style={{ fontFamily: "Times New Roman" }}>
            Essential Amino Acid - Its Uses and Benefits for our Body.
          </h2>
          <hr class=" p-3 border-gray-300 border-t-2 w-1/4  transition-all duration-100 m-0"></hr>
          <img src="https://anmolchem.org/assets/images/blog/Untitled-2.psdessential-amino-acids-in.png" className="w-1/3 h-auto object-cover rounded-xl mb-4" />
          <p>Uploaded By:admin | 12th August 2024</p><br />
        </div>

        <div className="flex flex-col py-6 px-15 text-lg" style={{ fontFamily: "Graphik" }}>
          <p>
            <a href="/#" className='text-yellow-900'><b>Essential Amino Acids</b></a> are organic compounds that our body needs to function well. Our body doesn't synthesize it on its own you need to take it from a diet.
          </p>
          <p>Amino acids are also referred to as the building blocks of proteins and also play an important role in our body. We need amino acids for important processes such as building proteins, hormones, and neurotransmitters.</p>
          <p>
            Amino acids are rich in foods such as meat, fish, and soybeans. Some people take amino acids in the form of supplements tablets, to boost their performance or improve blood.
          </p><br />
          <h5 className='text-lg font-bold'>
            What are essential amino acids?
          </h5>
          <p>Amino acids are organic compounds which is composed of nitrogen, carbon, hydrogen, and oxygen. Our body needs 20 different types of amino acids to grow and perform properly. All of these 20 amino acids are important for our health. From that we have discussed the Nine essential amino acid.</p>
          <p>They are Histidine, isoleucine, leucine, valine, lysine, methionine, phenylalanine, threonine, and tryptophan. Though our body can make nonessential amino acids, it cannot make essential amino acids, so we have to take it from our diet.</p>
          <p>The best sources of essential amino acids one can get are - animal proteins such as meat, eggs, and poultry.</p>
          <p>
            However, there are some plant foods, such as the soya product – tofu which contain all nine essential amino acids.
          </p><br />
          <h5 className='text-lg font-bold'>
            How many essential amino acids are there?
          </h5>
          <p>There are 9 essential amino acids</p><br />
          <ul class="list-disc">
            <li>
              <b>Phenylalanine</b> - Our body turns this amino acid into neurotransmitter tyrosine, dopamine, epinephrine, and norepinephrine. It plays a crucial role in the functions of proteins, enzymes, and the production of other amino acids.
            </li>
            <li>
              <b>Valine </b> - This amino acid is not produced directly in your body, it needs to be taken from diet only.Valine is Branched chain amino acid.Branched-chain amino acids are used in our body to make energy. Valine is mainly found in protein food sources such as meat, fish, soy, and dairy products.
            </li>
            <li>
              <b>Threonine </b> - Threonine is important for skin development and connective tissue formation; involved in fat metabolism and immune function.
            </li>
            <li>
              <b>Tryptophan </b> - It is associated with drowsiness,trptophan is a precursor to serotonin which is a neurotransmitter that regulates our appetite, sleep, and mood.
            </li>
            <li>
              <b>Methionine </b> - This amino acid plays a vital role in metabolism and detoxification. It is also necessary for the tissue growth.
            </li>
            <li>
              <b>Leucine </b> - Like valine, leucine is a BCAA which is important for protein synthesis, muscle growth and repair. By taking it in our diet it regulates our blood sugar levels.
            </li>
            <li>
              <b>Isoleucine</b> - Isoleucine helps in maintaining muscle metabolism and muscle tissue. It is also important for immune function, haemoglobin production, and energy maintenance.
            </li>
            <li>
              <b>Lysine </b> - Lysine plays major roles in protein synthesis, calcium absorption, and in the production of hormones and enzymes. It is also important for energy production, immune function, and collagen production.
            </li>
            <li>
              <b>Histidine </b> - Our body uses this amino acid to produce histamine, which is a neurotransmitter that is important to immune response, digestion, and sexual function. It is very important for maintaining the myelin sheath, a protective barrier that protects our nerve cells.
            </li>
          </ul>

          <div className=" flex flex-col items-center py-6 px-3">
            <img src="https://anmolchem.org/assets/images/blog/pic-2.png" className="w-1/3 h-auto object-cover rounded-xl mb-4" />
            <p className="text-lg font-bold">
              Food sources and recommended intake
            </p>
          </div>
          <div className="flex flex-col py-6 px-3">
            <p>As we know our body does not produce essential amino acid we need to take it from diet.</p>
            <p>Here we have found by researching the daily required intakes for the essential amino acids, according to the World Health Organization. These values mentioned below are for adults per 2.2 lb (1 kg) of body weight (29):
            </p><br />
            <ul class="list-disc">
              <li><b>Histidine:</b> 10 milligrams (mg)</li>
              <li><b>Isoleucine:</b> 20 mg</li>
              <li><b>Leucine:</b> 39 mg</li>
              <li><b>Lysine:</b> 30 mg</li>
              <li><b>Methionine:</b> 10.4 mg</li>
              <li><b>Phenylalanine is combined with the nonessential amino acid tyrosine:</b> 25 mg</li>
              <li><b>Threonine:</b> 15 mg</li>
              <li><b>Tryptophan:</b> 4 mg</li>
              <li><b>Valine:</b> 26 mg</li>
            </ul>
          </div>
          <div className=" flex flex-col items-center py-6 px-3">
            <img src="https://anmolchem.org/assets/images/blog/picture-3.png" className="w-1/3 h-auto object-cover rounded-xl mb-4" />
            <p className='text-lg font-bold'>
              Foods that 9 essential amino acids contain are
            </p>
          </div>
          <div className="flex flex-col py-6 px-3">

            <ul class="list-disc">
              <li>Meat</li>
              <li>Seafood</li>
              <li>Poultry</li>
              <li>Eggs</li>
              <li>Dairy products</li>
            </ul>
            <br />
            <p>Soya and pea protein are plant-based protein for vegetarian people.</p>
            <p>There are other plant-based sources of protein, such as beans, nuts, and some grains, are considered incomplete proteins because they lack one or more of the essential amino acids.</p>
            <p>However, if an individual is following a plant-based diet, still we can ensure proper intake of all nine essential amino acids by eating a variety of plant proteins each day.</p><br />
            <p className='font-bold'>Conclusion</p>
            <p>There are nine essential amino acids, which we must get through our daily diet — histidine, isoleucine, leucine, lysine, methionine, phenylalanine, threonine, tryptophan, and valine.</p>
            <p>They are important for our day-to-day functions, including protein synthesis, tissue repair, and nutrient absorption.</p>
            <p>These important compounds are found in many animal and plant-based foods. Most of us can manage a balanced diet and healthy lifestyle. We can even take essential amino acid supplements if needed.</p><br />
            <p className='font-bold'>Follow us on Social Media : </p>
            <div className="flex space-x-5">
              <FaFacebookF className="text-[#0008ba]" />
              <FaLinkedinIn className="text-[#6ba3e0]" />
              <FaInstagram className="text-[#ba00b3]" />
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Page1


