import React from "react";
import './Skills.css'

const Skill = () => {
    const [skil] = React.useState({

        subSkill: " Technical Skills",

    });
    const [state] = React.useState([
        {
            id: 1,
            image: "https://tse3.mm.bing.net/th?id=OIP.gA_JbpMuWmmz6VvfJvGmQwHaIB&pid=Api&P=0&h=180",
            ex: "",

        },

        {
            id: 2,
            image: "https://cdn.freebiesupply.com/logos/large/2x/css3-logo-png-transparent.png",
            ex: "",

        },
        {
            id: 3,
            image: "https://tse2.mm.bing.net/th?id=OIP.XARcNUfxLdPxgBO2nM7u0gHaHa&pid=Api&P=0&h=180",
            ex: " ",

        },
        {
            id: 4,
            image: "https://tse1.mm.bing.net/th?id=OIP.GHPQTvkT3TqCadzvWvCZFgAAAA&pid=Api&P=0&h=180",
            ex: " ",

        },
        {
            id: 5,
            image: "https://th.bing.com/th?id=OIP.5PxGgx_aOWpTkul_D3nnbwHaEG&w=335&h=186&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
            ex: "",

        },
        {
            id: 6,
            image: "https://tse4.mm.bing.net/th?id=OIP.VGkR7xeJBxG7Sd7GIJxmkQHaHa&pid=Api&P=0&h=180",
            ex: "",

        },
        {
            id: 7,
            image: "https://tse4.mm.bing.net/th?id=OIP.0rHhkJGjUw37i-wGtakm3AHaHa&pid=Api&P=0&h=180",
            ex: "",

        },
        
        {
            id: 9,
            image: "https://tse4.mm.bing.net/th?id=OIP.LhXHhk4dzA6GohB97JkzOgAAAA&pid=Api&P=0&h=180",
            ex: " ",

        },

    ]);
    return (
        <>

        <div className="services__skill">


            <div className="common-skill">
                
                <h1 className="mainskill">{skil.subSkill}</h1>

                <div className="commonBorder"></div>
            </div>

            <div className="row skill">
                {state.map((info) => (
                    <div className="col-4 skill">
                        <div className="skill__box">
                            <img src={info.image} alt="logo" className='skill-img' />
                            <p className="skill__box-header">{info.ex}</p>

                        </div>
                    </div>
                ))}
            </div>

{/* ------------------Basics Knowledge--------------- */}

            
        </div>
        

        <div className="common-basic">

                <h2 className="mainbasic">--- Basic Knowledge of this Tools ---</h2>

                <div className="commonBorder"></div>
            </div>

            <div className="row-basic">
                {/* {state.map((info ,index) => ( */}
                    <div className="col-4-basic">
                        <div className="basic__box">
                            <img src="https://tse1.mm.bing.net/th?id=OIP.2GKptUkLNFMiHotyWbeejwAAAA&pid=Api&P=0&h=180" alt="logo" className='basic-img' />
                        <p className="basic__box-header"> Basic Knowledge of TypeScript</p>

                        <img src="https://tse3.mm.bing.net/th?id=OIP.o322wMsaVumjRVoni-LnjwAAAA&pid=Api&P=0&h=180" alt="logo" className='basic-img' />
                        <p className="basic__box-header">Basic Knowledge of Angular</p>

                        <img src="https://tse3.mm.bing.net/th?id=OIP.ZnueMtqylJeVV4sVhGgdzgAAAA&pid=Api&P=0&h=180" alt="logo" className='basic-img' />
                        <p className="basic__box-header">Basic Knowledge of React Native</p>

                        <img src="https://tse3.mm.bing.net/th?id=OIP.KhvODYWD1PrpVTzowfFPPAAAAA&pid=Api&P=0&h=180" alt="logo" className='basic-img' />
                        <p className="basic__box-header">Basic Knowledge of Next js</p>

                        <img src="https://tse3.mm.bing.net/th?id=OIP.COvz0L3FUapYYbsQHHZ90gHaFj&pid=Api&P=0&h=180" alt="logo" className='basic-img' />
                        <p className="basic__box-header">Basic Knowledge of Node js</p>

                        <img src="https://tse1.mm.bing.net/th?id=OIP.C_fpD1wS-LugVknSn1VKcQHaDs&pid=Api&P=0&h=180" alt="logo" className='basic-img' />
                        <p className="basic__box-header">Basic Knowledge of Express js</p>

                        <img src="https://tse1.mm.bing.net/th?id=OIP.DiNIG4Bfpm65_wwXf_JwMAHaHa&pid=Api&P=0&h=180" alt="logo" className='basic-img' />
                        <p className="basic__box-header">Basic Knowledge of Mongo DB js</p>
                        </div>
                    </div>
                {/* ))} */}
            </div>
        </>

    );
};

export default Skill;
