const getPredictedAge = async (name:string) => {
 const res = await fetch(`https://api.agify.io?${name}`);
 return res.json();
}

const getPredictedGender = async (name:string) => {
    const res = await fetch(`https://api.genderize.io?${name}`);
    return res.json();
   }

const getPredictedCountry = async (name:string) => {
    const res = await fetch(`https://api.nationalize.io?${name}`);
    return res.json();
   }

interface Params {
    params:{name:string}
}

export  default async function Page({params}:Params)  {
    const ageData = getPredictedAge(params.name);
    const countryData = getPredictedCountry(params.name);
    const genderData = getPredictedGender(params.name);

    const [age,country,gender] = await Promise.all([ageData,countryData,genderData]);
    return (
    <div className="flex items-center justify-center h-screen">
        <div><h1>Personal Info</h1></div>
        <div>Age:{age?.age}</div>
        <div>Gender:{gender?.gender}</div>
        <div>Country:</div>
    </div>
        );
}