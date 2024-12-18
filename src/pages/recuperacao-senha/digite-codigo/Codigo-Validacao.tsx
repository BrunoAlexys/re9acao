import React, { useState } from 'react';
import Logo from './assets/logo.png';
import { DiagonalSection } from '../../../components/diagonal-section/DiagonalSection';
import { useNavigate } from 'react-router-dom';

export const RecuperacaoDeSenhaP2 = () => {
    const navigate = useNavigate();
    const [code, setCode] = useState(['', '', '', '', '', '']);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const newCode = [...code];
        newCode[index] = e.target.value;
        setCode(newCode)
        if (e.target.value.length === 1 && index < 5) {
            document.getElementById(`input${index + 2}`)?.focus();
        }
    };

    const verifyCode = () => {
        const fullCode = code.join('');
        alert(`Código inserido: ${fullCode}`);
    };

    return (
        <div className='flex flex-col items-center justify-center'>
            <DiagonalSection text="Redefinir" subtext="Senha" />
            <div className="flex-col flex justify-center items-center bg-white border-[2px] border-[#3C68C5] shadow-[4px_4px_10px_rgba(0,0,0,0.25)] rounded-3xl p-6 w-[340px] sm:w-[340px] md:w-[450px] h-[430px] sm:h-[540px] xl:mt-auto mt-14 sm:mt-3 md:mt-28 lg:mt-3 sm:mb-5 lg:mb-9 aspect-[521/609] mx-auto text-center">

                <div className="pb-4 flex justify-center mb-2 sm:mb-3 md:mb-5">
                    <img src={Logo} alt="Logo da empresa" className="h-20 sm:h-24 w-auto" />
                </div>

                <p className="text-gray-950 align-middle mb-5 text-base sm:text-sm md:text-lg">
                    Verifique o código no seu E-mail
                </p>

                <div className="mb-8">
                    <label className="block text-gray-950 text-base sm:text-lg font-bold mb-1" htmlFor="codigo">
                        Digite o Código
                    </label>
                    <div className="flex justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-5 mb-4">
                        {[0, 1, 2, 3, 4, 5].map((index) => (
                            <input
                                key={index}
                                type="text"
                                maxLength={1}
                                id={`input${index + 1}`}
                                value={code[index]}
                                onChange={(e) => handleChange(e, index)}
                                className="shadow-md appearance-none border border-[#0C3EA6] rounded-lg w-10 h-10 text-center text-lg font-bold text-gray-700 focus:outline-none focus:shadow-outline"
                            />
                        ))}
                    </div>
                    <button
                        onClick={verifyCode}
                        className="text-black font-bold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline"
                    >
                        reenviar código
                    </button>
                </div>

                <div className="flex justify-center items-end gap-2 mt-15">
                    <button
                        className="text-[#0C3EA6] font-bold md:text-xl py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        onClick={() => navigate('/recuperacaop1')}
                    >
                        Cancelar
                    </button>
                    <button
                        className="bg-blue-900 text-white font-bold md:text-xl py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline hover:bg-blue-700"
                        onClick={() => navigate('/recuperacaop3')}
                    >
                        Enviar
                    </button>
                </div>
            </div>
        </div>
    );
};
